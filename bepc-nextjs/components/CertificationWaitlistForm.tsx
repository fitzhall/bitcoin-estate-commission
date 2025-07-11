'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function CertificationWaitlistForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    state: '',
    yearsExperience: '',
    firmSize: '',
    bitcoinInterest: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          firstName: formData.firstName,
          userType: 'certification_waitlist',
          source: 'certification-waitlist',
          customFields: {
            last_name: formData.lastName,
            state: formData.state,
            years_experience: formData.yearsExperience,
            firm_size: formData.firmSize,
            bitcoin_interest: formData.bitcoinInterest,
          },
        }),
      })

      if (response.ok) {
        // Redirect to success page
        router.push('/certification/waitlist-success')
      } else {
        throw new Error('Failed to join waitlist')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      alert('There was an error joining the waitlist. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <div className="grid md:grid-cols-2 gap-6">
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
      </div>

      <div className="mt-6">
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

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="state" className="block text-sm font-medium text-gray-700 mb-2">
            Primary State of Practice *
          </label>
          <input
            type="text"
            id="state"
            required
            placeholder="e.g., NY, CA, TX"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.state}
            onChange={(e) => setFormData({ ...formData, state: e.target.value })}
          />
        </div>

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
            <option value="2-5">2-5 years</option>
            <option value="6-10">6-10 years</option>
            <option value="11-20">11-20 years</option>
            <option value="20+">20+ years</option>
          </select>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="firmSize" className="block text-sm font-medium text-gray-700 mb-2">
            Firm Size
          </label>
          <select
            id="firmSize"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.firmSize}
            onChange={(e) => setFormData({ ...formData, firmSize: e.target.value })}
          >
            <option value="">Select size</option>
            <option value="solo">Solo Practice</option>
            <option value="small">2-10 attorneys</option>
            <option value="medium">11-50 attorneys</option>
            <option value="large">50+ attorneys</option>
          </select>
        </div>

        <div>
          <label htmlFor="bitcoinInterest" className="block text-sm font-medium text-gray-700 mb-2">
            Current Bitcoin/Crypto Interest
          </label>
          <select
            id="bitcoinInterest"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.bitcoinInterest}
            onChange={(e) => setFormData({ ...formData, bitcoinInterest: e.target.value })}
          >
            <option value="">Select interest level</option>
            <option value="none">No experience yet</option>
            <option value="personal">Personal investor</option>
            <option value="curious">Professionally curious</option>
            <option value="active">Already advising clients</option>
          </select>
        </div>
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Joining Waitlist...' : 'Join the Waitlist'}
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        * Required fields. You can unsubscribe at any time.
      </p>
    </form>
  )
}