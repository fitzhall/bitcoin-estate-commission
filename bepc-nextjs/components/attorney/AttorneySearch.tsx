'use client'

import { useRouter, useSearchParams } from 'next/navigation'
import { useState, useCallback } from 'react'

const specializations = [
  { value: '', label: 'All Specializations' },
  { value: 'bitcoin-trust-planning', label: 'Bitcoin Trust Planning' },
  { value: 'cryptocurrency-inheritance', label: 'Cryptocurrency Inheritance' },
  { value: 'digital-asset-probate', label: 'Digital Asset Probate' },
  { value: 'multisig-estate-planning', label: 'Multisig Estate Planning' },
  { value: 'bitcoin-tax-planning', label: 'Bitcoin Tax Planning' },
]

const certificationLevels = [
  { value: '', label: 'All Levels' },
  { value: 'Foundation', label: 'Foundation' },
  { value: 'Advanced', label: 'Advanced' },
  { value: 'Expert', label: 'Expert' },
]

export function AttorneySearch() {
  const router = useRouter()
  const searchParams = useSearchParams()
  
  const [location, setLocation] = useState(searchParams.get('location') || '')
  const [specialization, setSpecialization] = useState(searchParams.get('specialization') || '')
  const [certification, setCertification] = useState(searchParams.get('certification') || '')

  const handleSearch = useCallback((e: React.FormEvent) => {
    e.preventDefault()
    
    const params = new URLSearchParams()
    if (location) params.set('location', location)
    if (specialization) params.set('specialization', specialization)
    if (certification) params.set('certification', certification)
    
    router.push(`/find-attorney?${params.toString()}`)
  }, [location, specialization, certification, router])

  const clearFilters = useCallback(() => {
    setLocation('')
    setSpecialization('')
    setCertification('')
    router.push('/find-attorney')
  }, [router])

  return (
    <form onSubmit={handleSearch} className="bg-white rounded-lg shadow-sm p-6">
      <div className="grid gap-4 md:grid-cols-4">
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, State or ZIP"
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          />
        </div>
        
        <div>
          <label htmlFor="specialization" className="block text-sm font-medium text-gray-700 mb-1">
            Specialization
          </label>
          <select
            id="specialization"
            value={specialization}
            onChange={(e) => setSpecialization(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            {specializations.map((spec) => (
              <option key={spec.value} value={spec.value}>
                {spec.label}
              </option>
            ))}
          </select>
        </div>
        
        <div>
          <label htmlFor="certification" className="block text-sm font-medium text-gray-700 mb-1">
            Certification Level
          </label>
          <select
            id="certification"
            value={certification}
            onChange={(e) => setCertification(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
          >
            {certificationLevels.map((level) => (
              <option key={level.value} value={level.value}>
                {level.label}
              </option>
            ))}
          </select>
        </div>
        
        <div className="flex items-end gap-2">
          <button type="submit" className="btn btn-primary btn-md flex-1">
            Search
          </button>
          {(location || specialization || certification) && (
            <button
              type="button"
              onClick={clearFilters}
              className="px-3 py-2 text-sm text-gray-600 hover:text-gray-900"
            >
              Clear
            </button>
          )}
        </div>
      </div>
    </form>
  )
}