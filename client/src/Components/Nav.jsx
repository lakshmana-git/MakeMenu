import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [sectionClick, setSectionClick] = useState(false);

  const handleMobileLinkClick = (link = "") => {
    setToggleMenu(false);
    if (link === "features" || link === "pricing") {
      handleSectionClick();
    }
  };

  const handleSectionClick = () => {
    setSectionClick((prev) => !prev);
  };

  useEffect(() => {
    const hash = window.location.hash;
    let myElement = "";
    switch (hash) {
      case "#features":
        myElement = document.getElementById("features");
        myElement?.scrollIntoView?.({ behavior: "smooth" });
        break;
      case "#pricing":
        myElement = document.getElementById("pricing");
        myElement?.scrollIntoView?.({ behavior: "smooth" });
        break;
      default:
        break;
    }
  }, [sectionClick]);

  return (
    <div className="w-full py-6 px-4 md:px-16 lg:px-20">
      <div className="flex justify-between items-center">
        <div className="flex space-x-20 items-center">
          <Link to='/'>
          <img src="./logo.png" alt="logo"  className="h-10 w-25"/>
          </Link>
          
          <div className="hidden md:block self-center">
            <ul className="flex space-x-8 items-end text-700">
              <li  className="font-semibold">
                <a href="#features" onClick={handleSectionClick}>
                  Features
                </a>
              </li>
              
              <li className="font-semibold">
                <a href="/templates">Templates</a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="hidden md:flex space-x-4 md:space-x-8 items-center font-semibold">
            <li>
              <Link to="/login" className="hover:bg-gray-200 px-4 py-2 rounded-md">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="bg-blue-800 text-white px-4 py-2 rounded-md">
                Signup
              </Link>
            </li>
          </ul>
          <div className="md:hidden relative">
            <img
              src="/hamburger.svg"
              alt="menu"
              onClick={() => setToggleMenu(true)}
            />
          </div>
        </div>
      </div>
      {toggleMenu && (
        <div className="fixed top-0 left-0 w-full shadow-md" style={{ zIndex: "10" }}>
          <div className="relative w-full px-8 py-12 bg-white space-y-8">
            <ul className="space-y-4 flex flex-col">
              <li className="font-semibold" >
                <a href="#features" onClick={() => handleMobileLinkClick("features")}>
                  Features
                </a>
              </li>
              
              <li className="font-semibold">
                <a href="/templates" onClick={() => handleMobileLinkClick()}>
                  Templates
                </a>
              </li>
            </ul>
            <ul className="flex space-x-4 font-semibold">
              <li>
                <Link to="/login" className="bg-gray-200 px-4 py-2 rounded-md" onClick={() => handleMobileLinkClick()}>
                  Login
                </Link>
              </li>
              <li>
                <Link to="/signup" className="bg-blue-800 text-white px-4 py-2 rounded-md" onClick={() => handleMobileLinkClick()}>
                  Signup
                </Link>
              </li>
            </ul>
            <div className="absolute right-6 top-0 md:hidden">
              <img
                src="/cancel.svg"
                alt="cancel"
                onClick={() => setToggleMenu(false)}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Header;
