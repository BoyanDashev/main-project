import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(" ");
  const [toggle, setToggle] = useState(false);
  const [scrollPostion, setScrollPosition] = useState("");
  const [visability, setVisible] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      const currentscrollPost = window.scrollY;
      const isScrolledDown = scrollPostion < currentscrollPost;

      setScrollPosition(currentscrollPost);

      if (isScrolledDown) {
        setVisible(false);
      } else {
        setVisible(true);
      }
    };
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, [scrollPostion]);

  return (
    <nav
      className={`fixed w-full ${
        visability ? "bg-gray-800" : "bg-transparent"
      } py-2 flex top-0 z-20 bg-slate-800 transition-all duration-300`}
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
          <img
            src={logo}
            alt="logo"
            className={`${
              visability ? "opacity-100" : "opacity-0"
            } w-14 h-14 object-contain transition-opacity`}
          ></img>

          <p
            className={`${
              visability ? "text-white hover:text-red-700 sm:block hidden font-bold font-sans text-[20px]" : "text-transparent"
            }  `}
          >
            Boyan &nbsp; Dashev
          </p>
        </Link>
        <ul className="flex gap-1 list-none">
          <li>
            <Link
              className={`${
                visability ? "text-white hover:text-red-700 no-underline " : "text-transparent"
              } 
            flex items-center font-sans text-[18px] h-full pr-4`}
            >
              {" "}
              Contact{" "}
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
