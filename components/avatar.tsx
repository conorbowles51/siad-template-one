const Avatar = ({
  children
}: {
  children: React.ReactNode
}) => {
  return ( 
    <div className="flex items-center justify-center rounded-[100%] flex-shrink-0 text-[color:var(--btn-primary)] text-2xl font-strong">
      - {children}
    </div>
  );
}
 
export default Avatar;