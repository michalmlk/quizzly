type PrimitiveAnswerType = 'text' | 'number' | 'boolean' | 'date';

type AnswerMapping = {
  text: string;
  number: number;
  boolean: boolean;
  date: Date;
};

type PossibleAnswers<K extends PrimitiveAnswerType> = Record<string, AnswerMapping[K]>;

export type Question<K extends keyof AnswerMapping> = {
  type: K;
  possibleAnswers?: PossibleAnswers<K>;
  correctAnswer: AnswerMapping[K];
};

export type BetweenQuestion<K extends 'date' | 'number'> = {
  type: K;
  possibleAnswers: Record<string, AnswerMapping[K]>;
  correctAnswer: AnswerMapping[K];
};
