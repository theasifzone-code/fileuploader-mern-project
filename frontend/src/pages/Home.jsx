import FileUpload from "../components/layout/FileUpload";
import AllFile from "../components/layout/AllFile";
import { useState, useEffect } from "react";
import { getAllFilesApi } from "../api/auth.api.js";

const Home = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [allFiles, setAllFiles] = useState([]);
  const getAllFiles = async () => {
    try {
      setIsLoading(true)
      const res = await getAllFilesApi();
      setAllFiles(res.data.files);
    } catch (error) {
      toast.error("Something went wrong");
    }
  };
  useEffect(() => {
    if (allFiles.length === 0) {
      getAllFiles();
    }
  }, []);
  return (
    <div className="bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-500 pb-10">
      {/* Upload Section */}
      <section className=" px-6 flex justify-center">
        <div className="w-full max-w-5xl">
          <FileUpload getAllFiles={getAllFiles} />
        </div>
      </section>
       {isLoading ? 
      <section className=" pb-2 px-6">
        <AllFile allFiles={allFiles} getAllFiles={getAllFiles} />
      </section> : <h1>Loading....</h1>
      }
    </div>
  );
};

export default Home;
