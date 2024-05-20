"use client";

import React, { useState, useRef, useEffect } from "react";
import { projectsData } from "@/lib/data";
import Image from "next/image";
import { motion, useScroll, useTransform,  } from "framer-motion";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  link,
}: ProjectProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    window.open(link, "_blank");
  };

  return (
    <div
      className={`group mb-3 sm:mb-8 last:mb-0`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
      style={{ position: "relative" }}
    >
      <section
        className={`relative bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 sm:h-[20rem] transition ${
          isHovered ? "blur-sm" : ""
        } dark:text-white dark:bg-white/10 dark:hover:bg-white/20`}
        style={{ zIndex: 1 }}
      >
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li key={index}>
                <Image
                  src={tag.logo}
                  alt={tag.name}
                  width={35}
                  height={35}
                  className="rounded-full"
                />
              </li>
            ))}
          </ul>
        </div>
        
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition 
            group-hover:scale-[1.04]
            group-hover:-translate-x-3
            group-hover:translate-y-3
            group-hover:-rotate-2
    
            group-even:group-hover:translate-x-3
            group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2
    
            group-even:right-[initial] group-even:-left-40"
        />
      </section>
      
      {isHovered && (
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ zIndex: 2 }}
        >
          <p className="text-black text-xl font-semibold">View Project</p>
        </div>
      )}
    </div>
  );
}
