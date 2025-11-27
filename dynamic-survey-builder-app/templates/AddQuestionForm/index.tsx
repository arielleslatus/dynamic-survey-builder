import { Button } from "@/components/Button";
import { Question } from "../PageTemplate";
import { BorderedBox } from "@/components/BorderedBox";
import { EditQuestionForm } from "../EditQuestionForm";
import { useQuestionForm } from "@/hooks/useQuestionForm";

type AddQuestionFormProps = {
  onSubmit: (newQuestion: Omit<Question, "id">) => void;
};

export const AddQuestionForm: React.FC<AddQuestionFormProps> = ({
  onSubmit,
}) => {
  const {
    label,
    setLabel,
    type,
    setType,
    isRequired,
    setIsRequired,
    choices,
    setChoices,
  } = useQuestionForm();

  const onClickSubmit = () => {
    if (label.length > 0 && type !== undefined) {
      setLabel("");
      setType(undefined);
      setIsRequired(false);
      setChoices([]);
      onSubmit({
        label,
        type,
        isRequired,
        multipleChoiceOptions: choices.filter((c) => c.trim().length > 0),
      });
    }
  };

  return (
    <BorderedBox>
      <div className="flex flex-col gap-4 w-full">
        <EditQuestionForm
          id="newQuestion"
          label={label}
          setLabel={setLabel}
          type={type}
          setType={setType}
          isRequired={isRequired}
          toggleIsRequired={() => setIsRequired((prev) => !prev)}
          choices={choices}
          setChoices={setChoices}
        />
        <Button text="Submit" onClick={onClickSubmit} />
      </div>
    </BorderedBox>
  );
};
