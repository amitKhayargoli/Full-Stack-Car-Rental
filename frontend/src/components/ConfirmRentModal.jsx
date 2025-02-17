import React from "react";
import ReactDOM from "react-dom";
import { X } from "lucide-react";

const ConfirmRentModal = ({ isOpen, onClose, onConfirm }) => {
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 p-4">
      <div className="w-full max-w-sm rounded-lg bg-white p-6 shadow-lg">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-semibold">Confirm Rental</h2>
          <button
            className="text-gray-500 hover:text-red-500"
            onClick={onClose}
          >
            <X size={20} />
          </button>
        </div>
        <p className="mt-4 text-gray-700">
          Are you sure you want to rent this car?
        </p>

        <div className="mt-6 flex justify-end gap-3">
          <button
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            onClick={onConfirm}
          >
            Confirm
          </button>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ConfirmRentModal;
