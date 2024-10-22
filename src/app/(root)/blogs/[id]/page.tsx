"use client";

import { useParams } from "next/navigation";
import { blogs } from "@/data";
import Link from "next/link";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const BlogDetail = () => {
  const params = useParams();
  const { id } = params;
  const blog = blogs.find((blog) => blog.id === Number(id));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  useGSAP(() => {
    gsap.fromTo(
      "#header",
      {
        opacity: 0,
        y: -60,
      },
      {
        opacity: 1,
        y: 0,
        delay: 0.5,
        stagger: 4,
        duration: 2,
      }
    );
  }, []);

  return (
    <div id="header" className="flex py-8">
      <div id="title" className="flex flex-col">
        <Link href="/blogs" className="absolute z-20 m-4 max-sm:hidden">
          <Image
            src="/back-square-svgrepo-com.svg"
            width={22}
            height={22}
            alt="Back to Blogs"
            className="size-8"
          />
        </Link>
      </div>
      <div className="text-white p-6 border-x border-x-blue-600/45 rounded-xl max-md:border-none max-md:p-0 max-md:mx-4">
        <div>
          <h1 className="text-blue-600 font-bold text-center text-4xl my-12">
            {blog.title}
          </h1>
          <div className="flex justify-between">
            <p className="font-thin text-sm text-white/65">{blog.date}</p>
            <p className="p-2 bg-blue-950 shadow-md font-semibold text-xs rounded-lg uppercase">
              info
            </p>
          </div>
          <h2 className="text-2xl font-semibold">Title</h2>
          <ul className="flex flex-col gap-4 mb-4 list-disc pl-6 mt-4">
            {blog.listItems &&
              blog.listItems.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
          <div className="space-y-4 mb-4">
            <h2 className="text-2xl font-semibold">Summary</h2>
            <p className="text-base">{blog.summary}</p>
          </div>
        </div>
        <div className="space-y-4 mb-4">
          <h2 className="text-2xl font-semibold">The Mission/Challange</h2>
          <p className="text-base">{blog.mission}</p>
          <div className="cursor-pointer">
            <Link
              href={blog.link}
              target="_blank"
              className="flex items-center justify-center"
            >
              <Image
                src={blog.motivationImage}
                width={1280}
                height={980}
                alt="Motivation"
                className="rounded-xl border-2 border-gray-700 m-4 hover:shadow-2xl hover:shadow-blue-700 transition-all hover:scale-95"
              />
            </Link>
          </div>
        </div>
        <div className="space-y-8 mb-4">
          <h2 className="text-2xl font-semibold">The Process</h2>
          <p className="text-base">{blog.process}</p>
          <div className="flex justify-center items-center bg-transparent/10 rounded-full w-fit mx-auto">
            <Image
              src={blog.processImage}
              width={376}
              height={768}
              alt="Motivation"
              className="animate-spin-slow max-sm:size-48"
            />
          </div>
          {blog.processDescription && (
            <div className="space-y-4">
              {blog.processDescription.split("\n").map((paragraph, index) => (
                <p key={index} className="text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          )}
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Design/Responsive</h2>
            <p>{blog.design}</p>
          </div>
          <div className="flex justify-center gap-5 w-fit mx-auto">
            <div className="w-1/2 hover:shadow-2xl hover:shadow-blue-700 transition-all hover:scale-95">
              <Image
                src={blog.mobileImage?.one}
                layout="intrinsic"
                width={319}
                height={192}
                alt="Motivation"
                className="rounded-xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
            <div className="w-1/2 hover:shadow-2xl hover:shadow-blue-700 transition-all hover:scale-95">
              <Image
                src={blog.mobileImage?.two}
                layout="intrinsic"
                width={319}
                height={192}
                alt="Motivation"
                className="rounded-xl"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </div>
          <p className="font-semibold text-lg text-center">{blog.overall}</p>
        </div>
        <div className="space-y-4 mb-4">
          <h2 className="text-2xl font-semibold">The Results</h2>
          <div className="space-y-4">
            {blog.result.split("\n").map((result, index) => (
              <p key={index} className="text-base">
                {result}
              </p>
            ))}
            <Image
              src={blog.resultImage}
              width={980}
              height={1080}
              alt="Results"
              className="rounded-xl"
            />
          </div>
          <div className="space-y-4">
            {blog.conclusion?.split("\n").map((item, index) => (
              <p key={index} className="text-base">
                {item}
              </p>
            ))}
          </div>
        </div>
        <div className="flex flex-col justify-center items-center space-y-12">
          <h1 className="font-bold text-4xl text-blue-600 font-mono text-center">
            Thanks for reading
          </h1>
          <Image
            src="/trophy-svgrepo-com.svg"
            width={340}
            height={220}
            alt="Thanks"
            loading="lazy"
            className="f"
          />
        </div>
        <div className="float-end">
          <Link href="#title">
            <Image
              src="/arrow-square-up-svgrepo-com.svg"
              width={42}
              height={42}
              alt="top"
              className="size-8 hover:scale-110 transition-all duration-150"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
