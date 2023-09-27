"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm, SubmitHandler } from "react-hook-form";
import "react-phone-number-input/style.css";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";

export default function ListAPet() {
  const { push } = useRouter();
  const [phone, setPhone] = useState<any>();
  const [showSpinner, SetShowSpinner] = useState(false);
  const [phoneError, SetPhoneError] = useState(false);
  function addDays(theDate: any, days: any) {
    return new Date(theDate.getTime() + days * 24 * 60 * 60 * 1000);
  }

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<any>();
  const onSubmit: SubmitHandler<any> = async (data) => {
    SetPhoneError(false);
    SetShowSpinner(true);
    const finalFormData = {
      ...data,
      ...{
        user_email: "testuser@mailinator.com",
        listing_end_date: addDays(new Date(), 30).toISOString(),
        category: "",
        user_phone: phone.toString(),
      },
    };

    if (
      isValidPhoneNumber(finalFormData.user_phone) &&
      finalFormData.user_phone !== ""
    ) {
      try {
        await fetch("/api/v1/listing", {
          method: "POST",
          mode: "cors",
          cache: "no-cache",
          credentials: "same-origin",
          headers: {
            "Content-Type": "application/json",
          },
          redirect: "follow",
          referrerPolicy: "no-referrer",
          body: JSON.stringify(finalFormData),
        })
          .then(function (result) {
            return result.json();
          })
          .then(function (json) {
            if (json.message && json.message === "Listing Created") {
              SetShowSpinner(false);
            }
          });
      } catch (error) {
        SetShowSpinner(false);
      }
    } else {
      SetPhoneError(true);
      SetShowSpinner(false);
    }
  };

  const changePhone = (value: any) => {
    console.log("Total value: ", value);
    setPhone(value);
  };

  return (
    <section className="flex justify-center p-10">
      <div className="w-[700px] bg-white p-10 px-20 rounded-lg">
        {/* Listing type selection */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="p-4">
            <input
              className="mr-1"
              type="radio"
              value="Sell"
              {...register("listingType", { required: true })}
            />{" "}
            Sell
            <input
              className="mr-1 ml-2"
              type="radio"
              {...register("listingType", { required: true })}
              value="adoption"
            />{" "}
            Put for adoption
          </div>
          {errors.listingType && (
            <p className="text-lg text-red-500 ml-4">Choose listing type.</p>
          )}
          {/* Listing type selection */}

          {/* Listing category */}
          <div className="p-4">
            <label>Pet type</label>
            <br />
            <select
              className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
              {...register("category", { required: true })}
              id="category"
            >
              <option value="">Select a value</option>
              <option value="dog">Dog</option>
              <option value="cat">Cat</option>
              <option value="fish">Fish</option>
              <option value="other">Others</option>
            </select>
            {errors.category && (
              <p className="text-lg text-red-500">Choose a pet type.</p>
            )}
          </div>
          {/* Listing category */}

          {/* Listing breed */}
          <div className="p-4">
            <label>Breed</label>
            <br />
            <select
              className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
              {...register("breed", { required: true })}
              id="breed"
            >
              <option value="">Select a value</option>
              <option value="germanshepherd">German Shepherd</option>
              <option value="beagle">Beagle</option>
              <option value="Nemo">Nemo</option>
              <option value="other">Others</option>
            </select>
            {errors.breed && (
              <p className="text-lg text-red-500">Breed is required.</p>
            )}
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
              {...register("title", { required: true })}
              placeholder="add a short title"
            />
            {errors.title && (
              <p className="text-lg text-red-500">Title is required.</p>
            )}
          </div>
          {/* Listing title */}

          {/* Listing desc */}
          <div className="p-4">
            <textarea
              className="p-2 rounded-lg outline-none border-solid border-2 border-black"
              {...register("desc", { required: true })}
              rows={4}
              cols={50}
              placeholder="add your pet's description"
            ></textarea>
            {errors.desc && (
              <p className="text-lg text-red-500">Description is required.</p>
            )}
          </div>
          {/* Listing desc */}

          {/* Listing price */}
          <div className="p-4">
            <label>Asking price</label>
            <br />
            <input
              className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
              type="number"
              {...register("price", { required: true, min: 0 })}
            />
            {errors.price && (
              <p className="text-lg text-red-500">Price is required.</p>
            )}
          </div>
          {/* Listing price */}

          {/* Listing location */}
          <div className="p-4">
            <label>Location</label>
            <br />
            <input
              className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
              type="text"
              {...register("location", { required: true })}
            />
            {errors.location && (
              <p className="text-lg text-red-500">Location is required.</p>
            )}
          </div>
          {/* Listing location */}

          {/* Listing phone */}
          {/* <div className="p-4">
          <label>Phone</label>
          <br />
          <input
            className="w-[200px] p-4 rounded-lg outline-none border-solid border-2 border-black"
            type="text"
            {...register("user_phone", { required: true })}
          />
          {errors.user_phone && <p className="text-lg text-red-500">Phone number is required.</p>}

        </div> */}
          <div className="p-4">
            <label>Phone</label>
            <PhoneInput
              style={{width: '250px', border: '2px solid black', borderRadius: '8px', padding: '10px'}}
              placeholder="Enter phone number"
              defaultCountry="US"
              value={phone}
              onChange={changePhone}
            />
            {phoneError && (
              <p className="text-lg text-red-500">
                Please provide a valid phone number.
              </p>
            )}
          </div>
          {/* Listing phone */}

          {/* Listing confirmation CTA */}
          <div className="p-4">
            <button
              // onClick={createListing}
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
            </button>
          </div>
          {/* Listing confirmation CTA */}
        </form>
      </div>
    </section>
  );
}
