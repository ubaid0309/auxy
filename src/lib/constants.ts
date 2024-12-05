import { PricingCardProps } from "@/components/PricingCard";
import Home from "@/components/icons/home";
import Category from "@/components/icons/category";
import Templates from "@/components/icons/cloud_download";
import Payment from "@/components/icons/payment";
import Logs from "@/components/icons/clipboard";
import Settings from "@/components/icons/settings";
import Workflows from "@/components/icons/workflows";

export const clients = [...new Array(10)].map((client, index) => ({
  href: `/${index + 1}.png`,
}));

export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail: "/p2.png",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail: "/p3.png",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail: "/p4.png",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail: "/p5.png",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail: "/p6.png",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail: "/p2.png",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail: "/p3.png",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail: "/p4.png",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail: "/p5.png",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail: "/p6.png",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail: "/p1.png",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail: "/p2.png",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail: "/p3.png",
  },
];

export const subscriptions: PricingCardProps[] = [
  {
    planTitle: "Hobby",
    planPrice: "0",
    planDescription:
      "Get a glimpse of wht out software is capable of. Just a heads up you'll never leave us after this!",
    planFeatures: [
      "3 free automations",
      "100 tasks per month",
      "Two-step Actions",
    ],
  },
  {
    planTitle: "Pro",
    planPrice: "19",
    planDescription:
      "Unlock the full potential of automation with advanced features and priority support. Perfect for professionals!",
    planFeatures: [
      "Unlimited automations",
      "10,000 tasks per month",
      "Multi-step Actions",
      "Priority support",
    ],
  },
  {
    planTitle: "Enterprise",
    planPrice: "49",
    planDescription:
      "Take automation to the next level with tailor-made solutions for large teams and complex workflows.",
    planFeatures: [
      "Unlimited automations",
      "100,000 tasks per month",
      "Custom Actions and Integrations",
      "Dedicated account manager",
      "Advanced analytics and reporting",
    ],
  },
];

export const menuOptions = [
  { name: "Dashboard", Component: Home, href: "/dashboard" },
  { name: "Workflows", Component: Workflows, href: "/workflows" },
  { name: "Settings", Component: Settings, href: "/settings" },
  { name: "Connections", Component: Category, href: "/connections" },
  { name: "Billing", Component: Payment, href: "/billing" },
  { name: "Templates", Component: Templates, href: "/templates" },
  { name: "Logs", Component: Logs, href: "/logs" },
];
