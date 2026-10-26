
window.lessonData = window.lessonData || {};

window.lessonData[5] = {
  "id": 5,
  "title": "Problem Solving",
  "category": "Programming Introduction",
  "contentStatus": "authored",

  "introduction": "Problem solving means understanding a problem, thinking about possible solutions, choosing a suitable approach, and checking whether the solution works. Programmers use this process before and during coding. In this lesson, students learn how to solve simple problems step by step using familiar everyday examples and basic Python programs.",

  "definition": "Problem solving is the process of understanding a problem, planning a solution, carrying out the necessary steps, and checking the result.",

  "whyItMatters": "Programming is not only about writing code. A programmer must first understand what needs to be done and decide how to do it. Good problem-solving skills help programmers write clearer programs, find mistakes, save time, and create useful solutions for real-world needs.",

  "objectives": [
    "Explain problem solving in simple words.",
    "Identify the problem before trying to solve it.",
    "Break a large problem into smaller, manageable steps.",
    "Plan a solution using an algorithm.",
    "Translate a simple solution into Python code.",
    "Test a solution and correct mistakes when necessary."
  ],

  "slides": [
    {
      "kicker": "01 · Basic idea",
      "title": "What Is Problem Solving?",
      "body": "Problem solving means finding a suitable way to handle a problem or complete a task. Before taking action, we need to understand what the problem is, think about how to solve it, and check whether our solution works.",
      "bullets": [
        "First, understand the problem.",
        "Second, think about possible solutions.",
        "Third, choose a suitable solution.",
        "Fourth, follow the steps needed to solve the problem.",
        "Finally, check the result and improve the solution if necessary."
      ]
    },
    {
      "kicker": "02 · Everyday life",
      "title": "Problem Solving Around Us",
      "body": "We solve problems every day, often without thinking about the steps. For example, if you are late for class, you may need to decide what to prepare first and how to reach school on time.",
      "bullets": [
        "Problem: You need to calculate the total price of several items.",
        "Possible solution: Add the prices together.",
        "Problem: You cannot find a document on your computer.",
        "Possible solution: Search using the file name or look in the correct folder.",
        "Problem: You have limited time to study.",
        "Possible solution: Make a study plan and begin with the most important task."
      ]
    },
    {
      "kicker": "03 · Understand first",
      "title": "Step 1: Understand the Problem",
      "body": "Before writing code, make sure you understand exactly what needs to be solved. If you misunderstand the problem, your program may work correctly but still produce the wrong result for the task.",
      "bullets": [
        "Ask: What do I need to find or achieve?",
        "Ask: What information do I already have?",
        "Ask: What information or result is required?",
        "Example: A teacher wants to calculate the total marks of a student in three subjects.",
        "Required result: The sum of the three subject marks."
      ]
    },
    {
      "kicker": "04 · Break it down",
      "title": "Step 2: Divide the Problem into Smaller Steps",
      "body": "A large problem can feel difficult when we try to solve everything at once. Dividing it into smaller tasks makes it easier to understand, complete, and test.",
      "bullets": [
        "Task: Calculate a student's total marks.",
        "Small step 1: Obtain the first subject mark.",
        "Small step 2: Obtain the second subject mark.",
        "Small step 3: Obtain the third subject mark.",
        "Small step 4: Add all three marks.",
        "Small step 5: Display the total."
      ]
    },
    {
      "kicker": "05 · Plan the solution",
      "title": "Step 3: Create an Algorithm",
      "body": "An algorithm is a clear sequence of steps for solving a problem. After understanding the problem, write the steps in simple language before turning them into code.",
      "bullets": [
        "Start.",
        "Take the marks of three subjects.",
        "Add the marks together.",
        "Display the total marks.",
        "Finish.",
        "The algorithm describes the solution without requiring Python syntax."
      ]
    },
    {
      "kicker": "06 · Write the code",
      "title": "Step 4: Implement the Solution in Python",
      "body": "Once the solution is clear, we can write Python code to carry out the steps. The program below adds three subject marks and displays their total.",
      "code": "math_marks = 15\nenglish_marks = 18\nscience_marks = 17\n\ntotal = math_marks + english_marks + science_marks\nprint(total)",
      "language": "python",
      "output": "50",
      "bullets": [
        "The first three lines store the subject marks.",
        "The plus sign (+) adds the three values.",
        "The result is stored in the variable total.",
        "The print() function displays the result.",
        "The program implements the solution planned in the algorithm."
      ]
    },
    {
      "kicker": "07 · Test the result",
      "title": "Step 5: Test and Check the Solution",
      "body": "After writing code, do not assume that it is correct. Run the program, check the output, and compare it with the answer you expect. Try different inputs to see whether the program still works.",
      "bullets": [
        "Test 1: 15 + 18 + 17 should produce 50.",
        "Test 2: 10 + 20 + 30 should produce 60.",
        "Check whether the program produces the expected result.",
        "If the output is wrong, review the instructions and calculations.",
        "Testing helps identify mistakes before the program is used."
      ]
    },
    {
      "kicker": "08 · Fix mistakes",
      "title": "What If the Program Gives the Wrong Answer?",
      "body": "Sometimes a program contains a mistake, also called a bug. Finding and correcting mistakes is called debugging. A programmer checks the code carefully, identifies the cause of the problem, fixes it, and tests the program again.",
      "code": "first_number = 10\nsecond_number = 20\nresult = first_number - second_number\nprint(result)",
      "language": "python",
      "output": "-10",
      "bullets": [
        "The task was to add 10 and 20.",
        "The program uses the minus sign (-), so it subtracts instead.",
        "The output is -10, which does not match the intended task.",
        "Fix the code by replacing - with +.",
        "Run the program again and check that the output is 30."
      ]
    },
    {
      "kicker": "09 · Classroom activity",
      "title": "Solve a Real-Life Problem",
      "body": "Ask students to imagine buying two items from a shop. They know the price of each item but need to calculate how much both items cost together. Let them explain the solution before writing any code.",
      "bullets": [
        "Problem: Find the total price of two items.",
        "Input: The price of the first item and the price of the second item.",
        "Plan: Add the two prices.",
        "Output: Display the total price.",
        "Example: 20 + 30 = 50.",
        "Ask students what would happen if they accidentally subtracted the prices instead."
      ]
    },
    {
      "kicker": "10 · Practice",
      "title": "Write, Run, and Improve a Solution",
      "body": "Write a program that calculates the total price of three items. Predict the answer before running the code, then change one price and check the new result.",
      "code": "item_one = 20\nitem_two = 30\nitem_three = 10\n\ntotal_price = item_one + item_two + item_three\nprint(total_price)",
      "language": "python",
      "output": "60",
      "bullets": [
        "Identify the information needed to solve the problem.",
        "Write the algorithm in simple language.",
        "Implement the algorithm in Python.",
        "Predict the output before running the program.",
        "Change one price and test the program again."
      ]
    },
    {
      "kicker": "11 · Review",
      "title": "Review and Homework",
      "body": "A good programmer does not immediately start typing code without understanding the task. Review the problem-solving steps and ask students to explain them in their own words.",
      "bullets": [
        "Define problem solving.",
        "Explain why understanding the problem comes first.",
        "Describe how an algorithm helps solve a problem.",
        "Explain why programs need testing.",
        "Explain what debugging means.",
        "Homework: plan and write a Python program that calculates the total marks of a student in four subjects."
      ]
    }
  ],

  "example": {
    "explanation": "This example demonstrates the problem-solving process. We identify the task, store the three subject marks, add them together, and display the result. The expected total is 50.",
    "code": "math_marks = 15\nenglish_marks = 18\nscience_marks = 17\n\ntotal = math_marks + english_marks + science_marks\nprint(total)",
    "language": "python",
    "output": "50"
  },

  "commonMistakes": [
    "Starting to write code before understanding the problem.",
    "Trying to solve a large problem all at once instead of dividing it into smaller tasks.",
    "Forgetting to plan the steps before implementing the solution.",
    "Using the wrong mathematical operator, such as subtraction instead of addition.",
    "Assuming that a program is correct without running and testing it.",
    "Changing code to fix an error without understanding the cause of the problem.",
    "Testing only one set of inputs and overlooking cases where the program may behave differently."
  ],

  "exercise": {
    "question": "A student has marks of 16, 19, and 15 in three subjects. First, write the steps needed to calculate the total marks. Then write a Python program to calculate and display the total. Finally, explain how you would test the program.",
    "hint": "Plan the solution first. Store each subject mark in a variable, add the three values, display the result, and compare the output with the expected total."
  },

  "solution": {
    "explanation": "The solution follows four main actions: identify the three marks, add them, display the result, and compare the output with the expected answer. The total is 50. To test the program, use another set of marks and verify that the new total is correct.",
    "code": "subject_one = 16\nsubject_two = 19\nsubject_three = 15\n\ntotal = subject_one + subject_two + subject_three\nprint(total)",
    "output": "50"
  },

  "quiz": [
    {
      "question": "What should a programmer do first when solving a problem?",
      "options": [
        "Immediately write a large amount of code",
        "Understand the problem and the required result",
        "Delete the existing program"
      ],
      "answer": 1,
      "explanation": "Understanding the problem helps the programmer choose an appropriate solution."
    },
    {
      "question": "Why should a large problem be divided into smaller tasks?",
      "options": [
        "To make the problem easier to understand and solve",
        "To make every program longer",
        "To avoid checking the solution"
      ],
      "answer": 0,
      "explanation": "Smaller tasks are easier to plan, implement, and test."
    },
    {
      "question": "What is the purpose of an algorithm?",
      "options": [
        "To decorate the computer screen",
        "To replace all computer hardware",
        "To describe the steps for solving a problem"
      ],
      "answer": 2,
      "explanation": "An algorithm provides an ordered plan for solving a problem."
    },
    {
      "question": "What is debugging?",
      "options": [
        "Making the computer physically smaller",
        "Finding and correcting mistakes in a program",
        "Changing every variable name"
      ],
      "answer": 1,
      "explanation": "Debugging is the process of identifying and correcting program errors."
    },
    {
      "question": "What is the output of this program?\nprint(10 + 20)",
      "options": [
        "30",
        "1020",
        "-10"
      ],
      "answer": 0,
      "explanation": "Python adds 10 and 20 and displays 30."
    },
    {
      "question": "Why do programmers test their programs?",
      "options": [
        "To avoid understanding the code",
        "To guarantee that no changes will ever be needed",
        "To check whether the program produces the expected results"
      ],
      "answer": 2,
      "explanation": "Testing helps verify the result and discover mistakes or unexpected behavior."
    }
  ],

  "takeaways": [
    "Problem solving begins with understanding the problem.",
    "Breaking a large problem into smaller steps makes it easier to solve.",
    "An algorithm describes a planned solution.",
    "Python code can implement the steps of an algorithm.",
    "Testing checks whether a program produces the expected result.",
    "Debugging means finding and correcting mistakes in code.",
    "Programmers often improve their solutions by testing and making changes."
  ],

  "teacherNotes": "Suggested teaching time is 45–60 minutes. Begin with a simple everyday problem, such as calculating the total price of two items. Ask students to explain the problem and propose a solution before writing code. Introduce the sequence: understand the problem, break it into smaller steps, plan an algorithm, write the code, test the result, and debug if necessary. Demonstrate the marks example and deliberately show the subtraction mistake in the debugging slide. Ask students to predict the output before running each example. Finish with the exercise and quiz. Emphasize that problem solving is a thinking process, not simply typing code.",

  "teachingTime": "45-60 minutes"
};
