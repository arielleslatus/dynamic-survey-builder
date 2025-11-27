import { BorderedBox } from "@/components/BorderedBox";
import { Question } from "../PageTemplate";
import { SavedQuestion } from "./SavedQuestion";

type QuestionListProps = {
  questions: Question[];
  onUpdateQuestion: (question: Question) => void;
  onRemoveQuestion: (id: number) => void;
};

export const QuestionList: React.FC<QuestionListProps> = ({
  questions,
  onUpdateQuestion,
  onRemoveQuestion,
}) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <BorderedBox>
        {questions.length === 0 && (
          <p>Use the form to add questions to your survey.</p>
        )}
        {questions.map((q, i) => (
          <SavedQuestion
            key={i}
            questionData={q}
            onRemoveQuestion={onRemoveQuestion}
            onSaveQuestion={onUpdateQuestion}
          />
        ))}
      </BorderedBox>
    </div>
  );
};
