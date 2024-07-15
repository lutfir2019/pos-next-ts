import React from 'react';
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

interface Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  return (
    <Card className="w-full h-fit p-2">
      <Image src={product.imageUrl} alt={product.name} width={500} height={500} className="w-full h-48 object-cover rounded-t-lg" />
      <CardHeader>
        <CardTitle className="text-lg font-semibold">{product.name}</CardTitle>
        <CardDescription className="text-gray-500">Rp {product.price.toLocaleString()}</CardDescription>
      </CardHeader>
      <CardContent>
        <Button
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
