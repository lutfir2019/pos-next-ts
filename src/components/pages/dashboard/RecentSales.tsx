"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const data = [
  {
    id: 5,
    code: "TR20240720005",
    seller: "Admin",
    image: "/images/orange.jpg",
    amount: 199900,
    time: "20:00",
  },
  {
    id: 4,
    code: "TR20240720004",
    seller: "Admin",
    image: "/images/orange.jpg",
    amount: 199900,
    time: "17:00",
  },
  {
    id: 3,
    code: "TR20240720003",
    seller: "Admin",
    image: "/images/orange.png",
    amount: 199900,
    time: "16:00",
  },
  {
    id: 2,
    code: "TR20240720002",
    seller: "Admin",
    image: "/images/orange.jpg",
    amount: 199900,
    time: "11:00",
  },
  {
    id: 1,
    code: "TR20240720001",
    seller: "Admin",
    image: "/images/orange.png",
    amount: 199900,
    time: "10:00",
  },
];

export default function RecentSales() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Penjualan Terbaru</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        {data.map((item) => (
          <div key={item.id} className="flex items-center gap-4">
            <Avatar className="hidden h-9 w-9 sm:flex">
              <AvatarImage src={item.image} alt="Avatar" />
              <AvatarFallback>TR</AvatarFallback>
            </Avatar>
            <div className="grid gap-1">
              <p className="text-sm font-medium leading-none">{item.code}</p>
              <p className="text-sm text-muted-foreground">
                {item.seller} - {item.time}
              </p>
            </div>
            <div className="ml-auto font-medium">
              +${item.amount.toLocaleString()}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
