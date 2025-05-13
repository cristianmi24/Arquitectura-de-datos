import type { Exercise } from '@/types';

export const courseExercises: Exercise[] = [
  {
    id: "ex1-m1", // Exercise 1 for Module 1
    moduleId: "1",
    title: {
      en: "Module 1: Fundamentals Quiz",
      es: "Módulo 1: Cuestionario de Fundamentos",
    },
    description: {
      en: "Test your understanding of the basic concepts of Data Architecture.",
      es: "Pon a prueba tu comprensión de los conceptos básicos de la Arquitectura de Datos.",
    },
    type: "multiple-choice",
    content: {
        en: "Select the best answer for each question.",
        es: "Selecciona la mejor respuesta para cada pregunta."
    },
    questions: [
        {
            id: "q1",
            text: { 
                en: "What is the primary goal of Data Architecture?",
                es: "¿Cuál es el objetivo principal de la Arquitectura de Datos?"
            },
            options: [
                { en: "To write complex SQL queries", es: "Escribir consultas SQL complejas" },
                { en: "To ensure data is accurate, secure, and available", es: "Asegurar que los datos sean precisos, seguros y disponibles" },
                { en: "To design attractive user interfaces", es: "Diseñar interfaces de usuario atractivas" },
                { en: "To increase website traffic", es: "Aumentar el tráfico del sitio web" }
            ],
            correctAnswerIndex: 1
        },
        {
            id: "q2",
            text: { 
                en: "Which of these is NOT a typical component of Data Architecture?",
                es: "¿Cuál de estos NO es un componente típico de la Arquitectura de Datos?"
            },
            options: [
                { en: "Data Storage", es: "Almacenamiento de Datos" },
                { en: "Data Governance", es: "Gobernanza de Datos" },
                { en: "Social Media Marketing", es: "Marketing en Redes Sociales" },
                { en: "Data Integration", es: "Integración de Datos" }
            ],
            correctAnswerIndex: 2
        }
    ]
  },
  // Add more exercises for other modules here...
  // Example:
  // {
  //   id: "ex1-m2",
  //   moduleId: "2",
  //   title: { en: "Module 2: Model Identification", es: "Módulo 2: Identificación de Modelos" },
  //   description: { en: "Identify different data models.", es: "Identifica diferentes modelos de datos." },
  //   type: "interactive-task", // or "fill-in-the-blank"
  //   content: { en: "Exercise content for Module 2 coming soon.", es: "Contenido del ejercicio para Módulo 2 próximamente." }
  // },
];
