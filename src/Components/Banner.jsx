import Waves from "vanta/src/vanta.waves";
import gsap from "gsap";
import { useEffect, useRef } from "react";
import Hero from "/src/assets/Banner.png";
import SplitType from "split-type";
import { useTextAnimation } from "./Hooks/useTextAnimation";

export default function Banner() {
  const vantaRef = useRef(null);

  //Hook for Vanta background animation
  useEffect(() => {
    const vantaEffect = Waves({
      el: vantaRef.current,
      mouseControls: true,
      touchControls: true,
      gyroControls: false,
      minHeight: 200.0,
      minWidth: 200.0,
      scale: 1.0,
      scaleMobile: 1.0,
      color: 0x0,
      shininess: 150.0,
      waveHeight: 40.0,
      waveSpeed: 0.75,
      zoom: 0.75,
    });

    // Cleanup Vanta effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  // Trigger text animation when the #text element enters the viewport
  useTextAnimation("#text", { duration: 1 },0); // Will trigger when 50% of the element is visible

  useEffect(() => {
    const tl = gsap.timeline({
      defaults: { duration: 0.5, ease: "power1.inOut" },
    });

    // Hero section animation
    tl.from("#hero", {
      y: -100,
      opacity: 0,
      scale: 2,
      duration: 0.8,
      ease: "power2.inOut",
    });

    // Vanta section animation
    tl.from("#vanta", {
      y: 200,
      opacity: 0,
    });



  });

  return (
    <div className="grid grid-cols-1  relative">
      {/* Hero Section */}
      <img
        src="/src/assets/logo.jpg"
        alt="Logo"
        className=" w-20 md:w-40 m-5 left-5 top-5 md:top-20 md:left-40"
      />
      <div
        id="hero"
        className="hero bg-cover md:bg-contain   md:mt-0 h-60 md:h-[50vh] bg-no-repeat bg-right"
        style={{
          backgroundImage: `url(${Hero})`,
          // height: "50vh",
          // backgroundAttachment: "scroll",
        }}
      >
        <div className="uppercase z-10 px-5 text-left text-pretty mt-32 md:mt-36 lg:mt-28  lg:ml-40">
          <p className="text-xl md:text-3xl">Welcome To</p>
          <p
            id="text"
            className="text-4xl md:text-6xl lg:text-8xl font-extrabold text-[#357F10]"
          >
            Macula <br />
            <span className="text-black">Consultants!</span>
          </p>
        </div>
      </div>

      {/* Vanta Section */}
      <div
        id="vanta"
        className="h-[60vh]  px-5  flex flex-col text-left text-white  "
        ref={vantaRef}
      >
        <p
          id="text"
          className="text-2xl md:text-3xl lg:text-4xl uppercase  lg:ml-40 "
        >
          we're here to help
        </p>
        <p
          id="text"
          className="text-3xl md:text-4xl lg:text-5xl uppercase font-bold lg:ml-40 "
        >
          your <span className="text-yellow-400">business</span> grow.
        </p>
        <p className="text-xs md:text-sm mt-5 md:ml-[70%] md:text-justify md:w-1/4">
          Whether you're just starting out or want to improve your current
          operations, we provide you with the solution. Let us help you reach
          your goals!
        </p>
      </div>
    </div>
  );
}