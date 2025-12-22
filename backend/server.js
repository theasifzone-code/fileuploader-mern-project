import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/db.js";
import fileUpload from "./routes/fileUpload.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";

const app = express();

// CORS
app.use(cors({
  origin: "https://your-vercel-frontend-url.vercel.app", // localhost hatao
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api", fileUpload);
app.use("/api", userRoute);

// DB connect
connectDB().catch((err) => console.log(err));

//  MOST IMPORTANT
export default app;
