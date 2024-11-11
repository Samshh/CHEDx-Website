import Button from "./ui/button";
import { useNavigate } from "react-router-dom";

export default function PageNotFound() {
  const navigate = useNavigate();
  return (
    <section className="h-screen">
      <h1>404</h1>
      <p>Page not Found</p>
      <Button
        className="border-[1px] mt-[1rem] border-black"
        onClick={() => navigate("/")}
      >
        Go back
      </Button>
    </section>
  );
}
