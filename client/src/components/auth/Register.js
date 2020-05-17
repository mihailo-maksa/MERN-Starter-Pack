import React, { useState, memo } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAlert } from "../../actions/alert";
import { register } from "../../actions/auth";

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { name, email, password, confirmPassword } = userInfo;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert("Passwords don't match, please try again!", "danger");
      setUserInfo({
        password: "",
        confirmPassword: ""
      });
    } else {
      register({ name, email, password });
      setUserInfo({
        name: "",
        email: "",
        password: "",
        confirmPassword: ""
      });
    }
  };

  if (isAuthenticated) {
    return <Redirect to="/private" />;
  }

  return (
    <div className="container row">
      <h1>Sign Up</h1>
      <form onSubmit={handleSubmit} className="col s12">
        <div className="row input-field col s12">
          <input
            type="text"
            placeholder="Name"
            name="name"
            value={name}
            onChange={handleChange}
            className="validate"
            required
          />
        </div>
        <div className="row input-field col s12">
          <input
            type="email"
            placeholder="Email Address"
            name="email"
            value={email}
            onChange={handleChange}
            className="validate"
            required
          />
        </div>
        <div className="row input-field col s12">
          <input
            type="password"
            placeholder="Password"
            name="password"
            minLength="8"
            value={password}
            onChange={handleChange}
            required
            className="validate"
          />
        </div>
        <div className="row input-field col s12">
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            minLength="8"
            value={confirmPassword}
            onChange={handleChange}
            className="validate"
          />
        </div>
        <input type="submit" value="Register" />
      </form>
      <p>
        Already have an account? <Link to="/login">Sign In</Link>
      </p>
    </div>
  );
};

Register.propTypes = {
  setAlert: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default memo(connect(mapStateToProps, { setAlert, register })(Register));
