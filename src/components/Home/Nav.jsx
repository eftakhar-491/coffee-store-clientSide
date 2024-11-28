import React from "react";
import logo from "../../assets/logo1.png";
import bgnav from "../../assets/15.jpg";
export default function Nav() {
  return (
    <>
      <nav
        className="w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${bgnav})` }}
      >
        <div className="flex gap-2 py-1 justify-center items-center">
          <img className="w-12" src={logo} alt="" />
          <h1 className="font-Rancho text-white text-3xl">Espresso Emporium</h1>
        </div>
      </nav>
    </>
  );
}
