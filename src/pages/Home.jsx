import { useRef } from "react";
import Computer from "../components/Computer";
import FloppyDisk from "../components/FloppyDisk";
import Hero from "../components/Hero";
import ClickAnimatonFloppy from "../animations/animations";
import { useNavigate } from "react-router";

export default function Home() {
  const slotRef = useRef(null);
  const textRef = useRef(null);
  const navigate = useNavigate();

  const handleNav = (diskRef, title) => {
    
    const diskPos = diskRef.current.getBoundingClientRect();
    const slotPos = slotRef.current.getBoundingClientRect();
    const xDiff = slotPos.x - diskPos.x - 4.5;
    const yDiff = slotPos.y - diskPos.y - 10;

    ClickAnimatonFloppy(title, diskRef, xDiff, yDiff, navigate, textRef);
  };
  return (
    <>
      {" "}
      <div className="body border-box flex flex-col m-0 w-full min-h-screen bg-black/80">
        <section className="relative gap-2 flex flex-col py-10 px-4 justify-start items-center w-full h-240 border-box">
          <Hero />
        </section>

        <section className="gap-2 flex flex-col p-2 justify-center items-center mt-8 w-full h-240 border-box">
          <Computer slotRef={slotRef} textRef={textRef} />
          <div className="floppy-section flex">
            <FloppyDisk
              title={"Projects"}
              bgColor={"bg-black"}
              acColor={"bg-neutral-800"}
              handleNav={handleNav}
            />
            <FloppyDisk
              title={"Contact"}
              bgColor={"bg-green-700"}
              acColor={"bg-green-900"}
              handleNav={handleNav}
            />
            <FloppyDisk
              title={"About"}
              bgColor={"bg-purple-900"}
              acColor={"bg-purple-800"}
              handleNav={handleNav}
            />
          </div>
        </section>
      </div>
    </>
  );
}
