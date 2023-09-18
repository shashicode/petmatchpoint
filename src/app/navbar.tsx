"use client";

import Image from "next/image";
import Link from "next/link";
// import Script from "next/script";

import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });

import ReactGA from "react-ga4";
ReactGA.initialize("G-0THRQG1EXX");

// Font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
import { faCat } from "@fortawesome/free-solid-svg-icons";
import { faFish } from "@fortawesome/free-solid-svg-icons";
import { faCrow } from "@fortawesome/free-solid-svg-icons";
import { faOtter } from "@fortawesome/free-solid-svg-icons";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import { useState } from "react";

export default function Navbar() {
  const [showMobileNav, SetShowMobileNav] = useState(false);
  const showMobileNavbar = () => {
    SetShowMobileNav(true);
  };
  const hideMobileNavbar = () => {
    SetShowMobileNav(false);
  };
  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 bg-white h-36 content-center">
      {/* Logo and company name starts */}
      <div className="flex flex-row ml-12 lg:ml-12 w-24">
        <Image
          className="rounded-full"
          src="/petmatchpoint-logo.jpg"
          alt=""
          width={120}
          height={120}
        />
        <span className="hidden lg:flex text-2xl items-center ml-4">
          Pet
          <br /> Match <br /> Point
        </span>
      </div>
      {/* Logo and company name ends */}

      <div className="md:flex lg:hidden xl:hidden sm:flex ml-24 mt-4">
        <FontAwesomeIcon
          onClick={showMobileNavbar}
          icon={faBars}
          className="flex text-6xl"
          width={40}
        />
      </div>

      {/* Link starts */}
      <div className="hidden lg:flex justify-between text-2xl items-center">
        <Link href="/coming" className="flex mr-3">
          <FontAwesomeIcon
            icon={faDog}
            className="fa-solid fa-dog mr-1 mt-1"
            width={24}
          />
          DOGS
        </Link>
        <Link href="/coming" className="flex mr-3">
          <FontAwesomeIcon
            icon={faCat}
            className="fa-solid fa-dog mr-1 mt-1"
            width={24}
          />
          CATS
        </Link>
        <Link href="/coming" className="flex mr-3">
          <FontAwesomeIcon
            icon={faFish}
            className="fa-solid fa-dog mr-1 mt-1"
            width={24}
          />
          FISH
        </Link>
        <Link href="/coming" className="flex mr-3">
          <FontAwesomeIcon
            icon={faCrow}
            className="fa-solid fa-dog mr-1 mt-1"
            width={24}
          />
          BIRDS
        </Link>
        <Link href="/coming" className="flex mr-3">
          <FontAwesomeIcon
            icon={faOtter}
            className="fa-solid fa-dog mr-1 mt-1"
            width={24}
          />
          ADOPT
        </Link>
      </div>
      {/* Link ends */}

      {/* User auth starts */}
      <div className="hidden lg:flex items-center text-right justify-end mr-8">
        <Link href="/coming" className="flex p-4 bg-emerald-500 rounded-2xl">
          <FontAwesomeIcon
            icon={faRightToBracket}
            className="fa-solid fa-dog mr-2 mt-2 text-white"
            width={24}
          />
          <p className="text-2xl text-white">Login</p>
        </Link>
        <Link
          href="/coming"
          className="flex p-4 bg-emerald-500 ml-4 rounded-2xl"
        >
          <FontAwesomeIcon
            icon={faUserPlus}
            className="fa-solid fa-dog mr-2 mt-2 text-white"
            width={24}
          />
          <p className="text-2xl text-white">Signup</p>
        </Link>
      </div>
      {/* User auth ends */}
      {showMobileNav && (
        <div className="flex flex-col fixed right-0 top-0 bg-white h-full">
          <FontAwesomeIcon
            icon={faXmark}
            className="absolute right-5 top-5 text-5xl"
            width={40}
            onClick={hideMobileNavbar}
          />

          <div className="flex flex-col p-12 mt-12">
            <Link href="/coming" className="flex mr-3 mb-6 text-2xl">
              <FontAwesomeIcon
                icon={faDog}
                className="fa-solid fa-dog mr-4"
                width={24}
              />
              DOGS
            </Link>
            <Link href="/coming" className="flex mr-3 mb-6 text-2xl">
              <FontAwesomeIcon
                icon={faCat}
                className="fa-solid fa-dog mr-4"
                width={24}
              />
              CATS
            </Link>
            <Link href="/coming" className="flex mr-3 mb-6 text-2xl">
              <FontAwesomeIcon
                icon={faFish}
                className="fa-solid fa-dog mr-4"
                width={24}
              />
              FISH
            </Link>
            <Link href="/coming" className="flex mr-3 mb-6 text-2xl">
              <FontAwesomeIcon
                icon={faCrow}
                className="fa-solid fa-dog mr-4"
                width={24}
              />
              BIRDS
            </Link>
            <Link href="/coming" className="flex mr-3 mb-6 text-2xl">
              <FontAwesomeIcon
                icon={faOtter}
                className="fa-solid fa-dog mr-4"
                width={24}
              />
              ADOPT
            </Link>
          </div>

          {/* User login */}
          <div className="flex flex-col ml-10 mb-4 -mt-10">
            <Link
              href="/coming"
              className="flex p-4 w-36 mb-4 bg-emerald-500 rounded-2xl"
            >
              <FontAwesomeIcon
                icon={faRightToBracket}
                className="fa-solid fa-dog mr-2 mt-2 text-white"
                width={24}
              />
              <p className="text-2xl text-white">Login</p>
            </Link>
            <Link
              href="/coming"
              className="flex p-4 w-36 bg-emerald-500 rounded-2xl"
            >
              <FontAwesomeIcon
                icon={faUserPlus}
                className="fa-solid fa-dog mr-2 mt-2 text-white"
                width={24}
              />
              <p className="text-2xl text-white">Signup</p>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
