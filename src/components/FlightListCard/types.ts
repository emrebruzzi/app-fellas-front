export interface Flight {
  route: any;
  scheduleDateTime: string;
  actualLandingTime: string;
  aircraftType: any;
  id: string;
  departure?: {
    city?: string;
    airport?: string;
    scheduledDeparture?: string;
  };
  arrival?: {
    city?: string;
    airport?: string;
    scheduledArrival?: string;
  };
  publicFlightState?: {
    flightStates?: Array<{ status: string }>;
  };
  flightNumber: string;
  airlineCode: string;
  baggageClaim?: { belts: Array<string> };
  estimatedLandingTime?: string;
  expectedTimeOnBelt?: string;
  terminal?: string;
}

export interface FlightListCardProps {
  actualLandingTime: string;
  departureCity?: string;
  arrivalCity?: string;
  departureTime?: string;
  departureAirport?: string;
  arrivalAirport?: string;
  flightNumber?: string;
  flightCode?: string;
  flightDate: string;
  onBookFlight: () => void;
}
