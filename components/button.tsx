"use client";

import Link from "next/link";

const Button = ({
  children,
  icon,
  onClick,
  href
}: {
  children: React.ReactNode,
  icon?: boolean,
  onClick?: () => {},
  href?: string
}) => {
  const padding = icon ? "p-3" : "px-10 py-3";
  const style = " bg-[color:var(--btn-primary)] rounded-full text-white font-semibold hover:bg-[color:var(--btn-hover)] hover:scale-110 transition-all";

  if(!href){
    return ( 
      <button 
        className={padding + style}
        onClick={() => {
          if(onClick) {
            onClick();
          }
        }}
      >
        {children}
      </button>
    );
  } else {
    return (
      <Link 
      className={padding + style}
      href={href ? href:""}
      >
        {children}
      </Link>
    )
  }
}
 
export default Button;