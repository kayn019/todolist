/* eslint-disable react/no-unescaped-entities */

import React from "react";

const Modal = ({
  isOpen,
  onClose,
  handleAddProject,
  inputValue,
  setInputValue,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed  z-50 inset-0 bg-gray-900 bg-opacity-60 overflow-y-auto h-full w-full mx-auto px-4 ">
      <div className="relative top-40 mx-auto shadow-xl rounded-md bg-white max-w-md p-5 text-black">
        <form onSubmit={handleAddProject}>
          <h3 className="font-bold text-lg">Add new Project</h3>
          <div className="modal-action">
            <input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full max-w-full mb-5"
            />
            <button
              type="submit"
              className="btn bg-green-500 hover:bg-green-600 py-1 px-2 mr-2 rounded-sm font-medium text-white"
            >
              Submit
            </button>
            <button
              type="reset"
              className="btn bg-red-500 hover:bg-red-600 py-1 px-2 rounded-sm font-medium text-white"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Modal;
