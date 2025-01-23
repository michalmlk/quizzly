import { create } from 'zustand';

export type WayOfConfigurationType = 'json' | 'traditional';

interface BaseQuizData {
  title: string;
  numberOfQuestions: number;
  wayOfConfiguration: WayOfConfigurationType | null;
}

type Store = {
  baseDataForm: BaseQuizData;
  setBaseData: (payload: BaseQuizData) => void;
};

export const useStore = create<Store>()((set) => ({
  baseDataForm: { title: '', numberOfQuestions: 1, wayOfConfiguration: 'traditional' },
  setBaseData: (payload: BaseQuizData) => set(() => ({ baseDataForm: payload })),
}));
