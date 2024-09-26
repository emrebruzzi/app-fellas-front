import React from "react";
import "./style.css";
import { ButtonComponentProps } from "./types";

const ButtonComponent: React.FC<ButtonComponentProps> = ({ onClick,buttonName }) => (
  <div>
    <button className="button-main" onClick={onClick}>
      {buttonName}
    </button>
  </div>
);

export default ButtonComponent;
