import { ContainerScroll } from "@/components/global/ContainerScrollAnimation";
import Navbar from "../components/global/Navbar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { InfiniteMovingCards } from "@/components/global/InfiniteMovingCards";
import { clients, products, subscriptions } from "@/lib/constants";
import { HeroParallax } from "@/components/global/HeroParallax";
import { LampComponent as Lamp } from "@/components/global/Lamp";

import PricingCard from "@/components/PricingCard";
export default function Home() {
  return (
    <main className="overflow-hidden flex items-center justify-center flex-col">
      <Navbar />
      <section className="h-screen w-full bg-neutral-950 rounded-md !overflow-visible relative flex flex-col items-center antialiased">
        <div className="absolute inset-0  h-full w-full items-center px-5 py-24  [background:radial-gradient(125%_125%_at_50%_10%,#000_35%,#223_100%)]"></div>
        <div className="flex flex-col mt-[-100px] md:mt-[-50px]">
          <ContainerScroll
            titleComponent={
              <div
                className="flex items-center flex-col
            "
              >
                <Button
                  size={"lg"}
                  className="p-8 mb-8 md:mb-0 text-2xl sm:w-fit border-t-2 rounded-full border-[#4D4D4D] bg-[#1F1F1F] hover:bg-white group transition-all flex items-center justify-center gap-4 hover:shadow-xl hover:shadow-neutral-500 duration-500"
                >
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-neutral-500 to-neutral-600 md:text-center font-sans group-hover:bg-gradient-to-r group-hover:from-black group-hover:to-black">
                    Start For Free Today
                  </span>
                </Button>
                <h1 className="text-5xl md:text-8xl bg-clip-text text-transparent bg-gradient-to-b from-white to-neutral-600 font-sans font-bold">
                  Automate Your Work With Auxy
                </h1>
              </div>
            }
          >
            <Image
              src="/temp-banner.png"
              alt="intro"
              width={1000}
              height={1000}
            />
          </ContainerScroll>
        </div>
      </section>
      <InfiniteMovingCards
        items={clients}
        className="md:mt-[18rem] mt-[-100px]"
        speed="slow"
      />
      <section>
        <HeroParallax products={products} />
      </section>
      <section className="mt-[-200px]">
        <Lamp />
        <div className="flex flex-wrap items-center justify-center flex-col md:flex-row gap-8 -mt-72">
          {/* <CardBody className="bg-gray-50 relative group/card dark:hover:shadow-2xl dark:hover:shadow-neutral-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-full md:!w-[350px] h-auto rounded-xl  p-6 border">
              <CardItem
                translateZ={50}
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                Hobby <h2 className="text-6xl">$0</h2>
              </CardItem>
              <CardItem
                translateZ={60}
                className="text-sm max-w-sm mt-2 text-neutral-500 dark:text-neutral-300"
              >
                Get a glimpse of wht out software is capable of. Just a heads up{" "}
                {"you'll"} never leave us after this!{" "}
                <ul className="my-4 flex flex-col gap-2">
                  <li className="flex items-center gap-2">
                    <CheckIcon />3 free automations
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    100 tasks per month
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckIcon />
                    Two-step Actions
                  </li>
                </ul>
              </CardItem>
              <div className="flex justify-between items-center mt-8">
                <CardItem
                  translateZ="20"
                  as="button"
                  className="px-4 py-2 rounded-xl text-xs font-normal dark:text-white"
                >
                  Try now →
                </CardItem>
                <CardItem
                  translateZ="20"
                  as="button"
                  className="px-4 py-2 rounded-xl dark:bg-white dark:text-black text-white text-xs font-bold"
                >
                  Get Started Now
                </CardItem>
              </div>
            </CardBody>
            <PricingCard
              planTitle="Hobby"
              planDescription="Get a glimpse of wht out software is capable of. Just a heads up you'll never leave us after this!"
              planPrice="0"
              planFeatures={[
                "3 free automations",
                "100 tasks per month",
                "Two-step Actions",
              ]}
            /> */}
          {subscriptions.map((subscription, index) => {
            return (
              <PricingCard
                key={index}
                planTitle={subscription.planTitle}
                planDescription={subscription.planDescription}
                planPrice={subscription.planPrice}
                planFeatures={subscription.planFeatures}
              />
            );
          })}
        </div>
      </section>
    </main>
  );
}
