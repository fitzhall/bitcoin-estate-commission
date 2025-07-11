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
    console.log('🚀 Setting up Certification Waitlist in ConvertKit...');

    // Use the manually created Certification Waitlist form
    const formId = 8298269;
    console.log(`✅ Using form: Certification Waitlist (ID: ${formId})`);

    // Create custom fields for waitlist data
    const customFields = [
      { label: 'last_name', name: 'Last Name' },
      { label: 'state', name: 'State' },
      { label: 'years_experience_waitlist', name: 'Years of Experience (Waitlist)' },
      { label: 'firm_size', name: 'Firm Size' },
      { label: 'bitcoin_interest', name: 'Bitcoin Interest Level' },
      { label: 'expected_launch_date', name: 'Expected Launch Date' },
    ];

    console.log('📝 Checking custom fields...');
    
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

    console.log('🏷️  Checking tags...');

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

    console.log('\n🎉 Certification Waitlist setup complete!');
    console.log('\n📋 Form Information:');
    console.log(`Form ID: ${formId}`);
    console.log('Form Name: Certification Waitlist');
    console.log('Form Type: Modal');
    console.log('Embed URL: https://backedbybitcoin.kit.com/279b4e5a3f');
    console.log('Embed JS: https://backedbybitcoin.kit.com/279b4e5a3f/index.js');
    console.log('Form UID: 279b4e5a3f');
    
    console.log('\n📋 Next steps:');
    console.log('1. Add the custom fields listed above to your form in ConvertKit');
    console.log('2. Configure form settings and design');
    console.log('3. Set up the nurture email sequence with pre-launch content');
    console.log('4. Configure the form redirect URL to /certification/waitlist-success');
    console.log(`5. Add this form to your website using form ID: ${formId}`);
    
    console.log('\n💻 Website Integration:');
    console.log('Add this to your HTML where you want the form:');
    console.log(`<script async data-uid="279b4e5a3f" src="https://backedbybitcoin.kit.com/279b4e5a3f/index.js"></script>`);
    console.log('\nOr use the form ID in your ConvertKit React component:');
    console.log(`<ConvertKitForm formId="${formId}" />`);
    
    console.log('\n🔗 ConvertKit Management URLs:');
    console.log(`   Form Editor: https://app.convertkit.com/forms/designers/${formId}/edit`);
    console.log('   Custom Fields: https://app.convertkit.com/custom_fields');
    console.log('   Tags: https://app.convertkit.com/tags');
    console.log('   Sequences: https://app.convertkit.com/sequences');
    
    console.log('\n📧 Suggested email sequence:');
    console.log('   - Welcome: Immediate confirmation + first resource');
    console.log('   - Week 1: "Why Bitcoin Estate Planning Matters" guide');
    console.log('   - Week 2: Case study of $12M Bitcoin inheritance failure');
    console.log('   - Week 4: "5 Questions Every Attorney Should Ask" checklist');
    console.log('   - Monthly: Updates on program development + exclusive content');

    console.log('\n🏷️  Available tags for segmentation:');
    console.log('   - certification_waitlist (all waitlist subscribers)');
    console.log('   - pre_launch (early access group)');
    console.log('   - founding_member_eligible (VIP tier)');
    console.log('   - certification_interest (general interest)');

  } catch (error) {
    console.error('❌ Error setting up ConvertKit:', error);
  }
}

// Run the setup
createCertificationWaitlist();