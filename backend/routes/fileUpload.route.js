import express from "express";
import { uploadFile, getAllFiles,deleteFile,deleteAllFiles } from "../controllers/fileUpload.controller.js";
import { upload} from "../middleware/multer.js";
import { authMiddleware } from "../middleware/auth.middleware.js";
const router = express.Router();

router.post("/upload",authMiddleware, upload.single("file"), uploadFile);
router.get("/files",authMiddleware, getAllFiles);
router.delete("/files/:id",authMiddleware,deleteFile);
router.delete("/file/deleteAllFiles",authMiddleware, deleteAllFiles)

export default router;