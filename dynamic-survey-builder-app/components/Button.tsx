type ButtonProps = {
  text: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      type="button"
      aria-label={text}
      onClick={onClick}
      className="px-4 py-2 bg-blue-400 text-white rounded-full cursor-pointer h-min"
    >
      <p className="font-semibold">{text}</p>
    </button>
  );
};
