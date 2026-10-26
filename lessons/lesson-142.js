window.lessonData = window.lessonData || {};
window.lessonData[142] = {
  "id": 142,
  "title": "Student Management System",
  "category": "Final Application",
  "contentStatus": "authored",
  "introduction": "This lesson introduces Student Management System as a practical building block in Final Application.",
  "definition": "Student Management System is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of Student Management System.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "Student Management System",
      "body": "Student Management System is a practical building block in Final Application.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "students = [{\"name\": \"Mina\", \"course\": \"Python\"}]\nfor student in students:\n    print(student[\"name\"], \"is enrolled\")",
      "language": "python",
      "output": "Mina is enrolled"
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
    "code": "students = [{\"name\": \"Mina\", \"course\": \"Python\"}]\nfor student in students:\n    print(student[\"name\"], \"is enrolled\")",
    "language": "python",
    "output": "Mina is enrolled"
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
    "code": "students = [{\"name\": \"Mina\", \"course\": \"Python\"}]\nfor student in students:\n    print(student[\"name\"], \"is enrolled\")",
    "output": "Mina is enrolled"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
