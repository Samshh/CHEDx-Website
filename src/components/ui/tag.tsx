interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({children, className}: TagProps) {
  return (
    <div className={`rounded-lg px-[0.75rem] py-[0.4rem] border-[2px] flex justify-center items-center w-fit ${className}`}>
      <p className="uppercase">
        {children}
      </p>
    </div>
  );
}