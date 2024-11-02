import { useNavigate } from "react-router-dom";
import NavLogo from "/NavLogo.svg";
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
  const navigate = useNavigate();
  return (
    <div className="fixed top-0 w-full bg-white backdrop-blur-sm bg-opacity-55 z-40">
      <nav>
        <button type="button" onClick={() => navigate("/")}>
          <img className="h-full w-auto" src={NavLogo} alt="NavLogo" />
        </button>
        <div className="hidden lg:flex items-center justify-center gap-[1.75rem]">
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
          <Button className="border-[1px] border-black">Register Now</Button>
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
                <SheetClose className="flex-end text-end">
                  <button type="button">
                    <h3 className="text-yellow">REGISTER NOW</h3>
                  </button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
