import { useNavigate } from "react-router";
import FloppyDisk from "../components/FloppyDisk";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";
import { useEffect, useRef } from "react";

export default function Projects() {
  const ScrollRef = useRef(null);
  const navigate = useNavigate();
  const handleNavHome = () => {
    navigate("/");
  };
  useEffect(() => {
    const container = ScrollRef.current;
    container.scrollLeft = 0;
  }, []);

  return (
    <>
      <div className="grid-bg overflow-x-hidden relative border-box w-full gap-10 pt-4 min-h-dvh flex flex-col items-center justify-center">
        <FloppyDisk
          title={"Home"}
          bgColor={"bg-black"}
          acColor={"bg-neutral-800"}
          handleNav={handleNavHome}
          position={"fixed z-1 top-0 left-0"}
          rotaion={"-rotate-2"}
        />
        <div
          ref={ScrollRef}
          className="flex border-box w-full overflow-x-auto pb-4 pt-2 gap-15 px-8 justify-start scroll-smooth [scroll-snap-type:x_mandatory] md:snap-none scroll-pl-9  md:flex-wrap md:justify-center md:overflow-x-hidden md:w-200  md:gap-4 "
        >
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              link={project.link}
              image={project.image}
              Areas={project.areas}
              Title={project.title}
              Description={project.description}
            />
          ))}
        </div>
      </div>
    </>
  );
}
