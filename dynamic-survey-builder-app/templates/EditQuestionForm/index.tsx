import { QuestionType } from "@/app/types";
import { RadioGroup } from "@/components/RadioGroup";
import { TextInput } from "@/components/TextInput";
import { MultipleChoiceForm } from "@/templates/EditQuestionForm/MultipleChoiceForm";

type EditQuestionFormProps = {
  id: string;
  label: string;
  setLabel: (newLabel: string) => void;
  type?: QuestionType;
  setType: (newQuestionType: QuestionType) => void;
  isRequired: boolean;
  toggleIsRequired: () => void;
  setChoices: (newChoices: string[]) => void;
  choices?: string[];
};

export const EditQuestionForm: React.FC<EditQuestionFormProps> = ({
  id,
  label,
  setLabel,
  type,
  setType,
  isRequired,
  toggleIsRequired,
  choices,
  setChoices,
}) => {
  return (
    <div className="flex flex-col gap-4">
      <TextInput
        label="Question Label:"
        name="questionLabel"
        value={label}
        isRequired
        onChange={setLabel}
      />
      <RadioGroup
        groupName={"editQuestionType" + id}
        labelText="Question Type:"
        isRequired
        radios={[
          {
            id: "freeformText",
            labelText: "Freeform Text",
            value: QuestionType.FREEFORM_TEXT,
            checked: type === QuestionType.FREEFORM_TEXT,
          },
          {
            id: "multipleChoice",
            labelText: "Multiple Choice",
            value: QuestionType.MULTIPLE_CHOICE,
            checked: type === QuestionType.MULTIPLE_CHOICE,
          },
        ]}
        onChange={(newValue: string) => setType(newValue as QuestionType)}
      />

      {type === QuestionType.MULTIPLE_CHOICE && (
        <MultipleChoiceForm
          choices={choices}
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
          onChange={toggleIsRequired}
        />
      </div>
    </div>
  );
};
