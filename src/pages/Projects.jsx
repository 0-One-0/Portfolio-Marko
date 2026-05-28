
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  
  return (
    <>
      <div className="grid-bg border-box w-full gap-10 pt-4  min-h-dvh flex flex-col items-center justify-center">
        <div className="flex border-box w-full overflow-x-auto gap-15 px-8 justify-start scroll-smooth [scroll-snap-type:x_mandatory] scroll-pl-8">
          {projects.map((project) => (
            <ProjectCard
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
