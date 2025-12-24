import { FileUpload } from "../models/fileUpload.model.js";
import { uploadFile as cloudinaryUpload } from "../utils/cloudinary.js";
import { v2 as cloudinary } from "cloudinary";
// upload file
export const uploadFile = async (req, res) => {
    try {
        const uId = req.userId;
        if (!req.file) {
            return res.status(400).json({ error: "No file uploaded" });
        }
        const cloudinaryResult = await cloudinaryUpload(req.file.buffer);
        const file = await FileUpload.create({
            fileUrl: cloudinaryResult.secure_url,
            public_id: cloudinaryResult.public_id,
            user_id: uId,
        });
        res.status(200).json({
            message: "File uploaded successfully",
            file,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// get all files
export const getAllFiles = async (req, res) => {
    try {
        const uId = req.userId
        const files = await FileUpload.find({
            user_id: uId
        });
        res.status(200).json({
            message: "Files fetched successfully",
            files,
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

// delete file
export const deleteFile = async (req, res) => {
    try {
        const file = await FileUpload.findById(req.params.id);
        if (!file) {
            return res.status(404).json({ error: "File not found" });
        }
        // delete from cloudinary
        if (file.public_id) {
            await cloudinary.uploader.destroy(file.public_id)
        }
        // delete from mongodb
        await FileUpload.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "File deleted successfully" })
    } catch (error) {
        res.status(500).json({ error: "file deleted error" })
    }
}

// delete all files 
export const deleteAllFiles = async (req, res) => {
    try {
        const files = await FileUpload.find()
        if (files.length == 0) {
            return res.status(404).json({ message: "no files found" })
        }
        // delete all files from cloudinary
        const deletePromises = files.map(file => {
            if (file.public_id) {
                return cloudinary.uploader.destroy(file.public_id)
            }
        })
        await Promise.all(deletePromises);
        // delete all files from mongdb
        await FileUpload.deleteMany();
        res.status(200).json({ message: "All files deleted successfully" })
    } catch (error) {
        res.status(500).json({ message: "Failed to delete files", error });
    }
}

