import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();

const app = express();  

// Middleware
app.use(cors());  
app.use(bodyParser.json());

// Connect to DB
connectDB();

// Routes
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully on Vercel! Use /api/contact for API calls.");
});

// IMPORTANT: Export for Vercel serverless
export default app;

// Only listen if running locally (not on Vercel)
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
}