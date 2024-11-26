import React from 'react'
import Waves from "vanta/src/vanta.waves";
import { useEffect, useRef } from "react";
import { CardBody, CardContainer, CardItem } from "../Components/ui/3d-card";
import service1 from "../assets/service-img1.png"
import service2 from "../assets/service-img2.png"
import service3 from "../assets/service-img3.png"
import SHAPE1 from "../assets/SHAPE1.png"
import SHAPE2 from "../assets/SHAPE2.png"
import SHAPE3 from "../assets/SHAPE3.png"
import arrow from "../assets/arrow.png"


export default function Services() {
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
      className="  md:h-[100vh] md:w-[120vw] py-10 px-4 text-center text-white relative overflow-visible"
    >
      {/* Other Content */}
      {/* <div className="pt-20 md:pl-10 lg:p-0">
        <div className="lg:absolute lg:left-20 flex top-10 lg:top-40 text-start">
          <p className="bg-yellow-500 w-fit px-2 md:px-4 py-2 rounded-es-3xl rounded-tr-3xl text-5xl font-extrabold text-white">
            02
          </p>
          <h2 className="text-3xl mt-5 ml-5">Our Services</h2>
        </div>
        <div className=" text-3xl md:text-nowrap lg:text-6xl text-start lg:absolute top-60 left-20 md:mt-4 uppercase font-bold">
          <p>READY TO TAKE</p>
          <p>
            THE{" "}
            <span
              className="text-yellow-500 overflow-visible"
              style={{
                backgroundImage: `url(${arrow})`,
                backgroundPositionX: "150px",
                backgroundPositionY: "10px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundOrigin: "content-box",
                backgroundClip: "border-box",
                backgroundBlendMode: "overlay",
                backgroundSize: "10% 20%",
                backdropFilter: "none",
              }}
            >
              NEXT{" "}
            </span>{" "}
            STEP?
          </p>
        </div>
        <p className="lg:absolute lg:left-20 lg:top-[23rem] text-xs md:text-lg px-10 md:px-0 md:w-[50%] lg:w-[30%] text-justify leading-relaxed  mt-6">
          Get in touch today to schedule a free consultation. We'd love to learn
          about your business and discuss how we can help you succeed.
        </p>
        <button className="lg:absolute  lg:left-20 mr-96 my-10 lg:my-0 lg:top-[33rem] bg-yellow-500 w-fit px-4 py-2 rounded-ee-3xl rounded-tl-3xl text-white font-bold hover:bg-green-600 transition duration-300">
          EXPLORE SERVICES
        </button>
      </div> */}

      <div className=" md:pt-32  md:ml-0  md:p-20 lg:p-">
        {/* Icon and Title */}
        <div className="flex ">
          <p className="bg-yellow-500 w-fit px-2 md:px-4 py-2 rounded-es-3xl rounded-tr-3xl text-5xl font-extrabold text-white">
            02
          </p>
          <h2 className="text-3xl pt-5">Our Services</h2>
        </div>
        <div className="text-3xl text-start md:text-nowrap lg:text-6xl uppercase mt-6 font-bold">
          <p>READY TO TAKE</p>
          <p>
            THE{" "}
            <span
              className="text-yellow-500 overflow-visible"
              style={{
                backgroundImage: `url(${arrow})`,
                backgroundPositionX: "150px",
                backgroundPositionY: "10px",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right",
                backgroundOrigin: "content-box",
                backgroundClip: "border-box",
                backgroundBlendMode: "overlay",
                backgroundSize: "10% 20%",
                backdropFilter: "none",
              }}
            >
              NEXT{" "}
            </span>{" "}
            STEP?
          </p>
        </div>
        <p className="text-xs  px-4 md:text-lg text-justify md:w-80 leading-relaxed  mt-2 lg:mt-6">
          Get in touch today to schedule a free consultation. We'd love to learn
          about your business and discuss how we can help you succeed.
        </p>
        <button className="bg-yellow-500 w-fit items-start flex  px-4 py-2 my-10 rounded-ee-3xl rounded-tl-3xl text-white font-bold hover:bg-green-600 transition duration-300">
          EXPLORE SERVICES
        </button>
      </div>
      {/* Cards Container */}
      <div className="md:absolute top-10 lg:left-[35%]  pb-5 grid grid-cols-1 md:gap-40 md:grid-cols-3  md:mx-20 ">
        {/* First Card */}
        <CardContainer className="w-80">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl">
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={service1}
                height="1000"
                width="1000"
                className="h-60 w-full   group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              className=" text-black font-bold p-4 "
              style={{
                backgroundImage: `URL(${SHAPE1})`,
                backgroundSize: "cover",
                height: "150px",
                width: "300px",
              }}
            >
              <h2 className="text-lg font-extrabold text-nowrap">
                PERCEPTION MANAGEMENT
              </h2>
              <p className="mt-2 text-sm leading-relaxed">
                We'll help you create a clear plan for growth and success, with
                achievable steps that fit your vision.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Second Card */}
        <CardContainer className="w-80">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl">
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={service2}
                height="1000"
                width="1000"
                className="h-60 w-full   group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              className=" font-bold p-4 "
              style={{
                backgroundImage: `URL(${SHAPE2})`,
                backgroundSize: "cover",
                height: "150px",
                width: "300px",
              }}
            >
              <h2 className="text-lg font-extrabold">BUSINESS CONSULTATION</h2>
              <p className="mt-2 text-sm leading-tight">
                From streamlining processes to reducing costs, we'll help you
                run your business more efficiently.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>

        {/* Third Card */}
        <CardContainer className="w-80">
          <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-emerald-500/[0.1] dark:bg-transparent w-auto sm:w-[30rem] h-auto rounded-xl">
            <CardItem translateZ="100" className="w-full mt-4">
              <img
                src={service3}
                height="1000"
                width="1000"
                className="h-60 w-full  group-hover/card:shadow-xl"
                alt="thumbnail"
              />
            </CardItem>
            <CardItem
              className=" text-black font-bold p-4 "
              style={{
                backgroundImage: `URL(${SHAPE3})`,
                backgroundSize: "cover",
                height: "150px",
                width: "300px",
              }}
            >
              <h2 className="text-lg font-extrabold">SALES</h2>
              <p className="mt-2 text-sm leading-tight">
                We'll work with you to develop effective strategies that reach
                your target audience and grow your customer base.
              </p>
            </CardItem>
          </CardBody>
        </CardContainer>
      </div>
    </div>
  );
}

