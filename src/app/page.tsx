import Image from "next/image";
import Link from "next/link";
// import Script from "next/script";

import { Open_Sans } from "next/font/google";
const opensans = Open_Sans({ subsets: ["latin"] });

import ReactGA from "react-ga4";
ReactGA.initialize("G-0THRQG1EXX");
import axios from "axios";

// Font icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDog } from "@fortawesome/free-solid-svg-icons";
// import { faCat } from "@fortawesome/free-solid-svg-icons";
// import { faFish } from "@fortawesome/free-solid-svg-icons";
// import { faCrow } from "@fortawesome/free-solid-svg-icons";
// import { faOtter } from "@fortawesome/free-solid-svg-icons";
// import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";
// import { faUserPlus } from "@fortawesome/free-solid-svg-icons";

async function getData() {
  try {
    const res = await axios.get(`${process.env.API_ENDPOINT}/api/v1/listing`);
    return res;
  } catch (error) {
    console.log("request failed: ", error);
  }
}

export default async function Home() {
  const listingData = await getData();
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
  // ReactGA.event({
  //   category: "landingpage",
  //   action: "landing-page",
  //   label: "landing Page",
  //   value: 99,
  //   nonInteraction: true,
  //   transport: "xhr",
  // });
  return (
    <main className={opensans.className}>
      <div className="min-[2000px]:max-w-screen-2xl min-[2000px]:m-auto">
        {/* Hero area starts */}
        <div className="flex h-[200px] lg:h-[700px] bg-[url('/hero.jpeg')] bg-cover lg:bg-center flex-col">
          <p className="hidden lg:flex text-white lg:text-6xl md:text-2xl mt-16 lg:mt-24 ml-12 lg:ml-20 font-extrabold tracking-wide">
            Find your perfect furry <br />
            companion and embark <br /> on a lifelong <br />
            adventure of love
          </p>
          <p className="md:flex lg:hidden xl:hidden sm:flex text-white text-2xl mt-10 ml-12 font-extrabold">
            Find your <br /> perfect <br />
            furry friend
          </p>
          <p className="hidden lg:flex lg:flex-row md:flex-cols ml-12 lg:ml-20 mt-4">
            <Link
              href="/category/all"
              className="flex flex-col p-12 bg-white mr-10 lg:mr-4 text-xl"
            >
              We verify pet seller <br /> authenticity and ensure <br />{" "}
              cruelty-free breeding.{" "}
              <p className="text-xl mt-4 bg-yellow-700 p-2 text-white">
                Explore more &#10230;
              </p>
            </Link>
            <Link
              href="/category/all"
              className="flex flex-col p-12 bg-white text-xl"
            >
              We found new home for <br /> 62 furry friends <br />
              so far, more to go
              <p className="text-xl mt-4 bg-yellow-700 p-2 text-white">
                Explore more &#10230;
              </p>
            </Link>
          </p>
        </div>
        {/* Hero area ends */}

        {/* Shop area starts here */}
        {/* <div className="bg-white grid lg:grid-cols-4 md:grid-cols-2 gap-4 p-12 text-white">
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
        </div> */}
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
            {listingData && listingData.statusText === "OK" && (
              <>
                {listingData.data.map((item: any) => {
                  return (
                    <div className="flex text-center flex-col" key={item._id}>
                      <Link className="e" href={`/pet/${item._id}`}>
                      <img
                        src={item.img_urls[0]}
                        width={555}
                        height={200}
                        alt="featured dog"
                      />{item.title} |{" "}
                        <span
                          dangerouslySetInnerHTML={{
                            __html:
                              exchangeRatesSymbols[item.currency.toUpperCase()],
                          }}
                        />
                        {item.price}
                      </Link>
                    </div>
                  );
                })}
              </>
            )}
            {/* <div className="flex text-center flex-col">
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
          </div> */}
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
