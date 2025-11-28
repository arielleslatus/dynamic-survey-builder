import { Question, QuestionType } from "@/app/types";
import { RadioGroup } from "@/components/RadioGroup";
import { TextInput } from "@/components/TextInput";
import { useMemo } from "react";

type PreviewQuestionProps = {
  question: Question;
  answerValue?: string;
  onChangeAnswer: (questionId: number, answerValue: string) => void;
};

export const PreviewQuestion: React.FC<PreviewQuestionProps> = ({
  question,
  answerValue,
  onChangeAnswer,
}) => {
  const radios = useMemo(() => {
    return (
      question.multipleChoiceOptions?.map((c, i) => {
        return {
          id: i.toString(),
          checked: answerValue === c,
          labelText: c,
          value: c,
        };
      }) || []
    );
  }, [question.multipleChoiceOptions, answerValue]);

  return (
    <div key={question.id}>
      {question.type === QuestionType.FREEFORM_TEXT && (
        <TextInput
          label={question.label}
          name={question.label}
          isRequired={question.isRequired}
          value={answerValue}
          onChange={(value) => onChangeAnswer(question.id, value)}
        />
      )}
      {question.type === QuestionType.MULTIPLE_CHOICE && (
        <RadioGroup
          isRequired={question.isRequired}
          onChange={(value) => onChangeAnswer(question.id, value)}
          labelText={question.label}
          groupName={question.id + question.label}
          radios={radios}
        />
      )}
    </div>
  );
};
