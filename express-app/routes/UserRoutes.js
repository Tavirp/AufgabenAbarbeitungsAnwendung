const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/Users");

// GET-Anforderungen (Benutzerdaten abrufen):
router.get("/", (req, res) => {
  User.findAll()
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byId", (req, res) => {
  const { id } = req.query;
  User.findOne({ where: { id: id } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});
router.get("/byUsername", (req, res) => {
  const { username } = req.query;
  User.findOne({ where: { username: username } })
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      console.error("Fehler beim Abrufen von Daten aus der Datenbank:", err);
      res.status(500).json({ message: "Interner Serverfehler!" });
    });
});

// POST-Anforderungen (Neuen Benutzer erstellen):
router.post(
  "/",
  [
    body("id").trim().isNumeric().notEmpty(),
    body("username").trim().isString(),
    body("email").trim().notEmpty().isEmail(),
    body("password").trim().notEmpty().isString().isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Code, um einen Benutzer zu erstellen
    const { id, username, email, password } = req.body;
    const User = await User.create({
      id: id,
      username: username,
      email: email,
      password: password,
    });
    res.send("Neuer Benutzer erfolgreich erstellt!");
  }
);

// PUT-Anforderungen (Benutzerdaten aktualisieren):
router.put(
  "/:id",
  [
    body("id").trim().isNumeric().notEmpty(),
    body("username").trim().isString(),
    body("email").trim().notEmpty().isEmail(),
    body("password").trim().notEmpty().isString().isLength({ min: 6 }),
  ],
  async (req, res) => {
    const { id } = req.params;
    const { username, email, password } = req.body;

    try {
      // Finde den User mit der angegebenen ID
      const user = await User.findOne({ where: { id: id } });

      if (!user) {
        return res.status(404).json({ message: "User nicht gefunden!" });
      }
      // Aktualisiere die Userdaten
      user.username = username;
      user.email = email;
      user.password = password;
      await user.save;

      res.json(user);
    } catch (error) {
      console.error("Fehler beim Aktualisieren des Users:", error);
      res.status(500).json({ message: "Interner Serverfehler!" });
    }
  }
);

// DELETE-Anforderungen (Benutzerdaten löschen):
router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  try {
    // Finde den User mit der angegebenen userId
    const user = await User.findOne({ where: { id: id } });

    if (!User) {
      return res.status(404).json({ message: "User nicht gefunden!" });
    }

    // Lösche den User
    await user.destroy();

    res.json({ message: "User erfolgreich gelöscht!" });
  } catch (error) {
    console.error("Fehler beim Löschen des Users:", error);
    res.status(500).json({ message: "Interner Serverfehler!" });
  }
});

module.exports = router;
