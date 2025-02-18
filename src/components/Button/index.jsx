import Proptypes from "prop-types";

export const Button = ({ color, message, onClick, type }) => {
  const styleButton = {
    green: "bg-green-500 hover:bg-green-600",
    red: "bg-red-500 hover:bg-red-600",
    blue: "bg-blue-500 hover:bg-blue-600",
  };

  return (
    <button
      type={type ? type : ""}
      onClick={onClick}
      className={`rounded-lg px-4 py-2 text-white ${styleButton[color]}`}
    >
      {message}
    </button>
  );
};

Button.propTypes = {
  type: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  message: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};
