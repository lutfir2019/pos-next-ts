import { MoreHorizontal } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formattedDate } from "@/composables/handleDate";
import { useProduct } from "@/stores/product/useProduct";
import { ProductType } from "@/types/products";

import AddEdit from "./modal/AddEdit";
import Delete from "./modal/Delete";

const TableProduct = () => {
  const productStore = useProduct();
  const dataProduct = productStore.data;

  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteData, setDeleteData] = useState<string | null>(null);
  const [row, setRow] = useState<ProductType | null>(null);

  const handleEdit = (data: ProductType) => {
    setRow(data);
    setOpen(true);
  };

  const toggleDelete = (code: string) => {
    setDeleteData(code);
    setOpenDelete(true);
  };

  const handleDelete = () => {
    productStore.delete(deleteData ?? "");
    setOpenDelete(false);
  };

  return (
    <>
      <Table className="no-scrollbar">
        <TableHeader>
          <TableRow>
            <TableHead className="hidden w-[100px] sm:table-cell">
              <span className="sr-only">Image</span>
            </TableHead>
            <TableHead>Name</TableHead>
            <TableHead className="hidden md:table-cell">Kode</TableHead>
            <TableHead className="hidden md:table-cell">Stok</TableHead>
            <TableHead>Harga</TableHead>
            <TableHead className="hidden md:table-cell">Created at</TableHead>
            <TableHead>
              <span className="sr-only">Actions</span>
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataProduct?.length > 0 &&
            dataProduct?.map((data) => (
              <TableRow key={data.id}>
                <TableCell className="hidden sm:table-cell">
                  <Image
                    alt={data.name}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={data?.file ?? ""}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{data.name}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {data.product_code}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {data.quantity}
                </TableCell>
                <TableCell>RP.{data.price_selling?.toLocaleString()}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {formattedDate(data.created_at)}
                </TableCell>
                <TableCell>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button aria-haspopup="true" size="icon" variant="ghost">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Toggle menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuLabel>Actions</DropdownMenuLabel>
                      <DropdownMenuItem onClick={() => handleEdit(data)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem
                        onClick={() => toggleDelete(data?.product_code ?? "")}
                      >
                        Hapus
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <AddEdit open={open} onClose={setOpen} value={row} />
      <Delete
        open={openDelete}
        onClose={setOpenDelete}
        onDelete={handleDelete}
      />
    </>
  );
};

export default TableProduct;
