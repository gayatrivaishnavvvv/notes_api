import React from 'react';
import NoteCard from './NoteCard';
import { StickyNote } from 'lucide-react';

const NotesList = ({ notes, onEdit, onDelete }) => {
  if (notes.length === 0) {
    return (
      <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-slate-300/80">
        <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mx-auto mb-3">
          <StickyNote size={24} />
        </div>
        <p className="text-slate-700 font-semibold text-base">No notes yet</p>
        <p className="text-slate-400 text-xs mt-1">Create your first note above to get started!</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {notes.map((note) => (
        <NoteCard
          key={note._id}
          note={note}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NotesList;