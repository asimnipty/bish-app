const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/bisharod', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

// User Model
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['expert', 'seeker'],
    required: true
  },
  expertise: {
    type: String,
    required: function() { return this.role === 'expert'; }
  },
  bio: {
    type: String,
    maxlength: 500
  },
  location: {
    type: String
  },
  profilePicture: {
    type: String
  },
  rating: {
    type: Number,
    default: 0
  },
  totalRatings: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const User = mongoose.model('User', userSchema);

// Expert Profile Model
const expertProfileSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  services: [{
    title: String,
    description: String,
    price: Number,
    duration: Number // in minutes
  }],
  availability: [{
    day: String,
    startTime: String,
    endTime: String
  }],
  skills: [String],
  experience: String,
  education: String,
  certifications: [String],
  portfolio: [String],
  isVerified: {
    type: Boolean,
    default: false
  }
});

const ExpertProfile = mongoose.model('ExpertProfile', expertProfileSchema);

// Message Model
const messageSchema = new mongoose.Schema({
  senderId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  receiverId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  content: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date,
    default: Date.now
  },
  isRead: {
    type: Boolean,
    default: false
  }
});

const Message = mongoose.model('Message', messageSchema);

// Routes

// Register
app.post('/api/auth/register', async (req, res) => {
  try {
    const { name, email, password, role, expertise, bio, location } = req.body;

    // Check if user exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create user
    const user = new User({
      name,
      email,
      password: hashedPassword,
      role,
      expertise: role === 'expert' ? expertise : undefined,
      bio,
      location
    });

    await user.save();

    // Create JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            expertise: user.expertise,
            bio: user.bio,
            location: user.location
          }
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Login
app.post('/api/auth/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    // Check if user exists
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Check password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Create JWT
    const payload = {
      user: {
        id: user.id,
        role: user.role
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_SECRET || 'secret',
      { expiresIn: '7d' },
      (err, token) => {
        if (err) throw err;
        res.json({
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
            expertise: user.expertise,
            bio: user.bio,
            location: user.location,
            profilePicture: user.profilePicture,
            rating: user.rating
          }
        });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get current user
app.get('/api/auth/me', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const user = await User.findById(decoded.user.id).select('-password');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get all experts
app.get('/api/experts', async (req, res) => {
  try {
    const experts = await User.find({ role: 'expert' })
      .select('-password')
      .sort({ rating: -1 });
    res.json(experts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get expert by ID
app.get('/api/experts/:id', async (req, res) => {
  try {
    const expert = await User.findById(req.params.id).select('-password');
    if (!expert || expert.role !== 'expert') {
      return res.status(404).json({ message: 'Expert not found' });
    }
    res.json(expert);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Search experts
app.get('/api/experts/search', async (req, res) => {
  try {
    const { query, location } = req.query;
    let filter = { role: 'expert' };
    
    if (query) {
      filter.$or = [
        { name: { $regex: query, $options: 'i' } },
        { expertise: { $regex: query, $options: 'i' } },
        { bio: { $regex: query, $options: 'i' } }
      ];
    }
    
    if (location) {
      filter.location = { $regex: location, $options: 'i' };
    }

    const experts = await User.find(filter).select('-password').sort({ rating: -1 });
    res.json(experts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Send message
app.post('/api/messages', async (req, res) => {
  try {
    const { receiverId, content } = req.body;
    const token = req.header('x-auth-token');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    
    const message = new Message({
      senderId: decoded.user.id,
      receiverId,
      content
    });

    await message.save();
    res.json(message);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Get messages between two users
app.get('/api/messages/:userId', async (req, res) => {
  try {
    const token = req.header('x-auth-token');
    
    if (!token) {
      return res.status(401).json({ message: 'No token, authorization denied' });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'secret');
    const currentUserId = decoded.user.id;
    const otherUserId = req.params.userId;

    const messages = await Message.find({
      $or: [
        { senderId: currentUserId, receiverId: otherUserId },
        { senderId: otherUserId, receiverId: currentUserId }
      ]
    }).populate('senderId', 'name').populate('receiverId', 'name').sort({ timestamp: 1 });

    res.json(messages);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Rate expert
app.post('/api/experts/:id/rate', async (req, res) => {
  try {
    const { rating } = req.body;
    const expert = await User.findById(req.params.id);
    
    if (!expert || expert.role !== 'expert') {
      return res.status(404).json({ message: 'Expert not found' });
    }

    // Update rating
    const totalRatings = expert.totalRatings + 1;
    const newRating = ((expert.rating * expert.totalRatings) + rating) / totalRatings;

    expert.rating = newRating;
    expert.totalRatings = totalRatings;
    await expert.save();

    res.json({ rating: expert.rating, totalRatings: expert.totalRatings });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});