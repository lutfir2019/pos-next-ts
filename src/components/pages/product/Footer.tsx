import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import React from "react";

import Pagination from "@/components/global/pagination/CustomPagination";
import { Button } from "@/components/ui/button";
import { CardFooter } from "@/components/ui/card";
import { useProduct } from "@/stores/product/useProduct";

const Footer: React.FC<{
  page: number;
  total: number;
  perPage: number;
  totalPages: number;
}> = ({ page, total, perPage, totalPages }) => {
  const productStore = useProduct();

  return (
    <CardFooter className="flex items-center">
      <div className="text-xs text-muted-foreground lg:whitespace-nowrap">
        Showing <strong>1-{perPage ?? 10}</strong> of{" "}
        <strong>{total ?? 0}</strong> products
      </div>
      <div className="w-full">
        <Pagination
          className="hidden md:flex justify-end"
          page={page}
          totalPages={totalPages}
          onPageChange={async (val) =>
            await productStore.get({
              per_page: 10,
              page: val,
              is_no_soft_loading: true,
            })
          }
        />
        {totalPages > 0 && (
          <div className="flex gap-2 justify-end text-base md:hidden">
            <button
              type="button"
              disabled={productStore.meta.pagination.page == 1}
              className="cursor-pointer disabled:text-secondary"
              onClick={async () =>
                await productStore.get({
                  per_page: 10,
                  page: productStore.meta.pagination.page - 1,
                  is_no_soft_loading: true,
                })
              }
            >
              <ChevronLeftCircle className="w-6 h-6" />
            </button>
            <Button
              size="sm"
              variant="outline"
              className="cursor-text hover:bg-transparent hover:text-muted-foreground hover:dark:text-primary"
            >
              <span>{productStore.meta.pagination.page}</span>
            </Button>
            <button
              type="button"
              disabled={
                productStore.meta.pagination.page ==
                productStore.meta.pagination.total_pages
              }
              className="cursor-pointer disabled:text-secondary"
              onClick={async () =>
                await productStore.get({
                  per_page: 10,
                  page: productStore.meta.pagination.page + 1,
                  is_no_soft_loading: true,
                })
              }
            >
              <ChevronRightCircle className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </CardFooter>
  );
};

export default Footer;
