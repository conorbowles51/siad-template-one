import { data } from "@/util/data";

const Footer = () => {
  return ( 
    <footer className="flex justify-around bg-zinc-900 text-white py-20">
      <p className="italic">Copyright © 2024 {data.footer.name}</p>
      <p>Powered by <span className="font-bold underline">Site in a Day</span> ©</p>
    </footer>
  );
}
 
export default Footer;