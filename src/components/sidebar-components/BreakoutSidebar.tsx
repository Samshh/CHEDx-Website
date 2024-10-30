export default function BreakoutSidebar() {
  return (
    <>
      <div className="flex justify-center items-center gap-[1rem] text-white">
        <p>BREAKOUT</p>
        <div className="h-[48px] w-[6px] bg-white" />
      </div>
      <div className="flex justify-center items-center gap-[1rem] text-[#777]">
        <p>DAY 1</p>
        <div className="h-[48px] w-[6px] bg-[#777]" />
      </div>
      <div className="flex justify-center items-center gap-[1rem] text-[#777]">
        <p>DAY 2</p>
        <div className="h-[48px] w-[6px] bg-[#777]" />
      </div>
    </>
  );
}
