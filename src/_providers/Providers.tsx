"use client";
import { queryClient } from "@/_services/TanstackQuery_Client";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

function Providers({ children }: ProvidersProps) {
  const pathname = usePathname();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <ClerkProvider
        appearance={{
          theme: [dark],
        }}
      >
        {children}
      </ClerkProvider>
    </QueryClientProvider>
  );
}

export default Providers;
