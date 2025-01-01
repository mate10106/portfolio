"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useState } from "react";

const Approach = () => {
  const [openSection, setOpenSection] = useState<string>("planning");
  const [activeSection, setActiveSection] = useState<string>("planning");

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? "" : section);
    setActiveSection(activeSection === section ? "" : section);
  };

  useGSAP(() => {
    gsap.to("#approach", {
      opacity: 1,
      y: -50,
      duration: 2,
    });
  }, []);

  useGSAP(() => {
    gsap.fromTo(
      "#section-content",
      {
        opacity: 0,
        height: 0,
        overflow: "hidden",
      },
      {
        opacity: 1,
        height: "auto",
        duration: 2,
        ease: "elastic.out",
        clearProps: "all",
      }
    );
  }, [openSection]);

  return (
    <div id="approach" className="opacity-0 mt-24 max-lg:mt-12">
      <h1 className="text-center text-gray-200 text-3xl mb-6 font-bold">
        My <span className="text-violet-600 "> approach</span>
      </h1>
      <div>
        <div>
          <button
            className="w-full text-left focus:outline-none"
            onClick={() => toggleSection("planning")}
          >
            <h2
              className={`text-white text-lg font-bold border-b-2 ${
                activeSection === "planning" ? "max-w-60" : "max-w-52"
              }`}
            >
              Planning <span className="text-violet-600 font-extrabold">&</span>{" "}
              Strategy
            </h2>
          </button>
          {openSection === "planning" && (
            <div
              id="section-content"
              className="mt-2 md:flex max-md:flex max-md:flex-col max-md:items-center max-md:gap-6"
            >
              <p className="text-white self-center max-md:text-center max-md:mt-4">
                We&apos;ll collaborate to map out your website goals, target
                audience, and key functionalities. We&apos;ll discuss things
                like site structure, navigation, and content requirements.
              </p>
              <Image
                src="/strategy-bishop-svgrepo-com.svg"
                alt="Planning & Strategy"
                height={210}
                width={210}
                className="mt-2 rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="mt-4">
          <button
            className="w-full text-left focus:outline-none"
            onClick={() => toggleSection("development")}
          >
            <h2
              className={`text-white text-lg font-bold border-b-2 ${
                activeSection === "development" ? "max-w-60" : "max-w-52"
              }`}
            >
              Development{" "}
              <span className="text-violet-600 font-extrabold">&</span> Progress
              Update
            </h2>
          </button>
          {openSection === "development" && (
            <div
              id="section-content"
              className="mt-2 md:flex max-md:flex max-md:flex-col max-md:items-center max-md:gap-6"
            >
              <p className="text-white self-center max-md:text-center max-md:mt-4">
                Once we agree on the plan, I cue my lofi playlist and dive into
                coding. From initial sketches to polished code, I keep tou
                update every step of the way.
              </p>
              <Image
                src="/programming-svgrepo-com.svg"
                alt="Development & Update"
                height={210}
                width={210}
                className="mt-2 rounded-lg"
              />
            </div>
          )}
        </div>
        <div className="mt-4">
          <button
            className="w-full text-left focus:outline-none"
            onClick={() => toggleSection("launch")}
          >
            <h2
              className={`text-white text-lg font-bold border-b-2 ${
                activeSection === "launch" ? "max-w-60" : "max-w-52"
              }`}
            >
              Planning <span className="text-violet-600 font-extrabold">&</span>{" "}
              Launch
            </h2>
          </button>
          {openSection === "launch" && (
            <div
              id="section-content"
              className="mt-2 md:flex max-md:flex max-md:flex-col max-md:items-center max-md:gap-6"
            >
              <p className="text-white self-center max-md:text-center max-md:mt-4">
                This is where the magic happens! Based on the approved design,
                I&apos;ll translate everything into functional code, building
                your website from the ground up.
              </p>
              <Image
                src="/rocket-2-svgrepo-com.svg"
                alt="Planning & Launch"
                height={210}
                width={210}
                className="mt-2 rounded-lg"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Approach;
