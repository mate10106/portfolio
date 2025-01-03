"use client";
import React from "react";
import Image from "next/image";
import { HoverBorderGradientDemo } from "./HoverBorderGradientDemo";

export function BackgroundGradientDemo() {
  return (
    <div className="flex flex-col items-center gap-14">
      <div
        id="main-images"
        className="relative spin-border p-4 max-[2700px]:w-64 max-[2700px]:h-64 max-md:self-center"
      >
        <Image
          src="/mate-removebg2.png"
          alt="Máté Brösztls"
          height={4032}
          width={3024}
          className="mt-5 object-contain rounded-full scale-125"
        />
      </div>
      <h1 className="text-center text-2xl lg:text-4xl text-white font">
        Hey, my name is{" "}
        <span className="font-bold text-3xl text-violet-600 font-sans">
          Máté Brösztl
        </span>{" "}
        <br></br>based in Hungary.
      </h1>
      <HoverBorderGradientDemo />
    </div>
  );
}
