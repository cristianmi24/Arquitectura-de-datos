export type Locale = "en" | "es";

export type LocalizedString = {
  [key in Locale]: string;
};

export interface Topic {
  id: string;
  title: LocalizedString;
  content: LocalizedString;
  isCompleted?: boolean; // Optional: can be managed by progress state
}

export interface Module {
  id: string;
  title: LocalizedString;
  description?: LocalizedString; // Optional short description for module cards
  icon?: React.ElementType; // Lucide icon component
  topics: Topic[];
}

export interface Exercise {
  id: string;
  moduleId: string; // To link exercise with a module
  title: LocalizedString;
  description: LocalizedString; // Short description of the exercise
  type: "multiple-choice" | "fill-in-the-blank" | "interactive-task"; // Example types
  content: LocalizedString; // Could be JSON string for complex exercises or markdown
  questions?: Question[]; // For multiple-choice or similar
}

export interface Question {
  id: string;
  text: LocalizedString;
  options: LocalizedString[];
  correctAnswerIndex: number;
}

export interface CourseProgress {
  [moduleId: string]: {
    [topicId: string]: boolean; // true if topic is completed
  };
}

export interface FeedbackSubmission {
  id: string;
  name: string;
  email: string;
  message: string;
  timestamp: number;
}
