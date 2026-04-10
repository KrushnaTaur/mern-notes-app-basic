const Note = require("../models/Note");

// Create Note
exports.createNote = async (req, res) => {
  try {
    const { title, content } = req.body;

    const note = await Note.create({
      title,
      content,
      user: req.user
    });

    res.status(201).json(note);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get Notes
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ user: req.user }).sort({ createdAt: -1 });
    res.json(notes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update Note
exports.updateNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.user.toString() !== req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    note.title = req.body.title || note.title;
    note.content = req.body.content || note.content;

    const updatedNote = await note.save();

    res.json(updatedNote);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete Note
exports.deleteNote = async (req, res) => {
  try {
    const note = await Note.findById(req.params.id);

    if (!note) {
      return res.status(404).json({ message: "Note not found" });
    }

    if (note.user.toString() !== req.user) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await note.deleteOne();

    res.json({ message: "Note deleted" });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};