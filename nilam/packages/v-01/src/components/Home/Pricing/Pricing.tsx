import React from "react";

const Pricing = () => {
  return (
    <section className="bg-gray-100 section-padding">
      <div className="container text-center">
        <div className=" title-margin max-w-xl mx-auto">
          <h2 className="uppercase">DOMAINS PRICING</h2>
          <p className="inline-block max-w-xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            similique architecto quo minus vitae suscipit placeat, nihil ad
            earum.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2">
          <div className="pricing-item">
            <h3>Domain.com</h3>
            <h4>
              $09.<sup>99</sup>
            </h4>
            <ul className="pricing-items">
              <li>Quality SEO Rankings</li>
              <li>Unique Domain Name</li>
              <li>450K Pageviews</li>
              <li>500+ Backlinks</li>
              <li>Strong Keywords</li>
              <li>Short URL</li>
            </ul>
            <button className="mt-6 btn-brand">Get Now</button>
          </div>
          <div className="pricing-item">
            <h3>Domain.net</h3>
            <h4>
              $19.<sup>99</sup>
            </h4>
            <ul className="pricing-items">
              <li>Unique Domain Name</li>
              <li>Quality SEO Rankings</li>
              <li>450K Pageviews</li>
              <li>500+ Backlinks</li>
              <li>Strong Keywords</li>
              <li>Short URL</li>
            </ul>
            <button className="mt-6 btn-brand">Get Now</button>
          </div>
          <div className="pricing-item">
            <h3>Domain.org</h3>
            <h4>
              $29.<sup>99</sup>
            </h4>
            <ul className="pricing-items">
              <li>Unique Domain Name</li>
              <li>450K Pageviews</li>
              <li>500+ Backlinks</li>
              <li>Strong Keywords</li>
              <li>Short URL</li>
              <li>Quality SEO Rankings</li>
            </ul>
            <button className="mt-6 btn-brand">Get Now</button>
          </div>
          <div className="pricing-item">
            <h3>Domain.biz</h3>
            <h4>
              $39.<sup>99</sup>
            </h4>
            <ul className="pricing-items">
              <li>Unique Domain Name</li>
              <li>Quality SEO Rankings</li>
              <li>450K Pageviews</li>
              <li>500+ Backlinks</li>
              <li>Strong Keywords</li>
              <li>Short URL</li>
            </ul>
            <button className="mt-6 btn-brand">Get Now</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
