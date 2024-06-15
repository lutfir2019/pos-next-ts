"use client";

import { useLoading } from "@/stores/useLoading";
import Modal from "./modal";
import { ImSpinner2 } from "react-icons/im";

const LoadingPage = () => {
  const loadingStore = useLoading();
  return (
    <Modal open={loadingStore.is_loading}>
      <div className="bg-slate-100 p-3 rounded-md">
        <ImSpinner2 className="animate-spin" color="#020617" size={50} />
      </div>
    </Modal>
  );
};

export default LoadingPage;
