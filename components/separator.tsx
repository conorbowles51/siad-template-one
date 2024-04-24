const Separator = ({
  className
}: {
  className: string
}) => {
  return ( 
    <div 
      className={className + " w-[100px] border border-black"}
    />
  );
}
 
export default Separator;