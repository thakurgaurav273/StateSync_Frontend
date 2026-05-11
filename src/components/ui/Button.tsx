import React from "react";

const Button = ({
  children,
  className,
  ...props
}: {
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
}) => {
  return (
    <button className={`text-white px-3 py-1 rounded-sm ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
