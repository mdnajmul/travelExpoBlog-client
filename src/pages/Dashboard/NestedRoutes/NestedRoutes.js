import React from "react";
import { Route, Routes } from "react-router-dom";
import AddBlog from "../AddBlog/AddBlog";
import AdminRoute from "../AdminRoute/AdminRoute";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import ManagePost from "../ManagePost/ManagePost";
import MyPost from "../MyPost/MyPost";
import Review from "../Review/Review";

const NestedRoutes = () => {
  return (
    <>
      {/* Admin Routes */}
      <Routes>
        <Route
          path="manage-post"
          element={
            <AdminRoute>
              <ManagePost></ManagePost>
            </AdminRoute>
          }
        ></Route>
        <Route
          path="addblog"
          element={
            <AdminRoute>
              <AddBlog></AddBlog>
            </AdminRoute>
          }
        ></Route>
        <Route
          path="make-admin"
          element={
            <AdminRoute>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
          }
        ></Route>
        <Route path="my-blogs" element={<MyPost></MyPost>}></Route>
        <Route path="review" element={<Review></Review>}></Route>
      </Routes>
    </>
  );
};

export default NestedRoutes;
