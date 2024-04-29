import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./components/banner/Banner.js";
import Home from "./components/home/Home.js";
import Navbar from "./components/nav/Navbar.js";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/banner" element={<Banner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
