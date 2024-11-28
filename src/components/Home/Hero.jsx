import React from "react";
import bghero from "../../assets/herobg.png";
export default function Hero() {
  return (
    <>
      <section
        className="h-[600px] w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bghero})` }}
      >
        <div className="flex justify-end items-center h-full lg:w-4/5 mx-auto w-11/12 ">
          <div className="">
            <h1 className="text-white font-Rancho text-3xl">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="font-Rancho text-[12px] mt-2 text-white max-w-[500px]">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="bg-[#E3B577] mt-3 px-4 py-1 font-Rancho">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
