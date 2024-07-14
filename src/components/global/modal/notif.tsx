"use client";

import { useEffect, useState } from "react";
import { useLayout } from "@/stores/useLayout";
import Modal from "./modal";

const NotificationPage = () => {
  const layoutStore = useLayout();
  const [isOpen, setIsOpen] = useState<boolean>(layoutStore.show ?? false);
  useEffect(() => {
    setIsOpen(layoutStore.show ?? false);
  }, [layoutStore.show]);
  return (
    <Modal open={isOpen} onClose={setIsOpen}>
      <div className="bg-slate-100 p-3 rounded-md">
        <p>{layoutStore.title}</p>
        <p>{layoutStore.message}</p>
        <button
          type="button"
          onClick={() => layoutStore.setLayout({ show: false })}
        >
          Close
        </button>
      </div>
    </Modal>
  );
};

export default NotificationPage;
