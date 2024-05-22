export interface InputTextProps {
  label: string;
  placeholder: string;
  onValueChange: (value: string) => void;
  id?: string;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}
