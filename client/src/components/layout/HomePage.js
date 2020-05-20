import React from "react";
import * as mern from "../../assets/MERN.jpg";

export default function HomePage() {
  return (
    <div className="container">
      <h1 className="title">MERN Stack Starter Pack</h1>
      <p className="description-text">
        Welcome to the{" "}
        <span className="bold-text">quick & easy MERN stack starter pack</span>,
        made with the goal of helping you set up your projects in record time,
        so{" "}
        <span className="bold-text">
          you can focus on things that matter to you & build something great!
        </span>
      </p>
      <img src={mern} alt="MERN Stack" className="mern-img" />
    </div>
  );
}
