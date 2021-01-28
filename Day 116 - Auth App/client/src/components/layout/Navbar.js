import React from "react";
import logo from "../../assets/devchallenges.svg";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Navbar = ({ logout, isAuthenticated }) => {
  // Redirect if logged out
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  }

  return (
    <nav className="flex justify-between content-center">
      <img src={logo} alt="" />
      <div className="flex h-full content-center relative">
        <img
          className="rounded-lg"
          style={{ maxWidth: "40px" }}
          src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
          alt=""
        />
        <h5 className="m-auto text-sm ml-3">Xanthe Neal</h5>
        <i className="fas fa-caret-down m-auto mx-3"></i>
        {/* popup */}
        <div
          style={{ top: "60px", width: "160px" }}
          className="bg-white border border-gray-500 absolute rounded-lg p-2"
        >
          <div className="hover:bg-gray-500 hover:text-white text-gray-700 p-2 rounded-lg">
            <i class="fas fa-user-circle mr-2"></i>
            <Link to="/profile">My Profile</Link>
          </div>
          <div className="hover:bg-gray-500 hover:text-white text-gray-700 p-2 rounded-lg">
            <i class="fas fa-comment-dots mr-2"></i>
            <Link to="!#">Group Chat</Link>
          </div>
          <hr />
          <div className="hover:bg-gray-500 hover:text-white text-red-600 p-2 rounded-lg">
            <i class="fas fa-sign-out-alt mr-2"></i>
            <Link to="!#" onClick={(e) => logout()}>
              Logout
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Navbar.protoTypes = {
  logout: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, { logout })(Navbar);
