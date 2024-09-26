import React from 'react';
import { Option } from './types'; // types dosyasından Option türünü alıyoruz

type SwitchSelectorProps = {
  selectedOption: Option;
  onSelect: (option: Option) => void;
};

const SwitchSelector: React.FC<SwitchSelectorProps> = ({ selectedOption, onSelect }) => {
  const handleSelect = (option: Option) => {
    onSelect(option);
  };

  return (
    <div style={{ display: 'flex', borderRadius: '12px', overflow: 'hidden' }}>
      <div
        onClick={() => handleSelect('oneWay')}
        style={{
          padding: '10px',
          textAlign: 'center',
          backgroundColor: selectedOption === 'oneWay' ? '#660099' : 'lightgray',
          color: selectedOption === 'oneWay' ? 'white' : '#660099',
          cursor: 'pointer',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        One Way
      </div>
      <div
        onClick={() => handleSelect('roundTrip')}
        style={{
          flex: 1,
          padding: '10px',
          textAlign: 'center',
          backgroundColor: selectedOption === 'roundTrip' ? '#660099' : 'lightgray',
          color: selectedOption === 'roundTrip' ? 'white' : '#660099',
          cursor: 'pointer',
          transition: 'background-color 0.3s, color 0.3s',
        }}
      >
        Round Trip
      </div>
    </div>
  );
};

export default SwitchSelector;
