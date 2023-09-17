"use client";

import Image from "next/image";
import Link from "next/link";
import AM from "../../../public/AM.png";

export const Navbar = () => {
	return (
		<nav className="flex h-32 w-full items-center justify-between p-12 lg:h-[72px]">
			<Image src={AM} alt="Logo" height={40} width={41.792} />
			<Link
				href="mailto:hello@angelatmcleod.com"
				className="border-[none] text-lg not-italic text-[#29282b] no-underline transition ease-in-out hover:text-[lightgray]"
			>
				Contact
			</Link>
		</nav>
	);
};
