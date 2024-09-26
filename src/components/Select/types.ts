export interface Destination {
  id: string; 
  value: string | number; 
  label: string;
  name: string; 
}

export interface SelectComponentProps {
  options: Destination[];
  borderRadius?: "left" | "right" | "default";
}
