import React from "react";
import * as motion from "motion/react-client";
import { TESTIMONIALS } from "@/constants";
import TestimonialCard from "../testimonial-card";

const Testimonials = () => {
  return (
    <section
      className=" max-w-screen-xl mx-auto md:px-[90px] sm:px-[25px]"
      id="reviews"
    >
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="space-y-4 text-center mt-[120px] mb-[60px] sm:mt-[60px]"
      >
        <h1 className="text-h2 text-neutral-1 sm:text-2xl">
          Trusted by 14,000+ users
        </h1>
        <p className="text-body-16 text-neutral-2 tracking-tighter sm:text-body-14">
          Sharing Their Successes and Transformative Experiences with
          CloudPeak&apos;s Powerful SaaS Solutions
        </p>
      </motion.div>

      <div className="grid grid-cols-3 gap-6 md:grid-cols-2 sm:grid-cols-1">
        {TESTIMONIALS.map((testimonial, key) => (
          <TestimonialCard key={key} testimonial={testimonial} />
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
