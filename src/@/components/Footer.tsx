import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <footer>
      <nav>
        <div>
          <p onClick={() => navigate("/")}>footer logo</p>
        </div>
        <div className="flex items-center justify-center gap-[1rem]">
          <p onClick={() => navigate("/venue")}>Venue</p>
          <p onClick={() => navigate("/programme")}>Programme</p>
          <p onClick={() => navigate("/breakout-sessions")}>
            Breakout Sessions
          </p>
        </div>
      </nav>
    </footer>
  );
}
