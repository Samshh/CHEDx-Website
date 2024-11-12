import { useNavigate, useLocation } from "react-router-dom";
import NavLogo from "/CHEDxLogo.svg";
import Button from "@/components/ui/button";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Burger from "/Burger.svg";

export default function Navbar() {
  const location = useLocation();
  const path = location.pathname;

  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full bg-white shadow-sm backdrop-blur-sm bg-opacity-55 z-40">
      <nav>
        <button type="button" onClick={() => navigate("/")}>
          <img className="h-[2.5rem] w-auto" src={NavLogo} alt="NavLogo" />
        </button>
        <div className="hidden lg:flex items-center justify-center gap-[1.75rem]">
          <button onClick={() => navigate("/")} type="button">
            <p
              className={`uppercase transition-all ease-linear ${
                path === "/" ? "text-yellow" : "hover:text-yellow"
              }`}
            >
              Home
            </p>
          </button>
          <button onClick={() => navigate("/venue")} type="button">
            <p
              className={`uppercase transition-all ease-linear ${
                path === "/venue" ? "text-red" : "hover:text-red"
              }`}
            >
              Venue
            </p>
          </button>
          <button onClick={() => navigate("/programme")} type="button">
            <p
              className={`uppercase transition-all ease-linear ${
                path === "/programme" ? "text-blue" : "hover:text-blue"
              }`}
            >
              Programme
            </p>
          </button>
          <button onClick={() => navigate("/breakout-sessions")} type="button">
            <p
              className={`uppercase transition-all ease-linear ${
                path === "/breakout-sessions"
                  ? "text-green"
                  : "hover:text-green"
              }`}
            >
              Breakout Sessions
            </p>
          </button>
          {/* <button onClick={() => navigate("/organizers")} type="button">
            <p
              className={`uppercase transition-all ease-linear ${
                path === "/organizers"
                  ? "text-yellow"
                  : "hover:text-yellow"
              }`}
            >
              organizers
            </p>
          </button> */}
          <a
            href="https://lu.ma/sslgryut"
            target="_blank"
            rel="noopener noreferrer"
            title="registration"
          >
            <Button className="border-[1px] border-black">Register Now</Button>
          </a>
        </div>
        <div className="flex lg:hidden lg:opacity-0">
          <Sheet>
            <SheetTrigger>
              <img src={Burger} alt="burger" />
            </SheetTrigger>
            <SheetContent className="w-2/3">
              <SheetHeader>
                <SheetTitle className="flex-end text-end">
                  <h3>MENU</h3>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-[1.25rem] md:gap-[1.75rem] mt-[3rem] md:mt-[3.5rem]">
                <SheetClose className="flex-end text-end">
                  <button type="button" onClick={() => navigate("/")}>
                    <h3>HOME</h3>
                  </button>
                </SheetClose>
                <SheetClose className="flex-end text-end">
                  <button type="button" onClick={() => navigate("/venue")}>
                    <h3>VENUE</h3>
                  </button>
                </SheetClose>
                <SheetClose className="flex-end text-end">
                  <button type="button" onClick={() => navigate("/programme")}>
                    <h3>PROGRAMME</h3>
                  </button>
                </SheetClose>
                <SheetClose className="flex-end text-end">
                  <button
                    type="button"
                    onClick={() => navigate("/breakout-sessions")}
                  >
                    <h3>BREAKOUT SESSIONS</h3>
                  </button>
                </SheetClose>
                {/* <SheetClose className="flex-end text-end">
                  <button
                    type="button"
                    onClick={() => navigate("/organizers")}
                  >
                    <h3>ORGANIZERS</h3>
                  </button>
                </SheetClose> */}
                <SheetClose className="flex-end text-end">
                  <a
                    href="https://lu.ma/sslgryut"
                    target="_blank"
                    rel="noopener noreferrer"
                    title="registration"
                  >
                    <button type="button">
                      <h3 className="text-yellow">REGISTER NOW</h3>
                    </button>
                  </a>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
