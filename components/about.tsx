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
        After last 1,5 year of experience in{" "}
        <span className="violetText">Electro industry</span>{" "}
        and more than 7 years in <span className="violetText">Automotive</span>{" "}department,
        I decided to pursue my <span className="violetText">3 years</span> self-learned programming on the next level. I am studying at{" "}
        <span className="font-normal violetTextLink">
          <a href="https://www.itnetwork.cz/" target="_blank" className="">
            ITNewtwork academy
          </a>
        </span>{" "}in Czech Republic by enrolling in a coding bootcamp and learning{" "}
        <span className="violetText">
          full-stack web development
        </span>
        . <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="violetText">
          Python, Django, HTML, CSS, JS, Bootstrap, React, SQLite, PostgreSQL
        </span>
        . I am also familiar with TypeScript and Next.js. I am always looking to
        learn new technologies. I am currently looking for a{" "}
        <span className="violetText">full-time position</span>{" "}
        as a software developer.
      </p>

      <p className="px-4">
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies and running in the forest. I also enjoy{" "}
        <span className="violetText">
          learning new things
        </span>
        . I am currently learning about{" "}
        <span className="violetText">
          history and philosophy
        </span>
        . I'm also learning how to play the guitar.
      </p>
    </motion.section>
  );
}
