import Image from "next/image";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CartItem } from "@/types/products/cart";

interface ProductCardProps {
  product: CartItem;
  onAddToCart: (CartItem: CartItem) => void;
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
        <CardDescription className="flex flex-col text-muted-foreground gap-1">
          Rp {product.price.toLocaleString()}
          <span className="text-xs">Stok: {product.stok} pcs</span>
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
