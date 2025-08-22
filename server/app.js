import express from "express";

const app = express();

const PORT = process.env.PORT || 5001;

app.use(express.json());

app.get("/health", (req, res) => {
res.status(200).json({ ok: true, message: "server is healthy" });
});

app.get("/", (req, res) => {
res.status(200).send("Welocome to the API. Try GET /hralth pr POST /register.")
});


app.post("/register", (req, res) => {
 const userData = req.body; // { name , email, possword, ....}
 console.log(" Incoming /register payload:", userData);
 res.json(userData)
});

app.listen(PORT, () => {
    console.log( `Server running at http://localhost:${PORT}`);
    });