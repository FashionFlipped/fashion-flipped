import { useAuth0 } from "@auth0/auth0-react";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useMutation, useQuery } from "./../convex/_generated/react.ts";

import "./NavBar.css";

const NavBar = () => {
  const location = useLocation();
  const { logout, user, isAuthenticated, loginWithRedirect } = useAuth0();

  return (
    <div className="nav-container">
      <Link to="/" className="nav-title">
        FashionFlipped
      </Link>
      <div className="nav-items">
        {isAuthenticated ? (
          <>
            <Link
              to="/"
              className={`nav-item ${
                location.pathname === "/" ? "selected" : ""
              }`}
            >
              Home
            </Link>
            <Link
              to="/profile"
              className={`nav-item ${
                location.pathname === "/profile" ? "selected" : ""
              }`}
            >
              Profile
            </Link>
            <Link
              to="/preview"
              className={`nav-item ${
                location.pathname === "/preview" ? "selected" : ""
              }`}
            >
              Preview
            </Link>
            <Link
              to="/subscriptionTiers"
              className={`nav-item ${
                location.pathname === "/subscriptionTiers" ? "selected" : ""
              }`}
            >
              Subscription
            </Link>
            <Link
              to="/designer"
              className={`nav-item ${
                location.pathname === "/designer" ? "selected" : ""
              }`}
            >
              Verified Designers
            </Link>
            <Link
              to="/"
              className={`nav-item`}
              onClick={() => logout({ returnTo: window.location.origin })}
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/"
              className={`nav-item ${
                location.pathname === "/" ? "selected" : ""
              }`}
            >
              Home
            </Link>
            <Link to="/" className={`nav-item`} onClick={loginWithRedirect}>
              Login
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
