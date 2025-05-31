import React from "react";

export const Button = ({
  children,
  className = "",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) => (
  <button className={`transition-all ${className}`} {...props}>
    {children}
  </button>
);
