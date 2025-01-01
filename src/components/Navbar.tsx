"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Link from "next/link";
import { navigation } from "@/constants";

const Navbar = () => {
  useGSAP(() => {
    gsap.to("#pc-navbar", {
      opacity: 1,
      x: -50,
      duration: 2,
    });
  }, []);

  return (
    <div id="pc-navbar" className="nav--container">
      {navigation.map((item) => (
        <Link href={item.url} key={item.id}>
          <div
            className={`scale-95 p-5 text-violet-400 hover:bg-violet-900 hover:text-white hover:scale-105 rounded-full transition-all duration-150`}
          >
            <p>{item.svg}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
