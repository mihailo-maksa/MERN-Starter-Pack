import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <p className="copyright">
        &copy; {new Date().getFullYear()} MERN Stack Starter Pack
      </p>
    </div>
  );
}
