require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const app = express();

const userRoutes = require("./routes/user.routes");
const logementRoutes = require("./routes/logement.routes");
const aboutRoutes = require("./routes/about.routes");

//----------------------------------------------------------------------------------------

// Connect to MongoDB Database
mongoose
	.connect(`${process.env.DB_SECRET_KEY}`)
	.then(() => console.log("Connexion à MongoDB réussie !"))
	.catch(() => console.log("Connexion à MongoDB échouée !"));

//----------------------------------------------------------------------------------------

// Middleware to parse JSON
app.use(express.json());
// Middleware for URL-encoded data
app.use(express.urlencoded({ extended: true }));
// Prevent CORS issues
app.use(cors());

app.use("/api/auth", userRoutes);

app.use("/api/logements", logementRoutes);

app.use("/api/about", aboutRoutes);

module.exports = app;
