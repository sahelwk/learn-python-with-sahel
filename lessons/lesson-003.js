
window.lessonData = window.lessonData || {};

window.lessonData[3] = {
  "id": 3,
  "title": "What is a Program?",
  "category": "Programming Introduction",
  "contentStatus": "authored",

  "introduction": "A program is a set of instructions that tells a computer how to perform a particular task. For example, a calculator program adds numbers, a music player plays songs, and a school management program stores student information. In this lesson, students learn what a program is and how simple programs work.",

  "definition": "A program is a set of instructions written in a programming language that a computer can execute to perform a specific task.",

  "whyItMatters": "Programs are the reason computers can perform useful tasks. Websites, mobile applications, games, calculators, and office management systems all use programs. Understanding programs helps students learn how to build their own applications with Python.",

  "objectives": [
    "Explain the meaning of a program in simple words.",
    "Identify examples of programs used in everyday life.",
    "Understand the difference between a program and programming.",
    "Recognize that programs contain instructions that the computer executes.",
    "Write and run a simple Python program.",
    "Predict the output of a small Python program."
  ],

  "slides": [
    {
      "kicker": "01 · Basic idea",
      "title": "What Is a Program?",
      "body": "A program is a group of instructions that tells a computer what to do. Think of a program as a list of steps prepared for the computer. When the computer runs the program, it follows those instructions to complete a task.",
      "bullets": [
        "A program contains instructions.",
        "The instructions are written using a programming language.",
        "The computer executes the instructions to perform a task.",
        "Example: a calculator program receives numbers, calculates the answer, and displays the result."
      ]
    },
    {
      "kicker": "02 · Everyday examples",
      "title": "Programs Around Us",
      "body": "We use programs every day, even when we do not notice them. Different programs are designed to perform different tasks.",
      "bullets": [
        "Calculator: performs mathematical calculations.",
        "Music player: plays audio files.",
        "Web browser: helps us open and use websites.",
        "School management system: stores student and examination information.",
        "Banking application: helps customers check balances and perform supported transactions.",
        "A program is designed to perform a particular task or a group of related tasks."
      ]
    },
    {
      "kicker": "03 · Simple comparison",
      "title": "A Program Is Like a Recipe",
      "body": "Imagine a recipe for making tea. It tells you what to do and in which order. A computer program is similar because it contains instructions for completing a task. However, computer instructions must follow the rules of a programming language.",
      "bullets": [
        "Step 1: Put water in a pot.",
        "Step 2: Heat the water.",
        "Step 3: Add tea.",
        "Step 4: Pour the tea into a cup.",
        "If an important step is missing or the order is wrong, the result may not be what you expect.",
        "A computer program also needs clear and correctly written instructions."
      ]
    },
    {
      "kicker": "04 · Important difference",
      "title": "Program vs. Programming",
      "body": "These two words are related, but they do not mean exactly the same thing. A program is the set of instructions created for a task. Programming is the process of writing, testing, and improving those instructions.",
      "bullets": [
        "Program: the instructions themselves.",
        "Programming: the work of creating and improving a program.",
        "Programmer: the person who writes and tests the program.",
        "Example: a school attendance application is a program; writing and testing its code is programming."
      ]
    },
    {
      "kicker": "05 · First code example",
      "title": "Let's Write a Simple Program",
      "body": "Python allows us to write small programs using simple instructions. This program displays a message on the screen.",
      "code": "print(\"Welcome to Python!\")",
      "language": "python",
      "output": "Welcome to Python!",
      "bullets": [
        "print() is a Python function used to display information.",
        "The text inside quotation marks is the message to display.",
        "When the program runs, Python executes the instruction.",
        "The message appears as output."
      ]
    },
    {
      "kicker": "06 · Step by step",
      "title": "How Does This Program Work?",
      "body": "Let's understand the program one part at a time. The computer does not guess what message we want. It follows the instruction written in the code.",
      "code": "print(\"Hello, Student!\")",
      "language": "python",
      "output": "Hello, Student!",
      "bullets": [
        "Step 1: Python reads the instruction.",
        "Step 2: It recognizes the print() function.",
        "Step 3: It displays the text inside the quotation marks.",
        "Step 4: The program produces the output Hello, Student!."
      ]
    },
    {
      "kicker": "07 · A useful program",
      "title": "A Program Can Solve a Problem",
      "body": "Suppose a teacher wants to calculate the total marks of a student. Instead of adding the marks manually every time, a program can perform the calculation.",
      "code": "math_marks = 18\nenglish_marks = 17\ntotal = math_marks + english_marks\nprint(total)",
      "language": "python",
      "output": "35",
      "bullets": [
        "The program stores the marks in variables.",
        "The plus sign (+) adds the two numbers.",
        "The result is stored in total.",
        "The print() function displays the result.",
        "Changing the marks changes the result."
      ]
    },
    {
      "kicker": "08 · Classroom activity",
      "title": "Design Your Own Program",
      "body": "Ask students to imagine a program that solves a small problem in their school or home. They should describe what information the program receives, what it does, and what result it produces.",
      "bullets": [
        "Example: a program that calculates the total marks of a student.",
        "Input: marks from different subjects.",
        "Process: add the marks together.",
        "Output: the student's total marks.",
        "Ask students to suggest another program, such as counting books or calculating the price of purchased items."
      ]
    },
    {
      "kicker": "09 · Practice",
      "title": "Write Your First Program",
      "body": "Create a program that displays your name and your favorite subject. Then change the text and run the program again.",
      "code": "print(\"My name is Ahmad.\")\nprint(\"My favorite subject is Python.\")",
      "language": "python",
      "output": "My name is Ahmad.\nMy favorite subject is Python.",
      "bullets": [
        "Replace Ahmad with your own name.",
        "Replace Python with your favorite subject.",
        "Run the program and observe the output.",
        "Explain how changing the text changes the result."
      ]
    },
    {
      "kicker": "10 · Review",
      "title": "Review and Homework",
      "body": "Review the key ideas and make sure students can explain them using their own examples.",
      "bullets": [
        "Define a program in your own words.",
        "Give three examples of programs used in everyday life.",
        "Explain the difference between a program and programming.",
        "Write a Python program that displays two lines of text.",
        "Homework: describe a useful program for your school and explain what task it would perform."
      ]
    }
  ],

  "example": {
    "explanation": "This program calculates the total of two subject marks. The values are stored in variables, added together, and displayed with print().",
    "code": "math_marks = 18\nenglish_marks = 17\ntotal = math_marks + english_marks\nprint(total)",
    "language": "python",
    "output": "35"
  },

  "commonMistakes": [
    "Thinking that a program and programming are the same thing. A program is a set of instructions; programming is the process of creating and improving them.",
    "Thinking that every program must be large or complicated. A program can contain only one instruction.",
    "Forgetting quotation marks when displaying text with print().",
    "Assuming that a computer can produce the intended result without valid instructions.",
    "Changing a value in a program but forgetting to predict or check how the output changes.",
    "Thinking that a program is always a mobile application. Programs also run inside websites, office systems, games, and other digital devices."
  ],

  "exercise": {
    "question": "Write a Python program that displays your name on the first line and your city on the second line. Then explain what the program does.",
    "hint": "Use two print() instructions, one for your name and one for your city."
  },

  "solution": {
    "explanation": "The program contains two instructions. The first displays the student's name, and the second displays the city. Replace the example values with your own information.",
    "code": "print(\"My name is Ahmad.\")\nprint(\"I live in Kabul.\")",
    "output": "My name is Ahmad.\nI live in Kabul."
  },

  "quiz": [
    {
      "question": "What is a program?",
      "options": [
        "A set of instructions that a computer can execute",
        "A physical part of a computer",
        "An internet connection"
      ],
      "answer": 0,
      "explanation": "A program contains instructions that tell a computer how to perform a task."
    },
    {
      "question": "What is programming?",
      "options": [
        "Only using a computer to watch videos",
        "The process of writing, testing, and improving programs",
        "The process of cleaning a computer"
      ],
      "answer": 1,
      "explanation": "Programming is the process of creating and improving computer instructions."
    },
    {
      "question": "Which of these is an example of a program?",
      "options": [
        "A keyboard",
        "A computer desk",
        "A calculator application"
      ],
      "answer": 2,
      "explanation": "A calculator application is software that runs instructions to perform calculations."
    },
    {
      "question": "What does print(\"Hello!\") do in Python?",
      "options": [
        "Displays Hello! on the screen",
        "Deletes a file",
        "Turns off the computer"
      ],
      "answer": 0,
      "explanation": "The print() function displays the text Hello!."
    },
    {
      "question": "What is a programmer?",
      "options": [
        "A person who only uses a keyboard",
        "A person who creates and tests programs",
        "A type of computer screen"
      ],
      "answer": 1,
      "explanation": "A programmer writes, tests, and improves programs."
    },
    {
      "question": "What output does this program produce?\nprint(10 + 5)",
      "options": [
        "105",
        "10 + 5",
        "15"
      ],
      "answer": 2,
      "explanation": "Python calculates 10 + 5 and print() displays the result, 15."
    }
  ],

  "takeaways": [
    "A program is a set of instructions for a computer.",
    "Programs help computers perform specific tasks.",
    "Programming is the process of creating, testing, and improving programs.",
    "A programmer is a person who writes and tests programs.",
    "Programs can be small or large and can solve many different problems.",
    "Python's print() function can display text and calculation results.",
    "Changing program instructions or values can change the result."
  ],

  "teacherNotes": "Suggested teaching time is 45–60 minutes. Begin by asking students to name applications they use on their phones or computers. Explain that each application uses programs to perform tasks. Use the recipe analogy to introduce the idea of instructions, then explain the difference between a program, programming, and a programmer. Demonstrate the print() examples in Python. Ask students to predict the output before running each example. If computers are available, let students modify the name and city in the practice activity. Finish with the quiz and homework. Keep the explanations practical and avoid introducing advanced programming concepts too early.",

  "teachingTime": "45-60 minutes"
};
