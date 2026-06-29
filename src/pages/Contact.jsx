import { useNavigate } from "react-router";
import FloppyDisk from "../components/FloppyDisk";

export default function Contact(){
  const navigate = useNavigate();
    const handleNavHome = () => {
    navigate("/");
  };
  return <>
   <FloppyDisk
                    title={"Home"}
                    bgColor={"bg-black"}
                    acColor={"bg-neutral-800"}
                    handleNav={handleNavHome}
                    position={"fixed z-1 top-0 left-0"}
                    rotaion={"-rotate-2"}
                  />
  <div>Contact</div>
  </>
}