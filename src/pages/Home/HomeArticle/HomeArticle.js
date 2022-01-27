import React, { useEffect, useState } from "react";
import EachBlog from "../EachBlog/EachBlog";
import TopTourSpot from "../TopTourSpot/TopTourSpot";
import "./HomeArticle.css";

const HomeArticle = () => {
  const [blogs, setBlogs] = useState([]);
  const [topSpots, setTopSpots] = useState([]);

  const [loading, setLoading] = useState(false);

  // blogs to be rendered on the UI
  const [displayBlogs, setDisplayBlogs] = useState([]);
  const [page, setPage] = useState(0);
  const [pageCount, setPageCount] = useState(0);
  const size = 10;

  useEffect(() => {
    setLoading(true);
    fetch(
      `https://mighty-savannah-90389.herokuapp.com/blogs?page=${page}&&size=${size}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setBlogs(data.blogs);
        setDisplayBlogs(data.blogs);
        setLoading(false);
        //set total page
        const count = data.count;
        const pageNumber = Math.ceil(count / size);
        setPageCount(pageNumber);
      });
  }, [page]);

  //Get all services
  useEffect(() => {
    setLoading(true);
    fetch("https://mighty-savannah-90389.herokuapp.com/top-spots")
      .then((res) => res.json())
      .then((data) => {
        setTopSpots(data);
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

  const displaySpots = topSpots.slice(0, 10);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-8 col-lg-10 col-12">
          {displayBlogs?.map((post) => (
            <EachBlog key={post._id} post={post} />
          ))}
          <div className="pagination">
            {[...Array(pageCount).keys()].map((number) => (
              <button
                key={number}
                onClick={() => setPage(number)}
                className={number === page ? "selected" : ""}
              >
                {number + 1}
              </button>
            ))}
          </div>
        </div>
        <div
          className="col-md-4 col-lg-2 col-12"
          style={{ background: "#ebedf0", padding: "5px" }}
        >
          <div>
            <h5 className="text-center fw-bold" style={{ color: "#205213" }}>
              Top Tour Spot
            </h5>
          </div>
          <hr />
          {displaySpots?.map((spot) => (
            <TopTourSpot key={spot._id} spot={spot} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeArticle;
