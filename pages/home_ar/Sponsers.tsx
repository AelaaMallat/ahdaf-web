import React from "react";

const sponsors = [
  { name: "3Poli Robotics", logo: "/images/sponsers/3Poli Robotics.png" },
  { name: "Al Motawset", logo: "/images/sponsers/al_motawset.jpeg" },
  { name: "Nahle Home", logo: "/images/sponsers/nahle_home.png" },
  { name: "SPEED MATH", logo: "/images/sponsers/SPEED MATH LOGO.png" },
  { name: "Tech Store", logo: "/images/sponsers/tech_store.png" },
  { name: "Jelly jungle", logo: "/images/sponsers/jelly jungle.png" }
];

const Sponsors: React.FC = () => {
  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-500 mb-8">
          داعمونا
        </h2>
        <div className="flex flex-wrap justify-center items-center text-black">
          {sponsors.map((sponsor, index) => (
            <div key={index} className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5 p-4">
              <div className="bg-white p-4 rounded-lg shadow-md">
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="mx-auto h-16"
                />
                <p className="text-center mt-2">{sponsor.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
