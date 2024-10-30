import { useNavigate } from "react-router-dom";
import NavLogo from "/NavLogo.svg";
import Button from "@/@/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div className="sticky top-0 w-full bg-white bg-opacity-5 z-40">
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
          <Button className="border-[1px] border-white">Register Now</Button>
        </div>
        <div className="flex lg:hidden lg:opacity-0">
          <Sheet>
            <SheetTrigger>Open</SheetTrigger>
            <SheetContent className="w-2/3">
              <SheetHeader>
                <SheetTitle>Are you absolutely sure?</SheetTitle>
                <SheetDescription>
                  This action cannot be undone. This will permanently delete
                  your account and remove your data from our servers.
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </div>
  );
}
