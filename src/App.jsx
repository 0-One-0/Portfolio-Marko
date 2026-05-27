
import { MotionPathPlugin } from 'gsap/MotionPathPlugin'
import { useGSAP } from "@gsap/react";
import { TextPlugin } from 'gsap/TextPlugin'
import { Routes, Route } from 'react-router'
import gsap from "gsap";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

gsap.registerPlugin(useGSAP, MotionPathPlugin, TextPlugin);

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/Contact" element={<Contact />} />
      <Route path="/Projects" element={<Projects />} />
    </Routes>
  );
}

export default App;
