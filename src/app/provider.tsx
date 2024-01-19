"use client";

import { NextUIProvider } from "@nextui-org/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { useState } from "react";

// First method
// const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  //second method
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <NextUIProvider>
        {children}
        <ReactQueryDevtools initialIsOpen={false} />
      </NextUIProvider>
    </QueryClientProvider>
  );
}
