import asyncHandler from 'express-async-handler';

// @desc    Register new user
// @route   POST /api/users
// @access  Public
export const registerUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Test mode - return mock response
  const mockUser = {
    _id: 'new-user-id',
    email: email,
    token: `test-jwt-${email}-${Date.now()}`,
    message: 'Registration successful (test mode)'
  };

  res.status(201).json(mockUser);
});

// @desc    Authenticate user & get token
// @route   POST /api/users/auth
// @access  Public
export const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  // Test mode - return mock response
  const mockUser = {
    _id: 'test-user-id',
    email: email,
    token: `test-jwt-${email}-${Date.now()}`,
    message: 'Login successful (test mode)'
  };

  res.json(mockUser);
});