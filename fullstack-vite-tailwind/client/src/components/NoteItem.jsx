import React from 'react';

function NoteItem({ note, onDeleteNote }) {
  return (
    <div className="flex justify-between items-center p-4 bg-white border rounded-md shadow-sm mb-2">
      <p className="text-gray-800">{note.text}</p>
      <button
        onClick={() => onDeleteNote(note._id)}
        className="px-3 py-1 bg-red-500 text-white text-xs font-bold rounded hover:bg-red-600"
      >
        DELETE
      </button>
    </div>
  );
}

export default NoteItem;