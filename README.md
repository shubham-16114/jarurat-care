```markdown
# 📝 Fullstack Notes App

A modern note-taking application built with React and Node.js. This project was created as part of a frontend developer internship assignment, featuring a clean UI, secure authentication, and full CRUD functionality.

## 🌟 What This App Does

Ever wanted a simple, clean place to jot down your thoughts? This notes app lets you:
- Create an account or log in securely
- Add, edit, and delete your personal notes
- Access your notes from anywhere with an internet connection
- Enjoy a responsive design that works on desktop and mobile

## 🛠️ Tech Stack

**Frontend:**
- React 18 with Vite for lightning-fast development
- Tailwind CSS for beautiful, responsive styling
- Axios for API communication
- React Router for smooth navigation

**Backend:**
- Node.js with Express for the server
- JWT tokens for secure authentication
- MongoDB ready (currently running in test mode)
- CORS configured for cross-origin requests

## 🚀 Quick Start

### Prerequisites
Make sure you have Node.js installed on your machine. You can download it from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone this repository**
   ```bash
   git clone <your-repo-url>
   cd fullstack-vite-tailwind
   ```

2. **Install dependencies for both frontend and backend**
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   cd ..
   ```

3. **Start the application**
   ```bash
   npm run dev
   ```

   This will start both the frontend (usually on port 5173/5174) and backend (on port 5001) simultaneously.

4. **Open your browser**
   Navigate to the URL shown in your terminal (typically `http://localhost:5173` or `http://localhost:5174`)

## 🎮 How to Use

1. **Sign Up**: Create a new account with any email and password
2. **Log In**: Use your credentials to access your dashboard
3. **Add Notes**: Click the "Add Note" button and write your thoughts
4. **Manage Notes**: Edit or delete notes as needed
5. **Logout**: Click your profile in the header to logout securely

> **Note**: The app is currently running in test mode, so you can use any email/password combination to test it out!

## 📁 Project Structure

```
📦 fullstack-vite-tailwind
├── 🎨 client/                 # React frontend
│   ├── src/
│   │   ├── components/        # Reusable UI components
│   │   ├── pages/            # Main app pages
│   │   ├── api/              # API configuration
│   │   └── utils/            # Helper functions
│   └── package.json
├── 🔧 server/                 # Node.js backend
│   ├── src/
│   │   ├── controllers/       # Business logic
│   │   ├── routes/           # API endpoints
│   │   ├── models/           # Data models
│   │   └── middleware/       # Custom middleware
│   └── package.json
└── 📚 docs/                   # Project documentation
```

## 🔧 Available Scripts

```bash
# Start both frontend and backend
npm run dev

# Start only the backend server
npm run server

# Start only the frontend client
npm run client

# Test API endpoints
npm run test:api
```

## 🎯 Features Implemented

- ✅ **User Authentication**: Register, login, and logout functionality
- ✅ **Protected Routes**: Dashboard is only accessible after login
- ✅ **Notes Management**: Full CRUD operations for notes
- ✅ **Responsive Design**: Works great on all screen sizes
- ✅ **Modern UI**: Clean, professional interface with Tailwind CSS
- ✅ **Error Handling**: User-friendly error messages
- ✅ **Token Management**: Secure JWT-based authentication

## 🔐 Security Features

- JWT token authentication
- Password validation
- Protected API endpoints
- CORS configuration for secure cross-origin requests
- Client-side route protection

## 🚧 Current Limitations

- Running in test mode (no persistent database yet)
- Basic error handling (can be enhanced)
- Simple authentication (no password reset, email verification)

## 🎨 Design Philosophy

I wanted to create something that felt modern but not overwhelming. The color scheme is clean and professional, the layout is intuitive, and everything just works the way you'd expect it to. No unnecessary complexity - just a solid, reliable notes app.

## 🤔 Why I Built This

This project started as an internship assignment, but I really enjoyed working on it. It covers all the fundamentals of full-stack development:
- Setting up a React frontend with modern tools
- Building a REST API with Node.js
- Implementing authentication and authorization
- Creating a responsive, user-friendly interface
- Structuring code for maintainability

## 🔮 Future Improvements

If I continue working on this, here's what I'd add next:
- Real MongoDB database integration
- Note categories and tags
- Search and filter functionality
- Rich text editing
- Dark mode toggle
- Export notes to PDF/Markdown
- Collaborative notes sharing

## 📝 Assignment Notes

This project fulfills the requirements for a full-stack web application with:
- Modern React frontend with responsive design
- Node.js backend with RESTful API
- JWT-based authentication system
- CRUD operations on a sample entity (notes)
- Professional code structure and documentation

## 🤝 Contributing

Feel free to fork this project and make it your own! If you find any bugs or have suggestions for improvements, I'd love to hear about them.

## 📄 License

This project is open source and available under the MIT License.

---

Built with ❤️ using React, Node.js, and way too much coffee ☕
```