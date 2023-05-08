const dotenv = require("dotenv").config();
const express = require("express");
const cors = require("cors");
const routerUser = require('./api/routers/user.router');

const { connect } = require("./api/utils/database");

const PORT = process.env.PORT
const server = express();
connect();

const routerUsers = require("./api/routers/users.routes");
const routerOffers = require("./api/routers/offers.routes");
const routerCandidates = require("./api/routers/candidates.routes");

server.use(cors({
    origin: ["http://localhost:3000", "http://localhost:4200", "http://nombre.vercel.com", "http://127.0.0.1:5500"],
    credentials: true,
    methods: 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    allowedHeaders: 'Content-Type, Authorization, Access-Control-Allow-Origin',
    optionsSuccessStatus: 200
}));

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

// Rutas
server.use('/user', routerUser);
server.use("/users", routerUsers);
server.use("/offers", routerOffers);
server.use("/candidates", routerCandidates);
server.get("/", (req, res) => {
    res.status(200).json({ message: "Bienvenidos a Meettalent" });
});

server.listen(PORT, () => console.log(`listening on: http://localhost:${PORT}`));