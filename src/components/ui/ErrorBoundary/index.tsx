import { QueryErrorResetBoundary } from "@tanstack/react-query";
import type { ReactNode } from "react";
import ErrorFallback from "./ErrorFallback";
import { ErrorBoundary } from "react-error-boundary";
import Unfound from "../notfound";

export function ErrorBoundaryViewer({ children }: { children:ReactNode }) {
    return (
        <QueryErrorResetBoundary>
                {
                    ({ reset }) => (
                        <ErrorBoundary
                            onReset={reset} 
                            fallbackRender={({ error, resetErrorBoundary }:any) => {
                                if(error.status == 404) {
                                    return <Unfound message="Product Not Found" />
                                }
                                return <ErrorFallback error={error} resetErrorBoundary={resetErrorBoundary} />;
                            }}
                        >
                            { children }
                        </ErrorBoundary>
                    )
                }
            </QueryErrorResetBoundary>
    );
}