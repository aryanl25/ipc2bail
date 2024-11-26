// src/components/Modal.jsx
import React from "react";

const Modal = ({ isOpen, onClose, title, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
      <div className="bg-[#3C5DD5] p-4 rounded-lg shadow-lg w-1/3">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content }} />
        <button
          onClick={onClose}
          className="mt-4 px-4 py-2 bg-white text-black rounded-md"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
