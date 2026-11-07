
window.lessonData = window.lessonData || {};
window.lessonData[17] = {
  id: 17,
  title: "Keywords",
  category: "Python Basics",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn about Python keywords, their special meanings, and why they cannot be used as ordinary identifiers.",

  definition:
    "Keywords are reserved words in Python that have special meanings and are used to define the structure and behavior of a program.",

  whyItMatters:
    "Understanding keywords helps students write valid Python code, understand program structure, and avoid naming errors.",

  objectives: [
    "Understand what Python keywords are.",
    "Learn why keywords are reserved.",
    "Recognize common Python keywords.",
    "Understand why keywords cannot be used as variable names.",
    "Learn how to display the Python keyword list."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Keywords?",
      body: "Keywords are special reserved words in Python.",
      bullets: [
        "Each keyword has a special meaning.",
        "Python uses them to understand code.",
        "They cannot be used as ordinary identifiers."
      ]
    },
    {
      kicker: "02 · Example",
      title: "Keywords in Python",
      body: "Look at the special words used in this program.",
      code: "if age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Minor\")",
      output: "Adult",
      bullets: [
        "if checks a condition.",
        "else provides another choice.",
        "Both are Python keywords."
      ]
    },
    {
      kicker: "03 · Important",
      title: "Why Are Keywords Reserved?",
      body: "Python uses keywords for specific programming tasks.",
      bullets: [
        "Control program flow.",
        "Create functions and classes.",
        "Handle conditions and loops.",
        "Manage special operations."
      ]
    },
    {
      kicker: "04 · Examples",
      title: "Condition Keywords",
      body: "These keywords are used for decision-making.",
      code: "if marks >= 50:\n    print(\"Passed\")\nelif marks == 49:\n    print(\"Almost passed\")\nelse:\n    print(\"Failed\")",
      bullets: [
        "if",
        "elif",
        "else"
      ]
    },
    {
      kicker: "05 · Examples",
      title: "Loop Keywords",
      body: "These keywords help repeat instructions.",
      code: "for number in range(3):\n    print(number)\n\nwhile False:\n    print(\"Running\")",
      output: "0\n1\n2",
      bullets: [
        "for",
        "while",
        "break",
        "continue"
      ]
    },
    {
      kicker: "06 · Examples",
      title: "Function and Class Keywords",
      body: "These keywords help define functions and classes.",
      code: "def greet():\n    print(\"Hello\")\n\nclass Student:\n    pass",
      bullets: [
        "def defines a function.",
        "class defines a class.",
        "return sends a value back from a function."
      ]
    },
    {
      kicker: "07 · Examples",
      title: "Other Common Keywords",
      body: "Python has other keywords for different tasks.",
      bullets: [
        "True and False represent Boolean values.",
        "None represents the absence of a value.",
        "import brings in modules.",
        "and, or, not are logical operators.",
        "in checks membership."
      ],
      code: "is_active = True\nresult = None\n\nif is_active and result is None:\n    print(\"Active\")"
    },
    {
      kicker: "08 · Naming Rules",
      title: "Keywords Cannot Be Variable Names",
      body: "Do not use reserved keywords as ordinary variable names.",
      code: "# Invalid\nclass = \"Python\"\nif = 10\n\n# Valid\nclass_name = \"Python\"\nif_value = 10",
      bullets: [
        "class is reserved.",
        "if is reserved.",
        "Choose another identifier."
      ]
    },
    {
      kicker: "09 · Practical",
      title: "Check Python Keywords",
      body: "Python provides a module to display its keyword list.",
      code: "import keyword\n\nprint(keyword.kwlist)",
      bullets: [
        "Import the keyword module.",
        "Use keyword.kwlist.",
        "See the keywords supported by your Python version."
      ]
    },
    {
      kicker: "10 · Check One Word",
      title: "Is a Word a Keyword?",
      body: "Use iskeyword() to check a word.",
      code: "import keyword\n\nprint(keyword.iskeyword(\"if\"))\nprint(keyword.iskeyword(\"name\"))",
      output: "True\nFalse",
      bullets: [
        "True means it is a keyword.",
        "False means it is not a keyword."
      ]
    },
    {
      kicker: "11 · Practice",
      title: "Find the Keywords",
      body: "Read the code and identify the Python keywords.",
      code: "def check_age(age):\n    if age >= 18:\n        return True\n    else:\n        return False",
      bullets: [
        "Find def.",
        "Find if and else.",
        "Find return.",
        "Explain the purpose of each."
      ]
    },
    {
      kicker: "12 · Review",
      title: "What Did We Learn?",
      body: "Keywords are special words that Python reserves for specific purposes.",
      bullets: [
        "Keywords have special meanings.",
        "They are reserved by Python.",
        "They cannot be ordinary variable names.",
        "Use keyword.kwlist to see the list.",
        "Use keyword.iskeyword() to check a word."
      ]
    }
  ],

  example: {
    explanation:
      "This example demonstrates several Python keywords. Students should identify def, if, else, and return, and explain the role of each keyword.",
    code:
      "def check_result(marks):\n    if marks >= 50:\n        return \"Passed\"\n    else:\n        return \"Failed\"\n\nresult = check_result(85)\nprint(result)",
    language: "python",
    output: "Passed"
  },

  commonMistakes: [
    "Using a keyword as a variable name.",
    "Thinking that every Python word is a keyword.",
    "Confusing built-in functions such as print() with keywords.",
    "Forgetting that keywords are case-sensitive.",
    "Thinking that keyword.kwlist contains every built-in function.",
    "Confusing True, False, and None with ordinary text values."
  ],

  exercise: {
    question:
      "Write a program that checks whether a student passed an exam. Use a function, if, else, and return. Then import the keyword module and check whether if, class, and student_name are Python keywords.",
    hint:
      "Use def to create a function, if and else to make a decision, and keyword.iskeyword() to check each word."
  },

  solution: {
    explanation:
      "The program uses Python keywords to define a function and make a decision. The keyword module checks whether each supplied word is a reserved Python keyword.",
    code:
      "import keyword\n\ndef check_result(marks):\n    if marks >= 50:\n        return \"Passed\"\n    else:\n        return \"Failed\"\n\nprint(check_result(85))\n\nprint(keyword.iskeyword(\"if\"))\nprint(keyword.iskeyword(\"class\"))\nprint(keyword.iskeyword(\"student_name\"))",
    output:
      "Passed\nTrue\nTrue\nFalse"
  },

  quiz: [
    {
      question: "What is a Python keyword?",
      options: [
        "A reserved word with a special meaning",
        "A normal variable",
        "A comment",
        "A file name"
      ],
      answer: 0,
      explanation:
        "Keywords are reserved words that Python uses for specific programming purposes."
    },
    {
      question: "Which of these is a Python keyword?",
      options: [
        "student_name",
        "product_price",
        "if",
        "calculate_total"
      ],
      answer: 2,
      explanation:
        "if is a reserved Python keyword used for conditional statements."
    },
    {
      question: "Can we use class as a variable name?",
      options: [
        "Yes",
        "No",
        "Only in VS Code",
        "Only in functions"
      ],
      answer: 1,
      explanation:
        "class is a reserved keyword and cannot be used as an ordinary variable name."
    },
    {
      question: "Which keyword defines a function?",
      options: [
        "function",
        "def",
        "create",
        "method"
      ],
      answer: 1,
      explanation:
        "Python uses def to define a function."
    },
    {
      question: "Which module provides the Python keyword list?",
      options: [
        "math",
        "random",
        "keyword",
        "time"
      ],
      answer: 2,
      explanation:
        "The keyword module provides keyword.kwlist and keyword.iskeyword()."
    },
    {
      question: "What does keyword.iskeyword(\"if\") return?",
      options: [
        "False",
        "True",
        "None",
        "Error"
      ],
      answer: 1,
      explanation:
        "if is a reserved Python keyword, so the function returns True."
    }
  ],

  takeaways: [
    "Keywords are reserved words in Python.",
    "Each keyword has a special purpose.",
    "Keywords cannot be used as ordinary identifiers.",
    "Examples include if, else, for, while, def, and class.",
    "Use keyword.kwlist to see the keyword list.",
    "Use keyword.iskeyword() to check a word."
  ],

  teacherNotes:
    "Start by connecting this lesson to the previous lesson about identifiers. Explain that identifiers are names chosen by programmers, while keywords are reserved by Python. Use if, else, for, def, and class as simple examples. Demonstrate why class = \"Python\" is invalid but class_name = \"Python\" is valid. Explain that print() is a built-in function, not a keyword. At the end, demonstrate import keyword, keyword.kwlist, and keyword.iskeyword(). Mention that the keyword list can vary between Python versions. Keep the focus on understanding and recognizing keywords rather than memorizing every keyword.",

  teachingTime: "40-50 minutes"
};