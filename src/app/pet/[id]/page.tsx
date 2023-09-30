"use client";

import axios from "axios";
import Link from "next/link";
import { useEffect } from "react";
import Carousel  from 'reactjs-nextjs-carousel';

export default async function SinglePet({ params }: any) {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  async function getData() {
    try {
      const res = await axios.get(
        `http://localhost:3000/api/v1/listing?listing_id=${params.id}`
      );
      return res;
    } catch (error) {
      console.log("request failed: ", error);
    }
  }
  const listingData: any = await getData();
  let exchangeRatesSymbols: any = {
    SATS: "\u738b",
    BTC: "m\u0e3f",
    ETH: "m\u039e",
    BDT: "\u09f3",
    NTD: "NT$",
    TRY: "\u20ba",
    MAD: ".\u062f.\u0645.",
    AED: "\u062f.\u0625",
    ALL: "&#76;&#101;&#107;",
    AFN: "&#1547;",
    ARS: "Ar&#36;",
    AWG: "&#402;",
    AUD: "A&#36;",
    AZN: "&#1084;&#1072;&#1085;",
    BSD: "B&#36;",
    BBD: "Bds&#36;",
    BYR: "&#112;&#46;",
    BZD: "&#66;&#90;&#36;",
    BMD: "&#36;",
    BOB: "&#36;&#98;",
    BAM: "&#75;&#77;",
    BWP: "&#80;",
    BGN: "&#1083;&#1074;",
    BRL: "&#82;&#36;",
    BND: "B&#36;",
    KHR: "&#6107;",
    CAD: "C&#36;",
    KYD: "CI&#36;",
    CLP: "CLP&#36;",
    CNY: "&#165;",
    COP: "CO&#36;",
    CRC: "&#8353;",
    HRK: "&#107;&#110;",
    CUP: "&#8369;",
    CZK: "&#75;&#269;",
    DKK: "&#107;&#114;",
    DOP: "&#82;&#68;&#36;",
    XCD: "XCD&#36;",
    EGP: "&#163;",
    SVC: "\u20a1",
    EEK: "&#107;&#114;",
    EUR: "&#8364;",
    FKP: "&#163;",
    FJD: "FJ&#36;",
    GHC: "&#162;",
    GIP: "&#163;",
    GTQ: "&#81;",
    GGP: "&#163;",
    GYD: "GH\u20b5",
    HNL: "&#76;",
    HKD: "HK&#36;",
    HUF: "&#70;&#116;",
    ISK: "&#107;&#114;",
    INR: "\u20b9",
    IDR: "&#82;&#112;",
    IRR: "&#65020;",
    IMP: "&#163;",
    ILS: "&#8362;",
    JMD: "&#74;&#36;",
    JPY: "&#165;",
    JEP: "&#163;",
    KZT: "&#1083;&#1074;",
    KPW: "&#8361;",
    KRW: "&#8361;",
    KGS: "&#1083;&#1074;",
    LAK: "&#8365;",
    LVL: "&#76;&#115;",
    LBP: "&#163;",
    LRD: "&#36;",
    LTL: "&#76;&#116;",
    MKD: "&#1076;&#1077;&#1085;",
    MYR: "&#82;&#77;",
    MUR: "&#8360;",
    MXN: "&#36;",
    MNT: "&#8366;",
    MZN: "&#77;&#84;",
    NAD: "&#36;",
    NPR: "&#8360;",
    ANG: "&#402;",
    NZD: "NZ&#36;",
    NIO: "&#67;&#36;",
    NGN: "&#8358;",
    NOK: "&#107;&#114;",
    OMR: "&#65020;",
    PKR: "&#8360;",
    PAB: "&#66;&#47;&#46;",
    PYG: "&#71;&#115;",
    PEN: "&#83;&#47;&#46;",
    PHP: "&#8369;",
    PLN: "&#122;&#322;",
    QAR: "&#65020;",
    RON: "&#108;&#101;&#105;",
    RUB: "\u20bd",
    SHP: "&#163;",
    SAR: "&#65020;",
    RSD: "&#1044;&#1080;&#1085;&#46;",
    SCR: "&#8360;",
    SGD: "S&#36;",
    SBD: "&#36;",
    SOS: "&#83;",
    ZAR: "&#82;",
    LKR: "&#8360;",
    SEK: "&#107;&#114;",
    CHF: "CHF",
    SRD: "Sr&#36;",
    SYP: "&#163;",
    TWD: "&#78;&#84;&#36;",
    THB: "&#3647;",
    TTD: "&#84;&#84;&#36;",
    TRL: "&#8356;",
    TVD: "&#36;T",
    UAH: "&#8372;",
    GBP: "&#163;",
    USD: "&#36;",
    UYU: "&#36;&#85;",
    UZS: "&#1083;&#1074;",
    VEF: "&#66;&#115;",
    VND: "&#8363;",
    YER: "&#65020;",
    ZWD: "&#90;&#36;",
  };
  return (
    <div className="bg-white">
      {listingData && listingData.statusText === "OK" && (
        <div className="">
          <div className="flex pl-12 pt-8" key={listingData.data._id}>
            <div className="flex w-full mr-12 border-solid border-black border-2">
              <div className="mr-8">
              <Carousel slides={listingData.data.img_urls} autoSlide={true} carouselWidth={"30rem"} effect="fade" autoSlideInterval={3000}/>
                {/* <Slider {...settings}>
                  {listingData.data.img_urls.map((singleImage: any) => {
                      return (
                        <div>
                          <img src={singleImage} width={300} height={300} />
                        </div>
                      );
                    })} */}
                {/* </Slider> */}
              </div>
              <div className="mt-8">
                <p className="text-4xl font-extrabold uppercase">
                  {listingData.data.title}
                </p>
                <p className="text-xl mt-4 max-w-2xl">
                  {listingData.data.desc}
                </p>
                <p className="text-4xl font-extrabold font-bold mt-4">
                  <span
                    dangerouslySetInnerHTML={{
                      __html:
                        exchangeRatesSymbols[
                          listingData.data.currency.toUpperCase()
                        ],
                    }}
                  />
                  &nbsp;
                  <span>{listingData.data.price}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
