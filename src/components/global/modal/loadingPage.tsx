"use client";

import { useLoading } from "@/stores/useLoading";
import { ImSpinner2 } from "react-icons/im";
import Modal from "./modal";

const LoadingPage = () => {
  const loadingStore = useLoading();
  const isOpen = loadingStore.is_loading ?? false;

  return (
    <Modal
      open={isOpen}
      onClose={() => {}}
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
