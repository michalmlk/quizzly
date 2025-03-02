import { QuestionsData } from '@/schema';

export const fashionQuestions: QuestionsData = {
  id: '1334abc1334',
  title: {
    pl: 'Moda',
    en: 'Fashion',
  },
  imageUrl: 'https://images.pexels.com/photos/934070/pexels-photo-934070.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
  questions: [
    {
      id: 1,
      question: {
        en: "Which fashion house is known for the monogram pattern 'LV'?",
        pl: "Który dom mody jest znany ze wzoru monogramu 'LV'?",
      },
      possibleAnswers: {
        A: { en: 'Gucci', pl: 'Gucci' },
        B: { en: 'Louis Vuitton', pl: 'Louis Vuitton' },
        C: { en: 'Chanel', pl: 'Chanel' },
        D: { en: 'Prada', pl: 'Prada' },
      },
      correctAnswer: 'B',
    },
    {
      id: 2,
      question: {
        en: "Which designer is credited with introducing the 'little black dress'?",
        pl: "Który projektant jest uznawany za twórcę 'małej czarnej'?",
      },
      possibleAnswers: {
        A: { en: 'Coco Chanel', pl: 'Coco Chanel' },
        B: { en: 'Christian Dior', pl: 'Christian Dior' },
        C: { en: 'Yves Saint Laurent', pl: 'Yves Saint Laurent' },
        D: { en: 'Versace', pl: 'Versace' },
      },
      correctAnswer: 'A',
    },
    {
      id: 3,
      question: {
        en: 'Which fabric is made from the fibers of the flax plant?',
        pl: 'Z jakiego materiału wykonuje się tkaninę z włókien lnu?',
      },
      possibleAnswers: {
        A: { en: 'Cotton', pl: 'Bawełna' },
        B: { en: 'Linen', pl: 'Len' },
        C: { en: 'Silk', pl: 'Jedwab' },
        D: { en: 'Wool', pl: 'Wełna' },
      },
      correctAnswer: 'B',
    },
    {
      id: 4,
      question: {
        en: 'What is the term for a long, flowing outer garment worn over clothing?',
        pl: 'Jak nazywa się długa, luźna odzież noszona na ubraniu?',
      },
      possibleAnswers: {
        A: { en: 'Blazer', pl: 'Marynarka' },
        B: { en: 'Cardigan', pl: 'Kardigan' },
        C: { en: 'Trench coat', pl: 'Trencz' },
        D: { en: 'Kimono', pl: 'Kimono' },
      },
      correctAnswer: 'D',
    },
    {
      id: 5,
      question: {
        en: 'Which of these is a famous Italian luxury fashion brand?',
        pl: 'Która z tych marek to znana włoska luksusowa marka modowa?',
      },
      possibleAnswers: {
        A: { en: 'Burberry', pl: 'Burberry' },
        B: { en: 'Dolce & Gabbana', pl: 'Dolce & Gabbana' },
        C: { en: 'Ralph Lauren', pl: 'Ralph Lauren' },
        D: { en: 'Tom Ford', pl: 'Tom Ford' },
      },
      correctAnswer: 'B',
    },
  ],
};
