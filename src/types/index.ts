export type SectionId = 'notes' | 'diagrams' | 'calculator' | 'climate' | 'waste-game' | 'flashcards' | 'exam' | 'cheat-sheet' | 'pdf';

export interface ConceptDiagram {
  id: string;
  conceptName: string;
  englishConcept: string;
  badge: string;
  description: string;
  diagramTitle: string;
  labels: {
    id: string;
    amharic: string;
    english: string;
    role: string;
  }[];
  realWorldExamples: {
    number: number;
    title: string;
    story: string;
    whyItMatters: string;
  }[];
  mcqQuestions: {
    id: string;
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export interface NoteTopic {
  id: string;
  title: string;
  englishTitle: string;
  icon: string;
  badge: string;
  summary: string;
  keyPoints: {
    title: string;
    description: string;
    example: string;
    examTip?: string;
  }[];
  importantTerms: {
    term: string;
    english: string;
    meaning: string;
    example: string;
  }[];
}

export interface ClimateZone {
  name: string;
  altName?: string;
  english: string;
  altitudeRange: string;
  tempRange: string;
  characteristics: string;
  examplePlaces: string;
  clothingTip: string;
  color: string;
}

export interface WeatherInstrument {
  name: string;
  english: string;
  use: string;
  description: string;
  example: string;
  iconName: string;
}

export interface MineralResource {
  name: string;
  english: string;
  use: string;
  foundIn: string;
  category: 'ግንባታ' | 'ሴራሚክስና መስታወት' | 'ጌጣጌጥ' | 'ሀይል';
}

export interface FlashCard {
  id: string;
  question: string;
  answer: string;
  category: string;
  hint?: string;
}

export type QuestionType = 'true_false' | 'multiple_choice' | 'matching';

export interface QuizQuestion {
  id: string;
  source: string; // e.g. "መልመጃ 3.1", "መልመጃ 3.2", "የክለሳ ጥያቄዎች"
  question: string;
  type: QuestionType;
  options?: string[];
  correctAnswer: string | number; // index or boolean string
  explanation: string;
  studentHint: string;
}
