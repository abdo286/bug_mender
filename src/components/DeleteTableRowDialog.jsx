import PropTypes from "prop-types";

const DeleteTableRowDialog = ({ rowId, rowType, handleDelete }) => {
  return (
    <dialog id="deleteRomModal" className="modal">
      <div className="modal-box">
        <h3 className="font-bold text-lg">Delete {rowType}</h3>
        <p className="py-4">
          Are your sure you want to delete {rowType} with id: {rowId}
        </p>
        <div className="modal-action">
          <form method="dialog" className="flex gap-5">
            <button className="btn">Close</button>
            <button className="btn btn-neutral" onClick={handleDelete}>
              Confirm
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};

DeleteTableRowDialog.propTypes = {
  rowId: PropTypes.number.isRequired,
  rowType: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};
export default DeleteTableRowDialog;
