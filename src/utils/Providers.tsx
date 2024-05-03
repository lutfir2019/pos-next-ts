"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import client from "./client";

interface Children {
  children: React.ReactNode;
}

export default function Provider({ children }: Readonly<Children>) {
  client.setDefaultOptions({
    queries: {
      refetchOnWindowFocus: false,
    },
  });
  return (
    <QueryClientProvider client={client}>
      <ReactQueryDevtools initialIsOpen={false} />
      {children}
    </QueryClientProvider>
  );
}
