import { useState } from 'react';
import { useForm } from '@mantine/form';

type UseFlowFormParameters<T extends object> = {
  numberOfSteps: number;
  baseData: T;
};

export const useFlowForm = <T extends object>({
  numberOfSteps,
  baseData,
}: UseFlowFormParameters<T>) => {
  const [currentStep, setCurrentStep] = useState(0);

  const baseDataForm = useForm({
    mode: 'uncontrolled',
    initialValues: baseData,
  });

  const handleNext = () => setCurrentStep((prev) => (prev < numberOfSteps ? prev + 1 : prev));
  const handlePrevious = () => setCurrentStep((prev) => (prev > 0 ? prev - 1 : prev));

  return {
    currentStep,
    handleNext,
    handlePrevious,
    baseDataForm,
  };
};
