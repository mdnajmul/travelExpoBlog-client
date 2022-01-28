import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import ReactStars from "react-rating-stars-component";
import cloudImage from "../../images/cloud-upload.png";
import useAuth from "../../hooks/useAuth";
import "./CreateBlogPost.css";
import Navigation from "../Shared/Navigation/Navigation";
import Footer from "../Shared/Footer/Footer";

const CreateBlogPost = () => {
  const { user } = useAuth();

  const [rating, setRating] = useState(null);

  // Haqndle Rating
  const ratingChanged = (newRating) => {
    setRating(newRating);
  };
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let { title, image, details, expense, location } = data;
    expense = parseInt(expense);
    let rate = parseInt(rating);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];

    const d = new Date();
    let month = months[d.getMonth()];
    let day = d.getDate();
    let year = d.getFullYear();

    const date = String(month + " " + day + ", " + year);

    const writer = user?.displayName ? user.displayName : "Test Name";
    const email = user?.email ? user.email : "demo@demo.com";
    const status = "pending";

    const formData = new FormData();
    formData.append("title", title);
    formData.append("image", image[0]);
    formData.append("details", details);
    formData.append("expense", expense);
    formData.append("location", location);
    formData.append("rating", rate);
    formData.append("date", date);
    formData.append("writer", writer);
    formData.append("status", status);
    formData.append("email", email);

    fetch("https://mighty-savannah-90389.herokuapp.com/addblog", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire("Good job!", "Your Blog Created Successfully!", "success");
          reset();
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <>
      <Navigation />
      <div className="mt-2">
        <div className="form-container">
          <div>
            <div>
              <h2
                className="mb-4 text-center fw-bold"
                style={{ color: "#251D58" }}
              >
                Write Your Travel Experience
              </h2>
            </div>

            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Tour Title
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tour Title"
                  style={{ background: "#E5E5E5" }}
                  {...register("title", { required: true })}
                />
                {errors.title && (
                  <span className="text-danger">Please enter a tour title</span>
                )}
              </div>

              <div className="mt-4">
                <span
                  className="mb-2 d-inline-block"
                  style={{ fontWeight: "bold" }}
                >
                  Image
                </span>
                <div class="input-group mb-4">
                  <input
                    type="file"
                    accept="image/*"
                    class="form-control"
                    style={{ background: "#E5E5E5" }}
                    id="inputGroupFile02"
                    {...register("image", { required: true })}
                  />
                  <label class="input-group-text" htmlFor="inputGroupFile02">
                    <img style={{ height: "35px" }} src={cloudImage} alt="" />{" "}
                    <span style={{ color: "#251D58", fontWeight: "bold" }}>
                      Upload image
                    </span>
                  </label>
                </div>
                {errors.image && (
                  <span className="text-danger">Please choose an image</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Write Experience
                </label>
                <textarea
                  className="form-control"
                  rows="3"
                  placeholder="Write your tour experience"
                  style={{ background: "#E5E5E5" }}
                  {...register("details", { required: true })}
                ></textarea>
                {errors.details && (
                  <span className="text-danger">
                    Please write your tour experience
                  </span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Total Expense
                </label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Cost in integer value"
                  style={{ background: "#E5E5E5" }}
                  {...register("expense", { required: true })}
                />
                {errors.price && (
                  <span className="text-danger">Expense is mandatory</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Location
                </label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Write travel location"
                  style={{ background: "#E5E5E5" }}
                  {...register("location", { required: true })}
                />
                {errors.location && (
                  <span className="text-danger">Location is mandatory</span>
                )}
              </div>

              <div className="mb-3">
                <label className="form-label" style={{ fontWeight: "bold" }}>
                  Give Review
                </label>
                <ReactStars
                  count={5}
                  size={24}
                  onChange={ratingChanged}
                  isHalf={true}
                  emptyIcon={<i className="far fa-star"></i>}
                  halfIcon={<i className="fa fa-star-half-alt"></i>}
                  fullIcon={<i className="fa fa-star"></i>}
                  activeColor="rgb(250, 202, 81)"
                />
              </div>

              <input
                type="submit"
                className="btn fw-bold"
                style={{ background: "#251D58", color: "#fff" }}
                value="Submit"
              />
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default CreateBlogPost;
