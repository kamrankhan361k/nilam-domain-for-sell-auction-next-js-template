import Contact from "../components/Home/Cta/Cta";
import Hero from "../components/Home/Hero/Hero";
import Offer from "../components/Home/Offer/Offer";
import Pricing from "../components/Home/Pricing/Pricing";
import Service from "../components/Home/Service/Service";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Offer />
      <Pricing />
      <Contact />
      <Service />
    </Layout>
  );
}
