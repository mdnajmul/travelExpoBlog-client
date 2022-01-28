import { Box, Button } from "@mui/material";
import React from "react";
import { NavLink } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import AppsIcon from "@mui/icons-material/Apps";
import LogoutIcon from "@mui/icons-material/Logout";
import MessageIcon from "@mui/icons-material/Message";
import PostAddIcon from "@mui/icons-material/PostAdd";
import { makeStyles } from "@material-ui/core";
import useAuth from "../../../hooks/useAuth";

const useStyles = makeStyles(() => ({
  link: {
    color: "#878787 !important",
    textTransform: "none !important",
    "&:hover": {
      color: "#251D58 !important",
      fontWeight: "600",
    },
  },
}));

const SidebarNavigation = () => {
  const { logOut } = useAuth();
  const classes = useStyles();
  const [admin, setAdmin] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const email = sessionStorage.getItem("email");

  React.useEffect(() => {
    setLoading(true);
    fetch(`https://mighty-savannah-90389.herokuapp.com/users/${email}`)
      .then((res) => res.json())
      .then((data) => {
        setAdmin(data.admin);
        sessionStorage.setItem("admin", data.admin);
        setLoading(false);
      });
  }, [email]);

  //   Loading Spinner
  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }
  return (
    <Box>
      {admin ? (
        <>
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/manage-post`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <AppsIcon sx={{ mr: 2 }} /> Manage Post
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/addblog`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <AddIcon sx={{ mr: 2 }} /> Add Blog Post
            </Button>
          </NavLink>
          <br />
          <NavLink
            style={{ textDecoration: "none" }}
            to={`/dashboard/make-admin`}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PersonAddAlt1Icon sx={{ mr: 2 }} /> Make Admin
            </Button>
          </NavLink>
        </>
      ) : (
        <>
          <NavLink
            to={`/dashboard/my-blogs`}
            style={{ textDecoration: "none" }}
            sx={{ mx: "auto" }}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <PostAddIcon sx={{ mr: 2 }} /> My Post
            </Button>
          </NavLink>
          <br />
          <NavLink
            to={`/dashboard/review`}
            style={{ textDecoration: "none" }}
            activeClassName="active"
          >
            <Button className={classes.link}>
              <MessageIcon sx={{ mr: 2 }} />
              Review
            </Button>
          </NavLink>
        </>
      )}
      <br />
      <NavLink style={{ textDecoration: "none" }} to="/">
        <Button onClick={logOut} className={classes.link}>
          <LogoutIcon sx={{ mr: 2 }} />
          Logout
        </Button>
      </NavLink>
    </Box>
  );
};

export default SidebarNavigation;
