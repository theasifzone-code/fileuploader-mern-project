import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/db.js";
import fileUpload from "./routes/fileUpload.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";

const app = express();
const PORT = process.env.PORT

// CORS
app.use(cors({
  origin: "http://localhost:5173", 
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());

// Routes
app.use("/api", fileUpload);
app.use("/api", userRoute);

// DB connect
connectDB().catch((err) => console.log(err));

app.listen(PORT,()=>{
    console.log("server running")
})

