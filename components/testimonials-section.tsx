import { testimonials } from "@/util/data";
import TestimonialCard from "./testimonial-card";

import { QuoteIcon } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"


const TestimonialsSection = () => {
  return ( 
    <section className="py-32 flex flex-col items-center">
      <QuoteIcon size={50} fill="#cbd5e1" className="text-[#cbd5e1]"/>

      <Carousel className="flex w-[70%]">
        <CarouselContent>
          {testimonials.map((item, index) => (
            <CarouselItem
              key={index}
            >
              <TestimonialCard 
                avatar={item.avatar}
                text={item.text}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="text-[color:var(--btn-primary)]" />
        <CarouselNext className="text-[color:var(--btn-primary)]" />
      </Carousel>

      
    </section>
  );
}
 
export default TestimonialsSection;