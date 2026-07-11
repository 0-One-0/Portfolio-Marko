import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";

export default function Hero() {
  const introRef = useRef(null);
  const underTextRef = useRef(null);

  useGSAP(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".arrow", {
          y: 20,
          repeat: -1,
          yoyo: true,
          duration: 1,
          ease: "power1.inOut",
        });
      },
    });
    tl.to(introRef.current, {
      text: "Hey, I'm Marko.",
      ease: "power3.inOut",
      duration: 2,
    })
      .from(
        ".marko-img",
        {
          opacity: 0,
          ease: "power3.inOut",
          duration: 1,
        },
        "<",
      )
      .to(underTextRef.current, {
        text: "Frontend dev in the making. Pick a disk. Let's go.",
        ease: "power3.inOut",
        duration: 3,
      })
      .from(".scroll-text, .arrow ", {
        opacity: 0,
        stagger: 0.3,
        ease: "power3.inOut",
      });
  }, []);
  return (
    <>
      <img
        src="src\assets\PortPhoto.JPG"
        alt="Marko"
        className="w-70 rounded-lg mb-3 marko-img"
      />
      <div className="z-10">
        <p
          ref={introRef}
          className="text-white mb-3 font-mono-retro font-bold text-3xl w-70 text-center p-0 m-0 [text-shadow:0_4px_4px_black]"
        ></p>
        <p
          ref={underTextRef}
          className="text-white font-mono-retro text-base w-70 text-center p-0 m-0 [text-shadow:0_4px_4px_black]"
        ></p>
      </div>
      <div className=" relative mb-10 mt-10 h-40 p-3  border-box flex flex-col items-center">
        <p className="scroll-text text-white font-mono-retro text-base w-70 text-center p-0 m-0 [text-shadow:0_4px_4px_black]">
          Scroll Down!
        </p>
        <svg
          className="arrow absolute bottom-0 w-30 h-30 m-0 p-0"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="#f4f4f4"
          viewBox="0 0 24 24"
        >
          <path d="m12 15.41 5.71-5.7-1.42-1.42-4.29 4.3-4.29-4.3-1.42 1.42z"></path>
        </svg>
      </div>
    </>
  );
}
