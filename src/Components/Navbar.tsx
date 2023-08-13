"use client";
import Link from "next/link";
import "./Navbar.css";

function Navbar() {
  const handleClick = () => {
    // console.log("Clicked");
  };
  return (
    <nav className="relative h-32 w-32">
      <div className="logo">
        <img src="AM.png" alt="Logo" width={"41.792"} height={"40"} />
      </div>
      <div className="absolute top-0 right-0 h-1">
        <a
          href="#"
          className="contact"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "mailto:hello@angelatmcleod.com";
          }}
        >
          Contact
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
