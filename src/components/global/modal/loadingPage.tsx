"use client";

import { useLoading } from "@/stores/useLoading";
import { ImSpinner2 } from "react-icons/im";
import { useEffect, useState } from "react";
import Modal from "./modal";

const LoadingPage = () => {
  const loadingStore = useLoading();
  const [isOpen, setIsOpen] = useState<boolean>(
    loadingStore.is_loading ?? false
  );
  useEffect(() => {
    setIsOpen(loadingStore.is_loading ?? false);
  }, [loadingStore.is_loading]);
  return (
    <Modal
      open={isOpen}
      onClose={setIsOpen}
      className="bg-transparent shadow-none"
    >
      <div className="flex justify-center">
        <span className="bg-muted w-fit p-3 rounded-md shadow-md">
          <ImSpinner2 className="animate-spin text-primary" size={50} />
        </span>
      </div>
    </Modal>
  );
};

export default LoadingPage;
