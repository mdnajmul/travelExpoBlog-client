import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./context/AuthProvider";
import Home from "./pages/Home/Home/Home";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
