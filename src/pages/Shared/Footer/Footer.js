import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { Link, NavLink } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Box className="footer-top">
        <Container>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 4, sm: 8, md: 12 }}
          >
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={4}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: "900",
                  textAlign: "start",
                  mb: 2,
                }}
                variant="h5"
                component="div"
              >
                Company
              </Typography>
              <ul style={{ textAlign: "start" }}>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/products">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Tour
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Blog
                    </span>
                  </Link>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Terms Conditions
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Reviews
                    </span>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={4}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: "900",
                  textAlign: "start",
                  mb: 2,
                }}
                variant="h5"
                component="div"
              >
                Quick Links
              </Typography>
              <ul style={{ textAlign: "start" }}>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/products">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Holiday Packages
                    </span>
                  </Link>
                </li>
                <li>
                  <Link
                    style={{
                      textDecoration: "none",
                    }}
                    to="/"
                  >
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Featured On
                    </span>
                  </Link>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Travel Experience
                    </span>
                  </Link>
                </li>
                <li>
                  <NavLink style={{ textDecoration: "none" }} to="/aboutus">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Contact
                    </span>
                  </NavLink>
                </li>
                <li>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <FontAwesomeIcon
                      className="font-arrow"
                      icon={faAngleRight}
                    />
                    <span
                      className="footer-hover-clr"
                      style={{ color: "#ffffff" }}
                    >
                      Subscribe Newsletter
                    </span>
                  </Link>
                </li>
              </ul>
            </Grid>
            <Grid sx={{ mt: 3 }} item xs={4} sm={4} md={4}>
              <Typography
                sx={{
                  color: "#ffffff",
                  fontWeight: "900",
                  textAlign: "start",
                  mb: 2,
                }}
                variant="h5"
                component="div"
              >
                About us
              </Typography>
              <Typography
                sx={{ textAlign: "justify", mt: 2, mb: 2 }}
                variant="p"
                component="div"
                style={{ color: "white" }}
              >
                This is the first and largest website about travel agency in
                Bangladesh. We have started our journey since 25th January 2019.
                We have experienced and hard working team and our prime goal is
                to provide best place where the travelers can share their
                experience with others.
              </Typography>
              <Typography sx={{ textAlign: "start", pb: 4 }}>
                <FontAwesomeIcon
                  className="font-icon fb-icon me-10"
                  icon={faFacebook}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon yt-icon me-10"
                  icon={faYoutube}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon tw-icon me-10"
                  icon={faTwitter}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon in-icon me-10"
                  icon={faInstagram}
                />{" "}
                <FontAwesomeIcon
                  className="font-icon ln-icon"
                  icon={faLinkedinIn}
                />
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box className="footer-bottom">
        <Container>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography
              sx={{ textAlign: "start", mt: 4, mb: 4 }}
              variant="p"
              component="div"
              style={{ color: "white", fontWeight: "bold" }}
            >
              &copy; Copyrights {new Date().getFullYear()} travel
              <span style={{ color: "red" }}>Expo</span>Blog All rights
              reserved.
            </Typography>
            <Typography
              sx={{ textAlign: "start", mt: 4, mb: 4 }}
              variant="p"
              component="div"
              style={{ color: "white", fontWeight: "bold" }}
            >
              Designed by najmulovi
            </Typography>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default Footer;
