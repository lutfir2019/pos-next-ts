import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { cn } from "@/lib/utils";

interface ModalType {
  children: React.ReactNode;
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  className?: string;
}

const Modal: React.FC<ModalType> = ({ children, open, onClose, className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(open);
  useEffect(() => {
    setIsOpen(open);
  }, [open]);

  return (
    <Dialog
      className="relative z-50"
      open={isOpen}
      onClose={(val) => onClose(val)}
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black bg-opacity-30 dark:bg-opacity-60 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className={cn(
              "relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95",
              className
            )}
          >
            {children}
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
};

export default Modal;
