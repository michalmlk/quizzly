import { http, HttpResponse } from 'msw';
import { animalQuestions, carQuestions, fashionQuestions, techQuestions } from '@/mocks/resources';
import { QuestionsData } from '@/schema';

const allResources: QuestionsData[] = [
  animalQuestions,
  carQuestions,
  fashionQuestions,
  techQuestions,
];

export const handlers = [
  http.get('/quizes/:id', ({ params }) => {
    const { id } = params;
    if (id) {
      const res = allResources.find((resource) => resource.id === id);

      return HttpResponse.json(res);
    }
    return HttpResponse.json(allResources[0]);
  }),
  http.get('/quizes', () => HttpResponse.json(allResources)),
];
