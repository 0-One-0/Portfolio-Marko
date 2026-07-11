import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Skill({ icon, styles, title = "test" }) {
  const skillRef = useRef(null);
  const titleRef = useRef(null);

  const HoverEffectEnter = () => {
    const tl = gsap.timeline();
    tl.to(skillRef.current, {
      scale: 1.3,
      ease: "power3.inOut",
      duration: 0.4,
      zIndex: 50,
      overwrite: "auto",
    }).to(
      titleRef.current,
      {
        display: "flex",
        opacity: 1,
        duration: 0.4,
        ease: "power3.inOut",
        overwrite: "auto",
      },
      "<",
    );
  };
  const HoverEffectLeave = () => {
    const tl = gsap.timeline();
    tl.to(skillRef.current, {
      scale: 1,
      zIndex: 0,
      ease: "power4.inOut",
      duration: 0.4,
      overwrite: "auto",
    }).to(
      titleRef.current,
      {
        opacity: 0,
        duration: 0.04,
        ease: "power3.inOut",
        overwrite: "auto",
      },
      "<",
    );
  };

  useGSAP(() => {
    gsap.set(titleRef.current, {
      opacity: 0,
    });
  }, []);
  return (
    <>
      <div
        ref={skillRef}
        onMouseOver={HoverEffectEnter}
        onMouseLeave={HoverEffectLeave}
        className={`${styles} hover:z-50 relative flex box-border w-15 h-15 border-gray-200 border rounded shadow-xl items-center justify-center`}
      >
        {icon}
        <div
          ref={titleRef}
          className="absolute  z-10 flex -bottom-8.5 bg-gray-200 w-fit box-border p-0.5 rounded justify-center font-mono-retro shadow-xl border font-bold border-white  "
        >
          {title}
        </div>
      </div>
    </>
  );
}
