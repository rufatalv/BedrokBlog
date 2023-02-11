import React from "react";
import BEDROK from "public/logo.svg";
import Image from "next/image";
import Link from "next/link";
const Footer = () => {
  return (
    <div className="container px-5 lg:px-0">
      <div className="mt-10 mb-10 md:mt-36 md:mb-24 flex gap-6 md:gap-0 flex-col md:flex-row justify-between">
        <div id="left" className="flex flex-col justify-between">
          <Image src={BEDROK} alt="" />
          <p className="hidden md:block">
            Copyright © 2023
            <br />
            <Link href="https://rufataliyev.xyz" className="font-medium">
              Rufat Aliyev
            </Link>
          </p>
        </div>
        <div
          id="right"
          className="flex flex-col md:flex-row gap-6 md:gap-[75px]"
        >
          <div className="flex gap-4 flex-col">
            <h4 className="text-sm text-neutral-500">CATEGORIES</h4>
            <ul className="flex flex-col text-base gap-4">
              <li><Link href='/category/entrepreneurship'>Entrepreneurship</Link></li>
              <li><Link href='/category/neutral'>Neutral</Link></li>
              <li><Link href='/posts/all'>All</Link></li>
            </ul>
          </div>
          <div className="flex gap-4 flex-col">
            <h4 className="text-sm text-neutral-500">PAGES</h4>
            <ul className="flex flex-col text-base gap-4">
              <li><Link href='/'>Home</Link></li>
              <li><Link href='/about'>About</Link></li>
              <li><Link href='/about'>Subscribe</Link></li>
            </ul>
          </div>
          <div className="flex gap-4 flex-col">
            <h4 className="text-sm text-neutral-500">CONTACT</h4>
            <ul className="flex flex-col text-base gap-4">
              <li><Link href='/'>Twitter</Link></li>
              <li><Link href='/'>LinkedIn</Link></li>
              <li><Link href='/contact'>Email me</Link></li>
            </ul>
          </div>
          <div>
            <p className="block md:hidden">
              Copyright © 2023 <Link href="https://rufataliyev.xyz" className="font-medium">
                Rufat Aliyev
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
