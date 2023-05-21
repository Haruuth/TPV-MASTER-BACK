const mongoose = require("mongoose")

const Schema = mongoose.Schema

const cervezasSchema = new Schema (
    {
        nombre: {type: String, required: true },
        precio: {type: Number, required: true },
        precioNoche: {type: Number, required: true },
        image: {type: String, required: false },
    }
)

const Cervezas = mongoose.model("cervezas", cervezasSchema);

module.exports = Cervezas;