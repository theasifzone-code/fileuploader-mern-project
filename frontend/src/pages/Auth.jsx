import React, { useState } from "react";
import { toast } from "react-toastify";
import { LockKeyhole, User, Mail, Eye, EyeOff } from "lucide-react";
import { useNavigate } from "react-router-dom";
import img from "../assets/20944201.jpg";
import { loginApi, registerApi } from "../api/auth.api.js";
import Inp from "../components/common/Inp";

const Auth = ({ isSignUp, setIsSignUp }) => {
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false)
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
    });
    const { name, email, password } = formData;

    // handle change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    
    // submit handle
    const submitHandler = async (e) => {
        e.preventDefault();
        if (!email || !password || (isSignUp && !name)) {
            return toast.error("Please fill all the fields");
        }
        try {
            setLoading(true);
            if (isSignUp) {
                const res = await registerApi({ name, email, password });
                localStorage.setItem("userId", res.data.userId)
                toast.success(res.data.message);
                setIsSignUp(false);
                navigate("/verify-otp")
            } else {
                const res = await loginApi({ email, password });
                localStorage.setItem("token", res.data.token);
                toast.success(res.data.message);
                navigate("/home");
            }
            setFormData({ name: "", email: "", password: "" });
        } catch (error) {
            toast.error(error.response?.data?.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center mt-17 md:mt-10  px-6">
            <div className="max-w-5xl w-full bg-gradient-to-l from-indigo-600 via-purple-600 to-pink-600  rounded-3xl shadow-2xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
                {/* Left Image */}
                <div className="hidden md:flex items-center justify-center bg-black/20">
                    <img
                        src={img}
                        alt="auth"
                        className="h-full w-full object-cover opacity-90"
                    />
                </div>
                {/* Right Form */}
                <div className="p-10 flex flex-col justify-center gap-6 text-white">
                    <h1 className="text-4xl font-extrabold text-center">
                        {isSignUp ? "Create Account" : "Welcome Back"}
                    </h1>
                    <p className="text-center text-sm opacity-80">
                        {isSignUp
                            ? "Sign up to start uploading your files"
                            : "Login to access your dashboard"}
                    </p>
                    <form onSubmit={submitHandler} className="flex flex-col gap-4 mt-4">
                        {isSignUp && (
                            <Inp
                                icon={<User size={16} className="text-zinc-900" />}
                                name="name"
                                value={name}
                                onChange={handleChange}
                                type="text"
                                placeholder="Full Name"
                            />
                        )}
                        <Inp
                            icon={<Mail size={16} className="text-zinc-900" />}
                            name="email"
                            value={email}
                            onChange={handleChange}
                            type="email"
                            placeholder="Email Address"
                        />
                        <Inp
                            icon={<LockKeyhole size={16} className="text-zinc-900" />}
                            rightIcon={showPassword ? (<EyeOff size={18} className="cursor-pointer text-zinc-800" onClick={() => setShowPassword(false)} />) : (<Eye size={18} className="text-zinc-800" onClick={() => setShowPassword(true)} />)}
                            name="password"
                            value={password}
                            onChange={handleChange}
                            type={showPassword ? "text" : "password"}
                            placeholder="Password"
                        />
                        <button disabled={loading} type="submit" className="mt-2 py-3  rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] transition-all duration-300 disabled:opacity-50">
                            {loading ? "Please wait..." : isSignUp ? "Sign Up" : "Login"}
                        </button>
                    </form>
                    <div className="text-center text-sm mt-4">
                        {isSignUp ? "Already have an account?" : "Don't have an account?"}
                        <button onClick={() => setIsSignUp(!isSignUp)} className="ml-1 font-bold underline hover:cursor-pointer hover:text-yellow-300">
                            {isSignUp ? "Login" : "Sign Up"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Auth;
