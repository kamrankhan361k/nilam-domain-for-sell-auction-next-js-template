import Contact from "../components/Home/Cta/Cta";
import Features from "../components/Home/Features/Features";
import Hero from "../components/Home/Hero/Hero";
import Pricing from "../components/Home/Pricing/Pricing";
import Service from "../components/Home/Service/Service";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Features />
      <Pricing />
      <Contact />
      <Service />
    </Layout>
  );
}
