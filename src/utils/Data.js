import { FaReact, FaNode, FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

import Project1 from "../assets/Discord_Project_render.jpeg"

export const Skills = [
    {
        id: 0,
        tech: "React JS",
        icon: <FaReact />
    },
    {
        id: 1,
        tech: "Node JS",
        icon: <FaNode />
    },
    {
        id: 2,
        tech: "CSS",
        icon: <FaCss3Alt />
    },
    {
        id: 3,
        tech: "Javascript",
        icon: <SiJavascript />
    }
];


export const projectDetails = [
    {
        id: 0,
        project_name: "Discord_Clon",
        project_desc: "It's a clone of the Discord app, showcasing basic functionalities for creating, editing, and deleting servers, channels, members, and conversations. It also retains the functionalities of text, audio, and video channels.",
        tech_stack: ["ReactJS", "TypeScript", "MongoDB", "NextJS", "NodeJS", "Prisma", "Shadcn"],
        project_img: Project1,
        project_url: "https://discord-clon-1erproy-production.up.railway.app/",
        reverse: false,
    }
]

export const navLinks = [
    {
        id: 0,
        name: "Home",
        href: "Home"
    },
    {
        id: 1,
        name: "My Skills",
        href: "Skills"
    },
    {
        id: 2,
        name: "My Projects",
        href: "Projects"
    },
    {
        id: 3,
        name: "My Contacts",
        href: "Contacts"
    },
]