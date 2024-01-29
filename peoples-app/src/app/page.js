'use client'
import Image from "next/image";
import HeroCards from "@/sections/HeroCard";
import AuthProvider from "@/context/AuthContext";
import Navbar from "@/components/NavBar";

export default function Home() {
  return (
    <AuthProvider>
      <div>
        <Navbar />
        <main className="bg-white  min-h-screen flex flex-col">
          <div className=" flex-1 flex flex-col justify-center content-between items-center">
            <HeroCards />
          </div>
        </main>
      </div>
    </AuthProvider>
  );
}
