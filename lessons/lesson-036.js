window.lessonData = window.lessonData || {};
window.lessonData[36] = {
  "id": 36,
  "title": "while Loop",
  "category": "Python Loops",
  "contentStatus": "authored",
  "introduction": "This lesson introduces while Loop as a practical building block in Python Loops.",
  "definition": "while Loop is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of while Loop.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "while Loop",
      "body": "while Loop is a practical building block in Python Loops.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "attempts = 0\nwhile attempts < 3:\n    attempts += 1\nprint(attempts)",
      "language": "python",
      "output": "3"
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
    "code": "attempts = 0\nwhile attempts < 3:\n    attempts += 1\nprint(attempts)",
    "language": "python",
    "output": "3"
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
    "code": "attempts = 0\nwhile attempts < 3:\n    attempts += 1\nprint(attempts)",
    "output": "3"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
