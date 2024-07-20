"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const data = [
  {
    id: 1,
    name: "Eyeshadow Palette with Mirror",
    code: "PR20240720001",
    quantity: 1,
  },
  {
    id: 2,
    name: "Powder Canister",
    code: "PR20240720002",
    quantity: 2,
  },
  {
    id: 3,
    name: "Red Lipstick",
    code: "PR20240720003",
    quantity: 3,
  },
  {
    id: 4,
    name: "Red Nail Polish",
    code: "PR20240720004",
    quantity: 4,
  },
  {
    id: 5,
    name: "Calvin Klein CK One",
    code: "PR20240720005",
    quantity: 5,
  },
];

export default function RestStock() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Stok Barang Tersisa</CardTitle>
        <CardDescription>
          Daftar 5 produk dengan ketersediaan terendah saat ini, pantau untuk
          memastikan stok cukup.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Product</TableHead>
              <TableHead>Code</TableHead>
              <TableHead>Quantity</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data.map((item) => (
              <TableRow key={item.id}>
                <TableCell>
                  <div className="font-medium">{item.name}</div>
                </TableCell>
                <TableCell>{item.code}</TableCell>
                <TableCell className="text-right">
                  {item.quantity} Pcs
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
