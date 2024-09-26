import { MyFlightCardProps } from "./types";
import './style.css'

const MyFlightCard: React.FC<MyFlightCardProps> = ({
  arrivalTime,
  departureTime,
  departureAirport,
  arrivalAirport,
  flightTime,
  flightCode,
}) => (
  <div className="card w-100">
    <div className="row">
      <div className="col-6 ">
        <div>
        <div className="top-line row d-flex align-items-center">
          {departureTime}--{arrivalTime}
        </div>
        <div className="row">
          <div className="col-4  d-flex justify-content-center">{}</div>
          <div className="col-4 d-flex justify-content-center">{}</div>
          <div className="col-4 d-flex justify-content-center">{departureAirport}-{arrivalAirport}</div>
        </div>
        <div className="row">
          <div className="col-4  d-flex justify-content-center "><a href="/">Flight Details</a></div>
          <div className="col-4 d-flex justify-content-center ">{flightTime}</div>
          <div className="col-4 d-flex justify-content-center ">{flightCode}</div>
        </div>
        </div>
      

      </div>
      <div className="col-6 d-flex justify-content-center align-items-center">
       <div className="card inside-card col-2">50$ BASIC</div>
       <div className="card inside-card col-2">100$ SILVER</div>
       <div className="card inside-card col-2">150$ SILVER+</div>
       <div className="card inside-card col-2">200$ GOLD</div>

      </div>
    </div>
  </div>
);

export default MyFlightCard;
