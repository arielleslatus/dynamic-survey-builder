export enum QuestionType {
  FREEFORM_TEXT = "Freeform Text",
  MULTIPLE_CHOICE = "Multiple Choice",
}

export type Question = {
  id: number;
  label: string;
  type: QuestionType;
  isRequired: boolean;
  multipleChoiceOptions?: string[];
};

export type Answer = {
  questionId: number;
  answerValue: string;
};

export type SubmittedAnswer = {
  question: Question;
  answerValue: string;
};
