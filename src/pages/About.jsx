import { useNavigate } from "react-router";
import AboutHero from "../components/AboutHero";
import BioText from "../components/Bio";
import CV from "../components/CV";
import FloppyDisk from "../components/FloppyDisk";
import SkillsHUD from "../components/SkillsHUD";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function About() {
  
  const SkillRef = useRef(null);
  const LIARef = useRef(null);
  const CVRef = useRef(null);
  const titleRef = useRef(null);
  const futureRef = useRef(null);
  const navigate = useNavigate();
    const handleNavHome = () => {
    navigate("/");
  };

  useGSAP(()=> {
    gsap.set([SkillRef.current, LIARef.current, CVRef.current, titleRef.current, futureRef.current], {
      opacity:0,
    })
    gsap.set(".page-title", {
      opacity:0
    })
    gsap.to(".page-title", {
      opacity:1,
      duration: 0.8,
      ease: "power3.inOut"
    })
    gsap.to([SkillRef.current, LIARef.current, CVRef.current, titleRef.current, futureRef.current], {
      opacity:1,
      delay: 2.4,
      duration: 0.8,
      stagger: 0.4,
      ease: "power3.inOut"
    })
  },[])
  return (
    <>
      <div className="body grid-bg border-box gap-10 flex flex-col m-0 w-full min-h-dvh overflow-x-hidden p-2 pb-10 items-center">
        <h1 className="font-marker text-white text-shadow-2xs text-5xl page-title">About</h1>
          <FloppyDisk
                  title={"Home"}
                  bgColor={"bg-black"}
                  acColor={"bg-neutral-800"}
                  handleNav={handleNavHome}
                  position={"fixed z-1 top-0 left-0"}
                  rotaion={"-rotate-2"}
                />
        <AboutHero />
        <SkillsHUD ref={SkillRef}/>
        <BioText ref= {LIARef}
          promt={
            "I've always been fascinated by programming, but it never quite clicked — until now. There's something about being able to create things from scratch that feels completely natural to me. Late nights debugging, that moment when everything finally works — there's no better feeling. Frontend development isn't just something I study, it's something I genuinely can't stop thinking about"
          }
        />
        <CV ref={CVRef}/>
        <h1 ref={titleRef} className="font-dm text-white font-bold text-shadow-2xs text-3xl">Future Plans</h1>
        <BioText
        ref={futureRef}
          promt={
            "After my internship, I want to work — I'm genuinely excited to use my skills in a real environment and be part of a team I can learn from. My goal for the next 2-3 years is simple: absorb as much as possible. I've been looking into becoming a fullstack developer because I want to understand every part of what I build. I've already started exploring backend during my studies and I'd love to dive deeper. The more problems I can solve, the better. GSAP is also something I plan to keep pushing — creating interesting, visually engaging experiences takes a lot of trial and error, and I love that process. In 2-3 years I see myself as a developer who loves what they do, delivers great work, and never stops learning."
          }
        />
        
      </div>
    </>
  );
}
