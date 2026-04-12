import { useState, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { AlertCircle } from 'lucide-react'

const API_URL = 'http://localhost:5000/api'

const EXPERTISE_OPTIONS = [
  'Web Development',
  'Mobile App Development',
  'Software Engineering',
  'Digital Marketing',
  'Business Strategy',
  'Career Coaching',
  'Graphic Design',
  'Data Science',
  'Cloud Computing',
  'AI/Machine Learning',
  'Project Management',
  'Financial Planning',
  'Health & Wellness',
  'Content Writing',
  'Social Media Marketing',
  'E-commerce',
  'Startup Mentoring',
  'Leadership Coaching',
  'SEO/SEM',
  'Legal Consulting',
  'Law & Compliance',
  'Lawyer',
  'Other'
]

export default function Register({ onRegister }) {
  const [searchParams] = useSearchParams()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: searchParams.get('role') || 'seeker',
    expertise: '',
    bio: '',
    location: ''
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (formData.role === 'advisor' && !formData.expertise) {
      setError('Area of expertise is required for advisors')
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          role: formData.role,
          expertise: formData.expertise,
          bio: formData.bio,
          location: formData.location
        })
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.message || 'Registration failed')
      }

      onRegister(data.user, data.token)
      window.location.href = '/'
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-orange-50 to-red-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-orange-500 to-orange-600 p-8 text-white text-center">
            <h2 className="text-4xl font-bold mb-2">Join Bisharod</h2>
            <p className="text-orange-100 text-lg">
              {formData.role === 'advisor' ? 'Share Your Expertise' : 'Find Expert Guidance'}
            </p>
          </div>

          <div className="p-8">
            {error && (
              <div className="bg-red-50 border-2 border-red-400 text-red-700 p-4 rounded-lg mb-6 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span>{error}</span>
              </div>
            )}

            <div className="mb-8">
              <label className="block text-sm font-semibold text-gray-700 mb-4">
                Choose Your Role:
              </label>
              <div className="grid grid-cols-2 gap-4">
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.role === 'seeker' ? 'border-red-500 bg-red-50' : 'border-gray-200'}`}>
                  <input
                    type="radio"
                    name="role"
                    value="seeker"
                    checked={formData.role === 'seeker'}
                    onChange={handleChange}
                    className="sr-only"
                  />
                  <div className="font-bold text-lg text-gray-900">🔍 Seeker</div>
                  <div className="text-sm text-gray-600">Seeking expert guidance</div>
                </label>
                <label className={`p-4 border-2 rounded-lg cursor-pointer transition-all ${formData.role === 'advisor' ? 'border-orange-500 bg-orange-50' : 'border-gray-200'}`}>
                  <input
                    type="radio"
                    name="role"
                    value="advisor"
                    onChange={handleChange}
                    checked={formData.role === 'advisor'}
                    className="sr-only"
                  />
                  <div className="font-bold text-lg text-gray-900">👨‍🏫 Advisor</div>
                  <div className="text-sm text-gray-600">Share your expertise</div>
                </label>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Location
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  placeholder="City, Country"
                />
              </div>

              {formData.role === 'advisor' && (
                <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded">
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Area of Expertise *
                  </label>
                  <select
                    name="expertise"
                    value={formData.expertise}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none bg-white"
                    required
                  >
                    <option value="">-- Select your area of expertise --</option>
                    {EXPERTISE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              )}

              <div>
                <label className="block text-sm font-semibold text-gray-900 mb-2">
                  Bio {formData.role === 'advisor' && '*'}
                </label>
                <textarea
                  name="bio"
                  value={formData.bio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                  rows="3"
                  placeholder={formData.role === 'advisor' ? "Tell seekers about yourself and your experience..." : "Tell advisors about your learning goals..."}
                  required={formData.role === 'advisor'}
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Password *
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="••••••••"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-900 mb-2">
                    Confirm Password *
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none"
                    placeholder="••••••••"
                    required
                  />
                </div>
              </div>

              {/* Disclaimer for Advisors */}
              {formData.role === 'advisor' && (
                <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                  <p className="text-xs text-red-700 font-semibold">
                    ⚠️ By registering as an Advisor, you agree to provide only legitimate, lawful services and guidance. 
                    Any illegal or unethical conduct will be considered a criminal offense.
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={loading}
                className={`w-full py-3 px-4 rounded-lg font-bold text-white text-lg transition-all ${
                  formData.role === 'advisor'
                    ? 'bg-orange-500 hover:bg-orange-600 disabled:bg-orange-300'
                    : 'bg-red-500 hover:bg-red-600 disabled:bg-red-300'
                } ${loading ? 'cursor-not-allowed' : ''}`}
              >
                {loading ? 'Creating Account...' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-gray-600">
                Already have an account?{' '}
                <Link to="/login" className="text-orange-600 font-semibold hover:text-orange-700">
                  Login here
                </Link>
              </p>
            </div>
          </div>
        </div>

        {/* Info Box */}
        <div className="mt-6 bg-white rounded-xl shadow p-6 border-l-4 border-orange-500">
          <h3 className="font-bold text-gray-900 mb-2">Need help deciding?</h3>
          <p className="text-sm text-gray-600 mb-3">
            <strong>Choose Advisor if:</strong> You have expertise to share and want to help others learn and grow
          </p>
          <p className="text-sm text-gray-600">
            <strong>Choose Seeker if:</strong> You want to learn from experts and need guidance in a specific area
          </p>
        </div>
      </div>
    </div>
  )
}