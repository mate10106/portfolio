"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import React, { useState } from "react";

const Contact = () => {
  const [isCopied, setIsCopied] = useState(false);

  const email = "brosztl.mate@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email).then(() => {
      const emailElement = document.getElementById("myEmail");
      if (emailElement) {
        emailElement.innerHTML = "Copied!";
        emailElement.classList.add("copied");
        setIsCopied(true);
        setTimeout(() => {
          emailElement.innerHTML = "Click for my Email";
          emailElement.classList.remove("copied");
          setIsCopied(false);
        }, 4000);
      }
    });
  };

  useGSAP(() => {
    gsap.to("#contact", {
      opacity: 1,
      y: -50,
      duration: 2,
    });
  }, []);

  return (
    <div className="mt-32 max-sm:mt-8 pb-12 opacity-0" id="contact">
      <div className="text-center">
        <p className="text-violet-500 font-sans font-thin text-lg mb-4">
          Get in Touch
        </p>
        <h1 className="text-3xl text-white font-bold">Contact Me</h1>
      </div>
      <div className="p-14 flex justify-center">
        <button
          onClick={handleCopyEmail}
          className="p-4 border-2 text-white hover:text-gray-300 font-bold rounded-3xl hover:border-violet-600 hover:scale-150 transition-all duration-500"
          id="myEmail"
        >
          Click for my Email
        </button>
      </div>
      <div className="flex justify-between items-center text-white m-4">
        <p>Copyright © 2024 Máté Brösztl</p>
        <div className="futter-links">
          <a
            href="https://github.com/mate10106"
            target="_blank"
            className="futter-link"
          >
            <Image
              src="/github-mark-white.png"
              width={20}
              height={20}
              alt="github"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/br%C3%B6sztl-m%C3%A1t%C3%A9-21ba73206/"
            target="_blank"
            className="futter-link"
          >
            <Image src="/LI-In-Bug.png" width={20} height={20} alt="github" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
