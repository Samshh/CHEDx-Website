import Tag from "../../@/ui/tag";
import CHEDxLogo from "/CHEDxLogo.svg"

export default function Landing() {
  return (
    <section className="relative h-screen">
      <Tag className="border-yellow">V 2024</Tag>
      <img src={CHEDxLogo} alt="CHEDx" />
    </section>
  );
}
