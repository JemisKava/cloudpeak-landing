import { FeatureProps } from "@/types";
import Image from "next/image";

export function FeatureList({ features }: { features: FeatureProps[] }) {
  return (
    <div className="space-y-4 mt-6">
      {features.map((feature, index) => (
        <div key={index} className="flex items-center gap-4 rounded-lg p-4">
          <div className="flex h-8 w-8 items-center justify-center">
            <Image
              src={feature.icon}
              alt={feature.title}
              height={40}
              width={40}
            />
          </div>
          <div className="space-y-1">
            <h3 className="font-medium">{feature.title}</h3>
            <p className="text-sm text-gray-500">{feature.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
