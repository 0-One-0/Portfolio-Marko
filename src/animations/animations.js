import gsap from "gsap";

export default function ClickAnimatonFloppy(
  title,
  diskRef,
  xDiff,
  yDiff,
  navigate,
  textRef,
) {
  const tl = gsap.timeline({
    onComplete: () => {
      AnimateScreen(textRef, title, navigate);
    },
  });

  tl.to(diskRef.current, {
    motionPath: {
      path: [
        { x: 0, y: 0 },
        { x: xDiff / 2, y: yDiff / 2 },
        { x: xDiff, y: yDiff },
      ],
      curviness: 0,
    },
    scale: 0.5,
    rotate: 0,
    duration: 1.7,
    ease: "power3.out",
  })
    .to(diskRef.current, {
      y: yDiff - 4,
      opacity: 0,
      ease: "power4.inOut",
    })
    .to(gsap.utils.toArray(".floppyDisk-container"), {
      opacity: 0,
      duration: 0.1,
      ease: "power4.inOut",
    })
    .to(".floppy-section", {
      display: "none",
    });
}

function AnimateScreen(textRef, title, navigate) {
  const tl = gsap.timeline({
    onComplete: () => setTimeout(() => navigate("/" + title), 1000),
  });
  gsap.set(textRef.current, {
    fontSize: 14,
    textAlign: "center",
  });
  gsap.set(".title-screen", {
    fontSize: 16,
    textAlign: "center",
  });

  tl.to(".pc", {
    y: 20,
    scale: 1.2,
    duration: 0.7,
    ease: "power1.inOut",
  })
    .to(
      ".pc-rim",
      {
        scale: 1.2,
        duration: 0.7,
        ease: "power1.inOut",
      },
      "<",
    )
    .to(textRef.current, {
      text: "Loading...",
      repeat: 1,
      duration: 1,
      ease: "power1.inOut",
    })
    .to(textRef.current, {
      text: "",
      ease: "power1.inOut",
      duration: 1.5,
    })
    .to(textRef.current, {
      text: "Booting...",
      ease: "power1.inOut",
      duration: 1.5,
    })
    .to(".title-screen", {
      text: title + "..",
      ease: "power1.inOut",
      duration: 1.5,
    })
    .to(".body", {
      opacity: 0,
      duration: 0.3,
      ease: "power4.inOut",
    });
}
