import AboutHero from "../components/AboutHero";
import BioText from "../components/Bio";
import CV from "../components/CV";
import SkillsHUD from "../components/SkillsHUD";

export default function About() {
  return (
    <>
      <div className="body grid-bg border-box flex flex-col m-0 w-full min-h-dvh overflow-x-hidden p-2 pb-10">
        <AboutHero />
        <BioText
          promt={
            "I've always been fascinated by programming, but it never quite clicked — until now. There's something about being able to create things from scratch that feels completely natural to me. Late nights debugging, that moment when everything finally works — there's no better feeling. Frontend development isn't just something I study, it's something I genuinely can't stop thinking about"
          }
        />
        <CV />
        <BioText
          promt={
            "After my internship, I want to work — I'm genuinely excited to use my skills in a real environment and be part of a team I can learn from. My goal for the next 2-3 years is simple: absorb as much as possible. I've been looking into becoming a fullstack developer because I want to understand every part of what I build. I've already started exploring backend during my studies and I'd love to dive deeper. The more problems I can solve, the better. GSAP is also something I plan to keep pushing — creating interesting, visually engaging experiences takes a lot of trial and error, and I love that process. In 2-3 years I see myself as a developer who loves what they do, delivers great work, and never stops learning."
          }
        />
        <SkillsHUD/>
      </div>
    </>
  );
}
