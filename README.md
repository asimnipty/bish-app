# Bisharod - Expert Collaboration Platform

**Bisharod** (meaning "expert" in Bengali) is a full-stack web application that connects local experts with those seeking their knowledge and skills. Built with the MERN stack (MongoDB, Express.js, React, Node.js) and styled with Tailwind CSS.

## 🌟 Features

### For Expert Seekers
- **Search & Discovery**: Find experts by expertise area, location, or specific skills
- **Expert Profiles**: View detailed profiles with ratings, reviews, and portfolios
- **Direct Messaging**: Contact experts directly through the built-in messaging system
- **Rating System**: Rate and review experts after collaboration

### For Experts
- **Profile Management**: Create and manage your professional profile
- **Service Listings**: Showcase your services and expertise areas
- **Dashboard**: Track profile views, messages, and ratings
- **Client Communication**: Receive and respond to inquiries

### Platform Features
- **User Authentication**: Secure JWT-based authentication
- **Role-Based Access**: Different experiences for experts and seekers
- **Responsive Design**: Mobile-friendly interface built with Tailwind CSS
- **Real-time Updates**: Dynamic content updates without page refresh

## 🛠️ Tech Stack

### Frontend
- **React 19** with Vite for fast development and building
- **React Router v6** for client-side routing
- **Tailwind CSS** for utility-first styling
- **Lucide React** for beautiful icons
- **Axios** for API communication (can be added)

### Backend
- **Node.js** with Express.js
- **MongoDB** with Mongoose ODM
- **JWT** for authentication
- **bcryptjs** for password hashing
- **CORS** for cross-origin resource sharing

## 📁 Project Structure

```
bisharod/
├── bisharod-frontend/          # React frontend application
│   ├── src/
│   │   ├── pages/              # Page components
│   │   │   ├── Home.jsx        # Landing page with hero section
│   │   │   ├── Login.jsx       # User login page
│   │   │   ├── Register.jsx    # User registration page
│   │   │   ├── ExpertsList.jsx # Expert discovery and search
│   │   │   ├── ExpertProfile.jsx # Individual expert profiles
│   │   │   ├── About.jsx       # About page
│   │   │   ├── Dashboard.jsx   # Expert dashboard
│   │   │   └── Messages.jsx    # Messaging interface
│   │   ├── components/         # Reusable UI components
│   │   │   ├── Navigation.jsx  # Navigation bar with mobile menu
│   │   │   └── Footer.jsx      # Footer component
│   │   ├── App.jsx             # Main application component
│   │   ├── main.jsx            # Application entry point
│   │   └── index.css           # Global styles with Tailwind
│   ├── public/                 # Static assets
│   ├── package.json            # Frontend dependencies
│   ├── vite.config.js          # Vite configuration
│   └── tailwind.config.js      # Tailwind CSS configuration
│
├── bisharod-backend/           # Node.js backend API
│   ├── server.js               # Express server and API routes
│   ├── .env                    # Environment variables
│   └── package.json            # Backend dependencies
│
└── README.md                   # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/asimnipty/bish-app.git
   cd bish-app
   ```

2. **Install backend dependencies**
   ```bash
   cd bisharod-backend
   npm install
   ```

3. **Configure environment variables**
   Create a `.env` file in the `bisharod-backend` directory:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/bisharod
   JWT_SECRET=your_secret_key_here
   ```

4. **Install frontend dependencies**
   ```bash
   cd ../bisharod-frontend
   npm install
   ```

### Running the Application

1. **Start MongoDB** (if using local installation)
   ```bash
   mongod
   ```

2. **Start the backend server**
   ```bash
   cd bisharod-backend
   npm run dev
   ```
   The API server will run on `http://localhost:5000`

3. **Start the frontend development server** (in a new terminal)
   ```bash
   cd bisharod-frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

4. **Access the application**
   Open your browser and navigate to `http://localhost:5173`

## 📱 API Endpoints

### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user profile

### Experts
- `GET /api/experts` - Get all experts
- `GET /api/experts/:id` - Get expert by ID
- `GET /api/experts/search?query=&location=` - Search experts
- `POST /api/experts/:id/rate` - Rate an expert

### Messages
- `POST /api/messages` - Send a message
- `GET /api/messages/:userId` - Get messages with a user

## 🎨 Design Features

- **Modern UI**: Clean, professional design with blue color scheme
- **Responsive**: Works seamlessly on desktop, tablet, and mobile
- **Accessible**: Follows WCAG guidelines for accessibility
- **Fast**: Optimized performance with Vite and code splitting

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgments

- All contributors to the MERN stack ecosystem
- The Tailwind CSS team for the amazing CSS framework
- The open-source community for various libraries and tools

## 📞 Support

For support, email support@bisharod.com or join our community forum.

---

**Bisharod** - Connecting experts and seekers worldwide 🌍