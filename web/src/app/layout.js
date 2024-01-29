import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/NavBar";

const inter = Inter({ subsets: ["latin"] });
// import AuthProvider from './../contexts/AuthContext';

export const metadata = {
  title: "Namma Kovai",
  description: "Coimbatore smart citizen application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body className={inter.className}>
        {/* <Navbar /> */}
        {children}
      </body>
    </html>
  );
}
