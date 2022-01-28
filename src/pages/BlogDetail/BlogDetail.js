import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Rating } from "@mui/material";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const BlogDetail = () => {
  let { blogId } = useParams();
  const [singleBlog, setSingleBlog] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch(`https://mighty-savannah-90389.herokuapp.com/blogs/${blogId}`)
      .then((res) => res.json())
      .then((data) => {
        setSingleBlog(data);
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

  const { title, image, details, location, expense, date, writer, rating } =
    singleBlog;

  let cost = parseInt(expense);
  let star = parseInt(rating);
  return (
    <>
      <Navigation />
      <section className="container mt-5">
        <div className="text-center">
          <div>
            <img
              style={{ width: "100%" }}
              className="img-fluid"
              src={`data:image/png;base64,${image}`}
              alt=""
            />
          </div>
        </div>
        <h2 className="text-center fw-bold mt-100" style={{ color: "#B77323" }}>
          {title}
        </h2>
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5 border-end">
            <h3 className="text-center text-success fw-bold">
              About Travel Experience
            </h3>
            <p className="txt-justify">{details}</p>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 col-12 mt-5">
            <p className="mt-5">
              <span className="text-info fw-bold fst-italic">Posted at:</span>{" "}
              {date}
            </p>
            <p>
              <span className="text-info fw-bold fst-italic">Writen by:</span>{" "}
              {writer}
            </p>
            <p>
              <span className="text-info fw-bold">Location: </span>
              {location}
            </p>
            <p>
              <span className="text-info fw-bold">Total Expense: </span>
              <span className="text-danger fw-bold">BDT {cost}</span>
            </p>
            <Rating name="read-only" value={star} readOnly />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default BlogDetail;
