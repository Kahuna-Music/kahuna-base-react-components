import React from "react";

export interface KButtonProps {
  testIdPrefix: string;
  label?: string;
  theme: "primary" | "secondary";
  disabled?: boolean;
}

const KButton: React.FC<KButtonProps> = (props) => {
  return (
    <button
      disabled={props.disabled}
      data-testid={`${props.testIdPrefix}`}
      className={`border-2`}
      onClick={() => {
      }}
    >
      <span className={"p-4"}>{props.label}</span>
    </button>
  );
};

export default KButton;