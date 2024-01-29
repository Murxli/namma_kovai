'use client'
import React from "react";
import RegisterForm from "@/sections/RegisterForm";
import AuthProvider from "@/context/AuthContext";
import Navbar from "@/components/NavBar";

const page = () => {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <div className="max-w-xl mt-28 mx-auto rounded-md bg-slate-100">
          <RegisterForm />
        </div>
      </div>
    </AuthProvider>
  );
};

export default page;
