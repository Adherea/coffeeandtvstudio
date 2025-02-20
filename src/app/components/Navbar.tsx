"use client";
import { useState } from "react";
import Image from "next/image";
import { FaBars } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";
import logoAawal from "../../../public/images/coffeetv.png";
import listrik1 from "../../../public/images/navkiri.png";
import listrik2 from "../../../public/images/navkanan.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-50 shadow-md">
      <div className="container mx-auto flex items-center justify-between px-5 py-3">
        {/* Logo Kiri */}
        <Image alt="logo" src={listrik1} width={100} height={100} className="w-14 h-14 md:w-20 md:h-20" />

        {/* Menu untuk PC & Tablet */}
        <div className="hidden md:flex items-center gap-5 text-lg">
          <a
            href="#home"
            className="relative hover:text-[#CD563C] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#CD563C] after:transition-all after:duration-200 hover:after:w-full hover:after:left-0"
          >
            Home
          </a>
          <a
            href="#about"
            className="relative hover:text-[#CD563C] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#CD563C] after:transition-all after:duration-200 hover:after:w-full hover:after:left-0"
          >
            About
          </a>
          <Image alt="logo" src={logoAawal} width={150} height={150} className="w-16 h-16 md:w-24 md:h-24" />
          <a
            href="#portfolio"
            className="relative hover:text-[#CD563C] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#CD563C] after:transition-all after:duration-200 hover:after:w-full hover:after:left-0"
          >
            Portfolio
          </a>
          <a
            href="#info"
            className="relative hover:text-[#CD563C] after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#CD563C] after:transition-all after:duration-200 hover:after:w-full hover:after:left-0"
          >
            Info
          </a>
        </div>

        {/* Tombol Hamburger (Mobile) */}
        <button className="md:hidden text-3xl" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaRegWindowClose /> : <FaBars />}
        </button>

        {/* Logo Kanan */}
        <Image alt="logo" src={listrik2} width={100} height={100} className="w-14 h-14 md:w-20 md:h-20" />
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 py-3 bg-gray-100 text-lg">
          <a href="#" className="hover:text-gray-500">
            Home
          </a>
          <a href="#about" className="hover:text-gray-500">
            About
          </a>
          <Image alt="logo" src={logoAawal} width={150} height={150} className="w-16 h-16 md:w-24 md:h-24" />

          <a href="#portfolio" className="hover:text-gray-500">
            Portfolio
          </a>
          <a href="#info" className="hover:text-gray-500">
            Info
          </a>
        </div>
      )}
    </nav>
  );
}
