'use client'

import Modal from "./modal";
import { useNotif } from "@/hook/useNotif";

const NotificationPage = () => {
  const { data, setData } = useNotif();
  return (
    <Modal open={data?.show}>
      <div className="bg-slate-100 p-3 rounded-md">
        <p>{data?.title}</p>
        <p>{data?.message}</p>
        <button type="button" onClick={() => setData({ show: false })}>
          Close
        </button>
      </div>
    </Modal>
  );
};

export default NotificationPage;
