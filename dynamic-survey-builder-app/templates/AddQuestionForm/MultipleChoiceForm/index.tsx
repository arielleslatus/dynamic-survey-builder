import { Button } from "@/components/Button";
import { useState } from "react";
import { TextInput } from "@/components/TextInput";
import { BulletPoint } from "@/components/BulletPoint";
import { BorderedBox } from "@/components/BorderedBox";

type MultipleChoiceFormProps = {
  choices?: string[];
  onChange: (choices: string[]) => void;
};

export const MultipleChoiceForm: React.FC<MultipleChoiceFormProps> = ({
  choices,
  onChange,
}) => {
  const [count, setCount] = useState<number>(1);
  const [currentChoices, setCurrentChoices] = useState<Map<number, string>>(
    new Map<number, string>(
      choices
        ? ([...choices.map((c, i) => [i, c])] as Iterable<
            readonly [number, string]
          >)
        : [[0, ""]]
    )
  );

  const updateChoiceText = (index: number, value: string) => {
    const newChoices = currentChoices;
    newChoices.set(index, value);
    setCurrentChoices(new Map(newChoices));
    onChange(Array.from(currentChoices.values()));
  };

  return (
    <BorderedBox>
      <div className="flex flex-col gap-2">
        {Array.from(currentChoices).map((c, i) => (
          <div className="flex flex-row items-center gap-2" key={i}>
            <BulletPoint />
            <TextInput
              label=""
              name="choice"
              value={c[1]}
              onChange={(value: string) => updateChoiceText(c[0], value)}
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
