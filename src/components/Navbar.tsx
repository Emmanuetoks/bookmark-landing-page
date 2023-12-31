import { useRef, useState } from "react";
import Logo from "../../public/images/logo-bookmark.svg";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import facebookLogo from "../../public/images/icon-facebook.svg";
import twitterLogo from "../../public/images/icon-twitter.svg";

type toggleMenuType = (e: React.SyntheticEvent) => void;

const Navbar = () => {
  const mobileMenu = useRef<HTMLDivElement | null>(null);
  const [menuState, setMenuState] = useState("closed");

  const toggleMenu: toggleMenuType = () => {
    const menuState = mobileMenu.current?.dataset.menuState;
    const body = document.querySelector("body") as HTMLBodyElement;
    switch (menuState) {
      case "open":
        mobileMenu.current?.setAttribute("data-menu-state", "closed");
        setMenuState("closed");
        body.style.overflowY = "auto";

        break;
      case "closed":
        mobileMenu.current?.setAttribute("data-menu-state", "open");
        setMenuState("open");
        body.style.overflowY = "hidden";
        break;
      // default:
      //   break;
    }
  };

  return (
    <nav className="navbar flex justify-between items-center px-9 py-4 md:px-24">
      <div className="navbar__logo z-30">
        <img src={Logo} alt="logo" className="logo" />
      </div>

      <div className="navbar__menu-normal hidden md:block">
        <ul className="navbar__links flex space-x-8 items-center">
          <li className="navbar__link">
            <a>Home</a>
          </li>
          <li className="navbar__link">
            <a>prices</a>
          </li>
          <li className="navbar__link">
            <a>contact</a>
          </li>
          <li className="navbar__link">
            <button className="uppercase bg-red text-white px-6 py-2 rounded hover:bg-white hover:text-red-100 outline-2 outline-red">
              login
            </button>
          </li>
        </ul>
      </div>

      <div
        data-menu-state="closed"
        className="navbar__menu-mobile flex flex-col md:hidden min-h-full text-3xl absolute inset-0 z-10 pt-16 bg-mobile-menu transition duration-500 tracking-wide"
        ref={mobileMenu}
      >
        <ul className="navbar__links flex items-center flex-col h-full pt-10">
          <li className="navbar__link w-3/5 text-center font-light py-6 text-white">
            <a>Home</a>
          </li>
          <li className="navbar__link w-3/5 text-center py-6 text-white font-light">
            <a>prices</a>
          </li>
          <li className="navbar__link w-3/5 text-center py-6 text-white font-light">
            <a>contact</a>
          </li>
          <li className="navbar__link w-3/5 text-center py-6 text-white font-normal">
            <button className="uppercase bg-transparent text-white px-6 py-2 border-4 border-solid border-white w-full rounded-md">
              login
            </button>
          </li>
        </ul>

        <div className="flex gap-5 justify-center pb-10">
          <a>
            <img src={twitterLogo} />
          </a>
          <a>
            <img src={facebookLogo} />
          </a>
        </div>
      </div>
      <button
        className="navbar__menu-btn block md:hidden z-30"
        onClick={toggleMenu}
      >
        {menuState === "closed" ? (
          <AiOutlineMenu />
        ) : (
          <AiOutlineClose fill="white" />
        )}
      </button>
    </nav>
  );
};

export default Navbar;
