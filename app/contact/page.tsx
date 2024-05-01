import ContactForm from "@/components/contact-form";
import Heading from "@/components/heading";
import Map from "@/components/map";
import Separator from "@/components/separator";
import { data } from "@/util/data";

export default function Contact() {
  return (
    <main className="my-20 flex flex-col">
      <div className="flex gap-10 justify-around">
        <div>
          <Separator className="mb-10"/>
          <Heading>Contact</Heading>

          <p className="my-20">123 Main Street, Anytown, USA 12345</p>

          <p>Tel: 086 123 4567 <br/>Email: example@gmail.com</p>

        </div>

        <ContactForm />
      </div>

      <div className="w-full flex justify-around mt-24">
        <iframe 
          className="w-[36rem] h-[36rem] rounded-md"
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.gps.ie/"
        >gps devices</a></iframe>

        <div>
          <Heading>How to Find Us</Heading>

          <p className="max-w-[46rem] p-10 whitespace-pre-wrap">
            {data.map.text}
          </p>
        </div>
      </div>
    </main>
  );
}
