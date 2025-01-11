"use client";

import React, { useState } from "react";
import Accordion from "../accordion";
import { FAQ } from "@/constants";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="h-screen max-w-screen-xl mx-auto mt-[120px] md:mx-[120px] sm:mx-[30px]">
      <div className="w-full flex justify-between gap-6 md:flex-col md:gap-6 sm:flex-col sm:gap-6">

        {/* Left content: Title and description */}
        <div className="w-6/12 md:w-full md:text-center space-y-4 sm:w-full sm:text-center">
          <h2 className="text-neutral-1 text-h2 tracking-wide">
            Common Questions
          </h2>
          <p className="text-body-16 text-neutral-2">
            Haven’t found what you’re looking for? Contact us
          </p>
        </div>

        {/* Right content: Accordion container */}
        <div className="w-6/12 mb-16 md:w-full sm:w-full">
          {FAQ.map((f, index) => (
            <Accordion
              key={index}
              question={f.question}
              answer={f.answer}
              index={index}
              isOpen={openIndex === index}
              onToggle={handleToggle}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Faq;
