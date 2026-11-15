window.lessonData = window.lessonData || {};
window.lessonData[30] = {
  id: 30,
  title: "elif Statement",
  category: "Python Conditions",
  contentStatus: "authored",

  introduction: "The elif statement allows a Python program to check multiple conditions in sequence. It is used after an if statement when there are several possible decisions.",

  definition: "elif is short for else if. It checks another condition when the previous if or elif conditions are False.",

  whyItMatters: "elif helps programmers handle multiple possible situations without writing many separate if statements. It makes decision-making programs clearer and more organized.",

  objectives: [
    "Understand the purpose of the elif statement.",
    "Learn the syntax of if and elif together.",
    "Understand how Python checks multiple conditions in order.",
    "Use elif to handle different situations.",
    "Create practical programs using multiple conditions."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is an elif Statement?",
      body: "The elif statement allows a program to check another condition when the previous condition is False.",
      bullets: [
        "elif means else if.",
        "It is written after if or another elif.",
        "You can use multiple elif statements.",
        "Python checks conditions from top to bottom."
      ]
    },
    {
      kicker: "02 · Why elif?",
      title: "Why Do We Need elif?",
      body: "Sometimes a program needs to choose between more than two possible situations.",
      bullets: [
        "Check different student grades.",
        "Identify different age groups.",
        "Calculate different price discounts.",
        "Choose different messages based on conditions."
      ]
    },
    {
      kicker: "03 · Syntax",
      title: "How to Write elif",
      body: "An elif statement comes after if and includes another condition.",
      bullets: [
        "Start with if.",
        "Add one or more elif statements.",
        "Write a colon after each condition.",
        "Indent the code inside each block."
      ],
      code: "if condition1:\n    print(\"First condition\")\nelif condition2:\n    print(\"Second condition\")\nelif condition3:\n    print(\"Third condition\")"
    },
    {
      kicker: "04 · First Example",
      title: "Your First elif Statement",
      body: "Python checks the first condition. If it is False, Python checks the elif condition.",
      code: "temperature = 20\n\nif temperature > 30:\n    print(\"Hot day\")\nelif temperature > 15:\n    print(\"Warm day\")",
      output: "Warm day"
    },
    {
      kicker: "05 · Multiple Conditions",
      title: "Using Multiple elif Statements",
      body: "A program can check several conditions and execute the first matching block.",
      bullets: [
        "Python checks conditions in order.",
        "The first True condition is selected.",
        "The remaining conditions are skipped."
      ],
      code: "number = 0\n\nif number > 0:\n    print(\"Positive\")\nelif number < 0:\n    print(\"Negative\")\nelif number == 0:\n    print(\"Zero\")",
      output: "Zero"
    },
    {
      kicker: "06 · Execution Order",
      title: "How Does Python Check Conditions?",
      body: "Python evaluates conditions from top to bottom and executes only the first matching block.",
      bullets: [
        "Check the if condition first.",
        "If False, check the first elif.",
        "Continue until a condition is True.",
        "Skip the remaining branches after a match."
      ],
      code: "marks = 85\n\nif marks >= 90:\n    print(\"Excellent\")\nelif marks >= 80:\n    print(\"Very Good\")\nelif marks >= 70:\n    print(\"Good\")",
      output: "Very Good"
    },
    {
      kicker: "07 · Practical Example",
      title: "Student Grade System",
      body: "Use elif to assign a grade based on a student's marks.",
      bullets: [
        "90 and above: Grade A",
        "80 to 89: Grade B",
        "70 to 79: Grade C",
        "60 to 69: Grade D"
      ],
      code: "marks = 85\n\nif marks >= 90:\n    print(\"Grade A\")\nelif marks >= 80:\n    print(\"Grade B\")\nelif marks >= 70:\n    print(\"Grade C\")\nelif marks >= 60:\n    print(\"Grade D\")",
      output: "Grade B"
    },
    {
      kicker: "08 · Practical Example",
      title: "Positive, Negative, or Zero",
      body: "A program can identify whether a number is positive, negative, or zero.",
      code: "number = -5\n\nif number > 0:\n    print(\"Positive number\")\nelif number < 0:\n    print(\"Negative number\")\nelif number == 0:\n    print(\"Zero\")",
      output: "Negative number"
    },
    {
      kicker: "09 · Practical Example",
      title: "Age Groups",
      body: "Use multiple conditions to identify different age groups.",
      code: "age = 25\n\nif age < 13:\n    print(\"Child\")\nelif age < 20:\n    print(\"Teenager\")\nelif age < 60:\n    print(\"Adult\")\nelif age >= 60:\n    print(\"Senior\")",
      output: "Adult"
    },
    {
      kicker: "10 · User Input",
      title: "Using elif with input()",
      body: "A program can receive a value from the user and select a result.",
      bullets: [
        "Receive marks using input().",
        "Convert the input to an integer.",
        "Check the marks using if and elif."
      ],
      code: "marks = int(input(\"Enter your marks: \"))\n\nif marks >= 90:\n    print(\"Excellent\")\nelif marks >= 80:\n    print(\"Very Good\")\nelif marks >= 70:\n    print(\"Good\")",
      output: "Enter your marks: 85\nVery Good"
    },
    {
      kicker: "11 · Conditions",
      title: "Using Logical Operators with elif",
      body: "Logical operators can combine conditions inside elif statements.",
      bullets: [
        "and: Both conditions must be True.",
        "or: At least one condition must be True.",
        "not: Reverses a Boolean condition."
      ],
      code: "age = 20\nhas_id = False\n\nif age >= 18 and has_id:\n    print(\"Entry allowed\")\nelif age >= 18 and not has_id:\n    print(\"Please show your ID\")",
      output: "Please show your ID"
    },
    {
      kicker: "12 · elif vs Multiple if",
      title: "elif vs Separate if Statements",
      body: "An if-elif chain selects only the first matching condition, while separate if statements can execute multiple blocks.",
      bullets: [
        "if-elif: Only the first matching block runs.",
        "Separate if statements: Every True condition runs.",
        "Choose the structure based on the problem."
      ],
      code: "number = 10\n\nif number > 0:\n    print(\"Positive\")\nelif number > 5:\n    print(\"Greater than 5\")",
      output: "Positive"
    },
    {
      kicker: "13 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Pay attention to the order and syntax of conditions.",
      bullets: [
        "Writing elif before if.",
        "Forgetting the colon after a condition.",
        "Using overlapping conditions in the wrong order.",
        "Forgetting indentation.",
        "Expecting all matching elif blocks to run."
      ],
      code: "marks = 95\n\nif marks >= 50:\n    print(\"Passed\")\nelif marks >= 90:\n    print(\"Excellent\")",
      output: "Passed"
    },
    {
      kicker: "14 · Practice",
      title: "Classroom Exercise",
      body: "Create a program that displays a student's grade based on marks.",
      bullets: [
        "Ask the user to enter marks.",
        "90 or above: Excellent.",
        "80 to 89: Very Good.",
        "70 to 79: Good.",
        "60 to 69: Passed.",
        "Below 60: Failed."
      ]
    },
    {
      kicker: "15 · Summary",
      title: "What Did We Learn?",
      body: "The elif statement allows Python programs to handle multiple possible conditions.",
      bullets: [
        "elif means else if.",
        "It comes after if.",
        "Multiple elif statements are allowed.",
        "Python checks conditions from top to bottom.",
        "Only the first matching block runs.",
        "Condition order is important."
      ]
    }
  ],

  example: {
    explanation: "This example checks a student's marks and displays the corresponding grade. Python executes only the first matching condition.",
    code: "marks = 85\n\nif marks >= 90:\n    print(\"Grade A\")\nelif marks >= 80:\n    print(\"Grade B\")\nelif marks >= 70:\n    print(\"Grade C\")\nelif marks >= 60:\n    print(\"Grade D\")",
    language: "python",
    output: "Grade B"
  },

  commonMistakes: [
    "Writing elif before the first if statement.",
    "Forgetting the colon after elif conditions.",
    "Using incorrect indentation inside conditional blocks.",
    "Placing a broad condition before a more specific condition.",
    "Expecting multiple elif blocks to execute.",
    "Forgetting that Python checks conditions from top to bottom.",
    "Using separate if statements when only one matching branch should execute."
  ],

  exercise: {
    question: "Create a student grading program. Ask the user to enter marks and convert the input to an integer. Use if and elif to display: Excellent for 90 or above, Very Good for 80–89, Good for 70–79, Passed for 60–69, and Failed for below 60. Test the program with different marks.",
    hint: "Start with marks >= 90, then check marks >= 80, marks >= 70, and marks >= 60. The final elif can handle the remaining values below 60."
  },

  solution: {
    explanation: "The program checks the student's marks from the highest range to the lowest. When one condition is True, its message is displayed and the remaining elif conditions are skipped.",
    code: "marks = int(input(\"Enter your marks: \"))\n\nif marks >= 90:\n    print(\"Excellent\")\nelif marks >= 80:\n    print(\"Very Good\")\nelif marks >= 70:\n    print(\"Good\")\nelif marks >= 60:\n    print(\"Passed\")\nelif marks >= 0:\n    print(\"Failed\")",
    output: "Enter your marks: 85\nVery Good"
  },

  quiz: [
    {
      question: "What does elif mean?",
      options: [
        "Else if",
        "End if",
        "Execute if",
        "Equal if"
      ],
      answer: 0,
      explanation: "elif is short for else if and checks another condition."
    },
    {
      question: "Where should elif be written?",
      options: [
        "Before if",
        "After if",
        "Only inside a loop",
        "At the end of every program"
      ],
      answer: 1,
      explanation: "An elif statement must follow an if statement or another elif."
    },
    {
      question: "How many elif statements can we use in one conditional chain?",
      options: [
        "Only one",
        "Only two",
        "As many as needed",
        "None"
      ],
      answer: 2,
      explanation: "Python allows multiple elif statements in one conditional chain."
    },
    {
      question: "What happens after Python finds a True condition in an if-elif chain?",
      options: [
        "All remaining blocks run",
        "The program always stops",
        "The remaining branches are skipped",
        "Python checks the first condition again"
      ],
      answer: 2,
      explanation: "Only the first matching block executes in an if-elif chain."
    },
    {
      question: "What is the output?\nnumber = 10\nif number > 5:\n    print(\"A\")\nelif number > 8:\n    print(\"B\")",
      options: ["A", "B", "A and B", "No output"],
      answer: 0,
      explanation: "The first condition is True, so Python skips the elif block."
    },
    {
      question: "Why is condition order important?",
      options: [
        "Python checks conditions from bottom to top",
        "Python executes the first matching branch",
        "All conditions must be False",
        "elif cannot contain comparisons"
      ],
      answer: 1,
      explanation: "Python executes only the first matching branch, so conditions must be ordered carefully."
    },
    {
      question: "Can we use logical operators inside an elif condition?",
      options: ["Yes", "No", "Only and", "Only or"],
      answer: 0,
      explanation: "Logical operators such as and, or, and not can be used in conditions."
    },
    {
      question: "What is the main difference between separate if statements and an if-elif chain?",
      options: [
        "They always produce the same result",
        "Separate if statements can execute multiple matching blocks",
        "elif is used for loops",
        "Separate if statements cannot compare values"
      ],
      answer: 1,
      explanation: "Separate if statements are checked independently, while an if-elif chain selects only the first matching branch."
    }
  ],

  takeaways: [
    "elif means else if.",
    "An elif statement checks another condition when previous conditions are False.",
    "You can use multiple elif statements.",
    "Python checks conditions from top to bottom.",
    "Only the first matching block runs in an if-elif chain.",
    "The order of conditions can change the program's result.",
    "Logical operators can be used inside elif conditions."
  ],

  teacherNotes: "Begin by reviewing the previous if lesson. Ask students what happens when a program needs to check more than one possible condition. Introduce elif as else if. Draw a simple flow on the board: check if, otherwise check elif, otherwise continue to the next elif. Use the student grading example as the main teaching example. Emphasize that Python executes only the first matching block and skips the remaining branches. Demonstrate why condition order matters with an incorrect grading example where marks >= 50 comes before marks >= 90. Compare an if-elif chain with separate if statements. Do not fully teach else here if it is a separate lesson in the curriculum. In the exercise, ask students to test several values such as 55, 65, 75, 85, and 95.",

  teachingTime: "45-55 minutes"
};