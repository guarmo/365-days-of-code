import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const ProfileTop = ({
  profile: {
    status,
    company,
    location,
    website,
    social,
    user: { name, avatar },
  },
}) => {
  return (
    // <div className="profile-grid my-1">
    <div className="profile-top bg-primary p-2">
      <img className="round-img my-1" src={avatar} alt="" />
      <h1 className="large">{name}</h1>
      {company && (
        <p className="lead">
          <span>at {company}</span>
        </p>
      )}
      {location && (
        <p>
          <span>{location}</span>
        </p>
      )}
      <div className="icons my-1">
        {website && (
          <Link to={website} target="_blank" rel="noopener noreferrer">
            <i className="fas fa-globe fa-2x"></i>
          </Link>
        )}
        {social && social.twitter && (
          <Link to={social.twitter} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter fa-2x"></i>
          </Link>
        )}

        {social && social.facebook && (
          <Link to={social.facebook} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook fa-2x"></i>
          </Link>
        )}

        {social && social.linkedin && (
          <Link to={social.linkedin} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin fa-2x"></i>
          </Link>
        )}

        {social && social.youtube && (
          <Link to={social.youtube} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-youtube fa-2x"></i>
          </Link>
        )}

        {social && social.instagram && (
          <Link to={social.instagram} target="_blank" rel="noopener noreferrer">
            <i className="fab fa-instagram fa-2x"></i>
          </Link>
        )}
      </div>
    </div>
    // </div>
  );
};

ProfileTop.propTypes = {
  profile: PropTypes.object.isRequired,
};

export default ProfileTop;
