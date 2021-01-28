import React from "react";
import Navbar from "./layout/Navbar";
import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <div>
      <Navbar />
      <div className="my-4">
        <h1 className="text-center text-3xl mb-2">Personal info</h1>
        <p className="text-center text-gray-700">
          Basic info, like your name and photo
        </p>
        <div className="my-10 max-w-screen-lg m-auto">
          <header className="border border-gray-500 flex justify-between py-6 px-8 rounded-lg rounded-b-none border-b-0">
            <div>
              <h1 className="text-xl">Profile</h1>
              <p className="text-sm text-gray-700">
                Some info may be visible to other people
              </p>
            </div>
            <Link
              to="/edit-profile"
              className="bg-transparent text-gray-700 font-semibold hover:text-black py-2 px-6 border border-gray-500 hover:border-black rounded-xl"
            >
              Edit
            </Link>
          </header>
          <main>
            <div className="border border-gray-500 rounded rounded-t-none">
              <div className="flex py-6 px-8 border-b border-gray-500">
                <h1 className="my-auto uppercase text-gray-600 w-3/12 ">
                  Photo
                </h1>
                <img
                  className="rounded-lg w-9/12"
                  style={{ maxWidth: "40px" }}
                  src="https://st3.depositphotos.com/15648834/17930/v/600/depositphotos_179308454-stock-illustration-unknown-person-silhouette-glasses-profile.jpg"
                  alt=""
                />
              </div>
              <div className="flex py-6 px-8 border-b border-gray-500">
                <h1 className="my-auto uppercase text-gray-600 w-3/12">Name</h1>
                <p className="w-9/12">Xanthe Neal</p>
              </div>
              <div className="flex py-6 px-8 border-b border-gray-500">
                <h1 className="my-auto uppercase text-gray-600 w-3/12">Bio</h1>
                <p className="w-9/12">
                  I am a software developer and a big fan of devchallenges
                </p>
              </div>
              <div className="flex py-6 px-8 border-b border-gray-500">
                <h1 className="my-auto uppercase text-gray-600 w-3/12">
                  Email
                </h1>
                <p className="w-9/12">hello@gmail.com</p>
              </div>
              <div className="flex py-6 px-8">
                <h1 className="my-auto uppercase text-gray-600 w-3/12">
                  Password
                </h1>
                <p className="w-9/12">********</p>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Profile;
