import * as motion from "motion/react-client";
import React from "react";
import Card from "./card";
import Image from "next/image";
import { CoreFeatureCardProps } from "@/types";
import { cn } from "@/lib/utils";
import { Metric } from "./metric";

const CoreFeature = ({
  features,
  index,
}: {
  features: CoreFeatureCardProps;
  index: number;
}) => {
  const { img, alt, description, title, metric } = features;
  return (
    <div
      className={cn(
        "flex items-center md:flex-col md:gap-y-8 sm:flex-col sm:gap-y-8 gap-x-1",
        index % 2 !== 0 && "flex-row-reverse"
      )}
    >
      <Card>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, ease: "easeInOut" }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="relative w-full aspect-video">
            <Image
              src={img}
              alt={alt}
              fill
              className="object-contain"
              priority
            />
          </div>
          {metric && (
            <div className="bg-card mt-4 rounded-2xl mx-16 sm:mx-4">
              <Metric {...metric} />
            </div>
          )}
        </motion.div>
      </Card>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, ease: "easeInOut" }}
        viewport={{ once: true, amount: 0.3 }}
        className="w-full"
      >
        <div
          className={cn(
            "ml-16 space-y-4 sm:ml-0",
            index % 2 !== 0 && "lg:ml-0 mr-16"
          )}
        >
          <h2 className="text-h2-40 text-neutral-1">{title}</h2>
          <p className="text-body-16 text-neutral-2">{description}</p>
          <button className="px-8 py-4 bg-primary hover:bg-[#0045DD] text-white font-medium rounded-lg shadow-lg transition-all group flex items-center gap-2">
            Learn More
            <Image
              src="/assets/arrow.svg"
              alt="arrow"
              width={16}
              height={16}
              className="group-hover:translate-x-1 transition-transform"
            />
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default CoreFeature;
