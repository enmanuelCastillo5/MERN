const noteController = {};

noteController.getNotes = (req, res) => {
  res.json({ message: 'api Notes' });
};

noteController.getNoteId = (req, res) => {
  res.json({ message: 'api Notes ID' });
};

noteController.createNotes = (req, res) => {
  res.json({ message: 'post notes' });
};

noteController.updateNotes = (req, res) => {
  res.json({ message: 'put Notes' });
};

noteController.deleteNote = (req, res) => {
  res.json({ message: 'delete Notes' });
};

module.exports = noteController;
