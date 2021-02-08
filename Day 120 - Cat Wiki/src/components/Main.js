import React from "react";
import CatwikiLogoWhite from "../assets/CatwikiLogoWhite.svg";
import HeroImagelg from "../assets/HeroImagelg.png";
import img1 from "../assets/image 1.png";
import img2 from "../assets/image 2.png";
import img3 from "../assets/image 3.png";

const Main = () => {
  return (
    <>
      {/* Head */}
      <header className="w-full">
        <div className="w-full relative mt-4">
          <div className="text-white absolute w-2/4 flex flex-col items-start justify-center h-full p-4 pl-6 sm:pl-12">
            <div className="header-copy">
              <img className="w-full" src={CatwikiLogoWhite} alt="" />
              <h1 className="main-h sm:text-lg md:text-2xl py-2 sm:py-4">
                Get to know more about your cat breed{" "}
              </h1>
              <div className="relative flex">
                <input
                  style={{
                    fontFamily: "Montserrat, FontAwesome",
                    fontSize: "12px",
                  }}
                  className="w-full py-1 px-3 sm:py-3 rounded-2xl text-black placeholder-black focus:outline-black"
                  type="text"
                  placeholder="Search"
                />
                <span class="pt-1 px-2 sm:pt-3 h-full leading-snug font-normal absolute text-center text-black absolute bg-transparent rounded text-base items-center justify-center w-8 right-0">
                  <i class="fas fa-search"></i>
                </span>
              </div>
            </div>
          </div>
          <img className="rounded-t-2xl" src={HeroImagelg} alt="" />
        </div>
      </header>
      {/* Cental section */}
      <div
        style={{ backgroundColor: "#E3E1DC" }}
        className="p-6 sm:p-12 rounded-b-2xl"
      >
        <div className="flex relative">
          <div className="discover-copy">
            <div className="text-xs sm:text-base">
              <p>Most Searched Breeds</p>
              <div
                style={{ width: "3.75rem" }}
                className="border-2 border-black rounded-2xl my-1"
              ></div>
            </div>
            <h1 className="text-xl md:text-5xl font-bold">
              66+ Breeds For you to discover
            </h1>
          </div>
          <div
            style={{ right: "3rem", bottom: ".5rem" }}
            className="hidden sm:flex items-center uppercase absolute opacity-50"
          >
            <p>See more</p>
            <i class="fas fa-long-arrow-alt-right pl-2"></i>
          </div>
        </div>
        <div
          style={{ gridTemplateRows: "1fr min-content" }}
          className="grid gap-4 sm:grid-cols-4 grid-cols-2 sm:my-8 my-4"
        >
          <div>
            <img className=" rounded-2xl mb-2" src={HeroImagelg} alt="" />
            <p className="text-xs sm:text-base">Bengal</p>
          </div>
          <div>
            <img className=" rounded-2xl mb-2" src={HeroImagelg} alt="" />
            <p className="text-xs sm:text-base">Savannah</p>
          </div>
          <div>
            <img className=" rounded-2xl mb-2" src={HeroImagelg} alt="" />
            <p className="text-xs sm:text-base">Norwegian Forest Cat</p>
          </div>
          <div>
            <img className=" rounded-2xl mb-2" src={HeroImagelg} alt="" />
            <p className="text-xs sm:text-base">Selkin</p>
          </div>
        </div>
      </div>
      {/* Bottom section */}
      <div className="p-6 sm:p-12 flex flex-col sm:flex-row items-center">
        <div className="copy flex flex-col items-start justify-center sm:max-w-full">
          <div className="copy-container">
            <div
              style={{ width: "3.75rem" }}
              className="border-2 border-black rounded-2xl my-1"
            ></div>
            <h1 className="text-3xl sm:text-5xl font-bold">
              Why should you have a cat?
            </h1>
            <p className="py-4">
              Having a cat around you actually triggers the release of calming
              chemicals in your body which lowers your stress and anxiety levels
            </p>
            <div className="flex items-center uppercase opacity-50">
              <p className="text-xs sm:text-base">Read more</p>
              <i class="fas fa-long-arrow-alt-right pl-2"></i>
            </div>
          </div>
        </div>
        <div className="images">
          <div className="img1">
            <img src={img2} alt="" />
          </div>
          <div className="img2">
            <img src={img1} alt="" />
          </div>
          <div className="img3">
            <img src={img3} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
