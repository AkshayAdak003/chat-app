import express from "express";
import authRoutes from "./routes/authroute.js";
import messageRoutes from "./routes/messageroute.js";
import dotenv from "dotenv";
import mongoose from "mongoose";
import { connectDB } from "./lib/db.js";
import cookieParser from "cookie-parser"; 
import cors from "cors";
import path from "path";
import { app, server } from "./lib/socket.js";

dotenv.config();

const PORT = process.env.PORT;
const _dirname = path.resolve();

// === MIDDLEWARE ===
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// ⚡ CORS
app.use(
  cors({
    origin: "http://localhost:5173", // you can also put your Render frontend URL here
    credentials: true,
  })
);

// === ROUTES ===
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);

// === SERVE FRONTEND IN PRODUCTION ===
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(_dirname, "../frontend/dist")));

<<<<<<< HEAD
  app.get("/*",(req,res)=>{
    res.sendFile(path.join(_dirname,"../frontend", "dist", "index.html"));
  })
};
=======
  // ✅ FIXED catch-all route
  app.get("/*", (req, res) => {
    res.sendFile(path.join(_dirname, "../frontend", "dist", "index.html"));
  });
}
>>>>>>> a197d85add399e51da651177338a769894a24afe

// === SERVER ===
server.listen(PORT, () => {
  console.log("Server is running on port : " + PORT);
  connectDB();
});

