import { Button } from "@/components/Button";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";
import { BulletPoint } from "@/components/BulletPoint";
import { BorderedBox } from "@/components/BorderedBox";

type MultipleChoiceFormProps = {
  onChange: (choices: string[]) => void;
};

export const MultipleChoiceForm: React.FC<MultipleChoiceFormProps> = ({
  onChange,
}) => {
  const [count, setCount] = useState<number>(1);
  const [choices, setChoices] = useState<Map<number, string>>(
    new Map<number, string>([[0, ""]])
  );

  const updateChoiceText = (index: number, value: string) => {
    const newChoices = choices;
    newChoices.set(index, value);
    setChoices(new Map(newChoices));
    onChange(Array.from(choices.values()));
  };

  return (
    <BorderedBox>
      <div className="flex flex-col gap-2">
        {Array.from(choices).map((c, i) => (
          <div className="flex flex-row items-center gap-2" key={i}>
            <BulletPoint />
            <TextInput
              label=""
              name="choice"
              value={c[1]}
              onChange={(e) => updateChoiceText(c[0], e.currentTarget.value)}
            />
          </div>
        ))}
      </div>
      <div className="flex flex-row gap-2 items-center ml-6">
        <Button
          text="Add option"
          onClick={() => {
            updateChoiceText(count, "");
            setCount((prev) => prev + 1);
          }}
        />
      </div>
    </BorderedBox>
  );
};
