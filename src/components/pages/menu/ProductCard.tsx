import React from "react";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  quantity: number;
  price: number;
  note?: string;
  imageUrl?: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const sortText = (text: string) => {
  if (text?.length > 30) {
    return text?.slice(0, 30) + "...";
  } else {
    return text;
  }
};

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="w-full p-2 flex flex-col justify-between">
      <Image
        src={product.imageUrl ?? ""}
        alt={product.name}
        width={500}
        height={500}
        className="w-full h-auto object-cover rounded-t-lg"
      />
      <CardHeader className="p-2">
        <CardTitle className="text-base font-semibold">
          {sortText(product.name)}
        </CardTitle>
        <CardDescription className="text-muted-foreground">
          Rp {product.price.toLocaleString()}
        </CardDescription>
      </CardHeader>
      <CardContent className="p-0 px-3 pb-1">
        <Button
          type="button"
          variant="default"
          className="mt-2 w-full"
          onClick={() => onAddToCart(product)}
        >
          Add to basket
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
