import React from "react"; // Import React for JSX usage

interface Children {
  children: React.ReactNode;
  open?: boolean;
}
const Modal = ({ children, open }: Children) => {
  return (
    <dialog open={open}>
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 overflow-auto">
        <div className="relative flex justify-center">
          {children}
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
