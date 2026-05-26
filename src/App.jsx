import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";
import FloppyDisk from "./components/FloppyDisk";
import Computer from "./components/Computer";

gsap.registerPlugin(useGSAP);

function App() {
  return (
    <>
      <section className="gap-2 flex flex-col p-2 justify-center items-center mt-8">
        <Computer />
        <div className="flex gap-1"><FloppyDisk
          title={"Home"}
          bgColor={"bg-black"}
          acColor={"bg-neutral-800"}
        />
        <FloppyDisk
          title={"Contact"}
          bgColor={"bg-green-700"}
          acColor={"bg-green-900"}
        />
        <FloppyDisk
          title={"Hello"}
          bgColor={"bg-purple-900"}
          acColor={"bg-purple-800"}
        /></div>
        
      </section>
    </>
  );
}

export default App;
