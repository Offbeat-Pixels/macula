import React, { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Banner from "./Components/Banner";
import About from "./Components/About";
import Services from "./Components/Services";
import { ThreeDCardDemo } from "./Components/ui/ThreeDCardDemo";
import Why from "./Components/Why";
import Contact from "./Components/Contact";

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const containerRef = useRef(null);

  useLayoutEffect(() => {
    if(window.innerWidth>500){
      const container = containerRef.current;
      if (!container) return;

      const handleResize = () => {
        ScrollTrigger.refresh();
      };

      // Horizontal Scroll Animation
      // const animation = gsap.to(
      //   container,
      //   {
      //     x: () => -(container.scrollWidth - window.innerWidth),
      //     duration: 1,
      //     // opacity: 0,
      //     ease: "none",
      //     scrollTrigger: {
      //       trigger: container,
      //       start: "top top",
      //       end: () => `+=${container.scrollWidth - window.innerWidth}`,
      //       scrub: true,
      //       pin: true,
      //       markers: true, // Set true for debugging
      //     },
      //   }
      // );

       const animation = gsap.to(
        container,
        {
          x: () => -(container.scrollWidth - window.innerWidth),
          duration: 1,
          // opacity: 0,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top top",
            end: () => `+=${container.scrollWidth - window.innerWidth}`,
            scrub: true,
            pin: true,
            // markers: true, // Set true for debugging
          },
        }
      );

    

      // Add resize listener
      window.addEventListener("resize", handleResize);

      // Cleanup on unmount
      return () => {
        animation.kill();
        window.removeEventListener("resize", handleResize);
      };
    }
    
  }, []);

  return (
    <div
      style={{
        // overflow: "hidden",
        width: "100vw",
        height: "100vh",
        position: "relative",
      }}
    >
      <div
        ref={containerRef}
        className="body md:flex flex-shrink-0"
        >
        <section  className="md:min-w-full md:h-full" >
          <Banner />
        </section>
        <section  className="md:min-w-full md:h-full" >
          <About />
        </section>
        <section  className="md:min-w-full md:h-full" >
          <Services />
        </section>
        <section  className="md:min-w-full md:h-full" >
          <Why />
        </section>
        <section  className="md:min-w-full md:h-full" >
          <Contact />
        </section>
      </div>
    </div>
  );
};

export default App;
