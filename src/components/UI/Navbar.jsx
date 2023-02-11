import React, { useState } from "react";
import Image from "next/image";
import logo from "public/logo.svg";
import logoMobile from "public/logoMobile.svg";
import closeIcon from "public/X.svg";
import hamburgerIcon from "public/Hamburger.svg";

import Link from "next/link";
const Navbar = () => {
  const [navToggle, setNavToggle] = useState(false);

  return (
    <div className="border-b-[1px]">
      <div className="md:container px-5 lg:px-0 md:py-[26px] py-4">
        <div className="flex justify-between items-center">
          <div>
            <Link href='/'><Image alt="logo" className="hidden sm:block" src={logo} /></Link>
            <Link href='/'><Image alt="logo" className="sm:hidden" src={logoMobile} /></Link>
            
          </div>
          <div>
            {!navToggle && (
              <Image
                alt="logo"
                onClick={() => {
                  setNavToggle(true);
                }}
                className="sm:hidden cursor-pointer"
                src={hamburgerIcon}
              />
            )}
            {navToggle && (
              <Image
                alt="logo"
                onClick={() => {
                  setNavToggle(false);
                }}
                className="sm:hidden cursor-pointer"
                src={closeIcon}
              />
            )}
            <ul className="sm:flex hidden flex-row font-medium gap-5 text-lg">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
              <li>
                <Link href="/search" className="py-1 px-6 bg-black text-white rounded-[6px]">Search</Link>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul
            className={
              !navToggle
                ? "sm:hidden hidden flex-col md:hidden md:flex-row font-medium gap-5 text-xl"
                : "flex sm:hidden mt-4 flex-col gap-2 font-normal uppercase tracking-wide text-xl"
            }
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
