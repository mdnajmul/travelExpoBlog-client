import React from "react";
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";

const PrivatRoute = ({ children }) => {
  const { user, isLoading } = useAuth();
  const location = useLocation();

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center mt-5">
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  if (!user.email) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default PrivatRoute;
