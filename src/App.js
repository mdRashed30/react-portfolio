import React from "react";
import { Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./routes/Home";
import About from "./routes/About"; // 
import Project from "./routes/Project";
import Contact from "./routes/Contact";
import Resume from "./routes/Resume";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer"


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/resume" element={<Resume />} />
      </Routes>


      <Footer />

    </>
  );
}

export default App;
