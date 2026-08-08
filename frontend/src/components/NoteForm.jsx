import React, { useState, useEffect } from 'react';

const NoteForm = ({ onSave, currentNote, onCancel }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('General');

  useEffect(() => {
    if (currentNote) {
      setTitle(currentNote.title);
      setContent(currentNote.content);
      setCategory(currentNote.category || 'General');
    } else {
      setTitle('');
      setContent('');
      setCategory('General');
    }
  }, [currentNote]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    onSave({ title, content, category });
    setTitle('');
    setContent('');
    setCategory('General');
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200/80 mb-8 transition-all">
      <h2 className="text-lg font-bold mb-4 text-slate-800 tracking-tight flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-indigo-600 inline-block"></span>
        {currentNote ? 'Edit Note' : 'Create New Note'}
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="md:col-span-2">
          <label className="block text-slate-600 font-medium mb-1.5 text-xs uppercase tracking-wider">Title</label>
          <input
            type="text"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g., Spring Boot Migration Plan"
            required
          />
        </div>

        <div>
          <label className="block text-slate-600 font-medium mb-1.5 text-xs uppercase tracking-wider">Category</label>
          <input
            type="text"
            className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            placeholder="e.g., Work, Personal"
          />
        </div>
      </div>

      <div className="mb-5">
        <label className="block text-slate-600 font-medium mb-1.5 text-xs uppercase tracking-wider">Content</label>
        <textarea
          rows="3"
          className="w-full border border-slate-200 rounded-xl px-4 py-2.5 text-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 transition-all placeholder:text-slate-400"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your details here..."
          required
        ></textarea>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="submit"
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium text-sm px-5 py-2.5 rounded-xl transition-all shadow-sm shadow-indigo-200 active:scale-[0.98] cursor-pointer"
        >
          {currentNote ? 'Update Note' : 'Save Note'}
        </button>
        {currentNote && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-slate-100 hover:bg-slate-200 text-slate-600 font-medium text-sm px-5 py-2.5 rounded-xl transition-all cursor-pointer"
          >
            Cancel
          </button>
        )}
      </div>
    </form>
  );
};

export default NoteForm;