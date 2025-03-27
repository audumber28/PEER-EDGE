const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

const colleges = [
    { id: 1, name: "Indian Institute of Technology Bombay", city: "Mumbai", state: "Maharashtra" },
    { id: 2, name: "Indian Institute of Technology Delhi", city: "New Delhi", state: "Delhi" },
    { id: 3, name: "Indian Institute of Science", city: "Bangalore", state: "Karnataka" },
];

// Endpoint to get all colleges
app.get("/api/colleges", (req, res) => {
    res.json({ colleges, status: "success" });
});

// Endpoint to get a college by ID
app.get("/api/colleges/:id", (req, res) => {
    const college = colleges.find(c => c.id === parseInt(req.params.id));
    if (!college) return res.status(404).json({ message: "College not found" });
    res.json({ college, status: "success" });
});

// Endpoint to add a new college
app.post("/api/colleges", (req, res) => {
    const { name, city, state } = req.body;
    const newCollege = { id: colleges.length + 1, name, city, state };
    colleges.push(newCollege);
    res.json({ message: "College added", college: newCollege });
});

app.listen(port, () => {
    console.log(`Decoy API running at http://localhost:${port}`);
});
