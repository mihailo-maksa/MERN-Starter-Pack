import React, { memo } from "react";

const NotFound = () => (
  <section className="container">
    <h1 title="Page Not Found">Page Not Found</h1>
    <p>Sorry, this page does not exist!</p>
    <img
      src="https://i.imgur.com/qIufhof.png"
      alt="Page Not Found"
      title="Page Not Found"
    />
  </section>
);

export default memo(NotFound);
