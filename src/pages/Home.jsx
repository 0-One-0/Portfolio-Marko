import { useRef, useState } from "react";
import Computer from "../components/Computer";
import FloppyDisk from "../components/FloppyDisk";
import Hero from "../components/Hero";
import ClickAnimatonFloppy from "../animations/animations";
import { useNavigate } from "react-router";
import { useGSAP } from "@gsap/react";
import { initScroll } from "../animations/scroll";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Home() {
  const [activeFloppy, setActiveFlopy] = useState(false);
  // Refs för scroll-triggers
  const HeroRef = useRef(null);
  const PCRef = useRef(null);

  // Refs för disk-animationen
  const slotRef = useRef(null);
  const textRef = useRef(null);

  const navigate = useNavigate();

  useGSAP(() => {
    // Initierar all scroll-logik när komponenten mountas
    // Alla refs är klara här eftersom useGSAP körs efter rendering
    const smoother = initScroll(HeroRef, PCRef);

    // Cleanup — körs när komponenten unmountas (t.ex. när man navigerar till en annan sida)
    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
      if (smoother) smoother.kill();
    };
  }, []);

  const handleNav = (diskRef, title) => {
    //Hämta rätt x/y av diskets och slot
    if (!activeFloppy) {
      setActiveFlopy(true);
      gsap.to(diskRef.current, {
        marginTop: 0,
        rotate: 0,
        duration: 0.5,
        ease: "power3.inOut",
        onComplete: () => {
          const diskPos = diskRef.current.getBoundingClientRect();
          const slotPos = slotRef.current.getBoundingClientRect();

          // Räknar ut diff
          const xDiff = slotPos.x - diskPos.x - 4.5;
          const yDiff = slotPos.y - diskPos.y - 10;

          ClickAnimatonFloppy(title, diskRef, xDiff, yDiff, navigate, textRef);
        },
      });
    }
  };
  return (
    <>
      {" "}
      <div className="body border-box flex flex-col m-0 w-full min-h-[100dvh]">
        <section
          ref={HeroRef}
          className="relative gap-2 flex flex-col py-10 px-4 justify-start items-center w-full min-h-[100dvh] snap-start border-box"
        >
          <Hero />
        </section>

        <section
          ref={PCRef}
          className="gap-0 flex flex-col p-2 justify-center items-center w-full min-h-[100dvh] snap-start border-box"
        >
          <Computer slotRef={slotRef} textRef={textRef} />
          <div className="floppy-section flex mt-0 ">
            <FloppyDisk
              title={"Projects"}
              bgColor={"bg-black"}
              acColor={"bg-neutral-800"}
              handleNav={handleNav}
              position={"mt-4"}
              rotaion={"-rotate-9"}
            />
            <FloppyDisk
              title={"Contact"}
              bgColor={"bg-green-700"}
              acColor={"bg-green-900"}
              handleNav={handleNav}
              position={"mt-0"}
              rotaion={"rotate-2"}
            />
            <FloppyDisk
              title={"About"}
              bgColor={"bg-purple-900"}
              acColor={"bg-purple-800"}
              handleNav={handleNav}
              position={"mt-4"}
              rotaion={"rotate-9"}
            />
          </div>
        </section>
      </div>
    </>
  );
}
