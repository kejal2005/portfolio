import AceTernityLogo from "@/components/logos/aceternity";
import SlideShow from "@/components/slide-show";
import { Button } from "@/components/ui/button";
import { TypographyH3, TypographyP } from "@/components/ui/typography";
import { ArrowDownUpIcon, ArrowUpRight, ExternalLink, Framer, Link2, MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ReactNode } from "react";
import { RiNextjsFill, RiNodejsFill, RiReactjsFill } from "react-icons/ri";
import {
  SiChakraui,
  SiDocker,
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiPython,
  SiReactquery,
  SiSanity,
  SiShadcnui,
  SiSocketdotio,
  SiSupabase,
  SiTailwindcss,
  SiThreedotjs,
  SiTypescript,
  SiVuedotjs,
  SiVite,
  SiNetlify,
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiApachemaven,
  SiCplusplus,
  SiArduino,
} from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import css from "styled-jsx/css";
const BASE_PATH = "/assets/projects-screenshots";

const ProjectsLinks = ({ live, repo }: { live: string; repo?: string }) => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-start gap-3 my-3 mb-8">
      <Link
        className="font-mono underline flex gap-2"
        rel="noopener"
        target="_new"
        href={live}
      >
        <Button variant={"default"} size={"sm"}>
          Visit Website
          <ArrowUpRight className="ml-3 w-5 h-5" />
        </Button>
      </Link>
      {repo && (
        <Link
          className="font-mono underline flex gap-2"
          rel="noopener"
          target="_new"
          href={repo}
        >
          <Button variant={"default"} size={"sm"}>
            Github
            <ArrowUpRight className="ml-3 w-5 h-5" />
          </Button>
        </Link>
      )}
    </div>
  );
};

