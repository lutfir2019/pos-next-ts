import React from "react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const CustomPagination: React.FC<{
  page: number;
  total: number;
  maxView?: number;
  onPageChange: (page: number) => void;
  className?: string;
}> = ({ page, total, onPageChange, maxView = 5, className }) => {
  // Calculate the number of visible page links
  const visiblePages = Math.min(maxView, total); // Show a maximum of 5 pages

  // Calculate the starting and ending page numbers for the visible range
  const startIndex = Math.max(1, Math.floor(page - (visiblePages - 1) / 2));
  const endIndex = Math.min(total, startIndex + visiblePages - 1);

  const pageLinks = Array.from(
    { length: endIndex - startIndex + 1 },
    (_, i) => (
      <PaginationItem
        key={startIndex + i}
        className={startIndex + i !== page ? "cursor-pointer" : ""}
      >
        <PaginationLink
          isActive={startIndex + i === page}
          onClick={() => {
            if (startIndex + i !== page) onPageChange(startIndex + i);
          }}
        >
          {startIndex + i}
        </PaginationLink>
      </PaginationItem>
    )
  );

  return (
    <>
      {page > 0 && (
        <Pagination className={className}>
          <PaginationContent>
            <PaginationItem className="cursor-pointer">
              <PaginationPrevious
                className={cn({
                  "text-secondary hover:bg-transparent hover:text-secondary":
                    page == 1,
                })}
                onClick={() => {
                  if (page > 1) onPageChange(page - 1);
                }}
              />
            </PaginationItem>

            {startIndex > 2 && (
              <PaginationItem className="cursor-pointer">
                <PaginationLink onClick={() => onPageChange(1)}>
                  1
                </PaginationLink>
              </PaginationItem>
            )}

            {startIndex > 3 && <PaginationEllipsis />}

            {pageLinks}

            {endIndex < total - 2 && <PaginationEllipsis />}

            {endIndex < total - 1 && (
              <PaginationItem className="cursor-pointer">
                <PaginationLink onClick={() => onPageChange(total)}>
                  {total}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem className="cursor-pointer">
              <PaginationNext
                className={cn({
                  "text-secondary hover:bg-transparent hover:text-secondary":
                    page == total,
                })}
                onClick={() => {
                  if (page < total) onPageChange(page + 1);
                }}
              />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      )}
    </>
  );
};

export default CustomPagination;
