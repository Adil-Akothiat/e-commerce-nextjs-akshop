"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactQueryProviderProps } from "./types";
import { ErrorBoundaryViewer } from "@/components/ui/ErrorBoundary";

export default function ReactQueryProvider({ children }: ReactQueryProviderProps) {
    const queryClient = new QueryClient();

    return (
        <QueryClientProvider client={queryClient}>
            <ErrorBoundaryViewer  children={children} />
        </QueryClientProvider>
    );
}