const { Router } = require('express');
const {
  getUsers, createUser, updatedUser, deleteUser, getUser,
} = require('../controllers/usersController');

const router = Router();

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .get(getUser)
  .put(updatedUser)
  .delete(deleteUser);

module.exports = router;
