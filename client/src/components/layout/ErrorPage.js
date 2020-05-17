import React, { Fragment, memo } from "react";

const ErrorPage = () => (
  <Fragment>
    <section className="container">
      <h1>Sorry, This Page is Broken!</h1>
      <p>
        <b>Come back later </b>- we are working on solving this problem right
        now!
      </p>
      <img src="https://i.imgur.com/qIufhof.png" alt="Page Not Found" />
    </section>
  </Fragment>
);

export default memo(ErrorPage);
