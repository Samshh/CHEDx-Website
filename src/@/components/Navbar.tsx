import { useNavigate } from "react-router-dom";
import NavLogo from "/NavLogo.svg";
import Button from "../ui/button";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 w-full bg-white bg-opacity-5 z-40">
      <nav>
        <button type="button" onClick={() => navigate("/")}>
          <img className="h-full w-auto" src={NavLogo} alt="NavLogo" />
        </button>
        <div className="flex items-center justify-center gap-[1.75rem]">
          <button onClick={() => navigate("/")} type="button">
            <p className="uppercase">Home</p>
          </button>
          <button onClick={() => navigate("/venue")} type="button">
            <p className="uppercase">Venue</p>
          </button>
          <button onClick={() => navigate("/programme")} type="button">
            <p className="uppercase">Programme</p>
          </button>
          <button onClick={() => navigate("/breakout-sessions")} type="button">
            <p className="uppercase">Breakout Sessions</p>
          </button>
          <Button className="border-[1px] border-white">Register Now</Button>
        </div>
      </nav>
    </div>
  );
}
