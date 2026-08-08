import React from 'react';
import { Pencil, Trash2 } from 'lucide-react';

const NoteCard = ({ note, onEdit, onDelete }) => {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-200/80 flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all duration-200 group">
      <div>
        <div className="flex justify-between items-start mb-3 gap-2">
          <h3 className="text-base font-semibold text-slate-800 leading-snug tracking-tight">{note.title}</h3>
          <span className="text-[11px] font-semibold bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-full whitespace-nowrap border border-indigo-100">
            {note.category || 'General'}
          </span>
        </div>
        <p className="text-slate-600 text-sm whitespace-pre-line mb-6 leading-relaxed">{note.content}</p>
      </div>

      <div className="pt-3 border-t border-slate-100 flex justify-between items-center">
        <span className="text-[11px] text-slate-400 font-medium">
          {new Date(note.createdAt).toLocaleDateString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric'
          })}
        </span>
        <div className="flex gap-1 opacity-80 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => onEdit(note)}
            className="p-1.5 text-slate-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors cursor-pointer"
            title="Edit Note"
          >
            <Pencil size={15} />
          </button>
          <button
            onClick={() => onDelete(note._id)}
            className="p-1.5 text-slate-400 hover:text-rose-600 hover:bg-rose-50 rounded-lg transition-colors cursor-pointer"
            title="Delete Note"
          >
            <Trash2 size={15} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;