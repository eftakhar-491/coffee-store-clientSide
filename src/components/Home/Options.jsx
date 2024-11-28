import React from "react";
import i1 from "../../assets/icons/1.png";
import i2 from "../../assets/icons/2.png";
import i3 from "../../assets/icons/3.png";
import i4 from "../../assets/icons/4.png";
export default function Options() {
  return (
    <>
      <section className="py-10 bg-[#ECEAE3]">
        <div className="grid grid-cols-4 w-11/12 mx-auto lg:w-4/5 ">
          <div>
            <img className="w-10" src={i1} alt="" />
            <h1 className="text-[#331A15] mt-2 font-Rancho text-2xl">
              Awesome Aroma
            </h1>
            <p className="text-[12px] font-Rancho text-[#1B1A1A]">
              You will definitely be a fan of the design & aroma of your coffee
            </p>
          </div>
          <div>
            <img className="w-10" src={i2} alt="" />
            <h1 className="mt-2 text-[#331A15] font-Rancho text-2xl">
              High Quality
            </h1>
            <p className="text-[12px] font-Rancho text-[#1B1A1A]">
              We served the coffee to you maintaining the best quality
            </p>
          </div>
          <div>
            <img className="w-10" src={i3} alt="" />
            <h1 className="mt-2 text-[#331A15] font-Rancho text-2xl">
              Pure Grades
            </h1>
            <p className="text-[12px] font-Rancho text-[#1B1A1A]">
              The coffee is made of the green coffee beans which you will love
            </p>
          </div>
          <div>
            <img className="w-10" src={i4} alt="" />
            <h1 className="mt-2 text-[#331A15] font-Rancho text-2xl">
              Proper Roasting
            </h1>
            <p className="text-[12px] font-Rancho text-[#1B1A1A]">
              Your coffee is brewed by first roasting the green coffee beans
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
