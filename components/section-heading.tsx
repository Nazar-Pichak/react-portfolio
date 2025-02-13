import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
}

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-2xl sm:text-4xl text-center font-medium capitalize mb-8">{children}</h2>
  );
}
