const { Router } = require('express');
const {
  getNotes, createNotes, updateNotes, deleteNote, getNoteId,
} = require('../controllers/notesController');

const router = Router();

router.route('/')
  .get(getNotes)
  .post(createNotes);

router.route('/:id')
  .get(getNoteId)
  .put(updateNotes)
  .delete(deleteNote);

module.exports = router;
