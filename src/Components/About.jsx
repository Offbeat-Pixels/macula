import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Abt from "../assets/About.jpg";
import bg2 from "../assets/bg2.jpg";
import { useTextAnimation } from "./Hooks/useTextAnimation";
// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
export default function About() {
  

  // Trigger text animation when the #text element enters the viewport
  useTextAnimation("#text", { duration: 0.5 }); // Will trigger when 50% of the element is visible

  useEffect(() => {
  gsap.from("#abt", {
    x: -100,          // Start 100px off-screen horizontally
    opacity: 0,       // Start fully transparent
    duration: 1,      // Animation duration
    scrollTrigger: {
      trigger: "#abt",       // The element to watch for scrolling
      start: "top 75%",      // Animation starts when the top of #abt is 75% into the viewport
      end: "top 50%",        // Animation ends when the top of #abt is 50% into the viewport
      markers: true,         // Show debug markers
      toggleActions: "play none none none", // Play the animation on entering the viewport
    },
  });
}, []);

  return (
    <div
    id="about"
      className="bg-gray-500  h-screen flex items-center"
      style={{ backgroundImage: `url(${bg2})`, backgroundSize: "cover" }}
    >
      {/* Image Section */}
      <div className="flex-none w-full pr-2 md:w-1/2 lg:w-1/3">
        <img
          id="abt"
          src={Abt}
          alt="About Us"
          className="h-80 md:h-[100vh]  overflow-hidden mx-auto"
        />
      </div>

      {/* Text Section */}
      <div className="flex-grow w-full  mt-24 md:w-1/2 lg:w-2/3 px-10">
        {/* Icon and Title */}
        <div className="flex items-center">
          <p className="bg-green-500 w-fit px-2 md:px-4 py-2 rounded-es-3xl rounded-tr-3xl text-5xl font-extrabold text-white">
            01
          </p>
          <h2 className="text-4xl ml-5">About</h2>
        </div>
        <div
          id="text"
          className="text-3xl md:text-wrap lg:text-6xl uppercase mt-6 font-bold"
        >
          <p>Sky's the limit -</p>
          <p>We aim for the horizon</p>
        </div>
        <p className="text-xs px-4 md:text-lg text-justify leading-relaxed mt-2 lg:mt-6">
          We specialize in providing practical advice and hands-on support to
          businesses like yours. Our team has years of experience in various
          industries and brings together skills in strategy, operations,
          finance, and more. We believe that every business has the potential to
          thrive with the right tools and guidance.
        </p>
        <button className="bg-green-500 w-fit px-4 py-2 my-10 rounded-ee-3xl rounded-tl-3xl text-white font-bold hover:bg-green-600 transition duration-300">
          About Macula
        </button>
      </div>
    </div>
  );
}
