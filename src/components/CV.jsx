import CVInfo from "./CVInfo";

export default function CV({ ref }) {
  return (
    <>
      <div ref={ref} className="flex flex-col p-5 w-full box-border gap-20 items-center">
        <section className="flex flex-col gap-3">
          <h1 className="text-white font-dm font-semibold text-4xl">
            Education
          </h1>
          <CVInfo
            diffStyle={"text-black font-dm leading-relaxed "}
            info={"Frontend Utvecklare"}
            timeStart={"2026.02.09"}
            timeEnd={"2027.05.10"}
            description={
              "Frontendutvecklare (YH)  EC Utbildning.Utbildning inom modern webbutveckling med fokus på HTML5, CSS3, JavaScript, React, UX/UI, agila arbetsmetoder och Git. Mycket grupparbete för att simulera hur det ser ut i verkligheten hos företag."
            }
          />
          <CVInfo
            diffStyle={"text-black font-dm leading-relaxed "}
            info={"Programmeringskurser"}
            timeStart={"2025"}
            timeEnd={"2025"}
            description={
              "Studerade grundläggande programmering via universitetet och Komvux med kurser i Java, C#, Python och Programmering 1. Grunden som ledde mig till frontend-utveckling."
            }
          />
        </section>

        <section className="flex flex-col gap-3">
          <h1 className="text-white font-dm font-semibold text-4xl">Work</h1>
          <CVInfo
            diffStyle={"text-black font-dm leading-relaxed  "}
            info={"B2B Säljare & Kundservice"}
            timeStart={"2021"}
            timeEnd={"2022"}
            description={
              "Sålde brandsäkerhetslösningar till företag och säkerställde att arbetsplatser uppfyllde lagkrav. Arbetade med kundrelationer och B2B-kommunikation."
            }
          />
          <CVInfo
            diffStyle={"text-black font-dm leading-relaxed "}
            info={"Säljansvarig & Arbetsledare"}
            timeStart={"2023"}
            timeEnd={"2024"}
            description={
              "Ansvarade för säljteamets dagliga arbete och ledde kollegor mot gemensamma mål."
            }
          />
        </section>
      </div>
    </>
  );
}
