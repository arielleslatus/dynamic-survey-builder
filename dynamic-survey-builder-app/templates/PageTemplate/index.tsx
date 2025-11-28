"use client";

import { useState } from "react";
import { AddQuestionForm } from "../AddQuestionForm";
import { QuestionList } from "../QuestionList";
import { Button } from "@/components/Button";
import { PreviewModal } from "../PreviewModal";
import { Question } from "@/app/types";

export const PageTemplate: React.FC = () => {
  const [count, setCount] = useState<number>(1);
  const [questions, setQuestions] = useState<Question[]>([]);
  // TODO: make nicely greyed out background when preview is open
  const [isPreviewOpen, setIsPreviewOpen] = useState<boolean>(false);

  const addNewQuestion = (newQuestion: Omit<Question, "id">) => {
    setQuestions([...questions, { ...newQuestion, id: count }]);
    setCount((prev) => prev + 1);
  };

  const removeQuestion = (id: number) => {
    const newQuestions = questions.filter((q) => q.id !== id);
    setQuestions(newQuestions);
  };

  const updateQuestion = (question: Question) => {
    const newQuestions = questions.map((q) => {
      if (q.id === question.id) {
        return question;
      }
      return q;
    });
    setQuestions(newQuestions);
  };

  return (
    <div className="flex justify-center">
      <div
        className="flex flex-col items-center gap-4 py-12"
        style={{ width: `calc(100% - 96px)` }}
      >
        <h1 className="font-bold">Dynamic Survey Builder</h1>
        <div className="flex flex-row gap-4 w-full">
          {/* TODO: make form and list each 50% to avoid layout shift */}
          <AddQuestionForm onSubmit={addNewQuestion} />
          <div className="flex flex-col gap-4">
            <QuestionList
              questions={questions}
              onRemoveQuestion={removeQuestion}
              onUpdateQuestion={updateQuestion}
            />
            {/* TODO: disable when questions.length === 0 */}
            <Button
              text="Preview Survey"
              onClick={() => setIsPreviewOpen(true)}
            />
          </div>
          {isPreviewOpen && (
            <PreviewModal
              questions={questions}
              onClose={() => setIsPreviewOpen(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
};
