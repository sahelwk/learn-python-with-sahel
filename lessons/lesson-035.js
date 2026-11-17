
window.lessonData = window.lessonData || {};

window.lessonData[35] = {
  id: 35,
  title: "for Loop",
  category: "Python Loops",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn how to repeat instructions using Python's for loop. They will practice looping through ranges, strings, and lists.",

  definition:
    "A for loop is a control structure that repeats a block of code for each item in a sequence or iterable.",

  whyItMatters:
    "A for loop helps programmers perform repetitive tasks without writing the same instructions many times. It is useful for processing lists, displaying records, calculating totals, and working with data.",

  objectives: [
    "Understand why loops are used in programming.",
    "Explain the syntax of a for loop.",
    "Use range() to repeat instructions a specific number of times.",
    "Understand start, stop, and step in range().",
    "Loop through strings and lists.",
    "Use if conditions inside a for loop.",
    "Understand the basic purpose of break and continue.",
    "Build a practical program using a for loop."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is a Loop?",
      body:
        "A loop allows us to repeat the same instructions multiple times without writing them again and again.",
      bullets: [
        "A loop repeats instructions.",
        "It saves time and reduces repeated code.",
        "Python provides for and while loops."
      ]
    },

    {
      kicker: "02 · Real-life example",
      title: "Why Do We Need Loops?",
      body:
        "Imagine that you want to print the names of 30 students. Writing print() 30 times is not a good solution.",
      code:
        "print(\"Ahmad\")\nprint(\"Mahmood\")\nprint(\"Khalid\")",
      language: "python",
      output: "Ahmad\nMahmood\nKhalid",
      bullets: [
        "Without loops, we repeat code manually.",
        "With loops, Python repeats instructions for us.",
        "Loops make programs shorter and easier to maintain."
      ]
    },

    {
      kicker: "03 · First loop",
      title: "What Is a for Loop?",
      body:
        "A for loop executes a block of code once for each item in a sequence or iterable.",
      code:
        "for number in range(5):\n    print(number)",
      language: "python",
      output: "0\n1\n2\n3\n4",
      bullets: [
        "for starts the loop.",
        "number is the loop variable.",
        "range(5) provides five numbers.",
        "The indented statement runs for every number."
      ]
    },

    {
      kicker: "04 · Syntax",
      title: "for Loop Syntax",
      body:
        "A for loop contains a variable, the in keyword, an iterable, and an indented code block.",
      code:
        "for variable in sequence:\n    # Instructions to repeat\n    print(variable)",
      language: "python",
      bullets: [
        "for begins the loop.",
        "variable receives an item in each iteration.",
        "in connects the variable to the sequence.",
        "The colon : starts the loop block.",
        "Indentation identifies the instructions inside the loop."
      ]
    },

    {
      kicker: "05 · First practical example",
      title: "Print Numbers from 1 to 5",
      body:
        "Let's print five numbers using a for loop.",
      code:
        "for number in range(1, 6):\n    print(number)",
      language: "python",
      output: "1\n2\n3\n4\n5",
      bullets: [
        "The loop starts at 1.",
        "The loop stops before 6.",
        "The value changes automatically in every iteration."
      ]
    },

    {
      kicker: "06 · Understanding range",
      title: "What Is range()?",
      body:
        "The range() function generates a sequence of numbers that a for loop can use.",
      code:
        "for number in range(5):\n    print(number)",
      language: "python",
      output: "0\n1\n2\n3\n4",
      bullets: [
        "range(5) generates numbers starting from 0.",
        "The final value 5 is not included.",
        "It generates five numbers: 0, 1, 2, 3, and 4."
      ]
    },

    {
      kicker: "07 · Range with one argument",
      title: "range(stop)",
      body:
        "When range() receives one argument, the sequence starts from zero and stops before the given number.",
      code:
        "for number in range(4):\n    print(number)",
      language: "python",
      output: "0\n1\n2\n3",
      bullets: [
        "Start is automatically 0.",
        "Stop is 4.",
        "4 is excluded."
      ]
    },

    {
      kicker: "08 · Range with two arguments",
      title: "range(start, stop)",
      body:
        "We can provide a starting number and a stopping number.",
      code:
        "for number in range(2, 7):\n    print(number)",
      language: "python",
      output: "2\n3\n4\n5\n6",
      bullets: [
        "The first argument is the starting value.",
        "The second argument is the stopping value.",
        "The stopping value is not included."
      ]
    },

    {
      kicker: "09 · Range with three arguments",
      title: "range(start, stop, step)",
      body:
        "The third argument controls how much the number increases or decreases in each iteration.",
      code:
        "for number in range(2, 11, 2):\n    print(number)",
      language: "python",
      output: "2\n4\n6\n8\n10",
      bullets: [
        "Start = 2",
        "Stop = 11",
        "Step = 2",
        "The number increases by 2 each time."
      ]
    },

    {
      kicker: "10 · Counting backward",
      title: "Using a Negative Step",
      body:
        "A negative step allows us to count backward.",
      code:
        "for number in range(5, 0, -1):\n    print(number)",
      language: "python",
      output: "5\n4\n3\n2\n1",
      bullets: [
        "Start from 5.",
        "Stop before 0.",
        "Step -1 decreases the number by one."
      ]
    },

    {
      kicker: "11 · Loop through a string",
      title: "Using for with Strings",
      body:
        "A string contains characters. A for loop can visit each character one by one.",
      code:
        "name = \"Sahel\"\n\nfor letter in name:\n    print(letter)",
      language: "python",
      output: "S\na\nh\ne\nl",
      bullets: [
        "The loop reads one character at a time.",
        "letter stores the current character.",
        "The loop ends after the last character."
      ]
    },

    {
      kicker: "12 · Loop through a list",
      title: "Using for with Lists",
      body:
        "A for loop can process every item in a list.",
      code:
        "students = [\"Ahmad\", \"Mahmood\", \"Khalid\"]\n\nfor student in students:\n    print(student)",
      language: "python",
      output: "Ahmad\nMahmood\nKhalid",
      bullets: [
        "The list contains three student names.",
        "student receives one name in each iteration.",
        "The loop processes all items automatically."
      ]
    },

    {
      kicker: "13 · Loop through a tuple",
      title: "Using for with Tuples",
      body:
        "Tuples are also iterable, so we can use a for loop to access their items.",
      code:
        "days = (\"Saturday\", \"Sunday\", \"Monday\")\n\nfor day in days:\n    print(day)",
      language: "python",
      output: "Saturday\nSunday\nMonday",
      bullets: [
        "A tuple stores multiple items.",
        "The loop visits every item.",
        "The same loop pattern works with lists and tuples."
      ]
    },

    {
      kicker: "14 · Loop with conditions",
      title: "Using if Inside a for Loop",
      body:
        "We can use an if statement inside a loop to make decisions about each item.",
      code:
        "numbers = [2, 5, 8, 11, 14]\n\nfor number in numbers:\n    if number % 2 == 0:\n        print(number)",
      language: "python",
      output: "2\n8\n14",
      bullets: [
        "The loop checks every number.",
        "% calculates the remainder.",
        "The if condition prints only even numbers."
      ]
    },

    {
      kicker: "15 · Calculating a total",
      title: "Using a Loop to Calculate a Sum",
      body:
        "A loop can process several prices and calculate their total.",
      code:
        "prices = [100, 250, 150]\ntotal = 0\n\nfor price in prices:\n    total = total + price\n\nprint(\"Total:\", total)",
      language: "python",
      output: "Total: 500",
      bullets: [
        "total starts at zero.",
        "Each price is added to total.",
        "The final result is 500."
      ]
    },

    {
      kicker: "16 · Counting iterations",
      title: "How Many Times Does a Loop Run?",
      body:
        "The number of iterations depends on how many items the iterable provides.",
      code:
        "students = [\"Ahmad\", \"Mahmood\", \"Khalid\"]\ncount = 0\n\nfor student in students:\n    count += 1\n\nprint(\"Students:\", count)",
      language: "python",
      output: "Students: 3",
      bullets: [
        "The loop runs once for every student.",
        "count increases by one each time.",
        "The final count is 3."
      ]
    },

    {
      kicker: "17 · Stopping a loop",
      title: "Introduction to break",
      body:
        "The break statement immediately stops the loop when Python reaches it.",
      code:
        "for number in range(1, 6):\n    if number == 3:\n        break\n    print(number)",
      language: "python",
      output: "1\n2",
      bullets: [
        "The loop starts with 1.",
        "When number becomes 3, break stops the loop.",
        "Numbers after 3 are not processed."
      ]
    },

    {
      kicker: "18 · Skipping an iteration",
      title: "Introduction to continue",
      body:
        "The continue statement skips the remaining instructions in the current iteration and moves to the next iteration.",
      code:
        "for number in range(1, 6):\n    if number == 3:\n        continue\n    print(number)",
      language: "python",
      output: "1\n2\n4\n5",
      bullets: [
        "The loop reaches number 3.",
        "continue skips print() for that iteration.",
        "The loop continues with number 4."
      ]
    },

    {
      kicker: "19 · Practical example",
      title: "Student Marks Report",
      body:
        "Let's use a for loop to display the marks of several students.",
      code:
        "marks = [85, 67, 92, 74, 58]\n\nfor mark in marks:\n    print(\"Student mark:\", mark)",
      language: "python",
      output:
        "Student mark: 85\nStudent mark: 67\nStudent mark: 92\nStudent mark: 74\nStudent mark: 58",
      bullets: [
        "The list stores five marks.",
        "The loop processes each mark.",
        "The same approach can be used for student records."
      ]
    },

    {
      kicker: "20 · Common mistakes",
      title: "Mistakes to Avoid",
      body:
        "Understand these common mistakes before writing your own loops.",
      bullets: [
        "Forgetting the colon after the for statement.",
        "Using incorrect indentation.",
        "Expecting range(5) to include 5.",
        "Using a step of 0 in range().",
        "Using a positive step when counting backward.",
        "Changing the loop variable without understanding the effect."
      ]
    },

    {
      kicker: "21 · Practice",
      title: "Your First for Loop Exercise",
      body:
        "Write a program that displays the numbers from 1 to 10.",
      bullets: [
        "Use range().",
        "Print each number on a separate line.",
        "Then modify the program to display only even numbers."
      ]
    },

    {
      kicker: "22 · Summary",
      title: "What Have We Learned?",
      body:
        "The for loop is one of the most useful tools for repeating instructions in Python.",
      bullets: [
        "A for loop repeats instructions.",
        "range() generates a sequence of numbers.",
        "A loop can process strings, lists, and tuples.",
        "if can be used inside a loop.",
        "break stops a loop.",
        "continue skips the current iteration."
      ]
    }
  ],

  example: {
    explanation:
      "This program stores student marks in a list, displays each mark, calculates the total, and calculates the average. It demonstrates how a for loop can process multiple values.",
    code:
      "marks = [85, 67, 92, 74, 58]\ntotal = 0\n\nfor mark in marks:\n    print(\"Mark:\", mark)\n    total += mark\n\naverage = total / len(marks)\n\nprint(\"Total:\", total)\nprint(\"Average:\", average)",
    language: "python",
    output:
      "Mark: 85\nMark: 67\nMark: 92\nMark: 74\nMark: 58\nTotal: 376\nAverage: 75.2"
  },

  commonMistakes: [
    "Forgetting the colon : after the for statement.",
    "Using incorrect indentation inside the loop.",
    "Thinking that range(5) includes the number 5.",
    "Using range() with a step value of zero.",
    "Using a positive step when trying to count backward.",
    "Confusing break with continue.",
    "Expecting a for loop to run when its iterable has no items.",
    "Using a variable name that is unclear or confusing."
  ],

  exercise: {
    question:
      "Create a program that stores the names of five students in a list. Use a for loop to display each student's name. Then create another loop that displays only the names containing the letter 'a'.",
    hint:
      "Create a list of names, use for to visit each name, and use an if condition with the in operator to check whether the letter 'a' exists in each name."
  },

  solution: {
    explanation:
      "The first loop displays all student names. The second loop checks whether the lowercase letter 'a' exists in each name. The lower() method makes the check case-insensitive for this example.",
    code:
      "students = [\"Ahmad\", \"Mahmood\", \"Khalid\", \"Omar\", \"Bilal\"]\n\nprint(\"All Students:\")\nfor student in students:\n    print(student)\n\nprint(\"\\nNames containing the letter a:\")\nfor student in students:\n    if \"a\" in student.lower():\n        print(student)",
    output:
      "All Students:\nAhmad\nMahmood\nKhalid\nOmar\nBilal\n\nNames containing the letter a:\nAhmad\nKhalid\nOmar\nBilal"
  },

  quiz: [
    {
      question: "What is the main purpose of a for loop?",
      options: [
        "To define a function",
        "To repeat instructions for items in a sequence",
        "To create a variable",
        "To stop a program"
      ],
      answer: 1,
      explanation:
        "A for loop repeats a block of code for each item in an iterable."
    },
    {
      question: "What is the output of range(4)?",
      options: [
        "1, 2, 3, 4",
        "0, 1, 2, 3",
        "0, 1, 2, 3, 4",
        "4, 3, 2, 1"
      ],
      answer: 1,
      explanation:
        "range(4) starts at zero and stops before four."
    },
    {
      question: "Which value is excluded in range(2, 6)?",
      options: ["2", "3", "5", "6"],
      answer: 3,
      explanation:
        "The stop value is not included in range()."
    },
    {
      question: "What does break do?",
      options: [
        "Skips only the current iteration",
        "Restarts the loop",
        "Stops the loop immediately",
        "Repeats the current item"
      ],
      answer: 2,
      explanation:
        "break immediately exits the nearest enclosing loop."
    },
    {
      question: "What does continue do?",
      options: [
        "Stops the entire program",
        "Skips the rest of the current iteration",
        "Deletes the list",
        "Ends the function"
      ],
      answer: 1,
      explanation:
        "continue skips the remaining statements in the current iteration and proceeds to the next iteration."
    }
  ],

  takeaways: [
    "A for loop repeats instructions for each item in an iterable.",
    "range() is commonly used when repeating code a specific number of times.",
    "The stop value in range() is excluded.",
    "The step value controls the change between numbers.",
    "A for loop can process strings, lists, and tuples.",
    "An if statement can be placed inside a loop.",
    "break exits the loop, while continue skips the current iteration."
  ],

  teacherNotes:
    "Begin with a real-life example such as taking attendance for ten students. Ask students how they would print ten names without repeating print() manually. Then introduce the idea of a loop. Explain the syntax slowly and trace each iteration on the screen. Give special attention to range() because beginners often misunderstand that the stop value is excluded. Demonstrate range(5), range(1, 6), and range(2, 11, 2) separately. After that, demonstrate looping through a string and a list. Use the student marks example to connect loops with a real application. Introduce break and continue briefly, and explain their difference. Ask students to predict the output before running every example. Keep the main focus on understanding for loops rather than memorizing syntax.",

  teachingTime: "60-75 minutes"
};
