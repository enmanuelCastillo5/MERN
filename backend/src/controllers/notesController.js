const noteController = {};
const Note = require('../models/Note');

noteController.getNotes = async (req, res) => {
  const notes = await Note.find();
  res.json(notes);
};

noteController.getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.json(note);
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
