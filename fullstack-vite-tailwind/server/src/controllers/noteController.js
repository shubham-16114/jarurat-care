import asyncHandler from 'express-async-handler';

// Mock notes data for test mode
let mockNotes = [
  { _id: '1', text: 'Welcome to your notes app!', createdAt: new Date().toISOString() },
  { _id: '2', text: 'This is a sample note in test mode', createdAt: new Date().toISOString() },
  { _id: '3', text: 'You can add, view, and delete notes', createdAt: new Date().toISOString() }
];

// @desc    Get all notes for a user
// @route   GET /api/notes
// @access  Private
export const getNotes = asyncHandler(async (req, res) => {
  // Test mode - return mock notes
  res.json(mockNotes);
});

// @desc    Create a new note
// @route   POST /api/notes
// @access  Private
export const createNote = asyncHandler(async (req, res) => {
  const { text } = req.body;

  if (!text) {
    return res.status(400).json({ message: 'Text is required' });
  }

  // Test mode - create mock note
  const newNote = {
    _id: Date.now().toString(),
    text,
    createdAt: new Date().toISOString()
  };

  mockNotes.push(newNote);
  res.status(201).json(newNote);
});

// @desc    Delete a note
// @route   DELETE /api/notes/:id
// @access  Private
export const deleteNote = asyncHandler(async (req, res) => {
  const noteId = req.params.id;
  const noteIndex = mockNotes.findIndex(note => note._id === noteId);

  if (noteIndex !== -1) {
    mockNotes.splice(noteIndex, 1);
    res.json({ message: 'Note removed' });
  } else {
    res.status(404).json({ message: 'Note not found' });
  }
});