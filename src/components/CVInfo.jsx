export default function CVInfo({
  info,
  timeStart,
  timeEnd = "inprogress",
  diffStyle,
  description,
}) {
  return (
    <>
      <div className="flex flex-col gap-3 border  border-amber-200/20 shadow-[0_0_15px_rgba(251,191,36,0.15)] bg-[#1c1a17] rounded-sm border-box w-full max-w-150 items-start p-4">
        
        <div className="flex gap-2 border-box w-full">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M19 3h-2c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1H5c-1.1 0-2 .9-2 2v15c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m0 17H5V5h2v2h10V5h2z"></path>
          </svg>
          <p className={`${diffStyle}` }>{info}</p>
        </div>

        <p className={`${diffStyle}`}>
          {timeStart}-{timeEnd}
        </p>
        <div className="w-70 h-0.5 bg-white rounded self-center"></div>
        <p className={`${diffStyle} italic`}> {description}</p>
        
      </div>
    </>
  );
}
