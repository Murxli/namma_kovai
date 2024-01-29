"use client";

import "./NavBar.css";
import Link from "next/link";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";
import { useEffect } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

const Navbar = ({page}) => {
  const authData = useAuth();
  const router = useRouter();

  if (authData && !authData?.currentUser && page==='authed'){
    useEffect(() => {
      router.push("/login")
    },[])
  }
  return (
    <div className={`navbar-container `}>
      <nav className={`navbar`}>
        <Link href="/" className="flex items-center">
          <Image
            src={"/tnlogo.png"}
            alt="Namma Kovai logo"
            width={100}
            height={100}
            className="w-16"
            priority
          />
          <Image
            src={"/temp-logo.png"}
            alt="Namma Kovai logo"
            width={200}
            height={200}
            className=" w-48"
            priority
          />
        </Link>
        <div >
          {(authData && authData.currentUser) ? (
            <div className="flex gap-8">
              <Button
                onClick={() => {
                  authData.logout();
                  router.push("/");
                }}
              >
                Logout
              </Button>
              {/* <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar> */}
            </div>
          ): <Button onClick={() => {router.push('login')}}>Login</Button>}
          {/* {!authData?.currentUser && <Button onClick={() => {router.push('login')}}>Login</Button>} */}
          {/* {authData && authData?.currentUser && (
            
          )} */}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
