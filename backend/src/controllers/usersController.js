const usersController = {};
const User = require('../models/User');

usersController.getUsers = async (req, res) => {
  const allUser = await User.find();
  res.json({ allUser });
};

usersController.getUser = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);
  res.json({ user });
};

usersController.createUser = async (req, res) => {
  const newUser = new User(req.body);
  try {
    const savedUser = await newUser.save();
    res.status(200).send(savedUser);
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
  try {
    // eslint-disable-next-line no-unused-vars
    const deletedUser = await User.findByIdAndDelete(id);
    res.send({ message: 'User was Deleted' }).status(200);
  } catch (error) {
    console.log(error);
  }
};

module.exports = usersController;
