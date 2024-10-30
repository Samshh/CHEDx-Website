interface TagProps {
  children: React.ReactNode;
}

export default function Tag({children}: TagProps) {
  return (
    <div className="inline-block bg-gray-200 rounded-full px-[0.75rem] py-[0.5rem]">
      <p className="text-[0.75rem] uppercase">
        {children}
      </p>
    </div>
  );
}