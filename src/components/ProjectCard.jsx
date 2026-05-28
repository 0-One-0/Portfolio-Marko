import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function ProjectCard({ Title, Areas, Description, image, link }) {

  const ProjectRef = useRef(null);

  useGSAP(() =>{

    gsap.from(ProjectRef.current, {
      opacity: 0,
      scale: 0,
      rotate: 90,
      duration:1,
      ease: "power3.inOut"
    })
  })

  return (
    <>
    <a ref={ProjectRef} href={link}>
      <div className="flex flex-col border-box p-4 items-center gap-5 border-1 rounded-xl w-70  bg-[#1c1a17]  border-amber-200/20 shadow-[0_0_15px_rgba(251,191,36,0.15)] ">
        <p className="text-amber-100 mb-3 font-mono-retro font-bold text-2xl w-70 text-center p-0 m-0 ">
          {Title}
        </p>
        <img src={image} alt="Flowly" className="w-full rounded-sm" />
        <div className="flex flex-col w-full border-box gap-4">
          <p className=" italic text-left text-amber-100 font-mono-retro text-sm text-center p-0 m-0 leading-relaxed w-full border-box ">
            "{Description}"
          </p>
        </div>
        <div className="flex gap-6 border-box flex-wrap">
          {" "}
          {Areas.map((area, index) => (
            <div
              key={index}
              className="flex bg-amber-900/30  p-1 px-3 border-box rounded-xl border border-amber-200/20 text-amber-200 shadow-[0_0_15px_rgba(251,191,36,0.15)] "
            >
              {area}
            </div>
          ))}
        </div>
      </div>
      </a>
    </>
  );
}
