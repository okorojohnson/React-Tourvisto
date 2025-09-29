import React from "react";

const Hero = () => {
  return (
    <section className="ralative h-screan">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/hero.svg')" }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white to transition"></div>
        <div className=" relative py-44 z-10 max-w-7xl mx-16">
          <h1 className="text-7xl text-t_black py-6 font-bold w-[45%]">
            Plan Your Trip with Ease
          </h1>
          <p className=" text-t_paragraph py-6 w-[45%]">
            Customize your travel itinerary in minutes—pick your destination,
            set your preferences, and explore with confidence.
          </p>
          <button className="bg-t_blue rounded-2xl text-white hover: bg-t_blue/90 text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-300 ease-in-out px-10 py-5 min-w-[209px] ">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
