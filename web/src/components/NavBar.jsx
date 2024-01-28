import './NavBar.css'
import Link from 'next/link';
import Image from 'next/image';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const Navbar = () => {
    return (
      <div >
        <div className={`navbar-container `}>
            <nav className={`navbar`}>
              <Link
                  href="/"
                  className="flex items-center"
              >
                <Image src={"/tnlogo.png"} alt="Namma Kovai logo"  width={100} height={100} className="w-16" priority/>
                <Image src={"/temp-logo.png"} alt="Namma Kovai logo"  width={200} height={200}  className=" w-48" priority/>
              </Link>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </nav>
        </div>
      </div>
    );
  };

  
  
  export default Navbar;