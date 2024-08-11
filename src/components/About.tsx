"use client";

import { BackgroundGradientDemo } from "./BackgroundGradient";
import { Experience } from "./Experience";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.to("#about", {
      opacity: 1,
      y: -50,
      duration: 2,
    });
  }, []);

  return (
    <div
      className="opacity-0 space-y-10 text-balance pt-14 max-md:pt-8 mb-14 mt-12"
      id="about"
    >
      <div>
        <BackgroundGradientDemo />
      </div>
      <div className="flex flex-col items-center">
        <span className="text-xl font-semibold text-violet-600">
          Explore My
        </span>
        <h1 className="font-bold text-4xl text-gray-200 font-serif ">
          Experience
        </h1>
        <Experience />
      </div>
    </div>
  );
};

export default About;
