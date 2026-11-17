
window.lessonData = window.lessonData || {};

window.lessonData[36] = {
  id: 36,
  title: "while Loop",
  category: "Python Loops",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn how to use Python's while loop to repeat instructions as long as a condition remains True.",

  definition:
    "A while loop is a control structure that repeatedly executes a block of code as long as its condition is True.",

  whyItMatters:
    "A while loop is useful when we do not know exactly how many times an operation must be repeated. It is commonly used for menus, user input, validation, counting, and repeated attempts.",

  objectives: [
    "Understand the purpose of a while loop.",
    "Explain the syntax of a while loop.",
    "Understand how a condition controls repetition.",
    "Create and update a counter variable.",
    "Use comparison operators in while conditions.",
    "Understand infinite loops and how to avoid them.",
    "Use break and continue inside a while loop.",
    "Use while loops with user input.",
    "Build practical programs using while loops."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is a while Loop?",
      body:
        "A while loop repeats a block of code as long as a specified condition is True.",
      bullets: [
        "It repeats instructions.",
        "It checks a condition before every iteration.",
        "It stops when the condition becomes False."
      ]
    },

    {
      kicker: "02 · Real-life example",
      title: "Understanding while in Daily Life",
      body:
        "Imagine that you continue studying while you still have unfinished lessons.",
      bullets: [
        "Check whether lessons are unfinished.",
        "If yes, continue studying.",
        "If no, stop studying.",
        "The condition controls how long the activity continues."
      ]
    },

    {
      kicker: "03 · Comparison",
      title: "for Loop vs while Loop",
      body:
        "Both loops repeat instructions, but they are commonly used in different situations.",
      bullets: [
        "for loop: commonly used to process items or repeat a known number of times.",
        "while loop: commonly used to repeat while a condition remains True.",
        "for example: display five numbers.",
        "while example: keep asking until the correct password is entered."
      ],
      code:
        "# for loop\nfor number in range(3):\n    print(number)\n\n# while loop\nnumber = 0\nwhile number < 3:\n    print(number)\n    number += 1",
      language: "python",
      output:
        "0\n1\n2\n0\n1\n2"
    },

    {
      kicker: "04 · Syntax",
      title: "while Loop Syntax",
      body:
        "The while statement checks its condition before executing the indented block.",
      code:
        "while condition:\n    # Instructions to repeat\n    print(\"Running\")",
      language: "python",
      bullets: [
        "while starts the loop.",
        "The condition must produce True or False.",
        "The colon starts the loop block.",
        "Indentation identifies the repeated instructions."
      ]
    },

    {
      kicker: "05 · First example",
      title: "Print Numbers from 1 to 5",
      body:
        "Let's use a while loop to display numbers from 1 to 5.",
      code:
        "number = 1\n\nwhile number <= 5:\n    print(number)\n    number += 1",
      language: "python",
      output:
        "1\n2\n3\n4\n5",
      bullets: [
        "number starts at 1.",
        "The condition checks whether number is less than or equal to 5.",
        "number += 1 increases the value after every iteration.",
        "The loop stops when number becomes 6."
      ]
    },

    {
      kicker: "06 · Understanding the counter",
      title: "Why Do We Update the Variable?",
      body:
        "The counter changes in every iteration so that the condition can eventually become False.",
      code:
        "count = 0\n\nwhile count < 3:\n    print(\"Hello\")\n    count += 1",
      language: "python",
      output:
        "Hello\nHello\nHello",
      bullets: [
        "count starts at zero.",
        "The loop runs while count is less than 3.",
        "count += 1 increases the counter.",
        "After three iterations, the condition becomes False."
      ]
    },

    {
      kicker: "07 · Trace the loop",
      title: "How Does a while Loop Work?",
      body:
        "Python checks the condition before each iteration. Let's follow the counter step by step.",
      code:
        "number = 1\n\nwhile number <= 3:\n    print(number)\n    number += 1",
      language: "python",
      output:
        "1\n2\n3",
      bullets: [
        "First: number = 1, condition is True.",
        "Second: number = 2, condition is True.",
        "Third: number = 3, condition is True.",
        "Fourth: number = 4, condition is False.",
        "The loop ends."
      ]
    },

    {
      kicker: "08 · Initially False",
      title: "What If the Condition Is False?",
      body:
        "If the condition is False before the first iteration, the loop body does not execute.",
      code:
        "number = 10\n\nwhile number < 5:\n    print(number)\n\nprint(\"Loop finished\")",
      language: "python",
      output:
        "Loop finished",
      bullets: [
        "number starts at 10.",
        "10 < 5 is False.",
        "The loop body is skipped.",
        "The program continues after the loop."
      ]
    },

    {
      kicker: "09 · Decreasing counter",
      title: "Counting Backward",
      body:
        "A while loop can also decrease a variable until a condition becomes False.",
      code:
        "number = 5\n\nwhile number > 0:\n    print(number)\n    number -= 1\n\nprint(\"Finished!\")",
      language: "python",
      output:
        "5\n4\n3\n2\n1\nFinished!",
      bullets: [
        "Start from 5.",
        "Decrease the number by one.",
        "Stop when number becomes zero."
      ]
    },

    {
      kicker: "10 · User input",
      title: "Using while with input()",
      body:
        "A while loop can repeatedly ask the user to enter information.",
      code:
        "password = \"\"\n\nwhile password != \"python123\":\n    password = input(\"Enter password: \")\n\nprint(\"Access granted!\")",
      language: "python",
      bullets: [
        "The program asks for a password.",
        "If it is incorrect, the loop repeats.",
        "When the correct password is entered, the loop stops.",
        "This is a basic learning example, not secure authentication."
      ]
    },

    {
      kicker: "11 · Repeated attempts",
      title: "Limiting the Number of Attempts",
      body:
        "We can use a counter to limit how many times a user can try.",
      code:
        "attempts = 0\n\nwhile attempts < 3:\n    password = input(\"Enter password: \")\n    attempts += 1\n\n    if password == \"python123\":\n        print(\"Correct password!\")\n        break\nelse:\n    print(\"Too many attempts!\")",
      language: "python",
      bullets: [
        "The user gets up to three attempts.",
        "The counter increases after each attempt.",
        "break stops the loop when the password is correct.",
        "The loop's else runs if the loop finishes normally without break."
      ]
    },

    {
      kicker: "12 · Menu system",
      title: "Creating a Repeating Menu",
      body:
        "A while loop is useful when a program needs to display a menu until the user chooses to exit.",
      code:
        "while True:\n    print(\"1. Show Profile\")\n    print(\"2. Settings\")\n    print(\"3. Exit\")\n\n    choice = input(\"Choose an option: \")\n\n    if choice == \"3\":\n        print(\"Goodbye!\")\n        break",
      language: "python",
      bullets: [
        "while True creates a loop that continues.",
        "The menu appears repeatedly.",
        "The user selects an option.",
        "break exits the loop when the user chooses 3."
      ]
    },

    {
      kicker: "13 · Infinite loop",
      title: "What Is an Infinite Loop?",
      body:
        "An infinite loop continues running because its condition never becomes False or it is never stopped.",
      code:
        "number = 1\n\nwhile number <= 5:\n    print(number)",
      language: "python",
      output:
        "1\n1\n1\n1\n1\n...",
      bullets: [
        "number always remains 1.",
        "The condition 1 <= 5 is always True.",
        "The loop never ends on its own.",
        "This example must be stopped manually."
      ]
    },

    {
      kicker: "14 · Fixing infinite loops",
      title: "How to Avoid Infinite Loops",
      body:
        "Make sure that the loop has a clear way to reach its stopping condition.",
      code:
        "number = 1\n\nwhile number <= 5:\n    print(number)\n    number += 1",
      language: "python",
      output:
        "1\n2\n3\n4\n5",
      bullets: [
        "Initialize the variable before the loop.",
        "Update the variable inside the loop.",
        "Check the condition carefully.",
        "Make sure the loop can eventually stop."
      ]
    },

    {
      kicker: "15 · Stop the loop",
      title: "Using break",
      body:
        "The break statement immediately exits the nearest enclosing loop.",
      code:
        "number = 1\n\nwhile number <= 5:\n    if number == 3:\n        break\n\n    print(number)\n    number += 1",
      language: "python",
      output:
        "1\n2",
      bullets: [
        "The loop begins with number 1.",
        "When number becomes 3, break executes.",
        "The loop ends immediately."
      ]
    },

    {
      kicker: "16 · Skip an iteration",
      title: "Using continue",
      body:
        "The continue statement skips the remaining instructions in the current iteration and moves to the next iteration.",
      code:
        "number = 0\n\nwhile number < 5:\n    number += 1\n\n    if number == 3:\n        continue\n\n    print(number)",
      language: "python",
      output:
        "1\n2\n4\n5",
      bullets: [
        "The counter increases first.",
        "When number is 3, print() is skipped.",
        "The loop continues with number 4."
      ]
    },

    {
      kicker: "17 · Accumulating values",
      title: "Calculating a Total",
      body:
        "A while loop can collect several numbers and calculate their total.",
      code:
        "total = 0\nnumber = 1\n\nwhile number <= 5:\n    total += number\n    number += 1\n\nprint(\"Total:\", total)",
      language: "python",
      output:
        "Total: 15",
      bullets: [
        "total stores the running sum.",
        "number controls the loop.",
        "Each number is added to total.",
        "The final total is 15."
      ]
    },

    {
      kicker: "18 · Practical example",
      title: "ATM Menu Simulation",
      body:
        "Let's build a simple ATM menu that keeps running until the user chooses to exit.",
      code:
        "balance = 1000\n\nwhile True:\n    print(\"\\n1. Check Balance\")\n    print(\"2. Deposit\")\n    print(\"3. Exit\")\n\n    choice = input(\"Choose: \")\n\n    if choice == \"1\":\n        print(\"Balance:\", balance)\n    elif choice == \"2\":\n        amount = int(input(\"Deposit amount: \"))\n        if amount > 0:\n            balance += amount\n            print(\"Deposit successful!\")\n        else:\n            print(\"Invalid amount!\")\n    elif choice == \"3\":\n        print(\"Thank you!\")\n        break\n    else:\n        print(\"Invalid choice!\")",
      language: "python",
      bullets: [
        "The initial balance is 1000.",
        "The menu repeats until the user exits.",
        "The user can check the balance or deposit money.",
        "The program validates that the deposit is positive.",
        "break exits the menu."
      ]
    },

    {
      kicker: "19 · Common mistakes",
      title: "Mistakes to Avoid",
      body:
        "Check these common problems when writing while loops.",
      bullets: [
        "Forgetting to update the counter.",
        "Using a condition that is always True.",
        "Using the wrong comparison operator.",
        "Writing the loop body without proper indentation.",
        "Updating the variable in the wrong place.",
        "Using continue before updating the counter, which can cause an infinite loop."
      ]
    },

    {
      kicker: "20 · Practice",
      title: "Your while Loop Exercise",
      body:
        "Create a program that asks the user to enter a number until they enter zero.",
      bullets: [
        "Start with a variable that allows the loop to run.",
        "Use while to check whether the number is not zero.",
        "Ask the user for another number inside the loop.",
        "When the user enters zero, stop the loop.",
        "Print a goodbye message after the loop."
      ]
    },

    {
      kicker: "21 · Summary",
      title: "What Have We Learned?",
      body:
        "A while loop repeats instructions while its condition remains True.",
      bullets: [
        "while checks a condition before every iteration.",
        "The loop stops when the condition becomes False.",
        "Counters control many while loops.",
        "Infinite loops happen when the stopping condition is never reached.",
        "break exits the loop.",
        "continue skips the current iteration.",
        "while is useful for menus and repeated user input."
      ]
    }
  ],

  example: {
    explanation:
      "This practical program repeatedly asks the user to enter a number. It adds every entered number to a total and stops when the user enters zero. Finally, it displays the total. It demonstrates a while loop, input(), int(), a condition, and an accumulator.",
    code:
      "total = 0\nnumber = int(input(\"Enter a number (0 to stop): \"))\n\nwhile number != 0:\n    total += number\n    number = int(input(\"Enter a number (0 to stop): \"))\n\nprint(\"Total:\", total)",
    language: "python",
    output:
      "Enter a number (0 to stop): 10\nEnter a number (0 to stop): 20\nEnter a number (0 to stop): 5\nEnter a number (0 to stop): 0\nTotal: 35"
  },

  commonMistakes: [
    "Forgetting to update a counter or another variable used in the condition.",
    "Creating an infinite loop unintentionally.",
    "Using the wrong comparison operator.",
    "Forgetting the colon after the while condition.",
    "Using incorrect indentation.",
    "Assuming that the loop body executes at least once.",
    "Using continue before updating the variable that controls the loop.",
    "Forgetting that input() returns a string when numeric input is expected.",
    "Using break when the intention is only to skip one iteration."
  ],

  exercise: {
    question:
      "Create a simple number collection program. Ask the user to enter numbers repeatedly. Add each number to a total. When the user enters zero, stop asking and display the final total.",
    hint:
      "Initialize total with zero. Get the first number before the loop. Use while number != 0 as the condition. Inside the loop, add the number to total and ask for the next number."
  },

  solution: {
    explanation:
      "The program gets the first number before entering the loop. While the number is not zero, it adds that number to the total and asks for another one. When the user enters zero, the condition becomes False and the program displays the final total.",
    code:
      "total = 0\nnumber = int(input(\"Enter a number (0 to stop): \"))\n\nwhile number != 0:\n    total += number\n    number = int(input(\"Enter a number (0 to stop): \"))\n\nprint(\"Final total:\", total)",
    output:
      "Enter a number (0 to stop): 10\nEnter a number (0 to stop): 20\nEnter a number (0 to stop): 5\nEnter a number (0 to stop): 0\nFinal total: 35"
  },

  quiz: [
    {
      question: "When does a while loop continue running?",
      options: [
        "When its condition is True",
        "When its condition is False",
        "Only one time",
        "Only when it contains print()"
      ],
      answer: 0,
      explanation:
        "A while loop continues executing while its condition evaluates to True."
    },
    {
      question: "What happens if the condition is False before the loop starts?",
      options: [
        "The loop runs once",
        "The loop runs forever",
        "The loop body does not execute",
        "Python creates an error"
      ],
      answer: 2,
      explanation:
        "Python checks the condition before the first iteration. If it is False, the body is skipped."
    },
    {
      question: "What is the output of this code?\n\nnumber = 1\nwhile number <= 3:\n    print(number)\n    number += 1",
      options: [
        "1 2",
        "1 2 3",
        "1 2 3 4",
        "3 2 1"
      ],
      answer: 1,
      explanation:
        "The loop prints 1, 2, and 3. Then number becomes 4 and the condition becomes False."
    },
    {
      question: "What is an infinite loop?",
      options: [
        "A loop that runs exactly five times",
        "A loop that never starts",
        "A loop that continues without reaching a stopping condition",
        "A loop that only uses strings"
      ],
      answer: 2,
      explanation:
        "An infinite loop continues because its condition never becomes False or it is never stopped."
    },
    {
      question: "Which statement immediately exits a loop?",
      options: [
        "continue",
        "break",
        "input",
        "range"
      ],
      answer: 1,
      explanation:
        "break immediately exits the nearest enclosing loop."
    },
    {
      question: "What is the difference between break and continue?",
      options: [
        "They do exactly the same thing",
        "break skips one iteration, continue exits the loop",
        "break exits the loop, continue skips the current iteration",
        "Both restart the program"
      ],
      answer: 2,
      explanation:
        "break ends the loop, while continue skips the remaining statements in the current iteration."
    }
  ],

  takeaways: [
    "A while loop repeats instructions as long as its condition is True.",
    "Python checks the condition before every iteration.",
    "The loop body may execute zero or more times.",
    "Counters and updated variables help control repetition.",
    "An infinite loop occurs when the stopping condition is never reached.",
    "break immediately exits the loop.",
    "continue skips the remaining statements in the current iteration.",
    "while loops are useful for menus, repeated input, and unknown repetition counts."
  ],

  teacherNotes:
    "Start by reviewing the previous lesson about for loops. Ask students when they would need to repeat an operation without knowing the exact number of repetitions. Use the daily-life example of continuing an activity while a condition is true. Explain the while syntax and emphasize that Python checks the condition before entering the loop. Demonstrate a counter from 1 to 5 and trace every iteration slowly. Explain why updating the counter is essential and show an infinite loop example so students understand the danger of forgetting the update. Next, demonstrate counting backward, user input, repeated password attempts, and a simple menu. Introduce break and continue and carefully explain their difference. Finish with the number collection example, asking students to predict the output before running it. Encourage learners to write and test the code themselves.",

  teachingTime: "60-75 minutes"
};