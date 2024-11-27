"use client";
import Image from "next/image";
import React from "react";
import CurruncyImg from "@/public/Rectangle8.png";
import digitalArt from "@/public/digital-art.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const BusinessUtility = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
    });
  }, []);
  return (
    <>
      <div
        className="h-full w-full xl:h-[958px] pb-[95px]"
        id="BusinessUtility"
        style={{
          backgroundImage: `url('/utility-background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="max-w-[1444px] mx-auto">
          <div className="lg:pl-[237px] lg:pr-[288px] lg:pt-[169px] xs:pt-[75px] md:pt-[48px]  flex flex-col items-center text-center">
            <div className="bg-transparent border w-[159px] h-[46px] border-[#4F46E5] font-normal text-sm py-3 text-center  text-[#FFFFFF] rounded-full mb-4 ">
              BUSINESS UTILITY
            </div>
            <h2 className="text-7xl md:text-3xl xs:text-3xl text-white font-bold mb-4">
              MOTIV8 UTILITY
            </h2>
            <p className="text-[18px] text-white font-normal px-7">
              Motivation Nation represents the heart of Motiv8, a vibrant
              community where engagement transcends mere participation, evolving
              into active co-creation and innovation.
            </p>
          </div>

          <div className="xl:w-[1180px] lg:h-[360px] xl:mx-[130px] xs:mx-4 md:mx-7 mt-[46px]  rounded-[20px]  gradient-border-right ">
            <div className="text-white flex flex-col lg:flex-row lg:items-center">
              {/* Image: Show below boxes for xs and md screens, and on the left for large screens */}
              <div className="lg:block  order-2 lg:order-1    mb-8 lg:mb-0 flex justify-center">
                <Image
                  src={digitalArt}
                  alt="Astronaut Image"
                  className=" lg:w-[402px]  lg:h-[302px] xs:w-[321px] xs:h-[235px] md:w-[381px] md:h-[265px] "
                />
              </div>

              <div className="grid grid-cols-2 gap-6 my-6 mx-auto md:w-[80%] xs:w-[95%] lg:flex lg:ml-[-80px] lg:my-20 lg:order-2">
                <div className="text-center xl:w-[195px] xl:h-[198px] py-10">
                  <h3 className="xl:text-5xl text-3xl font-semibold">12%</h3>
                  <p className="text-sm xl:text-sm font-medium">INCREASE</p>
                  <p className="text-base font-normal mt-3 text-gray-400">
                    Employees Retention
                  </p>
                </div>
                <div className="text-center  xl:w-[195px] xl:h-[198px] py-10">
                  <h3 className="xl:text-5xl text-3xl font-semibold">10%</h3>
                  <p className="text-sm xl:text-sm font-medium">INCREASE</p>
                  <p className="text-base font-normal mt-3 text-gray-400">
                    Employee Productivity
                  </p>
                </div>
                <div className="text-center xl:w-[195px] xl:h-[198px] py-10">
                  <h3 className="xl:text-5xl text-3xl font-semibold">16%</h3>
                  <p className="text-sm xl:text-sm font-medium">INCREASE</p>
                  <p className="text-base font-normal mt-3 text-gray-400">
                    Customer Retention
                  </p>
                </div>
                <div className="text-center xl:w-[195px] xl:h-[198px] py-10">
                  <h3 className="xl:text-5xl text-3xl font-semibold">23%</h3>
                  <p className="text-sm xl:text-sm font-medium">INCREASE</p>
                  <p className="text-base font-normal mt-3 text-gray-400">
                    Company Profits
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* about us section */}
      <div className="w-full max-w-[1444px] mx-auto" id="TOKENOMICS">
        <div className="flex flex-col   mt-[60px] lg:flex-row xl:px-[130px] md:px-[48px] xs:px-[20px] lg:pb-[192px] xs:pb-[49px] md:pb-[49px] items-center  ">
          <div className="lg:w-[565px] w-full h-full flex flex-col justify-center ">
            <div className="bg-transparent border w-[120px] h-[46px] border-[#4F46E5] text-[#FFFFFF] font-normal text-sm py-3 text-center rounded-full mb-4 ">
              About Us
            </div>
            <h2 className="text-7xl xs:text-4xl md:text-4xl text-white font-bold mb-4">
              The MOTIV8 TOKEN
            </h2>
            <p className="text-[18px] text-white font-normal ">
              Motiv8 merchandise transcends the typical array of branded items,
              embedding itself as a tangible extension of digital engagement and
              achievements. This curated collection, ranging from apparel like
              t-shirts and hoodies to accessories such as stickers, mugs, and
              keychains, serves not just as merchandise but as a physical
              manifestation of ones involvement and milestones within the
              community. Each item is a badge of participation, designed to
              reflect the networks ethos and foster a sense of belonging.
            </p>
          </div>

          <div
            className="w-full lg:w-1/2 flex justify-center lg:mb-0"
            data-aos="fade-up"
          >
            <Image
              src={CurruncyImg}
              alt="Token Image"
              className="w-[297px] h-[316px] xs:w-[198px] md:w-[300px] xs:h-[209px] md:h-[320px] lg:ml-52 md:mt-[102px]  xs:mt-[102px] "
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default BusinessUtility;
