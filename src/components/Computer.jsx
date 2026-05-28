export default function Computer({ slotRef, textRef }) {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center gap-1">
        <div className="pc-rim shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-3px_4px_rgba(0,0,0,0.4)] rustBack w-48 h-44 rounded-xl flex justify-center items-top p-2 border-4 border-[#A8A494] ">
          <div className=" relative  pc-screen bg-green-900 w-32 h-25 rounded-xl flex justify-center items-center border-4 border-[#2a2a2a]">
            <div className="absolute top-1 left-2 w-25 h-4 bg-white/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-1 left-2 w-25 h-4 bg-white/20 rounded-full blur-sm"></div>
            <div className="scanlines absolute inset-0 pointer-events-none rounded-xl"></div>
            <div>
              <p
                ref={textRef}
                className="whitespace-pre-wrap [text-shadow:0_0_8px_#00ff00,0_0_16px_#00ff00] font-retro m-0 text-green-500 w-32 text-center"
              ></p>
              <p className="title-screen [text-shadow:0_0_8px_#00ff00,0_0_16px_#00ff00] font-retro whitespace-pre-wrap m-0 text-green-500 w-32 text-center"></p>
            </div>
          </div>
        </div>
        <div className="pc shadow-[inset_0_2px_4px_rgba(255,255,255,0.5),inset_0_-3px_4px_rgba(0,0,0,0.4)]  rustBack w-60 h-20 rounded-sm flex justify-end items-center border-2 border-[#A8A494] p-2 gap-10">
          <div
            ref={slotRef}
            className="floppy-disk bg-black w-15 h-1 rounded-sm "
          ></div>
          <button className="On-btn bg-[#C4C0AA] p-1 w-5 h-5 rounded-full flex items-center justify-center border border-stone-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="#0fe100"
              viewBox="0 0 24 24"
            >
              <path d="M11 2h2v10h-2z"></path>
              <path d="M15 4.53v2.16c2.36 1.13 4 3.53 4 6.32 0 3.86-3.14 7-7 7s-7-3.14-7-7c0-2.79 1.64-5.19 4-6.32V4.53C5.51 5.77 3 9.1 3 13c0 4.96 4.04 9 9 9s9-4.04 9-9c0-3.91-2.51-7.24-6-8.47"></path>
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}
