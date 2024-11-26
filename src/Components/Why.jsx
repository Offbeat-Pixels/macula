import React from 'react'
import bg from "../assets/why.jpg"
import s1 from "../assets/s1.png"
import s2 from "../assets/s2.png"
import s3 from "../assets/s3.png"

export default function Why() {
  return (
    <div
      className="md:h-[100vh] pt-10 p-4 md:w-[120vw] lg:ml-60 overflow-hidden "
      style={{ backgroundImage: `url(${bg})`, backgroundSize: "cover" }}
    >
      <div className=" md:p-40">
        {/* Icon and Title */}
        <div className="flex items-center">
          <p className="bg-[#118268] w-fit px-2 md:px-4 py-2 rounded-es-3xl rounded-tr-3xl text-5xl font-extrabold text-white">
            03
          </p>
          <h2 className="text-3xl md:text-4xl ml-5">Why Choose us?</h2>
        </div>
        <div className="text-4xl md:text-6xl uppercase mt-6 font-bold">
          <p>WE'RE REACHING</p>
          <p>
            YOUR <span className="text-[#118268]">UNIQUE</span> NEEDS.
          </p>
        </div>
        <p className=" text-sm md:text-lg text-justify md:w-[45%] leading-relaxed  mt-6">
          Get in touch today to schedule a free consultation. We'd love to learn
          about your business and discuss how we can help you succeed.
        </p>
        <button className="bg-[#118268] w-fit px-4 py-2 my-5 rounded-ee-3xl rounded-tl-3xl text-white font-bold hover:bg-green-600 transition duration-300">
          About Macula
        </button>
      </div>

      <div className="md:absolute md:top-0 text-white md:ml-[40rem] grid grid-cols-1  md:grid-cols-3 md:gap-64 ">
        {/* Card 1 */}
        <div
          className=" md:mt-48 md:ml-56 h-72  md:w-60 p-4 rounded-lg "
          style={{
            backgroundImage: `url(${s1})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="mt-32 p-2">
            <span className="text-xl  uppercase font-extrabold">
              Experienced Team
            </span>
            <p className="mt-2 text-sm">
              Our consultants have a proven track record of helping businesses
              succeed.
            </p>
          </div>
        </div>

        {/* Card 2 */}
        <div
          className=" md:ml-60 h-72  md:w-60 p-4  "
          style={{
            backgroundImage: `url(${s2})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="mt-32 p-2">
            <span className="text-xl font-extrabold">
              PERSONALIZED SOLUTIONS
            </span>
            <p className="mt-2 text-sm">
              We tailor our services to meet your unique needs & challenges.
            </p>
          </div>
        </div>

        {/* Card 3 */}
        <div
          className=" md:mt-80  h-72 md:w-60 p-4  "
          style={{
            backgroundImage: `url(${s3})`,
            backgroundSize: "100% 100%",
          }}
        >
          <div className="mt-36 p-2">
            <span className="text-xl font-extrabold">PRACTICAL ADVICE</span>
            <p className="mt-2 text-sm">
              We focus on actionable steps that deliver real results.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
