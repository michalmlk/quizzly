import { QuestionsData } from '@/schema';

export const techQuestions: QuestionsData = {
  id: '132132abdas123',
  title: {
    pl: 'Technologia',
    en: 'Technology',
  },
  imageUrl: 'https://images.pexels.com/photos/123335/pexels-photo-123335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  questions: [
    {
      id: 1,
      question: { en: 'What does CPU stand for?', pl: 'Co oznacza skrót CPU?' },
      possibleAnswers: {
        A: { en: 'Central Processing Unit', pl: 'Jednostka centralna przetwarzania' },
        B: { en: 'Computer Personal Unit', pl: 'Jednostka osobista komputera' },
        C: { en: 'Core Processing Utility', pl: 'Jednostka przetwarzania rdzeniowego' },
        D: { en: 'Central Peripheral Unit', pl: 'Jednostka centralna peryferii' },
      },
      correctAnswer: 'A',
    },
    {
      id: 2,
      question: {
        en: 'Which programming language is primarily used for web development?',
        pl: 'Jaki język programowania jest głównie używany do tworzenia stron internetowych?',
      },
      possibleAnswers: {
        A: { en: 'Python', pl: 'Python' },
        B: { en: 'Java', pl: 'Java' },
        C: { en: 'JavaScript', pl: 'JavaScript' },
        D: { en: 'C++', pl: 'C++' },
      },
      correctAnswer: 'C',
    },
    {
      id: 3,
      question: {
        en: 'Which company developed the first commercial graphical web browser?',
        pl: 'Która firma opracowała pierwszą komercyjną graficzną przeglądarkę internetową?',
      },
      possibleAnswers: {
        A: { en: 'Microsoft', pl: 'Microsoft' },
        B: { en: 'Netscape', pl: 'Netscape' },
        C: { en: 'Mozilla', pl: 'Mozilla' },
        D: { en: 'Google', pl: 'Google' },
      },
      correctAnswer: 'B',
    },
    {
      id: 4,
      question: {
        en: 'What is the name of Apple’s mobile operating system?',
        pl: 'Jak nazywa się mobilny system operacyjny Apple?',
      },
      possibleAnswers: {
        A: { en: 'Android', pl: 'Android' },
        B: { en: 'iOS', pl: 'iOS' },
        C: { en: 'Windows Mobile', pl: 'Windows Mobile' },
        D: { en: 'MacOS', pl: 'MacOS' },
      },
      correctAnswer: 'B',
    },
    {
      id: 5,
      question: {
        en: 'Which technology is used to secure online transactions?',
        pl: 'Która technologia jest używana do zabezpieczania transakcji online?',
      },
      possibleAnswers: {
        A: { en: 'Blockchain', pl: 'Blockchain' },
        B: { en: 'Wi-Fi', pl: 'Wi-Fi' },
        C: { en: 'Bluetooth', pl: 'Bluetooth' },
        D: { en: 'FTP', pl: 'FTP' },
      },
      correctAnswer: 'A',
    },
  ],
};
