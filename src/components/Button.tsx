type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
  type?: "primary" | "secondary" | "dark";
  disabled?: boolean;
};

const Button = (props: ButtonProps) => {
  const { text, onClick, className, type = "primary", disabled = false } = props;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg flex items-center justify-center shadow-md transition duration-200 
      ${type === "primary" ? "bg-primary" : type === "dark" ? "bg-dark" : "bg-secondary"} 
      ${disabled ? "opacity-50" : " hover:brightness-110"}
      ${className}`}
    >
      <p className={`font-body font-bold ${type === "dark" ? "text-white" : "text-dark" }`}>{text}</p>
    </button>
  );
};

export default Button;
