const express = require("express");

const app = express();
const PORT = 3000;

// Middleware (important)
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send("Server is running 🚀");
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});