import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { User, Search, Star, MapPin } from 'lucide-react'

const API_URL = 'http://localhost:5000/api'

export default function ExpertsList() {
  const [experts, setExperts] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const [locationQuery, setLocationQuery] = useState('')

  useEffect(() => {
    fetchExperts()
  }, [])

  const fetchExperts = async (query = '', location = '') => {
    try {
      let url = `${API_URL}/experts`
      if (query || location) {
        url = `${API_URL}/experts/search?query=${encodeURIComponent(query)}&location=${encodeURIComponent(location)}`
      }
      const response = await fetch(url)
      const data = await response.json()
      setExperts(data)
    } catch (err) {
      console.error('Error fetching experts:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = (e) => {
    e.preventDefault()
    setLoading(true)
    fetchExperts(searchQuery, locationQuery)
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Find Experts</h1>
        <p className="text-xl text-gray-600">Connect with verified professionals</p>
      </div>

      {/* Search Bar */}
      <div className="card mb-8">
        <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by expertise, name, or skill..."
              className="input-field"
            />
          </div>
          <div className="flex-1">
            <input
              type="text"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              placeholder="Location (city, country)..."
              className="input-field"
            />
          </div>
          <button type="submit" className="btn-primary">
            <Search className="inline-block mr-2 h-5 w-5" />
            Search
          </button>
        </form>
      </div>

      {/* Experts Grid */}
      {loading ? (
        <div className="text-center py-12">
          <div className="text-gray-600">Loading experts...</div>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {experts.map((expert) => (
            <Link to={`/experts/${expert._id}`} key={expert._id}>
              <div className="card hover:bg-blue-50 transition-colors cursor-pointer">
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                    <User className="h-8 w-8 text-gray-500" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg text-gray-900">{expert.name}</h3>
                    <p className="text-blue-600 font-medium">{expert.expertise}</p>
                    {expert.location && (
                      <div className="flex items-center text-gray-500 text-sm mt-1">
                        <MapPin className="h-4 w-4 mr-1" />
                        {expert.location}
                      </div>
                    )}
                    {expert.rating > 0 && (
                      <div className="flex items-center mt-2">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="ml-1 text-sm font-medium">
                          {expert.rating.toFixed(1)} ({expert.totalRatings} reviews)
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                {expert.bio && (
                  <p className="text-gray-600 text-sm mt-4 line-clamp-2">{expert.bio}</p>
                )}
              </div>
            </Link>
          ))}
        </div>
      )}

      {experts.length === 0 && !loading && (
        <div className="text-center py-12">
          <p className="text-gray-600 text-lg">No experts found. Try a different search.</p>
        </div>
      )}
    </div>
  )
}