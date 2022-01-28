import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import CreateBlogPost from "./pages/CreateBlogPost/CreateBlogPost";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import TopSpotDetail from "./pages/TopSpotDetail/TopSpotDetail";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route
            path="/top-spots/:spotId"
            element={
              <PrivateRoute>
                <TopSpotDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/blogs/:blogId"
            element={
              <PrivateRoute>
                <BlogDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/addblog"
            element={
              <PrivateRoute>
                <CreateBlogPost />
              </PrivateRoute>
            }
          />
          <Route
            path="/dashboard/*"
            element={
              <PrivateRoute>
                <Dashboard />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
