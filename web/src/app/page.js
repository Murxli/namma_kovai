import Image from "next/image";
import Navbar from "@/components/NavBar";
import HeroCards from "@/sections/HeroCard";

export default function Home() {
  return (
    <main className="bg-white  min-h-screen flex flex-col">
      <Navbar />
      <div className="h-full flex-1 flex flex-col justify-center content-between items-center">
        <HeroCards />
      </div>
    </main>
  );
}
