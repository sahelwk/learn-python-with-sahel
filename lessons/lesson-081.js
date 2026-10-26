window.lessonData = window.lessonData || {};
window.lessonData[81] = {
  "id": 81,
  "title": "Classes",
  "category": "Object Oriented Programming",
  "contentStatus": "authored",
  "introduction": "This lesson introduces Classes as a practical building block in Object Oriented Programming.",
  "definition": "Classes is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of Classes.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "Classes",
      "body": "Classes is a practical building block in Object Oriented Programming.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "class Student:\n    def __init__(self, name):\n        self.name = name\n\nstudent = Student(\"Mina\")\nprint(student.name)",
      "language": "python",
      "output": "Mina"
    },
    {
      "kicker": "03 · Practice",
      "title": "Make it yours",
      "body": "Change one value and run the example again.",
      "bullets": [
        "Explain the changed result.",
        "Connect the idea to a real program."
      ]
    }
  ],
  "example": {
    "explanation": "A small guided example.",
    "code": "class Student:\n    def __init__(self, name):\n        self.name = name\n\nstudent = Student(\"Mina\")\nprint(student.name)",
    "language": "python",
    "output": "Mina"
  },
  "commonMistakes": [
    "Do not guess the output without tracing the code."
  ],
  "exercise": {
    "question": "Modify the example and explain the new output.",
    "hint": "Start with the smallest valid example."
  },
  "solution": {
    "explanation": "Start with the smallest change, then test and explain the result.",
    "code": "class Student:\n    def __init__(self, name):\n        self.name = name\n\nstudent = Student(\"Mina\")\nprint(student.name)",
    "output": "Mina"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
