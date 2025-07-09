import { NextRequest, NextResponse } from 'next/server'
import { safeDb } from '@/lib/database'

// ConvertKit API configuration
const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3'
const CONVERTKIT_API_KEY = process.env.CONVERTKIT_API_KEY
const CONVERTKIT_API_SECRET = process.env.CONVERTKIT_API_SECRET

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, firstName, userType, source } = body

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 })
    }

    // Extract location info from source if it's a page URL
    let state = null
    let city = null
    if (source && typeof source === 'string') {
      const urlMatch = source.match(/\/([a-z]{2})\/([^\/]+)\//)
      if (urlMatch) {
        state = urlMatch[1].toUpperCase()
        city = urlMatch[2].replace(/-/g, ' ')
      }
    }

    // Try to save to database
    try {
      // First, check if subscriber already exists
      const existingSubscriber = await safeDb.subscriber.findFirst({
        where: { email: email.toLowerCase() }
      })

      if (existingSubscriber) {
        // Update existing subscriber
        await safeDb.subscriber.update({
          where: { email: email.toLowerCase() },
          data: {
            firstName: firstName || existingSubscriber.firstName,
            userType: userType || existingSubscriber.userType,
            state: state || existingSubscriber.state,
            city: city || existingSubscriber.city,
            source: source || existingSubscriber.source,
            subscribed: true,
            lastActiveAt: new Date(),
            updatedAt: new Date(),
          }
        })
      } else {
        // Create new subscriber
        await safeDb.subscriber.create({
          data: {
            email: email.toLowerCase(),
            firstName,
            userType,
            state,
            city,
            source,
            lastActiveAt: new Date(),
          }
        })
      }
    } catch (dbError) {
      console.error('Database error:', dbError)
      // Continue with email service even if DB fails
    }

    // Send to ConvertKit
    try {
      await addToConvertKit(email, firstName, userType, state, city, source)
    } catch (emailError) {
      console.error('ConvertKit error:', emailError)
      // Still return success to user even if ConvertKit fails
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function addToConvertKit(
  email: string, 
  firstName?: string, 
  userType?: string,
  state?: string,
  city?: string,
  source?: string
) {
  if (!CONVERTKIT_API_KEY || !CONVERTKIT_API_SECRET) {
    console.log('ConvertKit API keys not configured')
    return
  }

  try {
    // First, we need to get the form ID for "bepc collection"
    // Let's get all forms to find the correct one
    const formsResponse = await fetch(
      `${CONVERTKIT_API_URL}/forms?api_key=${CONVERTKIT_API_KEY}`,
      { method: 'GET' }
    )
    
    const formsData = await formsResponse.json()
    console.log('Available forms:', formsData.forms?.map((f: any) => ({ id: f.id, name: f.name })))
    
    // Find the "bepc collection" form
    const bepcForm = formsData.forms?.find((form: any) => 
      form.name.toLowerCase().includes('bepc collection') || 
      form.name.toLowerCase().includes('bepc')
    )
    
    if (!bepcForm) {
      console.error('BEPC Collection form not found')
      // Still try to subscribe using the universal endpoint
    }

    // Subscribe to ConvertKit
    const subscribeData = {
      api_key: CONVERTKIT_API_KEY,
      email: email,
      first_name: firstName || '',
      fields: {
        user_type: userType || 'unknown',
        state: state || '',
        city: city || '',
        source: source || 'website',
      },
      tags: []
    }

    // Add tags based on user type
    if (userType === 'attorney') {
      subscribeData.tags.push('attorney')
    } else if (userType === 'bitcoin_holder') {
      subscribeData.tags.push('hodler', 'bitcoin_holder')
    }

    // Add location tags if available
    if (state) {
      subscribeData.tags.push(`state_${state.toLowerCase()}`)
    }

    // Subscribe to the form if we found it, otherwise use universal subscribe
    const subscribeUrl = bepcForm 
      ? `${CONVERTKIT_API_URL}/forms/${bepcForm.id}/subscribe`
      : `${CONVERTKIT_API_URL}/subscribers`

    const response = await fetch(subscribeUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(subscribeData),
    })

    if (!response.ok) {
      const errorData = await response.text()
      throw new Error(`ConvertKit API error: ${response.status} - ${errorData}`)
    }

    const result = await response.json()
    console.log('ConvertKit subscription successful:', result.subscription?.subscriber?.email_address)
    
    // ConvertKit will handle the welcome email with the PDF
    return result
  } catch (error) {
    console.error('ConvertKit integration error:', error)
    throw error
  }
}

// Add to safeDb in your database.ts file
declare module '@/lib/database' {
  interface SafeDb {
    subscriber: {
      findFirst: (args: any) => Promise<any>
      create: (args: any) => Promise<any>
      update: (args: any) => Promise<any>
    }
  }
} 