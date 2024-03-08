import React from "react";
import "../../main.css"

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
      style={{border: "1px solid black"}}
      onClick={() => {
      }}
    >
      <span className={"p-4"}>{props.label}</span>
    </button>
  );
};

export default KButton;