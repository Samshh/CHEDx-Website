export default function Sidebar() {
  return (
    <div className="fixed w-full left-0 top-1/2">
      <div className="max-w-[1440px] mx-auto hidden md:flex justify-between items-center">
        <div className="ml-[2rem]">
          <p>SidebarL</p>
        </div>
        <div className="mr-[2rem]">
          <p>SidebarR</p>
        </div>
      </div>
    </div>
  );
}
