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
      className={``}
      onClick={() => {
      }}
    >
      <span>{props.label}</span>
    </button>
  );
};

export default KButton;