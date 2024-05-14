const express = require("express");
const router = express.Router();

// Importiere Routen
const authRoutes = require("./authRoutes");
const StatsRoutes = require("./StatsRoutes");
const UserRoutes = require("./UserRoutes");
const TodoRoutes = require("./TodoRoutes");

// Verwende Routen
router.use("/auth", authRoutes);
router.use("/stats", StatsRoutes);
router.use("/user", UserRoutes);
router.use("/todos", TodoRoutes);

module.exports = router;
