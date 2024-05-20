"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-28 max-w-[80%] scroll-mt-28 text-center sm:mb-40"
    >
      <SectionHeading>My skills</SectionHeading>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
        }}
        speed={5000}
        modules={[Autoplay]}
      >
        {skillsData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.logo}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        slidesPerView={5}
        loop={true}
        autoplay={{
          delay: 0,
          disableOnInteraction: false,
          reverseDirection: true,
        }}
        speed={5000}
        modules={[Autoplay]}
        className="mt-10"
      >
        {skillsData.map((skill, index) => (
          <SwiperSlide key={index}>
            <Image
              src={skill.logo}
              alt={skill.name}
              width={skill.width}
              height={skill.height}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
