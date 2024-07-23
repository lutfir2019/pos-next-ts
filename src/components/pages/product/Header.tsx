import { PlusCircle } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

import AddEdit from "./modal/AddEdit";

const Header = () => {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className="flex items-center">
      <div className="ml-auto flex items-center gap-2">
        <Button size="sm" className="h-8 gap-1" onClick={() => setOpen(true)}>
          <PlusCircle className="h-3.5 w-3.5" />
          <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">
            Tambah Produk
          </span>
        </Button>
      </div>
      <AddEdit open={open} onClose={setOpen} />
    </div>
  );
};
export default Header;
