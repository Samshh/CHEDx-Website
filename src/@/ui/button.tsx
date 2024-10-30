interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({children, className = "", onClick}: ButtonProps) {
  return (
    <button onClick={onClick} type="button" className={`px-[1.25rem] py-[0.75rem] ${className}`}>
      <p>
        {children}
      </p>
    </button>
  );
}