"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

type HorizontalScrollerProps = {
  children: React.ReactNode;
  className?: string;
};

function HorizontalScroller({ children, className }: HorizontalScrollerProps) {
  return (
    <motion.div
      className={cn(
        "-mx-4 flex snap-x gap-4 overflow-x-auto px-4 pb-4 [scrollbar-width:none] sm:-mx-6 sm:px-6 [&::-webkit-scrollbar]:hidden",
        className
      )}
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      viewport={{ once: true, margin: "-80px" }}
    >
      {children}
    </motion.div>
  );
}

export default HorizontalScroller;
