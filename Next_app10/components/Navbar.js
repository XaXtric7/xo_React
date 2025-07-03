"use client";

import React from "react";
import { usePathname } from "next/navigation"; // Usage of usePathname hook to get the current path

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div>
      <div>Navbar</div>
      <div>You are inside {pathname}</div>
    </div>
  );
};

export default Navbar;
