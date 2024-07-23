"use client";

import {
  AiOutlineCheckCircle,
  AiOutlineCloseCircle,
  AiOutlineInfoCircle,
  AiOutlineWarning,
} from "react-icons/ai";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLayout } from "@/stores/useLayout";

import Modal from "./modal";

const getIconAndColors = (type: string) => {
  switch (type) {
    case "success":
      return {
        icon: <AiOutlineCheckCircle size={55} className="text-success" />,
        color: "border-success text-success",
        hover: "hover:bg-green-100",
      };
    case "warning":
      return {
        icon: <AiOutlineWarning size={55} className="text-warning" />,
        color: "border-warning text-warning",
        hover: "hover:bg-yellow-100",
      };
    case "info":
      return {
        icon: <AiOutlineInfoCircle size={55} className="text-info" />,
        color: "border-info text-info",
        hover: "hover:bg-blue-100",
      };
    case "error":
    default:
      return {
        icon: <AiOutlineCloseCircle size={55} className="text-error" />,
        color: "border-error text-error",
        hover: "hover:bg-red-100",
      };
  }
};

const NotificationPage = () => {
  const layoutStore = useLayout();
  const isOpen = layoutStore.show ?? false;
  const { icon, color, hover } = getIconAndColors(layoutStore.type ?? "error");

  return (
    <Modal
      open={isOpen}
      onClose={() => layoutStore.setLayout({ show: false })}
      className="bg-transparent"
    >
      <div
        className={cn(
          "p-6 rounded-2xl shadow-lg max-w-md mx-auto border bg-gray-100",
          color
        )}
      >
        <div className="flex flex-col items-center">
          {icon}
          <h2 className="text-2xl font-semibold mt-4">{layoutStore.title}</h2>
          <p className="text-secondary font-medium text-center mt-2 mb-4">{layoutStore.message}</p>
          <Button
            type="button"
            onClick={() => layoutStore.setLayout({ show: false })}
            className={cn("px-4 py-2 rounded-lg border", color, hover)}
          >
            Close
          </Button>
        </div>
      </div>
    </Modal>
  );
};

export default NotificationPage;
