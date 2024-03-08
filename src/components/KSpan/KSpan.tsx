import React from "react";

export interface KSpanProps {
  testIdPrefix: string;
  text?: string;
  theme: "primary" | "secondary";
}

const KSpan: React.FC<KSpanProps> = (props) => {
  return (
    <span>{props.text}</span>
  );
};

export default KSpan;