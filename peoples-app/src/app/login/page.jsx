'use client'
import React from "react";
import LoginForm from "@/sections/LoginForm";
import AuthProvider from "@/context/AuthContext";
import Navbar from "@/components/NavBar";

const page = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <div className="max-w-xl mt-28 mx-auto rounded-md bg-slate-100">
          <LoginForm />
        </div>
      </div>
    </AuthProvider>
  );
};

export default page;
