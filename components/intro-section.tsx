import Image from "next/image";
import Separator from "./separator";
import { data } from "@/util/data";
import Button from "./button";

const IntroSection = () => {
  return ( 
    <section className="flex px-72 my-20 gap-20 items-center">
      <div className=" h-[700px] w-[500px] relative flex-shrink-0">
        <Image
          src="/portrait.jpg"
          alt="Portrait of (client)"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div>
        <p className="text-2xl">{data.introSection.role}</p>
        <h2 className="text-4xl font-bold">{data.introSection.name}</h2>

        <Separator className="my-10"/>

        <p className=" text-black/60 mb-10">{data.introSection.text}</p>

        <Button>
          Read my story
        </Button>
      </div>
    </section>
  );
}
 
export default IntroSection;