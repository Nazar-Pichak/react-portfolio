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
    title: "Graduated Ivano-Frankivsky college autotransportation and building",
    location: "Ivano-Frankivs, Ukraine",
    description:
      "I graduated after 3 years of studying and 1 year later I found a job as a wire tester.",
    icon: React.createElement(LuGraduationCap),
    date: "2012 - 2015"
  },
  {
    title: "Wire tester and knitter",
    location: "Ivano-Frankivs, SE 'Production Association Karpaty'",
    description:
      "I worked on the wire testing lines for 2 years and 3 months as a tester and quality controller in automotive industry.",
    icon: React.createElement(CgWorkAlt),
    date: "2016 - 2018",
  },
  {
    title: "Circular owen operator",
    location: "Czech Republic, Elkamet s.r.o.",
    description:
      "Engineering process of creation fuell tanks and plastic details. One of the world's famous customer is JohnDeer.",
    icon: React.createElement(FaReact),
    date: "2018 - 2023",
  },
  {
    title: "Test engineer",
    location: "Czech Republic, Skodagroup",
    description:
      "I worked as test engineer and technicial controller of electrical containers and devices for trolleybuses.",
    icon: React.createElement(FaReact),
    date: "2023 - 2024",
  },
  {
    title: "Python Web Developer",
    location: "Czech Republic, ITNetwork s.r.o.",
    description:
      "It is a requalification course accredited by ministry of education youth and sport of Czech Republic.",
    icon: React.createElement(FaReact),
    date: "2024 - current",
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