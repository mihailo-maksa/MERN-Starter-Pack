import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <Link to="/" className="home-link">
        Home
      </Link>
      <a
        href="https://github.com/mihailo-maksa/MERN-Starter-Pack"
        target="_blank"
        rel="noopener noreferrer"
        className="github-link"
      >
        Github Repo
      </a>
    </div>
  );
}
