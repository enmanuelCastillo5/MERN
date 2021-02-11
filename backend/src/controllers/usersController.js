const usersController = {};
const User = require('../models/User');

usersController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersController.createUser = async (req, res) => {
  const { username } = req.body;
  try {
    const newUser = new User({ username });
    await newUser.save();
    res.json('User created');
    res.status(200).send(newUser);
  } catch (error) {
    console.log(error);
  }
};

usersController.deleteUser = async (req, res) => {
  const { id } = req.params;
  await User.findByIdAndDelete(id);
  res.json('User deleted');
};

module.exports = usersController;
