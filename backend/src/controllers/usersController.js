const usersController = {};

usersController.getUsers = (req, res) => {
  res.json({ message: 'api users' });
};

usersController.getUser = (req, res) => {
  res.json({ message: 'api user ID' });
};

usersController.createUser = (req, res) => {
  res.json({ message: 'post Users' });
};

usersController.updatedUser = (req, res) => {
  res.json({ message: 'put Users' });
};

usersController.deleteUser = (req, res) => {
  res.json({ message: 'delete Users' });
};

module.exports = usersController;
