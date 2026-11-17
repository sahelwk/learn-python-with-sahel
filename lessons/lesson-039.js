```javascript
window.lessonData = window.lessonData || {};

window.lessonData[39] = {
  id: 39,
  title: "continue Statement",
  category: "Python Loops",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn how to use the continue statement to skip the remaining instructions in the current loop iteration and move to the next iteration.",

  definition:
    "The continue statement skips the remaining statements in the current iteration of a loop and immediately moves to the next iteration.",

  whyItMatters:
    "continue helps programmers skip unwanted values or records without stopping the entire loop. It is useful when filtering data, processing student marks, checking products, and handling specific conditions.",

  objectives: [
    "Understand the purpose of the continue statement.",
    "Use continue inside a for loop.",
    "Use continue inside a while loop.",
    "Skip an iteration when a condition is True.",
    "Understand the difference between break and continue.",
    "Use continue with if conditions.",
    "Apply continue in practical data-processing examples.",
    "Avoid infinite loops when using continue in while loops."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is the continue Statement?",
      body:
        "The continue statement skips the remaining instructions in the current iteration and moves to the next iteration of the loop.",
      bullets: [
        "It does not stop the entire loop.",
        "It skips the remaining code in the current iteration.",
        "The loop continues with the next item or value."
      ]
    },

    {
      kicker: "02 · Real-life example",
      title: "Understanding continue in Daily Life",
      body:
        "Imagine that you are checking student records. If a student is absent, you skip that student's record and continue checking the next student.",
      bullets: [
        "Check the first student.",
        "If the student is absent, skip the remaining work for that student.",
        "Continue with the next student.",
        "The entire checking process does not stop."
      ]
    },

    {
      kicker: "03 · First example",
      title: "Using continue in a for Loop",
      body:
        "Let's print numbers from 1 to 5 but skip the number 3.",
      code:
        "for number in range(1, 6):\n    if number == 3:\n        continue\n\n    print(number)",
      language: "python",
      output:
        "1\n2\n4\n5",
      bullets: [
        "The loop processes numbers from 1 to 5.",
        "When number becomes 3, continue executes.",
        "print() is skipped for number 3.",
        "The loop continues with number 4."
      ]
    },

    {
      kicker: "04 · Execution order",
      title: "How Does continue Work?",
      body:
        "Python executes continue immediately when its condition is met. The remaining statements in that iteration are skipped.",
      code:
        "for number in range(1, 5):\n    print(\"Checking:\", number)\n\n    if number == 2:\n        continue\n\n    print(\"Processed:\", number)",
      language: "python",
      output:
        "Checking: 1\nProcessed: 1\nChecking: 2\nChecking: 3\nProcessed: 3\nChecking: 4\nProcessed: 4",
      bullets: [
        "Every number is checked.",
        "When number is 2, continue executes.",
        "Processed: 2 is not printed.",
        "The next iteration begins with number 3."
      ]
    },

    {
      kicker: "05 · Without continue",
      title: "What Happens Without continue?",
      body:
        "Without continue, the loop executes all statements for every iteration unless another control statement changes the flow.",
      code:
        "for number in range(1, 6):\n    print(\"Checking:\", number)\n    print(\"Processed:\", number)",
      language: "python",
      output:
        "Checking: 1\nProcessed: 1\nChecking: 2\nProcessed: 2\nChecking: 3\nProcessed: 3\nChecking: 4\nProcessed: 4\nChecking: 5\nProcessed: 5",
      bullets: [
        "Every number is checked.",
        "Both print() statements execute.",
        "No iteration is skipped."
      ]
    },

    {
      kicker: "06 · Using continue with while",
      title: "continue in a while Loop",
      body:
        "The continue statement also works with while loops.",
      code:
        "number = 0\n\nwhile number < 5:\n    number += 1\n\n    if number == 3:\n        continue\n\n    print(number)",
      language: "python",
      output:
        "1\n2\n4\n5",
      bullets: [
        "The counter increases first.",
        "When number becomes 3, continue executes.",
        "print() is skipped for 3.",
        "The loop continues with 4."
      ]
    },

    {
      kicker: "07 · Skipping even numbers",
      title: "Print Only Odd Numbers",
      body:
        "We can use continue to skip even numbers and display only odd numbers.",
      code:
        "for number in range(1, 11):\n    if number % 2 == 0:\n        continue\n\n    print(number)",
      language: "python",
      output:
        "1\n3\n5\n7\n9",
      bullets: [
        "% calculates the remainder.",
        "Even numbers have a remainder of zero when divided by 2.",
        "continue skips even numbers.",
        "Only odd numbers are printed."
      ]
    },

    {
      kicker: "08 · Skipping odd numbers",
      title: "Print Only Even Numbers",
      body:
        "We can reverse the condition to skip odd numbers.",
      code:
        "for number in range(1, 11):\n    if number % 2 != 0:\n        continue\n\n    print(number)",
      language: "python",
      output:
        "2\n4\n6\n8\n10",
      bullets: [
        "Odd numbers are skipped.",
        "Even numbers continue to print().",
        "The loop still processes every number."
      ]
    },

    {
      kicker: "09 · Working with lists",
      title: "Skipping an Item in a List",
      body:
        "continue can skip specific items while processing a list.",
      code:
        "students = [\"Ahmad\", \"Absent\", \"Khalid\", \"Absent\", \"Omar\"]\n\nfor student in students:\n    if student == \"Absent\":\n        continue\n\n    print(student)",
      language: "python",
      output:
        "Ahmad\nKhalid\nOmar",
      bullets: [
        "The loop checks every list item.",
        "Items equal to Absent are skipped.",
        "Other student names are printed."
      ]
    },

    {
      kicker: "10 · Using conditions",
      title: "Skipping Values with if",
      body:
        "An if statement determines when continue should execute.",
      code:
        "marks = [85, 35, 72, 40, 90]\n\nfor mark in marks:\n    if mark < 50:\n        continue\n\n    print(\"Passed:\", mark)",
      language: "python",
      output:
        "Passed: 85\nPassed: 72\nPassed: 90",
      bullets: [
        "The loop checks every mark.",
        "Marks below 50 are skipped.",
        "Only passing marks are displayed."
      ]
    },

    {
      kicker: "11 · Product filtering",
      title: "Skipping Out-of-Stock Products",
      body:
        "We can skip products that have no available stock.",
      code:
        "products = [\n    {\"name\": \"Laptop\", \"stock\": 5},\n    {\"name\": \"Mouse\", \"stock\": 0},\n    {\"name\": \"Keyboard\", \"stock\": 8}\n]\n\nfor product in products:\n    if product[\"stock\"] == 0:\n        continue\n\n    print(product[\"name\"], \"Stock:\", product[\"stock\"])",
      language: "python",
      output:
        "Laptop Stock: 5\nKeyboard Stock: 8",
      bullets: [
        "The loop checks each product.",
        "Products with zero stock are skipped.",
        "Available products are displayed."
      ]
    },

    {
      kicker: "12 · Difference",
      title: "break vs continue",
      body:
        "Both statements change the normal flow of a loop, but they have different results.",
      code:
        "# break\nfor number in range(1, 6):\n    if number == 3:\n        break\n    print(number)\n\n# continue\nfor number in range(1, 6):\n    if number == 3:\n        continue\n    print(number)",
      language: "python",
      output:
        "1\n2\n1\n2\n4\n5",
      bullets: [
        "break immediately exits the nearest loop.",
        "continue skips only the current iteration.",
        "break prevents later iterations from running.",
        "continue allows later iterations to continue."
      ]
    },

    {
      kicker: "13 · Nested loops",
      title: "Using continue in Nested Loops",
      body:
        "Inside nested loops, continue affects only the nearest enclosing loop.",
      code:
        "for row in range(1, 4):\n    for column in range(1, 4):\n        if column == 2:\n            continue\n\n        print(\"Row:\", row, \"Column:\", column)",
      language: "python",
      output:
        "Row: 1 Column: 1\nRow: 1 Column: 3\nRow: 2 Column: 1\nRow: 2 Column: 3\nRow: 3 Column: 1\nRow: 3 Column: 3",
      bullets: [
        "The outer loop controls rows.",
        "The inner loop controls columns.",
        "continue skips column 2 in every row.",
        "The outer loop continues normally."
      ]
    },

    {
      kicker: "14 · Important warning",
      title: "continue in a while Loop",
      body:
        "When using continue in a while loop, make sure the variable controlling the condition is updated before continue executes.",
      code:
        "number = 0\n\nwhile number < 5:\n    number += 1\n\n    if number == 3:\n        continue\n\n    print(number)",
      language: "python",
      output:
        "1\n2\n4\n5",
      bullets: [
        "The counter is updated before continue.",
        "The loop can reach its stopping condition.",
        "If the counter is not updated, an infinite loop may occur."
      ]
    },

    {
      kicker: "15 · Practical example",
      title: "Student Marks Processing",
      body:
        "Let's display passing marks and skip marks below 50.",
      code:
        "marks = [45, 80, 32, 90, 65, 40, 75]\n\nfor mark in marks:\n    if mark < 50:\n        continue\n\n    print(\"Passing mark:\", mark)",
      language: "python",
      output:
        "Passing mark: 80\nPassing mark: 90\nPassing mark: 65\nPassing mark: 75",
      bullets: [
        "The list contains several student marks.",
        "Marks below 50 are skipped.",
        "Passing marks are displayed.",
        "The loop does not stop after finding a low mark."
      ]
    },

    {
      kicker: "16 · Common mistakes",
      title: "Mistakes to Avoid",
      body:
        "Understand these common mistakes when using continue.",
      bullets: [
        "Thinking continue stops the entire loop.",
        "Placing important instructions after continue in the same iteration.",
        "Using continue outside a loop.",
        "Forgetting to update a while loop counter before continue.",
        "Confusing continue with break.",
        "Using a condition that skips the wrong values."
      ]
    },

    {
      kicker: "17 · Practice",
      title: "Your continue Exercise",
      body:
        "Create a program that processes a list of numbers and skips all negative values.",
      bullets: [
        "Create a list containing positive and negative numbers.",
        "Use a for loop to check each number.",
        "If the number is negative, execute continue.",
        "Print the remaining numbers."
      ]
    },

    {
      kicker: "18 · Summary",
      title: "What Have We Learned?",
      body:
        "The continue statement allows a loop to skip selected iterations without stopping completely.",
      bullets: [
        "continue skips the remaining statements in the current iteration.",
        "It works with for and while loops.",
        "It is useful for filtering and processing data.",
        "In nested loops, it affects the nearest loop.",
        "In while loops, update the counter before continue when necessary.",
        "continue is different from break."
      ]
    }
  ],

  example: {
    explanation:
      "This program processes a list of student marks. It skips marks below 50 and displays only passing marks. It demonstrates a for loop, an if condition, and the continue statement.",
    code:
      "marks = [45, 80, 32, 90, 65, 40, 75]\n\nfor mark in marks:\n    if mark < 50:\n        continue\n\n    print(\"Passing mark:\", mark)",
    language: "python",
    output:
      "Passing mark: 80\nPassing mark: 90\nPassing mark: 65\nPassing mark: 75"
  },

  commonMistakes: [
    "Thinking continue exits the entire loop.",
    "Confusing continue with break.",
    "Using continue outside a loop.",
    "Forgetting that statements after continue in the current iteration are skipped.",
    "Updating a while loop counter after continue instead of before it.",
    "Using an incorrect condition that skips valid data.",
    "Assuming continue skips the next iteration instead of the current one.",
    "Thinking continue affects every level of a nested loop."
  ],

  exercise: {
    question:
      "Create a program with a list of numbers containing positive, negative, and zero values. Use a for loop to display only positive numbers. Skip negative numbers and zero using continue.",
    hint:
      "Use an if condition to check whether the number is less than or equal to zero. If it is, execute continue. Otherwise, print the number."
  },

  solution: {
    explanation:
      "The loop checks each number in the list. If a number is zero or negative, continue skips the print statement for that iteration. Positive numbers are displayed.",
    code:
      "numbers = [10, -5, 0, 8, -2, 15, 0, 7]\n\nfor number in numbers:\n    if number <= 0:\n        continue\n\n    print(number)",
    output:
      "10\n8\n15\n7"
  },

  quiz: [
    {
      question: "What is the main purpose of continue?",
      options: [
        "To stop the entire loop",
        "To skip the remaining statements in the current iteration",
        "To restart the program",
        "To create a new loop"
      ],
      answer: 1,
      explanation:
        "continue skips the remaining statements in the current iteration and moves to the next iteration."
    },
    {
      question: "Which loops can use continue?",
      options: [
        "Only for loops",
        "Only while loops",
        "Both for and while loops",
        "Neither for nor while loops"
      ],
      answer: 2,
      explanation:
        "continue can be used inside both for and while loops."
    },
    {
      question: "What is the output of this code?\n\nfor number in range(1, 5):\n    if number == 3:\n        continue\n    print(number)",
      options: [
        "1, 2",
        "1, 2, 3, 4",
        "1, 2, 4",
        "3, 4"
      ],
      answer: 2,
      explanation:
        "When number is 3, continue skips print(). The loop continues with 4."
    },
    {
      question: "What is the main difference between break and continue?",
      options: [
        "They perform exactly the same task",
        "break exits the loop, while continue skips the current iteration",
        "continue exits the loop, while break skips one iteration",
        "Both stop the Python program"
      ],
      answer: 1,
      explanation:
        "break terminates the nearest enclosing loop, while continue moves to its next iteration."
    },
    {
      question: "What can happen if a while loop uses continue before updating its counter?",
      options: [
        "The program always finishes immediately",
        "The loop may become infinite",
        "The counter is automatically increased",
        "The loop changes into a for loop"
      ],
      answer: 1,
      explanation:
        "If the counter is not updated, the loop condition may remain True forever."
    },
    {
      question: "In nested loops, which loop is affected by continue?",
      options: [
        "All loops",
        "Only the outer loop",
        "The nearest enclosing loop",
        "The entire Python program"
      ],
      answer: 2,
      explanation:
        "continue skips the current iteration of the nearest enclosing loop."
    }
  ],

  takeaways: [
    "continue skips the remaining statements in the current iteration.",
    "It does not terminate the entire loop.",
    "It works with both for and while loops.",
    "It is useful for filtering and skipping unwanted values.",
    "In nested loops, it affects only the nearest enclosing loop.",
    "Always consider counter updates when using continue in a while loop.",
    "break stops a loop, while continue skips one iteration."
  ],

  teacherNotes:
    "Begin by reviewing the previous break lesson. Ask students what happens when break executes and then explain that continue has a different purpose. Use the example of checking student records and skipping absent students. Demonstrate a simple for loop that skips number 3. Trace the execution line by line and emphasize that the remaining statements in that iteration are not executed. Then show how continue works in a while loop. Explain the important counter-update warning using a safe example where the counter is increased before continue. Compare break and continue using the same code so students can clearly see the difference. Finish with the student marks and positive-number exercises. Ask students to predict the output before running each program.",

  teachingTime: "50-60 minutes"
};
```