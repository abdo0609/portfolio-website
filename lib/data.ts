import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaServer } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

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
] as const;
export const experiencesData = [
  {
    title: "Front-End Developer",
    description: [
      "Developed a cross-platform POS system using Electron.js for Linux, supporting seamless user login via QR code scanning and secure PIN authentication.",
      "Integrated dynamic business selection and real-time data loading into a Booting sequence, with automatic error handling and navigation back to previous screens in case of data retrieval failure.",
      "Implemented multi-language support for the entire application, including printer ticket language settings and Wi-Fi connectivity management.",
      "Built functionality for real-time printer discovery, allowing users to select and configure connected printers and perform actions such as printer management and factory reset.",
      "Enabled the POS system to handle online and offline order processing, leveraging local server storage for uninterrupted service during connectivity issues.",
    ],
    icon: React.createElement(FaReact),
    date: "May 2023 - Oct 2023",
  },
  {
    title: "Kitchen Display System (KDS) Developer",
    description: [
      "Developed an Android app for real-time order display on TV screens, with order management through remote control or touch interface.",
      "Created a system to display orders dynamically with specific times for each column, allowing better kitchen management and identification of overdue orders.",
    ],
    icon: React.createElement(FaReact),
    date: "Oct 2023 - Jan 2024",
  },
  {
    title: "QR Code Order Application Developer",
    description: [
      "Built a QR code-based order application where users can scan the code to access the menu page, browse, and select orders.",
      "Integrated secure PIN verification before sending the order to prevent spam.",
      "Linked the order system to the POS, allowing real-time display and management.",
    ],
    icon: React.createElement(FaReact),
    date: "Feb 2024 - Apr 2024",
  },
  {
    title: "Local Server Developer",
    description: [
      "Developed a local server using Node.js to act as an intermediary between the POS system and a remote server.",
      "Managed order processing and local data storage using encrypted files for offline operation during network outages.",
      "Built real-time synchronization between local and remote servers via APIs and socket connections, ensuring smooth data flow and persistence during connectivity issues.",
    ],
    icon: React.createElement(FaServer),
    date: "Apr 2024 - Sep 2024",
  },
  {
    title: "Freelance Full-Stack Developer",
    description: [
      "Developed a comprehensive eCommerce website with a user-friendly interface for browsing products, managing orders, and processing payments.",
      "Created an admin panel for product, category, and order management, along with advertising and tracking features.",
      "Implemented secure user authentication with login and registration, along with a customer support 'Contact Us' feature.",
      "Provided real-time control over eCommerce operations through an efficient data management system.",
    ],
    icon: React.createElement(CgWorkAlt),
    date: "May 2024 - Aug 2024",
  },
] as const;



export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "Tailwind",
  "Bootstrap",
  "Sass",
  "JavaScript",
  "TypeScript",
  "Redux",
  "React",
  "Next.js",
  "Vue.js",
  "Node.js",
  "Express",
  "Android apps",
  "Git",
  "ElectronJS",
  "MongoDB",
  "Redis",
  "Casandra",
  "PostgreSQL",
] as const;
