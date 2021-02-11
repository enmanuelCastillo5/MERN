const { Router } = require('express');
const {
  getNotes, createNotes, updateNotes, deleteNote, getNote,
} = require('../controllers/notesController');

const router = Router();

router.route('/')
  .get(getNotes)
  .post(createNotes);

router.route('/:id')
  .get(getNote)
  .put(updateNotes)
  .delete(deleteNote);

module.exports = router;
