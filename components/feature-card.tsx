import { FeatureCardProps } from "@/types";
import Image from "next/image";
import { Metric } from "./metric";
import { FeatureList } from "./feature-list";
import Card from "./card";
import { cn } from "@/lib/utils";

export function FeatureCard({
  title,
  description,
  metric,
  features,
  integrationIcons,
}: FeatureCardProps) {
  return (
    <Card>
      <div className="relative flex flex-col flex-nowrap gap-2.5 h-full w-full mx-[15px] my-1  overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 ">
          <Image
            src="/assets/square-block.png"
            alt="Background pattern"
            fill
            className="object-cover -mt-36"
          />
        </div>

        <div className="relative z-10">
          <div className="text-start">
            <h2 className="text-h3 text-neutral-1 mb-2">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
          </div>

          <Metric {...metric} />
          {integrationIcons && (
            <>
              <div className="flex items-center justify-start gap-4 mt-6 p-4">
                {integrationIcons.map(({ width, src, height, alt }, index) => (
                  <div
                    key={index}
                    className={cn(
                      "py-[23px] px-[17px] rounded-3xl object-contain",
                      index === 0 && "bg-[#5964f6]",
                      index === 1 && "bg-[#1a233d]",
                      index === 2 && "bg-[#ffffff]"
                    )}
                  >
                    <Image src={src} alt={alt} width={width} height={height} />
                  </div>
                ))}
              </div>
              <p className="p-4 text-start text-body-16 text-neutral-2">
                Our mission is to empower individuals and organizations to
                unleash their.
              </p>
            </>
          )}
          {features && <FeatureList features={features} />}
        </div>
      </div>
    </Card>
  );
}
