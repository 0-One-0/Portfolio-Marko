import {
  SupabaseIcon,
  _React,
  Vite,
  TailwindIcon,
  Html5,
  Css3,
  GreensockIcon,
  Express,
  NodejsIcon,
  DockerIcon,
} from "@dev.icons/react";

import Skill from "./Skill";

export default function SkillsHUD({ref}) {
  return (
    <><div ref={ref}>
    <h1 className="font-dm text-white self-start font-bold text-shadow-2xs text-3xl">Skills</h1>
      <div className="flex flex-wrap gap-4 w-96 h-70 dot-grid box-border rounded self-center p-5 justify-center  ">
        <Skill styles={"bg-black"} title="Supabase" icon={<SupabaseIcon size="40" />} />
        <Skill styles={"bg-white"} title="React" icon={<_React size="40" />} />
        <Skill styles={"bg-white"} title="Vite" icon={<Vite size="40" />} />
        <Skill styles={"bg-white"} title="Tailwind" icon={<TailwindIcon size="40" />} />
        <Skill styles={"bg-white"} title="Html" icon={<Html5 size="40" />} />
        <Skill styles={"bg-white"} title="Css" icon={<Css3 size="40" />} />
        <Skill styles={"bg-black"} title="GSAP" icon={<GreensockIcon size="40" />} />
        <Skill styles={"bg-white"} title="Express.js" icon={<Express size="40" />} />
        <Skill styles={"bg-black"} title="Node.js" icon={<NodejsIcon size="40" />} />
        <Skill styles={"bg-black"} title="Docker" icon={<DockerIcon size="40" />} />
      </div>
      </div>
    </>
  );
}
