"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import {
  IconBrandInstagram,
  IconBrandMessenger,
  IconBrandTiktok,
} from "@tabler/icons-react";
import Logo from "@/public/Logo.png";

const RoadMap = () => {
  useEffect(() => {
    if (!navigator.userAgent.includes("AppleWebKit")) {
      document.getElementById("wrapper").innerHTML =
        "<p>Sorry! Non webkit users. :(</p>";
    }
  }, []);

  const handleScroll = () => {
    const items = document.querySelectorAll(".roadmap-item");
    let activeItemIndex = -1;

    items.forEach((item, index) => {
      const rect = item.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        item.classList.add("active");
        activeItemIndex = index;
      } else {
        item.classList.remove("active");
      }
    });

    // Calculate the height of the scrollbar based on the active item
    const totalItems = items.length;
    const scrollHeight = ((activeItemIndex + 1) / totalItems) * 100;
    document.getElementById(
      "custom-scrollbar"
    ).style.height = `${scrollHeight}%`;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className=" w-full "
      id="RoadMap"
      style={{
        backgroundImage: `url('/Roadmap.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-[1444px] mx-auto">
        <div className="h-[183px]  lg:p-[168px] mb-32 flex flex-col items-center text-center">
          <div className="bg-transparent border w-[120px] border-[#4F46E5] text-[#FFFFFF] font-normal text-sm py-3 text-center rounded-full mb-4">
            RoadMap
          </div>
          <h2 className="text-7xl xs:text-3xl md:text-4xl text-white font-bold mb-4">
            Roadmap
          </h2>
          <p className="text-[18px] text-white font-normal mb-8">
            This timeline details our funding and development goals.
          </p>
        </div>

        <div className="relative   xl:mx-[220px] md:mx-[100px]  text-[#FFFFFF]">
          {/* Custom Scrollbar */}
          <div
            id="custom-scrollbar-wrapper"
            className="absolute xs:left-12 md:left-1/2 lg:left-1/2 transform -translate-x-1/2 w-5 h-full z-10"
          >
            {/* Scrollbar */}
            <div
              id="custom-scrollbar"
              className="bg-[#854BFF] w-full"
              style={{ position: "absolute", top: 0 }}
            ></div>
          </div>

          <div className="bg-[#854BFF] w-[23px] h-[23px] rounded-full absolute top-0 xs:left-[48px] md:left-1/2 lg:left-1/2 transform -translate-x-1/2 z-0"></div>

          <div className="flex flex-col xs:ml-[75px] items-center gap-8">
            {/* 1st */}
            <div className="flex justify-start   w-full roadmap-item ">
              <div className="lg:h-[200px] xs:h-[179px] md:h-[136px] md:w-[256px] lg:w-[380px] xl:w-[442px] xs:w-[280px]  xs:py-16 lg:py-16 md:py-8 p-5 rounded-lg gradient-border ">
                <p className="lg:text-4xl xs:text-3xl md:text-xl  font-bold mb-1">
                  July 2023
                </p>
                <p className="text-sm">Creation of the idea of this project</p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex justify-end xs:justify-start w-full roadmap-item ">
              <div className="lg:h-[200px] xs:h-[179px] md:h-[136px] md:w-[256px] lg:w-[380px] xl:w-[442px]  xs:w-[280px]  xs:py-16 lg:py-16 md:py-8 p-5 rounded-lg gradient-border-right ">
                <p className="lg:text-4xl xs:text-3xl md:text-xl font-bold mb-1">
                  July 2023
                </p>
                <p className="text-sm">Creation of the idea of this project</p>
              </div>
            </div>

            {/* 3rd */}
            <div className="flex justify-start w-full roadmap-item">
              <div className="lg:h-[200px] xs:h-[179px] md:h-[136px] md:w-[256px] lg:w-[380px] xl:w-[442px]  xs:w-[280px]  xs:py-16 lg:py-16 md:py-8 p-5 rounded-lg gradient-border ">
                <p className="lg:text-4xl xs:text-3xl md:text-xl font-bold mb-1">
                  July 2023
                </p>
                <p className="text-sm">Creation of the idea of this project</p>
              </div>
            </div>

            {/* 4th */}

            <div className="flex justify-end xs:justify-start w-full roadmap-item">
              <div className="lg:h-[200px] xs:h-[179px] md:h-[136px] md:w-[256px] lg:w-[380px] xl:w-[442px]  xs:w-[280px]  xs:py-16 lg:py-16 md:py-8 p-5 rounded-lg gradient-border-right">
                <p className="lg:text-4xl xs:text-3xl md:text-xl  font-bold mb-1">
                  July 2023
                </p>
                <p className="text-sm">Creation of the idea of this project</p>
              </div>
            </div>
          </div>
        </div>

        {/* footer */}

        <footer className="lg:ml-[83px] md:ml-20 xs:ml-5 lg:mr-[137px] md:mr-20 lg:mt-[335px] md:mt-[194px] xs:mt-[194px]">
          <Image
            src={Logo}
            alt=""
            className="w-[251px] h-[48px] xs:w-[140px] xs:h-[25px] xs:mt-2"
          />
          <div className="flex flex-row xs:flex-col mt-5  justify-between ">
            <div className="flex flex-row  gap-6">
              <IconBrandMessenger stroke={2} className="text-white" />
              <IconBrandTiktok stroke={2} className="text-white" />
              <IconBrandInstagram stroke={2} className="text-white" />
            </div>
            <div className="text-white xs:mt-5 flex flex-row gap-14 font-medium text-xs lg:text-lg">
              <p>Privacy policy</p>
              <p>Terms of Use</p>
            </div>
          </div>
        </footer>
      </div>
      <div
          className=" mt-[132px]  h-20  w-full border-t  text-white "
          style={{
            borderImageSource:
              "linear-gradient(90deg, rgba(80, 45, 153, 0) 0%, #854BFF 61%)",
            borderImageSlice: 1,
          }}
        >
          <p className="  text-center my-7 font-medium text-lg">
            © Copyright Logo* Inc. 2024
          </p>
        </div> 
    </div>
  );
};

export default RoadMap;
