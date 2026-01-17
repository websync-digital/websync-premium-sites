"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        // Log the error to an error reporting service
        console.error("Client Error Boundary Caught:", error);
    }, [error]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center">
            <h2 className="text-2xl font-bold text-red-500 mb-4">Something went wrong!</h2>
            <p className="mb-4 text-gray-600 bg-gray-100 p-2 rounded max-w-lg overflow-auto">
                {error.message || "Unknown error"}
            </p>
            {error.digest && (
                <p className="text-xs text-gray-500 mb-4">Error Digest: {error.digest}</p>
            )}
            <Button
                onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                }
            >
                Try again
            </Button>
        </div>
    );
}
