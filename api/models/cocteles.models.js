const mongoose = require("mongoose")

const Schema = mongoose.Schema

const coctelesSchema = new Schema (
    {
        nombre: {type: String, required: true },
        precio: {type: Number, required: true },
        precioNoche: {type: Number, required: true },
        image: {type: String, required: false },
    }
)

const Cocteles = mongoose.model("cocteles", coctelesSchema);

module.exports = Cocteles;