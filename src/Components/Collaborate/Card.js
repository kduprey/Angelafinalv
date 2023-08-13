import React from "react";
import Image from "next/image";

function Card({ icon, heading, body, timing }) {
  return (
    <div className="box box-33">
      <Image src={icon} alt="Lighting Icon" width={30} height={30} />
      <h2>{heading}</h2>
      <p>{body}</p>
      <p>Timing: {timing}</p>
    </div>
  );
}

export default Card;
