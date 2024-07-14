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
import { useEffect, useState } from "react";

const TableProduct = () => {
  const productStore = useProduct();
  const [dataProduct, setDataProduct] = useState(productStore.data?.products);

  useEffect(() => {
    setDataProduct(productStore.data?.products);
  }, [productStore.data]);

  return (
    <Table>
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
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
      </TableBody>
    </Table>
  );
};

export default TableProduct;
