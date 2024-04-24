const heading = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <h2 className="text-5xl font-bold">{children}</h2>
  );
}
 
export default heading;