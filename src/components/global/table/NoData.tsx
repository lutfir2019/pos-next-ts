import "./NoData.css";

import { FolderOpen } from "lucide-react";
import React from "react";

const NoData: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-56 w-full">
      <div className="no-data-container">
        <div className="icon">
          <FolderOpen size={50} />
        </div>
        <span>Data tidak tersedia</span>
      </div>
    </div>
  );
};

export default NoData;
