"use client";

import { Tabs } from "./ui/tabs";

export function Experience() {
  <></>;
  const tabs = [
    {
      title: "Frontend",
      value: "Frontend",
      content: (
        <div className="w-full max-lg:text-center overflow-hidden relative h-96 rounded-2xl p-10 text-2xl max-sm:text-sm lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="experience--title">Frontend Development</p>
          <FrontendContent />
        </div>
      ),
    },
    {
      title: "Backend",
      value: "Backend",
      content: (
        <div className="w-full max-lg:text-center  overflow-hidden relative h-96 rounded-2xl p-10 text-2xl max-sm:text-sm lg:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="experience--title">Backend Development</p>
          <BackendContent />
        </div>
      ),
    },
    {
      title: "Framework",
      value: "Framework",
      content: (
        <div className="w-full max-lg:text-center overflow-hidden relative h-96 rounded-2xl p-10 text-2xl max-sm:text-sm md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="experience--title">Framework</p>
          <FrameworkContent />
        </div>
      ),
    },
    {
      title: "others",
      value: "Others",
      content: (
        <div className="w-full max-lg:text-center overflow-hidden relative h-96 rounded-2xl p-10 text-2xl max-sm:text-sm md:text-4xl font-bold text-white bg-gradient-to-br from-purple-700 to-violet-900">
          <p className="experience--title">Others</p>
          <OthersConent />
        </div>
      ),
    },
  ];

  return (
    <div
      id="experience"
      className="h-[30rem] md:h-[30rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-10"
    >
      <Tabs tabs={tabs} />
    </div>
  );
}

const FrontendContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-8">
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>HTML</h1>
        </div>
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>CSS</h1>
        </div>
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>JavaScript</h1>
        </div>
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>TypeScript</h1>
        </div>
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>Tailwind CSS</h1>
        </div>
      </div>
    </div>
  );
};

const BackendContent = () => {
  return (
    <div>
      <div className="grid grid-cols-2 p-8">
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>Express JS</h1>
        </div>
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>Node JS</h1>
        </div>
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>MongoDB</h1>
        </div>
        <div className="flex p-4 items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
          <h1>MySQL</h1>
        </div>
      </div>
    </div>
  );
};

const FrameworkContent = () => {
  return (
    <div className="grid grid-cols-2 p-8">
      <div className="flex p-4 items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1>React</h1>
      </div>
      <div className="flex p-4 items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1>Nextjs</h1>
      </div>
      <div className="flex p-4 items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1>.NET</h1>
      </div>
    </div>
  );
};
const OthersConent = () => {
  return (
    <div className="grid grid-cols-2 p-8">
      <div className="flex p-4 items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1>c#</h1>
      </div>
      <div className="flex p-4 items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1>WPF</h1>
      </div>
      <div className="flex p-4 items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="icon"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <h1>git</h1>
      </div>
    </div>
  );
};
