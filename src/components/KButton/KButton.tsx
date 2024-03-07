import React, {useState} from "react";
import {KButtonProps} from "./KButton.types";

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