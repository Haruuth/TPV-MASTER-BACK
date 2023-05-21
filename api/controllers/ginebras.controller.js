const Ginebras = require("../models/ginebras.model");
// const server = "http://localhost:9000";

const getGinebras = async (req, res) => {
  try {
    const allGinebras = await Ginebras.find();
    return res.status(200).json(allGinebras);
  } catch (error) {
    return res.status(500).json(error);
  }
 
};
const getGinebrasById = async (req, res) => {
  try {
    const { id } = req.params;
    const allGinebras = await Ginebras.findById(id);
    return res.status(200).json(allGinebras);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createGinebras = async (req, res) => {
  try {
    const newGinebra = new Ginebras(req.body);
    const createdGinebra = await newGinebra.save();
    return res.status(200).json(createdGinebra);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const modifyGinebras = async (req, res) => {
  try {
    const { id } = req.params;
    const modifyGinebra = new Ginebras(req.body);
    modifyGinebra._id = id;
    const putGinebra = await Ginebras.findByIdAndUpdate(id, modifyGinebra, {
      new: true,
    });
    if (!putGinebra) {
      return res.status(404).json({ message: "ginebra not found" });
    }
    return res.status(200).json(putGinebra);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteGinebras = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteGinebra = await Ginebras.findByIdAndDelete(id);
      if (!deleteGinebra) {
        return res.status(404).json({ message: "ginebra no encontrada" }); 
      }
      return res.status(200).json({ message: "ginebra eliminada con éxito" });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

module.exports = {
  getGinebras,
  getGinebrasById,
  createGinebras,
  modifyGinebras,
  deleteGinebras,
};
