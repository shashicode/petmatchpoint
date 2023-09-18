import Image from "next/image";
import Link from "next/link";
// import Script from "next/script";

import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });

import ReactGA from "react-ga4";
ReactGA.initialize('G-0THRQG1EXX');

// Font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import Navbar from "./navbar";

export default function Home() {
  ReactGA.event({
    category: "landingpage",
    action: "landing-page",
    label: "landing Page",
    value: 99,
    nonInteraction: true,
    transport: "xhr",
  });
  return (
    <main className={opensans.className}>
      <div className="min-[2000px]:max-w-screen-2xl min-[2000px]:m-auto">
      <Navbar />

      {/* Hero area starts */}
      <div className="flex h-[200px] lg:h-[700px] bg-[url('/hero.jpeg')] bg-cover lg:bg-center flex-col">
        <p className="hidden lg:flex text-white lg:text-6xl md:text-2xl mt-12 lg:mt-24 ml-12 lg:ml-20 font-extrabold tracking-wide">
          Find your perfect furry <br />
          companion and embark <br /> on a lifelong <br />
          adventure of love
        </p>
        <p className="md:flex lg:hidden xl:hidden sm:flex text-white text-2xl mt-10 ml-12 font-extrabold">
          Find your <br /> perfect <br />furry friend
        </p>
        <p className="hidden lg:flex lg:flex-row md:flex-cols ml-12 lg:ml-20 mt-4">
          <Link
            href="/coming"
            className="flex flex-col p-12 bg-white mr-10 lg:mr-4 text-xl"
          >
            We verify pet seller <br /> authenticity and ensure <br />{" "}
            cruelty-free breeding.{" "}
            <p className="text-xl mt-4 bg-yellow-700 p-2 text-white">
              Read More &#10230;
            </p>
          </Link>
          <Link href="/coming" className="flex flex-col p-12 bg-white text-xl">
            We found new home for <br /> 62 furry friends <br />
            so far, more to go
            <p className="text-xl mt-4 bg-yellow-700 p-2 text-white">
              Read more &#10230;
            </p>
          </Link>
        </p>
      </div>
      {/* Hero area ends */}

      {/* Shop area starts here */}
      <div className="bg-white grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-12 text-white">
        <div className="bg-orange-500 px-12 py-14 rounded-2xl bg-[url('/catfood.png')] bg-left-top">
          <p className="text-4xl mb-4">New Cat food</p>
          <p className="text-2xl mb-8">Fresh & Tasty</p>
          <Link
            className="px-6 py-4 bg-white text-black rounded-full"
            href="/coming"
          >
            Shop Now <span className="text-2xl -mt-8">&#10230;</span>
          </Link>
        </div>
        <div className="bg-cyan-500 px-12 py-14 rounded-2xl bg-[url('/dogfood.png')] bg-left-top">
          <p className="text-4xl mb-4">Best for Dogs</p>
          <p className="text-2xl mb-8">Delicious & Natural Food</p>
          <Link
            className="px-6 py-4 bg-white text-black rounded-full"
            href="/coming"
          >
            Shop Now <span className="text-2xl -mt-8">&#10230;</span>
          </Link>
        </div>
        <div className="bg-indigo-500 px-12 py-14 rounded-2xl bg-[url('/pettoys.png')] bg-left-top">
          <p className="text-4xl mb-4">Pet Toys</p>
          <p className="text-2xl mb-8">Fun & Exciting</p>
          <Link
            className="px-6 py-4 bg-white text-black rounded-full"
            href="/coming"
          >
            Shop Now <span className="text-2xl -mt-8">&#10230;</span>
          </Link>
        </div>
        <div className="bg-emerald-500 px-12 py-14 rounded-2xl  bg-[url('/birdfood.png')] bg-contain bg-no-repeat">
          <p className="text-4xl mb-4">All For Birds</p>
          <p className="text-2xl mb-8">Tasty & Echo</p>
          <Link
            className="px-6 py-4 bg-white text-black rounded-full"
            href="/coming"
          >
            Shop Now <span className="text-2xl -mt-8">&#10230;</span>
          </Link>
        </div>
      </div>
      {/* Shop area ends here */}

      {/* Featured pet starts */}
      <div className="flex justify-center flex-col bg-white content-center text-center pb-10">
        <p className="text-4xl mt-10">FEATURED COMPANION</p>
        <p className="text-2xl mb-6 mt-4 text-gray-200 flex flex-row justify-center content-center text-center w-auto">
          &#9135;
          <FontAwesomeIcon
            icon={faDog}
            className="fa-solid fa-dog mr-1 ml-1"
            width={24}
          />
          &#9135;
        </p>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12 ml-12 mr-12">
          <div className="flex text-center flex-col">
            <Image
              src="/road-dog.jpg"
              width={555}
              height={200}
              alt="featured dog"
            />
            <Link className="e" href="/coming">
              Bakharwal dog | For Adoption
            </Link>
          </div>

          <div className="flex text-center flex-col border-solid border-1 border-black">
            <Image
              src="/pupper.jpg"
              width={555}
              height={300}
              alt="featured dog"
            />
            <Link className="" href="/coming">
              Labrador Retriever | INR 12,000
            </Link>
          </div>

          <div className="flex text-center flex-col border-solid border-1 border-black">
            <Image
              src="/good-cat.jpg"
              width={555}
              height={300}
              alt="featured dog"
            />
            <Link className="" href="/coming">
              Van Cat | INR 2,800
            </Link>
          </div>
        </div>
      </div>
      {/* Featured pet ends */}

      {/* Footer starts */}
      <div className="bg-white h-34 flex justify-center pt-10 pb-10 border-t-2 border-black-500">
        &#169; 2023 | petmatchpoint.com
      </div>
      {/* Footer ends */}
      </div>
    </main>
  );
}
