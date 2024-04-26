import Image from "next/image";
import Separator from "./separator";
import { cn } from "@/util/utils";

const AboutPart = ({
  src,
  title,
  text,
  alt
}: {
  src?: string,
  title: string,
  text: string,
  alt: boolean
}) => {
  const bgStyle = alt ? "bg-zinc-50" : "";
  const flexDir = alt ? "flex-row-reverse" : "flex-row";

  return (
    <article className={cn("flex flex-col items-center py-20", bgStyle)}>
      
      <h1 className="text-4xl font-bold mb-4">{title}</h1>
      <Separator className="mb-10"/>

      <div className={cn("flex justify-center items-center gap-10 max-w-[70rem]", flexDir)}>
        {src && <div className=" h-[500px] w-[300px] relative flex-shrink-0">
          <Image
            src="/portrait.jpg"
            alt="Portrait of (client)"
            layout="fill"
            objectFit="cover"
          />
        </div>}
        <p className="whitespace-pre-wrap">
          {text}
        </p>
      </div>
    </article>
  )
}
 
export default AboutPart;