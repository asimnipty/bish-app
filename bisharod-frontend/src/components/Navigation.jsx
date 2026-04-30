import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, User, LogOut, MessageCircle } from 'lucide-react'

export default function Navigation({ user, onLogout }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()

  const isActive = (path) => location.pathname === path

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 border-b-4 border-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Left: Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center gap-2">
              <img src="/logo.png" alt="Bisharod" className="h-14" />
            </Link>
          </div>

          {/* Center: Navigation Links */}
          <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 space-x-8">
            <Link
              to="/"
              className={`font-semibold transition-colors ${isActive('/') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-500'}`}
            >
              Home
            </Link>
            <Link
              to="/experts"
              className={`font-semibold transition-colors ${isActive('/experts') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-500'}`}
            >
              Find Doctors
            </Link>
            <Link
              to="/about"
              className={`font-semibold transition-colors ${isActive('/about') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-500'}`}
            >
              About
            </Link>
            {user && user.role === 'specialist' && (
              <Link
                to="/dashboard"
                className={`font-semibold transition-colors ${isActive('/dashboard') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-500'}`}
              >
                Dashboard
              </Link>
            )}
          </div>

          {/* Right: User Actions */}
          <div className="flex items-center space-x-4 flex-shrink-0">
            {user ? (
              <>
                <Link to="/messages" className="text-gray-700 hover:text-teal-500 transition-colors flex items-center">
                  <MessageCircle className="h-5 w-5" />
                </Link>
                <span className="text-gray-700">Hi, {user.name}</span>
                <button
                  onClick={onLogout}
                  className="bg-red-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-red-600 transition-colors flex items-center space-x-2"
                >
                  <LogOut className="h-4 w-4" />
                  <span>Logout</span>
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="text-gray-700 font-semibold hover:text-teal-500 transition-colors">Login</Link>
                <Link to="/register" className="bg-teal-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-teal-600 transition-colors">Join as Doctor</Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center ml-4">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 hover:text-gray-900"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-teal-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 font-semibold ${isActive('/') ? 'text-teal-600' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/experts"
              className={`block px-3 py-2 font-semibold ${isActive('/experts') ? 'text-teal-600' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              Find Doctors
            </Link>
            <Link
              to="/about"
              className={`block px-3 py-2 font-semibold ${isActive('/about') ? 'text-teal-600' : 'text-gray-700'}`}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            {user && user.role === 'specialist' && (
              <Link
                to="/dashboard"
                className={`block px-3 py-2 font-semibold ${isActive('/dashboard') ? 'text-teal-600' : 'text-gray-700'}`}
                onClick={() => setMobileMenuOpen(false)}
              >
                Dashboard
              </Link>
            )}
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 bg-teal-500 text-white rounded"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Join as Doctor
                </Link>
              </>
            ) : (
              <button
                onClick={() => {
                  onLogout()
                  setMobileMenuOpen(false)
                }}
                className="w-full text-left px-3 py-2 text-red-600"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  )
}