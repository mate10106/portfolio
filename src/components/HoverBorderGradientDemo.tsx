"use client";
import React from "react";
import Image from "next/image";
import { SocialButtons } from "@/data";
import Link from "next/link";

export function HoverBorderGradientDemo() {
  return (
    <div className="flex max-md:flex-wrap w-[90%] gap-6 text-white text-sm">
      {SocialButtons.map((social) => (
        <Link
          key={social.id}
          href={social.href}
          className="flex items-center justify-center gap-2 w-full py-4 shadow-lg border border-white/15 rounded-lg cursor-pointer scale-95 hover:scale-100 transition-all duration-200 hover:text-purple-500 font-semibold"
          target={social.target}
        >
          <Image src={social.icon} alt={social.label} width={18} height={18} />
          <p>{social.label}</p>
        </Link>
      ))}
    </div>
  );
}
