"use client";
import Lottie from "lottie-react";
import animationData from "../Angela.json";
import "./Angela.css";

const Angela = () => (
  <div className="Angela">
    <Lottie animationData={animationData} />
  </div>
);

export default Angela;
