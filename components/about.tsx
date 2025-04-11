"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const ref = useSectionInView("About");

  return (
    <motion.section
  ref={ref}
  id="about"
  className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ delay: 0.175 }}
>
  <SectionHeading>About Me</SectionHeading>
  <p className="mb-3 px-4">
    With 1.5 years of experience in the <span className="violetText">electrical industry</span> and over 7 years in the <span className="violetText">automotive sector</span>, I made a deliberate transition into software development. After three years of self-taught programming, I recently completed a <span className="violetText">full-stack web development bootcamp</span> at{" "}
    <span className="font-normal violetTextLink">
      <a href="https://www.itnetwork.cz/" target="_blank" className="">
        ITNetwork Academy
      </a>
    </span>{" "} in the Czech Republic.
  </p>

  <p className="mb-3 px-4">
    I specialize in <span className="violetText">Python, Django, HTML, CSS, JavaScript, Bootstrap, React, SQLite, and PostgreSQL</span>, and I’m also familiar with <span className="violetText">TypeScript and Next.js</span>. I'm passionate about building clean, efficient, and scalable applications, and I'm especially drawn to the problem-solving nature of software development.
  </p>

  <p className="mb-3 px-4">
    I’m currently seeking a <span className="violetText">full-time position</span> as a software developer where I can contribute to impactful projects and continue growing as a professional.
  </p>

  <p className="px-4">
    <span className="italic">Outside of coding</span>, I enjoy watching movies, running in the forest, and diving into new areas of learning. Lately, I’ve been exploring <span className="violetText">history and philosophy</span>, and I'm also in the process of teaching myself how to play the guitar.
  </p>
</motion.section>

  );
}
