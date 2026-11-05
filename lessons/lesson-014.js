
window.lessonData = window.lessonData || {};
window.lessonData[14] = {
  id: 14,
  title: "Comments",
  category: "Python Basics",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn how to write comments in Python to explain code and make programs easier to understand.",

  definition:
    "A comment is a note written inside code for humans to read. Python ignores comments when executing a program.",

  whyItMatters:
    "Comments help programmers explain their code, remember important details, and make programs easier to maintain.",

  objectives: [
    "Understand what comments are.",
    "Learn how to write single-line comments.",
    "Understand why programmers use comments.",
    "Learn how to write comments in Python code.",
    "Understand the difference between comments and Python code."
  ],

  slides: [
    {
      kicker: "Introduction",
      title: "What Are Comments?",
      body: "Comments are notes written inside a program.",
      bullets: [
        "Explain the code.",
        "Help programmers understand code.",
        "Python does not execute comments."
      ]
    },
    {
      kicker: "Syntax",
      title: "The # Symbol",
      body: "Python uses the # symbol to write a comment.",
      bullets: [
        "Write # before your comment.",
        "Everything after # on that line is ignored."
      ],
      code: "# This is a comment\nprint(\"Hello Python\")"
    },
    {
      kicker: "Example",
      title: "A Simple Comment",
      body: "We can write a comment before a Python instruction.",
      bullets: [
        "The first line is a comment.",
        "The second line is Python code."
      ],
      code: "# Display a welcome message\nprint(\"Welcome!\")",
      image: "assets/images/python-simple-comment.png"
    },
    {
      kicker: "Understanding",
      title: "Why Do We Use Comments?",
      body: "Comments make code easier to understand.",
      bullets: [
        "Explain code.",
        "Remember important details.",
        "Help other programmers.",
        "Make code easier to maintain."
      ]
    },
    {
      kicker: "Example",
      title: "Comment Before Code",
      body: "A comment can explain what the next instruction does.",
      bullets: [
        "Read the comment.",
        "Understand the instruction."
      ],
      code: "# Calculate two numbers\nresult = 10 + 20\nprint(result)"
    },
    {
      kicker: "Example",
      title: "Comment Beside Code",
      body: "We can also write a comment beside a Python instruction.",
      bullets: [
        "Write the code first.",
        "Add # and the comment after it."
      ],
      code: "age = 25  # Student age"
    },
    {
      kicker: "Important",
      title: "Comments Are Not Executed",
      body: "Python ignores comments when running a program.",
      bullets: [
        "Comments do not produce output.",
        "Python executes the actual instructions."
      ],
      code: "# This line is ignored\nprint(\"Python is running\")",
      image: "assets/images/python-comments-execution.png"
    },
    {
      kicker: "Practice",
      title: "Write Your Own Comments",
      body: "Add comments to explain each part of a small program.",
      bullets: [
        "Create a variable.",
        "Calculate a total.",
        "Display the result."
      ],
      code: "# Product price\nprice = 100\n\n# Product quantity\nquantity = 3\n\n# Calculate total\n total = price * quantity\nprint(total)"
    },
    {
      kicker: "Review",
      title: "What Did We Learn?",
      body: "Remember these important points about comments.",
      bullets: [
        "Comments explain code.",
        "Use # to write comments.",
        "Python ignores comments.",
        "Write clear and useful comments."
      ]
    }
  ],

  example: {
    explanation:
      "This program uses comments to explain variables and calculations. Students should identify which lines are comments and which lines Python executes.",
    code:
      "# Student information\nname = \"Ahmad\"\nage = 20\n\n# Display student information\nprint(\"Name:\", name)\nprint(\"Age:\", age)",
    language: "python",
    output:
      "Name: Ahmad\nAge: 20"
  },

  commonMistakes: [
    "Forgetting to write # before a single-line comment.",
    "Thinking Python executes comments.",
    "Writing unclear or unnecessary comments.",
    "Using comments instead of correcting incorrect code.",
    "Thinking that ordinary text without # is automatically a comment."
  ],

  exercise: {
    question:
      "Write a Python program that stores a student's name, age, and marks. Add comments to explain each variable and display all three values.",
    hint:
      "Use # before each explanatory note. For example: # Student name"
  },

  solution: {
    explanation:
      "The solution uses comments to explain the variables and output instructions. Python ignores the comments and executes the remaining code.",
    code:
      "# Student name\nname = \"Ahmad\"\n\n# Student age\nage = 20\n\n# Student marks\nmarks = 85\n\n# Display student information\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Marks:\", marks)",
    output:
      "Name: Ahmad\nAge: 20\nMarks: 85"
  },

  quiz: [
    {
      question: "What is a comment in Python?",
      options: [
        "A note inside code",
        "A Python variable",
        "A mathematical operation",
        "A function"
      ],
      answer: 0,
      explanation:
        "A comment is a note written in code to help humans understand the program."
    },
    {
      question: "Which symbol is used for a single-line comment?",
      options: [
        "//",
        "#",
        "/*",
        "$"
      ],
      answer: 1,
      explanation:
        "Python uses the # symbol for single-line comments."
    },
    {
      question: "Does Python execute comments?",
      options: [
        "Yes",
        "No",
        "Only on Windows",
        "Only in VS Code"
      ],
      answer: 1,
      explanation:
        "Python ignores comments when executing a program."
    },
    {
      question: "Which line is a valid Python comment?",
      options: [
        "This is a comment",
        "// This is a comment",
        "# This is a comment",
        "comment: This is a comment"
      ],
      answer: 2,
      explanation:
        "A single-line Python comment starts with #."
    },
    {
      question: "What is the main purpose of comments?",
      options: [
        "Make Python run faster",
        "Explain code to people",
        "Create variables",
        "Install Python"
      ],
      answer: 1,
      explanation:
        "Comments help programmers understand and maintain their code."
    }
  ],

  takeaways: [
    "Comments are notes inside code.",
    "Use # for single-line comments.",
    "Python ignores comments during execution.",
    "Comments help explain code.",
    "Write comments that are clear and useful."
  ],

  teacherNotes:
    "Keep the lesson practical and simple. Begin by asking students why programmers need notes inside their code. Explain the # symbol and demonstrate comments in VS Code. Show that Python ignores comment lines while executing the program. Ask students to identify comments and executable instructions in the examples. Finish with the student information exercise. Do not introduce advanced documentation or multiline string concepts in this lesson.",

  teachingTime: "30-40 minutes"
};
