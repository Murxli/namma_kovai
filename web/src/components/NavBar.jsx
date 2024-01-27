import './NavBar.css'
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
    return (
      <div >
        <div className={`navbar-container `}>
            <nav className={`navbar`}>
              <Link
                  href="/"
                  className="flex items-center"
              >
                <Image src={"/logo.png"} alt="Namma Kovai logo"  width={400} height={100} className="max-w-16 md:max-w-36" priority/>
              </Link>
              <ul className="nav-items">
                {/* {navitems.map( item => <li className={`${active === item.path ? "clicked" : ""}`} key={item.name}><Link href={item.path}>{item.name}</Link></li>)} */}
                <li>LSD</li>
              </ul>
              
            </nav>
        </div>
      </div>
    );
  };

  
  
  export default Navbar;