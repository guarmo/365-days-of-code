import React, { useState, Fragment } from "react";
import Navbar from "./layout/Navbar";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const EditProfile = ({ user }) => {
  const [formData, setFormData] = useState({
    name: "",
    bio: "",
    phone: "",
    email: "",
    password: "",
  });

  const { name, bio, phone, email, password } = formData;

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Fragment>
      <Navbar />
      <div className="my-10 max-w-screen-lg m-auto">
        <Link to="/profile" className="text-blue-600 hover:text-blue-800 my-4">
          <i class="fas fa-arrow-left"></i> Back
        </Link>
        <div className="my-2 border border-gray-500 rounded-lg">
          <form className=" py-6 px-8 w-3/4 sm:w-1/2">
            <header className="mb-4">
              <h1 className="text-2xl">Change Info</h1>
              <p className="text-sm text-gray-600">
                Changes will be reflected to every service
              </p>
            </header>
            <div className="flex">
              <img
                style={{ maxWidth: "70px" }}
                src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                alt=""
              />
              <h3 className="uppercase m-auto ml-4 text-gray-600">
                Change photo
              </h3>
            </div>
            <div className="my-4">
              <label
                htmlFor="name"
                className="block text-grey-darker text-sm font-bold"
              >
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                value={name}
                onChange={(e) => onChange(e)}
                required
                placeholder="Enter your name..."
                className="border border-gray-500 rounded-xl w-full p-2 px-3 mt-1"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="bio"
                className="block text-grey-darker text-sm font-bold"
              >
                Bio
              </label>
              <textarea
                id="bio"
                type="text"
                name="bio"
                value={bio}
                onChange={(e) => onChange(e)}
                placeholder="Enter your bio..."
                className="border border-gray-500 rounded-xl w-full p-2 px-3 mt-1"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="phone"
                className="block text-grey-darker text-sm font-bold"
              >
                Phone
              </label>
              <input
                id="phone"
                type="number"
                name="phone"
                value={phone}
                onChange={(e) => onChange(e)}
                placeholder="Enter your phone..."
                className="border border-gray-500 rounded-xl w-full p-2 px-3 mt-1"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="email"
                className="block text-grey-darker text-sm font-bold"
              >
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                name="emial"
                onChange={(e) => onChange(e)}
                placeholder="Enter your email..."
                className="border border-gray-500 rounded-xl w-full p-2 px-3 mt-1"
              />
            </div>
            <div className="my-4">
              <label
                htmlFor="password"
                className="block text-grey-darker text-sm font-bold"
              >
                Password
              </label>
              <input
                id="password"
                type="password"
                name="password"
                value={password}
                onChange={(e) => onChange(e)}
                placeholder="Enter your new password..."
                className="border border-gray-500 rounded-xl w-full p-2 px-3 mt-1"
              />
            </div>
            <button className="bg-blue-600 rounded-lg font-bold text-white text-center px-4 py-2 transition duration-300 ease-in-out hover:bg-blue-700 my-4">
              Save
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  user: state.auth.user,
});

EditProfile.propTypes = {
  user: PropTypes.object,
};

export default connect(mapStateToProps, {})(EditProfile);
