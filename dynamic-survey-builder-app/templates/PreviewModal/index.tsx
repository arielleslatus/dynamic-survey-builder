import { Button } from "@/components/Button";
import React, { useState } from "react";
import { Question } from "../PageTemplate";
import { PreviewQuestion } from "./PreviewQuestion";

export type Answer = {
  questionId: number;
  answerValue: string;
};

export type SubmittedAnswer = {
  question: Question;
  answerValue: string;
};

type PreviewModalProps = {
  questions: Question[];
  onClose: () => void;
};

export const PreviewModal: React.FC<PreviewModalProps> = ({
  questions,
  onClose,
}) => {
  const [answers, setAnswers] = useState<Map<number, Answer>>(
    new Map<number, Answer>()
  );
  const [responses, setResponses] = useState<SubmittedAnswer[][]>([]);

  const updateAnswer = (questionId: number, answerValue: string) => {
    const answersCopy = new Map(answers);
    answersCopy.set(questionId, { questionId, answerValue });
    setAnswers(answersCopy);
  };

  const onSubmit = () => {
    const submitted: SubmittedAnswer[] = [];
    answers.forEach((value, key) => {
      const question = questions.find((q) => q.id === key);
      if (question) {
        submitted.push({
          question: question,
          answerValue: value.answerValue,
        });
      }
    });
    setResponses([...responses, submitted]);
    setAnswers(new Map<number, Answer>());
  };

  return (
    <div
      className="flex flex-col absolute bg-white p-8 m-12 rounded-md border-1 border-slate-300 border-solid text-center"
      style={{ width: "calc(100% - calc(0.25rem * 48))" }}
    >
      <p>Preview of Your Survey</p>
      <div className="flex justify-end w-full">
        <Button text="Close" onClick={onClose} />
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-4">
          {questions.map((q) => (
            <PreviewQuestion
              key={q.id}
              question={q}
              onChangeAnswer={updateAnswer}
              answerValue={answers.get(q.id)?.answerValue}
            />
          ))}
        </div>
        <Button text="Submit" onClick={onSubmit} />
        <p>Your Survey Definition: </p>
        <p>{JSON.stringify(questions)}</p>
        {/* TODO: Improve vertical scroll/overflow for this */}
        {responses.length > 0 && (
          <>
            <p>Your Responses: </p>
            <>
              {responses.map((res, i) => (
                <p key={i}>{JSON.stringify(res)}</p>
              ))}
            </>
          </>
        )}
      </div>
    </div>
  );
};
