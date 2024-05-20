"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        Hello! Welcome to my personal website. I'm <span className="font-medium">Muhammad Nurman</span>{" "}
        a student majoring in Information Systems at the University of Jambi. I have a strong interest in web development,{" "}
        and I have mastered <span className="font-medium underline">HTML</span>, <span className="font-medium underline">CSS</span>,{" "} 
        <span className="font-medium underline">JavaScript</span>, and <span className="font-medium underline">PHP</span>{" "}
        I'm also proficient in database management using <span className="font-medium underline">MySQL</span>{" "}
        and skilled in frameworks like <span className="font-medium underline">Laravel</span> and <span className="font-medium underline">Tailwind CSS</span>.
      </p>

      <p>
        I have a little experience using <span className="font-medium underline">ReactJS</span> and <span className="font-medium underline">Next.JS</span>{" "} 
        to improve the user interface and overall user experience. I love working collaboratively to create innovative applications.{" "}
        Let's connect and explore how we can work together to create useful web solutions!
      </p>
    </motion.section>
  );
}
