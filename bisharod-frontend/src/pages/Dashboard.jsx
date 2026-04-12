import { User } from 'lucide-react'

export default function Dashboard({ user }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Expert Dashboard</h1>
      
      <div className="grid md:grid-cols-3 gap-6 mb-8">
        <div className="card">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Profile Views</h3>
          <p className="text-3xl font-bold text-gray-900">124</p>
        </div>
        <div className="card">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Messages</h3>
          <p className="text-3xl font-bold text-gray-900">12</p>
        </div>
        <div className="card">
          <h3 className="text-gray-500 text-sm font-medium mb-2">Rating</h3>
          <p className="text-3xl font-bold text-gray-900">4.8</p>
        </div>
      </div>

      <div className="card">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">Your Profile</h2>
        <div className="flex items-start space-x-6">
          <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
            <User className="h-10 w-10 text-gray-500" />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-gray-900">{user.name}</h3>
            <p className="text-blue-600">{user.expertise}</p>
            <p className="text-gray-500 text-sm mt-1">{user.email}</p>
            {user.location && <p className="text-gray-500 text-sm">Location: {user.location}</p>}
          </div>
        </div>
      </div>
    </div>
  )
}