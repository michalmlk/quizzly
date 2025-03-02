import { QuestionsData } from '@/schema';

export const animalQuestions: QuestionsData = {
  id: '123abc123',
  title: { en: 'Animals', pl: 'Zwierzęta' },
  imageUrl: 'https://images.pexels.com/photos/50577/hedgehog-animal-baby-cute-50577.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  questions: [
    {
      id: 1,
      question: { en: 'Which mammal can fly?', pl: 'Który ssak potrafi latać?' },
      possibleAnswers: {
        A: { en: 'Bat', pl: 'Nietoperz' },
        B: { en: 'Squirrel', pl: 'Wiewiórka' },
        C: { en: 'Eagle', pl: 'Orzeł' },
        D: { en: 'Penguin', pl: 'Pingwin' },
      },
      correctAnswer: 'A',
    },
    {
      id: 2,
      question: {
        en: 'What is the fastest land animal?',
        pl: 'Jakie jest najszybsze zwierzę lądowe?',
      },
      possibleAnswers: {
        A: { en: 'Cheetah', pl: 'Gepard' },
        B: { en: 'Horse', pl: 'Koń' },
        C: { en: 'Greyhound', pl: 'Chart' },
        D: { en: 'Leopard', pl: 'Lampart' },
      },
      correctAnswer: 'A',
    },
    {
      id: 3,
      question: {
        en: 'Which animal is known for playing dead as a defense mechanism?',
        pl: 'Które zwierzę udaje martwe jako mechanizm obronny?',
      },
      possibleAnswers: {
        A: { en: 'Opossum', pl: 'Opos' },
        B: { en: 'Hedgehog', pl: 'Jeż' },
        C: { en: 'Chameleon', pl: 'Kameleon' },
        D: { en: 'Raccoon', pl: 'Szop' },
      },
      correctAnswer: 'A',
    },
    {
      id: 4,
      question: {
        en: 'What is the largest species of bear?',
        pl: 'Jaki jest największy gatunek niedźwiedzia?',
      },
      possibleAnswers: {
        A: { en: 'Grizzly bear', pl: 'Niedźwiedź grizzly' },
        B: { en: 'Polar bear', pl: 'Niedźwiedź polarny' },
        C: { en: 'Brown bear', pl: 'Niedźwiedź brunatny' },
        D: { en: 'Panda bear', pl: 'Panda wielka' },
      },
      correctAnswer: 'B',
    },
    {
      id: 5,
      question: {
        en: 'Which animal has the longest lifespan?',
        pl: 'Które zwierzę żyje najdłużej?',
      },
      possibleAnswers: {
        A: { en: 'Elephant', pl: 'Słoń' },
        B: { en: 'Bowhead whale', pl: 'Wieloryb grenlandzki' },
        C: { en: 'Giant tortoise', pl: 'Żółw olbrzymi' },
        D: { en: 'Parrot', pl: 'Papuga' },
      },
      correctAnswer: 'B',
    },
  ],
};
