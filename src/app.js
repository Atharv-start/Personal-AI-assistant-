import express from "express";
import cors from "cors";
import morgan from "morgan";
import userRoutes from "./routes/userRoutes.js"; // must be file, not folder
// ✅ must include .js extension

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

// Routes
app.get("/", (req, res) => {
  res.send("🚀 Personal AI Manager Backend is running...");
});

app.use("/api/users", userRoutes);

// Global error handler (basic)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

export default app;
