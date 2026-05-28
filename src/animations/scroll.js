import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

let isScrolling = false;

export const initScroll = (section1Ref, section2Ref) => {
  ScrollTrigger.normalizeScroll(true);
  const snapTo = (target) => {
    if (isScrolling) return;
    isScrolling = true;
    gsap.to(window, {
      scrollTo: { y: target, autoKill: false },
      duration: 0.8,
      ease: "power2.inOut",
      onComplete: () => {
        isScrolling = false;
      },
    });
  };

  ScrollTrigger.create({
    trigger: section2Ref.current,
    start: "top 90%",

    onEnter: () => snapTo(section2Ref.current),
  });
  ScrollTrigger.create({
    trigger: section1Ref.current,
    start: "bottom 5%",
    onEnterBack: () => snapTo(section1Ref.current),
  });
};
