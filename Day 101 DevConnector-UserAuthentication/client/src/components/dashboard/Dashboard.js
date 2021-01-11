import React, { useEffect } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getProfile } from "../../actions/profile";

const Dashboard = ({ profile }) => {
  useEffect(() => {
    console.log(profile);
  }, []);
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.profile,
});

Dashboard.propTypes = {};

export default connect(mapStateToProps, { getProfile })(Dashboard);
