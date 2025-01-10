"use client";
import Image from "next/image";
import React from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

interface AccordionProps {
  question: string;
  answer: string;
  index: number;
  isOpen: boolean;
  onToggle: (index: number) => void;
}

const accordionVariants: Variants = {
  initial: {
    height: 0,
    opacity: 0,
  },
  animate: {
    height: "auto",
    opacity: 1,
    transition: {
      height: {
        duration: 0.3,
        ease: "easeOut",
      },
      opacity: {
        duration: 0.25,
        delay: 0.1,
      },
    },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: {
      height: {
        duration: 0.3,
        ease: "easeIn",
      },
      opacity: {
        duration: 0.25,
      },
    },
  },
};

const iconVariants: Variants = {
  open: {
    rotate: 45,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
  closed: {
    rotate: 0,
    transition: {
      duration: 0.2,
      ease: "easeInOut",
    },
  },
};

const Accordion = ({
  question,
  answer,
  index,
  isOpen,
  onToggle,
}: AccordionProps) => {
  return (
    <div className="flex flex-col gap-2 cursor-pointer">
      <div
        className="flex items-center justify-between p-4 rounded-lg transition-colors"
        onClick={() => onToggle(index)}
      >
        <p className="text-body-18">{question}</p>
        <motion.div
          variants={iconVariants}
          animate={isOpen ? "open" : "closed"}
        >
          <Image
            src={"/assets/plus.svg"}
            height={24}
            width={24}
            alt="toggle accordion"
            className="transition-transform"
          />
        </motion.div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={accordionVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="overflow-hidden"
          >
            <div className="bg-neutral-3 rounded-2xl p-4">
              <p>{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Accordion;
