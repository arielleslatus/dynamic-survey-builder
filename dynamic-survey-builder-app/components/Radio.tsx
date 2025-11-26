import { ChangeEvent } from "react";

export type RadioProps = {
  id: string;
  groupName: string;
  labelText: string;
  value: string;
  onChange: (newValue: string) => void;
};

export const Radio: React.FC<RadioProps> = ({
  id,
  groupName,
  labelText,
  value,
  onChange,
}) => {
  return (
    <div className="flex flex-row gap-2">
      <input
        type="radio"
        id={id}
        name={groupName}
        value={value}
        className="border-slate-300 border-solid border-1"
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};
