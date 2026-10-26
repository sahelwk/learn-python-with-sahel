window.lessonData = window.lessonData || {};
window.lessonData[96] = {
  "id": 96,
  "title": "CRUD Operations",
  "category": "Databases and SQL",
  "contentStatus": "authored",
  "introduction": "This lesson introduces CRUD Operations as a practical building block in Databases and SQL.",
  "definition": "CRUD Operations is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of CRUD Operations.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "CRUD Operations",
      "body": "CRUD Operations is a practical building block in Databases and SQL.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "students = []\nstudents.append({\"id\": 1, \"name\": \"Mina\"})\nstudents[0][\"name\"] = \"Mina K.\"\nprint(students)",
      "language": "python",
      "output": "[{'id': 1, 'name': 'Mina K.'}]"
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
    "code": "students = []\nstudents.append({\"id\": 1, \"name\": \"Mina\"})\nstudents[0][\"name\"] = \"Mina K.\"\nprint(students)",
    "language": "python",
    "output": "[{'id': 1, 'name': 'Mina K.'}]"
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
    "code": "students = []\nstudents.append({\"id\": 1, \"name\": \"Mina\"})\nstudents[0][\"name\"] = \"Mina K.\"\nprint(students)",
    "output": "[{'id': 1, 'name': 'Mina K.'}]"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
