import React from "react";
import { FlightListCardProps } from "./types";
import { MdFlightTakeoff, MdFlightLand } from "react-icons/md";
import './style.css';

const FlightListCard: React.FC<FlightListCardProps> = ({
  departureCity,
  arrivalCity,
  departureTime,
  actualLandingTime,
  flightCode,
  flightDate,
  onBookFlight,
}) => (
  <div className="card m-3">
    <div>
      <div className="row">
        <div className="col-4 d-flex align-items-center justify-content-start">
          <MdFlightTakeoff className="me-1" />{"Departure"} 
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
         Flight Number: {flightCode}
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          <MdFlightLand className="me-1" />{"Arrival"}
        </div>
      </div>
      <div className="row">
        <div className="col-4 d-flex align-items-center justify-content-start">
          {departureTime}
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          <MdFlightTakeoff className="me-1" style={{ color: 'purple', fontSize:'20px' }} />
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          {actualLandingTime}
        </div>
      </div>
      <div className="row">
        <div className="col-4 d-flex align-items-center justify-content-start">
          Departure Airport: {departureCity}
        </div>
        <div className="col-4 d-flex justify-content-center align-items-center">
          {flightDate}
        </div>
        <div className="col-4 d-flex align-items-center justify-content-end">
          Arrival Airport: {arrivalCity}
        </div>
      </div>
      <div className="row booking-button-wrapper">
        <div>
          <button className="button-booking" onClick={onBookFlight}>Book Flight</button>
        </div>
      </div>
    </div>
  </div>
);

export default FlightListCard;
