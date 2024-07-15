import React from "react";
import { FaChartArea, FaCheck, FaGlobeAmericas, FaLink } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="bg-gray-800 section-padding">
      <div className="container">
        <div className="pt-16 title-margin text-brand">
          <p className="">OFFER FOR SALE</p>

          <h2 className="mt-4 text-4xl">EXAMPLE.COM</h2>
        </div>
        <div className="grid gap-6 leading-relaxed lg:grid-cols-4 md:grid-cols-2">
          <div className="example-item">
            <div className="mb-4 text-4xl hero-icon">
              <FaGlobeAmericas />
            </div>
            <h4 className="mb-2 text-brand">QUALITY SEO RANKINGS</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis ex, obcaecati. Deserunt maxime facilis doloremque
              fugiat.
            </p>
          </div>
          <div className="example-item">
            <div className="mb-4 text-4xl hero-icon">
              <FaLink />
            </div>
            <h4 className="mb-2 text-brand">500+ BACKLINKS</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis ex, obcaecati. Deserunt maxime facilis doloremque
              fugiat.
            </p>
          </div>
          <div className="example-item">
            <div className="mb-4 text-4xl hero-icon">
              <FaCheck />
            </div>
            <h4 className="mb-2 text-brand">SHORT URL</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis ex, obcaecati. Deserunt maxime facilis doloremque
              fugiat.
            </p>
          </div>
          <div className="example-item">
            <div className="mb-4 text-4xl hero-icon">
              <FaChartArea />
            </div>
            <h4 className="mb-2 text-brand">50,000 ALEXA RANK</h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis ex, obcaecati. Deserunt maxime facilis doloremque
              fugiat.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
