import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className=" w-full flex justify-between items-center py-5 fixed
     top-0 z-20 bg-slate-800 gap-2 p-4"
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-14 h-14 object-contain"></img>
          <p className="text-white hover:text-red-700 font-sans text-[20px] font-bold cursor-pointer flex">
            Boyan &nbsp;
            <span className="sm:block hidden font-sans">Dashev</span>{" "}
          </p>
        </Link>
        <ul className="flex gap-1 list-none">
          
          <li>
                      <Link className="text-white hover:text-red-700 no-underline 
            flex items-center font-sans text-[18px] h-full"> Contact </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
