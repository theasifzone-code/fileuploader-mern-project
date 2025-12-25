import dotenv from "dotenv";
dotenv.config();
import express from "express";
import connectDB from "./db/db.js";
import fileUpload from "./routes/fileUpload.route.js";
import userRoute from "./routes/user.route.js";
import cors from "cors";
import {authMiddleware} from "./middleware/auth.middleware.js"

const app = express();
const PORT = process.env.PORT

// CORS
app.use(cors());
app.use(express.json());
// DB connect
connectDB().catch((err) => console.log(err));
// Routes
app.use("/api", userRoute);
app.use("/api",  fileUpload);

app.listen(PORT,()=>{
    console.log("server running at port " + PORT)
})

