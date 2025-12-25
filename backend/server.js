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
app.use(cors());
app.use(express.json({limit:"50mb"}));
app.use(express.urlencoded({extended:true}))
// DB connect
await connectDB().catch((err) => console.log(err));
// Routes
app.use("/api", userRoute);
app.use("/api",  fileUpload);

app.listen(PORT,()=>{
    console.log("server running at port " + PORT)
})

