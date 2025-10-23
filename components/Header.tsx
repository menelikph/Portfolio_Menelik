"use client";

import Link from "next/link";

 function Header() {
  return (
    <header
      style={{
        backgroundColor: "#1a1a1a",
        padding: "1rem",
        color: "white",
        textAlign: "center",
      }}
    >
      <nav>
        <Link href="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link href="/about" style={{ margin: "0 10px" }}>
          About
        </Link>
        <Link href="/projects" style={{ margin: "0 10px" }}>
          Projects
        </Link>
        <Link href="/contact" style={{ margin: "0 10px" }}>
          Contact
        </Link>
      </nav>
    </header>
  );
}

export default Header;

