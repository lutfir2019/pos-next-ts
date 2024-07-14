import Pagination from "@/components/global/pagination/CustomPagination";
import { CardFooter } from "@/components/ui/card";
import { useProduct } from "@/stores/product/useProduct";
import { ChevronLeftCircle, ChevronRightCircle } from "lucide-react";
import React from "react";

const Footer: React.FC<{
  page: number;
  total: number;
  perPage: number;
}> = ({ page, total, perPage }) => {
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
          total={total}
          onPageChange={async (val) =>
            await productStore.getProduct({
              limit: 10,
              skip: val,
              is_no_soft_loading: true,
            })
          }
        />
        {page > 0 && (
          <div className="flex gap-2 justify-end text-base md:hidden">
            <button
              type="button"
              disabled={productStore.data.skip == 1}
              className="cursor-pointer disabled:text-secondary"
              onClick={async () =>
                await productStore.getProduct({
                  limit: 10,
                  skip: productStore.data.skip - 1,
                  is_no_soft_loading: true,
                })
              }
            >
              <ChevronLeftCircle className="w-5 h-5" />
            </button>
            <div className="flex justify-center items-center min-w-7 min-h-7 px-1 py-0.5 rounded-full border-2 border-primary">
              <span>{productStore.data.skip}</span>
            </div>
            <button
              type="button"
              disabled={productStore.data.skip == productStore.data.total}
              className="cursor-pointer disabled:text-secondary"
              onClick={async () =>
                await productStore.getProduct({
                  limit: 10,
                  skip: productStore.data.skip + 1,
                  is_no_soft_loading: true,
                })
              }
            >
              <ChevronRightCircle className="w-5 h-5" />
            </button>
          </div>
        )}
      </div>
    </CardFooter>
  );
};

export default Footer;
