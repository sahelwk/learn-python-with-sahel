window.lessonData = window.lessonData || {};
window.lessonData[113] = {
  "id": 113,
  "title": "REST APIs",
  "category": "Authentication and APIs",
  "contentStatus": "authored",
  "introduction": "This lesson introduces REST APIs as a practical building block in Authentication and APIs.",
  "definition": "REST APIs is a practical Python concept.",
  "whyItMatters": "It helps learners read and build clearer programs.",
  "objectives": [
    "Explain the purpose of REST APIs.",
    "Trace the example.",
    "Modify one input and predict the result."
  ],
  "slides": [
    {
      "kicker": "01 · Core idea",
      "title": "REST APIs",
      "body": "REST APIs is a practical building block in Authentication and APIs.",
      "bullets": [
        "Define the idea in your own words.",
        "Recognize when it is useful."
      ]
    },
    {
      "kicker": "02 · Guided example",
      "title": "See the pattern in Python",
      "body": "Read the example aloud and predict its output.",
      "code": "response = {\"status\": \"ok\", \"data\": [\"students\"]}\nprint(response[\"status\"])",
      "language": "python",
      "output": "ok"
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
    "code": "response = {\"status\": \"ok\", \"data\": [\"students\"]}\nprint(response[\"status\"])",
    "language": "python",
    "output": "ok"
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
    "code": "response = {\"status\": \"ok\", \"data\": [\"students\"]}\nprint(response[\"status\"])",
    "output": "ok"
  },
  "quiz": [],
  "takeaways": [
    "Use clear names.",
    "Trace code line by line."
  ],
  "teacherNotes": "Ask learners to predict the output before revealing the code.",
  "teachingTime": "5-10 minutes"
};
