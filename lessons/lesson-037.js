
window.lessonData = window.lessonData || {};

window.lessonData[37] = {
  id: 37,
  title: "range()",
  category: "Python Loops",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn how Python's range() function generates a sequence of numbers. They will understand its arguments and how to use it with for loops.",

  definition:
    "The range() function creates an immutable sequence of integers, commonly used to control how many times a for loop runs.",

  whyItMatters:
    "range() helps programmers repeat instructions a specific number of times, count forward or backward, skip numbers, and control loop iterations.",

  objectives: [
    "Understand what the range() function does.",
    "Use range() with one argument.",
    "Understand the start, stop, and step arguments.",
    "Understand why the stop value is excluded.",
    "Generate sequences with positive and negative steps.",
    "Use range() with a for loop.",
    "Create practical programs using range()."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is range()?",
      body:
        "The range() function generates a sequence of integers. It is commonly used with for loops when we want to repeat instructions a specific number of times.",
      code:
        "for number in range(5):\n    print(number)",
      language: "python",
      output:
        "0\n1\n2\n3\n4",
      bullets: [
        "range() generates numbers.",
        "It is commonly used with for loops.",
        "It helps control loop repetitions."
      ]
    },

    {
      kicker: "02 · Why range?",
      title: "Why Do We Need range()?",
      body:
        "Imagine that you want to print numbers from 1 to 100. Instead of writing print() 100 times, you can use range().",
      code:
        "for number in range(1, 6):\n    print(number)",
      language: "python",
      output:
        "1\n2\n3\n4\n5",
      bullets: [
        "It avoids writing repeated instructions.",
        "It generates numbers automatically.",
        "It makes counting tasks easier."
      ]
    },

    {
      kicker: "03 · Basic structure",
      title: "Understanding range() Syntax",
      body:
        "The range() function can accept one, two, or three arguments.",
      code:
        "range(stop)\nrange(start, stop)\nrange(start, stop, step)",
      language: "python",
      bullets: [
        "start: where the sequence begins.",
        "stop: where the sequence stops, without including that value.",
        "step: how much the number changes each time."
      ]
    },

    {
      kicker: "04 · One argument",
      title: "range(stop)",
      body:
        "When range() receives one argument, it starts from zero and stops before the given number.",
      code:
        "for number in range(5):\n    print(number)",
      language: "python",
      output:
        "0\n1\n2\n3\n4",
      bullets: [
        "The default starting value is 0.",
        "The stop value is 5.",
        "The number 5 is not included.",
        "Five numbers are generated."
      ]
    },

    {
      kicker: "05 · Understanding stop",
      title: "Why Is the Stop Value Excluded?",
      body:
        "The stop value is the boundary of the sequence, not one of the generated numbers.",
      code:
        "for number in range(1, 6):\n    print(number)",
      language: "python",
      output:
        "1\n2\n3\n4\n5",
      bullets: [
        "Start is 1.",
        "Stop is 6.",
        "The last generated number is 5.",
        "The value 6 is excluded."
      ]
    },

    {
      kicker: "06 · Two arguments",
      title: "range(start, stop)",
      body:
        "When two arguments are provided, the first argument specifies the starting number and the second specifies the stopping boundary.",
      code:
        "for number in range(3, 8):\n    print(number)",
      language: "python",
      output:
        "3\n4\n5\n6\n7",
      bullets: [
        "Start = 3.",
        "Stop = 8.",
        "The sequence begins at 3.",
        "The sequence stops before 8."
      ]
    },

    {
      kicker: "07 · Three arguments",
      title: "range(start, stop, step)",
      body:
        "The third argument controls the difference between consecutive numbers.",
      code:
        "for number in range(2, 12, 2):\n    print(number)",
      language: "python",
      output:
        "2\n4\n6\n8\n10",
      bullets: [
        "Start = 2.",
        "Stop = 12.",
        "Step = 2.",
        "Each number increases by 2."
      ]
    },

    {
      kicker: "08 · Step of 1",
      title: "Using Step = 1",
      body:
        "A step of 1 increases the number by one each time. This is also the default step when it is not provided.",
      code:
        "for number in range(1, 6, 1):\n    print(number)",
      language: "python",
      output:
        "1\n2\n3\n4\n5",
      bullets: [
        "The sequence starts at 1.",
        "Each next number increases by 1.",
        "range(1, 6) produces the same sequence."
      ]
    },

    {
      kicker: "09 · Even numbers",
      title: "Generating Even Numbers",
      body:
        "We can use a step of 2 to generate even numbers.",
      code:
        "for number in range(2, 11, 2):\n    print(number)",
      language: "python",
      output:
        "2\n4\n6\n8\n10",
      bullets: [
        "Start from 2.",
        "Increase by 2.",
        "Stop before 11."
      ]
    },

    {
      kicker: "10 · Odd numbers",
      title: "Generating Odd Numbers",
      body:
        "Starting from 1 and increasing by 2 generates odd numbers.",
      code:
        "for number in range(1, 11, 2):\n    print(number)",
      language: "python",
      output:
        "1\n3\n5\n7\n9",
      bullets: [
        "Start from 1.",
        "Increase by 2.",
        "The sequence contains odd numbers."
      ]
    },

    {
      kicker: "11 · Counting backward",
      title: "Using a Negative Step",
      body:
        "A negative step allows range() to generate numbers in descending order.",
      code:
        "for number in range(5, 0, -1):\n    print(number)",
      language: "python",
      output:
        "5\n4\n3\n2\n1",
      bullets: [
        "Start from 5.",
        "Stop before 0.",
        "Step = -1.",
        "Each number decreases by 1."
      ]
    },

    {
      kicker: "12 · Larger negative step",
      title: "Counting Backward by Two",
      body:
        "We can also decrease numbers by more than one at a time.",
      code:
        "for number in range(10, 0, -2):\n    print(number)",
      language: "python",
      output:
        "10\n8\n6\n4\n2",
      bullets: [
        "Start from 10.",
        "Stop before 0.",
        "Decrease by 2 each time."
      ]
    },

    {
      kicker: "13 · Converting to a list",
      title: "Using list() with range()",
      body:
        "We can convert the sequence generated by range() into a list to display all its values together.",
      code:
        "numbers = list(range(1, 6))\n\nprint(numbers)",
      language: "python",
      output:
        "[1, 2, 3, 4, 5]",
      bullets: [
        "range() provides a sequence.",
        "list() converts it into a list.",
        "The result can be stored in a variable."
      ]
    },

    {
      kicker: "14 · Length",
      title: "Finding the Number of Values",
      body:
        "We can use len() to find how many integers a range contains.",
      code:
        "numbers = range(1, 11)\n\nprint(len(numbers))",
      language: "python",
      output:
        "10",
      bullets: [
        "range(1, 11) generates ten numbers.",
        "len() returns the number of values.",
        "The result is 10."
      ]
    },

    {
      kicker: "15 · Membership",
      title: "Checking a Value in range()",
      body:
        "The in operator checks whether a particular number belongs to a range.",
      code:
        "numbers = range(1, 10, 2)\n\nprint(5 in numbers)\nprint(6 in numbers)",
      language: "python",
      output:
        "True\nFalse",
      bullets: [
        "The range contains 1, 3, 5, 7, and 9.",
        "5 is included.",
        "6 is not included."
      ]
    },

    {
      kicker: "16 · Using range with conditions",
      title: "Printing Multiples of Three",
      body:
        "We can use range() to generate multiples of three.",
      code:
        "for number in range(3, 19, 3):\n    print(number)",
      language: "python",
      output:
        "3\n6\n9\n12\n15\n18",
      bullets: [
        "Start from 3.",
        "Increase by 3.",
        "Stop before 19."
      ]
    },

    {
      kicker: "17 · Practical example",
      title: "Student Number List",
      body:
        "Let's generate student numbers from 1 to 5.",
      code:
        "for student_number in range(1, 6):\n    print(\"Student:\", student_number)",
      language: "python",
      output:
        "Student: 1\nStudent: 2\nStudent: 3\nStudent: 4\nStudent: 5",
      bullets: [
        "The loop generates five student numbers.",
        "Each number is displayed with a label.",
        "This pattern can be useful for numbered records."
      ]
    },

    {
      kicker: "18 · Practical calculation",
      title: "Calculating the Sum from 1 to 5",
      body:
        "We can use range() with a loop to calculate the sum of numbers.",
      code:
        "total = 0\n\nfor number in range(1, 6):\n    total += number\n\nprint(\"Total:\", total)",
      language: "python",
      output:
        "Total: 15",
      bullets: [
        "The loop generates numbers from 1 to 5.",
        "Each number is added to total.",
        "The final result is 15."
      ]
    },

    {
      kicker: "19 · Empty ranges",
      title: "When Does range() Generate No Numbers?",
      body:
        "If the start, stop, and step do not allow the sequence to move toward the stop boundary, the range is empty.",
      code:
        "print(list(range(5, 1)))\nprint(list(range(1, 5, -1)))",
      language: "python",
      output:
        "[]\n[]",
      bullets: [
        "The default step is positive 1.",
        "A positive step cannot count down from 5 toward 1.",
        "A negative step cannot count up from 1 toward 5.",
        "Use a step with the correct direction."
      ]
    },

    {
      kicker: "20 · Common mistakes",
      title: "Mistakes to Avoid",
      body:
        "Understand these common range() mistakes.",
      bullets: [
        "Forgetting that the stop value is excluded.",
        "Using zero as the step value.",
        "Using a positive step for descending numbers.",
        "Using a negative step for ascending numbers.",
        "Confusing start and stop arguments.",
        "Expecting range() to return a list automatically."
      ]
    },

    {
      kicker: "21 · Practice",
      title: "Your range() Exercise",
      body:
        "Write a program that displays the numbers from 10 down to 1.",
      bullets: [
        "Use range().",
        "Start from 10.",
        "Choose the correct stop value.",
        "Use a negative step.",
        "Print every number on a separate line."
      ]
    },

    {
      kicker: "22 · Summary",
      title: "What Have We Learned?",
      body:
        "The range() function gives us control over number sequences used in loops.",
      bullets: [
        "range(stop) starts from zero.",
        "range(start, stop) defines a starting and stopping boundary.",
        "range(start, stop, step) controls the change between values.",
        "The stop value is excluded.",
        "A negative step counts backward.",
        "list() converts a range into a list.",
        "len() counts the values in a range."
      ]
    }
  ],

  example: {
    explanation:
      "This program uses range() to generate the numbers from 1 to 10, displays each number, identifies even and odd numbers, and calculates their total.",
    code:
      "total = 0\n\nfor number in range(1, 11):\n    print(\"Number:\", number)\n\n    if number % 2 == 0:\n        print(\"Even\")\n    else:\n        print(\"Odd\")\n\n    total += number\n\nprint(\"Total:\", total)",
    language: "python",
    output:
      "Number: 1\nOdd\nNumber: 2\nEven\nNumber: 3\nOdd\nNumber: 4\nEven\nNumber: 5\nOdd\nNumber: 6\nEven\nNumber: 7\nOdd\nNumber: 8\nEven\nNumber: 9\nOdd\nNumber: 10\nEven\nTotal: 55"
  },

  commonMistakes: [
    "Forgetting that range() excludes the stop value.",
    "Thinking range(5) generates numbers from 1 to 5.",
    "Using zero as the step argument.",
    "Using a positive step when counting backward.",
    "Using a negative step when counting forward.",
    "Confusing the start and stop arguments.",
    "Expecting range() to return a list instead of a range object.",
    "Forgetting that range() generates integers, not decimal numbers."
  ],

  exercise: {
    question:
      "Create a program that displays all even numbers from 2 to 20, then displays all odd numbers from 1 to 19. Finally, calculate and display the sum of numbers from 1 to 10.",
    hint:
      "Use range(2, 21, 2) for even numbers and range(1, 20, 2) for odd numbers. Use another range() with a total variable for the sum."
  },

  solution: {
    explanation:
      "The first loop generates even numbers from 2 to 20. The second loop generates odd numbers from 1 to 19. The final loop calculates the sum of numbers from 1 to 10.",
    code:
      "print(\"Even Numbers:\")\nfor number in range(2, 21, 2):\n    print(number)\n\nprint(\"Odd Numbers:\")\nfor number in range(1, 20, 2):\n    print(number)\n\ntotal = 0\nfor number in range(1, 11):\n    total += number\n\nprint(\"Sum:\", total)",
    output:
      "Even Numbers:\n2\n4\n6\n8\n10\n12\n14\n16\n18\n20\nOdd Numbers:\n1\n3\n5\n7\n9\n11\n13\n15\n17\n19\nSum: 55"
  },

  quiz: [
    {
      question: "What does range(5) generate?",
      options: [
        "1, 2, 3, 4, 5",
        "0, 1, 2, 3, 4",
        "0, 1, 2, 3, 4, 5",
        "5, 4, 3, 2, 1"
      ],
      answer: 1,
      explanation:
        "When range() receives one argument, it starts at zero and stops before that argument."
    },
    {
      question: "Which value is excluded in range(2, 7)?",
      options: ["2", "4", "6", "7"],
      answer: 3,
      explanation:
        "The stop value 7 is not included."
    },
    {
      question: "What does the third argument in range(start, stop, step) control?",
      options: [
        "The number of loops only",
        "The difference between consecutive values",
        "The final output format",
        "The starting variable name"
      ],
      answer: 1,
      explanation:
        "The step controls how much the sequence increases or decreases."
    },
    {
      question: "What is the output of range(2, 10, 2)?",
      options: [
        "2, 4, 6, 8",
        "2, 4, 6, 8, 10",
        "1, 3, 5, 7, 9",
        "10, 8, 6, 4, 2"
      ],
      answer: 0,
      explanation:
        "The sequence starts at 2, increases by 2, and stops before 10."
    },
    {
      question: "Which range() correctly counts backward from 5 to 1?",
      options: [
        "range(5, 1)",
        "range(1, 5, -1)",
        "range(5, 0, -1)",
        "range(5, 1, 1)"
      ],
      answer: 2,
      explanation:
        "A negative step counts backward, and stop 0 allows the sequence to include 1."
    },
    {
      question: "What is the result of list(range(3, 7))?",
      options: [
        "[3, 4, 5, 6]",
        "[3, 4, 5, 6, 7]",
        "[0, 1, 2, 3, 4, 5, 6]",
        "[4, 5, 6, 7]"
      ],
      answer: 0,
      explanation:
        "The range starts at 3 and stops before 7. list() converts its values into a list."
    },
    {
      question: "What happens when the step argument is zero?",
      options: [
        "The sequence counts backward",
        "Python raises a ValueError",
        "The sequence starts at zero",
        "The range contains only one number"
      ],
      answer: 1,
      explanation:
        "The step argument cannot be zero. Python raises a ValueError."
    }
  ],

  takeaways: [
    "range() generates a sequence of integers.",
    "range(stop) starts from zero.",
    "range(start, stop) defines the starting and stopping boundaries.",
    "range(start, stop, step) controls the change between values.",
    "The stop value is always excluded.",
    "Positive steps move forward.",
    "Negative steps move backward.",
    "list() converts a range into a list.",
    "range() is commonly used with for loops."
  ],

  teacherNotes:
    "Begin by reminding students that they used range() in the previous for loop lesson. Explain that this lesson focuses on understanding range() itself. Start with range(5), then ask students why the output ends at 4 instead of 5. Explain the excluded stop value carefully. Next, introduce the two-argument form and then the three-argument form. Write start, stop, and step separately on the screen. Demonstrate counting forward, generating even and odd numbers, and counting backward with a negative step. Show how list() converts a range into a list and how len() counts its values. Explain empty ranges and the error caused by a zero step. Finish with the practical exercise and ask students to predict each output before running the code.",

  teachingTime: "50-60 minutes"
};
