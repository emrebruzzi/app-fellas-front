import React, { useState } from "react";
import { FilterZoneProps } from "./types";
import "./style.css";
import { IoMdArrowDropdown } from "react-icons/io";
import RadioButton from "../RadioButton";

const FilterZone: React.FC<FilterZoneProps> = () => {
  const [selectedTime, setSelectedTime] = useState<string>("");

  const handleChange = (value: string) => {
    setSelectedTime(value);
  };

  return (
    <div className="filter-zone-container d-flex justify-content-start">
      <div className="row">
        <span className="fw-bold">Sort By :</span>
        <button className="button-sort bg-light d-flex justify-content-start align-items-center mb-2">
          Lowest Price
          <IoMdArrowDropdown style={{ color: "purple", marginLeft: "5px" }} />
        </button>
        <span className="fw-bold">Arrival Time :</span>
        <span>
          <RadioButton
            value="time1"
            checked={selectedTime === "time1"}
            onChange={handleChange}
            label={"5:00 AM - 11:59 AM"}
          />
        </span>
        <span>
          <RadioButton
            value="time2"
            checked={selectedTime === "time2"}
            onChange={handleChange}
            label={"12:00 PM - 5:00 PM"}
          />
        </span>
        <span className="fw-bold">Stops</span>

        <span>
          <RadioButton
            value="stopnon"
            checked={selectedTime === "stopnon"}
            onChange={handleChange}
            label={"Non Stop"}
          />
        </span>
        <span>
          <RadioButton
            value="stop1"
            checked={selectedTime === "stop1"}
            onChange={handleChange}
            label={"1 Stop"}
          />
        </span>
        <span>
          <RadioButton
            value="stop2"
            checked={selectedTime === "stop2"}
            onChange={handleChange}
            label={"2+ Stop"}
          />
        </span>
        <span className="fw-bold">Airlines Included : </span>
        <span>
          <RadioButton
            value="airlines1"
            checked={selectedTime === "airlines1"}
            onChange={handleChange}
            label={"Alitalia"}
          />
        </span>
        <span>
          <RadioButton
            value="airlines2"
            checked={selectedTime === "airlines2"}
            onChange={handleChange}
            label={"Lufthansa"}
          />
        </span>
        <span>
          <RadioButton
            value="airlines3"
            checked={selectedTime === "airlines3"}
            onChange={handleChange}
            label={"Air France"}
          />
        </span>
        <span>
          <RadioButton
            value="airlines4"
            checked={selectedTime === "airlines4"}
            onChange={handleChange}
            label={"Brussels Airlines"}
          />
        </span>
      </div>
    </div>
  );
};

export default FilterZone;
