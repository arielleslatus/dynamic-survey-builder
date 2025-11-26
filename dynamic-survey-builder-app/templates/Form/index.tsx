import { Button } from "@/components/Button";
import { useState } from "react";
import { Question, QuestionType } from "../PageTemplate";
import { TextInput } from "@/components/TextInput";
import { MultipleChoiceForm } from "./MultipleChoiceForm";
import { BorderedBox } from "@/components/BorderedBox";
import { RadioGroup } from "@/components/RadioGroup";

type FormProps = {
  onSubmit: (newQuestion: Question) => void;
};

export const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const [label, setLabel] = useState<string>("");
  const [type, setType] = useState<QuestionType | null>(null);
  const [isRequired, setIsRequired] = useState<boolean>(false);
  const [choices, setChoices] = useState<string[]>([]);

  const onClickSubmit = () => {
    if (label.length > 0 && type !== null) {
      setLabel("");
      setType(null);
      onSubmit({
        label,
        type,
        isRequired,
        multipleChoiceOptions: choices,
      });
    }
  };

  return (
    <BorderedBox>
      <div className="flex flex-col gap-4">
        <TextInput
          label="Question Label:"
          name="questionLabel"
          value={label}
          isRequired
          onChange={(e) => setLabel(e.currentTarget.value)}
        />
        <RadioGroup
          groupName="questionType"
          labelText="Question Type:"
          isRequired
          radios={[
            {
              id: "freeformText",
              labelText: "Freeform Text",
              value: QuestionType.FREEFORM_TEXT,
            },
            {
              id: "multipleChoice",
              labelText: "Multiple Choice",
              value: QuestionType.MULTIPLE_CHOICE,
            },
          ]}
          onChange={(newValue: string) => setType(newValue as QuestionType)}
        />

        {type === QuestionType.MULTIPLE_CHOICE && (
          <MultipleChoiceForm
            onChange={(newChoices: string[]) => setChoices(newChoices)}
          />
        )}
        <div className="flex flex-row gap-2">
          <label htmlFor="required" className="font-semibold">
            Is Required?
          </label>
          <input
            type="checkbox"
            id="required"
            name="required"
            checked={isRequired}
            onChange={() => setIsRequired((prev) => !prev)}
          />
        </div>
        <Button text="Submit" onClick={onClickSubmit} />
      </div>
    </BorderedBox>
  );
};
