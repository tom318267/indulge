import React from "react";
import Bars from "./Bars";
import Button from "./Button";
import IceCream from "./IceCream";
import Milkshakes from "./Milkshakes";

const Homepage = () => {
  return (
    <>
      <div className="Homepage font-cherry relative">
        <div className="flex flex-col justify-center items-center w-[330px] text-center mx-auto pt-40 h-screen pb-80">
          <h1 className="text-[49px] text-center text-darkRed font-bold mb-2 leading-[65px]">
            <span className="text-white">Treats,</span> Let The{" "}
            <span className="text-white">Good</span> Times{" "}
            <span className="text-white">Roll.</span>
          </h1>
          <p className="font-sansita text-[20px] mb-6 leading-[25px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sollicitudin molestie sollicitudin sed ut aliquet accumsan interdum
            amet.
          </p>
          <Button
            styleClass="Button bg-darkPink w-[178px] text-white rounded-full h-[47px] p-[5px] font-ranga text-[24px]"
            value="Shop Now"
          />
        </div>

        <div className="absolute bottom-0 w-full">
          <div className="relative">
            <div>
              <img className="w-full" src="/images/mobileWave.svg" alt="" />
            </div>

            <div className="absolute bottom-0">
              <img
                className="w-[166px]"
                src="/images/mobileIceCreamHand.svg"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <IceCream />
      <Bars />
      <Milkshakes />
    </>
  );
};

export default Homepage;
