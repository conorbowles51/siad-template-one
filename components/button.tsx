const Button = ({
  children,
  icon
}: {
  children: React.ReactNode,
  icon?: boolean
}) => {
  const padding = icon ? "p-3" : "px-10 py-3";

  return ( 
    <button className={padding + " bg-[color:var(--btn-primary)] rounded-full text-white font-semibold hover:bg-[color:var(--btn-hover)] hover:scale-110 transition-all"}>
      {children}
    </button>
  );
}
 
export default Button;