import React from "react";
import * as motion from "motion/react-client";
import { cn } from "@/lib/utils"; // Assuming this is where your cn utility is imported from

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      viewport={{ once: true }}
      className={cn(
        "py-10 px-6 border border-[#1c244c] shadow-custom-inset rounded-[32px] w-full",
        className // Additional classes passed from parent
      )}
    >
      {children}
    </motion.div>
  );
};

export default Card;
