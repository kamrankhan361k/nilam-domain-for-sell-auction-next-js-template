import React from "react";
import { FaCheck, FaGlobeAsia, FaLink } from "react-icons/fa";

const Features = () => {
  return (
    <section className="section-padding">
      <div className="container text-center">
        <div className="title-margin">
          <h2 className="uppercase">DOMAINS FEATURES</h2>

          <p className="inline-block max-w-xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            similique architecto quo minus vitae suscipit placeat, nihil ad
            earum.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div className="feature-item">
            <div className="icon-brand">
              <FaGlobeAsia />
            </div>
            <h3>Quality Seo Rankings</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit mollitia
              tenetur et veritatis.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon-brand">
              <FaLink />
            </div>
            <h3>500+ Backlinks</h3>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit mollitia
              tenetur et veritatis.
            </p>
          </div>
          <div className="feature-item">
            <div className="icon-brand">
              <FaCheck />
            </div>
            <h3>Short URL</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit mollitia
              tenetur et veritatis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
