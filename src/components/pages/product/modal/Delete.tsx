import Modal from "@/components/global/modal/modal";
import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction } from "react";

interface Props {
  open: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
  onDelete: () => void; // Tambahkan props untuk menangani penghapusan
}

const Delete: React.FC<Props> = ({ open, onClose, onDelete }) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      className="max-w-lg p-5 mx-auto bg-primary-foreground rounded-xl shadow-lg"
    >
      <div className="text-center">
        <h2 className="text-xl font-semibold text-primary">
          Konfirmasi Penghapusan
        </h2>
        <p className="mt-4 text-gray-600 dark:text-gray-300">
          Apakah Anda yakin ingin menghapus produk ini?
        </p>
      </div>
      <div className="mt-6 flex justify-center gap-4">
        <Button variant="destructive" onClick={onDelete}>
          Hapus
        </Button>
        <Button variant="outline" onClick={() => onClose(false)}>
          Batal
        </Button>
      </div>
    </Modal>
  );
};

export default Delete;
