import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="bg-blue-500 text-white py-5 flex justify-between items-center px-10 relative z-10">
      <h1 className="text-2xl font-bold">Watch World</h1>
      <nav className="gap-10 text-white font-bold flex">
        <Link href="/" className="hover:underline">Home</Link>
        <Link href="/about" className="hover:underline">About</Link>
        <Link href="/contact" className="hover:underline">Contact</Link>
      </nav>
      <div className="text-white text-xl flex gap-3">  
      <h4 className="hover:underline">Login</h4>
      <h4 className="hover:underline">SignUp</h4>
      </div>
    </div>
  );
};

export default Header;
