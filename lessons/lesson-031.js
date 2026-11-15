window.lessonData = window.lessonData || {};
window.lessonData[31] = {
  id: 31,
  title: "else Statement",
  category: "Python Conditions",
  contentStatus: "authored",

  introduction: "The else statement provides an alternative block of code that runs when the if and any elif conditions are False.",

  definition: "else is a conditional statement branch that executes when none of the preceding if or elif conditions is True.",

  whyItMatters: "The else statement allows programs to handle situations when a condition is not met. It helps programmers create complete decision-making logic and provide a result for alternative situations.",

  objectives: [
    "Understand the purpose of the else statement.",
    "Learn how to use else with if.",
    "Learn how to use else with if and elif.",
    "Understand when the else block executes.",
    "Create practical programs using conditional statements."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is an else Statement?",
      body: "The else statement defines what a program should do when the previous if or elif conditions are False.",
      bullets: [
        "else means the alternative choice.",
        "It is written after if or an if-elif chain.",
        "It does not have a condition.",
        "Its block runs when no previous condition is True."
      ]
    },
    {
      kicker: "02 · Why else?",
      title: "Why Do We Need else?",
      body: "A program often needs to handle both situations: when a condition is True and when it is False.",
      bullets: [
        "Show Passed or Failed.",
        "Allow or deny access.",
        "Display a success or error message.",
        "Handle alternative situations."
      ]
    },
    {
      kicker: "03 · Syntax",
      title: "How to Write else",
      body: "The else statement comes after an if statement and has no condition.",
      code: "if condition:\n    print(\"Condition is True\")\nelse:\n    print(\"Condition is False\")",
      bullets: [
        "Write if first.",
        "Write else at the same indentation level as if.",
        "Add a colon after else.",
        "Indent the statements inside each block."
      ]
    },
    {
      kicker: "04 · First Example",
      title: "Your First else Statement",
      body: "If the condition is False, Python executes the else block.",
      code: "age = 16\n\nif age >= 18:\n    print(\"You can vote\")\nelse:\n    print(\"You cannot vote yet\")",
      output: "You cannot vote yet"
    },
    {
      kicker: "05 · True Condition",
      title: "What If the Condition Is True?",
      body: "When the if condition is True, Python executes the if block and skips the else block.",
      code: "age = 22\n\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Not an adult\")",
      output: "Adult"
    },
    {
      kicker: "06 · False Condition",
      title: "What If the Condition Is False?",
      body: "When the if condition is False, Python executes the else block instead.",
      code: "temperature = 10\n\nif temperature > 20:\n    print(\"Warm weather\")\nelse:\n    print(\"Cold weather\")",
      output: "Cold weather"
    },
    {
      kicker: "07 · With elif",
      title: "Using else with if and elif",
      body: "The else statement can be used at the end of an if-elif chain to handle all remaining cases.",
      code: "marks = 45\n\nif marks >= 90:\n    print(\"Excellent\")\nelif marks >= 60:\n    print(\"Passed\")\nelse:\n    print(\"Failed\")",
      output: "Failed",
      bullets: [
        "Python checks if first.",
        "Then it checks elif if necessary.",
        "If all conditions are False, else runs."
      ]
    },
    {
      kicker: "08 · Practical Example",
      title: "Student Pass or Fail",
      body: "Use else to display a failure message when a student does not meet the passing requirement.",
      code: "marks = 55\n\nif marks >= 60:\n    print(\"Congratulations! You passed.\")\nelse:\n    print(\"Sorry! You failed.\")",
      output: "Sorry! You failed."
    },
    {
      kicker: "09 · User Input",
      title: "Using else with input()",
      body: "A program can ask the user for information and respond based on the entered value.",
      code: "password = input(\"Enter password: \")\n\nif password == \"python123\":\n    print(\"Login successful\")\nelse:\n    print(\"Incorrect password\")",
      output: "Enter password: hello\nIncorrect password"
    },
    {
      kicker: "10 · Practical Example",
      title: "Even or Odd Number",
      body: "Use the modulo operator to check whether a number is even or odd.",
      code: "number = 7\n\nif number % 2 == 0:\n    print(\"Even number\")\nelse:\n    print(\"Odd number\")",
      output: "Odd number"
    },
    {
      kicker: "11 · Practical Example",
      title: "Positive or Not Positive",
      body: "The else block handles every number that does not meet the positive-number condition.",
      code: "number = -5\n\nif number > 0:\n    print(\"Positive number\")\nelse:\n    print(\"Not a positive number\")",
      output: "Not a positive number",
      bullets: [
        "The else block can include zero and negative numbers.",
        "Use more conditions when these cases need different results."
      ]
    },
    {
      kicker: "12 · With Multiple Conditions",
      title: "Complete Grade System",
      body: "Combine if, elif, and else to handle different student grade ranges.",
      code: "marks = 75\n\nif marks >= 90:\n    print(\"Grade A\")\nelif marks >= 80:\n    print(\"Grade B\")\nelif marks >= 70:\n    print(\"Grade C\")\nelif marks >= 60:\n    print(\"Grade D\")\nelse:\n    print(\"Grade F\")",
      output: "Grade C"
    },
    {
      kicker: "13 · Important Rule",
      title: "The else Statement Has No Condition",
      body: "Unlike if and elif, else does not check a condition. It handles all remaining cases.",
      bullets: [
        "Correct: else:",
        "Incorrect: else age >= 18:",
        "Do not write a comparison after else.",
        "Use elif when another condition is needed."
      ],
      code: "age = 15\n\nif age >= 18:\n    print(\"Adult\")\nelse:\n    print(\"Under 18\")",
      output: "Under 18"
    },
    {
      kicker: "14 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Follow Python's conditional structure carefully.",
      bullets: [
        "Writing else before if.",
        "Forgetting the colon after else.",
        "Writing a condition after else.",
        "Incorrect indentation.",
        "Writing multiple else blocks in the same if-elif chain.",
        "Placing statements between elif and else."
      ]
    },
    {
      kicker: "15 · Practice",
      title: "Classroom Exercise",
      body: "Create a simple login program using if and else.",
      bullets: [
        "Ask the user to enter a username.",
        "Ask the user to enter a password.",
        "If both are correct, print Login successful.",
        "Otherwise, print Invalid username or password."
      ]
    },
    {
      kicker: "16 · Summary",
      title: "What Did We Learn?",
      body: "The else statement provides an alternative when all preceding conditions are False.",
      bullets: [
        "else has no condition.",
        "It comes after if or an if-elif chain.",
        "It runs only when no previous condition is True.",
        "Only one branch runs in an if-elif-else chain.",
        "else helps handle remaining situations."
      ]
    }
  ],

  example: {
    explanation: "This example checks whether a student has passed. If the marks are 60 or higher, the if block runs. Otherwise, the else block runs.",
    code: "marks = 55\n\nif marks >= 60:\n    print(\"Passed\")\nelse:\n    print(\"Failed\")",
    language: "python",
    output: "Failed"
  },

  commonMistakes: [
    "Writing else before the if statement.",
    "Forgetting the colon after else.",
    "Trying to add a condition after else.",
    "Using incorrect indentation inside the else block.",
    "Writing more than one else block in the same conditional chain.",
    "Placing another elif after else.",
    "Assuming else runs when the if condition is True."
  ],

  exercise: {
    question: "Create a login program. Ask the user to enter a username and password. If the username is 'admin' and the password is 'python123', display 'Login successful'. Otherwise, display 'Invalid username or password'.",
    hint: "Use input() to get both values. Use the == operator and the and logical operator in one if condition. Use else for the alternative result."
  },

  solution: {
    explanation: "The program receives a username and password. The and operator checks whether both values are correct. If both conditions are True, the login succeeds. Otherwise, the else block displays an error message.",
    code: "username = input(\"Enter username: \")\npassword = input(\"Enter password: \")\n\nif username == \"admin\" and password == \"python123\":\n    print(\"Login successful\")\nelse:\n    print(\"Invalid username or password\")",
    output: "Enter username: admin\nEnter password: python123\nLogin successful"
  },

  quiz: [
    {
      question: "What is the purpose of the else statement?",
      options: [
        "To repeat code",
        "To handle the alternative when previous conditions are False",
        "To create a variable",
        "To define a function"
      ],
      answer: 1,
      explanation: "The else block runs when the preceding if and elif conditions are all False."
    },
    {
      question: "Does else have a condition?",
      options: [
        "Yes, always",
        "Only sometimes",
        "No",
        "Only inside loops"
      ],
      answer: 2,
      explanation: "else has no condition. It handles all remaining cases."
    },
    {
      question: "Where should else be written?",
      options: [
        "Before if",
        "After if or an if-elif chain",
        "Inside every variable",
        "At the beginning of a Python file"
      ],
      answer: 1,
      explanation: "else comes after the if statement or the final elif statement."
    },
    {
      question: "What is the output?\nnumber = 5\nif number > 10:\n    print(\"A\")\nelse:\n    print(\"B\")",
      options: ["A", "B", "A and B", "No output"],
      answer: 1,
      explanation: "The condition number > 10 is False, so the else block runs."
    },
    {
      question: "Which syntax is correct?",
      options: [
        "else age > 18:",
        "else:",
        "elif:",
        "else if:"
      ],
      answer: 1,
      explanation: "The correct Python syntax is else: with a colon and no condition."
    },
    {
      question: "Can an if-elif-else chain have more than one else block?",
      options: [
        "Yes",
        "No",
        "Only three",
        "Only when using input()"
      ],
      answer: 1,
      explanation: "One conditional chain can have only one else block, and it must come last."
    },
    {
      question: "What happens when the if condition is True?",
      options: [
        "The else block runs",
        "Both blocks run",
        "The if block runs and else is skipped",
        "Python reports an error"
      ],
      answer: 2,
      explanation: "When the if condition is True, Python executes its block and skips else."
    },
    {
      question: "Which operator checks whether both login values are correct?",
      options: [
        "or",
        "not",
        "and",
        "in"
      ],
      answer: 2,
      explanation: "The and operator returns True only when both conditions are True."
    }
  ],

  takeaways: [
    "else provides an alternative block of code.",
    "else has no condition.",
    "It must come after if or an if-elif chain.",
    "The else block runs when all preceding conditions are False.",
    "Only one branch executes in an if-elif-else chain.",
    "Use elif for additional conditions and else for the remaining cases."
  ],

  teacherNotes: "Begin by reviewing the if and elif lessons. Ask students what should happen when none of the conditions is True. Introduce else as the final alternative branch. Explain that else has no condition and is written with a colon. Demonstrate both cases by changing the value of age or marks. Then show an if-elif-else grading example. Compare the three branches: if checks the first condition, elif checks additional conditions, and else handles all remaining cases. Emphasize that else must come last and that only one branch executes in a conditional chain. Finish with the login exercise. Explain that this is a simple classroom example, not a secure real-world authentication system.",

  teachingTime: "40-50 minutes"
};