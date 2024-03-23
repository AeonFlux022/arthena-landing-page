"use client";

import Link from "next/link";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const menu = [
    { name: "Home", url: "/" },
    { name: "Link 1", url: "link1" },
    { name: "Link 2", url: "link2" },
    { name: "Link 3", url: "link3" },
  ];

  const [isOpen, setIsOpen] = React.useState(false); // State for mobile menu visibility

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-neutral text-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <Link href="/">
                <img className="max-w-24" src="/tertiary-logo.png" alt="logo" />
              </Link>
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-4 flex items-center space-x-5">
              {menu.map((x, index) => (
                <Link
                  href={x.url}
                  key={index}
                  className="flex hover:bg-secondary hover:text-black py-2 px-3"
                >
                  {x.name}
                </Link>
              ))}
            </div>
          </div>
          <div className="md:hidden flex items-center">
            <button
              className="inline-flex items-center justify-center p-2 border border-black  hover:bg-secondary hover:border-secondary"
              onClick={toggleMenu}
            >
              {!isOpen ? (
                <FontAwesomeIcon icon={faBars} className="size-4 text-black" />
              ) : (
                <FontAwesomeIcon icon={faX} className="size-4 text-black" />
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md-hidden lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menu.map((x, index) => (
              <Link
                href={x.url}
                key={index}
                className="flex hover:bg-secondary hover:text-black py-2 px-3"
              >
                {x.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
