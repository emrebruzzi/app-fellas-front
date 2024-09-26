import { RadioButtonProps } from "./types";
import './style.css'

const RadioButton: React.FC<RadioButtonProps> = ({ value, checked, onChange, label }) => {
    return (
      <label className="radio-label">
        <input
          type="radio"
          value={value}
          checked={checked}
          onChange={() => onChange(value)}
          className="radio-input"
        />
        <span className={checked ? 'radio-checked' : 'radio-unchecked'}></span>
        {label}
      </label>
    );
  };
  
  export default RadioButton;
