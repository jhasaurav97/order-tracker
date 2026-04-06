import express from "express";
import orderRoutes from "./routes/orderRoutes.js";

const app = express();

// Basic config
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));

// Routes
app.use("/api", orderRoutes);


app.get("/", (req, res) => {
    res.send("API running");
});

export default app;