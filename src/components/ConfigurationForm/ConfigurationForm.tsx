import { Button, Group, Select, Stepper, TextInput } from '@mantine/core';
import { useFlowForm } from '@/hooks/useFlowForm';
import { useStore } from '@/store';
import classes from './ConfigurationForm.module.css';

export type WayOfConfigurationType = 'json' | 'traditional';

interface BaseQuizData {
  title: string;
  numberOfQuestions: number;
  wayOfConfiguration: WayOfConfigurationType | null;
}

export const ConfigurationForm = ({ onFinish }: { onFinish: () => void }) => {
  const { handleNext, handlePrevious, currentStep, baseDataForm } = useFlowForm<BaseQuizData>({
    numberOfSteps: 3,
    baseData: {
      numberOfQuestions: 1,
      wayOfConfiguration: 'traditional',
      title: '',
    },
  });
  const configurationWayOptions: { value: WayOfConfigurationType; label: string }[] = [
    { value: 'json', label: 'JSON' },
    { value: 'traditional', label: 'Traditional' },
  ];

  const setBaseData = useStore((store) => store.setBaseData);

  return (
    <div className={classes.main}>
      <div className={classes.stepperWrapper}>
        <form
          onSubmit={baseDataForm.onSubmit((data) => {
            handleNext();
            setBaseData(data);
          })}
        >
          <Stepper active={currentStep}>
            <Stepper.Step label="First step" description="Create an account">
              <TextInput
                withAsterisk
                label="Title"
                placeholder="Type quiz title"
                key={baseDataForm.key('title')}
                {...baseDataForm.getInputProps('title')}
              />
            </Stepper.Step>
            <Stepper.Step label="No. questions" description="Number of questions">
              <TextInput
                withAsterisk
                label="N.o. questions"
                placeholder="Number of questions"
                key={baseDataForm.key('numberOfQuestions')}
                {...baseDataForm.getInputProps('numberOfQuestions')}
              />
              <Select
                label="Way of configuration"
                placeholder="Select"
                defaultValue="traditional"
                data={configurationWayOptions}
                {...baseDataForm.getInputProps('wayOfConfiguration')}
                key={baseDataForm.key('wayOfConfiguration')}
              />
            </Stepper.Step>
            <Stepper.Step label="Summary" description="Check config">
              <h1>Summary</h1>
            </Stepper.Step>
            <Stepper.Completed>
              Completed, click back button to get to previous step
            </Stepper.Completed>
          </Stepper>
          <Group justify="center" mt="xl">
            {currentStep !== 3 && (
              <Button variant="default" onClick={handlePrevious}>
                Back
              </Button>
            )}

            {currentStep === 3 ? (
              <Button onClick={onFinish}>Start creating your questions</Button>
            ) : (
              <Button onClick={handleNext}>Next step</Button>
            )}

            {currentStep === 2 && <Button type="submit">Submit</Button>}
          </Group>
        </form>
      </div>
    </div>
  );
};
