import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  return (
    <nav class="navbar navbar-expand-lg header-nav shadow-lg">
      <div class="container-fluid">
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          travel<span style={{ color: "red" }}>Expo</span>Blog
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mx-auto mb-2 mb-lg-0">
            <Link to="/home" className="nav-link topic">
              Home
            </Link>

            <li class="nav-item">
              <Link to="/allblogs" className="nav-link topic">
                All Blogs
              </Link>
            </li>

            <li class="nav-item">
              <Link to="/addblog" className="nav-link topic">
                Write Travel Experience
              </Link>
            </li>

            {user?.email && (
              <li className="nav-item  fitpal-nav-item me-4">
                <Link className="nav-link topic" to="/dashboard">
                  Dashboard
                </Link>
              </li>
            )}
          </ul>

          {/* {user.email && (
            <div className="mx-3">
              <img
                style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                src={user?.photoURL}
                alt=""
              />
              <span className="text-light">
                {" "}
                {user?.displayName} | {admin ? "Admin" : "Subscriber"}
              </span>
            </div>
          )} */}

          <ul class="navbar-nav  mb-2 mb-lg-0">
            {user?.email ? (
              <button
                onClick={logOut}
                style={{ outline: 0, border: 0, borderRadius: "3px" }}
              >
                LogOut
              </button>
            ) : (
              <li className="nav-item fitpal-nav-item me-4">
                <Link className="nav-link topic login-btn" to="/login">
                  Login
                </Link>
              </li>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
