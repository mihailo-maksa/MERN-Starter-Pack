import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const Private = ({ name }) => {
  return (
    <div>
      <h1>Hello {name}!</h1>
      <p>
        This is an example private route - you can access it only if you're
        authenticated!
      </p>
    </div>
  );
};

Private.propTypes = {
  name: PropTypes.string.isRequired
};

const mapStateToProps = (state) => ({
  name: state.custom
});

export default connect(mapStateToProps)(Private);
