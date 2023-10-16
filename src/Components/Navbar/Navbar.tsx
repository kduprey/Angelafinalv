"use client";
import Image from "next/image";
import Link from "next/link";
import AM from "../../../public/AM.png";
import "./Navbar.css";

export const Navbar = () => {
 /* const handleClick = () => {
    // console.log("Clicked");
  }; */
  return (
    <nav className="flex h-32 w-ful items-center justify-between p-12 lg:h[72px]">
        <Image src={AM} alt="Logo" width={"41.792"} height={"40"} />
        <Link 
        href="mailto:angelatmcleod@gmail.com" 
        className="border-[none] text-lg not-italic text-[#29282b] no-underline transition ease-in-out hover:text-[lightgray]">
          Contact
        </Link>
    </nav>
  );
};


