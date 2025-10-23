"use client";
import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

interface InfoCardProps {
  data: {
    title: string;
    text: string;
    image: string;
    links: SocialLink[];
  };
}

const InfoCard: React.FC<InfoCardProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col md:flex-row ">

      {/* right Side - Text Content */}
      <div className="md:w-1/2 mt-20 p-14">
        <h1 className="text-[#009B0A] text-[36px] font-bold">{data.title}</h1>
        <p className="text-[#081E3D] text-[16px] mt-2 leading-relaxed w-[460px] text-justify">{data.text}</p>

        {/* Social Media Links */}
        <div className="mt-4">
          <h3 className="text-[#081E3D] font-bold text-[18px]">وسائل التواصل الاجتماعي</h3>
          <div className="flex gap-4 mt-2 flex-col">
            {data.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex items-center gap-2 text-gray-800 hover:text-green-600"
              >
                <img src={link.icon} alt={link.name} className="w-6 h-6" />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* left Side - Image with Overlay */}
      <div className="w-full md:w-1/2 flex justify-start">
      <img src="/images/Vector 22.png" className="w-[255.5px] h-[359.5px] absolute mt-[70px]" />
      <img src="/images/mask2.svg" className="h-[508px] w-[466px] mt-[160px] mr-[22px] absolute z-10" />
          <div
            className="relative max-w-sm md:max-w-full h-[508px] w-[466px] mt-[160px] mr-[22px]"
            style={{
              maskImage: "url('/images/Mask group.svg')",
              WebkitMaskImage: "url('/images/Mask group.svg')",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          >
            
            {/* Swiper Slider */}
            <Swiper
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className="w-full h-full"
            >
              <SwiperSlide>
                <Image
                  src={data.image}
                  alt="Slide 1"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={data.image}
                  alt="Slide 2"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
              <SwiperSlide>
                <Image
                  src={data.image}
                  alt="Slide 3"
                  fill
                  className="object-cover"
                />
              </SwiperSlide>
            </Swiper>
          </div>
          <img src="/images/Vector 20.png" className="w-[255.5px] h-[359.5px] absolute mt-[410px]" />
        </div>

    </div>
  );
};

// Sample Data
const sampleData: InfoCardProps["data"] = {
  title: "ESHRAQAT ELEM",
  text: "Eshraqat Elem Academy is dedicated to empowering vulnerable high school students from both private and public schools through a holistic approach to education. Our programs provide essential academic support, focusing on enhancing students' knowledge and skills to excel in their studies. In addition, we emphasize the development of soft skills such as communication, teamwork, and problem-solving. Recognizing the importance of informed decision-making for future success, Eshraqat Elem Academy also offers personalized university guidance, helping students navigate their options and choose paths that align with their aspirations. Through our comprehensive offerings, we aim to equip students with the tools they need to thrive academically and professionally.",
  image: "/images/eshraqat-elem.png", // Replace with actual image URL

  links: [
    { name: "Eshraqat Elem-إشراقة علم", url: "#", icon: "/icons/facebook-round_svgrepo.com.png" },
    { name: "Eshraqatelem", url: "#", icon: "/icons/instagram_svgrepo.com.png" },
  ],
};

const App: React.FC = () => {
  return (
    <div className="container mx-auto">
      <InfoCard data={sampleData} />
    </div>
  );
};

export default App;
