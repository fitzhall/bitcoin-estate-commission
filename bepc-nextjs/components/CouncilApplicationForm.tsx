'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

export function CouncilApplicationForm() {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    title: '',
    organization: '',
    linkedin: '',
    expertise: '',
    yearsExperience: '',
    bitcoinExperience: '',
    contribution: '',
    vision: '',
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
          userType: 'council_applicant',
          source: 'council-application',
          customFields: {
            last_name: formData.lastName,
            title: formData.title,
            organization: formData.organization,
            linkedin: formData.linkedin,
            expertise: formData.expertise,
            years_experience: formData.yearsExperience,
            bitcoin_experience: formData.bitcoinExperience,
            contribution: formData.contribution,
            vision: formData.vision,
          },
        }),
      })

      if (response.ok) {
        // Redirect to success page
        router.push('/council/application-success')
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
          <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-2">
            Professional Title *
          </label>
          <input
            type="text"
            id="title"
            required
            placeholder="e.g., Partner, Senior Tax Attorney"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
          />
        </div>

        <div>
          <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-2">
            Organization *
          </label>
          <input
            type="text"
            id="organization"
            required
            placeholder="Law firm, company, or institution"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.organization}
            onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
          />
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="linkedin" className="block text-sm font-medium text-gray-700 mb-2">
          LinkedIn Profile URL
        </label>
        <input
          type="url"
          id="linkedin"
          placeholder="https://linkedin.com/in/yourprofile"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.linkedin}
          onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="expertise" className="block text-sm font-medium text-gray-700 mb-2">
          Area of Expertise *
        </label>
        <select
          id="expertise"
          required
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          value={formData.expertise}
          onChange={(e) => setFormData({ ...formData, expertise: e.target.value })}
        >
          <option value="">Select your primary expertise</option>
          <option value="estate-planning">Estate Planning Law</option>
          <option value="tax-strategy">Tax Strategy & Planning</option>
          <option value="bitcoin-technology">Bitcoin/Cryptocurrency Technology</option>
          <option value="digital-assets">Digital Asset Management</option>
          <option value="trust-fiduciary">Trust & Fiduciary Services</option>
          <option value="regulatory-compliance">Regulatory Compliance</option>
          <option value="other">Other</option>
        </select>
      </div>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div>
          <label htmlFor="yearsExperience" className="block text-sm font-medium text-gray-700 mb-2">
            Years of Professional Experience *
          </label>
          <select
            id="yearsExperience"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.yearsExperience}
            onChange={(e) => setFormData({ ...formData, yearsExperience: e.target.value })}
          >
            <option value="">Select years</option>
            <option value="5-10">5-10 years</option>
            <option value="11-20">11-20 years</option>
            <option value="20+">20+ years</option>
          </select>
        </div>

        <div>
          <label htmlFor="bitcoinExperience" className="block text-sm font-medium text-gray-700 mb-2">
            Bitcoin/Digital Asset Experience *
          </label>
          <select
            id="bitcoinExperience"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
            value={formData.bitcoinExperience}
            onChange={(e) => setFormData({ ...formData, bitcoinExperience: e.target.value })}
          >
            <option value="">Select experience level</option>
            <option value="personal">Personal investor/enthusiast</option>
            <option value="professional-1-3">1-3 years professional</option>
            <option value="professional-3+">3+ years professional</option>
            <option value="expert">Recognized expert</option>
          </select>
        </div>
      </div>

      <div className="mt-6">
        <label htmlFor="contribution" className="block text-sm font-medium text-gray-700 mb-2">
          How would you contribute to the Advisory Council? *
        </label>
        <textarea
          id="contribution"
          required
          rows={4}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Describe your unique perspective, expertise, and how you would contribute to advancing Bitcoin estate planning standards..."
          value={formData.contribution}
          onChange={(e) => setFormData({ ...formData, contribution: e.target.value })}
        />
      </div>

      <div className="mt-6">
        <label htmlFor="vision" className="block text-sm font-medium text-gray-700 mb-2">
          Your Vision for Bitcoin Estate Planning
        </label>
        <textarea
          id="vision"
          rows={3}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
          placeholder="Share your vision for the future of Bitcoin inheritance and estate planning..."
          value={formData.vision}
          onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
        />
      </div>

      <div className="mt-8">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full btn btn-primary btn-lg disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isSubmitting ? 'Submitting Application...' : 'Submit Council Application'}
        </button>
      </div>

      <p className="text-xs text-gray-500 mt-4 text-center">
        * Required fields. Applications are reviewed quarterly. Selected candidates will be contacted for interviews.
      </p>
    </form>
  )
}