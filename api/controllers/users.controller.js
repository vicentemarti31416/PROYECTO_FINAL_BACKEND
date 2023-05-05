const Users = require("../models/users.models");


const getUsers = async (req, res) => {
  try {
    const allUsers = await Users.find();
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
 
};
const getUsersById = async (req, res) => {
  try {
    const { id } = req.params;
    const allUsers = await Users.findById(id);
    return res.status(200).json(allUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createUsers = async (req, res) => {
  try {
    const newUsers = new Users(req.body);
    const createdUsers = await newUsers.save();
    return res.status(200).json(createdUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const modifyUsers = async (req, res) => {
  try {
    const { id } = req.params;
    const modifyUsers = new Users(req.body);
    modifyUsers._id = id;
    const putUsers = await Users.findByIdAndUpdate(id, modifyUsers, {
      new: true,
    });
    if (!putUsers) {
      return res.status(404).json({ message: "Users not found" });
    }
    return res.status(200).json(putUsers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteUsers = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteUsers = await Users.findByIdAndDelete(id);
      if (!deleteUsers) {
        return res.status(404).json({ message: "Users no encontrados" }); // 
      }
      return res.status(200).json({ message: "Users eliminados con éxito" });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

module.exports = {
  getUsers,
  getUsersById,
  createUsers,
  modifyUsers,
  deleteUsers,
};