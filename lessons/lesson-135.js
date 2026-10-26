window.lessonData = window.lessonData || {};
window.lessonData[135] = {
  "id": 135,
  "title": "Unit Tests",
  "category": "Testing and Security",
  "contentStatus": "authored",
  "introduction": "This lesson introduces Unit Tests as a practical building block in Testing and Security.",
  "definition": "Unit Tests is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of Unit Tests.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "Unit Tests",
      "body": "Unit Tests is a practical building block in Testing and Security.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "def add(a, b): return a + b\nassert add(2, 3) == 5\nprint(\"Test passed\")",
      "language": "python",
      "output": "Test passed"
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
    "code": "def add(a, b): return a + b\nassert add(2, 3) == 5\nprint(\"Test passed\")",
    "language": "python",
    "output": "Test passed"
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
    "code": "def add(a, b): return a + b\nassert add(2, 3) == 5\nprint(\"Test passed\")",
    "output": "Test passed"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
