import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './style.css';
import { FaCalendarAlt } from 'react-icons/fa';
import { DatePickerRightComponentProps } from './types';

const DatePickerRightComponent: React.FC<DatePickerRightComponentProps> = ({ disabled, endDate, setEndDate }) => {

  const handleChange = (date: Date | null) => {
    if (date) {
      const formattedDate = date.toISOString().slice(0, 19); // Format: yyyy-MM-dd'T'HH:mm:ss
      setEndDate(formattedDate);
    } else {
      setEndDate(null);
    }
  };

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={endDate ? new Date(endDate) : null}
        onChange={handleChange}
        dateFormat="yyyy-MM-dd'T'HH:mm:ss"
        className="custom-date-picker-right"
        disabled={disabled}
        minDate={new Date()} // Bugünden önceki tarihler seçilemez
        customInput={
          <div className="input-with-icon">
            <FaCalendarAlt className="calendar-icon" />
            <input
              type="text"
              className="custom-input-right"
              readOnly
              value={endDate ? new Date(endDate).toLocaleDateString('nl-NL') : ''}
            />
          </div>
        }
      />
    </div>
  );
};

export default DatePickerRightComponent;
