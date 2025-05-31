import React from "react";

export const Card = ({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`bg-white shadow rounded-lg ${className}`}>{children}</div>
);

export const CardContent = ({
  children,
  className = "",
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={`p-4 ${className}`}>{children}</div>
);
