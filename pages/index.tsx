import CardSection from "@/components/shared/cardSection";
import HeroSection from "@/components/shared/heroSection";

export default function Home() {
  return (
    <div>

        <HeroSection />

      <img src="/images/dashboard.png" alt="dashboard screen main page " className="w-full mb-4 rounded-xl border border-gray-500"/>

      <CardSection />

    </div>
  );
}
