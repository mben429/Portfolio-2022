// src/App.js

import React from "react";
import About from "./components/About";
import Contact from "./components/About";
import Navbar from "./components/About";
import Projects from "./components/About";
import Skills from "./components/About";
import Testimonials from "./components/About";


export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
}