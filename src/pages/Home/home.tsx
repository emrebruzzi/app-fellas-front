import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios, { AxiosResponse } from "axios";
import FlightListCard from "../../components/FlightListCard";
import { Flight } from "../../components/FlightListCard/types";
import SelectComponent from "../../components/Select";
import DatePickerLeftComponent from "../../components/DatePickerLeft";
import DatePickerRightComponent from "../../components/DatePickerRight";
import SwitchSelector from "../../components/SwitchSelector";
import ButtonComponent from "../../components/Button";
import { SwitchSelectorOption } from "./../../components/SwitchSelector/types";
import { Destination } from "./../../components/Select/types";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./style.css";
import { FaPlane } from "react-icons/fa";
import ImageCard from "../../components/ImageCard";
import ImgOne from "./assets/image-1.jpg";
import ImgTwo from "./assets/image-2.jpg";
import ImgThree from "./assets/image-3.jpg";
import FilterZone from "../../components/FilterZone";

const APP_ID = import.meta.env.VITE_APP_ID;
const APP_KEY = import.meta.env.VITE_APP_KEY;

const Home: React.FC = () => {
  const [flights, setFlights] = useState<Flight[]>([]);
  const [loading, setLoading] = useState(true);
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [selectedOption, setSelectedOption] =
    useState<SwitchSelectorOption>("oneWay");
  const [options, setOptions] = useState<Destination[]>([]);
  const [startDate, setStartDate] = useState<Date | null | string>(
    new Date().toISOString().slice(0, 19)
  );
  const [endDate, setEndDate] = useState<Date | null | string>(null);

  const fetchFlights = async () => {
    setFetching(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await axios.get("/api/public-flights/flights", {
        headers: {
          Accept: "application/json",
          app_id: APP_ID,
          app_key: APP_KEY,
          ResourceVersion: "v4",
        },
        params: {
          fromDateTime: startDate,
          toDateTime: endDate,
          includedelays: false,
          page: 0,
          sort: "+scheduleTime",
        },
      });
      if (Array.isArray(response.data)) {
        setFlights(response.data);
      } else if (response.data.flights) {
        setFlights(response.data.flights);
      } else {
        console.error("Unexpected response structure:", response.data);
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(err as Error);
      setLoading(false);
    } finally {
      setFetching(false);
    }
  };

  useEffect(() => {
    const fetchDestinations = async () => {
      try {
        const response: AxiosResponse<any> = await axios.get(
          "/api/public-flights/destinations",
          {
            headers: {
              Accept: "application/json",
              app_id: APP_ID,
              app_key: APP_KEY,
              ResourceVersion: "v4",
            },
          }
        );

        const destinationsData = Array.isArray(response.data)
          ? response.data
          : response.data.destinations || [];

        const formattedOptions: Destination[] = destinationsData.map(
          (item: { id: any; iata: any; name: any; country: any }) => ({
            id: item.id,
            value: item.id || item.iata,
            label: item.name || item.country,
            name: item.name,
          })
        );

        setOptions(formattedOptions);
      } catch (error) {
        console.error("Error fetching destinations:", error);
      }
    };

    fetchDestinations();
  }, []);

  const formatTime = (timeString: string) => {
    const date = new Date(timeString);
    const options: Intl.DateTimeFormatOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    };
    return date.toLocaleTimeString("tr-TR", options);
  };

  const formatDate = (dateString: string | number | Date) => {
    const date = new Date(dateString);
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  };

  const onBookFlight = async (flight: Flight) => {
    const createFlightParams = {
      departureTime: flight.scheduleDateTime,
      arrivalTime: flight.actualLandingTime,
      flightTime: flight.scheduleDateTime,
      departureAirport: flight.route.destinations[0] || "Unknown",
      arrivalAirport: flight.route.destinations[1] || "Unknown",
      flightCode: flight.flightNumber,
    };

    try {
      const response = await axios.post(
        "http://localhost:3000/my-flights",
        createFlightParams
      );
      console.log("Flight booked successfully:", response.data);
      toast.success("Flight booked successfully!"); // Başarılı rezervasyon mesajı
    } catch (error) {
      console.error("Error booking flight:", error);
      toast.error("Error booking flight. Please try again."); // Hata mesajı
    }
  };

  return (
    <div>
      <ToastContainer /> {/* ToastContainer burada olmalı */}
      <div className="row d-flex align-items-start">
        <div className="col-9">
          <div className="card m-3">
            <div className="row m-1">
              <div className="text-wrapper col fw-bold d-flex justify-content-start align-items-center">
                <FaPlane style={{ color: "black", marginRight: "8px" }} />
                BOOK YOUR FLIGHT
              </div>
              <div className="col selector-wrapper d-flex justify-content-end align-items-center">
                <SwitchSelector
                  selectedOption={selectedOption}
                  onSelect={setSelectedOption}
                />
              </div>
            </div>
            <div className="row">
              <div className="col-md-3">
                <SelectComponent borderRadius="left" options={options} />
              </div>
              <div className="col-md-3">
                <SelectComponent borderRadius="right" options={options} />
              </div>
              <div className="col-md-3">
                <DatePickerLeftComponent
                  startDate={startDate}
                  setStartDate={setStartDate}
                />
              </div>
              <div className="col-md-3">
                <DatePickerRightComponent
                  endDate={endDate}
                  setEndDate={setEndDate}
                  disabled={selectedOption === "oneWay"}
                />
              </div>
            </div>
            <div className="row m-1">
              <div className="button-wrapper">
                <ButtonComponent
                  onClick={fetchFlights}
                  buttonName={"Show Flight"}
                />
              </div>
            </div>
          </div>
          <div className="row d-flex align-items-start">
            <div className="col-9">
              {fetching ? (
                <div className="text-center">
                  <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                  <p>Loading flights...</p>
                </div>
              ) : flights.length === 0 ? (
                <div className="text-center">No flights available.</div>
              ) : (
                flights.map((flight) => {
                  if (!flight.route || !flight.scheduleDateTime) {
                    console.error("Missing flight data:", flight);
                    return null;
                  }
                  return (
                    <FlightListCard
                      key={flight.id}
                      departureCity={flight.route.destinations[0]}
                      arrivalCity={flight.route.destinations[1] || "Unknown"}
                      departureTime={formatTime(flight.scheduleDateTime)}
                      actualLandingTime={flight.actualLandingTime || "Unknown"}
                      flightCode={flight.flightNumber}
                      onBookFlight={() => onBookFlight(flight)}
                      flightDate={formatDate(flight.scheduleDateTime)}                     
                    />
                  );
                })
              )}
            </div>
            <div className="col-3">
              <FilterZone />
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="mb-2">
              <ImageCard link={ImgOne} />
            </div>
            <div className="mb-2">
              <ImageCard link={ImgTwo} />
            </div>
            <div className="mb-2">
              <ImageCard link={ImgThree} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
