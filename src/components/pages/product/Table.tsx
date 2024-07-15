import Image from "next/image";
import { Badge } from "@/components/ui/badge";
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

const TableProduct = () => {
  const productStore = useProduct();
  const dataProduct = productStore.data?.products;

  const [open, setOpen] = useState<boolean>(false);
  const [openDelete, setOpenDelete] = useState<boolean>(false);
  const [deleteData, setDeleteData] = useState<number | null>(null);
  const [row, setRow] = useState("test");

  const handleEdit = (data: string) => {
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
            <TableHead>Tags</TableHead>
            <TableHead className="hidden md:table-cell">Price</TableHead>
            <TableHead className="hidden md:table-cell">Total Sales</TableHead>
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
                    alt={data.title}
                    className="aspect-square rounded-md object-cover"
                    height="64"
                    src={data.thumbnail}
                    width="64"
                  />
                </TableCell>
                <TableCell className="font-medium">{data.title}</TableCell>
                <TableCell>
                  {data.tags?.map((tags) => (
                    <Badge variant="outline" key={tags}>
                      {tags}
                    </Badge>
                  ))}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  ${data.price}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {data.minimumOrderQuantity}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {new Date(data.meta.createdAt).toDateString()}
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
                      <DropdownMenuItem onClick={() => handleEdit(data.title)}>
                        Edit
                      </DropdownMenuItem>
                      <DropdownMenuItem onClick={() => toggleDelete(data.id)}>
                        Hapus
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <AddEdit open={open} onClose={setOpen} text={row} />
      <Delete
        open={openDelete}
        onClose={setOpenDelete}
        onDelete={handleDelete}
      />
    </>
  );
};

export default TableProduct;
