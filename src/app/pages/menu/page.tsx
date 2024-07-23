"use client";

import { FieldArray, Form, Formik } from "formik";
import { NextPage } from "next";

import Cart from "@/components/pages/menu/Cart";
import ProductCard from "@/components/pages/menu/ProductCard";
import { useProduct } from "@/stores/product/useProduct";
import { useEffect } from "react";

interface CartItem {
  id: number;
  name: string;
  quantity: number;
  price: number;
  note?: string;
  imageUrl?: string;
}

const Page: NextPage = () => {
  const productStore = useProduct();

  useEffect(() => {
    productStore.get({ page: 1, per_page: 20 });
  }, []);

  const products = productStore.data?.map((item) => ({
    id: item.id,
    name: item.name,
    price: item.price_selling,
    note: "",
    imageUrl: item.file,
  })) as CartItem[];

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
                    <div className="h-svh overflow-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-2 w-full content-start">
                      {products?.map((product) => (
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
