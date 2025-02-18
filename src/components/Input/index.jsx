import PropTypes from "prop-types";

export const TaskInput = ({ name, placeholder, value, onChange }) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">
        Description
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        className="mt-1 w-full rounded-lg border border-blue-700 p-2"
        placeholder={placeholder}
      />
    </div>
  );
};

TaskInput.propTypes = {
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
