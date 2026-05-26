import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import {useRef} from "react";
export default function FloppyDisk({ title, bgColor, acColor }) {
  const containerRef = useRef(null)
  
   useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(containerRef.current, {
      x: -100,
      duration: 1,
      ease: "power4.inOut",
      opacity:0,
    });
  },{ scope: containerRef })
  return (
    <>
      <div ref={containerRef} className={`floppyDisk-container flex ${bgColor} flex-col w-26 h-29 m-20 p-2 rounded-tr-xl rounded-sm gap-3 items-center pt-0 pb-0 box-border`}>
        <div className={`floppyDisk-topper ${acColor} h-8 w-20 p-1 flex justify-end px-1 rounded-b-sm`}>
          <div className="bg-[#C0C0C0] w-12 h-6 flex justify-end px-2 p-1">
            <div className={`${acColor} h-4 w-2`}></div>
          </div>
        </div>
        <div className="floppyDisk-namePlace bg-yellow-50 h-17 w-20  pb-0 flex flex-col  justify-end items-center ">
          <h3 className="floppyDisk-title">{title}</h3>
          
        </div>
      </div>
    </>
  );
}
