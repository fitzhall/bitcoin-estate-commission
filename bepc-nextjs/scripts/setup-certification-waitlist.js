#!/usr/bin/env node

// ConvertKit Certification Waitlist Form Setup Script
// Run with: node scripts/setup-certification-waitlist.js

require('dotenv').config({ path: '.env.local' });

const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3';
const API_KEY = process.env.CONVERTKIT_API_KEY;
const API_SECRET = process.env.CONVERTKIT_API_SECRET;

if (!API_KEY || !API_SECRET) {
  console.error('❌ ConvertKit API keys not found in .env.local');
  console.error('Please add CONVERTKIT_API_KEY and CONVERTKIT_API_SECRET to your .env.local file');
  process.exit(1);
}

async function createCertificationWaitlist() {
  try {
    console.log('🚀 Creating Certification Waitlist form in ConvertKit...');

    // Create the form
    const formResponse = await fetch(`${CONVERTKIT_API_URL}/forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        name: 'BEPC Certification Waitlist',
        format: 'inline',
        status: 'active',
        description: 'Waitlist for Bitcoin Estate Planning Certification Program launching 2025',
      }),
    });

    if (!formResponse.ok) {
      throw new Error(`Failed to create form: ${await formResponse.text()}`);
    }

    const form = await formResponse.json();
    console.log(`✅ Form created with ID: ${form.id}`);

    // Create custom fields for waitlist data
    const customFields = [
      { label: 'last_name', name: 'Last Name' },
      { label: 'state', name: 'State' },
      { label: 'years_experience', name: 'Years of Experience' },
      { label: 'firm_size', name: 'Firm Size' },
      { label: 'bitcoin_interest', name: 'Bitcoin Interest Level' },
      { label: 'expected_launch_date', name: 'Expected Launch Date' },
    ];

    console.log('📝 Creating custom fields...');
    
    for (const field of customFields) {
      try {
        const fieldResponse = await fetch(`${CONVERTKIT_API_URL}/custom_fields`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_secret: API_SECRET,
            label: field.label,
            name: field.name,
          }),
        });

        if (fieldResponse.ok) {
          console.log(`✅ Created field: ${field.name}`);
        } else {
          const error = await fieldResponse.text();
          if (error.includes('already exists') || error.includes('duplicate')) {
            console.log(`ℹ️  Field already exists: ${field.name}`);
          } else {
            console.error(`❌ Failed to create field ${field.name}: ${error}`);
          }
        }
      } catch (error) {
        console.error(`❌ Error creating field ${field.name}:`, error);
      }
    }

    // Create tags for waitlist segmentation
    const tags = [
      'certification_waitlist',
      'pre_launch',
      'founding_member_eligible',
      'certification_interest',
    ];

    console.log('🏷️  Creating tags...');

    for (const tagName of tags) {
      try {
        const tagResponse = await fetch(`${CONVERTKIT_API_URL}/tags`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            api_secret: API_SECRET,
            name: tagName,
          }),
        });

        if (tagResponse.ok) {
          console.log(`✅ Created tag: ${tagName}`);
        } else {
          const error = await tagResponse.text();
          if (error.includes('already exists') || error.includes('duplicate')) {
            console.log(`ℹ️  Tag already exists: ${tagName}`);
          } else {
            console.error(`❌ Failed to create tag ${tagName}: ${error}`);
          }
        }
      } catch (error) {
        console.error(`❌ Error creating tag ${tagName}:`, error);
      }
    }

    // Create a waitlist nurture sequence
    console.log('📧 Creating waitlist nurture sequence...');
    
    const sequenceResponse = await fetch(`${CONVERTKIT_API_URL}/sequences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_secret: API_SECRET,
        name: 'Certification Waitlist Nurture Sequence',
      }),
    });

    if (sequenceResponse.ok) {
      const sequence = await sequenceResponse.json();
      console.log(`✅ Sequence created with ID: ${sequence.id}`);
    } else {
      const error = await sequenceResponse.text();
      if (error.includes('already exists') || error.includes('duplicate')) {
        console.log('ℹ️  Sequence already exists');
      } else {
        console.log('ℹ️  Sequence creation skipped');
      }
    }

    console.log('\n🎉 Setup complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Log into ConvertKit and customize the waitlist form');
    console.log('2. Set up the nurture email sequence with pre-launch content');
    console.log('3. Configure the form redirect URL to /certification/waitlist-success');
    console.log(`4. Add this form ID to your website: ${form.id}`);
    console.log('\n🔗 Form embed code will be available at:');
    console.log(`   https://app.convertkit.com/forms/designers/${form.id}/edit`);
    
    console.log('\n📧 Suggested email sequence:');
    console.log('   - Welcome: Immediate confirmation + first resource');
    console.log('   - Week 1: "Why Bitcoin Estate Planning Matters" guide');
    console.log('   - Week 2: Case study of $12M Bitcoin inheritance failure');
    console.log('   - Week 4: "5 Questions Every Attorney Should Ask" checklist');
    console.log('   - Monthly: Updates on program development + exclusive content');

  } catch (error) {
    console.error('❌ Error setting up ConvertKit:', error);
  }
}

// Run the setup
createCertificationWaitlist();