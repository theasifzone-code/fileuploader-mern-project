import api from "./axios.js";

// AUTH 
export const loginApi = (data) => {
    return api.post("/auth/login", data);
};

export const registerApi = (data) => {
    return api.post("/auth/register", data);
};

// FILE UPLOAD 
export const uploadFileApi = (file) => {
    const formData = new FormData();
    formData.append("file", file);

    return api.post("/upload", formData);
};

//  GET FILES 
export const getAllFilesApi = () => {
    return api.get("/files");
};

// delete file
export const deleteOneFile = (id)=>{
    return api.delete(`/files/${id}`)
}

// delete all files
export const deleteAllFiles = ()=>{
    return api.delete("/file/deleteAllFiles")
}

// otp varify
export const verifyOtp = (data)=>{
    return api.post("/auth/verify-otp",data)
}