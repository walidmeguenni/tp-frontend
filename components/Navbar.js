import React from "react";
import Image from "next/image";
import Logo from "../public/logo.svg";
import LinkItem from "./LinkItem";
const Navbar = () => {
  return (
    <nav className="w-full h-18 bg-gray-900">
      <div className="flex items-center justify-between flex-wrap p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6 space-x-2">
          <Image src={Logo} alt="logo" />
          <span className="font-semibold text-xl tracking-tight text-white">
            My Blockchain
          </span>
        </div>
        <div className="w-full block lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow">
            <LinkItem link="/" Item="Home" />
            <LinkItem link="/transaction" Item="Transaction" />
            <LinkItem link="/mining" Item="Mining" />
            <LinkItem link="/account" Item="Account" />
            <LinkItem link="/monitor" Item="Monitor" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
