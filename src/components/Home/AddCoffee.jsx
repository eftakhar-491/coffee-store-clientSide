import React from "react";
import bgAddCoffee from "../../assets/11.png";
import { Link } from "react-router-dom";
export default function AddCoffee() {
  function handelAddCoffee(e) {
    e.preventDefault();
    const coffeeData = {
      coffeeName: e.target.name.value,
      chef: e.target.chef.value,
      supplier: e.target.supplier.value,
      taste: e.target.taste.value,
      category: e.target.category.value,
      details: e.target.details.value,
    };
    console.log(coffeeData);
    fetch("http://localhost:5000/coffies", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(coffeeData),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  }
  return (
    <>
      <section
        style={{ backgroundImage: `url(${bgAddCoffee})` }}
        className="w-full bg-cover"
      >
        <Link to={"/"}>
          <div className="cursor-pointer text-xl font-semibold font-Rancho w-11/12 mx-auto py-3 lg:w-4/5">
            Back to home
          </div>
        </Link>
        <div className="lg:w-4/5 w-11/12 mx-auto bg-[#F4F3F0] py-11 ">
          <h1 className="font-Rancho text-center text-2xl font-bold text-[#374151]">
            Add New Coffee
          </h1>
          <p
            className="text-sm max-w-[600px] text-center mx-auto text-[#1B1A1AB3] mt-2
          "
          >
            It is a long established fact that a reader will be distraceted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
          <form
            onSubmit={handelAddCoffee}
            className="px-16 mt-6 grid grid-cols-2 gap-4 lg:w-4/5 w-11/12 mx-auto bg-[#F4F3F0]"
          >
            <label
              className="flex flex-col gap-2 text-xl text-[#1B1A1ACC] font-bold font-Rancho"
              htmlFor="name"
            >
              Name
              <input
                className="text-[#1B1A1A99] text-sm py-2 pl-6 rounded-xl"
                type="text"
                name="name"
                placeholder="Enter Coffee name"
              />
            </label>
            <label
              className="flex flex-col gap-2 text-xl text-[#1B1A1ACC] font-bold font-Rancho"
              htmlFor="chef"
            >
              Chef
              <input
                className="text-[#1B1A1A99] text-sm py-2 pl-6 rounded-xl"
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
              />
            </label>
            <label
              className="flex flex-col gap-2 text-xl text-[#1B1A1ACC] font-bold font-Rancho"
              htmlFor="supplier"
            >
              Supplier
              <input
                className="text-[#1B1A1A99] text-sm py-2 pl-6 rounded-xl"
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
              />
            </label>
            <label
              className="flex flex-col gap-2 text-xl text-[#1B1A1ACC] font-bold font-Rancho"
              htmlFor="taste"
            >
              Taste
              <input
                className="text-[#1B1A1A99] text-sm py-2 pl-6 rounded-xl"
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
              />
            </label>
            <label
              className="flex flex-col gap-2 text-xl text-[#1B1A1ACC] font-bold font-Rancho"
              htmlFor="category"
            >
              Category
              <input
                className="text-[#1B1A1A99] text-sm py-2 pl-6 rounded-xl"
                type="text"
                name="category"
                placeholder="Enter coffee category"
              />
            </label>
            <label
              className="flex flex-col gap-2 text-xl text-[#1B1A1ACC] font-bold font-Rancho"
              htmlFor="details"
            >
              Details
              <input
                className="text-[#1B1A1A99] text-sm py-2 pl-6 rounded-xl"
                type="text"
                name="details"
                placeholder="Enter coffee details"
              />
            </label>

            <label
              className="col-span-2 flex flex-col gap-2 text-xl text-[#1B1A1ACC] font-bold font-Rancho"
              htmlFor="photo"
            >
              Photo
              <input
                className="text-[#1B1A1A99] text-sm py-2 pl-6 rounded-xl"
                type="text"
                name="photo"
                placeholder="Enter coffee photo-url"
              />
            </label>
            <button className="col-span-2 py-1 rounded-md font-Rancho bg-[#D2B48C] border-2 border-[#331A15]">
              Add Coffee
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
