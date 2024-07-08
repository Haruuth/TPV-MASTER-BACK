const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const cuentasSchema = new Schema({
    num_mesa: {type: Number,required: true,},
    fecha: {type: Date,required: true,},
    hora: {type: String,required: true,},
    productos: [{
        nombre: {type: String,required: true,},
        precio: {type: Number, required: true,},
    }],
    metodo_pago:{type: String, required: false,},
    total: {type: Number,required: true,}
});


const Cuentas = mongoose.model("cuentas", cuentasSchema);

module.exports = Cuentas;
