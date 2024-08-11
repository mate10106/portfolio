"use client";

import { projects } from "@/data";
import { PinContainer } from "@/components/ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
  useGSAP(() => {
    gsap.to("#project", {
      opacity: 1,
      y: -60,
      duration: 2,
    });
  }, []);

  return (
    <div>
      <div id="project" className="opacity-0 p-8">
        <h1 className="font-bold text-4xl mb-4 text-center text-gray-200 font-serif">
          A small selection of{" "}
          <span className="text-violet-600"> recent project</span>
        </h1>
        <div className="lg:mt-28 grid grid-cols-2 lg:gap-40 max-lg:grid-cols-1 max-lg:space-y-12 justify-evenly max-[840px]:gap-12">
          {projects.map(
            ({ id, title, des, img, iconLists, link, livedemo }) => (
              <div
                key={id}
                className="text-white h-[25rem] w-full flex items-center justify-center"
              >
                <PinContainer title={title}>
                  <Link
                    href={livedemo}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <div className="relative flex items-center justify-center sm:w-96 w-[80vw] overflow-hidden h-[20vh] lg:h-[30vh] mb-10">
                      <Image
                        src={img}
                        alt={title}
                        className="z-10 absolute rounded-md hover:scale-90 hover:transition-all duration-200"
                        width={640}
                        height={640}
                      />
                    </div>
                  </Link>
                  <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                    {title}
                  </h1>
                  <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                    {des}
                  </p>
                  <div className="flex max-[382px]:flex-col max-[382px]:gap-6 items-center justify-between mt-7 mb-3">
                    <div className="flex items-center">
                      {iconLists.map((icon, index) => (
                        <div
                          key={icon}
                          className="border border-whte/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                          style={{
                            transform: `translateX(-${5 * index * 2}px)`,
                          }}
                        >
                          <Image
                            src={icon}
                            alt={icon}
                            className="p-2"
                            width={68}
                            height={68}
                          />
                        </div>
                      ))}
                    </div>
                    <Link
                      href={link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center border rounded-full p-2 text-white font-semibold ml-2"
                    >
                      <span className="text-violet-500 font-bold">Code</span>
                      <FaLocationArrow className="ms-3 mr-2" color="#CBACF9" />
                    </Link>
                  </div>
                </PinContainer>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
