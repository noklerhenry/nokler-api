const {
  createUser,
  getUser,
  getAllUsers,
  updateUser,
  blockUserService,
} = require("../../services/users.services");

const createUserController = async (req, res) => {
  try {
    const newUser = await createUser({ ...req.body });
    res.status(201).json({
      message: "User created",
      newUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error creating user",
      error: error.message,
    });
  }
};

const getUserController = async (req, res) => {
  try {
    const user = await getUser(req.params.id);
    res.status(200).json({
      message: "User found",
      user,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error getting user",
      error: error.message,
    });
  }
};

const getAllUsersController = async (req, res) => {
  try {
    const users = await getAllUsers();
    res.status(200).json({
      message: "Users found",
      users,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error getting users",
      error: error.message,
    });
  }
};

const updateUserController = async (req, res) => {
  try {
    const updatedUser = await updateUser(req.params.id, req.body);
    res.status(200).json({
      message: "User updated",
      updatedUser,
    });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({
      message: "Error updating user",
      error: error.message,
    });
  }
};

const blockUser = async (req, res) => {
  const {id}= req.params
  
  try {
    const userModified = await blockUserService(id)

    res.status(200).json(userModified)
    
  } catch (error) {
    console.log(error);
  }

}

module.exports = {
  createUserController,
  getUserController,
  getAllUsersController,
  updateUserController,
  blockUser
};
