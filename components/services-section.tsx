import { data, services } from "@/util/data";
import Separator from "./separator";
import ServiceCard from "./service-card";
import Button from "./button";
import Heading from "./heading";

const ServicesSection = () => {
  return ( 
    <section className="flex flex-col my-40 items-center">
      <Heading>How May I Help You?</Heading>

      <Separator className="mt-12 mb-24"/>

      <div className="flex gap-20 mb-20">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            Icon={service.icon}
            title={service.title}
            text={service.text}
          />
        ))}
      </div>

      <Button>
        Contact Me Today
      </Button>
    </section>
  );
}
 
export default ServicesSection;