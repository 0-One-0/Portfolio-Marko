import { SupabaseIcon, _React, Vite, TailwindIcon, Html5, Css3, GreensockIcon, Express
 } from "@dev.icons/react";

import Skill from "./Skill";

export default function SkillsHUD() {
  return (
    <>
      <div className="flex flex-wrap gap-4 w-96 h-60 dot-grid box-border rounded self-center p-5  justify-center ">
        <Skill icon={ <SupabaseIcon size = "40"/>} />
        <Skill icon={ <_React size = "40"/>} />
        <Skill icon={ <Vite size = "40"/>} />
        <Skill icon={ <TailwindIcon size = "40"/>} />
        <Skill icon={ <Html5 size = "40"/>} />
        <Skill icon={ <Css3 size = "40"/>} />
        <Skill icon={ <GreensockIcon size = "40"/>} />
        <Skill icon={ <Express size = "40"/>} />
      </div>
    </>
  );
}
