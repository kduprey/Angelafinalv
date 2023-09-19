"use client";

import Lottie from "lottie-react";
import "./Breath.css";
import animationData from "./Breathv2.json";

export const Breath = () => (
	<div className="Breath">
		<Lottie animationData={animationData} />
	</div>
);
