import { RedAsterisk } from "./RedAsterisk";
import { Radio, RadioProps } from "./Radio";

type RadioGroupProps = {
  labelText: string;
  groupName: string;
  radios: Omit<RadioProps, "groupName" | "onChange">[];
  onChange: (newValue: string) => void;
  isRequired?: boolean;
};

export const RadioGroup: React.FC<RadioGroupProps> = ({
  labelText,
  groupName,
  radios,
  onChange,
  isRequired,
}) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex flex-row gap-2">
        <p className="font-semibold">{labelText}</p>
        {isRequired && <RedAsterisk />}
      </div>
      {radios.map((radio) => (
        <Radio
          key={radio.id}
          id={radio.id}
          groupName={groupName}
          labelText={radio.labelText}
          value={radio.value}
          onChange={onChange}
        />
      ))}
    </div>
  );
};
