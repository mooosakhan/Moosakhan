import React from "react";
import Hero from './components/hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Internships from './components/Internships'
import Communities from './components/Communities'
import Education from './components/Education'
import Abilities from './components/Abilities'
import CodingSkills from './components/CodeingSkills'

import './index.css'

const Portfolio = () => {
  return (
    <>
    <div className="Navbar absolute top-8 w-full">
      <Navbar/>
    </div>
    <div className="flex flex-col
     lg:flex-row w-full bg-zinc-900 font-poppins">
      {/* Left Section - Image */}
      <div className="w-full h-[50vh] lg:h-screen lg:w-1/2">
        <img
          src="https://sabyasachiseal.com/wp-content/img/main.jpg"
          alt="Profile"
          className="object-cover w-full h-full"
        />
      </div>

      {/* Right Section - Sliding Content */}
      <div className="w-full lg:w-[60vw] lg:h-screen overflow-y-auto ">
      <Hero/>
      <hr className=" border-zinc-600"  />
      <About/>
      <hr className=" border-zinc-600"  />
      <Skills/>
      <hr className=" border-zinc-600"  />
      <Internships/>
      <hr className=" border-zinc-600"  />
      <Communities/>
      <hr className=" border-zinc-600"  />
      <Education/>
      <hr className=" border-zinc-600"  />
      <Abilities/>
      <hr className=" border-zinc-600"  />
      <CodingSkills/>
      </div>
    </div>
    </>
  );
};

export default Portfolio;
