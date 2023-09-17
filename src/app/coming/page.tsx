import Image from "next/image";

export default function ComingSoon() {
  return (
      <div className="min-[2000px]:max-w-screen-2xl min-[2000px]:m-auto flex flex-col content-center justify-center text-center">
        
        <Image src="/cutedoggo.jpg" className="m-auto mt-40" alt="coming soon" width={400} height={400} />
        <p className="text-5xl">Coming soon!</p>
      </div>
  );
}
