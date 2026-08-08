import { Note } from "../models/note.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";

// Fetch all notes
export const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find().sort({ createdAt: -1 });
  res.status(200).json(notes);
});

// Create note
export const createNote = asyncHandler(async (req, res) => {
  const { title, content, category } = req.body;
  if (!title || !content) {
    return res.status(400).json({ message: "Title and Content are required" });
  }

  const note = await Note.create({ title, content, category });
  res.status(201).json(note);
});

// Update note
export const updateNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const updatedNote = await Note.findByIdAndUpdate(id, req.body, {
    new: true,
  });

  if (!updatedNote) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json(updatedNote);
});

// Delete note
export const deleteNote = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const deletedNote = await Note.findByIdAndDelete(id);

  if (!deletedNote) {
    return res.status(404).json({ message: "Note not found" });
  }

  res.status(200).json({ message: "Note deleted successfully", id });
});