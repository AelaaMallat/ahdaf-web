"use client";

import React from "react";
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



export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (menu: string) => {
    setActiveDropdown(activeDropdown === menu ? null : menu);
  };

  return (
    <header>
      <nav className="fixed top-0 w-full bg-cblue p-4 flex justify-between items-center text-white z-50">
        <div className="text-xl font-bold">
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
        <ul className="hidden md:flex space-x-6 gap-12 font-medium">
          <li>
            <Link href="/ar" className="hover:text-cgreen transition-colors  font-bold">الرئيسية</Link>
          </li>
          <li className="relative group">
            <button className="flex items-center gap-1 hover:text-cgreen transition-colors  font-bold"> حول الوقف </button>
            <div className="absolute right-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out mt-2 bg-[#0b1c39] text-gray-100 rounded-md shadow-lg border border-gray-700 min-w-[200px] transform -translate-y-1 group-hover:translate-y-0">
              <div className="py-2">
                <Link
                href="/ar/about"
                className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                من نحن؟
                </Link>
                <Link
                href="/ar/about/history"
                className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                تاريخنا
                </Link>                
              </div>
            </div>
          </li>
          <li className="relative group">
            <button className="font-bold flex items-center gap-1 hover:text-cgreen transition-colors">
              برامجنا
            </button>
            <div className="absolute right-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out mt-2 bg-[#0b1c39] text-gray-100 rounded-md shadow-lg border border-gray-700 min-w-[200px] transform -translate-y-1 group-hover:translate-y-0">
              <div className="py-2">
                <Link
                  href="/ar/programs/eshraqat-elem"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  إشراقة علم
                </Link>
                <Link
                  href="/ar/programs/alemni"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  مؤسسة علمني
                </Link>
                <Link
                  href="/ar/programs/eshraqa"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  أكاديمية إشراقة
                </Link>
                <Link
                  href="/ar/programs/ahdaf-school"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  مدرسة أهداف
                </Link>
                <Link
                  href="/ar/programs/ajwad"
                  className="block px-4 py-2 hover:bg-gray-700 transition-colors"
                >
                  مركز أجود
                </Link>
              </div>
            </div>
          </li>
          <li className="relative group">
            <button className="flex font-bold items-center gap-1 hover:text-cgreen transition-colors">
             اللغة
            </button>
            <div className="absolute right-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-all duration-300 ease-in-out mt-2 bg-[#0b1c39] text-gray-100 rounded-md shadow-lg border border-gray-700 min-w-[200px] transform -translate-y-1 group-hover:translate-y-0">
              <div className="py-2">
                <Link href="/ar" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-700 transition-colors" >
                  العربية
                </Link>
                <Link href="/" onClick={() => setIsMenuOpen(false)} className="block px-4 py-2 hover:bg-gray-700 transition-colors" >
                  الإنجليزية
                </Link>
              </div>
            </div>
          </li>
          <li>
            <Link href="#" className="hover:text-cgreen font-bold transition-colors">
              الزكاة والصدقة
            </Link>
          </li>
        </ul>
        <button className="bg-red-600 px-4 py-2 rounded hidden md:block">
          <Link className="w-full font-bold" href="/ar/donate">
            تبرّع الآن
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
        <div className="md:hidden bg-cblue text-white p-4 space-y-4 fixed top-14 right-0 w-full z-50">
          <ul className="space-y-4">
            <li onClick={() => setIsMenuOpen(false)}>
              <Link className="w-full block" href="/">
                الرئيسية
              </Link>
            </li>
            <li className="relative">
              <button
                className="w-full text-right flex justify-between items-center"
                onClick={() => toggleDropdown("about")}
              >
                من نحن
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
                    من نحن؟
                  </Link>

                  <Link
                    className="w-full block"
                    href="/about/history"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    تاريخنا
                  </Link>
                </div>
              )}
            </li>
            <li className="relative">
              <button
                className="w-full text-right flex justify-between items-center"
                onClick={() => toggleDropdown("programs")}
              >
                برامجنا
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
                    إشراقة علم
                  </Link>
                  <Link
                    className="w-full block"
                    href="/programs/alemni"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    مؤسسةعلمني
                  </Link>
                  <Link
                    className="w-full block"
                    href="/programs/eshraqa"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    أكاديمية إشراقة
                  </Link>
                  <Link
                    className="w-full block"
                    href="/programs/ahdaf-school"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    مدرسة أهداف
                  </Link>
                  <Link
                    className="w-full block"
                    href="/programs/ajwad"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    مركز أجود
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
                زكاة وصدقة
              </Link>
            </li>
            <li className="relative">
              <button
                className="w-full text-right flex justify-between items-center"
                onClick={() => toggleDropdown("language")}
              >
                اللغة
                <span
                  className={`transform transition-transform ${
                    activeDropdown === "language" ? "rotate-180" : ""
                  }`}
                >
                  <DiractionIcon />
                </span>
              </button>
              {activeDropdown === "language" && (
                <div className="bg-[#0b1c39] text-white p-4 rounded flex flex-col space-y-4">
                  <Link href="/ar" onClick={() => setIsMenuOpen(false)}>
                    العربية
                  </Link>
                  <Link href="/" onClick={() => setIsMenuOpen(false)}>
                    الإنجليزية
                  </Link>
                </div>
              )}
            </li>
          </ul>
          <button
            className="bg-red-600 px-4 py-2 rounded w-full"
            onClick={() => setIsMenuOpen(false)}
          >
            <Link className="w-full block" href="/donate">
              تبرّع الآن
            </Link>
          </button>
        </div>
      )}
    </header>
  );
}
