import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import connectDB from "./config/db.js";
import contactRoutes from "./routes/contactRoutes.js";

dotenv.config();
connectDB();

const app = express();  

app.use(cors());  
app.use(bodyParser.json());
app.use("/api", contactRoutes);

app.get("/", (req, res) => {
  res.send("✅ Backend is running successfully on Render! Use /api/contact for API calls.");
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
