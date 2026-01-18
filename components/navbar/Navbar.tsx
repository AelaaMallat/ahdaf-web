"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

function DiractionIcon() {
  return (
    <svg
      width={20}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      />
    </svg>
  );
}

const LanguageSelector = () => {
  const languages = [
    { code: "en", name: "English", flag: "/icons/us-flag.svg", path: "/" },
    { code: "ar", name: "العربية", flag: "/icons/lb-flag.svg", path: "/ar" },
  ];

  return (
    <div className="relative group">
      <button className="flex items-center gap-1 hover:text-cgreen transition-colors">
        <Image
          src={languages[0].flag}
          alt="English flag"
          width={24}
          height={16}
          className="rounded-sm"
        />
        <span>English</span>
      </button>
      <div className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out mt-2 bg-[#0b1c39] text-gray-100 rounded-md shadow-lg border border-gray-700 min-w-[200px] transform -translate-y-1 group-hover:translate-y-0">
        <div className="py-2">
          <Link
            href={languages[1].path}
            className="flex items-center gap-2 px-4 py-2 hover:bg-gray-700 transition-colors"
          >
            <Image
              src={languages[1].flag}
              alt={`${languages[1].name} flag`}
              width={24}
              height={16}
              className="rounded-sm"
            />
            <span>{languages[1].name}</span>
          </Link>
        </div>
      </div>
    </div>
  );
};


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <>
      <nav className="fixed top-0 w-full bg-cblue p-4 flex justify-between items-center text-white z-50 uppercase ">
        <div className="text-xl">
          <Link href="/">
            <Image
              src="/logos/ahdaf_logo.svg"
              width={100}
              height={50}
              alt="Ahdaf Charity"
              className="logo brightness-0 invert opacity-1"
            />
          </Link>
        </div>
        <ul className="hidden md:flex space-x-6 uppercase gap-12 font-medium">
          <li>
            <Link href="/" className="hover:text-cgreen transition-colors">
              Home
            </Link>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-cgreen transition-colors uppercase">
              About Us
            </button>
            <div className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out mt-2 bg-[#0b1c39] text-gray-100 rounded-md shadow-lg border border-gray-700 min-w-[200px] transform -translate-y-1 group-hover:translate-y-0">
              <div className="py-2">
                <Link
                  href="/about"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors uppercase"
                >
                  Who We Are? 
                </Link>

                <Link
                  href="/about/history"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors uppercase"
                >
                  Our History
                </Link>

                <Link
                  href="/about/board"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors uppercase"
                >
                  Board of Directors
                </Link>

                <Link
                  href="/about/gallery"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors uppercase"
                >
                  Gallery
                </Link>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-cgreen transition-colors">
              OUR PROGRAMS
            </button>
            <div className="absolute left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out mt-2 bg-[#0b1c39] text-gray-100 rounded-md shadow-lg border border-gray-700 min-w-[200px] transform -translate-y-1 group-hover:translate-y-0">
              <div className="py-2">
                <Link
                  href="/programs/eshraqat-elem"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  ESHRAQAT ELEM
                </Link>
                <Link
                  href="/programs/alemni"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  ALEMNI FOUNDATION
                </Link>
                <Link
                  href="/programs/eshraqa"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  ESHRAQA ACADEMY
                </Link>
                <Link
                  href="/programs/ahdaf-school"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  AHDAF SCHOOL
                </Link>
                <Link
                  href="/programs/ajwad"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  AJWAD CENTER
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="#" className="hover:text-cgreen transition-colors">
              ZAKAT & SADAKA
            </Link>
          </li>
          <li className="relative">
            <LanguageSelector />
          </li>
        </ul>
        <button className="bg-red-600 px-4 py-2 rounded hidden md:block">
          <Link className="w-full" href="/donate">
            DONATE
          </Link>
        </button>
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
      </nav>

      {isMenuOpen && (
        <div className="md:hidden bg-cblue text-white p-4 space-y-4 fixed top-14 left-0 w-full z-50">
          <ul className="space-y-4">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link className="w-full block" href="/">
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleDropdown("about")}
              >
                ABOUT US
                <span
                  className={`transform transition-transform ${
                    activeDropdown === "about" ? "rotate-180" : ""
                  }`}
                >
                  <DiractionIcon />
                </span>
              </button>
              {activeDropdown === "about" && (
                <div className="bg-cblue text-white p-4 rounded flex flex-col space-y-4">
                  <Link
                    className="w-full block"
                    href="/about"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    WHO WE ARE?
                  </Link>

                  <Link
                    className="w-full block"
                    href="/about/history"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    OUR HISTORY
                  </Link>

                  <Link
                    className="w-full block"
                    href="/about/board"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Board of Directors
                  </Link>

                  <Link
                    className="w-full block"
                    href="/about/gallery"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Gallery
                  </Link>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                className="w-full text-left flex justify-between items-center"
                onClick={() => toggleDropdown("programs")}
              >
                OUR PROGRAMS
                <span
                  className={`transform transition-transform ${
                    activeDropdown === "programs" ? "rotate-180" : ""
                  }`}
                >
                  <DiractionIcon />
                </span>
              </button>
              {activeDropdown === "programs" && (
                <div className="bg-cblue text-white p-4 rounded flex flex-col space-y-4">
                  <Link
                    className="w-full block"
                    href="/programs/eshraqat-elem"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ESHRAQAT ELEM
                  </Link>
                  <Link
                    className="w-full block"
                    href="/programs/alemni"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ALEMNI FOUNDATION
                  </Link>
                  <Link
                    className="w-full block"
                    href="/programs/eshraqa"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    ESHRAQA ACADEMY
                  </Link>
                  <Link
                    className="w-full block"
                    href="/programs/ahdaf-school"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AHDAF SCHOOL
                  </Link>
                  <Link
                    className="w-full block"
                    href="/programs/ajwad"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    AJWAD CENTER
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                className="w-full block"
                href="#"
                onClick={() => setIsMenuOpen(false)}
              >
                ZAKAT & SADAKA
              </Link>
            </li>
            {/* <li className="relative">
                  <Link href="/ar" onClick={() => setIsMenuOpen(false)}>
                    Arabic
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    English
                  </Link>
            </li> */}
          </ul>
          <button
            className="bg-red-600 px-4 py-2 rounded w-full uppercase"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link className="w-full block" href="/donate">
              DONATE
            </Link>
          </button>
          <Link
            className="block px-4 py-2 text-center hover:bg-gray-700 transition-colors rounded uppercase text-sm"
            href="/ar"
            onClick={() => setIsMenuOpen(false)}
          >
            العربية
          </Link>
        </div>
      )}
    </>
  );
}
