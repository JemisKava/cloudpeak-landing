export interface MetricProps {
  value: string;
  label: string;
  growth?: {
    value: number;
    trend: "up" | "down";
  };
}

export interface FeatureProps {
  icon: string;
  title: string;
  description: string;
}

export interface IntegrationIconProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  background: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  metric: MetricProps;
  features?: FeatureProps[];
  integrationIcons?: IntegrationIconProps[];
}

export interface CoreFeatureCardProps {
  img: string,
  alt: string,
  title: string,
  description: string,
  metric?: MetricProps
}

export interface FeatureItem {
  icon: string;
  text: string;
}

export interface PlanData {
  title: string;
  description: string;
  price: string;
  frequency: string;
  features: FeatureItem[];
  buttonText: string;
}
