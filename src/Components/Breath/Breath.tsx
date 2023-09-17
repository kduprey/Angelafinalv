"use client";

import Lottie from "lottie-react";
import "./Breath.css";
import animationData from "./Breathv2.json";

export const Breath = () => (
	<div className="m-0 bg-zinc-800 p-0">
		<Lottie animationData={animationData} />
	</div>
);
