"use client";

import { Button } from "@/components/ui/button";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-4">
      <div className="text-center">
        <h2 className="text-2xl font-bold">
          Something went wrong
        </h2>

        <p className="mt-2 text-muted-foreground">
          We couldn't load the users.
        </p>

        <Button
          onClick={() => reset()}
          className="mt-6"
        >
          Try Again
        </Button>
      </div>
    </main>
  );
}