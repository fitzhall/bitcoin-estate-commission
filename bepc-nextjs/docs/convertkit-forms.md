# ConvertKit Form Configuration

## Form IDs Mapping

### Active Forms

1. **BEPC Collection Form** (General/Default)
   - Form ID: `8289232`
   - Used for: General email signups, education downloads, standards downloads
   - User Types: `bitcoin_holder`, `attorney`, general visitors

2. **Certification Waitlist Form**
   - Form ID: `8298269`
   - Used for: Bitcoin Estate Planning Certification waitlist signups
   - User Type: `certification_waitlist`
   - URL: `/certification/waitlist`
   - Success Page: `/certification/waitlist-success`

3. **Directory Request Form**
   - Form ID: `8298152`
   - Used for: Attorney directory listing applications
   - User Type: `attorney_applicant`
   - URL: `/attorney-directory/join`
   - Success Page: `/attorney-application-success`

## API Integration

The `/api/subscribe` endpoint automatically routes to the correct form based on the `userType` parameter:

```typescript
const FORM_IDS = {
  certification_waitlist: 8298269,  // Certification Waitlist form
  attorney_applicant: 8298152,      // Directory Request form
  default: 8289232                  // BEPC Collection form (general)
}
```

## Tags Applied

### Certification Waitlist
- `certification_waitlist`
- `pre_launch`
- `founding_member_eligible`

### Attorney Directory Applicants
- `attorney`
- `directory_applicant`
- `pending_review`

### General Subscribers
- `bitcoin_holder` (if specified)
- `attorney` (if specified)
- `state_[XX]` (if location detected)

## Custom Fields

### Certification Waitlist
- `last_name`
- `state`
- `years_experience_waitlist`
- `firm_size`
- `bitcoin_interest`
- `expected_launch_date`

### Attorney Directory
- `bar_number`
- `law_firm`
- `years_experience`
- `bitcoin_experience`
- `states_licensed`
- `phone`
- `website`
- `linkedin`
- `specialties`

## ConvertKit Management URLs

- Certification Form: https://app.convertkit.com/forms/designers/8298269/edit
- Directory Form: https://app.convertkit.com/forms/designers/8298152/edit
- General Form: https://app.convertkit.com/forms/designers/8289232/edit