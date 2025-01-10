import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <div className="header">
      <h1 className="logo">Watch World</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <div className="login">  
      <h4>Login</h4>
      <h4>SignUp</h4>
      </div>
    </div>
  );
};

export default Header;
