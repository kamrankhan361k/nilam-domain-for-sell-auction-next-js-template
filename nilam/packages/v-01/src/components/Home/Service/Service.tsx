import React from "react";
import { FaShieldAlt } from "react-icons/fa";

const Service = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <div className=" text-center title-margin">
          <h2 className="text-4xl uppercase">OUR SERVICES</h2>

          <p className="inline-block max-w-xl mt-4">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum
            similique architecto quo minus vitae suscipit placeat, nihil ad
            earum.
          </p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3 md:grid-cols-2">
          <div className="service-item">
            <div className="icon-brand">
              <FaShieldAlt />
            </div>
            <h3>Whois Guard</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis ex, obcaecati. Deserunt maxime facilis doloremque
              fugiat.
            </p>
            <button className="mt-6 btn-brand">Read More</button>
          </div>
          <div className="service-item">
            <div className="icon-brand">
              <FaShieldAlt />
            </div>
            <h3>Whois Guard</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis ex, obcaecati. Deserunt maxime facilis doloremque
              fugiat.
            </p>
            <button className="mt-6 btn-brand">Read More</button>
          </div>
          <div className="service-item">
            <div className="icon-brand">
              <FaShieldAlt />
            </div>
            <h3>Whois Guard</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Veritatis ex, obcaecati. Deserunt maxime facilis doloremque
              fugiat.
            </p>
            <button className="mt-6 btn-brand">Read More</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
