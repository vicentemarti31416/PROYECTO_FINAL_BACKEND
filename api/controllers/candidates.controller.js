const Candidates = require("../models/candidates.models");


const getCandidates = async (req, res) => {
  try {
    const allCandidates = await Candidates.find();
    return res.status(200).json(allCandidates);
  } catch (error) {
    return res.status(500).json(error);
  }
 
};
const getCandidatesById = async (req, res) => {
  try {
    const { id } = req.params;
    const allCandidates = await Candidates.findById(id);
    return res.status(200).json(allCandidates);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createCandidates = async (req, res) => {
  try {
    const newCandidates = new Candidates(req.body);
    const createdCandidates = await newCandidates.save();
    return res.status(200).json(createdCandidates);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const modifyCandidates = async (req, res) => {
  try {
    const { id } = req.params;
    const modifyCandidates = new Candidates(req.body);
    modifyCandidates._id = id;
    const putCandidates = await Candidates.findByIdAndUpdate(id, modifyCandidates, {
      new: true,
    });
    if (!putCandidates) {
      return res.status(404).json({ message: "Candidates not found" });
    }
    return res.status(200).json(putCandidates);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCandidates = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCandidates = await Candidates.findByIdAndDelete(id);
      if (!deleteCandidates) {
        return res.status(404).json({ message: "Candidates no encontrados" }); // 
      }
      return res.status(200).json({ message: "Candidates eliminados con éxito" });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

module.exports = {
  getCandidates,
  getCandidatesById,
  createCandidates,
  modifyCandidates,
  deleteCandidates,
};