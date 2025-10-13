import React, { useState } from 'react';

function AddNoteForm({ onAddNote }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text) return;
    onAddNote(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <input
        type="text"
        className="w-full p-3 border rounded-md shadow-sm focus:ring focus:ring-blue-300"
        placeholder="Add a new note..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="w-full mt-2 p-3 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Add Note
      </button>
    </form>
  );
}

export default AddNoteForm;