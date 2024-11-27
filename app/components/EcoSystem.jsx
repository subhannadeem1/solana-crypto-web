"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { ecosystemData } from "@/Constants";

const EcoSystem = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <div
      className=" xl:p-[130px] xs:p-5 md:p-16"
      id="EcoSystem"
      style={{
        backgroundImage: `url('/3d-space-background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {ecosystemData.map((item, index) => (
        <div
          key={index}
          className={`flex flex-col ${
            index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } mt-[60px] max-w-[1444px] mx-auto  `}
        >
          <div className="w-full lg:w-1/2 lg:pl-12   mr-[104px] flex flex-col  justify-center">
            <div className="bg-transparent border w-[120px] h-[46px] border-[#4F46E5] text-[#FFFFFF] font-normal text-sm py-3 text-center  rounded-full mb-4 ">
              {item.buttonLabel}
            </div>
            <h2 className="text-7xl xs:text-4xl md:text-4xl text-white font-bold mb-4">
              {item.title}
            </h2>
            <p className="text-[18px] text-white font-normal">
              {item.description}
            </p>
          </div>

          <div
            className="w-full lg:w-1/2 md:mt-5 xs:mt-5 flex justify-center mb-8 lg:mb-0"
            data-aos="fade-up"
          >
            <Image
              src={item.imageSrc}
              alt={item.altText}
              width={392}
              height={434}
              className="lg:w-[511px] xs:w-[335px] md:w-[706px] lg:h-[538px] xs:h-[320px] md:h-[320px]"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default EcoSystem;
