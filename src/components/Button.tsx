type ButtonProps = {
  text: string;
  onClick: () => void;
  className?: string;
};

const Button = (props: ButtonProps) => {
  const { text, onClick, className } = props;

  return (
    <button
      onClick={onClick}
      className={`bg-primary px-6 py-2 rounded-lg flex items-center justify-center ${className}`}
    >
      <p className="text-dark font-body font-bold">{text}</p>
    </button>
  );
};

export default Button;
