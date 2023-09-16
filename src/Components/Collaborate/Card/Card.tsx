import Image, { StaticImageData } from "next/image";
import React from "react";
import "./Card.css";

type Props = {
	icon: StaticImageData;
	heading: string;
	body: string;
	timing: string;
};

export const Card = ({ icon, heading, body, timing }: Props) => {
	return (
		<div className="box box-33">
			<div>
				<Image src={icon} alt="Lighting Icon" width={30} height={30} />
				<h2>{heading}</h2>
				<p>{body}</p>
				<p>Timing: {timing}</p>
			</div>
		</div>
	);
};
