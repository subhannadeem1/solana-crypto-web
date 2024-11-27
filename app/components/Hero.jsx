"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Astronaut from "@/public/astronaut-background.png";

const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  return {
    days: days >= 0 ? days : 0,
    hours: hours >= 0 ? hours : 0,
    minutes: minutes >= 0 ? minutes : 0,
    seconds: seconds >= 0 ? seconds : 0,
  };
};

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const targetDate = new Date("2024-09-29T00:00:00").getTime();

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: "ease-in-out", 
      once: false, 
    });
    // Update the timer every second
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(interval); 
  }, [targetDate]);
  return (
    <>
      <div
        className="  w-full bg-cover   "
        style={{
          backgroundImage: `url('/HeroBackground.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex xl:flex-row flex-col   justify-between xs:justify-center  xs:text-center md:justify-center md:text-center xl:text-start  ">
          <div className="xl:w-[615px] xl:h-[338px] xl:ml-16 text-white xs:pt-[178px] xl:pt-64 md:pt-[142px] sm:pt-[400px] ">
            <h1 className="lg:text-7xl xs:text-4xl md:text-5xl  font-extrabold">
              PRESALE ROUND 2 IS LIVE
            </h1>

            {/* Timer Boxes */}
            <div className="flex lg:space-x-11 xs:space-x-3 md:space-x-3 mt-5 justify-center">
              <div className="lg:w-[120px] lg:h-[120px] xs:w-[70px] xs:h-[70px] md:w-[70px] md:h-[70px] bg-transparent border border-[#854BFF] rounded-lg flex flex-col justify-center items-center">
                <span className="lg:text-4xl xs:text-2xl md:text-2xl font-bold">
                  {timeLeft.days}
                </span>
                <span className="text-sm xs:text-xs md:text-xs font-semibold xs:font-medium text-[#FFFFFF66] ">
                  DAYS
                </span>
              </div>
              <div className="lg:w-[120px] lg:h-[120px] xs:w-[70px] xs:h-[70px] md:w-[70px] md:h-[70px] bg-transparent border border-[#854BFF] rounded-lg flex flex-col justify-center items-center">
                <span className="text-4xl xs:text-2xl md:text-2xl font-bold">
                  {timeLeft.hours}
                </span>
                <span className="text-sm xs:text-xs md:text-xs font-semibold xs:font-medium text-[#FFFFFF66] ">
                  HOURS
                </span>
              </div>
              <div className="lg:w-[120px] lg:h-[120px] xs:w-[70px] xs:h-[70px] md:w-[70px] md:h-[70px] bg-transparent border border-[#854BFF] rounded-lg flex flex-col justify-center items-center">
                <span className="text-4xl xs:text-2xl md:text-2xl font-bold">
                  {timeLeft.minutes}
                </span>
                <span className="text-sm xs:text-xs md:text-xs font-semibold xs:font-medium text-[#FFFFFF66] ">
                  MIN
                </span>
              </div>
              <div className="lg:w-[120px] lg:h-[120px] xs:w-[70px] xs:h-[70px] md:w-[70px] md:h-[70px] bg-transparent border border-[#854BFF] rounded-lg flex flex-col justify-center items-center">
                <span className="text-4xl xs:text-2xl md:text-2xl font-bold">
                  {timeLeft.seconds}
                </span>
                <span className="text-sm xs:text-xs md:text-xs text-[#FFFFFF66] font-semibold xs:font-medium">
                  SEC
                </span>
              </div>
            </div>

            <div className="mt-5">
              <Button className=" hover-slide-right hover-slide-right-white bg-[#854BFF] hover:bg-[#ffffff]  hover:text-[#000000] text-white lg:w-[280px] xs:w-50 xs:h-12 md:w-50 md:h-12  lg:h-14 py-3 px-8 rounded-full text-base font-medium ">
                Connect Wallet
              </Button>
            </div>
          </div>

          <div className="relative mt-10 md:mt-5 flex justify-center items-center">
            <Image
              data-aos="fade-up"
              src={Astronaut}
              alt="Astronaut Image"
              className="lg:w-[511px] lg:h-[768px] xs:w-[285px] md:w-[339px] xs:h-[396px] md:h-[431px] lg:ml-52 "
            />

            <div className="absolute   top-1/2 left-1/2  lg:h-[472px] xs:h-[290px] md:h-[310px] lg:w-[514px] xs:w-[300px] md:w-[480px] transform -translate-x-1/2 -translate-y-1/2  bg-[rgba(133,75,255,0.04)] backdrop-blur-[10px] rounded-[20px]  lg:p-[40px] xs:p-[23px] md:p-[23px] flex flex-col  items-start lg:gap-[20px] xs:gap-[16px]  overflow-hidden gradient-border-header">
              <h2 className="text-white lg:text-3xl xs:text-sm lg:font-semibold xs:font-normal lg:block hidden  ">
                Funding Rounds
              </h2>
              <div className="w-full">
                {[
                  {
                    round: "Funding Round 01",
                    amountRaised: 45484,
                    totalAmount: 50000,
                  },
                  {
                    round: "Funding Round 02",
                    amountRaised: 25000,
                    totalAmount: 50000,
                  },
                  {
                    round: "Funding Round 03",
                    amountRaised: 38000,
                    totalAmount: 50000,
                  },
                  {
                    round: "Funding Round 04",
                    amountRaised: 30000,
                    totalAmount: 50000,
                  },
                ].map((item, index) => {
                  const progress = (item.amountRaised / item.totalAmount) * 100;
                  return (
                    <div key={index} className="mb-4 xs:mb-3">
                      <div className="flex justify-between xs:text-sm xs:font-normal lg:mb-2 xs:mb-1  text-white">
                        <div className="flex flex-col text-start ">
                          <span>{item.round}</span>
                          <span className="text-gray-400 text-xs">
                            ${item.amountRaised.toLocaleString()}
                          </span>
                        </div>
                        <span>${item.totalAmount.toLocaleString()}</span>
                      </div>

                      <div className=" lg:h-4 xs:h-3 md:h-3 rounded-full bg-[#00000099] w-full">
                        <div
                          className="h-full rounded-full bg-[#854BFF]"
                          style={{ width: `${progress}%` }}
                        ></div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
