const heading = ({
  children,
  color
}: {
  children: React.ReactNode,
  color?: string
}) => {
  return (
    <h2 className={"text-5xl font-bold " + (color ? color : "")}>{children}</h2>
  );
}
 
export default heading;