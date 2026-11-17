
window.lessonData = window.lessonData || {};

window.lessonData[41] = {
  id: 41,
  title: "Nested Loops",
  category: "Python Loops",
  contentStatus: "authored",

  introduction:
    "This lesson introduces nested loops in Python. Students learn how to place one loop inside another loop and understand how the outer and inner loops work together.",

  definition:
    "A nested loop is a loop placed inside another loop. For every iteration of the outer loop, the inner loop completes all its iterations.",

  whyItMatters:
    "Nested loops are useful for working with tables, rows and columns, combinations, patterns, and multidimensional data. They are commonly used in real-world applications that process structured information.",

  objectives: [
    "Understand what nested loops are.",
    "Identify outer and inner loops.",
    "Understand the execution order of nested loops.",
    "Use nested for loops.",
    "Use nested while loops.",
    "Combine for and while loops.",
    "Work with rows and columns.",
    "Use nested loops with lists and conditions.",
    "Understand break and continue inside nested loops.",
    "Recognize the importance of indentation in nested loops."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Nested Loops?",
      body:
        "A nested loop means placing one loop inside another loop. The inner loop runs completely for every iteration of the outer loop.",
      bullets: [
        "A loop inside another loop is called a nested loop.",
        "The outside loop is the outer loop.",
        "The inside loop is the inner loop.",
        "The inner loop completes its iterations before the outer loop moves forward."
      ]
    },

    {
      kicker: "02 · Daily life example",
      title: "Understanding Nested Loops in Daily Life",
      body:
        "Imagine a teacher checking three classrooms. Each classroom has four students. The teacher visits every classroom and checks all its students.",
      bullets: [
        "The classrooms represent the outer loop.",
        "The students in each classroom represent the inner loop.",
        "The teacher checks all four students in classroom 1.",
        "Then the teacher moves to classroom 2 and checks all its students.",
        "This continues until every classroom is checked."
      ]
    },

    {
      kicker: "03 · Basic structure",
      title: "Nested Loop Syntax",
      body:
        "The inner loop is written inside the indented block of the outer loop.",
      code:
        "for outer_variable in outer_sequence:\n    for inner_variable in inner_sequence:\n        print(outer_variable, inner_variable)",
      language: "python",
      output:
        "The inner loop runs completely for each outer loop iteration.",
      bullets: [
        "The first for loop is the outer loop.",
        "The second for loop is the inner loop.",
        "The inner loop must be indented inside the outer loop.",
        "Both loops have their own variables and sequences."
      ]
    },

    {
      kicker: "04 · First example",
      title: "Your First Nested Loop",
      body:
        "Let's use two loops to print combinations of numbers.",
      code:
        "for i in range(1, 4):\n    for j in range(1, 3):\n        print(i, j)",
      language: "python",
      output:
        "1 1\n1 2\n2 1\n2 2\n3 1\n3 2",
      bullets: [
        "The outer loop runs 3 times.",
        "The inner loop runs 2 times for each outer iteration.",
        "Each output contains one value from each loop.",
        "The total number of executions is 3 × 2 = 6."
      ]
    },

    {
      kicker: "05 · Execution order",
      title: "How Do Nested Loops Execute?",
      body:
        "The outer loop starts first. For each outer value, the inner loop completes all its iterations before the outer loop continues.",
      code:
        "for i in range(1, 4):\n    print(\"Outer:\", i)\n\n    for j in range(1, 3):\n        print(\"Inner:\", j)",
      language: "python",
      output:
        "Outer: 1\nInner: 1\nInner: 2\nOuter: 2\nInner: 1\nInner: 2\nOuter: 3\nInner: 1\nInner: 2",
      bullets: [
        "Outer loop starts with 1.",
        "Inner loop prints 1 and 2.",
        "Outer loop moves to 2.",
        "Inner loop runs again from the beginning.",
        "The same process happens for outer value 3."
      ]
    },

    {
      kicker: "06 · Understanding repetitions",
      title: "How Many Times Does the Inner Loop Run?",
      body:
        "If the outer loop runs 3 times and the inner loop runs 4 times for every outer iteration, the inner loop body runs 12 times.",
      code:
        "for i in range(1, 4):\n    for j in range(1, 5):\n        print(\"Hello\")",
      language: "python",
      output:
        "Hello is printed 12 times.",
      bullets: [
        "Outer loop repetitions: 3",
        "Inner loop repetitions per outer iteration: 4",
        "Total executions: 3 × 4 = 12",
        "The inner loop starts again for each outer iteration."
      ]
    },

    {
      kicker: "07 · Rows and columns",
      title: "Working with Rows and Columns",
      body:
        "Nested loops are useful for representing a table with rows and columns.",
      code:
        "for row in range(1, 4):\n    for column in range(1, 4):\n        print(\"Row:\", row, \"Column:\", column)",
      language: "python",
      output:
        "Row: 1 Column: 1\nRow: 1 Column: 2\nRow: 1 Column: 3\nRow: 2 Column: 1\nRow: 2 Column: 2\nRow: 2 Column: 3\nRow: 3 Column: 1\nRow: 3 Column: 2\nRow: 3 Column: 3",
      bullets: [
        "The outer loop represents rows.",
        "The inner loop represents columns.",
        "Each row contains three columns.",
        "There are nine row-column combinations."
      ]
    },

    {
      kicker: "08 · Practical pattern",
      title: "Printing a Rectangle Pattern",
      body:
        "We can use nested loops to print rows of stars.",
      code:
        "for row in range(3):\n    for column in range(4):\n        print(\"*\", end=\" \")\n    print()",
      language: "python",
      output:
        "* * * *\n* * * *\n* * * *",
      bullets: [
        "The outer loop creates three rows.",
        "The inner loop prints four stars in each row.",
        "end=\" \" keeps the stars on the same line.",
        "The final print() moves to the next line."
      ]
    },

    {
      kicker: "09 · Another pattern",
      title: "Printing a Triangle Pattern",
      body:
        "The inner loop can depend on the outer loop variable to create different row lengths.",
      code:
        "for row in range(1, 5):\n    for column in range(row):\n        print(\"*\", end=\" \")\n    print()",
      language: "python",
      output:
        "*\n* *\n* * *\n* * * *",
      bullets: [
        "The outer loop creates four rows.",
        "The inner loop runs according to the current row number.",
        "The first row contains one star.",
        "The last row contains four stars."
      ]
    },

    {
      kicker: "10 · Multiplication table",
      title: "Creating a Multiplication Table",
      body:
        "Nested loops can generate multiplication tables automatically.",
      code:
        "for number in range(1, 4):\n    for multiplier in range(1, 4):\n        result = number * multiplier\n        print(number, \"x\", multiplier, \"=\", result)\n    print()",
      language: "python",
      output:
        "1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n\n2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n\n3 x 1 = 3\n3 x 2 = 6\n3 x 3 = 9",
      bullets: [
        "The outer loop selects the number.",
        "The inner loop selects the multiplier.",
        "Each combination is multiplied.",
        "The result is displayed.",
        "A blank line separates each table."
      ]
    },

    {
      kicker: "11 · Nested for loops",
      title: "Working with Two Lists",
      body:
        "Nested loops can compare or combine items from two different lists.",
      code:
        "colors = [\"Red\", \"Blue\"]\nsizes = [\"Small\", \"Large\"]\n\nfor color in colors:\n    for size in sizes:\n        print(color, size)",
      language: "python",
      output:
        "Red Small\nRed Large\nBlue Small\nBlue Large",
      bullets: [
        "The outer loop processes colors.",
        "The inner loop processes sizes.",
        "Each color is combined with every size.",
        "Two colors and two sizes produce four combinations."
      ]
    },

    {
      kicker: "12 · Nested while loops",
      title: "Using while Inside while",
      body:
        "Nested loops are not limited to for loops. You can also place a while loop inside another while loop.",
      code:
        "row = 1\n\nwhile row <= 3:\n    column = 1\n\n    while column <= 2:\n        print(\"Row:\", row, \"Column:\", column)\n        column += 1\n\n    row += 1",
      language: "python",
      output:
        "Row: 1 Column: 1\nRow: 1 Column: 2\nRow: 2 Column: 1\nRow: 2 Column: 2\nRow: 3 Column: 1\nRow: 3 Column: 2",
      bullets: [
        "The outer while loop controls rows.",
        "The inner while loop controls columns.",
        "The inner counter is reset for every new row.",
        "Both counters must be updated to avoid infinite loops."
      ]
    },

    {
      kicker: "13 · Mixed loops",
      title: "Combining for and while Loops",
      body:
        "A for loop can contain a while loop, or a while loop can contain a for loop.",
      code:
        "for row in range(1, 4):\n    column = 1\n\n    while column <= 2:\n        print(\"Row:\", row, \"Column:\", column)\n        column += 1",
      language: "python",
      output:
        "Row: 1 Column: 1\nRow: 1 Column: 2\nRow: 2 Column: 1\nRow: 2 Column: 2\nRow: 3 Column: 1\nRow: 3 Column: 2",
      bullets: [
        "The outer loop is a for loop.",
        "The inner loop is a while loop.",
        "The inner counter starts at 1 for each row.",
        "Different loop types can work together."
      ]
    },

    {
      kicker: "14 · Lists inside lists",
      title: "Processing a Nested List",
      body:
        "A list can contain other lists. Nested loops can access each value.",
      code:
        "students = [\n    [\"Ahmad\", 85],\n    [\"Khalid\", 90],\n    [\"Omar\", 75]\n]\n\nfor student in students:\n    for item in student:\n        print(item, end=\" \")\n    print()",
      language: "python",
      output:
        "Ahmad 85\nKhalid 90\nOmar 75",
      bullets: [
        "The outer loop selects each inner list.",
        "The inner loop reads the values in that list.",
        "Each student record contains a name and a mark.",
        "Nested lists are commonly used for structured data."
      ]
    },

    {
      kicker: "15 · Conditions inside loops",
      title: "Using if Inside Nested Loops",
      body:
        "You can use conditions inside nested loops to control which values are displayed.",
      code:
        "for row in range(1, 4):\n    for column in range(1, 4):\n        if row == column:\n            print(row, column)",
      language: "python",
      output:
        "1 1\n2 2\n3 3",
      bullets: [
        "Both loops generate row and column values.",
        "The if statement checks whether they are equal.",
        "Only matching pairs are printed.",
        "Conditions make nested loops more flexible."
      ]
    },

    {
      kicker: "16 · break in nested loops",
      title: "Using break in Nested Loops",
      body:
        "When break executes inside an inner loop, it exits only that inner loop. The outer loop continues.",
      code:
        "for row in range(1, 4):\n    for column in range(1, 4):\n        if column == 2:\n            break\n        print(\"Row:\", row, \"Column:\", column)",
      language: "python",
      output:
        "Row: 1 Column: 1\nRow: 2 Column: 1\nRow: 3 Column: 1",
      bullets: [
        "The inner loop starts for every row.",
        "When column becomes 2, break exits the inner loop.",
        "The outer loop moves to the next row.",
        "break does not automatically exit both loops."
      ]
    },

    {
      kicker: "17 · continue in nested loops",
      title: "Using continue in Nested Loops",
      body:
        "continue skips the current iteration of the nearest enclosing loop.",
      code:
        "for row in range(1, 3):\n    for column in range(1, 4):\n        if column == 2:\n            continue\n        print(\"Row:\", row, \"Column:\", column)",
      language: "python",
      output:
        "Row: 1 Column: 1\nRow: 1 Column: 3\nRow: 2 Column: 1\nRow: 2 Column: 3",
      bullets: [
        "The inner loop checks each column.",
        "Column 2 is skipped.",
        "The other columns are printed.",
        "The outer loop continues normally."
      ]
    },

    {
      kicker: "18 · Important rules",
      title: "Common Nested Loop Mistakes",
      body:
        "Nested loops require careful attention to indentation, counters, and execution order.",
      bullets: [
        "Incorrect indentation of the inner loop.",
        "Forgetting to reset the inner while counter.",
        "Forgetting to update a while loop counter.",
        "Confusing the outer loop with the inner loop.",
        "Expecting break in the inner loop to stop the outer loop.",
        "Using too many nested loops without a clear reason."
      ]
    },

    {
      kicker: "19 · Practice",
      title: "Your Nested Loops Exercise",
      body:
        "Create a program that prints a multiplication table from 1 to 5.",
      bullets: [
        "Use an outer loop for numbers 1 to 5.",
        "Use an inner loop for multipliers 1 to 10.",
        "Calculate the multiplication result.",
        "Print each multiplication expression.",
        "Separate each number's table with a blank line."
      ]
    },

    {
      kicker: "20 · Summary",
      title: "What Have We Learned?",
      body:
        "Nested loops allow one loop to run inside another loop and are useful for processing structured and repeated data.",
      bullets: [
        "A loop inside another loop is called a nested loop.",
        "The outer loop controls the main repetitions.",
        "The inner loop completes its iterations for each outer iteration.",
        "Nested loops work with for and while.",
        "They are useful for tables, patterns, and nested lists.",
        "break and continue affect the nearest enclosing loop."
      ]
    }
  ],

  example: {
    explanation:
      "This practical example generates a multiplication table from 1 to 5. The outer loop selects each number, and the inner loop multiplies it by values from 1 to 10. The inner loop completes all ten multiplications before the outer loop selects the next number.",
    code:
      "for number in range(1, 6):\n    print(\"Multiplication Table:\", number)\n\n    for multiplier in range(1, 11):\n        result = number * multiplier\n        print(number, \"x\", multiplier, \"=\", result)\n\n    print()",
    language: "python",
    output:
      "Multiplication Table: 1\n1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10\n\nMultiplication Table: 2\n2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20\n\n... (continues for tables 3, 4, and 5)"
  },

  commonMistakes: [
    "Incorrectly indenting the inner loop.",
    "Thinking the outer loop moves forward after every inner iteration.",
    "Forgetting that the inner loop completes all its iterations for each outer iteration.",
    "Forgetting to reset the inner counter in nested while loops.",
    "Forgetting to update counters and creating an infinite while loop.",
    "Assuming break inside the inner loop exits the outer loop too.",
    "Assuming continue affects all nested loops.",
    "Creating too many nested loops when a simpler solution is possible.",
    "Miscounting total executions of nested loops."
  ],

  exercise: {
    question:
      "Write a Python program that prints a multiplication table from 1 to 5. Use an outer for loop for numbers 1 to 5 and an inner for loop for multipliers 1 to 10. Print each multiplication expression in the format 2 x 3 = 6. Add a blank line after each table.",
    hint:
      "Use range(1, 6) for the outer loop and range(1, 11) for the inner loop. Multiply the two loop variables and print the result."
  },

  solution: {
    explanation:
      "The outer loop selects numbers from 1 to 5. For each number, the inner loop runs from 1 to 10 and calculates the multiplication result. After the inner loop finishes, print() creates a blank line before the next table.",
    code:
      "for number in range(1, 6):\n    print(\"Multiplication Table:\", number)\n\n    for multiplier in range(1, 11):\n        result = number * multiplier\n        print(number, \"x\", multiplier, \"=\", result)\n\n    print()",
    output:
      "Multiplication Table: 1\n1 x 1 = 1\n1 x 2 = 2\n1 x 3 = 3\n1 x 4 = 4\n1 x 5 = 5\n1 x 6 = 6\n1 x 7 = 7\n1 x 8 = 8\n1 x 9 = 9\n1 x 10 = 10\n\nMultiplication Table: 2\n2 x 1 = 2\n2 x 2 = 4\n2 x 3 = 6\n2 x 4 = 8\n2 x 5 = 10\n2 x 6 = 12\n2 x 7 = 14\n2 x 8 = 16\n2 x 9 = 18\n2 x 10 = 20\n\n... (continues for tables 3, 4, and 5)"
  },

  quiz: [
    {
      question: "What is a nested loop?",
      options: [
        "A loop without a condition",
        "A loop inside another loop",
        "A loop that never stops",
        "A loop that runs only once"
      ],
      answer: 1,
      explanation:
        "A nested loop is a loop placed inside another loop."
    },
    {
      question: "Which loop is called the outer loop?",
      options: [
        "The loop inside another loop",
        "The loop that runs last",
        "The loop that contains another loop",
        "A loop without a body"
      ],
      answer: 2,
      explanation:
        "The outer loop is the loop that contains the inner loop."
    },
    {
      question: "How many times does the inner loop execute in this code?\n\nfor i in range(1, 4):\n    for j in range(1, 3):\n        print(i, j)",
      options: [
        "3 times",
        "2 times",
        "5 times",
        "6 times"
      ],
      answer: 3,
      explanation:
        "The outer loop runs 3 times and the inner loop runs 2 times for each outer iteration. Therefore, 3 × 2 = 6 executions."
    },
    {
      question: "What is the output of this code?\n\nfor i in range(1, 3):\n    for j in range(1, 3):\n        print(i, j)",
      options: [
        "1 1 and 2 2",
        "1 1, 1 2, 2 1, 2 2",
        "1 2 and 2 1",
        "1 1, 2 1"
      ],
      answer: 1,
      explanation:
        "The inner loop runs for j = 1 and j = 2 for every outer value."
    },
    {
      question: "What does break do inside an inner loop?",
      options: [
        "Always exits all loops",
        "Exits the nearest enclosing loop",
        "Skips one iteration and continues",
        "Does nothing"
      ],
      answer: 1,
      explanation:
        "break exits only the nearest enclosing loop. The outer loop can continue."
    },
    {
      question: "What must you remember when using nested while loops?",
      options: [
        "Never use variables",
        "Always use break",
        "Update counters and reset the inner counter when needed",
        "Use only one condition"
      ],
      answer: 2,
      explanation:
        "Counters must be updated correctly, and the inner counter usually needs to be reset for every outer iteration."
    },
    {
      question: "If an outer loop runs 4 times and an inner loop runs 3 times per outer iteration, how many times does the inner loop body execute?",
      options: [
        "7",
        "12",
        "4",
        "3"
      ],
      answer: 1,
      explanation:
        "The total number of executions is 4 × 3 = 12."
    }
  ],

  takeaways: [
    "A nested loop is a loop inside another loop.",
    "The outer loop controls the main repetitions.",
    "The inner loop completes all its iterations for every outer iteration.",
    "Nested loops can be created with for loops, while loops, or a combination of both.",
    "Nested loops are useful for tables, patterns, combinations, and nested lists.",
    "break and continue affect the nearest enclosing loop.",
    "Always manage indentation and counters carefully."
  ],

  teacherNotes:
    "Begin by reviewing the basic for and while loops. Ask students how they would print three rows with four stars in each row. Use this question to introduce nested loops. Explain outer loop and inner loop with the classroom example. Write the first nested loop on the screen and trace every iteration carefully. Do not move too quickly: students must understand that the inner loop completes all its repetitions before the outer loop moves forward. Demonstrate the multiplication table and rectangle pattern in VS Code. Then show nested while loops and explain why the inner counter must be reset for each outer iteration. Review break and continue inside nested loops, emphasizing that they affect the nearest enclosing loop. Finish with the multiplication table exercise. Ask students to predict the output before executing each example.",

  teachingTime: "60-75 minutes"
};
