"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function ListAPet() {
  const { push } = useRouter();
  function addDays(theDate: any, days: any) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }
  const [formValue, SetFormValue] = useState<any>({
    user_email: "testuser@mailinator.com",
    listing_end_date: addDays(new Date(), 30).toISOString(),
  });
  const [showSpinner, SetShowSpinner] = useState(false);

  const setForm = (type: string, value: any, checkBoxValue: string = "") => {
    if (type === "listingType" && checkBoxValue !== "") {
      SetFormValue((prevState: any) => {
        return { ...prevState, [type]: checkBoxValue };
      });
    } else {
      SetFormValue((prevState: any) => {
        return { ...prevState, [type]: value };
      });
    }
  };

  const createListing = async () => {
    SetShowSpinner(true);
    try {
      const response = await fetch("/api/v1/listing", {
        method: "POST",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
        headers: {
          "Content-Type": "application/json",
        },
        redirect: "follow",
        referrerPolicy: "no-referrer",
        body: JSON.stringify(formValue),
      })
        .then(function (result) {
          return result.json();
        })
        .then(function (json) {
          if(json.message && json.message === 'Listing Created') {
            SetShowSpinner(false);
          }
        });
    } catch (error) {
      SetShowSpinner(false);
    }
  };

  useEffect(() => {
    console.log("Value changed: ", formValue);
  }, [formValue]);

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
            onClick={(event: any) => {
              setForm("listingType", event.target.checked, "sell");
            }}
            checked
          />{" "}
          Sell
          <input
            className="mr-1 ml-2"
            type="radio"
            name="listingType"
            value="adoption"
            onClick={(event: any) => {
              setForm("listingType", event.target.checked, "adopt");
            }}
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
            onChange={(event) => {
              setForm("pet", event.target.value);
            }}
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
            onChange={(event) => {
              setForm("breed", event.target.value);
            }}
          >
            <option value="germanshepherd">German Shepherd</option>
            <option value="beagle">Beagle</option>
            <option value="Nemo">Nemo</option>
            <option value="other">Others</option>
          </select>
        </div>
        {/* Listing breed */}

        {/* Listing breed */}
        {/* <div className="p-4">
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
        </div> */}
        {/* Listing breed */}

        {/* Listing title */}
        <div className="p-4">
          <input
            className="w-[455px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            type="text"
            name="title"
            placeholder="add a short title"
            onChange={(event) => {
              setForm("title", event?.target.value);
            }}
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
            onChange={(event) => {
              setForm("desc", event?.target.value);
            }}
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
            onChange={(event) => {
              setForm("price", event?.target.value);
            }}
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
            onChange={(event) => {
              setForm("location", event?.target.value);
            }}
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
            onChange={(event) => {
              setForm("user_phone", event?.target.value);
            }}
          />
        </div>
        {/* Listing phone */}

        {/* Listing confirmation CTA */}
        <div className="p-4">
          <p
            onClick={createListing}
            className="p-6 bg-emerald-500 text-white font-extrabold uppercase w-36 text-center hover:cursor-pointer rounded-lg"
          >
            {showSpinner ? (
              <>
                <div className="flex justify-center" role="status">
                  <svg
                    aria-hidden="true"
                    className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                    viewBox="0 0 100 101"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                      fill="currentColor"
                    />
                    <path
                      d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                      fill="currentFill"
                    />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </>
            ) : (
              <span>Confirm</span>
            )}
          </p>
        </div>
        {/* Listing confirmation CTA */}
      </div>
    </section>
  );
}
