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
  totalPages: number;
  maxView?: number;
  onPageChange: (page: number) => void;
  className?: string;
}> = ({ page, onPageChange, maxView = 5, className, totalPages }) => {
  // Calculate the number of visible page links
  const visiblePages = Math.min(maxView, totalPages); // Show a maximum of 5 pages

  // Calculate the starting and ending page numbers for the visible range
  const startIndex = Math.max(1, Math.floor(page - (visiblePages - 1) / 2));
  const endIndex = Math.min(totalPages, startIndex + visiblePages - 1);

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
      {totalPages > 0 && (
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

            {endIndex < totalPages - 2 && <PaginationEllipsis />}

            {endIndex < totalPages - 1 && (
              <PaginationItem className="cursor-pointer">
                <PaginationLink onClick={() => onPageChange(totalPages)}>
                  {totalPages}
                </PaginationLink>
              </PaginationItem>
            )}

            <PaginationItem className="cursor-pointer">
              <PaginationNext
                className={cn({
                  "text-secondary hover:bg-transparent hover:text-secondary":
                    page == totalPages,
                })}
                onClick={() => {
                  if (page < totalPages) onPageChange(page + 1);
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
