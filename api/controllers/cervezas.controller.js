const Cervezas = require("../models/cervezas.models");

const getCervezas = async (req, res) => {
  try {
    const allCervezas = await Cervezas.find();
    return res.status(200).json(allCervezas);
  } catch (error) {
    return res.status(500).json(error);
  }
 
};
const getCervezasById = async (req, res) => {
  try {
    const { id } = req.params;
    const allCervezas = await Cervezas.findById(id);
    return res.status(200).json(allCervezas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createCervezas = async (req, res) => {
  try {
    const newCerveza = new Cervezas(req.body);
    const createdCerveza = await newCerveza.save();
    return res.status(200).json(createdCerveza);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const modifyCervezas = async (req, res) => {
  try {
    const { id } = req.params;
    const modifyCerveza = new Cervezas(req.body);
    modifyCerveza._id = id;
    const putCerveza = await Cervezas.findByIdAndUpdate(id, modifyCerveza, {
      new: true,
    });
    if (!putCerveza) {
      return res.status(404).json({ message: "Cervezas not found" });
    }
    return res.status(200).json(putCerveza);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCervezas = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCerveza = await Cervezas.findByIdAndDelete(id);
      if (!deleteCerveza) {
        return res.status(404).json({ message: "Cerveza no encontrada" }); // Cambié el mensaje aquí
      }
      return res.status(200).json({ message: "Cerveza eliminada con éxito" });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

module.exports = {
  getCervezas,
  getCervezasById,
  createCervezas,
  modifyCervezas,
  deleteCervezas,
};
