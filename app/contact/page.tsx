import ContactForm from "@/components/contact-form";
import Heading from "@/components/heading";
import Map from "@/components/map";
import Separator from "@/components/separator";

export default function Contact() {
  return (
    <main className="my-20 flex gap-10 justify-around">
      <div>
        <Separator className="mb-10"/>
        <Heading>Contact</Heading>

        <p className="my-20">123 Main Street, Anytown, USA 12345</p>

        <p>Tel: 086 123 4567 <br/>Email: example@gmail.com</p>
      </div>

      <ContactForm />
    </main>
  );
}
