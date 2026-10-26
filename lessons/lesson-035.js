window.lessonData = window.lessonData || {};
window.lessonData[35] = {
  "id": 35,
  "title": "for Loop",
  "category": "Python Loops",
  "contentStatus": "authored",
  "introduction": "This lesson introduces for Loop as a practical building block in Python Loops.",
  "definition": "for Loop is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of for Loop.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "for Loop",
      "body": "for Loop is a practical building block in Python Loops.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "for day in range(1, 4):\n    print(f\"Lesson {day}\")",
      "language": "python",
      "output": "Lesson 1\nLesson 2\nLesson 3"
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
    "code": "for day in range(1, 4):\n    print(f\"Lesson {day}\")",
    "language": "python",
    "output": "Lesson 1\nLesson 2\nLesson 3"
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
    "code": "for day in range(1, 4):\n    print(f\"Lesson {day}\")",
    "output": "Lesson 1\nLesson 2\nLesson 3"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
