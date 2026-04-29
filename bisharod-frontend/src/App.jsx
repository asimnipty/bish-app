import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'

// Pages
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import ExpertsList from './pages/ExpertsList'
import ExpertProfile from './pages/ExpertProfile'
import About from './pages/About'
import Dashboard from './pages/Dashboard'
import Messages from './pages/Messages'

// Components
import Navigation from './components/Navigation'
import Footer from './components/Footer'

// API Base URL
const API_URL = 'http://localhost:5000/api'

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem('token')
    const userData = localStorage.getItem('user')
    if (token && userData) {
      setUser(JSON.parse(userData))
    }
    setLoading(false)
  }, [])

  const login = (userData, token) => {
    localStorage.setItem('token', token)
    localStorage.setItem('user', JSON.stringify(userData))
    setUser(userData)
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    setUser(null)
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-xl font-semibold text-gray-600">Loading...</div>
      </div>
    )
  }

  return (
    <Router>
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Navigation user={user} onLogout={logout} />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experts" element={<ExpertsList />} />
            <Route path="/experts/:id" element={<ExpertProfile />} />
            <Route path="/login" element={<Login onLogin={login} />} />
            <Route path="/register" element={<Register onRegister={login} />} />
            <Route path="/about" element={<About />} />
            <Route 
              path="/dashboard" 
              element={user?.role === 'specialist' ? <Dashboard user={user} /> : <Navigate to="/" />} 
            />
            <Route 
              path="/messages" 
              element={user ? <Messages user={user} /> : <Navigate to="/login" />} 
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App