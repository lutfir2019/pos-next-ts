"use client";

import Cart from "@/components/pages/menu/Cart";
import ProductCard from "@/components/pages/menu/ProductCard";
import { NextPage } from "next";
import { FieldArray, Form, Formik } from "formik";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  note?: string;
  imageUrl?: string;
}

const Page: NextPage = () => {
  const products = [
    {
      id: 1,
      name: "Milkshake choco with oreo",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 2,
      name: "Pineapple juice with pandan leaf",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 3,
      name: "Indomie noddles extra spicy",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 4,
      name: "Creamy donuts with sugar topping",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 5,
      name: "Mix fruites 3 variant",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 6,
      name: "Chicken roast with spinach",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 7,
      name: "Sweet maracons",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 8,
      name: "Big burger extra brisket",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
    {
      id: 9,
      name: "Waffle with strawberry",
      price: 35000,
      note: "",
      imageUrl: "/image/orange.jpg",
    },
  ] as CartItem[];

  const initialValues = { cartItems: [] as CartItem[] };

  const findItemById = (cartItems: CartItem[], id: number) => {
    return cartItems?.find(({ id: itemId }) => itemId === id);
  };

  const findIdxItem = (cartItems: CartItem[], item: CartItem) => {
    return cartItems?.indexOf(item);
  };

  const mapItemByIdx = (cartItems: CartItem[], item: CartItem) => {
    const new_data = cartItems?.find((data) => data.id === item.id);
    return {
      ...new_data,
      quantity: new_data?.quantity ? new_data?.quantity + 1 : 1,
    };
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => (
        <Form className="w-full">
          <FieldArray
            name="cartItems"
            render={({ push, replace, remove }) => {
              const handleAddToCart = (product: CartItem) => {
                const existingItem = findItemById(values.cartItems, product.id);

                if (existingItem) {
                  const idx = findIdxItem(values.cartItems, existingItem);
                  replace(idx, mapItemByIdx(values.cartItems, product));
                } else {
                  const newItem = { ...product, quantity: 1 };
                  push(newItem);
                }
              };
              return (
                <div className="container mx-auto p-4">
                  <h1 className="text-2xl font-semibold text-center mb-4">
                    POS Application
                  </h1>
                  <div className="flex gap-3 flex-col md:flex-row">
                    <div className="h-svh overflow-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full content-start">
                      {products.map((product) => (
                        <ProductCard
                          key={product.id}
                          product={product}
                          onAddToCart={handleAddToCart}
                        />
                      ))}
                    </div>
                    <Cart
                      items={values.cartItems}
                      onUpdateQuantity={replace}
                      onRemoveItem={remove}
                    />
                  </div>
                </div>
              );
            }}
          />
        </Form>
      )}
    </Formik>
  );
};

export default Page;
