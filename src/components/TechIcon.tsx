import React from "react";

const TechIcon = ({
  children,
  label,
}: {
  children: React.ReactNode;
  label: string;
}) => {
  return (
    <div className="flex flex-col items-center gap-1">
      <div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
        {children}
      </div>
      <span className="text-xs text-white/70">{label}</span>
    </div>
  );
};

export default TechIcon;
