#!/usr/bin/env node

// ConvertKit Attorney Directory Form Setup Script
// Run with: node scripts/setup-attorney-form.js

require('dotenv').config({ path: '.env.local' });

const CONVERTKIT_API_URL = 'https://api.convertkit.com/v3';
const API_KEY = process.env.CONVERTKIT_API_KEY;
const API_SECRET = process.env.CONVERTKIT_API_SECRET;

if (!API_KEY || !API_SECRET) {
  console.error('❌ ConvertKit API keys not found in .env.local');
  console.error('Please add CONVERTKIT_API_KEY and CONVERTKIT_API_SECRET to your .env.local file');
  process.exit(1);
}

async function createAttorneyForm() {
  try {
    console.log('🚀 Creating Attorney Directory Listing form in ConvertKit...');

    // Create the form
    const formResponse = await fetch(`${CONVERTKIT_API_URL}/forms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        name: 'BEPC Attorney Directory Listing',
        format: 'inline',
        status: 'active',
        description: 'Form for attorneys to apply for BEPC directory listing',
      }),
    });

    if (!formResponse.ok) {
      throw new Error(`Failed to create form: ${await formResponse.text()}`);
    }

    const form = await formResponse.json();
    console.log(`✅ Form created with ID: ${form.id}`);

    // Create custom fields for attorney data
    const customFields = [
      { label: 'bar_number', name: 'Bar Number' },
      { label: 'law_firm', name: 'Law Firm' },
      { label: 'years_experience', name: 'Years of Experience' },
      { label: 'bitcoin_experience', name: 'Bitcoin Experience' },
      { label: 'states_licensed', name: 'States Licensed' },
      { label: 'phone', name: 'Phone Number' },
      { label: 'website', name: 'Website' },
      { label: 'linkedin', name: 'LinkedIn Profile' },
      { label: 'specialties', name: 'Practice Specialties' },
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
            api_key: API_KEY,
            label: field.label,
            name: field.name,
          }),
        });

        if (fieldResponse.ok) {
          console.log(`✅ Created field: ${field.name}`);
        } else {
          const error = await fieldResponse.text();
          if (error.includes('already exists')) {
            console.log(`ℹ️  Field already exists: ${field.name}`);
          } else {
            console.error(`❌ Failed to create field ${field.name}: ${error}`);
          }
        }
      } catch (error) {
        console.error(`❌ Error creating field ${field.name}:`, error);
      }
    }

    // Create tags for attorney segmentation
    const tags = [
      'attorney',
      'directory_applicant',
      'pending_review',
      'approved_listing',
      'bepc_certified',
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
            api_key: API_KEY,
            name: tagName,
          }),
        });

        if (tagResponse.ok) {
          console.log(`✅ Created tag: ${tagName}`);
        } else {
          const error = await tagResponse.text();
          if (error.includes('already exists')) {
            console.log(`ℹ️  Tag already exists: ${tagName}`);
          } else {
            console.error(`❌ Failed to create tag ${tagName}: ${error}`);
          }
        }
      } catch (error) {
        console.error(`❌ Error creating tag ${tagName}:`, error);
      }
    }

    // Create an email sequence for attorney applicants
    console.log('📧 Creating attorney welcome sequence...');
    
    const sequenceResponse = await fetch(`${CONVERTKIT_API_URL}/sequences`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        api_key: API_KEY,
        name: 'Attorney Directory Application Sequence',
      }),
    });

    if (sequenceResponse.ok) {
      const sequence = await sequenceResponse.json();
      console.log(`✅ Sequence created with ID: ${sequence.id}`);
    } else {
      console.log('ℹ️  Sequence may already exist');
    }

    console.log('\n🎉 Setup complete!');
    console.log('\n📋 Next steps:');
    console.log('1. Log into ConvertKit and customize the form fields');
    console.log('2. Set up the email sequence for attorney applicants');
    console.log('3. Configure the form redirect URL to /attorney-application-success');
    console.log(`4. Add this form ID to your website: ${form.id}`);
    console.log('\n🔗 Form embed code will be available at:');
    console.log(`   https://app.convertkit.com/forms/designers/${form.id}/edit`);

  } catch (error) {
    console.error('❌ Error setting up ConvertKit:', error);
  }
}

// Run the setup
createAttorneyForm();