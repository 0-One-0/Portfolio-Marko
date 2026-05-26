import { useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "./App.css";
import FloppyDisk from "./components/FloppyDisk";

gsap.registerPlugin(useGSAP);

function App() {
 
  return (
    <>
      <FloppyDisk title={"Home"} bgColor={"bg-black"} acColor={"bg-neutral-800"} />
      <FloppyDisk title={"Contact"} bgColor={"bg-green-700"} acColor={"bg-green-900"} />
      <FloppyDisk title={"Hello"} bgColor={"bg-purple-900"} acColor={"bg-purple-800"} />
    </>
  );
}

export default App;
