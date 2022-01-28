import React from "react";
import { Link, NavLink } from "react-router-dom";
import defaultUser from "../../../images/user.png";
import useAuth from "../../../hooks/useAuth";
import "./Navigation.css";

const Navigation = () => {
  const { user, logOut } = useAuth();
  const [admin, setAdmin] = React.useState(false);
  const email = sessionStorage.getItem("email");

  React.useEffect(() => {
    fetch(`https://mighty-savannah-90389.herokuapp.com/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        sessionStorage.setItem("admin", data.admin);
      });
  }, [email]);
  return (
    <nav class="navbar navbar-expand-lg header-nav shadow-lg">
      <div class="container-fluid">
        <span
          style={{
            fontWeight: "bold",
            fontSize: "28px",
          }}
        >
          <NavLink
            to="/"
            style={{
              cursor: "pointer",
              textDecoration: "none",
            }}
          >
            <span style={{ color: "white" }}>travel</span>
            <span style={{ color: "red" }}>Expo</span>
            <span style={{ color: "white" }}>Blog</span>
          </NavLink>
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
              <Link to="/" className="nav-link topic">
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

          {user.email && (
            <div className="mx-3">
              {user.photoURL ? (
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  src={user?.photoURL}
                  alt=""
                />
              ) : (
                <img
                  style={{
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                  }}
                  src={defaultUser}
                  alt=""
                />
              )}
              <span className="text-light">
                {" "}
                {user?.displayName} | {admin ? "Admin" : "Subscriber"}
              </span>
            </div>
          )}

          <ul class="navbar-nav  mb-2 mb-lg-0">
            {user?.email ? (
              <button
                onClick={logOut}
                style={{
                  outline: 0,
                  border: 0,
                  borderRadius: "3px",
                  background: "red",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                LogOut
              </button>
            ) : (
              <li className="nav-item fitpal-nav-item me-4">
                <Link
                  className="nav-link topic login-btn"
                  to="/login"
                  style={{
                    background: "green",
                    padding: "3px",
                    paddingLeft: "15px",
                    paddingRight: "15px",
                    borderRadius: "5px",
                  }}
                >
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
