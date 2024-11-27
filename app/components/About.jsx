"use client";
import Image from "next/image";
import React from "react";
import curruncy from "@/public/cryptocurrency.png";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import aboutBG from "@/public/aboutBG.png";

const AboutUS = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <div
      className=" text-white py-16 xl:h-[1081px] w-full bg-cover"
      id="AboutUS"
    >

      <div className="flex flex-col  lg:flex-row items-center justify-center max-w-[1444px] mx-auto w-full md:px-[48px] lg:px-24">
        <div
          className="w-full lg:w-1/2  flex justify-center  mb-8 lg:mb-0"
          data-aos="fade-up"
        >
          <Image
            src={curruncy}
            alt="Token Image"
            className="w-[392px] h-[434px] xs:w-[187px] xs:h-[223px]  md:w-[360px] md:h-[350px]"
          />
        </div>

        <div className="w-full px-5  lg:w-1/2 lg:pl-12">
          <div className="bg-transparent border w-[120px] h-[46px]   border-[#4F46E5] text-[#FFFFFF] font-normal text-sm py-3 text-center rounded-full mb-4 ">
            ABOUT US
          </div>
          <h2 className="text-5xl font-bold mb-4">INTRODUCTION</h2>
          <p className="text-[16px] text- font-normal mb-8">
            In today world, the quest for meaningful work that aligns with
            personal passions is more prominent than ever. Despite this, many
            find their jobs lacking in fulfillment and recognition for their
            unique talents, impacting both personal growth and organizational
            effectiveness. Enter Motiv8 Meme Token, represented by the Motiv8
            dog meme, is the ultimate mongrel of dog meme tokens, amalgamating
            traits from each to offer unparalleled utility. As the inclusive
            leader of the pack, it stands as the best of the best, with
            characteristics of a diverse mixed breed that exemplify the pinnacle
            of all its counterparts.  Motiv8 is aiming to create a World of
            Universal Appreciation by transcending traditional reward systems.
            Motiv8, is a pioneering Token that redefines employee recognition
            through blockchain technology, enabling immediate, global, and
            flexible rewards.
          </p>
        </div>
      </div>

      <div
        className="max-w-[1444px]  lg:px-16 md:px-16 mx-auto grid grid-cols-1 gap-8 xs:grid-cols-1 md:grid-cols-2 xl:grid-cols-4 m-16 xs:m-4"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        <div className="lg:h-[280px] md:h-[185px] xs:h-[173px] flex flex-col justify-center  p-5 rounded-[20px] bg-[#854BFF0D] text-center gradient-border">
          <p className="text-xl text-start font-normal mb-3">
            Annual Cost of Employee Disengagement
          </p>
          <p className="text-4xl xs:text-2xl md:text-2xl font-bold mb-1">
            $550
          </p>
          <p className="text-sm">BILLIONS</p>
        </div>

        <div className="lg:h-[280px] md:h-[185px] xs:h-[173px] flex flex-col justify-center   p-5 rounded-[20px] bg-[#854BFF0D] text-center gradient-border">
          <p className="text-xl text-start font-normal mb-3">
            Employees Would remain at Company if offered Crypto as a form of
            Payment
          </p>
          <p className="text-4xl xs:text-2xl md:text-2xl font-bold mb-1">45%</p>
          <p className="text-sm">EMPLOYEES</p>
        </div>
        <div className="lg:h-[280px] md:h-[185px] xs:h-[173px] flex flex-col justify-center  p-5 rounded-[20px] bg-[#854BFF0D] text-center gradient-border">
          <p className="text-xl text-start font-normal mb-3">
            Annual amount of Employee Rewards that Expire or go Unused
          </p>
          <p className="text-4xl xs:text-2xl md:text-2xl font-bold mb-1">$3</p>
          <p className="text-sm">BILLIONS</p>
        </div>
        <div className="lg:h-[280px] md:h-[185px] xs:h-[173px] flex flex-col  justify-center p-5 rounded-[20px] bg-[#854BFF0D] text-center gradient-border">
          <p className="text-xl text-start font-normal mb-3">
            Crave personalized, immediate, Purpose-driven Rewards and you are
            not getting it.
          </p>
          <p className="text-4xl xs:text-2xl md:text-2xl font-normal mb-1">
            50%
          </p>
          <p className="text-sm">EMPLOYEES</p>
        </div>
      </div>
      <div>
        <Image
          data-aos="fade-up"
          src={aboutBG}
          alt="Astronaut Image"
          className="  mt-[-60px] xs:mt-[-10px] lg:h-[376px] w-full "
        />
      </div>
    </div>
  );
};

export default AboutUS;
