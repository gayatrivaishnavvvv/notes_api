import express from "express";
import cors from "cors";
import noteRouter from "./routes/note.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

// Mount Note Routes
app.use("/api/v1/notes", noteRouter);
// Add this health check route in backend/src/app.js
app.get("/", (req, res) => {
  res.send("API is running smoothly!");
});

export { app };