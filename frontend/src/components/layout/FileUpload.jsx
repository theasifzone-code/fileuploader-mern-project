import { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import { UploadCloud } from "lucide-react"
import { uploadFileApi } from "../../api/auth.api.js";

const FileUpload = ({getAllFiles}) => {
  const [fileUpload, setFileUpload] = useState(null);
  const [btn, setBtn] = useState("Upload");
  const fileRef = useRef(null);

  const uploadHandle = async () => {
    if (!fileUpload) {
      toast.error("Please select a file first");
      return;
    }

    try {
      setBtn("Uploading...");
      const res = await uploadFileApi(fileUpload);

      if (res) {
        toast.success("File uploaded successfully");
        setBtn("Uploaded");
        setFileUpload(null);
        getAllFiles();
        fileRef.current.value = "";
      } else {
        toast.error("Upload failed");
        setBtn("Failed");
      }
    } catch (error) {
      toast.error("Something went wrong");
      setBtn("Failed");
    }

    setTimeout(() => {
      setBtn("Upload");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-6">
      <ToastContainer />
      <div className="w-full  bg-white/10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="flex flex-col items-center gap-3 mb-6">
          <UploadCloud size={40} className="text-yellow-300" />
          <h1 className="text-3xl font-extrabold">Upload File</h1>
          <p className="text-sm opacity-80 text-center">
            Securely upload your files to the server
          </p>
        </div>

        <form className="flex flex-col gap-4">
          <label className="flex flex-col items-center justify-center gap-2 p-6 border-2 border-dashed border-white/40 rounded-xl cursor-pointer hover:border-yellow-300 transition-all">
            <input
              ref={fileRef}
              type="file"
              hidden
              onChange={(e) => setFileUpload(e.target.files[0])}
            />
            <span className="text-sm">
              {fileUpload ? fileUpload.name : "Click to choose a file"}
            </span>
            <span className="text-xs opacity-70">
              Supported: JPG, PNG
            </span>
          </label>

          <button
            type="button"
            onClick={uploadHandle}
            className="py-3 rounded-xl font-bold
            bg-gradient-to-r from-yellow-400 to-orange-500 text-black
            hover:scale-[1.03] transition-all duration-300"
          >
            {btn}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FileUpload;
