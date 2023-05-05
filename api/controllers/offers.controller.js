const Offers = require("../models/offers.models");


const getOffers = async (req, res) => {
  try {
    const allOffers = await Offers.find();
    return res.status(200).json(allOffers);
  } catch (error) {
    return res.status(500).json(error);
  }
 
};
const getOffersById = async (req, res) => {
  try {
    const { id } = req.params;
    const allOffers = await Offers.findById(id);
    return res.status(200).json(allOffers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createOffers = async (req, res) => {
  try {
    const newOffers = new Offers(req.body);
    const createdOffers = await newOffers.save();
    return res.status(200).json(createdOffers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const modifyOffers = async (req, res) => {
  try {
    const { id } = req.params;
    const modifyOffers = new Offers(req.body);
    modifyOffers._id = id;
    const putOffers = await Offers.findByIdAndUpdate(id, modifyOffers, {
      new: true,
    });
    if (!putOffers) {
      return res.status(404).json({ message: "Offers not found" });
    }
    return res.status(200).json(putOffers);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteOffers = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteOffers = await Offers.findByIdAndDelete(id);
      if (!deleteOffers) {
        return res.status(404).json({ message: "Offers no encontrados" }); // 
      }
      return res.status(200).json({ message: "Offers eliminados con éxito" });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

module.exports = {
  getOffers,
  getOffersById,
  createOffers,
  modifyOffers,
  deleteOffers,
};