import React from "react";
import { Link } from "react-router-dom";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

const Slide = ({ active, carousel }) => {
  const { title1, title2, description, img } = carousel;
  return (
    <div className={`carousel-item ${active ? "active" : ""} carousel-img`}>
      <img
        // src={`data:image/jpeg;base64,${img}`}
        src={img}
        class="d-block w-100 h-100"
        alt="..."
      />
      <div class="carousel-caption d-md-block">
        <h1>{title1}</h1>
        <h1>{title2}</h1>
        <p>{description}</p>

        <div class="slider-btn">
          <button class="custom-btn">
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to="/allblogs"
            >
              See Blog <NavigateNextIcon />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slide;
