function ReusableButton({ label, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="global-button-class-contact"
    >
      {label}
    </button>
  );
}

export default ReusableButton;
