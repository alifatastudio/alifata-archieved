export const type = {
 options: 'options',
 blankText: 'blankText',
};

export const material = {
 structure: 'structure'
}

export const ToeflExerciseData = [
 {
  questionType: type.options,
  question: "Pertanyaan 1 kahfahfjafja hafafhafaf afhafhafhahfa fhauh feuf au",
  options: [
   {id: 0, display: 'A'},
   {id: 1, display: 'B'},
   {id: 2, display: 'C'},
   {id: 3, display: 'D'},
  ],
  correctOptionId: 1,
  material: material.structure,
  explanation: 'Maybe u are dumn',
 },
 {
  questionType: type.blankText,
  question: "Are dumn ... right now ?",
  correctAnswer: 'yes i am',
  material: material.structure,
  explanation: 'Yes u right',
 }
]