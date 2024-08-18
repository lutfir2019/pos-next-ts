import Modal from "@/components/global/modal/modal";
import { Button } from "@/components/ui/button";
import React from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const ModalConfirm: React.FC<Props> = ({ isOpen, onClose }) => {
  return (
    <Modal open={isOpen} onClose={() => {}}>
      <div></div>
      <Button type="button" variant="outline" onClick={onClose}>
        Close
      </Button>
    </Modal>
  );
};

export default ModalConfirm;
