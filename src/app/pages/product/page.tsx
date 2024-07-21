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
import NoData from "@/components/global/table/NoData";

const Page: NextPage = () => {
  const productStore = useProduct();

  useEffect(() => {
    useProduct.getState().getProduct({ limit: 10, skip: 1 });
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
            {productStore.data?.length > 0 ? <TableProduct /> : <NoData />}
          </CardContent>
          <Footer
            page={productStore.meta.pagination.page}
            total={productStore.meta.pagination.total_pages}
            perPage={productStore.meta.pagination.per_page}
          />
        </Card>
      </TabsContent>
    </Tabs>
  );
};

export default Page;
