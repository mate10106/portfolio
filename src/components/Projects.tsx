"use client";

import { projects } from "@/data";
import { useGSAP } from "@gsap/react";
import { BookOpen, Code as CodeIcon, ExternalLink, X } from "lucide-react";

import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import TechIcon from "./TechIcon";
import clsx from "clsx";

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
        <h1 className="font-bold text-4xl mb-4 text-center text-gray-200">
          A small selection of{" "}
          <span className="text-violet-600">recent projects</span>
        </h1>
        <div className="lg:mt-20 max-lg:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 mx-auto max-lg:w-96">
          {projects.map(
            ({ id, title, des, img, iconLists, link, livedemo, blogLink }) => (
              <div
                key={id}
                className="bg-gradient-to-br from-gray-800 via-gray-900 to-black rounded-lg shadow-xl overflow-hidden"
              >
                <Link href={livedemo} target="_blank" rel="noopener noreferrer">
                  <div className="h-[200px] lg:h-[200px] relative group overflow-hidden">
                    <Image
                      src={img}
                      alt={title}
                      fill
                      className="transition-transform duration-500 group-hover:scale-110 group-hover:brightness-50"
                    />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <span className="flex gap-2 items-center text-white text-lg font-semibold">
                        <ExternalLink className="w-5 h-5 text-purple-600 font-bold" />
                        View Live Site
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="p-6 bg-gradient-to-br from-purple-00 via-purple-900 to-blue-900 text-white h-[18rem]">
                  <h1 className="font-bold text-xl line-clamp-1">{title}</h1>
                  <p className="text-sm lg:text-base font-light mt-2 line-clamp-2">
                    {des}
                  </p>
                  <div className="border-t border-white/15 pt-4 mt-4">
                    <div className="flex justify-between items-center h-32">
                      <div className="grid grid-cols-3 gap-4">
                        {iconLists.map(({ icon, label }, index) => (
                          <TechIcon key={index} label={label}>
                            <Image
                              src={icon}
                              alt={icon}
                              className="w-5 h-5"
                              width={40}
                              height={40}
                            />
                          </TechIcon>
                        ))}
                      </div>
                      <div className="ml-4 space-y-3">
                        <div>
                          <Link
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center bg-purple-700 rounded-lg h-8 w-[7.2rem] scale-95 hover:scale-100 hover:text-black transition-all duration-300"
                          >
                            <CodeIcon size={18} className="mx-2" />
                            <span className="text-sm">View Code</span>
                          </Link>
                        </div>
                        <X className="flex mx-auto w-5 h-5 text-white/15" />
                        <div>
                          {blogLink ? (
                            <Link
                              href={blogLink}
                              rel="noopener noreferrer"
                              className={clsx(
                                "flex items-center bg-purple-700 rounded-lg h-8 w-[7.2rem] scale-95 hover:scale-100 hover:text-black transition-all duration-300"
                              )}
                            >
                              <BookOpen size={18} className="mx-2" />
                              <span className="text-sm">Read more</span>
                            </Link>
                          ) : (
                            <div
                              className={clsx(
                                "flex items-center bg-gray-500 rounded-lg h-8 w-[7.2rem] scale-95 cursor-not-allowed text-gray-300"
                              )}
                            >
                              <BookOpen size={18} className="mx-2" />
                              <span className="text-base">No blog</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
