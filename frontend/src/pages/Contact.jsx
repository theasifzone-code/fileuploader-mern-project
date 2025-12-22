import React, { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      return toast.error("Please fill all fields");
    }
    toast.success("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen  bg-gradient-to-br from-indigo-500 via-purple-400 to-pink-500 px-6 py-24 text-white flex flex-col items-center">

      {/* Heading */}
      <h1 className="text-4xl font-extrabold mb-6">Contact Us</h1>
      <p className="text-center max-w-2xl text-lg mb-10 opacity-90">
        Have a question or feedback? Reach out to us using the form below or through our contact information. We are here to help!
      </p>

      <div className="flex flex-col md:flex-row gap-12 max-w-5xl w-full">

        {/* Contact Form */}
        <form
          className="flex-1 flex flex-col gap-4 bg-white/10 backdrop-blur-xl p-8 rounded-2xl shadow-2xl"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="p-3 rounded-xl bg-white text-black focus:outline-none"
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="p-3 rounded-xl bg-white text-black focus:outline-none"
          />
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="p-3 rounded-xl bg-white text-black focus:outline-none resize-none h-32"
          />
          <button
            type="submit"
            className="py-3 mt-2 rounded-xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 text-white hover:scale-[1.03] transition-all duration-300"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6 text-white">
          <div className="flex items-center gap-3">
            <Mail className="text-yellow-300" />
            <span>haachitech@gmail.com</span>
          </div>
          <div className="flex items-center gap-3">
            <Phone className="text-yellow-300" />
            <span>+92 370 4552928</span>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="text-yellow-300" />
            <span>Gulbarg ll, Lahore, Pakistan</span>
          </div>
          <p className="mt-6 opacity-80 text-sm">
            We usually respond within 24 hours. Looking forward to hearing from you!
          </p>
        </div>

      </div>
    </div>
  );
};

export default Contact;
