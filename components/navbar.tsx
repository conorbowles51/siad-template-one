import Link from "next/link";
import Logo from "./logo";
import Button from "./button";
import { Facebook, FacebookIcon, Factory, Instagram, Linkedin, LucideFacebook } from "lucide-react";
import { routes } from "@/util/data";

const Navbar = () => {
  return ( 
    <nav className="flex px-40 py-5 justify-between items-center font-semibold bg-white/80">
      <Logo />

      <div className="flex gap-20">
        {routes.map((route, index) => (
          <Link
            key={index}
            href={route.href}
          >
            {route.name}
          </Link>
        ))}

        <div className="flex gap-4">
          <FacebookIcon className="text-[color:orange]" />
          <Instagram className="text-[color:orange]" />
          <Linkedin className="text-[color:orange]" />
        </div>
      </div>
    </nav>
  );
}
 
export default Navbar;