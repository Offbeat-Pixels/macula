import React from 'react'
import Waves from "vanta/src/vanta.waves";
import { useEffect, useRef } from "react";
import contactImg from "../assets/contact-img.jpg"
import shape from "../assets/shape.png"
import fb from "../assets/fb.png"
import insta from "../assets/insta.png"
import x from "../assets/x.png"
import whatsapp from "../assets/whatsapp.png"
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
export default function Contact() {
  const vantaRef = useRef(null);

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
      waveHeight: 20.0,
      waveSpeed: 0.75,
      zoom: 0.25,
    });

    // Cleanup Vanta effect on component unmount
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  return (
    <div
      ref={vantaRef}
      className="md:h-screen md:ml-60 md:w-[100vw]  text-white relative overflow-hidden"
    >
      <div className="w-[50%] bottom-12 md:bottom-0 rotate-90 md:rotate-0 md:w-[30%] opacity-20">
        <img src={contactImg} alt="" />
      </div>
      {/* <div className="w-40 md:w-60 left-48 bottom-56 rotate-90 md:left-[80%] md:bottom-[90%] ">
        <img src={shape} alt="" />
      </div> */}
      {/* Other Content */}
      <div className=" md:absolute md:left-[50%] p-4 flex md:top-40 text-start">
        <p className="bg-yellow-500 w-fit px-2 md:px-4 py-2 rounded-es-3xl rounded-tr-3xl text-5xl font-extrabold text-white">
          04
        </p>
        <h2 className="text-4xl mt-5 ml-5">Contact Us</h2>
      </div>
      <div className="md:absolute md:left-[50%] p-4   md:mt-0 md:top-64 uppercase text-start font-bold text-4xl md:text-6xl">
        <p>get in touch</p>
        <span className="text-yellow-500 overflow-visible"> WITH us. </span>
      </div>
      <p className="md:absolute md:left-[50%] p-4 md:top-[23rem] text-lg   text-justify leading-relaxed uppercase mt-6">
        <span className="flex">
          {" "}
          <FaLocationDot /> dummy location 123 street 4.
        </span>
        <span className="flex">
          <IoCall />
          temp@mail.com
        </span>
        <span className="flex mt-20 h-10 gap-5 ">
          <img src={fb} alt="" />
          <img src={x} alt="" />
          <img src={insta} alt="" />
          <img src={whatsapp} alt="" />
        </span>
        <span className="flex gap-4 mt-5 md:gap-10 md:ml-64 h-10 ">
          <button>Privacy Policy</button>
          <button>Cookies </button>
        </span>
      </p>
    </div>
  );
}
