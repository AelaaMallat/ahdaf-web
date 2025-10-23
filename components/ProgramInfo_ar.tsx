"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export interface SocialLink {
  name: string;
  url: string;
  icon: "linkedin" | "facebook" | "instagram" | "url";
}

export interface InfoCardProps {
  title: string;
  text: string;
  images: string[];
  links: SocialLink[];
}

export default function InfoCard({
  title,
  text,
  images,
  links,
}: InfoCardProps) {
  const mask_height = 508;
  const mask_width = 466;
  const outer_mask_height = 553;
  const outer_mask_width = 505;
  const [factor, setFactor] = useState(1);

  // Update factor based on screen size
  useEffect(() => {
    const handleResize = () => {
      // Check if window is defined (client-side)
      if (typeof window !== "undefined") {
        // Set factor to 1 for mobile (<768px) and 1.2 for larger screens
        setFactor(window.innerWidth < 768 ? 0.9 : 1.2);
      }
    };

    // Set initial factor
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const height = Math.round(mask_height * factor);
  const width = Math.round(mask_width * factor);

  const outer_width = Math.ceil(outer_mask_width * factor);
  const outer_height = Math.ceil(outer_mask_height * factor);
  return (
    <div
      className={`w-full min-h-[90vh] flex flex-col md:flex-row overflow-x-hidden`}
    >
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 mt-10 md:mt-40 p-8 md:p-14 order-2 md:order-1">
        <h1 className="text-cgreen text-2xl font-bold">{title}</h1>
        <p className="text-cblack text-d mt-2 leading-relaxed max-w-4xl text-justify">
          {text}
        </p>

        {/* Social Media Links */}
        <div className="mt-4">
          <h3 className="text-cblack font-bold text-lg">مواقع التواصل الاجتماعي</h3>
          <div className="flex gap-4 mt-2 flex-col">
            {links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                className="flex items-center gap-2 text-gray-800 hover:text-cgreen"
              >
                <Image
                  src={`/icons/${link.icon}.svg`}
                  alt={link.name}
                  className="w-8 h-8"
                />
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Right Side - Image with Overlay */}
      <div className="relative  w-full md:w-1/2  pt-20 md:pt-14 pb-8 flex flex-col items-center justify-center h-[100vh]] order-1 md:order-2">
        <div
          className="hidden rotate-[-180deg] md:block absolute inset-0 z-0"
          style={{
            background: "linear-gradient(90deg, white 50%, #102F5C 50%)",
          }}
        ></div>
        <div className="md:hidden absolute inset-0 z-0 bg-cblue"></div>
        <Image
          src="/images/mask2.svg"
          alt="Program mask overlay"
          width={width}  // Using the calculated width
          height={height}  // Using the calculated height
          className={`hidden rotate-[-180deg] lg:block md:absolute object-cover inset-0 z-10 pt-6 -translate-x-1/6 -translate-y-1/2 left-1/2 top-1/2`}
        />

        <div
          className={`relative flex flex-col items-center justify-center bg-white `}
          style={{
            width: `${outer_width}px`,
            height: `${outer_height}px`,
            maskImage: "url('/images/outer_mask.svg')",
            WebkitMaskImage: "url('/images/outer_mask.svg')",
            maskSize: "cover",
            WebkitMaskSize: "cover",
          }}
        >
          <div
            className={`relative max-h-[${height}px] max-w-[${width}px] flex justify-start items-center`}
            style={{
              width: `${width}px`,
              height: `${height}px`,
              maskImage: "url('/images/programs_mask.svg')",
              WebkitMaskImage: "url('/images/programs_mask.svg')",
              maskSize: "cover",
              WebkitMaskSize: "cover",
            }}
          >
            {/* Swiper Slider */}
            <Swiper
              loop
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              modules={[Autoplay]}
              className={`w-full h-full`}
            >
              {images.map((img, index) => (
                <SwiperSlide key={index}>
                  <Image
                    src={img}
                    alt={`Slide ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
}
