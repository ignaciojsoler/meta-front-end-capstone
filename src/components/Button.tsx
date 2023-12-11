type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
  type?: "primary" | "secondary";
};

const Button = (props: ButtonProps) => {
  const { text, onClick, className, type = "primary" } = props;

  return (
    <button
      onClick={onClick}
      className={`px-6 py-2 rounded-lg flex items-center justify-center transition duration-200 ${type === "primary" ? "bg-primary hover:bg-primary-dark" : "bg-secondary"} ${className}`}
    >
      <p className="text-dark font-body font-bold">{text}</p>
    </button>
  );
};

export default Button;
