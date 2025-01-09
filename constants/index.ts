import { IntegrationIconProps, FeatureCardProps, CoreFeatureCardProps } from "@/types";

export const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Reviews", href: "#reviews" },
];

export const COMPANIES = [
  { path: "/assets/boltshift.svg", alt: "boltshift", height: 48, width: 170 },
  { path: "/assets/lightbox.svg", alt: "lightbox", height: 48, width: 170 },
  { path: "/assets/featherdev.svg", alt: "featherdev", height: 48, width: 170 },
  { path: "/assets/spherule.svg", alt: "spherule", height: 48, width: 170 },
  { path: "/assets/globalbank.svg", alt: "globalbank", height: 48, width: 170 },
];

export const LEST = [
  {
    logo: "/assets/running-star.svg",
    alt: "running-star",
    title: "Streamlined Workflow",
    description:
      "Effortlessly Collaborate Across Teams and Projects with CloudPeak&apos;s Seamless and Intuitive Collaboration Tools",
  },
  {
    logo: "/assets/running-star.svg",
    alt: "running-star",
    title: "Robust Data Security",
    description:
      "Protect Your Sensitive Information with Cutting-Edge Encryption and Security Measures solutions",
  },
];

export const INTEGRATION_ICONS: IntegrationIconProps[] = [
  {
    src: "/assets/discord.svg",
    alt: "Discord",
    height: 45,
    width: 45,
    background: "bg-red-700",
  },
  {
    src: "/assets/cloudpeak.svg",
    alt: "cloudpeak",
    height: 40,
    width: 40,
    background: "bg-[#1a233d]",
  },
  {
    src: "/assets/slack.svg",
    alt: "Slack",
    height: 40,
    width: 40,
    background: "bg-[#ff5733]",
  },
];

export const FEATURE_CARDS: FeatureCardProps[] = [
  {
    title: "Seamless Integration",
    description:
      "CloudPeak's Flexible Integration Options for Enhanced Efficiency.",
    metric: {
      value: "200%",
      label: "Faster Integration",
    },
    integrationIcons: INTEGRATION_ICONS,
  },
  {
    title: "Scalable Infrastructure",
    description:
      "CloudPeak's Scalable Infrastructure Can Handle Your Increasing Demands and Workloads.",
    metric: {
      value: "120k+",
      label: "Happy customers worldwide",
      growth: {
        value: 9.2,
        trend: "up",
      },
    },
    features: [
      {
        icon: "/assets/user.svg",
        title: "Scalable User Experiences",
        description: "Unique Needs and Preferences",
      },
      {
        icon: "/assets/support.svg",
        title: "24/7 Customer Support",
        description: "Dedicated Support Ready to Assist",
      },
    ],
  },
];

export const CORE_FEATURE_CARDS: CoreFeatureCardProps[] = [
  { img: '/assets/chart.svg', alt: 'chart', title: 'Effortless Onboarding Process Fast.', description: 'Discover Our Streamlined and User-Friendly Onboarding Process, Designed to Get You Up and Running Quickly and Efficiently.', metric: { value: '25%', label: 'Average revenue growth', growth: { value: 9.2, trend: "up" } } },
  { img: '/assets/weekly-data-spider.svg', alt: 'weekly-data-spider', title: 'Seamless Integration with Your Workflow.', description: 'Learn How CloudPeak Seamlessly Integrates with Your Existing Systems and Processes, Ensuring Minimal Maximum Efficiency.' },
  { img: '/assets/monthly-trends-graph.svg', alt: 'monthly-trends-graph', title: 'Expert Guidance Every Step of the Way.', description: 'Experience a Guided Onboarding Experience with CloudPeak, Where Our Expert Team Provides Personalized Support and Assistance.', metric: { value: '120k+', label: 'Happy customers worldwide', growth: { trend: 'up', value: 9.2 } } }
] 
