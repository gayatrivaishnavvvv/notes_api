import React, { useState, useEffect } from 'react';
import API from './services/api';
import NoteForm from './components/NoteForm';
import NotesList from './components/NotesList';

function App() {
  const [notes, setNotes] = useState([]);
  const [editingNote, setEditingNote] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchNotes = async () => {
    try {
      const response = await API.get('/notes');
      setNotes(response.data);
    } catch (error) {
      console.error('Failed to fetch notes:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNotes();
  }, []);

  const handleSaveNote = async (noteData) => {
    try {
      if (editingNote) {
        await API.put(`/notes/${editingNote._id}`, noteData);
        setEditingNote(null);
      } else {
        await API.post('/notes', noteData);
      }
      fetchNotes();
    } catch (error) {
      console.error('Error saving note:', error);
    }
  };

  const handleDeleteNote = async (id) => {
    try {
      await API.delete(`/notes/${id}`);
      fetchNotes();
    } catch (error) {
      console.error('Error deleting note:', error);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 p-4 sm:p-6 md:p-10 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Top App Header */}
        <header className="mb-8 flex flex-col md:flex-row md:items-center md:justify-between border-b border-slate-200/80 pb-6 gap-4">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Notes Application
            </h1>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Production-ready MERN stack architecture
            </p>
          </div>
          <div className="flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-xl border border-slate-200/80 shadow-sm w-fit">
            <span className="text-xs text-slate-500 font-medium">Total Notes:</span>
            <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md">
              {notes.length}
            </span>
          </div>
        </header>

        {/* Note Form Component */}
        <NoteForm
          onSave={handleSaveNote}
          currentNote={editingNote}
          onCancel={() => setEditingNote(null)}
        />

        {/* Loading Spinner / Notes List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block w-6 h-6 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin mb-2"></div>
            <p className="text-xs text-slate-400 font-medium">Loading workspace...</p>
          </div>
        ) : (
          <NotesList
            notes={notes}
            onEdit={(note) => setEditingNote(note)}
            onDelete={handleDeleteNote}
          />
        )}
      </div>
    </div>
  );
}

export default App;