export type Skill = {
  title: string;
  bg: string;
  fg: string;
  icon: ReactNode;
};
const PROJECT_SKILLS = {
  next: {
    title: "Next.js",
    bg: "black",
    fg: "white",
    icon: <RiNextjsFill />,
  },
  chakra: {
    title: "Chakra UI",
    bg: "black",
    fg: "white",
    icon: <SiChakraui />,
  },
  node: {
    title: "Node.js",
    bg: "black",
    fg: "white",
    icon: <RiNodejsFill />,
  },
  python: {
    title: "Python",
    bg: "black",
    fg: "white",
    icon: <SiPython />,
  },
  prisma: {
    title: "prisma",
    bg: "black",
    fg: "white",
    icon: <SiPrisma />,
  },
  postgres: {
    title: "PostgreSQL",
    bg: "black",
    fg: "white",
    icon: <SiPostgresql />,
  },
  mongo: {
    title: "MongoDB",
    bg: "black",
    fg: "white",
    icon: <SiMongodb />,
  },
  express: {
    title: "Express",
    bg: "black",
    fg: "white",
    icon: <SiExpress />,
  },
  reactQuery: {
    title: "React Query",
    bg: "black",
    fg: "white",
    icon: <SiReactquery />,
  },
  shadcn: {
    title: "ShanCN UI",
    bg: "black",
    fg: "white",
    icon: <SiShadcnui />,
  },
  aceternity: {
    title: "Aceternity",
    bg: "black",
    fg: "white",
    icon: <AceTernityLogo />,
  },
  tailwind: {
    title: "Tailwind",
    bg: "black",
    fg: "white",
    icon: <SiTailwindcss />,
  },
  docker: {
    title: "Docker",
    bg: "black",
    fg: "white",
    icon: <SiDocker />,
  },
  yjs: {
    title: "Y.js",
    bg: "black",
    fg: "white",
    icon: (
      <span>
        <strong>Y</strong>js
      </span>
    ),
  },
  firebase: {
    title: "Firebase",
    bg: "black",
    fg: "white",
    icon: <SiFirebase />,
  },
  sockerio: {
    title: "Socket.io",
    bg: "black",
    fg: "white",
    icon: <SiSocketdotio />,
  },
  js: {
    title: "JavaScript",
    bg: "black",
    fg: "white",
    icon: <SiJavascript />,
  },
  ts: {
    title: "TypeScript",
    bg: "black",
    fg: "white",
    icon: <SiTypescript />,
  },
  vue: {
    title: "Vue.js",
    bg: "black",
    fg: "white",
    icon: <SiVuedotjs />,
  },
  react: {
    title: "React.js",
    bg: "black",
    fg: "white",
    icon: <RiReactjsFill />,
  },
  sanity: {
    title: "Sanity",
    bg: "black",
    fg: "white",
    icon: <SiSanity />,
  },
  spline: {
    title: "Spline",
    bg: "black",
    fg: "white",
    icon: <SiThreedotjs />,
  },
  gsap: {
    title: "GSAP",
    bg: "black",
    fg: "white",
    icon: "",
  },
  framerMotion: {
    title: "Framer Motion",
    bg: "black",
    fg: "white",
    icon: <TbBrandFramerMotion />,
  },
  supabase: {
    title: "Supabase",
    bg: "black",
    fg: "white",
    icon: <SiSupabase />,
  },
  // +
  vite: {
    title: "Vite",
    bg: "black",
    fg: "white",
    icon: <SiVite />,
  },
  openai: {
    title: "OpenAI",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/openai-svgrepo-com_white.svg" alt="OpenAI"/>,
  },
  netlify: {
    title: "Netlify",
    bg: "black",
    fg: "white",
    icon: <SiNetlify/>,
  },
  html: {
    title: "HTML5",
    bg: "black",
    fg: "white",
    icon: <SiHtml5/>,
  },
  css: {
    title: "CSS3",
    bg: "black",
    fg: "white",
    icon: <SiCss3/>,
  },
  bootstrap: {
    title: "Bootstrap",
    bg: "black",
    fg: "white",
    icon: <SiBootstrap/>,
  },
  maven: {
    title: "Maven",
    bg: "black",
    fg: "white",
    icon: <SiApachemaven/>,
  },
  java: {
    title: "Java",
    bg: "black",
    fg: "white",
    icon: <img src="assets/icons/icons8-java.svg" alt="Java"/>,
  },
  cplusplus: {
    title: "C++",
    bg: "black",
    fg: "white",
    icon: <SiCplusplus/>,
  },
  arduino: {
    title: "Arduino",
    bg: "black",
    fg: "white",
    icon: <SiArduino/>,
  },
};
export type Project = {
  id: string;
  category: string;
  title: string;
  src: string;
  screenshots: string[];
  skills: { frontend: Skill[]; backend: Skill[] };
  content: React.ReactNode | any;
  github?: string;
  live: string;
};
const projects: Project[] = [
  {
    id: "imagify",
    category: "AI and Image Generation",
    title: "Imagify",
    src: "/assets/projects-screenshots/imagify/imagify1.png",
    screenshots: ["imagify1.png", "imagify2.png", "imagify3.png"],
    live: "https://imagify-demo-link.com/",
    github: "https://github.com/kejal2005/imagify",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.express],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          Imagify is a modern web application that transforms text descriptions into stunning images using AI technology. Built with a robust tech stack and user-friendly interface, it provides a seamless experience for generating AI-powered images.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/imagify/imagify1.png`,
              `${BASE_PATH}/imagify/imagify2.png`,
              `${BASE_PATH}/imagify/imagify3.png`,
              `${BASE_PATH}/imagify/imagify3.png`,
              `${BASE_PATH}/imagify/imagify5.png`,
              `${BASE_PATH}/imagify/imagify6.png`,
             
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "portfolio",
    category: "Portfolio",
    title: "My Portfolio",
    src: "/assets/projects-screenshots/myportfolio/landing.png",
    screenshots: ["landing.png", "navbar.png", "project.png"],
    live: "https://portfolio-lake-tau-41.vercel.app/",
    github: "https://github.com/kejal2005/My_portfolio",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.next, PROJECT_SKILLS.tailwind],
      backend: [],
    }, 
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            This is my personal portfolio website showcasing my projects, skills, and experience as a Full Stack Developer and AIML Enthusiast.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/myportfolio/landing.png`,
              `${BASE_PATH}/myportfolio/navbar.png`,
              `${BASE_PATH}/myportfolio/project.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "weather-app",
    category: "Web App",
    title: "Weather App",
    src: "/assets/projects-screenshots/weather app/weather1.png",
    screenshots: ["weather1.png", "weather2.png", "weather3.png"],
    live: "https://weather-app-55ai.vercel.app/",
    github: "https://github.com/kejal2005/weather-app",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          A modern weather application built with React and Vite that provides real-time weather information and gives clothing suggestions for any location.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/weather app/weather1.png`,
              `${BASE_PATH}/weather app/weather2.png`,
              `${BASE_PATH}/weather app/weather3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "atm-simulator",
    category: "Simulation & Banking",
    title: "ATM Simulator",
    src: "/assets/projects-screenshots/atm simulator/atm1.png",
    screenshots: ["atm1.png", "atm2.png", "atm3.png"],
    live: "https://atm-simulator-demo-link.com/",
    github: "https://github.com/kejal2005/atm-simulator",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.bootstrap],
      backend: [PROJECT_SKILLS.node, PROJECT_SKILLS.mongo],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
            ATM Simulator is a web-based application that mimics the functionalities of a real ATM. Users can perform operations like balance inquiry, cash withdrawal, deposit, and mini statements in a secure, simulated environment.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/atm simulator/atm1.png`,
              `${BASE_PATH}/atm simulator/atm2.png`,
              `${BASE_PATH}/atm simulator/atm3.png`,
            ]}
          />
        </div>
      );
    },
  },
  {
    id: "edgeai",
    category: "AI and Edge Computing",
    title: "Edge AI",
    src: "/assets/projects-screenshots/edge ai/edgeai1.png",
    screenshots: ["edgeai1.png"],
    live: "https://edgeai-demo-link.com/",
    github: "https://github.com/kejal2005/edgeai",
    skills: {
      frontend: [PROJECT_SKILLS.react, PROJECT_SKILLS.tailwind],
      backend: [PROJECT_SKILLS.python, PROJECT_SKILLS.docker, PROJECT_SKILLS.node],
    },
    get content() {
      return (
        <div>
          <TypographyP className="font-mono ">
          EdgeAI-Guard is a real-time, multi-modal anomaly detection dashboard designed for edge devices. It fuses video and audio streams to detect abnormal events using deep learning models, providing a robust monitoring solution for security, safety, and industrial applications.
          </TypographyP>
          <ProjectsLinks live={this.live} repo={this.github} />
          <SlideShow
            images={[
              `${BASE_PATH}/edge ai/edgeai1.png`
            ]}
          />
        </div>
      );
    },
  },
];
export default projects;
