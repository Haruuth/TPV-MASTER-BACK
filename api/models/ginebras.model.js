const mongoose = require("mongoose")

const Schema = mongoose.Schema

const ginebrasSchema = new Schema (
    {
        nombre: {type: String, required: true },
        precio: {type: Number, required: true },
        precioNoche: {type: Number, required: false },
        image: {type: String, required: false },
    }
)

const Ginebras = mongoose.model("ginebras", ginebrasSchema);

module.exports = Ginebras;