
const ServiceCard = ({
  Icon,
  title,
  text
}: {
  Icon: React.ElementType,
  title: string,
  text: string
}) => {
  return ( 
    <div className="flex flex-col items-center text-center max-w-96 border border-transparent hover:border-black/60 hover:scale-110 transition-all p-9">
      <Icon className="text-[color:var(--btn-primary)]" size={64} />
      <h3 className="text-3xl font-bold mt-2">{title}</h3>
      <p className="text-black/60 mt-5">{text}</p>
    </div>
  );
}
 
export default ServiceCard;