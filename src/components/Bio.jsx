export default function BioText({ promt }) {
  return (
    <>
      <div className="flex p-10 w-full box-border">
        <h2 className="text-white font-mono-retro w-100 italic  ">
          {promt}
        </h2>
      </div>
    </>
  );
}
