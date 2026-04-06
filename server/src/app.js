import express from "express";

const app = express();

// Basic config
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));


app.get("/", (req, res) => {
    res.send("API running");
});

export default app;