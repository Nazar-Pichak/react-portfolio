import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import carsImg from "@/public/cars.png";
import todoImg from "@/public/todo.png";
import socialImg from "@/public/social.png";
import artistlImg from "@/public/artist.png";
import photosImg from "@/public/photos.png";
import blogImg from "@/public/blog.png";

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
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CarZone",
    description:
      "I worked and self learned as a full-stack Python developer on this startup project for 5 months. The project is for car dealers.",
    tags: ["Python", "Djanog", "Bootstrap", "PostgreSQL"],
    imageUrl: carsImg,
  },
  {
    title: "TodoApp",
    description:
      "TodoApp is a beuatifull and responsive web application for storing and monitoring your daily tasks. It has database CRUD opearations.",
    tags: ["Python", "Djanog", "JavaScript", "SQLite"],
    imageUrl: todoImg,
  },
  {
    title: "SocialEditor",
    description:
      "A single web page for practicing and advanced CSS styling techniques. It has responsive layout and browser optimization.",
    tags: ["HTML", "CSS", "postcss", "postcss-pxtorem"],
    imageUrl: socialImg,
  },
  {
    title: "ArtistFinder",
    description:
      "Team project and interesting collaboration to push frontend skills of a new developer on the next level.",
    tags: ["HTML", "CSS", "Collaboration", "Pull Request"],
    imageUrl: artistlImg,
  },
  {
    title: "BetterPhotos",
    description:
      "The main goal was to use preprocessor SaSS and practice grid layout. It also has additional optimization features such as vendor prefixes, postcss-pxtorem and minified css file.",
    tags: ["HTML", "CSS", "SaSS"],
    imageUrl: photosImg,
  },
  {
    title: "BlogMastery",
    description:
      "Collaborative project for mentoring girl web developer and learning Bootstrap.",
    tags: ["HTML", "CSS", "SaSS", "Bootstrap", "Vercel"],
    imageUrl: blogImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "SaSS",
  "Bootstrap",
  "Tailwind",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "AJAX",
  "Git",
  "SQLite",
  "GraphQL",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;