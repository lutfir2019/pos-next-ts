import Image from "next/image";
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
import { useProduct } from "@/stores/product/useProduct";
import { MoreHorizontal } from "lucide-react";
import { useState } from "react";
import AddEdit from "./modal/AddEdit";
import Delete from "./modal/Delete";
import { formattedDate } from "@/composables/handleDate";
import { ProductType } from "@/types/products";

const TableProduct = () => {
  const productStore = useProduct();
  const dataProduct = productStore.data;

  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteData, setDeleteData] = useState<number | null>(null);
  const [row, setRow] = useState<ProductType | null>(null);

  const handleEdit = (data: ProductType) => {
    setRow(data);
    setOpen(true);
  };

  const toggleDelete = (id: number) => {
    setDeleteData(id);
    setOpenDelete(true);
  };

  const handleDelete = () => {
    console.log("test delete", deleteData);
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
                        onClick={() => toggleDelete(data?.id ?? 0)}
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
