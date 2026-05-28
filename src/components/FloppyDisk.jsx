import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef } from "react";
export default function FloppyDisk({ title, bgColor, acColor, handleNav, position, rotaion }) {
  const diskRef = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline();
      gsap.set(diskRef.current, { scale: 0.7 });
      tl.from(diskRef.current, {
        duration: 1,
        ease: "power4.inOut",
        opacity: 0,
      }).to(diskRef.current, {
        
      });
    },
    { scope: diskRef },
  );
  return (
    <>
      <div
        onClick={() => handleNav(diskRef, title)}
        ref={diskRef}
        className={`floppyDisk-container flex ${bgColor} ${position} ${rotaion} flex-col w-26 h-29 p-2 rounded-tr-xl rounded-sm gap-3 items-center pt-0 pb-0 box-border border border-white/40`}
      >
        <div
          className={` ${acColor} h-8 w-20 p-1 flex justify-end px-1 rounded-b-sm`}
        >
          <div className="bg-[#C0C0C0] w-12 h-6 flex justify-end px-2 p-1">
            <div className={`${acColor} h-4 w-2`}></div>
          </div>
        </div>
        <div className="bg-yellow-50 h-17 w-20  pb-0 flex flex-col  justify-end items-center ">
          <h3 className="floppyDisk-title text-base font-bold tracking-wide uppercase">
            {title}
          </h3>
        </div>
      </div>
    </>
  );
}
