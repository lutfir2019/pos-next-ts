"use client";

import { useState } from "react";
import Cart from "@/components/pages/menu/Cart";
import ProductCard from "@/components/pages/menu/ProductCard";
import { NextPage } from "next";

const Page: NextPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Milkshake choco with oreo", quantity: 2, price: 35000 },
    {
      id: 2,
      name: "Pineapple juice with pandan leaf",
      quantity: 1,
      price: 35000,
    },
  ]);

  const products = [
    {
      id: 1,
      name: "Milkshake choco with oreo",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 2,
      name: "Pineapple juice with pandan leaf",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 3,
      name: "Indomie noddles extra spicy",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 4,
      name: "Creamy donuts with sugar topping",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 5,
      name: "Mix fruites 3 variant",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 6,
      name: "Chicken roast with spinach",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 7,
      name: "Sweet maracons",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 8,
      name: "Big burger extra brisket",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 9,
      name: "Waffle with strawberry",
      price: 35000,
      imageUrl: "/image/orange.jpg",
    },
  ];

  const handleCheckout = () => {
    alert("Checkout successful!");
    setCartItems([]);
  };

  const handleRemoveItem = (id: number) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handleUpdateQuantity = (id: number, quantity: number) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const handleUpdateNote = (id: number, note: string) => {
    setCartItems(
      cartItems.map((item) => (item.id === id ? { ...item, note } : item))
    );
  };

  const handleAddToCart = (product: {
    id: number;
    name: string;
    price: number;
  }) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold text-center mb-4">
        POS Application
      </h1>
      <div className="flex gap-5 flex-col md:flex-row">
        <div className="h-svh overflow-auto grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-4 w-full content-start">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        <Cart
          items={cartItems}
          onCheckout={handleCheckout}
          onRemoveItem={handleRemoveItem}
          onUpdateQuantity={handleUpdateQuantity}
          onUpdateNote={handleUpdateNote}
        />
      </div>
    </div>
  );
};

export default Page;
