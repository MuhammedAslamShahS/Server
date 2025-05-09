const express = require("express");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 8080;

const corsOptions = {
    origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));

app.get("/api", (req, res) => {
    res.json({ fruits: ["apple", "orange", "banana"] });
});

app.listen(PORT, () => {
    console.log(`Server\ Running.... on port no: ${PORT}`);
});
