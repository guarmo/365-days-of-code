import React, { useState } from "react";
import logo from "../assets/devchallenges.svg";
import facebookLogo from "../assets/Facebook.svg";
import githubLogo from "../assets/Github.svg";
import googleLogo from "../assets/Google.svg";
import twitterLogo from "../assets/Twitter.svg";
import { connect } from "react-redux";
import { registerUser } from "../actions/auth";
import { Link, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const Register = ({ registerUser, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    registerUser(email, password);
    setFormData({
      email: "",
      password: "",
    });
  };

  // Redirect if logged in
  if (isAuthenticated) {
    return <Redirect to="/profile" />;
  }

  return (
    <div className="forms flex items-center justify-center h-screen">
      <div
        style={{}}
        className="border border-gray-500 rounded-xl p-6 sm:p-8 md:max-w-md max-w-sm"
      >
        <img src={logo} alt="" className="mb-4" />
        <div className="">
          <h4 className="my-2">
            Join thousands of learners from around the world
          </h4>
          <p className="text-gray-700 my-2">
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </p>
          <form className="my-4" onSubmit={(e) => onSubmit(e)}>
            <input
              type="email"
              value={email}
              name="email"
              onChange={(e) => onChange(e)}
              required
              style={{ fontFamily: "Noto Sans, FontAwesome" }}
              placeholder="&#xf01c; Email"
              className="border border-gray-500 rounded w-full p-2 px-3 mt-2 mb-1"
            />
            <input
              type="password"
              value={password}
              name="password"
              onChange={(e) => onChange(e)}
              placeholder="&#xf023; Password"
              style={{ fontFamily: "Noto Sans, FontAwesome" }}
              className="border border-gray-500 rounded w-full p-2 px-3 mt-2 mb-4"
            />
            <button className="w-full bg-blue-600 rounded-lg font-bold text-white text-center px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 mr-6">
              Start coding now
            </button>
          </form>
          <p className="text-center text-sm text-gray-700 my-2">
            or continue with these social profile
          </p>
          <div className="flex justify-center my-4">
            <Link className="pr-2" to="!#">
              <img src={facebookLogo} alt="" />
            </Link>
            <Link className="pr-2" to="!#">
              <img src={githubLogo} alt="" />
            </Link>
            <Link className="pr-2" to="!#">
              <img src={googleLogo} alt="" />
            </Link>
            <Link to="!#">
              <img src={twitterLogo} alt="" />
            </Link>
          </div>
          <p className="text-center text-sm text-gray-700 my-2">
            Already a member?{" "}
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

Register.propTypes = {
  registerUser: PropTypes.func.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
};

export default connect(mapStateToProps, { registerUser })(Register);
