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
    
      {!alt && <div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <Separator className="mb-10"/>
      </div>}

      <div className={cn("flex justify-center items-center gap-10 max-w-[70rem]", flexDir)}>
        
        {src && <div className=" h-[360px] w-[300px] relative flex-shrink-0">
          <Image
            src="/portrait.jpg"
            alt="Portrait of (client)"
            layout="fill"
            objectFit="cover"
          />
        </div>}
        <div>
          {alt && <div>
            <h1 className="text-4xl font-bold mb-4">{title}</h1>
            <Separator className="mb-10"/>
          </div>}
          <p className="whitespace-pre-wrap">
            {text}
          </p>
        </div>
      </div>
    </article>
  )
}
 
export default AboutPart;