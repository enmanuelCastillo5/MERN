const usersController = {};
const User = require('../models/User');

usersController.getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

usersController.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({ user });
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

usersController.updatedUser = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedUser = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(updatedUser);
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
