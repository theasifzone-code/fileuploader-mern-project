import mongoose from "mongoose";

const fileUploadSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "User"
    },
    fileUrl: {
        type: String,
        required: true,
    },
    public_id: {
        type: String,
        required: true
    }
}, { timestamps: true });


export const FileUpload = mongoose.model("FileUpload", fileUploadSchema);
