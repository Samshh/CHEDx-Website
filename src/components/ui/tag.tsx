interface TagProps {
  children: React.ReactNode;
  className?: string;
}

export default function Tag({children, className}: TagProps) {
  return (
    <div className={`rounded-lg px-[0.75rem] py-[0.5rem] border-[1px] flex justify-center items-center ${className}`}>
      <p className="text-[0.75rem] uppercase">
        {children}
      </p>
    </div>
  );
}