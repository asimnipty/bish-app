import { Link } from 'react-router-dom'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold text-orange-400 mb-4">Bisharod</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Connecting advisors with seekers. Share expertise, seek guidance, grow together.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">For Advisors</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/register?role=advisor" className="hover:text-orange-400 transition-colors">Register as Advisor</Link></li>
              <li><Link to="/dashboard" className="hover:text-orange-400 transition-colors">Dashboard</Link></li>
              <li><Link to="/" className="hover:text-orange-400 transition-colors">How It Works</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">For Seekers</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/register?role=seeker" className="hover:text-orange-400 transition-colors">Find Advisor</Link></li>
              <li><Link to="/experts" className="hover:text-orange-400 transition-colors">Browse Advisors</Link></li>
              <li><Link to="/" className="hover:text-orange-400 transition-colors">Get Started</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">About Us</Link></li>
              <li><Link to="/about" className="hover:text-orange-400 transition-colors">Legal Disclaimer</Link></li>
              <li><a href="mailto:support@bisharod.com" className="hover:text-orange-400 transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
              © {currentYear} Bisharod. All rights reserved.
            </p>
            <div className="flex gap-4 text-gray-400 text-sm">
              <a href="#" className="hover:text-orange-400 transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-orange-400 transition-colors">Cookie Policy</a>
            </div>
          </div>
          <div className="mt-6 p-4 bg-red-900 bg-opacity-30 border border-red-700 rounded text-red-200 text-xs text-center">
            ⚠️ <span className="font-semibold">Legal Notice:</span> Any unlawful or illegal activities on this platform will be considered a criminal offense and reported to authorities.
          </div>
        </div>
      </div>
    </footer>
  )
}