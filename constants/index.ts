import {
  IntegrationIconProps,
  FeatureCardProps,
  CoreFeatureCardProps,
  PlanData,
  TestimonialCardProps,
} from "@/types";

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
  {
    img: "/assets/chart.svg",
    alt: "chart",
    title: "Effortless Onboarding Process Fast.",
    description:
      "Discover Our Streamlined and User-Friendly Onboarding Process, Designed to Get You Up and Running Quickly and Efficiently.",
    metric: {
      value: "25%",
      label: "Average revenue growth",
      growth: { value: 9.2, trend: "up" },
    },
  },
  {
    img: "/assets/weekly-data-spider.svg",
    alt: "weekly-data-spider",
    title: "Seamless Integration with Your Workflow.",
    description:
      "Learn How CloudPeak Seamlessly Integrates with Your Existing Systems and Processes, Ensuring Minimal Maximum Efficiency.",
  },
  {
    img: "/assets/monthly-trends-graph.svg",
    alt: "monthly-trends-graph",
    title: "Expert Guidance Every Step of the Way.",
    description:
      "Experience a Guided Onboarding Experience with CloudPeak, Where Our Expert Team Provides Personalized Support and Assistance.",
    metric: {
      value: "120k+",
      label: "Happy customers worldwide",
      growth: { trend: "up", value: 9.2 },
    },
  },
];

export const PLANS: PlanData[] = [
  {
    title: "Basic",
    description: "For solo designer",
    popular: false,
    price: "$19",
    frequency: "per person, per month",
    features: [
      { icon: "/assets/checkmark.svg", text: "Comprehensive Dashboard" },
      { icon: "/assets/checkmark.svg", text: "Advanced Analytics" },
      { icon: "/assets/checkmark.svg", text: "User Management" },
      { icon: "/assets/checkmark.svg", text: "Custom Branding" },
      { icon: "/assets/checkmark.svg", text: "Priority Support" },
    ],
    buttonText: "Get Started",
  },
  {
    title: "Premium",
    description: "For solo designer",
    popular: true,
    price: "$39",
    frequency: "per person, per month",
    features: [
      { icon: "/assets/checkmark.svg", text: "Comprehensive Dashboard" },
      { icon: "/assets/checkmark.svg", text: "Advanced Analytics" },
      { icon: "/assets/checkmark.svg", text: "User Management" },
      { icon: "/assets/checkmark.svg", text: "Custom Branding" },
      { icon: "/assets/checkmark.svg", text: "Priority Support" },
    ],
    buttonText: "Get Started",
  },
  {
    title: "Standard",
    description: "For solo designer",
    popular: false,
    price: "$99",
    frequency: "per person, per month",
    features: [
      { icon: "/assets/checkmark.svg", text: "Comprehensive Dashboard" },
      { icon: "/assets/checkmark.svg", text: "Advanced Analytics" },
      { icon: "/assets/checkmark.svg", text: "User Management" },
      { icon: "/assets/checkmark.svg", text: "Custom Branding" },
      { icon: "/assets/checkmark.svg", text: "Priority Support" },
    ],
    buttonText: "Get Started",
  },
];

export const TESTIMONIALS: TestimonialCardProps[] = [
  {
    quote: `"CloudPeak has been a game-changer for our business. Their intuitive platform and excellent customer service have allowed us to streamline our operations and focus on what matters most. Highly recommended!"`,
    author: {
      name: "Sarah Taranian",
      designation: "Creative Director",
      avatarUrl: "/assets/user-1.png",
    },
  },
  {
    quote: `“I can't say enough good CloudP and their support team is incredibly responsive. They've helped us improve collaboration across our teams and achieve our business goals faster than we ever thought possible.”`,
    author: {
      name: "Emily Hudson",
      designation: "Art Director",
      avatarUrl: "/assets/user-2.png",
    },
  },
  {
    quote: `“Choosing CloudPeak was one of the best decisions we've made. Their platform has helped us centralize our data and streamline our processes, saving us time and money. Plus, their customer service team lp we need them.”`,
    author: {
      name: "John Depp",
      designation: "Researcher",
      avatarUrl: "/assets/user-3.png",
    },
  },
  {
    quote: `“We've tried other t, but none compare to CloudPeak. Their platform is user-friendly, reliable, and packed with features that have helped us improve productivity and efficiency across our organization.”`,
    author: {
      name: "David Megan",
      designation: "Engineer",
      avatarUrl: "/assets/user-4.png",
    },
  },
  {
    quote:
      "“We've been using CloudPeak for a few months now, and we're already seeing incredible results. Their platform has helped us automate repetitive tasks, streamline our workflows, and improve communication.”",
    author: {
      name: "Mark Logan",
      designation: "Analyst",
      avatarUrl: "/assets/user-5.png",
    },
  },
  {
    quote:
      "“CloudPeak has been instrumental in helping us achieve our business goals. Their platform is easy to use, and their customer service team is always there to help whenever we need them. Partner with CloudPeak.”",
    author: {
      name: "David Chen",
      designation: "Programmer",
      avatarUrl: "/assets/user-6.png",
    },
  },
];

export const FAQ = [
  {
    question: "What is CloudPeak?",
    answer:
      "CloudPeak is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity.",
  },
  {
    question: "What services does CloudPeak offer?",
    answer:
      "CloudPeak is a cloud-based platform that offers a suite of software as a service (SaaS) solutions designed to streamline business operations, enhance collaboration, and drive productivity.",
  },
  {
    question: "What are the core features of CloudPeak?",
    answer:
      "A down payment is the initial payment made by the homebuyer toward the purchase price of the property. The amount required for a down payment can vary depending on factors such as the type of mortgage and the lender&apos;s requirements",
  },
  {
    question: "How can CloudPeak help my business?",
    answer:
      "The amount required for a down payment can vary depending on factors such as the type of mortgage and the lender&apos;s requirements.",
  },
  {
    question: "Is CloudPeak suitable for businesses of all sizes?",
    answer:
      "A down payment is the initial payment made by the homebuyer toward the purchase price of the property. The amount required for a down payment can vary depending on factors such as the type of mortgage and the lender&apos;s requirements.",
  },
];

export const SOCIAL_LINKS = [
  { src: "/assets/facebook.svg", alt: "Facebook", height: 20, width: 20 },
  { src: "/assets/instagram.svg", alt: "Instagram", height: 20, width: 20 },
  { src: "/assets/x.svg", alt: "X (formerly Twitter)", height: 20, width: 20 },
  { src: "/assets/linkdin.svg", alt: "LinkedIn", height: 20, width: 20 },
];
