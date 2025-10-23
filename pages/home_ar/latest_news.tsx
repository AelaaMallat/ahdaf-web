import React from "react";
const AhdafNews: React.FC = () => {
  return (
    <section
      style={{
        backgroundImage: "url('/images/latest_news.jpg')",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", // Ensures the image covers the entire section
        backgroundPosition: "center", // Centers the image
      }}
    >
      <div
        className="w-full h-40 items-center justify-center absolute"
        style={{
          WebkitMask: `url(/images/seperator.svg)`,
          WebkitMaskRepeat: "repeat-x",
          WebkitMaskPosition: "center",
          WebkitMaskSize: "auto 100%",
          mask: `url(/images/seperator.svg)`,
          maskRepeat: "repeat-x",
          maskPosition: "center",
          maskSize: "auto 100%",
          backgroundColor: "#102F5C",
          imageRendering: "crisp-edges",
        }}
      ></div>
      <div className="overflow-x-hidden">
        <div className="p-8 pt-48  md:px-28 right-0 max-w-xl bg-white/80">
          <h1 className="text-center md:text-right text-green-500 font-bold text-4xl ">
            آخر الأخبار
          </h1>
          <h3 className="text-xl font-bold text-[#102F5C] mt-8">
            AHDAF CHARITY ENDOWMENT
          </h3>
          <p className="text-[#041231] mt-2 text-justify">
            Ahdaf Charity Endowment successfully hosted its Annual Ramadan
            Gathering on Sunday, February 23, 2025, at Dar Al Amar Restaurant,
            bringing together a distinguished group of business leaders and key
            supporters.
          </p>
          <p className="text-[#041231] mt-2 text-justify">
            The event served as a platform to introduce Ahdaf’s upcoming Ramadan
            campaign “ATA’UKA ALLAMANI”, emphasizing the importance of
            collective efforts in supporting our programs. Additionally, it
            provided an opportunity to reflect on the achievements and
            initiatives undertaken over the past year, showcasing the impact of
            community-driven projects and partnerships.
          </p>
          <p className="text-[#041231] mt-2 text-justify">
            During the gathering, attendees engaged in discussions on
            sustainable giving, social responsibility, and future collaboration
            opportunities, reinforcing Ahdaf’s commitment to creating long-term
            positive change.
          </p>

        </div>
      </div>
    </section>

  );
};

export default AhdafNews;
