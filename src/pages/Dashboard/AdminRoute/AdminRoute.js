import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";

const AdminRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const admin = sessionStorage.getItem("admin");
  const location = useLocation();

  //   Loading Spinner
  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!user.email && !admin) {
    return <Navigate to="/" state={{ from: location }} />;
  }

  return children;
};

export default AdminRoute;
