"use client";

import {useState } from "react";
import EmailIcon from "@mui/icons-material/Email";
import LockIcon from "@mui/icons-material/Lock";
import { useRouter } from "next/navigation";

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps>= ({ onLoginSuccess }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

  if (email === "admin@fitpro.com" && password === "password") {
     onLoginSuccess(); 
  } else 
  {
    alert("Invalid credentials");
  }
    
};

  return (
    <div className="min-h-screen flex flex-col items-center bg-gray-100 pt-20">
     <div className="flex flex-col items-center mb-6">
        <div className="flex items-center space-x-4 mb-2">
          <div className="h-12 w-12 bg-[#046c4e] flex items-center justify-center text-white font-bold text-2xl rounded-md">
            F
          </div>
          <h2 className="text-2xl font-bold">NSWLC</h2>
        </div>
        <p className="text-gray-500 text-center">
          Welcome back! Please sign in to your account.
        </p>
      </div>

      <div className="w-full max-w-md p-8 bg-white shadow-md rounded-lg">
        <h3 className="text-center text-xl font-semibold mb-1">Sign In</h3>
        <p className="text-center text-gray-500 mb-6">
          Enter your credentials to access your dashboard
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="relative">
            <label className="block text-gray-700 mb-1" htmlFor="email">
              Email Address
            </label>
            <span className="absolute left-3 top-[38px] text-gray-400">
              <EmailIcon fontSize="small" />
            </span>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="relative">
            <label className="block text-gray-700 mb-1" htmlFor="password">
              Password
            </label>
            <span className="absolute left-3 top-[38px] text-gray-400">
              <LockIcon fontSize="small" />
            </span>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-400"
              required
            />
          </div>

          <div className="text-right mt-1">
            <a href="#" className="text-sm text-green-600 hover:underline">
                Forgot Your Password?
          </a>
          </div>
      
          <button
            type="submit"
            className="w-full bg-[#046c4e] text-white py-2 rounded-md hover:bg-green-600 transition"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6 bg-red-50 p-4 rounded-md text-sm text-blue-700">
          <p className="font-semibold">Demo Credentials:</p>
          <p className="text-blue-300">Email: admin@fitpro.com</p>
          <p className="text-blue-300">Password: password</p>
        </div>

       
        <p className="mt-4 text-center text-gray-500 text-sm">
          Don’t have an account?{" "}
          <a href="#" className="text-[#046c4e]">
            Contact your administrator
          </a>
        </p>
        <p className="mt-6 text-center text-gray-400 text-xs">
          © 2024 FitPro. All rights reserved
        </p>
      </div>
    </div>
  );
};

export default LoginPage;