import { Question, QuestionType } from "@/templates/PageTemplate";
import { useState } from "react";

// TODO: make typed return type for this hook

export const useQuestionForm = (question?: Question) => {
  const [label, setLabel] = useState<string>(question?.label || "");
  const [type, setType] = useState<QuestionType | undefined>(
    question?.type || undefined
  );
  const [isRequired, setIsRequired] = useState<boolean>(
    question?.isRequired || false
  );
  const [choices, setChoices] = useState<string[]>(
    question?.multipleChoiceOptions || []
  );

  return {
    label,
    setLabel,
    type,
    setType,
    isRequired,
    setIsRequired,
    choices,
    setChoices,
  };
};
