
window.lessonData = window.lessonData || {};

window.lessonData[4] = {
  "id": 4,
  "title": "What is an Algorithm?",
  "category": "Programming Introduction",
  "contentStatus": "authored",

  "introduction": "An algorithm is a clear, ordered set of steps for solving a problem or completing a task. We use algorithms in everyday life, even when we do not know the word. For example, following steps to make tea, calculate exam marks, or find the largest number are all examples of algorithmic thinking. In this lesson, students learn what an algorithm is and how it helps us solve problems before writing code.",

  "definition": "An algorithm is a finite sequence of clear and ordered steps used to solve a problem or complete a task.",

  "whyItMatters": "Before writing a computer program, a programmer needs to understand the problem and decide how to solve it. An algorithm helps organize the solution into steps, making the program easier to write, test, understand, and improve.",

  "objectives": [
    "Explain the meaning of an algorithm in simple words.",
    "Recognize algorithms in everyday activities.",
    "Write clear steps to solve a simple problem.",
    "Understand why the order of steps matters.",
    "Distinguish between an algorithm and a computer program.",
    "Translate a simple algorithm into Python code."
  ],

  "slides": [
    {
      "kicker": "01 · Basic idea",
      "title": "What Is an Algorithm?",
      "body": "An algorithm is a series of clear steps that we follow to solve a problem or complete a task. Think about how you prepare for school: you wake up, get ready, pack your bag, and leave home. These steps form a plan. In the same way, an algorithm gives us a plan for solving a problem.",
      "bullets": [
        "An algorithm is a step-by-step plan.",
        "Each step should be clear and understandable.",
        "The steps should be arranged in a sensible order.",
        "An algorithm should eventually reach a result or finish the task.",
        "Algorithms can be written in everyday language before any code is created."
      ]
    },
    {
      "kicker": "02 · Everyday example",
      "title": "An Algorithm for Making Tea",
      "body": "Imagine someone who has never made tea before. We can explain the process by giving clear instructions in the correct order. This is an everyday example of an algorithm.",
      "bullets": [
        "Step 1: Take a pot and pour in water.",
        "Step 2: Heat the water until it boils.",
        "Step 3: Add tea leaves or a tea bag.",
        "Step 4: Wait until the tea is ready.",
        "Step 5: Pour the tea into a cup.",
        "Discuss: What could happen if we tried to pour the tea before preparing it?"
      ]
    },
    {
      "kicker": "03 · Why order matters",
      "title": "Why Must We Follow the Correct Order?",
      "body": "The steps of an algorithm should be arranged so that each step makes sense when it is performed. If we change the order carelessly, the task may fail or produce an unexpected result.",
      "bullets": [
        "First: Enter your username.",
        "Second: Enter your password.",
        "Third: Select the Login button.",
        "If we try to log in without entering the required information, the system may reject the attempt.",
        "A good algorithm makes the order of actions clear."
      ]
    },
    {
      "kicker": "04 · Problem solving",
      "title": "An Algorithm for Adding Two Numbers",
      "body": "Suppose we want to add two numbers. Before writing Python code, we can describe the solution as a small algorithm.",
      "bullets": [
        "Step 1: Start.",
        "Step 2: Take the first number.",
        "Step 3: Take the second number.",
        "Step 4: Add the two numbers.",
        "Step 5: Display the result.",
        "Step 6: Finish."
      ]
    },
    {
      "kicker": "05 · From steps to code",
      "title": "Turn an Algorithm into Python",
      "body": "Now we can write Python code to follow the algorithm. The program receives two numbers, adds them, and displays the answer.",
      "code": "first_number = 5\nsecond_number = 3\ntotal = first_number + second_number\nprint(total)",
      "language": "python",
      "output": "8",
      "bullets": [
        "The first two lines provide the numbers.",
        "The third line calculates their sum.",
        "The fourth line displays the result.",
        "The algorithm explains the solution; the Python program implements it."
      ]
    },
    {
      "kicker": "06 · Algorithm vs. program",
      "title": "What Is the Difference?",
      "body": "An algorithm describes the steps needed to solve a problem. A program contains instructions written in a programming language that a computer can execute. We can plan an algorithm before choosing how to write the program.",
      "bullets": [
        "Algorithm: a plan or sequence of steps for solving a problem.",
        "Program: instructions written in a programming language.",
        "Python: one language we can use to implement an algorithm.",
        "The same algorithm can often be implemented in different programming languages.",
        "Example: the steps for adding two numbers can be written in Python, Java, or JavaScript."
      ]
    },
    {
      "kicker": "07 · Find the largest number",
      "title": "A Simple Decision Algorithm",
      "body": "Suppose we have two numbers and want to find the larger one. The algorithm needs to compare the numbers and choose the correct result.",
      "bullets": [
        "Step 1: Take two numbers.",
        "Step 2: Compare the first number with the second.",
        "Step 3: If the first number is greater, choose the first number.",
        "Step 4: Otherwise, choose the second number or report that the numbers are equal when appropriate.",
        "Step 5: Display the result."
      ]
    },
    {
      "kicker": "08 · Classroom activity",
      "title": "Students Create Their Own Algorithm",
      "body": "Ask students to choose a simple daily task and describe the steps needed to complete it. They should explain the task clearly enough that another student can follow the instructions.",
      "bullets": [
        "Example tasks: prepare a school bag, calculate the total price of two items, or count the books on a shelf.",
        "Write each step on a separate line.",
        "Check whether the steps are in the correct order.",
        "Ask a classmate to follow the steps and identify anything unclear or missing.",
        "Improve the algorithm if it does not work as expected."
      ]
    },
    {
      "kicker": "09 · Practice",
      "title": "Write an Algorithm and a Program",
      "body": "Create a step-by-step algorithm for calculating the total price of two items. Then write a Python program that performs the same calculation.",
      "code": "price_one = 20\nprice_two = 30\ntotal_price = price_one + price_two\nprint(total_price)",
      "language": "python",
      "output": "50",
      "bullets": [
        "Identify the two input prices.",
        "Describe the addition step in plain language.",
        "Display the total price.",
        "Change one price and predict the new result before running the program."
      ]
    },
    {
      "kicker": "10 · Review",
      "title": "Review and Homework",
      "body": "Review the main ideas before ending the lesson. Students should be able to explain an algorithm without memorizing a complicated definition.",
      "bullets": [
        "Define an algorithm in your own words.",
        "Give one example of an algorithm from daily life.",
        "Explain why the order of steps matters.",
        "Explain the difference between an algorithm and a program.",
        "Homework: write a five-to-eight-step algorithm for calculating the total marks of a student in three subjects."
      ]
    }
  ],

  "example": {
    "explanation": "This program follows an algorithm for adding two numbers: store the inputs, calculate their sum, and display the result.",
    "code": "first_number = 5\nsecond_number = 3\ntotal = first_number + second_number\nprint(total)",
    "language": "python",
    "output": "8"
  },

  "commonMistakes": [
    "Thinking that an algorithm must be written in a programming language. Algorithms can first be described in simple everyday language.",
    "Confusing an algorithm with a program. An algorithm is the solution plan; a program implements instructions in a programming language.",
    "Writing steps that are unclear or incomplete.",
    "Putting steps in an order that does not make sense.",
    "Forgetting to define what information is needed and what result should be produced.",
    "Assuming that every problem has only one possible algorithm. Many problems can be solved in different ways."
  ],

  "exercise": {
    "question": "Write an algorithm for calculating the total marks of a student in three subjects. Then write a Python program that adds marks of 15, 18, and 17 and displays the total.",
    "hint": "First write the steps in simple language. Then store the three marks in variables, add them together, and display the result with print()."
  },

  "solution": {
    "explanation": "The algorithm takes three subject marks, adds them together, and displays the total. The Python code implements those steps. For the example marks 15, 18, and 17, the total is 50.",
    "code": "subject_one = 15\nsubject_two = 18\nsubject_three = 17\ntotal = subject_one + subject_two + subject_three\nprint(total)",
    "output": "50"
  },

  "quiz": [
    {
      "question": "What is an algorithm?",
      "options": [
        "A step-by-step plan for solving a problem",
        "A physical part of a computer",
        "A programming language only"
      ],
      "answer": 0,
      "explanation": "An algorithm is an ordered set of steps used to solve a problem or complete a task."
    },
    {
      "question": "Which of these is an everyday example of an algorithm?",
      "options": [
        "Looking at a blank wall",
        "Following steps to prepare tea",
        "Buying a keyboard without using it"
      ],
      "answer": 1,
      "explanation": "Preparing tea can be described as a sequence of steps in a sensible order."
    },
    {
      "question": "Why is the order of steps important in an algorithm?",
      "options": [
        "It makes the computer look newer",
        "It removes the need to solve the problem",
        "The correct order helps the task produce the intended result"
      ],
      "answer": 2,
      "explanation": "Steps performed in the wrong order may cause the task to fail or produce an unexpected result."
    },
    {
      "question": "What is the main difference between an algorithm and a program?",
      "options": [
        "An algorithm is a solution plan; a program implements instructions in code",
        "An algorithm is always hardware",
        "A program can never use an algorithm"
      ],
      "answer": 0,
      "explanation": "An algorithm describes the solution steps, while a program expresses instructions in a programming language."
    },
    {
      "question": "What is the output of this Python code?\nprint(5 + 3)",
      "options": [
        "53",
        "8",
        "5 + 3"
      ],
      "answer": 1,
      "explanation": "Python evaluates the addition and displays the result, 8."
    },
    {
      "question": "Can the same algorithm be implemented in different programming languages?",
      "options": [
        "No, an algorithm only works with one language",
        "Only if it contains no steps",
        "Yes, it can often be implemented in languages such as Python and Java"
      ],
      "answer": 2,
      "explanation": "An algorithm describes the solution, and different programming languages can be used to implement it."
    }
  ],

  "takeaways": [
    "An algorithm is a clear sequence of steps for solving a problem.",
    "Algorithms are used in everyday tasks as well as computer programming.",
    "The steps should be clear, ordered, and sufficient to complete the task.",
    "An algorithm can be written in plain language before any code is written.",
    "A program implements instructions using a programming language.",
    "Python can be used to turn an algorithm into an executable program.",
    "Testing an algorithm helps us find missing, unclear, or incorrectly ordered steps."
  ],

  "teacherNotes": "Suggested teaching time is 45–60 minutes. Begin by asking students how they prepare tea or get ready for school. Use their answers to introduce step-by-step instructions. Explain that an algorithm is a plan for solving a problem, not necessarily code. Demonstrate the addition algorithm first in plain language and then in Python. Ask students to predict the result before running the program. Use the classroom activity to let students write, exchange, and improve algorithms. Explain the difference between an algorithm and a program before the quiz. Keep examples practical and accessible to beginners.",

  "teachingTime": "45-60 minutes"
};
