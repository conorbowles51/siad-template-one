import { data } from "@/util/data";

const Footer = ({
  children
}: {
  children?: React.ReactNode
}) => {
  return ( 
    <footer className="flex flex-col justify-around bg-zinc-900 text-white py-20">
      {children}
      <div className="flex justify-around w-full">
        <p className="italic">Copyright © 2024 {data.footer.name}</p>
        <p>Powered by <span className="font-bold underline">Site in a Day</span> ©</p>
      </div>
    </footer>
  );
}
 
export default Footer;