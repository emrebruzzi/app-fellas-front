import { useEffect, useState } from "react";
import axios from "axios";
import { MyFlightCardProps } from "../../components/MyFlightCard/types";
import MyFlightCard from "../../components/MyFlightCard";
import "./style.css";


const formatTime = (timeString?: string) => {
  if (!timeString) return "N/A";
  const date = new Date(timeString);
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  return `${hours}:${minutes}`;
};

const formatFlightTimeToMinutes = (flightTime?: string) => {
  if (!flightTime) return "N/A";

  const [hours, minutes] = flightTime.split(".").map(Number);
  const totalMinutes = (hours || 0) * 60 + (minutes || 0);

  return totalMinutes.toString();
};

export default function MyFlights() {
  const [flights, setFlights] = useState<MyFlightCardProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await axios.get("http://localhost:3000/my-flights", {
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (Array.isArray(response.data)) {
          setFlights(response.data);
        } else {
          setError("An unknown error");
        }
      } catch (err) {
        console.error(err);
        if (axios.isAxiosError(err)) {
          setError(err.message);
        } else if (err instanceof Error) {
          setError(err.message);
        } else {
          setError("An unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading) return <div>Yükleniyor...</div>;
  if (error) return <div>Hata: {error}</div>;

  return (
    <div className="main-container d-flex flex-column align-items-center">
      {flights.map((flight) => (
        <div className="flight-card-container w-100 mb-3">
          <MyFlightCard
            key={flight.id}
            arrivalTime={formatTime(flight.arrivalTime)}
            departureTime={formatTime(flight.departureTime)}
            id={flight.id}
            departureAirport={flight.departureAirport}
            arrivalAirport={flight.arrivalAirport}
            flightCode={flight.flightCode}

          />
        </div>
      ))}
    </div>
  );
}
