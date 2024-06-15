"use client";

import { useLayout } from "@/stores/useLayout";
import Modal from "./modal";

const NotificationPage = () => {
  const layoutStore = useLayout();
  return (
    <Modal open={layoutStore.show}>
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
