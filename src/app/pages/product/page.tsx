"use client";

import { NextPage } from "next";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent } from "@/components/ui/tabs";
import { useProduct } from "@/stores/product/useProduct";
import { useEffect } from "react";
import Header from "@/components/pages/product/Header";
import TableProduct from "@/components/pages/product/Table";
import Footer from "@/components/pages/product/Footer";

const Page: NextPage = () => {
  const productStore = useProduct();

  useEffect(() => {
    productStore.getProduct({ limit: 10, skip: 1 });
  }, []);

  return (
    <Tabs defaultValue="all">
      <Header />
      <TabsContent value="all">
        <Card x-chunk="dashboard-06-chunk-0">
          <CardHeader>
            <CardTitle>Produk</CardTitle>
            <CardDescription>
              Kelola produk Anda dan lihat kinerja penjualannya.
            </CardDescription>
          </CardHeader>
          <CardContent>
            {productStore.data?.products?.length > 0 ? (
              <TableProduct />
            ) : (
              <div>Data tidak di temukan</div>
            )}
          </CardContent>
          <Footer
            page={productStore.data.skip}
            total={productStore.data.total}
            perPage={productStore.data.limit}
          />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
