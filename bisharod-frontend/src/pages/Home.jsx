import { Link } from 'react-router-dom'
import { Users, MessageSquare, Shield, BookOpen } from 'lucide-react'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-600 via-teal-500 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Bisharod - Clinical Specialists
            </h1>
            <p className="text-xl md:text-2xl mb-4 font-semibold text-teal-50">
              Bisharod (বিশারদ) - "The Expert"
            </p>
            <p className="text-lg md:text-xl mb-12 text-teal-100 max-w-3xl mx-auto leading-relaxed">
              Connect with certified clinical specialists - doctors, therapists, and health experts dedicated to your wellbeing. Get personalized guidance from trusted healthcare professionals.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/register?role=specialist" className="bg-white text-teal-600 px-8 py-4 rounded-lg font-bold text-lg hover:bg-teal-50 transition-all transform hover:scale-105 shadow-lg border-2 border-white">
                Register as Clinical Specialist
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
            <div className="bg-white rounded-xl shadow-lg p-8 border-4 border-teal-200 w-full md:w-1/2 lg:w-2/5">
              <div className="bg-teal-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <BookOpen className="w-8 h-8 text-teal-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">For Clinical Specialists</h3>
              <p className="text-gray-600 mb-6">Share your medical expertise and help patients on their health journey</p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">1</span>
                  <span className="text-gray-700 font-semibold">Register as a Clinical Specialist</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">2</span>
                  <span className="text-gray-700 font-semibold">Verify your medical credentials</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">3</span>
                  <span className="text-gray-700 font-semibold">Create your specialist profile</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="bg-teal-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">4</span>
                  <span className="text-gray-700 font-semibold">Connect with patients seeking care</span>
                </li>
              </ul>
              <Link to="/register?role=specialist" className="bg-teal-500 text-white px-6 py-3 rounded-lg font-bold hover:bg-teal-600 transition-colors w-full text-center block">
                Register as Clinical Specialist →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">Why Choose Bisharod?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 border-2 border-teal-200">
              <Shield className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Verified Specialists</h3>
              <p className="text-gray-600">All clinical specialists undergo credential verification for your safety</p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-teal-200">
              <MessageSquare className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Direct Consultation</h3>
              <p className="text-gray-600">Connect directly with certified doctors and specialists</p>
            </div>
            <div className="bg-white rounded-xl p-8 border-2 border-teal-200">
              <Users className="w-12 h-12 text-teal-600 mb-4" />
              <h3 className="text-xl font-bold mb-3">Expert Care Network</h3>
              <p className="text-gray-600">Access trusted healthcare professionals across multiple specialties</p>
            </div>
          </div>
        </div>
      </section>

      {/* Clinical Specializations - Priority */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">Clinical Specializations</h2>
          <p className="text-center text-teal-600 mb-12 text-lg font-semibold">Certified Healthcare Professionals at Your Service</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['General Medicine', 'Mental Health', 'Nutrition & Dietetics', 'Physical Therapy', 'Cardiology', 'Pediatrics', 'Gynecology', 'Orthopedics', 'Dermatology', 'Neurology', 'Psychiatry', 'Ayurveda'].map((category) => (
              <div key={category} className="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-lg p-6 border-l-4 border-teal-500 shadow hover:shadow-lg transition-all hover:-translate-y-1">
                <p className="font-bold text-gray-900">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-teal-600 to-emerald-600 text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Are You a Clinical Specialist?</h2>
          <p className="text-lg mb-8">Join our network of certified healthcare professionals and help patients seeking expert guidance</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register?role=specialist" className="bg-white text-teal-600 px-8 py-3 rounded-lg font-bold hover:bg-teal-50 transition-colors">
              Register as Clinical Specialist
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}