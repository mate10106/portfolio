"use client";
import React from "react";
import Image from "next/image";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex items-center gap-16 text-center justify-between max-[380px]:gap-12 p-4">
      <a href="https://github.com/mate10106" target="_blank">
        <Image
          src="/github-mark-white.png"
          width={26}
          height={26}
          alt="github"
          className="hover:scale-125 transition-all duration-200"
        />
      </a>
      <a
        href="https://www.linkedin.com/in/br%C3%B6sztl-m%C3%A1t%C3%A9-21ba73206/"
        target="_blank"
      >
        <Image
          src="/LI-In-Bug.png"
          width={28}
          height={28}
          alt="Linkedin"
          className="hover:scale-125 transition-all duration-200"
        />
      </a>
      <a href="/blogs" className="inline-block">
        <Image
          src="/blog-svgrepo-com.svg"
          width={28}
          height={28}
          alt="Linkedin"
          className="hover:scale-125 transition-all duration-200"
        />
      </a>
      <a
        href="/Önéletrajz.pdf"
        className="relative inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/cv-file-interface-symbol-svgrepo-com.svg"
          width={28}
          height={28}
          alt="CV"
          className="hover:scale-125 transition-all duration-200"
        />
        <Image
          src="/flag-hu.svg"
          width={14}
          height={14}
          alt="Glasgow HU Flag"
          className="absolute bottom-0 left-1/2  transform -translate-x-1/2 translate-y-full w-4 h-4"
        />
      </a>
      <a
        href="/ResumeENG.pdf"
        className="relative inline-block"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/cv-file-interface-symbol-svgrepo-com.svg"
          width={28}
          height={28}
          alt="CV"
          className="hover:scale-125 transition-all duration-200"
        />
        <Image
          src="/uk-flag.svg"
          width={14}
          height={14}
          alt="UK Flag"
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-4 h-4"
        />
      </a>
    </div>
  );
}
