"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function GlobalError({
    error,
    reset,
}: {
    error: Error & { digest?: string };
    reset: () => void;
}) {
    useEffect(() => {
        console.error("Global Error Caught:", error);
    }, [error]);

    return (
        <html>
            <body>
                <div className="flex flex-col items-center justify-center min-h-screen p-4 text-center bg-white text-black">
                    <h2 className="text-2xl font-bold text-red-600 mb-4">Critical Application Error</h2>
                    <p className="mb-4 text-gray-800 bg-gray-100 p-4 rounded max-w-lg overflow-auto border border-gray-300">
                        {error.message || "An unknown critical error occurred."}
                    </p>
                    <Button onClick={() => reset()}>Try again</Button>
                </div>
            </body>
        </html>
    );
}
