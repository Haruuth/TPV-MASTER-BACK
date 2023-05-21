const Cocteles = require("../models/cocteles.models");
// const server = "http://localhost:9000";

const getCocteles = async (req, res) => {
  try {
    const allCocteles = await Cocteles.find();
    return res.status(200).json(allCocteles);
  } catch (error) {
    return res.status(500).json(error);
  }
 
};
const getCoctelesById = async (req, res) => {
  try {
    const { id } = req.params;
    const allCocteles = await Cocteles.findById(id);
    return res.status(200).json(allCocteles);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createCocteles = async (req, res) => {
  try {
    const newCerveza = new Cocteles(req.body);
    const createdCerveza = await newCerveza.save();
    return res.status(200).json(createdCerveza);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const modifyCocteles = async (req, res) => {
  try {
    const { id } = req.params;
    const modifyCerveza = new Cocteles(req.body);
    modifyCerveza._id = id;
    const putCerveza = await Cocteles.findByIdAndUpdate(id, modifyCerveza, {
      new: true,
    });
    if (!putCerveza) {
      return res.status(404).json({ message: "Cocteles not found" });
    }
    return res.status(200).json(putCerveza);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCocteles = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCerveza = await Cocteles.findByIdAndDelete(id);
      if (!deleteCerveza) {
        return res.status(404).json({ message: "Coctel no encontrada" }); 
      }
      return res.status(200).json({ message: "Coctel eliminada con éxito" });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

module.exports = {
  getCocteles,
  getCoctelesById,
  createCocteles,
  modifyCocteles,
  deleteCocteles,
};
