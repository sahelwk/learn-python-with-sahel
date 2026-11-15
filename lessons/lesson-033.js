window.lessonData = window.lessonData || {};
window.lessonData[33] = {
  id: 33,
  title: "Logical Conditions",
  category: "Python Conditions",
  contentStatus: "authored",

  introduction: "Logical conditions allow Python programs to combine multiple conditions or reverse a condition when making decisions. Python uses the logical operators and, or, and not to create these conditions.",

  definition: "A logical condition is a condition that uses logical operators such as and, or, and not to combine or reverse Boolean expressions.",

  whyItMatters: "Real-world decisions often depend on more than one requirement. Logical conditions help programmers check multiple requirements in login systems, student eligibility, shopping discounts, access control, and many other applications.",

  objectives: [
    "Understand the meaning of logical conditions.",
    "Use and to check whether all conditions are True.",
    "Use or to check whether at least one condition is True.",
    "Use not to reverse a condition.",
    "Combine logical operators with if, elif, and else.",
    "Create practical programs using logical conditions."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Logical Conditions?",
      body: "Logical conditions combine multiple conditions or reverse a condition to help a program make decisions.",
      bullets: [
        "They are used inside conditional statements.",
        "They can combine two or more conditions.",
        "They use and, or, and not.",
        "They are useful for making complex decisions."
      ]
    },
    {
      kicker: "02 · Logical Operators",
      title: "Three Logical Operators",
      body: "Python provides three main logical operators for creating logical conditions.",
      bullets: [
        "and: All conditions must be True.",
        "or: At least one condition must be True.",
        "not: Reverses the result of a condition."
      ],
      code: "age = 20\nhas_id = True\n\nif age >= 18 and has_id:\n    print(\"Access allowed\")",
      output: "Access allowed"
    },
    {
      kicker: "03 · and Operator",
      title: "Using and in Conditions",
      body: "The and operator returns True only when all conditions are True.",
      bullets: [
        "Both conditions must be True.",
        "If one condition is False, the combined result is False.",
        "Useful when all requirements must be met."
      ],
      code: "age = 25\nhas_id = True\n\nif age >= 18 and has_id:\n    print(\"You can enter\")\nelse:\n    print(\"Access denied\")",
      output: "You can enter"
    },
    {
      kicker: "04 · and Example",
      title: "Student Eligibility",
      body: "A student must meet both attendance and marks requirements to pass.",
      code: "attendance = 85\nmarks = 75\n\nif attendance >= 80 and marks >= 60:\n    print(\"Student passed\")\nelse:\n    print(\"Student did not pass\")",
      output: "Student passed"
    },
    {
      kicker: "05 · and Truth Table",
      title: "How and Works",
      body: "The and operator produces True only when both conditions are True.",
      bullets: [
        "True and True = True",
        "True and False = False",
        "False and True = False",
        "False and False = False"
      ],
      code: "print(True and True)\nprint(True and False)\nprint(False and True)\nprint(False and False)",
      output: "True\nFalse\nFalse\nFalse"
    },
    {
      kicker: "06 · or Operator",
      title: "Using or in Conditions",
      body: "The or operator returns True when at least one condition is True.",
      bullets: [
        "Only one condition needs to be True.",
        "Both conditions can also be True.",
        "The result is False only when all conditions are False."
      ],
      code: "day = \"Friday\"\n\nif day == \"Friday\" or day == \"Saturday\":\n    print(\"Weekend\")\nelse:\n    print(\"Working day\")",
      output: "Weekend"
    },
    {
      kicker: "07 · or Example",
      title: "Multiple Login Options",
      body: "A user can access a simple example system by entering either an accepted username.",
      code: "username = \"sahel\"\n\nif username == \"admin\" or username == \"sahel\":\n    print(\"Welcome\")\nelse:\n    print(\"Unknown user\")",
      output: "Welcome"
    },
    {
      kicker: "08 · or Truth Table",
      title: "How or Works",
      body: "The or operator produces False only when both conditions are False.",
      bullets: [
        "True or True = True",
        "True or False = True",
        "False or True = True",
        "False or False = False"
      ],
      code: "print(True or True)\nprint(True or False)\nprint(False or True)\nprint(False or False)",
      output: "True\nTrue\nTrue\nFalse"
    },
    {
      kicker: "09 · not Operator",
      title: "Using not in Conditions",
      body: "The not operator reverses a Boolean result.",
      bullets: [
        "not True becomes False.",
        "not False becomes True.",
        "Useful for checking when something is not true."
      ],
      code: "is_raining = False\n\nif not is_raining:\n    print(\"You can go outside\")\nelse:\n    print(\"Stay inside\")",
      output: "You can go outside"
    },
    {
      kicker: "10 · not Truth Table",
      title: "How not Works",
      body: "The not operator changes True to False and False to True.",
      code: "print(not True)\nprint(not False)",
      output: "False\nTrue"
    },
    {
      kicker: "11 · Combining Operators",
      title: "Using and and or Together",
      body: "Python allows multiple logical operators in one condition. Use parentheses to make the intended grouping clear.",
      code: "age = 20\nhas_ticket = True\nis_vip = False\n\nif (age >= 18 and has_ticket) or is_vip:\n    print(\"Entry allowed\")\nelse:\n    print(\"Entry denied\")",
      output: "Entry allowed",
      bullets: [
        "Parentheses make condition groups easier to understand.",
        "A valid ticket and adult age are accepted.",
        "A VIP status is another accepted option in this example."
      ]
    },
    {
      kicker: "12 · User Input",
      title: "Logical Conditions with input()",
      body: "Use input() to receive values and combine conditions to make a decision.",
      code: "age = int(input(\"Enter your age: \"))\nhas_id = input(\"Do you have an ID? yes/no: \")\n\nif age >= 18 and has_id == \"yes\":\n    print(\"Access allowed\")\nelse:\n    print(\"Access denied\")",
      output: "Enter your age: 22\nDo you have an ID? yes/no: yes\nAccess allowed"
    },
    {
      kicker: "13 · Practical Example",
      title: "Shopping Discount",
      body: "A customer receives a discount when they are a member or their purchase reaches the required amount.",
      code: "is_member = False\ntotal = 1500\n\nif is_member or total >= 2000:\n    print(\"Discount available\")\nelse:\n    print(\"No discount\")",
      output: "No discount"
    },
    {
      kicker: "14 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Use logical operators carefully to get the expected result.",
      bullets: [
        "Using and when the requirement is either condition.",
        "Using or when all conditions must be True.",
        "Forgetting that not reverses the condition.",
        "Using = instead of == for comparison.",
        "Writing complicated conditions without clear grouping.",
        "Forgetting to convert numeric input when necessary."
      ],
      code: "age = 20\nhas_id = False\n\nif age >= 18 and has_id:\n    print(\"Allowed\")\nelse:\n    print(\"Denied\")",
      output: "Denied"
    },
    {
      kicker: "15 · Practice",
      title: "Classroom Exercise",
      body: "Create a program that checks whether a student qualifies for an award.",
      bullets: [
        "Ask the user to enter marks.",
        "Ask whether the student has good attendance (yes/no).",
        "The student qualifies if marks are at least 90 and attendance is good.",
        "Display Award approved or Award not approved.",
        "Use and in the condition."
      ]
    },
    {
      kicker: "16 · Summary",
      title: "What Did We Learn?",
      body: "Logical conditions help programs make decisions using multiple Boolean expressions.",
      bullets: [
        "and requires all conditions to be True.",
        "or requires at least one condition to be True.",
        "not reverses a Boolean result.",
        "Logical operators can be combined.",
        "Parentheses can make complex conditions clearer.",
        "Logical conditions work with if, elif, and else."
      ]
    }
  ],

  example: {
    explanation: "This example checks whether a customer is eligible for a discount. The customer qualifies if they are a member or their purchase total is at least 2000.",
    code: "is_member = False\ntotal = 2500\n\nif is_member or total >= 2000:\n    print(\"Discount available\")\nelse:\n    print(\"No discount\")",
    language: "python",
    output: "Discount available"
  },

  commonMistakes: [
    "Using and when only one condition needs to be True.",
    "Using or when all conditions must be True.",
    "Forgetting that not reverses the Boolean result.",
    "Using = instead of == when comparing values.",
    "Not using parentheses when complex conditions need clear grouping.",
    "Forgetting to convert input values to integers or floats when needed.",
    "Assuming and and or have the same behavior."
  ],

  exercise: {
    question: "Create an award eligibility program. Ask the user to enter their marks and attendance status (yes or no). A student qualifies for an award only when marks are at least 90 AND attendance status is yes. Display 'Award approved' if both requirements are met. Otherwise, display 'Award not approved'.",
    hint: "Use int() for marks, input() for attendance, and the and operator to combine both conditions."
  },

  solution: {
    explanation: "The program receives marks and attendance status. The and operator checks both requirements. The award is approved only when marks are at least 90 and attendance is yes.",
    code: "marks = int(input(\"Enter your marks: \"))\nattendance = input(\"Good attendance? yes/no: \")\n\nif marks >= 90 and attendance == \"yes\":\n    print(\"Award approved\")\nelse:\n    print(\"Award not approved\")",
    output: "Enter your marks: 95\nGood attendance? yes/no: yes\nAward approved"
  },

  quiz: [
    {
      question: "How many conditions must be True when using and?",
      options: [
        "Only one",
        "All conditions",
        "None",
        "At least three"
      ],
      answer: 1,
      explanation: "The and operator returns True only when all conditions are True."
    },
    {
      question: "When does or return True?",
      options: [
        "Only when all conditions are False",
        "When at least one condition is True",
        "Only when both conditions are False",
        "Never"
      ],
      answer: 1,
      explanation: "The or operator returns True when at least one condition is True."
    },
    {
      question: "What is the result of not True?",
      options: [
        "True",
        "False",
        "None",
        "Error"
      ],
      answer: 1,
      explanation: "The not operator reverses True to False."
    },
    {
      question: "What is the output?\nprint(True and False)",
      options: [
        "True",
        "False",
        "None",
        "Error"
      ],
      answer: 1,
      explanation: "and returns False when at least one of the conditions is False."
    },
    {
      question: "What is the output?\nprint(False or True)",
      options: [
        "False",
        "True",
        "None",
        "Error"
      ],
      answer: 1,
      explanation: "or returns True when at least one condition is True."
    },
    {
      question: "Which operator is suitable when a student must pass two requirements?",
      options: [
        "or",
        "not",
        "and",
        "in"
      ],
      answer: 2,
      explanation: "and is suitable when both requirements must be met."
    },
    {
      question: "What is the output?\nage = 20\nhas_id = False\nprint(age >= 18 and has_id)",
      options: [
        "True",
        "False",
        "20",
        "None"
      ],
      answer: 1,
      explanation: "The age condition is True, but has_id is False. Therefore, the and expression is False."
    },
    {
      question: "Why are parentheses useful in complex logical conditions?",
      options: [
        "They create variables",
        "They make grouping and evaluation clearer",
        "They replace indentation",
        "They turn strings into numbers"
      ],
      answer: 1,
      explanation: "Parentheses make the intended grouping of conditions easier to understand."
    }
  ],

  takeaways: [
    "Logical conditions combine or reverse Boolean expressions.",
    "and returns True only when all conditions are True.",
    "or returns True when at least one condition is True.",
    "not reverses True and False.",
    "Logical operators can be used inside if, elif, and else structures.",
    "Parentheses help make complex conditions easier to understand."
  ],

  teacherNotes: "Begin by reminding students that they have already learned the and, or, and not operators. Explain that this lesson focuses on using those operators in real conditions. Use simple everyday examples: a student must meet both requirements (and), a customer can qualify through either of two options (or), and a person can go outside when it is not raining (not). Teach the truth tables for and, or, and not. Demonstrate each operator separately before combining them. Emphasize the difference between and and or because beginners often confuse them. Use parentheses in the combined example to show grouping clearly. Explain that input() returns strings, so numeric values should be converted with int() or float() before numerical comparisons. Finish with the award eligibility exercise and test different combinations of marks and attendance.",

  teachingTime: "45-55 minutes"
};