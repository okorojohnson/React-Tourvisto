import React from "react";
import { useNavigate } from "react-router-dom";
import { useDestination } from "../context/DestinationContext";

const FeaturedDestinations = () => {
  const navigate = useNavigate();
  const { getFeaturedDestinations } = useDestination();
  const destinations = getFeaturedDestinations().slice(0, 4); // Get first 4 destinations

  const handleCardClick = (destinationId) => {
    navigate(`/destination/${destinationId}`);
  };

  return (
    <section className="py-20 px-32 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h2 className="font-bold text-3xl leading-8 mb-2">Featured Travel</h2>
          <p className="text-base leading-6 text-gray-500">
            Check out some of the best places you can visit around the world.
          </p>
        </div>

        {/* Main Grid Container */}
        <div className="grid grid-cols-12 h-[600px] gap-4">
          {/* Left Column - Large Barcelona Card */}
          <div
            className="col-span-7 relative rounded-2xl overflow-hidden cursor-pointer group"
            onClick={() => handleCardClick(destinations[0].id)}
          >
            <img
              src={destinations[0].image}
              alt={destinations[0].name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4 bg-white rounded-full px-3 py-1">
              <span className="text-sm font-medium">
                {destinations[0].rating}
              </span>
            </div>
            <div className="absolute bottom-4 left-4 text-white">
              <h3 className="text-2xl font-bold mb-1">
                {destinations[0].name}
              </h3>
              <div className="flex items-center gap-2">
                <img
                  src="/icons/activity.svg"
                  alt="Activities"
                  className="w-4 h-4"
                />
                <span className="text-sm">
                  {destinations[0].activities} Activities
                </span>
              </div>
            </div>
          </div>

          {/* Right Column Grid */}
          <div className="col-span-5 grid grid-rows-3 gap-4">
            {destinations.slice(1, 4).map((destination) => (
              <div
                key={destination.id}
                className="relative rounded-2xl overflow-hidden cursor-pointer group"
                onClick={() => handleCardClick(destination.id)}
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute top-3 left-3 bg-white rounded-full px-2 py-0.5">
                  <span className="text-xs font-medium">
                    {destination.rating}
                  </span>
                </div>
                <div className="absolute bottom-3 left-3 text-white">
                  <h4 className="text-sm font-bold mb-0.5">
                    {destination.name}
                  </h4>
                  <div className="flex items-center gap-1">
                    <img
                      src="/icons/activity.svg"
                      alt="Activities"
                      className="w-3 h-3"
                    />
                    <span className="text-xs">
                      {destination.activities} Activities
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedDestinations;
