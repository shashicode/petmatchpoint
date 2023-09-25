"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ListAPet() {
  const { push } = useRouter();
  return (
    <section className="flex justify-center p-10">
      <div className="w-[700px] bg-white p-10 px-20 rounded-lg">
        {/* Listing type selection */}
        <div className="p-4">
          <input
            className="mr-1"
            type="radio"
            name="listingType"
            value="Sell"
            checked
          />{" "}
          Sell
          <input
            className="mr-1 ml-2"
            type="radio"
            name="listingType"
            value="adoption"
          />{" "}
          Put for adoption
        </div>
        {/* Listing type selection */}

        {/* Listing category */}
        <div className="p-4">
          <label>Pet type</label>
          <br />
          <select
            className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            name="category"
            id="category"
          >
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
            <option value="fish">Fish</option>
            <option value="other">Others</option>
          </select>
        </div>
        {/* Listing category */}

        {/* Listing breed */}
        <div className="p-4">
          <label>Breed</label>
          <br />
          <select
            className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            name="breed"
            id="breed"
          >
            <option value="germanshepherd">German Shepherd</option>
            <option value="beagle">Beagle</option>
            <option value="Nemo">Nemo</option>
            <option value="other">Others</option>
          </select>
        </div>
        {/* Listing breed */}

        {/* Listing breed */}
        <div className="p-4">
          <label>Age</label>
          <br />
          <input
            className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black mb-2"
            type="number"
            name="year"
            placeholder="years"
          />{" "}
          <br />
          <input
            className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            type="number"
            name="month"
            placeholder="month"
          />
        </div>
        {/* Listing breed */}

        {/* Listing title */}
        <div className="p-4">
          <input
            className="w-[455px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            type="text"
            name="title"
            placeholder="add a short title"
          />
        </div>
        {/* Listing title */}

        {/* Listing desc */}
        <div className="p-4">
          <textarea
            className="p-2 rounded-lg outline-none border-solid border-2 border-black"
            name="w3review"
            rows={4}
            cols={50}
            placeholder="add your pet's description"
          ></textarea>
        </div>
        {/* Listing desc */}

        {/* Listing price */}
        <div className="p-4">
          <label>Asking price</label>
          <br />
          <input
            className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            type="number"
            name="price"
          />
        </div>
        {/* Listing price */}

        {/* Listing location */}
        <div className="p-4">
          <label>Location</label>
          <br />
          <input
            className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            type="text"
            name="year"
          />
        </div>
        {/* Listing location */}

        {/* Listing phone */}
        <div className="p-4">
          <label>Phone</label>
          <br />
          <input
            className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            type="text"
            name="phone"
          />
        </div>
        {/* Listing phone */}

        {/* Listing confirmation CTA */}
        <div className="p-4">
          <p className="p-6 bg-emerald-500 text-white font-extrabold uppercase w-36 text-center hover:cursor-pointer rounded-lg">
            Confirm
          </p>
        </div>
        {/* Listing confirmation CTA */}
      </div>
    </section>
  );
}
