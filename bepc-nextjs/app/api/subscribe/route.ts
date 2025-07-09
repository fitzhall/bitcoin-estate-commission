import { NextRequest, NextResponse } from 'next/server'
import { safeDb } from '@/lib/database'

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

    // Send welcome email with PDF (integrate with your email service)
    try {
      await sendWelcomeEmail(email, firstName)
    } catch (emailError) {
      console.error('Email sending error:', emailError)
      // Still return success to user
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}

async function sendWelcomeEmail(email: string, firstName?: string) {
  // TODO: Integrate with your email service (Resend, ConvertKit, etc.)
  // For now, just log
  console.log(`Welcome email would be sent to: ${email} (${firstName})`)
  
  // Example Resend integration:
  /*
  const resend = new Resend(process.env.RESEND_API_KEY)
  
  await resend.emails.send({
    from: 'BEPC <hello@bitcoinestatecommission.org>',
    to: email,
    subject: 'Your Bitcoin Estate Planning Standards (Early Access)',
    html: `
      <h1>Welcome ${firstName ? firstName + '!' : '!'}</h1>
      <p>Here's your early access copy of the Bitcoin Estate Planning Standards...</p>
      <a href="https://bitcoinestatecommission.org/download/standards.pdf">Download PDF</a>
    `
  })
  */
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