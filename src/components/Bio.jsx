export default function BioText({ promt, ref }) {
  return (
    <>
      <div ref={ref} className="flex p-10 w-full box-border justify-center">
        <h2 className="text-gray-300 font-dm w-100 leading-relaxed   ">
          {promt}
        </h2>
      </div>
    </>
  );
}
