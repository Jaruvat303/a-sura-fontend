"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const getMenuClass = () => {
    return isOpen
      ? "flex absolute top-[60px] left-0 w-full flex-col bg-white px-6 gap-4"
      : "hidden md:flex";
  };

  return (
    <nav className="p-4">
      <div className="mx-5 flex justify-between items-center">
        <a href="" className="text-2xl font-bold">
          ASURA
        </a>
        <div className={getMenuClass()}>
          <Link href="/" className="mx-2">
            Home
          </Link>
          <Link href="/about" className="mx-2">
            About me
          </Link>
          <Link href="/" className="mx-2">
            MyPost
          </Link>
          <Link href="/contact" className="mx-2">
            Contact US
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              width="25"
              height="25"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M18 6L6 18M6 6L18 18"
                ></path>
              ) : (
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              )}
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
