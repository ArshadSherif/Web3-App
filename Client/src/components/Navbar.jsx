import React from "react";
import logo from "../../images/logo.png";
import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const NavbarItem = ({ title, classProps }) => {
  return <li className={`mx-4 cursor-pointer ${classProps}`}>{title}</li>;
};

function Navbar() {
  const [toggleMenu, setToggleMenu] = useState("false");
  return (
    <nav className="flex items-center justify-between w-full p-4 md:justify-center">
      <div className="md:flex-[0.5] flex-initial justify-center items-center">
        <img src={logo} alt="logo" className="w-32 cursor-pointer" />
      </div>
      <ul className="flex-row items-center justify-between flex-initial hidden text-white list-none md:flex">
        {["market", "tutorial", "exchange", "Wallets"].map((item, index) => (
          <NavbarItem key={item + index} title={item} />
        ))}
        <li className="bg-[#2952e3] py-2 px-7 mx-4 rounded-full cursor-pointer hover:bg-[#2546bd]">
          Login
        </li>
      </ul>
      <div className="relative flex ">
        {toggleMenu ? (
          <AiOutlineClose
            fontSize={28}
            className="text-white cursor-pointer  md:hidden"
            onClick={() => setToggleMenu(flase)}
          />
        ) : (
          <HiMenuAlt4
            fontSize={28}
            className="text-white cursor-pointer  md:hidden"
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <ul
            className="z-10 fixed -top-0 -right-2 p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none
            flex flex-col justify-start items-end rounded-md blue-glassmorphism text-white animate-slide-in"
          >
            <li className="w-full my-2 text-xl">
              <AiOutlineClose onClick={() => setToggleMenu(false)} />
            </li>
            {["market", "tutorial", "exchange", "Wallets"].map(
              (item, index) => (
                <NavbarItem
                  key={item + index}
                  title={item}
                  classProps="my-2 text-lg"
                />
              )
            )}
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
