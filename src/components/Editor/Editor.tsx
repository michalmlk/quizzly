import { useEffect, useRef } from 'react';
import Editor, { useMonaco } from '@monaco-editor/react';
import Ajv from 'ajv';
import { questionsSchema } from '@/schema';

export const SchemaEditor = () => {
  const editorRef = useRef<typeof Editor | null>(null);
  const monaco = useMonaco();

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

  const validateJson = (value: string): boolean => {
    const parsedValue = JSON.parse(value);
    return validate(parsedValue);
  };

  const handleEditorDidMount = (editor) => {
    editorRef.current = editor;
  };

  const handleChange = (value: string | undefined) => {
    validateJson(value ?? '');
  };
  return (
    <Editor
      height="100vh"
      defaultLanguage="json"
      value={JSON.stringify({ questions: {} }, null, 2)}
      onChange={handleChange}
      onMount={handleEditorDidMount}
    />
  );
};
