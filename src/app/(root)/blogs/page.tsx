"use client";

import { blogs } from "@/data";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";

const Blogs = () => {
  useGSAP(() => {
    gsap.fromTo(
      "#header",
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 0.4,
        duration: 1,
      }
    );
  }, []);

  return (
    <div id="header" className="opacity-0">
      <div>
        <Link href="/" className="fixed z-20">
          <Image
            src="/back-square-svgrepo-com.svg"
            width={22}
            height={22}
            alt="Home"
            className="size-8"
          />
        </Link>
      </div>
      <h1 className="text-blue-600 font-bold text-center text-4xl my-12">
        Blogs
      </h1>
      <div id="blog" className="flex flex-col gap-6">
        {blogs
          .slice()
          .reverse()
          .map((blog) => (
            <div
              key={blog.id}
              className="text-white p-4 border-y border-y-white/25 rounded-2xl"
            >
              <div className="space-y-4">
                <h2 id="title" className="text-xl font-bold">
                  {blog.title}
                </h2>
                <p
                  id="summary"
                  className="text-md font-light max-sm:line-clamp-3"
                >
                  {blog.summary}
                </p>
                <div className="flex justify-between">
                  <p className="font-thin text-sm text-white/65">{blog.date}</p>
                  <Link
                    href={`/blogs/${blog.id}`}
                    className="text-base font-semibold text-white/85 border-b-2 hover:border-b-blue-800 transition-all"
                  >
                    Read more
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Blogs;
