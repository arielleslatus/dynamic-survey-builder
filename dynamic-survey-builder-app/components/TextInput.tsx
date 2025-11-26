import { ChangeEvent } from "react";
import { RedAsterisk } from "./RedAsterisk";

type TextInputProps = {
  label: string;
  name: string;
  value?: string;
  isReadOnly?: boolean;
  isRequired?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
};

export const TextInput: React.FC<TextInputProps> = ({
  label,
  name,
  value,
  isReadOnly,
  isRequired,
  onChange,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <p className="font-semibold">{label}</p>
        {isRequired && <RedAsterisk />}
      </div>
      <input
        type="text"
        name={name}
        className="border-slate-300 border-solid border-1 rounded-sm px-1"
        value={value}
        onChange={onChange}
        readOnly={isReadOnly}
      />
    </div>
  );
};
