import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-orange-500 to-orange-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About Bisharod</h1>
          <p className="text-xl">Connecting Specialists with People Seeking Guidance</p>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        {/* What is Bisharod */}
        <div className="mb-16">
          <div className="bg-orange-50 rounded-xl p-8 border-l-4 border-orange-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What is Bisharod?</h2>
            <p className="text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-orange-600">Bisharod</span> (বিশারদ) is a Bengali word meaning "The Expert" or "Specialist". 
              Bisharod is a platform dedicated to connecting knowledgeable specialists with people who seek their expertise. 
              We believe that knowledge should flow freely, and everyone has both something valuable to teach and something important to learn.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl shadow-md p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">For Specialists</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower experts and knowledge holders to share their wisdom with those who need it. 
                Whether you're a professional, entrepreneur, educator, or mentor, Bisharod provides a platform to reach 
                people who genuinely want to learn from your experience and expertise.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-md p-8 border-2 border-orange-200">
              <h3 className="text-2xl font-bold text-orange-600 mb-4">For Specialists</h3>
              <p className="text-gray-700 leading-relaxed">
                Our mission is to empower experts and knowledge holders to share their wisdom with those who need it.
                Whether you're a professional, entrepreneur, educator, or mentor, Bisharod provides a platform to reach
                people who genuinely want to learn from your experience and expertise.
              </p>
            </div>
          </div>
        </div>

        {/* Three Pillars */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">🤝 Trust</h3>
              <p className="text-gray-700">
                We verify all users and maintain transparency to ensure a safe and trustworthy environment
                for both specialists and people seeking guidance.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">💡 Excellence</h3>
              <p className="text-gray-700">
                We are committed to facilitating high-quality connections between experts and learners 
                to help everyone achieve their goals.
              </p>
            </div>
            <div className="bg-gradient-to-br from-orange-50 to-orange-100 rounded-xl p-8 border-2 border-orange-300">
              <h3 className="text-2xl font-bold text-orange-700 mb-4">🌍 Accessibility</h3>
              <p className="text-gray-700">
                We make expert guidance accessible to everyone regardless of location or background, 
                breaking down barriers to learning.
              </p>
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">How Bisharod Connects People</h2>
          <div className="space-y-6">
            <div className="flex gap-6 items-start">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">1</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Specialists Share Expertise</h3>
                <p className="text-gray-700">Specialists create detailed profiles showcasing their skills, experience, and areas of expertise.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">2</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">People Discover Specialists</h3>
                <p className="text-gray-700">People browse through verified specialists and select those who best match their learning needs.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">3</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Direct Connection</h3>
                <p className="text-gray-700">Our secure messaging system enables direct communication for discussing goals and arrangements.</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center flex-shrink-0 font-bold">4</div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Knowledge Transfer</h3>
                <p className="text-gray-700">Specialists conduct sessions and provide guidance tailored to each person's specific needs.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer */}
        <div className="bg-red-50 rounded-xl p-8 border-4 border-red-400 mb-16">
          <h2 className="text-3xl font-bold text-red-700 mb-4">⚠️ Important Legal Disclaimer</h2>
          <div className="space-y-4 text-gray-800">
            <p className="font-semibold">
              BISHAROD IS A PLATFORM FOR LEGITIMATE KNOWLEDGE SHARING AND GUIDANCE ONLY.
            </p>
            <p>
              Any unlawful, illegal, unethical, or criminal activities conducted through this platform will be 
              <span className="font-bold text-red-700"> considered a serious criminal offense</span> and will be 
              reported to the appropriate authorities.
            </p>
            <p className="font-semibold">This includes but is not limited to:</p>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Fraud, scams, or financial exploitation</li>
              <li>Sexual harassment or exploitation</li>
              <li>Defamation or harassment</li>
              <li>Intellectual property violations</li>
              <li>Promotion of illegal activities</li>
              <li>Any form of abuse or harmful conduct</li>
            </ul>
            <p className="mt-4">
              Users agree to use Bisharod only for lawful purposes and in a way that does not violate any applicable 
              laws, regulations, or the rights of others. Violations will result in immediate account termination and 
              legal action.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Join the Bisharod Community</h2>
          <p className="text-lg mb-8">Start sharing or seeking expertise today</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/register?role=specialist" className="bg-white text-orange-600 px-8 py-3 rounded-lg font-bold hover:bg-orange-50 transition-colors">
              Become an Specialist
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}