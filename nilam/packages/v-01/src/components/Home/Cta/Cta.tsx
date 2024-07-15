import React from "react";

const Contact = () => {
  return (
    <section className="py-14 bg-gray-900">
      <div className="container grid gap-6 text-white lg:grid-cols-12  lg:text-left text-center">
        <div className="text-white lg:col-span-9">
          <h3 className="text-3xl my-2">
            Let Us Help You To Find A Solution That Meets Your Needs
          </h3>
          <p>
            Ut tellus dolor, dapibus eget, elementum vel, cursus eleifend, elit.
            Aenean auctor wisi et urna.
          </p>
        </div>
        <div className="lg:col-span-3  lg:text-right text-center">
          <a href="#hero" className="btn-brand py-3">
            Contact Us Now
          </a>
          <p>
            Or call <a href="tel:8850008080">8850008080</a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
