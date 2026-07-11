import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Profile from "../assets/PortPhoto2.0.jpeg";

export default function AboutHero() {
  useGSAP(() => {
    gsap.set(".img, .welcome-text, .LIA-text", {
      opacity: 0,
    });
    gsap.to(".img, .welcome-text, .LIA-text", {
      opacity: 1,
      duration: 0.5,
      ease: "power3.inOut",
      stagger: 0.8,
    });
  }, []);
  return (
    <>
      <div className="flex flex-row items-center justify-center gap-4 pt-10 ">
        <img
          src={Profile}
          alt=""
          className="img w-50 rounded-sm "
        />
        <h1 className="text-gray-300 font-dm w-50 leading-relaxed welcome-text ">
          Hey, I'm Marko. A frontend dev in the making who codes late into the
          night and loves every second of it.
        </h1>
      </div>
      <div>
        <h2 className="text-gray-300 font-dm w-80 leading-relaxed LIA-text  ">
          I'm available for LIA from{" "}
          <span className="font-bold italic">November 2026 to May 2027</span>.
          I'm looking for a place where I can contribute with my skills, grow as
          a developer and learn new technologies alongside experienced people.
        </h2>
      </div>
    </>
  );
}
