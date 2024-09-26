export interface DatePickerRightComponentProps {
  disabled?: boolean;
  onChange?: (date: string) => void;
  endDate: Date | null | string;
  setEndDate: (value: Date | null | string) => void;
}
