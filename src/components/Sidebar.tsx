import HomeSidebar from "./sidebar-components/HomeSidebar";
import { useLocation } from "react-router-dom";
import VenueSidebar from "./sidebar-components/VenueSidebar";
import ProgrammeSidebar from "./sidebar-components/ProgrammeSidebar";
import BreakoutSidebar from "./sidebar-components/BreakoutSidebar";

export default function Sidebar() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="fixed w-full left-0 top-[30%] pointer-events-none z-10">
      <div className="mx-auto max-w-[1920px] hidden xl:flex justify-between items-center">
        <div className="ml-[2rem] flex flex-col gap-[2rem]">
          {["explore", "exchange", "experience"].map((text, idx) => (
            <div key={idx} className="uppercase">
              <span className="close-up vertical-text font-light">{text}</span>
            </div>
          ))}
        </div>
        <div className="mr-[2rem] flex flex-col justify-center items-end gap-[6px]">
          {path === "/" ? (
            <HomeSidebar />
          ) : path === "/venue" ? (
            <VenueSidebar />
          ) : path === "/programme" ? (
            <ProgrammeSidebar />
          ) : path === "/breakout-sessions" ? (
            <BreakoutSidebar />
          ) : null}
        </div>
      </div>
    </div>
  );
}
