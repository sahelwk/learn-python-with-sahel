window.lessonData = window.lessonData || {};
window.lessonData[42] = {
  "id": 42,
  "title": "Lists",
  "category": "Python Data Structures",
  "contentStatus": "authored",
  "introduction": "This lesson introduces Lists as a practical building block in Python Data Structures.",
  "definition": "Lists is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of Lists.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "Lists",
      "body": "Lists is a practical building block in Python Data Structures.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "students = [\"Mina\", \"Omid\", \"Sara\"]\nstudents.append(\"Lina\")\nprint(len(students))",
      "language": "python",
      "output": "4"
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
    "code": "students = [\"Mina\", \"Omid\", \"Sara\"]\nstudents.append(\"Lina\")\nprint(len(students))",
    "language": "python",
    "output": "4"
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
    "code": "students = [\"Mina\", \"Omid\", \"Sara\"]\nstudents.append(\"Lina\")\nprint(len(students))",
    "output": "4"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
