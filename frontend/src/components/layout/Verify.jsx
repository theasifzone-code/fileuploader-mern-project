import React, { useState } from 'react'
import { verifyOtp } from "../../api/auth.api.js"
import { useNavigate } from 'react-router-dom'
import { LockKeyhole } from "lucide-react";
import Inp from "../common/Inp.jsx";
import { toast } from 'react-toastify';

const Verify = () => {
    const [otp, setOtp] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const submitHandler = async (e) => {
        e.preventDefault();
        if (otp.length !== 6) {
            return toast.error("Please enter 6 digit OTP");
        }
        try {
            setLoading(true);
            const userId = localStorage.getItem("userId");
            const res = await verifyOtp({ userId, otp });
            localStorage.setItem("token", res.data.token);
            toast.success(res.data.message || "Account verified");
            localStorage.removeItem("userId");
            navigate("/home");
        } catch (error) {
            toast.error(error.response?.data?.message || "Invalid OTP");
        } finally {
            setLoading(false);
        }
    };
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-600 to-pink-500">
            <div className="bg-white p-8 rounded-3xl shadow-2xl w-[350px] animate-fadeIn">
                <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-2">
                    Verify Account
                </h1>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Enter the 6-digit code sent to your email
                </p>
                <form onSubmit={submitHandler} className="space-y-4">
                    <Inp
                        icon={<LockKeyhole size={18} />}
                        name="otp"
                        value={otp}
                        onChange={(e) => setOtp(e.target.value)}
                        type="text"
                        maxLength={6}
                        placeholder="Enter OTP"
                        className="bg-gray-100 text-gray-800 rounded-xl tracking-[6px] text-center font-bold text-xl"
                    />
                    <button
                        disabled={loading}
                        type="submit"
                        className="w-full py-3 rounded-xl font-bold text-white bg-gradient-to-r from-pink-500 to-purple-600 hover:scale-[1.02] transition-all disabled:opacity-60"
                    >
                        {loading ? "Verifying..." : "Verify OTP"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Verify;
