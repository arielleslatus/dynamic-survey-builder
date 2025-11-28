import { BorderedBox } from "@/components/BorderedBox";
import { Button } from "@/components/Button";
import { RadioGroup } from "@/components/RadioGroup";
import { TextInput } from "@/components/TextInput";
import { EditQuestionForm } from "../../EditQuestionForm";
import { useState } from "react";
import { useQuestionForm } from "@/hooks/useQuestionForm";
import { Question, QuestionType } from "@/app/types";

type SavedQuestionProps = {
  questionData: Question;
  onRemoveQuestion: (questionId: number) => void;
  onSaveQuestion: (question: Question) => void;
};

export const SavedQuestion: React.FC<SavedQuestionProps> = ({
  questionData,
  onRemoveQuestion,
  onSaveQuestion,
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
  } = useQuestionForm(questionData);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const onSaveOrEdit = () => {
    if (isEditMode) {
      if (label.length > 0 && type !== undefined)
        onSaveQuestion({
          id: questionData.id,
          label,
          type,
          isRequired,
          multipleChoiceOptions: choices,
        });
    }
    setIsEditMode((prev) => !prev);
  };

  return (
    <div className="flex flex-row gap-2 w-full">
      <BorderedBox>
        <div className="flex gap-4 w-full justify-between">
          {!isEditMode && (
            <>
              {questionData.type === QuestionType.FREEFORM_TEXT && (
                <TextInput
                  label={questionData.label}
                  name={questionData.label}
                  isReadOnly
                  isRequired={questionData.isRequired}
                  onChange={() => undefined}
                />
              )}
              {questionData.type === QuestionType.MULTIPLE_CHOICE && (
                <RadioGroup
                  groupName={questionData.label + "radioGroup"}
                  labelText={questionData.label}
                  isRequired={questionData.isRequired}
                  radios={
                    questionData.multipleChoiceOptions?.map((c, i) => {
                      return {
                        id: i.toString(),
                        value: c,
                        labelText: c,
                        checked: false,
                      };
                    }) || []
                  }
                  onChange={() => undefined}
                />
              )}
            </>
          )}
          {isEditMode && (
            <EditQuestionForm
              id={questionData.id.toString()}
              label={label}
              setLabel={setLabel}
              type={type}
              setType={setType}
              isRequired={isRequired}
              toggleIsRequired={() => setIsRequired((prev) => !prev)}
              choices={choices}
              setChoices={setChoices}
            />
          )}

          <div className="flex flex-col gap-2">
            <Button
              text={isEditMode ? "Save" : "Edit"}
              onClick={onSaveOrEdit}
            />
            <Button
              text={"Remove"}
              onClick={() => onRemoveQuestion(questionData.id)}
            />
          </div>
        </div>
      </BorderedBox>
    </div>
  );
};
