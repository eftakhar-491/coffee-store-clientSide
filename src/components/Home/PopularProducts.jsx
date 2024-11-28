import React from "react";
import { Link } from "react-router-dom";
import img1 from "../../assets/cups/Rectangle 9.png";
export default function PopularProducts() {
  return (
    <>
      <section>
        <p className="text-lg text-center">--- Sip & Savor ---</p>
        <h1 className="font-bold text-center text-4xl font-Rancho text-[#331A15]">
          Our Popular Products
        </h1>
        <Link to={"/add-coffee"}>
          <button className="px-4 mt-4 text-white font-Rancho text-xl rounded-md py-1 mx-auto block bg-[#E3B577] border-2 border-[#331A15]">
            Add Coffee
          </button>
        </Link>
      </section>
      <section>
        <div className="grid grid-cols-2">
          {/* card */}
          <div className="flex bg-slate-200 p-6 justify-between">
            <img className="w-20" src={img1} alt="" />
            <div>
              <p>sadfgs</p>
              <p>asg</p>
              <p>asgf</p>
            </div>
            <div className="flex flex-col">
              <Link to={"/"}> s</Link>
              <Link to={"/"}>a </Link>
              <Link to={"/"}> a</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
