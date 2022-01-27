import React from "react";
import { NavLink } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";

import "./EachBlog.css";

const EachBlog = (props) => {
  const { _id, title, image, details, date, writer } = props.post;
  return (
    <div className="card">
      <div className="d-flex justify-content-between px-3 pt-2">
        <p>
          <span className="fw-bold fst-italic">Posted at:</span> {date}
        </p>
        <p>
          <span className="fw-bold fst-italic">Writen by:</span> {writer}
        </p>
      </div>
      <img
        src={image}
        style={{ height: "250px", padding: "10px" }}
        className="img-fluid card-img-top"
        alt=""
      />
      <div className="card-body">
        <h5 className="card-title fw-bold">{title}</h5>
        <p className="card-text">{details.slice(0, 200)}...</p>
        <p>
          <NavLink to={`/blogs/${_id}`}>
            <button
              className="fst-italic border-0 fw-bold readmore-btn"
              style={{
                background: "none",
                color: "#B77323",
              }}
            >
              Read more <ArrowRightAltIcon />
            </button>
          </NavLink>
        </p>
      </div>
    </div>
  );
};

export default EachBlog;
