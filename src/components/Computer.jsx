export default function Computer({ slotRef, textRef }) {
  return (
    <>
      {" "}
      <div className="flex flex-col items-center">
        <div className="pc-rim bg-amber-100 w-40 h-35 rounded-xl flex justify-center items-center border-2 border-stone-400 ">
          <div className=" relative  pc-screen bg-green-900 w-32 h-25 rounded-xl flex justify-center items-center border-2 border-green-950">
            <div className="absolute top-1 left-2 w-25 h-4 bg-white/20 rounded-full blur-sm"></div>
            <div className="absolute bottom-1 left-2 w-25 h-4 bg-white/20 rounded-full blur-sm"></div>
            <div><p
              ref={textRef}
              className="whitespace-pre-wrap font-retro m-0 text-green-500 w-32 text-center"
            ></p>
            <p
             
              className="title-screen font-retro whitespace-pre-wrap m-0 text-green-500 w-32 text-center"
            ></p></div>
            
          </div>
        </div>
        <div className="pc bg-amber-100 w-60 h-12 rounded-sm flex justify-end items-center border-2 border-stone-400 p-2 gap-10">
          <div
            ref={slotRef}
            className="floppy-disk bg-black w-15 h-1 rounded-sm "
          ></div>
          <button className="On-btn bg-amber-200/40 p-1 w-5 h-5 rounded-full flex items-center justify-center border-1 border-stone-400">
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
