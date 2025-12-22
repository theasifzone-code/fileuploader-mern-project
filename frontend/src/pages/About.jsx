import React from "react";
import { Info } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-500 flex flex-col items-center">

      <div className="max-w-4xl text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-8 shadow-2xl text-center flex flex-col gap-6 mt-[10%]">
        {/* heading */}
        <div className="flex items-center gap-3 mb-3 text-center justify-center">
          <Info size={32} className="text-yellow-300" />
          <h1 className="text-4xl font-extrabold">About Our Platform</h1>
        </div>
        {/* Content */}
        <div>
          <p className="text-lg opacity-90">
            Welcome to <span className="font-bold text-yellow-300">File Upload Pro</span> — a modern, secure, and intuitive platform designed to make uploading, managing, and sharing files easier than ever. Whether you're storing images, documents, or PDFs, our system ensures your data is safe and accessible anytime.
          </p>
          <p className="text-lg opacity-80">
            Our platform is built with performance and user experience in mind. Enjoy smooth uploads, responsive galleries, and real-time previews. Stay organized and efficient with advanced file management tools tailored for your workflow.
          </p>
          <p className="text-lg opacity-80">
            Join thousands of users who trust our service for fast, reliable, and secure file storage. From personal projects to enterprise solutions, we make file handling effortless.
          </p>
        </div>
      </div>

    </div>
  );
};

export default About;
