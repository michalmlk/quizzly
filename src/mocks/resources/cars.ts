import { QuestionsData } from '@/schema';

export const carQuestions: QuestionsData = {
  id: '234abc234',
  title: {
    pl: 'Samochody',
    en: 'Cars',
  },
  imageUrl: 'https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  questions: [
    {
      id: 1,
      question: {
        en: 'Which company produces the Mustang?',
        pl: 'Która firma produkuje model Mustang?',
      },
      possibleAnswers: {
        A: { en: 'Ford', pl: 'Ford' },
        B: { en: 'Chevrolet', pl: 'Chevrolet' },
        C: { en: 'Dodge', pl: 'Dodge' },
        D: { en: 'BMW', pl: 'BMW' },
      },
      correctAnswer: 'A',
    },
    {
      id: 2,
      question: {
        en: 'What country does the Lamborghini brand originate from?',
        pl: 'Z jakiego kraju pochodzi marka Lamborghini?',
      },
      possibleAnswers: {
        A: { en: 'Germany', pl: 'Niemcy' },
        B: { en: 'Italy', pl: 'Włochy' },
        C: { en: 'France', pl: 'Francja' },
        D: { en: 'USA', pl: 'USA' },
      },
      correctAnswer: 'B',
    },
    {
      id: 3,
      question: {
        en: 'What is the best-selling car of all time?',
        pl: 'Jaki jest najlepiej sprzedający się samochód w historii?',
      },
      possibleAnswers: {
        A: { en: 'Volkswagen Beetle', pl: 'Volkswagen Garbus' },
        B: { en: 'Toyota Corolla', pl: 'Toyota Corolla' },
        C: { en: 'Ford Model T', pl: 'Ford Model T' },
        D: { en: 'Honda Civic', pl: 'Honda Civic' },
      },
      correctAnswer: 'B',
    },
    {
      id: 4,
      question: {
        en: 'Which car manufacturer introduced the first mass-produced hybrid car?',
        pl: 'Który producent samochodów wprowadził pierwszy masowo produkowany samochód hybrydowy?',
      },
      possibleAnswers: {
        A: { en: 'Toyota', pl: 'Toyota' },
        B: { en: 'Honda', pl: 'Honda' },
        C: { en: 'Tesla', pl: 'Tesla' },
        D: { en: 'Ford', pl: 'Ford' },
      },
      correctAnswer: 'A',
    },
    {
      id: 5,
      question: {
        en: 'Which of these car brands is not originally from Europe?',
        pl: 'Która z tych marek samochodów nie pochodzi z Europy?',
      },
      possibleAnswers: {
        A: { en: 'Ferrari', pl: 'Ferrari' },
        B: { en: 'Mercedes-Benz', pl: 'Mercedes-Benz' },
        C: { en: 'Chevrolet', pl: 'Chevrolet' },
        D: { en: 'Volvo', pl: 'Volvo' },
      },
      correctAnswer: 'C',
    },
  ],
};
