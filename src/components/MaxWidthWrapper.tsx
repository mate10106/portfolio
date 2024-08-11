import { ReactNode } from "react";

const MaxWidthWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <div className="h-screen mx-auto w-full max-w-screen-lg md:px-20 m-2 p-2 rounded-lg">
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
