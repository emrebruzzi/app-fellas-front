import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./style.css";
import { FaCalendarAlt } from "react-icons/fa";
import { DatePickerLeftProps } from "./types";

const DatePickerLeftComponent: React.FC<DatePickerLeftProps> = ({
  startDate,
  setStartDate,
}) => {
  const handleChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toISOString().slice(0, 19); // Format: yyyy-MM-dd'T'HH:mm:ss
      setStartDate(formattedDate);
    } else {
      setStartDate(null);
    }
  };

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={startDate ? new Date(startDate) : null}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd'T'HH:mm:ss"
        className="custom-date-picker-left"
        minDate={new Date()}
        customInput={
          <div className="input-with-icon">
            <FaCalendarAlt className="calendar-icon" />
            <input
              type="text"
              className="custom-input-left"
              readOnly
              value={startDate ? new Date(startDate).toLocaleDateString("nl-NL") : ""}
            />
          </div>
        }
      />
    </div>
  );
};

export default DatePickerLeftComponent;
