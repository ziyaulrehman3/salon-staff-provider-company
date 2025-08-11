import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Feedback from "@/components/Feedback";
import JoinUs from "@/components/JoinUs";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Hero />
      <About />
      <Services />
      <Feedback />
      <JoinUs />
    </div>
  );
}
