import React from "react";
// import spinner.gif locally

const Spinner = () => (
  <div>
    <img
      src="https://raw.githubusercontent.com/bradtraversy/devconnector_2.0/master/client/src/components/layout/spinner.gif"
      alt="Loading..."
      style={{
        width: "200px",
        margin: "auto",
        display: "block"
      }}
    />
  </div>
);

export default Spinner;
