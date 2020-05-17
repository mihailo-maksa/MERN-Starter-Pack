import React, { memo } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
// import mern from "../../img/MERN.jpg";

const Landing = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return <Redirect to="/dashboard" />;
  }

  return (
    <section className="container">
      <div>
        <div>
          <h1 className="title">MERN Stack Starter Pack</h1>
          <p className="description">
            Welcome to the quick & simple <b>MERN stack starter pack</b>, made
            with the goal of helping you set up your projects in record time, so{" "}
            <b>
              you can focus on things that matter to you & build something
              great!
            </b>
          </p>
          <div>
            <Link to="/register">Sign Up</Link>
            <Link to="/login">Login</Link>
          </div>
          <img
            src="../../img/MERN.jpg"
            alt="MERN Stack"
            width="400"
            height="400"
          />
        </div>
      </div>
    </section>
  );
};

Landing.propTypes = {
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default memo(connect(mapStateToProps)(Landing));
