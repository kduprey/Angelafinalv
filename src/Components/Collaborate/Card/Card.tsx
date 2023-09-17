import Image, { StaticImageData } from "next/image";
import React from "react";
import "./Card.css";

type Props = {
	icon: StaticImageData;
	altText: string;
	heading: string;
	body: string;
	timing: string;
};

export const Card = ({ icon, altText, heading, body, timing }: Props) => {
	return (
		<div className=" flex w-full flex-col justify-center space-y-5 bg-[#29282b] p-10 text-stone-200 md:h-[20rem] md:w-2/3 lg:h-[25rem] lg:w-[25rem]">
			<Image src={icon} alt={altText} width={30} height={30} />
			<h2 className="text-stone-200">{heading}</h2>
			<p className="text-base leading-tight">{body}</p>
			<p className="text-base leading-tight">Timing: {timing}</p>
		</div>
	);
};
