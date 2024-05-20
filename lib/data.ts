import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import generate from "@/public/generate.png";
import inventory from "@/public/inventory.png";
import portfolio from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const projectsData = [
  {
    title: "SMP Quiz Generator",
    description:
      "is your solution for creating quizzes effortlessly. Built with HTML, CSS, JavaScript, PHP, and MySQL, it's versatile and user-friendly.",
    tags: [
      { name: "HTML", logo: "/html.png" },
      { name: "CSS", logo: "/css.png" },
      { name: "JavaScript", logo: "/js.png" },
      { name: "PHP", logo: "/PHP.png" },
      { name: "MySQL", logo: "/mysql.png" },
    ],
    imageUrl: generate,
    link: "https://kelompok01rpl.000webhostapp.com/",
  },
  {
    title: "Inventory Smart",
    description:
      "streamlines inventory management with Laravel, PHP, and MySQL. Enhanced by Tailwind CSS, it offers a sleek and efficient user experience.",
      tags: [
        { name: "Laravel", logo: "/laravel.png" },
        { name: "Tailwind CSS", logo: "/tailwind.png" },
        { name: "MySQL", logo: "/mysql.png" },
        { name: "PHP", logo: "/PHP.png" },
      ],
    imageUrl: inventory,
    link: "https://inventory-smart-production.up.railway.app/",
  },
  {
    title: "Portfolio",
    description:
      "Discover my portfolio featuring projects crafted with ReactJS, Next.js, Node.js, and Tailwind CSS. Leveraging TypeScript and Framer Motion for added flair, each project showcases my commitment to innovative web development.",
      tags: [
        { name: "ReactJS", logo: "/react.png" },
        { name: "Next.js", logo: "/next.png" },
        { name: "Node.js", logo: "/node-js.png" },
        { name: "Tailwind CSS", logo: "/tailwind.png" },
        { name: "TypeScript.js", logo: "/ts.png" },
        { name: "Framer Motion", logo: "/framer.png" },
      ],
    imageUrl: portfolio,
    link: "https://www.example.com/corpcomment",
  },
] as const;

export const skillsData = [
  {
    name: "HTML",
    logo: "/html.png",
    width: 80,
    height: 80,
    },
  
    {
      name: "CSS",
      logo: "/css.png",
      width: 80,
    height: 80,
    },
    {
      name: "JavaScript",
      logo: "/js.png",
      width: 80,
    height: 80,
    },
    {
      name: "PHP",
      logo: "/PHP.png",
      width: 80,
    height: 80,
    },
    {
      name: "TypeScript",
      logo: "/ts.png",
      width: 80,
    height: 80,
    },
    {
      name: "React",
      logo: "/react.png",
      width: 80,
    height: 80,
    },
    {
      name: "Next.js",
      logo: "/next.png",
      width: 80,
    height: 80,
    },
    {
      name: "Node.js",
      logo: "/node-js.png",
      width: 80,
    height: 80,
    },
    {
      name: "Git",
      logo: "/git.png",
      width: 80,
    height: 80,
    },
    {
      name: "Gitbash",
      logo: "/gitbash.png",
      width: 80,
    height: 80,
    },
    {
      name: "Tailwind",
      logo: "/tailwind.png",
      width: 80,
    height: 80,
    },
    {
      name: "Framer Motion",
      logo: "/framer.png",
      width: 80,
    height: 80,
    },
    {
      name: "MySQL",
      logo: "/mysql.png",
      width: 80,
    height: 80,
    },
    {
      name: "Laravel",
      logo: "/laravel.png",
      width: 80,
    height: 80,
    },
] as const;
