import { ImageIcon, Trash2 } from "lucide-react";

const AllFile = ({allFiles}) => {
  return (
    <div >
      {/* Heading */}
      <div className="flex items-center justify-center gap-2 mb-10 text-white">
        <ImageIcon size={28} className="text-yellow-300" />
        <h1 className="text-3xl font-extrabold">Uploaded Files</h1>
      </div>
      {/* All Files show*/}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {allFiles.map((file) => (
          <div
            key={file._id}
            className="group relative bg-white/10 backdrop-blur-xl rounded-2xl overflow-hidden shadow-xl"
          >
            <img
              src={file.fileUrl}
              alt="uploaded"
              className="h-48 w-full object-cover group-hover:scale-110 transition-all duration-500"
            />
            {/* Delete Button */}
            <button
              className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300
              hover:bg-red-600"
              onClick={() => console.log("delete button clicked", file._id)}
            >
              <Trash2 size={16} />
            </button>
          </div>
        ))}
      </div>

      {/* Empty  */}
      {allFiles.length === 0 && (
        <p className="text-center text-white opacity-80 mt-10">
          No files uploaded yet
        </p>
      )}
    </div>
  );
};

export default AllFile;
