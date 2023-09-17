import Image from "next/image";
import ReactGA from "react-ga4";
// ReactGA.initialize('G-0THRQG1EXX');

export default function ComingSoon() {
  ReactGA.send({
    hitType: "pageview",
    page: "/coming",
    title: "Coming soon",
  });

  return (
    <div className="min-[2000px]:max-w-screen-2xl min-[2000px]:m-auto flex flex-col content-center justify-center text-center">
      <Image
        src="/cutedoggo.jpg"
        className="m-auto mt-24"
        alt="coming soon"
        width={400}
        height={400}
      />
      <p className="text-5xl">Coming soon!</p>
    </div>
  );
}
