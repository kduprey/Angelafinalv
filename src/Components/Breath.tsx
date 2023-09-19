"use client";
import Lottie from "lottie-react";
import animationData from "../Breathv2.json";
import "./Breath.css";

const Breath = () => (
  <div className="Breath">
    <Lottie animationData={animationData} />
  </div>
);

export default Breath;
