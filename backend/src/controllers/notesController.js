const noteController = {};
const Note = require('../models/Note');

noteController.getNotes = async (req, res) => {
  const allNotes = await Note.find();

  res.json({ allNotes });
};

noteController.getNoteId = async (req, res) => {
  const { id } = req.params;
  const noteId = await Note.findById(id);
  res.json({ noteId });
};

noteController.createNotes = async (req, res) => {
  const newNote = new Note(req.body);
  try {
    const savedNote = await newNote.save();
    res.status(200).send(savedNote);
  } catch (error) {
    console.log(error);
  }
};

noteController.updateNotes = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedNote = await Note.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(updatedNote);
  } catch (error) {
    console.log(error);
  }
};

noteController.deleteNote = async (req, res) => {
  const { id } = req.params;
  try {
    // eslint-disable-next-line no-unused-vars
    const deleteNote = await Note.findByIdAndDelete(id);
    res.send({ message: 'note was deleted' }).status(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = noteController;
