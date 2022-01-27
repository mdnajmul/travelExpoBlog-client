import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import BlogDetail from "./pages/BlogDetail/BlogDetail";
import CreateBlogPost from "./pages/CreateBlogPost/CreateBlogPost";
import Home from "./pages/Home/Home/Home";
import Login from "./pages/Login/Login/Login";
import Register from "./pages/Login/Register/Register";
import PageNotFound from "./pages/PageNotFound/PageNotFound";
import TopSpotDetail from "./pages/TopSpotDetail/TopSpotDetail";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/addblog" element={<CreateBlogPost />} />
          <Route path="/top-spots/:spotId" element={<TopSpotDetail />} />
          <Route path="/blogs/:blogId" element={<BlogDetail />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
