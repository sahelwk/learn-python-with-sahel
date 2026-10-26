window.lessonData = window.lessonData || {};
window.lessonData[74] = {
  "id": 74,
  "title": "Reading Files",
  "category": "Files and Data",
  "contentStatus": "authored",
  "introduction": "This lesson introduces Reading Files as a practical building block in Files and Data.",
  "definition": "Reading Files is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of Reading Files.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "Reading Files",
      "body": "Reading Files is a practical building block in Files and Data.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "with open(\"notes.txt\", encoding=\"utf-8\") as file:\n    content = file.read()\nprint(content)",
      "language": "python",
      "output": "The file contents"
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
    "code": "with open(\"notes.txt\", encoding=\"utf-8\") as file:\n    content = file.read()\nprint(content)",
    "language": "python",
    "output": "The file contents"
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
    "code": "with open(\"notes.txt\", encoding=\"utf-8\") as file:\n    content = file.read()\nprint(content)",
    "output": "The file contents"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
