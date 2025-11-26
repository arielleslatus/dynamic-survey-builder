"use client";

import { useState } from "react";
import { Form } from "../Form";
import { TextInput } from "@/components/TextInput";
import { BorderedBox } from "@/components/BorderedBox";
import { RadioGroup } from "@/components/RadioGroup";

export enum QuestionType {
  FREEFORM_TEXT = "Freeform Text",
  MULTIPLE_CHOICE = "Multiple Choice",
}

export type Question = {
  label: string;
  type: QuestionType;
  isRequired: boolean;
  multipleChoiceOptions?: string[];
};

export const PageTemplate: React.FC = () => {
  const [questions, setQuestions] = useState<Question[]>([]);

  const addNewQuestion = (newQuestion: Question) => {
    setQuestions([...questions, newQuestion]);
  };
  return (
    <div className="flex justify-center">
      <div
        className="flex flex-col items-center gap-4 py-12"
        style={{ width: `calc(100% - 96px)` }}
      >
        <h1 className="font-bold">Dynamic Survey Builder</h1>
        <div className="flex flex-col gap-8 w-full">
          <BorderedBox>
            {questions.length === 0 && (
              <p>Use the form below to add questions to your survey.</p>
            )}
            {questions.map((q, i) => (
              <div className="flex flex-row gap-2 w-full" key={i}>
                <BorderedBox>
                  <div className="flex gap-2">
                    {q.type === QuestionType.FREEFORM_TEXT && (
                      <TextInput
                        label={q.label}
                        name={q.label}
                        isReadOnly
                        isRequired={q.isRequired}
                      />
                    )}
                    {q.type === QuestionType.MULTIPLE_CHOICE && (
                      <RadioGroup
                        groupName={q.label}
                        labelText={q.label}
                        isRequired={q.isRequired}
                        radios={
                          q.multipleChoiceOptions?.map((c, i) => {
                            return {
                              id: i.toString(),
                              value: c,
                              labelText: c,
                            };
                          }) || []
                        }
                        onChange={() => undefined}
                      />
                    )}
                  </div>
                </BorderedBox>
              </div>
            ))}
          </BorderedBox>
        </div>
        <Form onSubmit={addNewQuestion} />
      </div>
    </div>
  );
};
