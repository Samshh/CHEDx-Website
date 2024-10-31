import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterLogo from "/FooterLogo.svg";
import { Icon } from "@iconify/react";

export default function Footer() {
  const [nextLocation, setNextLocation] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const [currentLocation, setCurrentLocation] = useState("");

  useEffect(() => {
    if (location.pathname === "/") {
      setNextLocation("/venue");
      setCurrentLocation("venue");
    } else if (location.pathname === "/venue") {
      setNextLocation("/programme");
      setCurrentLocation("programme");
    } else if (location.pathname === "/programme") {
      setNextLocation("/breakout-sessions");
      setCurrentLocation("breakout sessions");
    }
  }, [location.pathname]);

  return (
    <div className="flex-col">
      {location.pathname !== "/breakout-sessions" && (
        <div className="bg-white border-[#1e1e1e] border-y-[1px]">
          <button
            onClick={() => navigate(nextLocation)}
            type="button"
            className="w-full"
          >
            <footer className="py-[4rem] px-[1rem] md:px-[2rem]">
              <div className="flex flex-col items-start justify-center">
                <div className="flex items-center justify-center gap-[1rem]">
                  <p className="uppercase text-[0.75rem]">
                    next
                  </p>
                  <div className="h-[1px] w-[120px] md:w-[200px] bg-black" />
                </div>
                <h2 className="uppercase">{currentLocation}</h2>
              </div>
              <div className="flex items-center justify-center">
                <div className="h-[1.5px] w-[67px] md:w-[170px] bg-black" />
                <Icon icon="icon-park-outline:right" className="text-[1.5rem]" />
              </div>
            </footer>
          </button>
        </div>
      )}
      <footer className="flex-col-reverse gap-[2rem] md:flex-row">
        <div className="flex flex-col items-center justify-center gap-[0.5rem]">
          <button
            className="flex items-center justify-center"
            type="button"
            onClick={() => navigate("/")}
          >
            <img className="h-auto w-[186px]" src={FooterLogo} alt="NavLogo" />
          </button>
          <p className="text-[#777777]">© CHEDx. All rights reserved</p>
        </div>
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
        </div>
      </footer>
    </div>
  );
}
