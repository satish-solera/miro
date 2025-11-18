import Image from "next/image";
import { Hero } from "./components/hero";
import { Company } from "./components/company";
import { Section } from "./components/section/section";
import { WorkSection } from "./components/section/work-section";
import { ConnectSection } from "./components/section/connect-section";
import { ThirdFeature } from "./components/feature/feature-third";
import { FourFeature } from "./components/feature/feature-four";
import { FifthFeature } from "./components/feature/feature-fifth";
import { SixFeature } from "./components/feature/feature-six";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Company />
      <Section />
      <WorkSection />
      <ConnectSection />
      <ThirdFeature />
      <FourFeature />
      <FifthFeature />
      <SixFeature />
    </div>
  );
}
