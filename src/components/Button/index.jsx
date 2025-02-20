import Proptypes from "prop-types";
import classNames from "classnames";

export const Button = ({
  message,
  onClick,
  type = "",
  color,
  disabled = false,
}) => {
  const styleButton = classNames(`rounded-lg px-4 py-2 text-white `, {
    "bg-green-500 hover:bg-green-600": color == "green" && !disabled,
    "bg-red-500 hover:bg-red-600": color == "red" && !disabled,
    "bg-blue-500 hover:bg-blue-600": color == "blue" && !disabled,
    "bg-gray-400 cursor-not-allowed": disabled,
  });

  return (
    <button type={type} onClick={onClick} className={styleButton}>
      {message}
    </button>
  );
};

Button.propTypes = {
  type: Proptypes.string.isRequired,
  color: Proptypes.string.isRequired,
  disabled: Proptypes.bool.isRequired,
  message: Proptypes.string.isRequired,
  onClick: Proptypes.func.isRequired,
};
