"use client";

import Image from "next/image";
import Link from "next/link";
import AM from "../../../public/AM.png";
import "./Navbar.css";

export const Navbar = () => {
	const handleClick = () => {
		// console.log("Clicked");
	};
	return (
		<nav className="relative h-32 w-32">
			<div className="logo">
				<Image src={AM} alt="Logo" width={"41.792"} height={"40"} />
			</div>
			<div className="absolute top-0 right-0 h-1">
				<Link href="mailto:hello@angelatmcleod.com" className="contact">
					Contact
				</Link>
			</div>
		</nav>
	);
};
