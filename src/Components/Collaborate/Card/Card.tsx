import React from 'react';
import Image from 'next/image';

export const Card = ({ icon, heading, body, timing }) => {
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
