window.lessonData = window.lessonData || {};
window.lessonData[29] = {
  id: 29,
  title: "if Statement",
  category: "Python Conditions",
  contentStatus: "authored",

  introduction: "The if statement allows a Python program to make decisions. It executes a block of code only when a given condition is True.",

  definition: "An if statement is a conditional statement that executes a block of code when its condition evaluates to True.",

  whyItMatters: "Conditions make programs intelligent and interactive. They allow applications to make decisions based on user input, prices, permissions, marks, and other information.",

  objectives: [
    "Understand what an if statement is.",
    "Learn the syntax and indentation rules of an if statement.",
    "Understand how conditions evaluate to True or False.",
    "Use comparison operators inside conditions.",
    "Write simple decision-making programs."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is an if Statement?",
      body: "An if statement allows a program to make a decision based on a condition.",
      bullets: [
        "A condition is checked.",
        "If the condition is True, the code runs.",
        "If the condition is False, the code is skipped.",
        "It is part of Python conditional statements."
      ]
    },
    {
      kicker: "02 · Daily Life",
      title: "Conditions in Real Life",
      body: "We make decisions every day based on conditions.",
      bullets: [
        "If it rains, take an umbrella.",
        "If you are hungry, eat food.",
        "If the traffic light is green, move.",
        "If a student passes, show a success message."
      ]
    },
    {
      kicker: "03 · Syntax",
      title: "How to Write an if Statement",
      body: "An if statement starts with the keyword if, followed by a condition and a colon.",
      bullets: [
        "Write the if keyword.",
        "Add a condition.",
        "Finish the line with a colon (:).",
        "Indent the code inside the if block."
      ],
      code: "if condition:\n    # Code runs when condition is True\n    print(\"Condition is True\")"
    },
    {
      kicker: "04 · First Example",
      title: "Your First if Statement",
      body: "The print() function runs only when the condition is True.",
      code: "temperature = 28\n\nif temperature > 25:\n    print(\"Warm day\")",
      output: "Warm day"
    },
    {
      kicker: "05 · True Condition",
      title: "When the Condition Is True",
      body: "When a condition evaluates to True, Python executes the indented block.",
      bullets: [
        "10 > 5 is True.",
        "The if block runs.",
        "The message is displayed."
      ],
      code: "number = 10\n\nif number > 5:\n    print(\"Number is greater than 5\")",
      output: "Number is greater than 5"
    },
    {
      kicker: "06 · False Condition",
      title: "When the Condition Is False",
      body: "When a condition evaluates to False, Python skips the if block.",
      bullets: [
        "3 > 5 is False.",
        "The if block does not run.",
        "No message is displayed."
      ],
      code: "number = 3\n\nif number > 5:\n    print(\"Number is greater than 5\")\n\nprint(\"Program finished\")",
      output: "Program finished"
    },
    {
      kicker: "07 · Comparison Operators",
      title: "Conditions with Comparison Operators",
      body: "Comparison operators help us create conditions.",
      bullets: [
        "== Equal to",
        "!= Not equal to",
        "> Greater than",
        "< Less than",
        ">= Greater than or equal to",
        "<= Less than or equal to"
      ],
      code: "age = 20\n\nif age >= 18:\n    print(\"You are an adult\")",
      output: "You are an adult"
    },
    {
      kicker: "08 · Practical Example",
      title: "Check Student Marks",
      body: "A program can check whether a student's marks meet the passing requirement.",
      bullets: [
        "Store the student's marks.",
        "Check whether marks are at least 50.",
        "Display a message when the condition is True."
      ],
      code: "marks = 75\n\nif marks >= 50:\n    print(\"You passed the exam\")",
      output: "You passed the exam"
    },
    {
      kicker: "09 · Practical Example",
      title: "Check User Age",
      body: "A program can check whether a user meets a required age.",
      code: "age = 17\n\nif age >= 18:\n    print(\"Access allowed\")",
      output: ""
    },
    {
      kicker: "10 · User Input",
      title: "Using input() with if",
      body: "We can receive information from a user and make decisions based on it.",
      bullets: [
        "input() receives user information as text.",
        "Convert numeric input using int().",
        "Use the entered value in a condition."
      ],
      code: "age = int(input(\"Enter your age: \"))\n\nif age >= 18:\n    print(\"You can register\")",
      output: "Enter your age: 20\nYou can register"
    },
    {
      kicker: "11 · String Conditions",
      title: "Checking Text with if",
      body: "Conditions can also compare strings.",
      bullets: [
        "Compare names or usernames.",
        "Text comparison is case-sensitive.",
        "Use == to compare string values."
      ],
      code: "username = \"admin\"\n\nif username == \"admin\":\n    print(\"Welcome, Administrator\")",
      output: "Welcome, Administrator"
    },
    {
      kicker: "12 · Indentation",
      title: "Why Is Indentation Important?",
      body: "Python uses indentation to identify which statements belong to the if block.",
      bullets: [
        "Use consistent indentation.",
        "Four spaces are the standard convention.",
        "Indented statements belong to the if block.",
        "Incorrect indentation causes an error or changes the block."
      ],
      code: "temperature = 30\n\nif temperature > 25:\n    print(\"It is warm\")\n    print(\"Stay hydrated\")\n\nprint(\"Program finished\")",
      output: "It is warm\nStay hydrated\nProgram finished"
    },
    {
      kicker: "13 · More Than One Statement",
      title: "Multiple Statements Inside if",
      body: "An if block can contain more than one statement.",
      bullets: [
        "All indented statements belong to the block.",
        "They run when the condition is True.",
        "Statements outside the block run independently."
      ],
      code: "balance = 500\n\nif balance >= 100:\n    print(\"Payment accepted\")\n    print(\"Your order is confirmed\")",
      output: "Payment accepted\nYour order is confirmed"
    },
    {
      kicker: "14 · Logical Conditions",
      title: "Using and, or, and not",
      body: "Logical operators can combine multiple conditions inside an if statement.",
      bullets: [
        "and: Both conditions must be True.",
        "or: At least one condition must be True.",
        "not: Reverses a Boolean condition."
      ],
      code: "age = 25\nhas_id = True\n\nif age >= 18 and has_id:\n    print(\"Entry allowed\")",
      output: "Entry allowed"
    },
    {
      kicker: "15 · Real-World Example",
      title: "Simple Login Check",
      body: "A program can check whether the entered username matches the expected username.",
      code: "username = input(\"Enter username: \")\n\nif username == \"admin\":\n    print(\"Welcome, Admin\")",
      output: "Enter username: admin\nWelcome, Admin"
    },
    {
      kicker: "16 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Pay attention to syntax, comparison operators, and indentation.",
      bullets: [
        "Forgetting the colon after if.",
        "Using = instead of == for comparison.",
        "Forgetting indentation.",
        "Writing True and False with incorrect capitalization.",
        "Expecting the if block to run when the condition is False."
      ],
      code: "age = 20\n\nif age >= 18:\n    print(\"Adult\")",
      output: "Adult"
    },
    {
      kicker: "17 · Practice",
      title: "Classroom Exercise",
      body: "Create a simple program to check whether a student passes an exam.",
      bullets: [
        "Ask the user to enter marks.",
        "Convert the input to an integer.",
        "Use if to check whether marks are 50 or higher.",
        "Print \"You passed the exam\" when the condition is True.",
        "Test with marks below and above 50."
      ]
    },
    {
      kicker: "18 · Summary",
      title: "What Did We Learn?",
      body: "The if statement is the foundation of decision-making in Python.",
      bullets: [
        "if checks a condition.",
        "The block runs only when the condition is True.",
        "A colon is required after the condition.",
        "Indentation defines the if block.",
        "Comparison and logical operators can be used in conditions."
      ]
    }
  ],

  example: {
    explanation: "This example receives a student's marks and displays a passing message only when the marks are 50 or higher.",
    code: "marks = int(input(\"Enter your marks: \"))\n\nif marks >= 50:\n    print(\"Congratulations! You passed.\")\n\nprint(\"Result checking completed.\")",
    language: "python",
    output: "Enter your marks: 75\nCongratulations! You passed.\nResult checking completed."
  },

  commonMistakes: [
    "Forgetting the colon (:) at the end of the if condition.",
    "Using = instead of == when comparing values.",
    "Forgetting to indent statements inside the if block.",
    "Thinking that the if block runs when its condition is False.",
    "Forgetting that input() returns a string.",
    "Writing true or false instead of Python's True or False.",
    "Incorrectly placing statements inside or outside the if block."
  ],

  exercise: {
    question: "Write a program that asks the user to enter their exam marks. Convert the input to an integer. If the marks are 50 or higher, display \"You passed the exam\". Otherwise, do not display a passing message. Test your program with 40 and 80.",
    hint: "Use int(input()) to receive marks, then write if marks >= 50: and indent the print() statement."
  },

  solution: {
    explanation: "The program receives the student's marks and converts them into an integer. The if statement checks whether marks are greater than or equal to 50. If the condition is True, the passing message is displayed. If it is False, the program skips the indented block.",
    code: "marks = int(input(\"Enter your marks: \"))\n\nif marks >= 50:\n    print(\"You passed the exam\")\n\nprint(\"Program finished\")",
    output: "Enter your marks: 80\nYou passed the exam\nProgram finished"
  },

  quiz: [
    {
      question: "What is the main purpose of an if statement?",
      options: [
        "To repeat code",
        "To make decisions based on conditions",
        "To create a list",
        "To define a function"
      ],
      answer: 1,
      explanation: "An if statement executes code when a condition is True."
    },
    {
      question: "Which keyword starts a conditional statement?",
      options: ["for", "while", "if", "def"],
      answer: 2,
      explanation: "The if keyword starts a conditional statement."
    },
    {
      question: "What must be written after an if condition?",
      options: ["Semicolon ;", "Colon :", "Comma ,", "Dot ."],
      answer: 1,
      explanation: "Python requires a colon after the if condition."
    },
    {
      question: "What happens when an if condition is False?",
      options: [
        "The indented block is skipped",
        "The program always stops",
        "The block runs twice",
        "Python changes False to True"
      ],
      answer: 0,
      explanation: "Python skips the indented if block when its condition is False."
    },
    {
      question: "Which operator checks whether two values are equal?",
      options: ["=", "==", "!=", ">"],
      answer: 1,
      explanation: "The == operator compares two values for equality."
    },
    {
      question: "What is the standard indentation convention in Python?",
      options: ["One space", "Two spaces", "Four spaces", "Eight tabs"],
      answer: 2,
      explanation: "Four spaces are the standard indentation convention."
    },
    {
      question: "What does input() return by default?",
      options: ["Integer", "Float", "String", "Boolean"],
      answer: 2,
      explanation: "input() returns the entered information as a string."
    },
    {
      question: "What is the output?\nnumber = 10\nif number > 5:\n    print(\"Yes\")",
      options: ["Yes", "No", "10", "Error"],
      answer: 0,
      explanation: "10 is greater than 5, so the condition is True."
    }
  ],

  takeaways: [
    "The if statement makes decisions based on conditions.",
    "The if block executes only when its condition is True.",
    "Always write a colon after the if condition.",
    "Use indentation to define the if block.",
    "Comparison operators are commonly used in conditions.",
    "input() returns a string, so convert numeric input when necessary."
  ],

  teacherNotes: "Start the lesson with simple daily-life decisions such as taking an umbrella when it rains. Explain that programs can also make decisions. Introduce the if syntax and emphasize the colon and four-space indentation. Use both True and False examples so students understand when the block runs and when it is skipped. Demonstrate comparison operators and then show how input() can be used with if. Make sure students understand that input() returns a string and that numeric input must be converted with int() when comparing numbers. Briefly introduce logical operators as a preview, but explain them in more depth in the appropriate lesson. Do not introduce elif and else in detail here; those should be taught in separate lessons. Ask students to predict outputs before executing each example.",

  teachingTime: "50-60 minutes"
};