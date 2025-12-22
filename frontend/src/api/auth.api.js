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
export const getAllFilesApi = (params) => {
    return api.get("/files", { params });
};
