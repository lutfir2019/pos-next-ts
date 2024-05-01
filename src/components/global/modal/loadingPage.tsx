import Modal from "./modal";
import { ImSpinner9 } from "react-icons/im";

const LoadingPage = ({ loading }: { loading?: boolean }) => {
  return (
    <Modal open={loading}>
      <div className="bg-slate-100 p-3 rounded-md">
        <ImSpinner9 className="animate-spin" color="#020617" size={50} />
      </div>
    </Modal>
  );
};

export default LoadingPage;
