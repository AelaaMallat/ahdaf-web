"use client";
import { useState } from "react";

type Achievement = {
  year: number;
  title: string;
  description: string;
};

type TimelineProps = {
  achievements: Achievement[];
};

export default function Timeline({ achievements }: TimelineProps) {
  return (
    <div className="relative max-w-7xl mx-auto text-white text-justify">
      {/* Main timeline line that spans the entire container */}
      <div className="absolute left-1/4 ml-4 top-8 bottom-8 w-0.5 bg-white "></div>

      {achievements?.map((achievement, index) => (
        <TimelineItem key={index} achievement={achievement} />
      ))}
    </div>
  );
}

function TimelineItem({ achievement }: { achievement: Achievement }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative flex items-center py-8 md:min-h-[180px]"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Left column: Year */}
      <div className="w-1/4 text-center pr-4">
        <h3
          className={
            hovered
              ? "stroke-text-white text-4xl md:text-8xl"
              : "text-3xl md:text-4xl bold text-white"
          }
        >
          {achievement.year}
        </h3>
      </div>

      {/* Middle column: Timeline circle */}
      <div className="relative w-8 flex-shrink-0 flex items-center justify-center">
        {/* Circle that appears on hover with animation */}
        <div
          className={`absolute w-3 h-3 md:w-6 md:h-6 left-1/4 transform translate-x-[0.2rem] md:translate-x-[0.3rem] ${
            hovered ? "bg-white" : "none"
          } rounded-full z-10`}
        ></div>
      </div>

      {/* Right column: Title and description */}
      <div className="w-3/4 pl-4 text-left">
        <div className="p-4 md:pl-20 rounded-lg transition-colors duration-300 ease-in-out">
          <h3
            className={
              hovered
                ? "text-lg md:text-xl font-semibold text-cgreen md:pb-2"
                : "text-lg md:text-xl font-semibold"
            }
          >
            {achievement.title}
          </h3>
          {hovered && (
            <p className="mt-2 max-w-2xl text-cwhite md:text-lg xl:text-xl text-justify">
              {achievement.description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
