import ProjectCard from "../components/ProjectCard";
import Flowly from "../assets/Flowly.png";
import PC from "../assets/PC.png"
export default function Projects() {
  return (
    <>
      <div className="grid-bg border-box w-full gap-10 p-4  min-h-[100dvh] flex flex-col items-center justify-center">
        <ProjectCard
          link={"https://0-one-0.github.io/JavaScript-2---Quiz/"}
          image={Flowly}
          Areas={["React", "Vite", "Gsap", "API", "React-Router"]}
          Title={"Flowly"}
          Description={
            "A quiz app that lets the user compete against their rivals and learn new stuff"
          }
        />
        <ProjectCard
          link={"http://localhost:5173/"}
          image={PC}
          Areas={["React", "Vite", "Gsap", "React-Router","Tailwind"]}
          Title={"Portfolio"}
          Description={
            "A retro-themed personal portfolio built with a floppy disk navigation concept. Features GSAP animations, scroll snapping and a custom CRT computer component."
          }
        />
      </div>
    </>
  );
}
