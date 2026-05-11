"use client";
import { Button } from "@/components/ui";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <div
      className="relative w-full h-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/404.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Button
        onClick={() => router.replace("/issues")}
        className="absolute cursor-pointer bottom-16 bg-[var(--color-primary)]"
      >
        Go to Home
      </Button>
    </div>
  );
};

export default NotFound;
