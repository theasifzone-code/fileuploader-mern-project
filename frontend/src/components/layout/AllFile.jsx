import { ImageIcon, Trash2 } from "lucide-react";
import { deleteOneFile, deleteAllFiles } from "../../api/auth.api.js";
import { toast } from "react-toastify";

const AllFile = ({ allFiles, getAllFiles }) => {
  const handleDelete = async (id) => {
    try {
      await deleteOneFile(id);
      toast.success("File deleted successfully");
      getAllFiles();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  const handleAllFileDelete = async () => {
    try {
      await deleteAllFiles();
      toast.success("All files deleted successfully");
      getAllFiles();
    } catch (error) {
      toast.error("Something went wrong");
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4">

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5 mb-10">

        {/* Left */}
        <div className="flex items-center gap-3 sm:gap-4 text-white">
          <span className="p-2 sm:p-3 rounded-xl bg-yellow-300/20 border border-yellow-400/30 flex items-center justify-center">
            <ImageIcon
              className="text-yellow-300 w-4 h-4 sm:w-6 sm:h-6 "
            />
          </span>

          <h1 className="text-2xl sm:text-3xl font-black ">
            Uploaded Files
          </h1>
        </div>

        {/* Delete All */}
        {allFiles.length > 0 && (
          <button
            className="flex items-center justify-center gap-2 bg-gradient-to-r 
            from-red-500 to-red-700 text-white px-4 sm:px-6 py-2.5 rounded-xl 
            shadow-lg shadow-red-900/40 hover:scale-105 hover:shadow-red-500/50
            transition-all duration-300 w-full sm:w-auto"
            onClick={handleAllFileDelete}
          >
            <Trash2 size={18} />
            Delete All
          </button>
        )}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-7">
        {allFiles.length > 0 ? allFiles.map((file) => (
          <div
            key={file._id}
            className="relative rounded-2xl overflow-hidden bg-white/10 border border-white/20 
            shadow-xl hover:shadow-2xl hover:shadow-gray-900/40 backdrop-blur-xl 
            group transition-all duration-500"
          >
            <img
              src={file.fileUrl}
              alt="uploaded"
              className="h-48 sm:h-52 md:h-56 w-full object-cover group-hover:scale-110 transition-all duration-500"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t 
            from-black/70 via-black/30 to-transparent opacity-0 
            group-hover:opacity-100 transition-all duration-500" />

            {/* Delete One */}
            <button
              className="absolute top-3 right-3 bg-red-500/80 hover:bg-red-600 text-white 
              p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 
              transition-all duration-300"
              onClick={() => handleDelete(file._id)}
            >
              <Trash2 size={18} />
            </button>
          </div>
        )): null}
      </div>

      {/* Empty State */}
      {allFiles.length === 0 && (
        <div className="text-center text-white opacity-90 mt-16">
          <p className="text-xl sm:text-2xl">No files uploaded </p>
          <p className="opacity-60 mt-1 text-sm sm:text-base">
            Upload something 
          </p>
        </div>
      )}
    </div>
  );
};

export default AllFile;
