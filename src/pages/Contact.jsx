import { useNavigate } from "react-router";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
import { GithubIcon } from "@dev.icons/react";
import FloppyDisk from "../components/FloppyDisk";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(SplitText);
export default function Contact() {
  const navigate = useNavigate();
  const handleNavHome = () => {
    navigate("/");
  };
  useGSAP(() => {
    window.scrollTo(0, 0);//Makes sure we always scroll to the to when entering or refreshing.
    
    const split = SplitText.create(".welcome-text", {
      type: "chars",
    });
    gsap.set(
      [
        ".image-contact, .linkedIn-logo, .github-logo, .email, .phone, .list-div",
        split.chars,
      ],
      {
        opacity: 0,
        scale: 0,
      },
    );

    const tl = gsap.timeline();

    tl.to(".image-contact", {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      display: "flex",
      ease: "power3.inOut",
    }).to(split.chars, {
      scale: 1,
      opacity: 1,
      duration: 0.5,
      stagger: 0.05,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <>
      <div className="body grid-bg border-box gap-10 flex flex-col m-0 w-full min-h-dvh overflow-x-hidden pt-4 pb-20 items-center">
        <FloppyDisk
          title={"Home"}
          bgColor={"bg-black"}
          acColor={"bg-neutral-800"}
          handleNav={handleNavHome}
          position={"fixed z-1 top-0 left-0"}
          rotaion={"-rotate-2"}
        />
        <section className="flex flex-col gap-10 box-border w-full items-center">
          <img
            src="src\assets\IMG_5357.PNG"
            alt=""
            className="w-60 rounded image-contact"
          />
          <h1 className="text-white text-2xl font-mono-retro text-center welcome-text">
            Here is where you can find me!
          </h1>
          <div className="flex flex-col mb-50 list-div">
            <ol className="flex gap-5 justify-center">
              <li>
                <a
                  href="https://www.linkedin.com/in/marko-antonio-linn%C3%A9r-carvajal-241009208/"
                  target="_blank"
                  className=" w-12 h-12 bg-white flex rounded-2xl items-center justify-center linkedIn-logo"
                >
                  <svg
                    height="200px"
                    width="200px"
                    version="1.1"
                    id="Layer_1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 382 382"
                    xmlSpace="preserve"
                    fill="#000000"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></g>
                    <g id="SVGRepo_iconCarrier">
                      <path
                        style={{ fill: "#0077B7" }}
                        d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z"
                      ></path>
                    </g>
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/0-One-0"
                  target="_blank"
                  className="github-logo w-12 h-12 bg-white flex rounded-full items-center justify-center"
                >
                  <GithubIcon size="40" />
                </a>
              </li>
            </ol>

            <ol className="contact-list">
              {" "}
              <li>
                <p className="email">Email: marko.linner@gmail.com</p>
              </li>
              <li>
                <p className="phone">Phone: 0720016211</p>
              </li>
            </ol>
          </div>
        </section>
      </div>
    </>
  );
}
