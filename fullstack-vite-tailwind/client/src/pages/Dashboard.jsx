import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import auth from '../utils/auth';
import apiClient from '../api/apiClient';
import Header from '../components/Header';
import Footer from '../components/Footer';
import AddNoteForm from '../components/AddNoteForm';
import NoteItem from '../components/NoteItem';

function Dashboard() {
  const [notes, setNotes] = useState([]);
  const user = auth.getCurrentUser();
  const navigate = useNavigate();

  // Fetch notes from the server when the component loads
  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const { data } = await apiClient.get('/notes');
        setNotes(data);
      } catch (error) {
        console.error('Failed to fetch notes:', error);
        // If token is invalid, log out the user
        if (error.response && error.response.status === 401) {
          handleLogout();
        }
      }
    };

    fetchNotes();
  }, []);

  const handleAddNote = async (text) => {
    try {
      const { data: newNote } = await apiClient.post('/notes', { text });
      setNotes([...notes, newNote]);
    } catch (error) {
      console.error('Failed to add note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await apiClient.delete(`/notes/${id}`);
      setNotes(notes.filter((note) => note._id !== id));
    } catch (error) {
      console.error('Failed to delete note:', error);
    }
  };

  const handleLogout = () => {
    auth.logout();
    navigate('/auth');
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow bg-gray-50">
        <div className="max-w-4xl mx-auto p-4 sm:p-6 lg:p-8">
          {/* Welcome Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">
                  Welcome back! 👋
                </h1>
                <p className="text-gray-600 mt-1">
                  Hello {user?.email}, ready to take some notes?
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-indigo-600">{notes.length}</div>
                  <div className="text-sm text-gray-500">Total Notes</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600">
                    {notes.filter(note => note.createdAt && new Date(note.createdAt).toDateString() === new Date().toDateString()).length}
                  </div>
                  <div className="text-sm text-gray-500">Today</div>
                </div>
              </div>
            </div>
          </div>

          {/* Add Note Section */}
          <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Add New Note</h2>
            <AddNoteForm onAddNote={handleAddNote} />
          </div>

          {/* Notes List */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold text-gray-900">Your Notes</h2>
              <span className="text-sm text-gray-500">{notes.length} notes</span>
            </div>
            
            {notes.length > 0 ? (
              <div className="space-y-4">
                {notes.map((note) => (
                  <NoteItem key={note._id} note={note} onDeleteNote={handleDeleteNote} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-gray-400 text-6xl mb-4">📝</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">No notes yet</h3>
                <p className="text-gray-500">Get started by creating your first note above!</p>
              </div>
            )}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Dashboard;