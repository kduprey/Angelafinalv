import React from 'react';
import { useState, useEffect } from "react";

const Navbar = () => {
  return (
    <nav className="flex-between" w-full mb-16 pt-3>
<Link href="/" className="flex gap-2 flex-center">
  <image 
    src="/public/images/AM.png"
    alt="Logo"
    width={30}
    height={30}
    className="object-contain"
    />
</Link>
    </nav>
  )
}

export default Navbar

