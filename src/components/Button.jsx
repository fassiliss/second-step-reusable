function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
