"use client";

import { FAQ } from "@/util/data";
import Heading from "./heading";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { useEffect, useRef } from "react";

const FAQSection = () => {
  return ( 
    <section className="flex flex-col items-center py-10 mb-20">
      <Heading color="text-[color:var(--btn-primary)]">Frequently Asked Questions</Heading>

      <Accordion 
        type="single" 
        collapsible 
        className="w-[64rem] mt-20"
      >
        {FAQ.map((q, index) => (
          <AccordionItem value={q.title} key={index}>
            <AccordionTrigger className="text-[1rem]">
              {q.title}
            </AccordionTrigger>
            <AccordionContent className="text-[1rem] text-black/80 whitespace-pre-wrap">
              {q.text}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>  
  );
}
 
export default FAQSection;