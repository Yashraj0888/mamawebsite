import { cn } from "@/lib/utils";
import React from "react";

export function Container({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("w-full px-[5%] md:px-[8%]", className)}
      {...props}
    >
      {children}
    </div>
  );
}
