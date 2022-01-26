import React from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";

const Register = () => {
  const { registerUser, isLoading, authError } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // React hook form
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // Check password matching
    if (data.password === data.password2) {
      const fullName = `${data.firstName} ${data.lastName}`;
      // Register new user based on data
      registerUser(fullName, data.email, data.password, navigate, location);
      console.log(data);
    } else if (data.password !== data.password2) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password Did not Matched!",
      });
    }
  };

  return (
    <>
      <Navigation />
      <div className="login-container my-5">
        <div className="mb-2">
          <span
            style={{
              color: "#622A87",
              fontWeight: "bold",
              fontSize: "28px",
            }}
          >
            travel<span style={{ color: "red" }}>Expo</span>Blog
          </span>
        </div>
        <div>
          <h2
            className="h3 mb-4"
            style={{ color: "orange", fontWeight: "bold" }}
          >
            Please Register
          </h2>
        </div>
        <div className="login-form border rounded">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-3">
              <label className="form-label">First Name</label>
              <input
                type="text"
                className="form-control"
                {...register("firstName", { required: true })}
              />
              {errors.firstName && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Last Name</label>
              <input
                type="text"
                className="form-control"
                {...register("lastName", { required: true })}
              />
              {errors.lastName && (
                <span className="text-danger">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input
                type="email"
                className="form-control"
                //   defaultValue={user.email}
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-warning">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password", { required: true })}
              />
              {errors.password && (
                <span className="text-warning">This field is required</span>
              )}
            </div>

            <div className="mb-3">
              <label className="form-label">Confirm Password</label>
              <input
                type="password"
                className="form-control"
                {...register("password2", { required: true })}
              />
              {errors.password2 && (
                <span className="text-warning">This field is required</span>
              )}
            </div>

            <div className="text-center">
              <input
                type="submit"
                className="btn custom-btn fw-bold"
                value="Register"
              />
            </div>
          </form>
          {isLoading && (
            <div className="text-center">
              <div className="spinner-border text-primary"></div>
            </div>
          )}

          {authError && (
            <div className="alert alert-danger mt-4" role="alert">
              {authError}
            </div>
          )}
        </div>
        <div
          className="border mt-4"
          style={{ backgroundColor: "#f6f8fa", padding: "10px 74px" }}
        >
          <span>
            Already Registered? <Link to="/login">Login</Link>{" "}
          </span>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Register;
