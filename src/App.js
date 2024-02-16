import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Contact from "./components/Contact";
import About from "./components/About";
import Success from "./components/Success";
import NotFound from "./components/NotFound";
import Projects from "./components/Projects";
import FeaturedProjects from "./components/FeaturedProjects";
import NewProjects from "./components/NewProjects";
import Table from './components/Table';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/success" element={<Success />} />
        <Route path="/table" element={<Table />} />
        <Route path="/projects" element={<Projects />}>
          <Route index element={<NewProjects />} />
          <Route path="featured" element={<FeaturedProjects />} />
          <Route path="new" element={<NewProjects />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
