import React from "react";
import { Rating } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import "./TopTourSpot.css";

const TopTourSpot = (props) => {
  const { _id, name, img, price, rating } = props.spot;
  return (
    <>
      <div className="tour mt-3">
        <div>
          <img className="img-field" src={img} alt="" />
        </div>
        <div className="tour-details">
          <h6 className="tour-name">{name}</h6>
          <p style={{ color: "red" }}>BDT {price}</p>
          <p>
            <Rating
              style={{ fontSize: "16px" }}
              name="read-only"
              value={rating}
              readOnly
            />
          </p>
        </div>
      </div>
      <p className="bottom-border pb-3 text-center">
        <NavLink to={`/top-spots/${_id}`}>
          <button
            className="fst-italic border-0 fw-bold readmore-btn"
            style={{
              background: "none",
              color: "#B77323",
            }}
          >
            Details <ArrowRightAltIcon />
          </button>
        </NavLink>
      </p>
    </>
  );
};

export default TopTourSpot;
