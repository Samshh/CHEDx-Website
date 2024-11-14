import { useNavigate, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import FooterLogo from "/CHEDxLogo.svg";
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
    } else if (location.pathname === "/breakout-sessions") {
      setNextLocation("/");
      setCurrentLocation("home");
    } 
    // else if (location.pathname === "/organizers") {
    //   setNextLocation("/");
    //   setCurrentLocation("home");
    // }
  }, [location.pathname]);

  return (
    <div className="flex-col">
      <div className="bg-black-to-white border-black border-y-[1px]">
        <div onClick={() => navigate(nextLocation)} className="w-full">
          <footer className="cursor-pointer py-[4rem] px-[1rem] md:px-[2rem] md:hover:px-[68px] transition-all duration-300 ease-in-out">
            <div className="flex flex-col items-start justify-center">
              <div className="flex items-center justify-center gap-[1rem]">
                <p className="uppercase text-[0.75rem] text-black">
                  {location.pathname !== "/breakout-sessions" ? <>next</> : <>back to</>}
                </p>
                <div className="p-[0.5px] w-[120px] md:w-[200px] bg-black" />
              </div>
              <h2 className="uppercase text-black">{currentLocation}</h2>
            </div>
            <div className="flex items-center justify-center">
              <div className="p-[0.5px] w-[67px] md:w-[170px] bg-black" />
              <Icon icon="icon-park-outline:right" className="text-[1.5rem]" />
            </div>
          </footer>
        </div>
      </div>
      <footer className="flex-col-reverse gap-[2rem] md:flex-row">
        <div className="flex flex-col items-center justify-center gap-[0.5rem]">
          <button
            className="flex items-center justify-center"
            type="button"
            onClick={() => navigate("/")}
          >
            <img className="h-[4rem] w-auto" src={FooterLogo} alt="NavLogo" />
          </button>
          <p className="text-[#777777]">
            © CHED<sup>x</sup>2.0 All rights reserved
          </p>
        </div>
        <div className="flex items-center justify-center gap-[1.75rem]">
          <button
            className="hover:text-yellow transition-all ease-linear"
            onClick={() => navigate("/")}
            type="button"
          >
            <p className="uppercase">Home</p>
          </button>
          <button
            className="hover:text-red transition-all ease-linear"
            onClick={() => navigate("/venue")}
            type="button"
          >
            <p className="uppercase">Venue</p>
          </button>
          <button
            className="hover:text-blue transition-all ease-linear"
            onClick={() => navigate("/programme")}
            type="button"
          >
            <p className="uppercase">Programme</p>
          </button>
          <button
            className="hover:text-green transition-all ease-linear"
            onClick={() => navigate("/breakout-sessions")}
            type="button"
          >
            <p className="uppercase">Breakout Sessions</p>
          </button>
          {/* <button
            className="hover:text-yellow transition-all ease-linear"
            onClick={() => navigate("/organizers")}
            type="button"
          >
            <p className="uppercase">Organizers</p>
          </button> */}
        </div>
      </footer>
    </div>
  );
}
