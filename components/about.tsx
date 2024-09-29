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
      className="mb-28 w-[60%] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        I am Abdellatif Anifi, a Full-Stack Developer with expertise in building scalable, high-performance web applications. My experience spans both front-end and back-end technologies, allowing me to deliver efficient and user-focused solutions. I specialize in POS and eCommerce systems, with a strong background in JavaScript frameworks like React.js, Node.js, and Electron.js. My passion for solving complex problems and continuously improving my skills drives me to create innovative, user-friendly solutions that improve business processes.
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy reading books on
        <span className="font-medium">self-improvement</span>, exploring the depths of{" "}
        <span className="font-medium">Linux systems</span>, and playing video games.
        I love constantly pushing myself to learn and grow, both in my personal and professional life.
      </p>

    </motion.section>
  );
}
