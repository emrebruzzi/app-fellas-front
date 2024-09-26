import React from "react";
import Select, { components } from "react-select";
import { SelectComponentProps } from "./types"; // Types dosyanızın yolu
import { FaPlane } from "react-icons/fa";

const SelectComponent: React.FC<SelectComponentProps> = ({ options, borderRadius }) => {
  const customStyles = {
    control: (provided: any) => {
      const radius =
        borderRadius === "left"
          ? "12px 0 0 12px"
          : borderRadius === "right"
          ? "0 12px 12px 0"
          : "12px";

      return {
        ...provided,
        width: "250px",
        borderRadius: radius,
        boxShadow: "none",
        textAlign: "left",
      };
    },
    option: (provided: any, state: any) => ({
      ...provided,
      color: state.isSelected ? "black" : "grey",
      backgroundColor: state.isSelected ? "lightgrey" : "white",
    }),
  };

  const customIndicatorSeparator = () => null;

  const customDropdownIndicator = (props: any) => (
    <components.DropdownIndicator {...props}>
      {borderRadius === "left" ? (
        <FaPlane style={{ transform: 'rotate(-45deg)', color: 'purple' }} />
      ) : borderRadius === "right" ? (
        <FaPlane style={{ transform: 'rotate(45deg)', color: 'purple' }} />
      ) : null}
    </components.DropdownIndicator>
  );

  return (
    <Select
      options={options}
      styles={customStyles}
      components={{ IndicatorSeparator: customIndicatorSeparator, DropdownIndicator: customDropdownIndicator }}
      getOptionLabel={(option) => option.label} // Option label ayarlama
      getOptionValue={(option) => String(option.value)} // Option value ayarlama
    />
  );
};

export default SelectComponent;
