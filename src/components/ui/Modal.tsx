import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  trigger?: React.ReactNode;
}

/**
 * A reusable Modal component that can be used across the application.
 **/
const Modal = ({ isOpen, onClose, children, trigger }: ModalProps) => {
  return (
    <div className="relative inline-block">
      {trigger}

      {isOpen && (
        <>
          <div className="fixed top-0 left-0 w-screen h-screen z-40" onClick={onClose} />
          <div
            className="absolute top-full mt-2 right-0 z-50 p-3 rounded-md border border-[var(--text-muted)] bg-[var(--bg-primary)] shadow-lg min-w-[250px]"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
