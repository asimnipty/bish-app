import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { User, Star, MapPin } from 'lucide-react'

const API_URL = 'http://localhost:5000/api'

export default function ExpertProfile() {
  const { id } = useParams()
  const [expert, setExpert] = useState(null)
  const [loading, setLoading] = useState(true)
  const [rating, setRating] = useState(0)
  const [message, setMessage] = useState('')

  useEffect(() => {
    fetchExpert()
  }, [id])

  const fetchExpert = async () => {
    try {
      const response = await fetch(`${API_URL}/experts/${id}`)
      const data = await response.json()
      setExpert(data)
    } catch (err) {
      console.error('Error fetching expert:', err)
    } finally {
      setLoading(false)
    }
  }

  const handleRate = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Please login to rate experts')
      return
    }

    try {
      const response = await fetch(`${API_URL}/experts/${id}/rate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ rating })
      })
      const data = await response.json()
      setExpert({ ...expert, rating: data.rating, totalRatings: data.totalRatings })
      setRating(0)
    } catch (err) {
      console.error('Error rating expert:', err)
    }
  }

  const handleSendMessage = async () => {
    const token = localStorage.getItem('token')
    if (!token) {
      alert('Please login to send messages')
      return
    }

    try {
      const response = await fetch(`${API_URL}/messages`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-auth-token': token
        },
        body: JSON.stringify({ receiverId: id, content: message })
      })
      if (response.ok) {
        setMessage('')
        alert('Message sent successfully!')
      }
    } catch (err) {
      console.error('Error sending message:', err)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading...</div>
      </div>
    )
  }

  if (!expert) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900">Expert not found</h1>
          <Link to="/experts" className="text-blue-600 hover:underline mt-4 inline-block">
            Back to experts list
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="card">
        <div className="flex items-start space-x-6">
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-12 w-12 text-gray-500" />
          </div>
          <div className="flex-1">
            <h1 className="text-3xl font-bold text-gray-900">{expert.name}</h1>
            <p className="text-xl text-blue-600 font-medium mt-1">{expert.expertise}</p>
            {expert.location && (
              <div className="flex items-center text-gray-500 mt-2">
                <MapPin className="h-5 w-5 mr-1" />
                {expert.location}
              </div>
            )}
            {expert.rating > 0 && (
              <div className="flex items-center mt-3">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="ml-2 text-lg font-medium">
                  {expert.rating.toFixed(1)} ({expert.totalRatings} reviews)
                </span>
              </div>
            )}
          </div>
        </div>

        {expert.bio && (
          <div className="mt-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-3">About</h2>
            <p className="text-gray-600">{expert.bio}</p>
          </div>
        )}

        <div className="mt-8 pt-8 border-t">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Rate this Expert</h2>
          <div className="flex items-center space-x-4">
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button
                  key={star}
                  onClick={() => setRating(star)}
                  className={`text-2xl ${star <= rating ? 'text-yellow-400' : 'text-gray-300'}`}
                >
                  ★
                </button>
              ))}
            </div>
            <button onClick={handleRate} className="btn-secondary" disabled={rating === 0}>
              Submit Rating
            </button>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">Send a Message</h2>
          <div className="flex space-x-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="input-field flex-1"
            />
            <button onClick={handleSendMessage} className="btn-primary">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}