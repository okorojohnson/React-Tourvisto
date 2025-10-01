import React from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import FeaturedDestinations from "../components/FeaturedDestinations";
import HandpickTrips from "../components/HandpickTrips";

const Homepage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <FeaturedDestinations />
      <HandpickTrips />
    </div>
  );
};

export default Homepage;
