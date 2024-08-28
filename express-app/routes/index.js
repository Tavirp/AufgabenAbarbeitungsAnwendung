const express = require("express");
const router = express.Router();

// Importiere Routen
const authRoutes = require("./authRoutes");
const UserRoutes = require("./UserRoutes");

// Verwende Routen
router.use("/auth", authRoutes);
router.use("/user", UserRoutes);

module.exports = router;
