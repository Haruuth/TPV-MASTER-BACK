const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { connect } = require("./api/utils/database");

const PORT = process.env.PORT;
const server = express();
connect();

const routerCervezas = require("./api/routers/cervezas.routes");
const routerCocteles = require("./api/routers/cocteles.routes");
const routerGinebras = require("./api/routers/ginebras.routes");

server.use(cors({
    origin: ["http://localhost:3000", "http://localhost:4200", "http://nombre.vercel.com", "http://127.0.0.1:5500"],
    credentials: true
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Rutas
server.use("/cervezas", routerCervezas);
server.use("/cocteles", routerCocteles);
server.use("/ginebras", routerGinebras);
server.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenido a la API de UNICO" });
});

server.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));
