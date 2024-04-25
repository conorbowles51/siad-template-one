import Image from "next/image";
import Button from "./button";
import { data } from "@/util/data";

const LandingSection = () => {
  return ( 
    <section className="w-full whitespace-pre-wrap py-60 flex flex-col relative gap-20 items-center justify-center text-center bg-[url('/landing-bg.jpg')] bg-center bg-cover">
      <div className="absolute w-[100%] h-[100%] bg-black opacity-50 z-[0]"></div>

      <div className="z-10 flex flex-col gap-20 items-center justify-center text-center">
        <h1 className="text-white text-7xl font-bold leading-[6.5rem]">
          {data.landingSection.heading}
        </h1>

        <Button>
          Start here
        </Button>
      </div>
    </section>
  );
}
 
export default LandingSection;