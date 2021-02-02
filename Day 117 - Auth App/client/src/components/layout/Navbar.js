import React, { useContext } from "react";
import logo from "../../assets/devchallenges.svg";
import AuthContext from "../../context/auth/authContext";

const Navbar = () => {
  const authContext = useContext(AuthContext);

  const { logout } = authContext;
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
            <i className="fas fa-user-circle mr-2"></i>
            <a href="/profile">My Profile</a>
          </div>
          <div className="hover:bg-gray-500 hover:text-white text-gray-700 p-2 rounded-lg">
            <i className="fas fa-comment-dots mr-2"></i>
            <a href="/profile">Group Chat</a>
          </div>
          <hr />
          <div className="hover:bg-gray-500 hover:text-white text-red-600 p-2 rounded-lg">
            <i className="fas fa-sign-out-alt mr-2"></i>
            <a href="/login" onClick={(e) => logout()}>
              Logout
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
