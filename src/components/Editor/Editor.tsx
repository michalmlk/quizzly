import { useEffect, useRef, useState } from 'react';
import Editor, { OnMount, useMonaco } from '@monaco-editor/react';
import Ajv from 'ajv';
import monaco from 'monaco-editor';
import { useTranslation } from 'react-i18next';
import { Button } from '@mantine/core';
import { questionsSchema } from '@/schema';

const initialSchema = {
  questions: [
    {
      id: 1,
      question: {
        pl: '',
      },
      possibleAnswers: {
        A: {
          pl: '',
        },
        B: {
          pl: '',
        },
      },
      correctAnswer: 'A',
    },
  ],
};

export const SchemaEditor = () => {
  const editorRef = useRef<monaco.editor.IStandaloneCodeEditor>(null);
  const monaco = useMonaco();
  const [isSchemaValid, setIsSchemaValid] = useState(false);

  const { t } = useTranslation();

  const handleCreateQuiz = () => {
    console.log(editorRef.current!.getValue());
  };

  useEffect(() => {
    if (monaco) {
      monaco.languages.json.jsonDefaults.setDiagnosticsOptions({
        validate: true,
        schemas: [
          {
            uri: 'https://example.com/schema.json',
            fileMatch: ['*'],
            schema: questionsSchema,
          },
        ],
      });
    }
  }, [monaco]);

  const ajv = new Ajv({ allErrors: true });
  const validate = ajv.compile(questionsSchema);

  const handleEditorDidMount = (editor: Parameters<OnMount>[0]) => {
    editorRef.current = editor;
  };

  const handleChange = (value: string | undefined) => {
    const parsedValue = JSON.parse(value ?? '');
    const isValid = validate(parsedValue);
    setIsSchemaValid(isValid);
  };
  return (
    <>
      <Button onClick={handleCreateQuiz} disabled={!isSchemaValid}>
        {t('button save')}
      </Button>
      <Editor
        height="80vh"
        defaultLanguage="json"
        value={JSON.stringify(initialSchema, null, 2)}
        onChange={handleChange}
        onMount={handleEditorDidMount}
      />
    </>
  );
};
