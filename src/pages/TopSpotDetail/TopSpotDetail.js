import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Rating } from "@mui/material";
import Footer from "../Shared/Footer/Footer";
import Navigation from "../Shared/Navigation/Navigation";
import "./TopSpotDetail.css";

const TopSpotDetail = () => {
  let { spotId } = useParams();
  const [topSpot, setTopSpot] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://mighty-savannah-90389.herokuapp.com/top-spots/${spotId}`)
      .then((res) => res.json())
      .then((data) => {
        setTopSpot(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  const {
    _id,
    name,
    price,
    detailImg1,
    detailImg2,
    detailImg3,
    type,
    duration,
    shortDetail,
    visitedPlaces,
    facility,
    catagory,
    rating,
  } = topSpot;
  return (
    <>
      <Navigation />
      <section className="container mt-3">
        <h2 className="text-center fw-bold mt-100" style={{ color: "#B77323" }}>
          {name}
        </h2>

        <div className="img-detail">
          <div>
            <img className="img-fluid" src={detailImg1} alt="" />
          </div>
          <div>
            <img className="img-fluid" src={detailImg2} alt="" />
          </div>
          <div>
            <img className="img-fluid" src={detailImg3} alt="" />
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 border-end">
            <h3 className="text-center text-success fw-bold">About Spot</h3>
            <p className="txt-justify">{shortDetail}</p>
            <h3 className="text-center text-success fw-bold">Visited Places</h3>
            <p className="txt-justify">{visitedPlaces}</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
            <h3 className="text-center text-success fw-bold">
              Facility Included
            </h3>
            <p className="txt-justify">{facility}</p>
            <p>
              <span className="text-info fw-bold">Total Duration: </span>
              {duration}
            </p>
            <p>
              <span className="text-info fw-bold">Type: </span>
              <span className="text-danger fw-bold">{type}</span>
            </p>
            <p>
              <span className="text-info fw-bold">Total Cost: </span>
              <span className="text-danger fw-bold">BDT {price}</span>
              <span className="text-primary"> (Per Person)</span>
            </p>
            <p>
              <span className="text-info fw-bold">Location: </span>
              <span className="text-primary fw-bold">{catagory}</span>
            </p>
            <p>
              <Rating name="read-only" value={rating} readOnly />
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default TopSpotDetail;
