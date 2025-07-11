'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function AttorneyListingForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    barNumber: '',
    lawFirm: '',
    phone: '',
    website: '',
    linkedin: '',
    statesLicensed: '',
    yearsExperience: '',
    bitcoinExperience: '',
    specialties: '',
    referralSource: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // First, subscribe to ConvertKit with attorney tag
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          userType: 'attorney_applicant',
          source: 'attorney-directory-application',
          // Additional fields will be saved in ConvertKit custom fields
          customFields: {
            last_name: formData.lastName,
            bar_number: formData.barNumber,
            law_firm: formData.lawFirm,
            phone: formData.phone,
            website: formData.website,
            linkedin: formData.linkedin,
            states_licensed: formData.statesLicensed,
            years_experience: formData.yearsExperience,
            bitcoin_experience: formData.bitcoinExperience,
            specialties: formData.specialties,
            referral_source: formData.referralSource,
          },
        }),
      })

      if (response.ok) {
        // Redirect to success page
        router.push('/attorney-directory/application-success')
      } else {
        throw new Error('Failed to submit application')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error submitting your application. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-2 gap-6">
        {/* Contact Information */}
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
            First Name *
          </label>
          <input
            type="text"
            id="firstName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.firstName}
            onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
            Last Name *
          </label>
          <input
            type="text"
            id="lastName"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.lastName}
            onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email Address *
          </label>
          <input
            type="email"
            id="email"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number *
          </label>
          <input
            type="tel"
            id="phone"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.phone}
            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
          />
        </div>

        {/* Professional Information */}
        <div>
          <label htmlFor="barNumber" className="block text-sm font-medium text-gray-700 mb-2">
            Bar Number *
          </label>
          <input
            type="text"
            id="barNumber"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.barNumber}
            onChange={(e) => setFormData({ ...formData, barNumber: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="lawFirm" className="block text-sm font-medium text-gray-700 mb-2">
            Law Firm *
          </label>
          <input
            type="text"
            id="lawFirm"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.lawFirm}
            onChange={(e) => setFormData({ ...formData, lawFirm: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-2">
            Website
          </label>
          <input
            type="url"
            id="website"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            placeholder="https://example.com"
          />
        </div>

        <div>
          <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
            LinkedIn Profile
          </label>
          <input
            type="url"
            id="linkedin"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.linkedin}
            onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
            placeholder="https://linkedin.com/in/yourprofile"
          />
        </div>
      </div>

      {/* Experience Information */}
      <div className="mt-6">
        <label htmlFor="statesLicensed" className="block text-sm font-medium text-gray-700 mb-2">
          States Where Licensed to Practice *
        </label>
        <input
          type="text"
          id="statesLicensed"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.statesLicensed}
          onChange={(e) => setFormData({ ...formData, statesLicensed: e.target.value })}
          placeholder="e.g., NY, CA, TX"
        />
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-700 mb-2">
            Years of Estate Planning Experience *
          </label>
          <select
            id="yearsExperience"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.yearsExperience}
            onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
          >
            <option value="">Select years</option>
            <option value="3-5">3-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="11-20">11-20 years</option>
            <option value="20+">20+ years</option>
          </select>
        </div>

        <div>
          <label htmlFor="bitcoinExperience" className="block text-sm font-medium text-gray-700 mb-2">
            Bitcoin/Crypto Experience
          </label>
          <select
            id="bitcoinExperience"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.bitcoinExperience}
            onChange={(e) => setFormData({ ...formData, bitcoinExperience: e.target.value })}
          >
            <option value="">Select experience level</option>
            <option value="none">No experience yet</option>
            <option value="personal">Personal investor only</option>
            <option value="some_clients">Advised 1-5 clients</option>
            <option value="many_clients">Advised 6+ clients</option>
            <option value="expert">Recognized expert</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="specialties" className="block text-sm font-medium text-gray-700 mb-2">
          Practice Areas & Specialties
        </label>
        <textarea
          id="specialties"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.specialties}
          onChange={(e) => setFormData({ ...formData, specialties: e.target.value })}
          placeholder="e.g., High net worth planning, business succession, international estates..."
        />
      </div>

      <div className="mt-6">
        <label htmlFor="referralSource" className="block text-sm font-medium text-gray-700 mb-2">
          How did you hear about BEPC?
        </label>
        <input
          type="text"
          id="referralSource"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.referralSource}
          onChange={(e) => setFormData({ ...formData, referralSource: e.target.value })}
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Application'}
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        * Required fields. Your information will be reviewed by our team and kept confidential.
      </p>
    </form>
  )
}