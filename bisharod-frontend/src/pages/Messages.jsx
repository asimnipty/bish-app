import { useState } from 'react'

export default function Messages({ user }) {
  const [newMessage, setNewMessage] = useState('')

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Messages</h1>
      
      <div className="card">
        <div className="flex h-96">
          {/* Contacts list */}
          <div className="w-1/3 border-r">
            <div className="p-4 border-b">
              <input
                type="text"
                placeholder="Search conversations..."
                className="input-field"
              />
            </div>
            <div className="p-4 text-center text-gray-500">
              No conversations yet. Start by contacting an expert!
            </div>
          </div>

          {/* Chat area */}
          <div className="flex-1 flex flex-col">
            <div className="flex-1 p-4 flex items-center justify-center text-gray-500">
              Select a conversation to view messages
            </div>
            <div className="p-4 border-t flex space-x-4">
              <input
                type="text"
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                placeholder="Type a message..."
                className="input-field flex-1"
              />
              <button className="btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}