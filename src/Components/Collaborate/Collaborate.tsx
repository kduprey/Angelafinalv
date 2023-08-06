import React from "react";
import business from "./Business.png";
import lightIcon from "./LightingIcon.png";
import Project from "./Project.png";
import "./Collaborate.css";
import Image from "next/image";

const Collaborate = () => {
  return (
    <div className="collaborate-container">
        <div className="text-container">
      <h2>Collaborate_</h2>
      </div>
      <div className="row">
        <div className="box box-33">
          <Image src={lightIcon} alt="Lighting Icon" width={400} height={400} />
        </div>
        <div className="box box-33">
          <Image src={Project} alt="Lighting Icon" width={400} height={400} />
        </div>
        <div className="box box-33">
          <Image src={business} alt="Lighting Icon" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Collaborate;
