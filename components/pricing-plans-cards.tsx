import { FeatureItem } from "@/types";
import { ReactNode } from "react";
import Image from "next/image";

interface PricingPlanCardProps {
  className?: string;
  children?: ReactNode;
}

interface PricingPlanCardComponent extends React.FC<PricingPlanCardProps> {
  Header: React.FC<{ title: string; description: string }>;
  Price: React.FC<{ amount: string; frequency: string }>;
  FeatureList: React.FC<{ features: FeatureItem[] }>;
  Button: React.FC<{ text: string }>;
}

export const PricingPlanCard: PricingPlanCardComponent = ({
  children,
  className,
}) => {
  return (
    <div className={`p-8 flex flex-col gap-10 ${className}`}>{children}</div>
  );
};

PricingPlanCard.displayName = "PricingPlanCard";

PricingPlanCard.Header = ({ title, description }) => (
  <div>
    <p className="text-body-18 text-neutral-1">{title}</p>
    <p className="text-body-14 text-neutral-2">{description}</p>
    <hr className="mt-[20px] border-gray-600 mb-5" />
  </div>
);
PricingPlanCard.Header.displayName = "PricingPlanCard.Header";

PricingPlanCard.Price = ({ amount, frequency }) => (
  <div>
    <h2 className="text-h2-40 text-neutral-1">{amount}</h2>
    <p className="text-body-14 text-neutral-2">{frequency}</p>
  </div>
);
PricingPlanCard.Price.displayName = "PricingPlanCard.Price";

PricingPlanCard.FeatureList = ({ features }) => (
  <div className="flex flex-col gap-4">
    {features.map((feature, index) => (
      <div key={index} className="flex items-center gap-2">
        <Image src={feature.icon} alt="checkmark" height={9} width={13} />
        <p className="text-body-14 text-neutral-2">{feature.text}</p>
      </div>
    ))}
  </div>
);
PricingPlanCard.FeatureList.displayName = "PricingPlanCard.FeatureList";

PricingPlanCard.Button = ({ text }) => (
  <button className="py-4 px-6 rounded-[90px] bg-primary text-neutral-1 text-body-16 w-6/12 sm:w-full">
    {text}
  </button>
);
PricingPlanCard.Button.displayName = "PricingPlanCard.Button";
