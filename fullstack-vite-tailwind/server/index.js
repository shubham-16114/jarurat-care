import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './src/config/database.js';
import authRoutes from './src/routes/authRoutes.js'; // <-- Import auth routes
import noteRoutes from './src/routes/noteRoutes.js'; // <-- Import note routes

// Load environment variables
dotenv.config();
// Skip database connection for test mode
// connectDB();

const app = express();

// CORS configuration
const corsOptions = {
  origin: ['http://localhost:5173', 'http://localhost:5174', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json()); // <-- Add this to accept JSON data
app.use(express.urlencoded({ extended: true })); // <-- Add this for form data

// API Routes
app.use('/api/users', authRoutes); // <-- Use the auth routes
app.use('/api/notes', noteRoutes); // <-- Use the note routes

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));