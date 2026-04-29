import { Link } from 'react-router-dom'
import { Users, MessageSquare, Shield, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 via-orange-400 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Bisharod - Health & Wellness Specialists
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-semibold text-orange-50">
              Bisharod (বিশারদ) - "The Expert"
            </p>
            <p className="text-lg md:text-xl mb-12 text-orange-100 max-w-3xl mx-auto leading-relaxed">
              Connect with healthcare specialists who share their expertise, or seek guidance from professionals in health and wellness. Bisharod bridges the gap between those who know and those who want to learn.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register?role=specialist" className="bg-red-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-red-700 transition-all transform hover:scale-105 shadow-lg border-2 border-white">
                Specialist
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">How Bisharod Works</h2>
          
          <div className="flex justify-center">
            {/* Specialist Path */}
            <div className="bg-white rounded-xl shadow-lg p-8 border-4 border-orange-200 w-full md:w-1/2 lg:w-2/5">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-orange-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Specialists</h3>
              <p className="text-gray-600 mb-6">Share your expertise and help others achieve their goals</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                  <span className="text-gray-700 font-semibold">Sign up as a Specialist</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                  <span className="text-gray-700 font-semibold">Create your profile with expertise</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                  <span className="text-gray-700 font-semibold">Connect with people seeking guidance</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                  <span className="text-gray-700 font-semibold">Share knowledge & guidance</span>
                </li>
              </ul>
              <Link to="/register?role=specialist" className="bg-orange-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-orange-600 transition-colors w-full text-center block">
                Register as Specialist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Bisharod?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <Shield className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Safe & Verified</h3>
              <p className="text-gray-600">All users are verified to ensure a safe and trustworthy community</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <MessageSquare className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Direct Communication</h3>
              <p className="text-gray-600">Connect directly with specialists through our secure messaging system</p>
            </div>
            <div className="bg-orange-50 rounded-xl p-8 border-2 border-orange-200">
              <Users className="w-12 h-12 text-orange-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Expert Network</h3>
              <p className="text-gray-600">Access a diverse network of experienced professionals and specialists</p>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Areas */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">Health & Wellness Expertise</h2>
          <p className="text-center text-gray-600 mb-12 text-lg">Connect with specialists in healthcare and wellness</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {['Mental Health', 'Nutrition & Diet', 'Physical Therapy', 'Yoga & Meditation', 'Senior Care', 'Child Health', 'Sports Medicine', 'Alternative Medicine'].map((category) => (
              <div key={category} className="bg-white rounded-lg p-6 border-l-4 border-green-500 shadow hover:shadow-md transition-all">
                <p className="font-semibold text-gray-900">{category}</p>
              </div>
            ))}
          </div>

          <h3 className="text-2xl font-bold text-center text-gray-700 mb-8">Other Specializations</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Career Guidance', 'Business Strategy', 'Financial Planning', 'Legal Consulting', 'Life Coaching', 'Personal Development', 'Education & Learning', 'Technology'].map((category) => (
              <div key={category} className="bg-white rounded-lg p-6 border-l-4 border-orange-300 shadow hover:shadow-md transition-all">
                <p className="font-semibold text-gray-700">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8">Join thousands of specialists already using Bisharod</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register?role=specialist" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors">
              Share Your Expertise
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}