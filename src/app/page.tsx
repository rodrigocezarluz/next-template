import Image from "next/image";
import { poppins } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export default function Home() {
  return (
    <main className="bg-primary gap-4 w-full flex items-center justify-center p-24">
      <Image
        className=""
        src="/next.svg"
        alt="Next.js Logo"
        width={180}
        height={37}
        priority
      />
      <h1
        className={cn(
          "font-semibold text-5xl drop-shadow-md",
          poppins.className
        )}
      >
        App Template
      </h1>
    </main>
  );
}
