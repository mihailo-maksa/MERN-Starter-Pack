import React from "react";
import * as spinner from "../../assets/spinner.gif";

export default function Spinner() {
  return (
    <div className="container">
      <img src={spinner} alt="Loading..." className="spinner" />
    </div>
  );
}
