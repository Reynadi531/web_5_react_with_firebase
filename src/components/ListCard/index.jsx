import PropTypes from "prop-types";

export const ListCard = ({ heading, description, createdAt, onDelete }) => {
  return (
    <div className="h-full w-full rounded-lg bg-white shadow-lg">
      <div className="p-4">
        <h2 className="mb-2 text-xl font-semibold">{heading}</h2>
        <p className="text-gray-700">{description}</p>

        <div className="mt-4 flex h-full flex-row gap-2">
          <p className="flex-1 text-left align-middle text-sm text-gray-500">
            Created at: {new Date(createdAt).toLocaleString()}
          </p>
          <div className="flex gap-2">
            <button
              href="#"
              className="rounded-lg bg-blue-500 px-4 py-2 text-white"
            >
              Edit
            </button>
            <button
              onClick={onDelete}
              className="rounded-lg bg-red-500 px-4 py-2 text-white"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

ListCard.propTypes = {
  heading: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  onDelete: PropTypes.func.isRequired,
};
