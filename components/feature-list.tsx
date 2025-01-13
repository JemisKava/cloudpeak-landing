import { FeatureProps } from "@/types";
import Image from "next/image";

export function FeatureList({ features }: { features: FeatureProps[] }) {
  return (
    <div className="mt-6 space-y-4 p-4">
      {features.map((feature, index) => (
        <div
          key={index}
          className="flex items-center gap-4 rounded-lg p-4 shadow-md bg-[#1a243d] sm:flex-col sm:items-start"
        >
          <div className="flex h-10 w-10 items-center justify-center border border-white rounded-md bg-[#31364E]">
            <Image
              src={feature.icon}
              alt={feature.title}
              height={20}
              width={20}
            />
          </div>
          <div className="text-start  space-y-1">
            <h3 className="text-body-14 font-medium text-neutral-1">
              {feature.title}
            </h3>
            <p className="text-body-14 text-neutral-2">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
