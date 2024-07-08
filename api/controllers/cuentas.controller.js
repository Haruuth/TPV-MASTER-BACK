const Cuentas = require("../models/cuentas.models");

const getCuentas = async (req, res) => {
  try {
    const allCuentas = await Cuentas.find();
    return res.status(200).json(allCuentas);
  } catch (error) {
    return res.status(500).json(error);
  }
 
};
const getCuentasById = async (req, res) => {
  try {
    const { id } = req.params;
    const allCuentas = await Cuentas.findById(id);
    return res.status(200).json(allCuentas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const createCuentas = async (req, res) => {
  try {
    const newCuentas = new Cuentas(req.body);
    const createdCuentas = await newCuentas.save();
    return res.status(200).json(createdCuentas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const modifyCuentas = async (req, res) => {
  try {
    const { id } = req.params;
    const modifyCuentas = new Cuentas(req.body);
    modifyCuentas._id = id;
    const putCuentas = await Cuentas.findByIdAndUpdate(id, modifyCuentas, {
      new: true,
    });
    if (!putCuentas) {
      return res.status(404).json({ message: "Cuentas not found" });
    }
    return res.status(200).json(putCuentas);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const deleteCuentas = async (req, res) => {
    try {
      const { id } = req.params;
      const deleteCuentas = await Cuentas.findByIdAndDelete(id);
      if (!deleteCuentas) {
        return res.status(404).json({ message: "Cuentas no encontrada" }); // Cambié el mensaje aquí
      }
      return res.status(200).json({ message: "Cuentas eliminada con éxito" });
    } catch (error) {
      return res.status(500).json(error);
    }
  };
  

module.exports = {
  getCuentas,
  getCuentasById,
  createCuentas,
  modifyCuentas,
  deleteCuentas,
};
