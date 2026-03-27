const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/login", (req, res) => {
    const { username } = req.body;

    const token = jwt.sign({ username }, process.env.SECRET, {
        expiresIn: "1h"
    });

    res.json({ token });
});

module.exports = router;