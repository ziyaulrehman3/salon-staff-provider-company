import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Feedback from "@/components/Feedback";
import JoinUs from "@/components/JoinUs";
import Head from "next/head";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <Head>
        <title>Salon Staff Provider</title>
        <meta name="description" content="Salon Staff Provider" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <Hero />
      <About />
      <Services />
      <Feedback />
      <JoinUs />
    </div>
  );
}
