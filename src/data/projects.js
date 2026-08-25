import Flowly from "../assets/Flowly.png";
import PC from "../assets/PC.png";
import RecipeMe from "../assets/RecipeMe.png";

export const projects = [
  {
    title: "Flowly",
    description:
      "A quiz app that lets the user compete against their rivals and learn new stuff",
    link: "https://0-one-0.github.io/JavaScript-2---Quiz/",
    image: Flowly,
    areas: ["React", "Vite", "Gsap", "API", "React-Router"],
  },
  {
    title: "Portfolio",
    description:
      "A retro-themed personal portfolio built with a floppy disk navigation concept. Features GSAP animations, scroll snapping and a custom CRT computer component.",
    link: "https://portfolio-marko-antonio.netlify.app/",
    image: PC,
    areas: ["React", "Vite", "Gsap", "React-Router", "Tailwind"],
  },
  {
    title: "RecipeMe - Under development",
    description:
      "a digital recipe book with a random-pick feature for the days you can't be bothered to decide what to eat. React app with a Supabase backend, authentication, and smooth GSAP animations.",
    link: "https://recipemebeta.netlify.app/",
    image: RecipeMe,
    areas: ["React", "Vite", "Gsap", "React-Router", "Js", "Html", "Css"],
  }
];
