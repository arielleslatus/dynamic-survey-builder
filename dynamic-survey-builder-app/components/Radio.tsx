export type RadioProps = {
  id: string;
  groupName: string;
  labelText: string;
  value: string;
  checked: boolean;
  onChange: (newValue: string) => void;
};

export const Radio: React.FC<RadioProps> = ({
  id,
  groupName,
  labelText,
  value,
  checked,
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
        checked={checked}
        onChange={(e) => onChange(e.currentTarget.value)}
      />
      <label htmlFor={id}>{labelText}</label>
    </div>
  );
};
