import React, { useEffect, useState } from "react";
import EachBlog from "../EachBlog/EachBlog";
import "./HomeArticle.css";

const HomeArticle = () => {
  const [blogs, setBlogs] = useState([]);
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

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div className="container mt-5">
      <div class="row">
        <div class="col-md-8 col-lg-10 col-12">
          {displayBlogs?.map((post) => (
            <EachBlog key={post.id} post={post} />
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
        <div class="col-md-4 col-lg-2 col-12">col-4</div>
      </div>
    </div>
  );
};

export default HomeArticle;
