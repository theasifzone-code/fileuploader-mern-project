import { Info } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-500 flex items-center justify-center px-4">
      <div className="w-full max-w-5xl text-white bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl text-center flex flex-col gap-6 mt-24 mb-10 sm:mt-28 md:mt-25">
        {/* Heading */}
        <div className="flex items-center gap-2 sm:gap-3 justify-center">
          <Info
            className="text-yellow-300"
            size={24}
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold">
            About Our Platform
          </h1>
        </div>
        {/* Content */}
        <div className="space-y-4 sm:space-y-5">
          <p className="text-sm sm:text-base md:text-lg opacity-90 leading-relaxed">
            Welcome to <span className="font-bold text-yellow-300">File Upload</span> — a modern, secure, and intuitive platform designed to make uploading, managing, and sharing files easier than ever.
          </p>
          <p className="text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
            Our platform is built with performance and user experience in mind. Enjoy smooth uploads, responsive galleries, and real-time previews while keeping your files safe and organized.
          </p>
          <p className="text-sm sm:text-base md:text-lg opacity-80 leading-relaxed">
            Whether you're working on personal projects or professional tasks, File Upload Pro ensures fast, reliable, and secure file handling every step of the way.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
