window.lessonData = window.lessonData || {};
window.lessonData[32] = {
  id: 32,
  title: "Nested Conditions",
  category: "Python Conditions",
  contentStatus: "authored",

  introduction: "Nested conditions are conditional statements placed inside other conditional statements. They allow a program to make a second decision after checking the first condition.",

  definition: "A nested condition is an if, elif, or else statement written inside the code block of another if, elif, or else statement.",

  whyItMatters: "Nested conditions help programmers handle situations that require multiple levels of decision-making. They are useful in login systems, eligibility checks, student results, shopping discounts, and other real-world applications.",

  objectives: [
    "Understand the meaning of nested conditions.",
    "Learn how to write an if statement inside another if statement.",
    "Understand how nested conditions are executed.",
    "Use indentation correctly in nested conditions.",
    "Create practical programs using nested conditions."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Nested Conditions?",
      body: "Nested conditions mean writing one conditional statement inside another conditional statement.",
      bullets: [
        "Nested means placed inside another structure.",
        "An if statement can contain another if statement.",
        "The inner condition is checked only when its outer block is executed.",
        "Nested conditions help make multiple decisions."
      ]
    },
    {
      kicker: "02 · Why Nested Conditions?",
      title: "Why Do We Need Nested Conditions?",
      body: "Some decisions depend on the result of another decision.",
      bullets: [
        "Check a username before checking a password.",
        "Check student eligibility before checking exam results.",
        "Check customer eligibility before applying a discount.",
        "Control access to different parts of a program."
      ]
    },
    {
      kicker: "03 · Basic Structure",
      title: "Nested if Syntax",
      body: "Write a second if statement inside the first if block.",
      code: "if condition1:\n    if condition2:\n        print(\"Both conditions are True\")",
      bullets: [
        "The outer if is checked first.",
        "The inner if is checked only if the outer condition is True.",
        "The inner block needs an additional indentation level."
      ]
    },
    {
      kicker: "04 · First Example",
      title: "Your First Nested Condition",
      body: "The program checks the age first. Then it checks whether the person has an identification card.",
      code: "age = 20\nhas_id = True\n\nif age >= 18:\n    if has_id:\n        print(\"Entry allowed\")",
      output: "Entry allowed"
    },
    {
      kicker: "05 · Execution Order",
      title: "How Do Nested Conditions Work?",
      body: "Python checks the outer condition before entering the inner condition.",
      bullets: [
        "First, check the outer condition.",
        "If it is False, skip its entire block.",
        "If it is True, enter the block.",
        "Then check the inner condition.",
        "Execute the inner block if its condition is True."
      ],
      code: "age = 16\n\nif age >= 18:\n    if age < 60:\n        print(\"Eligible\")\n\nprint(\"Program finished\")",
      output: "Program finished"
    },
    {
      kicker: "06 · Practical Example",
      title: "Student Exam Eligibility",
      body: "A student must have enough attendance before the program checks their marks.",
      code: "attendance = 85\nmarks = 75\n\nif attendance >= 75:\n    if marks >= 60:\n        print(\"Passed\")",
      output: "Passed"
    },
    {
      kicker: "07 · Nested if-else",
      title: "Using if and else Inside Another if",
      body: "An inner if-else can make a second decision after the outer condition is True.",
      code: "age = 20\n\nif age >= 18:\n    if age >= 21:\n        print(\"Age requirement met\")\n    else:\n        print(\"You are an adult, but under 21\")",
      output: "You are an adult, but under 21"
    },
    {
      kicker: "08 · Nested Conditions",
      title: "Login System Example",
      body: "First check the username. If it is correct, then check the password.",
      code: "username = \"admin\"\npassword = \"python123\"\n\nif username == \"admin\":\n    if password == \"python123\":\n        print(\"Login successful\")\n    else:\n        print(\"Incorrect password\")\nelse:\n    print(\"Incorrect username\")",
      output: "Login successful"
    },
    {
      kicker: "09 · Nested Conditions",
      title: "Shopping Discount Example",
      body: "A discount is available only to members. The discount amount depends on the purchase total.",
      code: "is_member = True\ntotal = 1200\n\nif is_member:\n    if total >= 1000:\n        print(\"You get a 20% discount\")\n    else:\n        print(\"You get a 10% discount\")\nelse:\n    print(\"No member discount\")",
      output: "You get a 20% discount"
    },
    {
      kicker: "10 · Nested elif",
      title: "Using elif Inside a Nested Condition",
      body: "An inner conditional chain can contain its own if, elif, and else statements.",
      code: "age = 25\n\nif age >= 18:\n    if age >= 60:\n        print(\"Senior\")\n    elif age >= 30:\n        print(\"Middle-aged adult\")\n    else:\n        print(\"Young adult\")\nelse:\n    print(\"Under 18\")",
      output: "Young adult"
    },
    {
      kicker: "11 · Indentation",
      title: "Understanding Indentation",
      body: "Indentation shows which statements belong to the outer and inner conditions.",
      bullets: [
        "The outer block usually uses four spaces.",
        "The inner block uses another four spaces.",
        "Keep statements at the correct indentation level.",
        "Incorrect indentation can cause an IndentationError or change the program's logic."
      ],
      code: "if condition1:\n    print(\"Outer block\")\n    if condition2:\n        print(\"Inner block\")\n    print(\"Back to outer block\")"
    },
    {
      kicker: "12 · Nested vs Separate if",
      title: "Nested if vs Separate if Statements",
      body: "A nested if depends on its outer condition. Separate if statements are checked independently.",
      code: "age = 16\n\nif age >= 18:\n    if age < 60:\n        print(\"Eligible\")\n\nif age < 18:\n    print(\"Under 18\")",
      output: "Under 18",
      bullets: [
        "Nested if: The inner condition depends on the outer condition.",
        "Separate if: Each condition is checked independently.",
        "Choose the structure that matches the problem."
      ]
    },
    {
      kicker: "13 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Nested conditions require careful indentation and logical planning.",
      bullets: [
        "Using incorrect indentation.",
        "Checking the inner condition without understanding the outer condition.",
        "Placing else at the wrong indentation level.",
        "Creating unnecessary levels of nesting.",
        "Forgetting that the inner condition is skipped when the outer condition is False."
      ]
    },
    {
      kicker: "14 · Practice",
      title: "Classroom Exercise",
      body: "Create a program that checks whether a student can receive a certificate.",
      bullets: [
        "Set attendance to a percentage.",
        "Set marks to a number.",
        "First check whether attendance is at least 80%.",
        "Inside that condition, check whether marks are at least 70.",
        "If both conditions are True, print Certificate approved.",
        "Otherwise, display an appropriate message."
      ]
    },
    {
      kicker: "15 · Summary",
      title: "What Did We Learn?",
      body: "Nested conditions allow a program to make decisions inside other decisions.",
      bullets: [
        "Nested means placed inside another structure.",
        "An if statement can contain another if statement.",
        "The outer condition is checked first.",
        "The inner condition runs only when its outer block is reached.",
        "Correct indentation is essential.",
        "Nested conditions are useful for multi-level decisions."
      ]
    }
  ],

  example: {
    explanation: "This login example first checks the username. Only when the username is correct does Python check the password. The inner condition depends on the outer condition.",
    code: "username = \"admin\"\npassword = \"python123\"\n\nif username == \"admin\":\n    if password == \"python123\":\n        print(\"Login successful\")\n    else:\n        print(\"Incorrect password\")\nelse:\n    print(\"Incorrect username\")",
    language: "python",
    output: "Login successful"
  },

  commonMistakes: [
    "Using incorrect indentation inside nested blocks.",
    "Placing an inner if outside the intended outer block.",
    "Putting else at the wrong indentation level.",
    "Assuming the inner condition runs even when the outer condition is False.",
    "Using too many nested levels when simpler logic would work.",
    "Confusing nested if statements with separate if statements."
  ],

  exercise: {
    question: "Create a certificate eligibility program. Set attendance = 85 and marks = 75. First check whether attendance is at least 80. Inside that condition, check whether marks are at least 70. If both conditions are True, print 'Certificate approved'. If attendance is too low, print 'Attendance requirement not met'. If attendance is sufficient but marks are too low, print 'Marks requirement not met'.",
    hint: "Use an outer if to check attendance. Inside it, use another if-else to check marks. Add an outer else for insufficient attendance."
  },

  solution: {
    explanation: "The outer condition checks attendance first. If attendance is sufficient, the inner if-else checks the marks. If attendance is insufficient, the outer else block runs and the inner condition is skipped.",
    code: "attendance = 85\nmarks = 75\n\nif attendance >= 80:\n    if marks >= 70:\n        print(\"Certificate approved\")\n    else:\n        print(\"Marks requirement not met\")\nelse:\n    print(\"Attendance requirement not met\")",
    output: "Certificate approved"
  },

  quiz: [
    {
      question: "What are nested conditions?",
      options: [
        "Conditions written inside other conditions",
        "Conditions written only inside loops",
        "Conditions without indentation",
        "Conditions that always return False"
      ],
      answer: 0,
      explanation: "Nested conditions are conditional statements placed inside other conditional blocks."
    },
    {
      question: "When does an inner if statement execute?",
      options: [
        "Always",
        "Only when its outer block is reached",
        "Only when the program ends",
        "Only when the outer condition is False"
      ],
      answer: 1,
      explanation: "Python enters the outer block only when its condition is True, so the inner if is checked only then."
    },
    {
      question: "What is the most important rule when writing nested conditions?",
      options: [
        "Use uppercase letters",
        "Use correct indentation",
        "Avoid colons",
        "Write else first"
      ],
      answer: 1,
      explanation: "Indentation defines which statements belong to each conditional block."
    },
    {
      question: "What happens if the outer condition is False?",
      options: [
        "The inner if runs anyway",
        "The entire outer block is skipped",
        "Python runs the inner else automatically",
        "The program always crashes"
      ],
      answer: 1,
      explanation: "When the outer condition is False, Python skips all statements inside its block."
    },
    {
      question: "What is the output?\nnumber = 10\nif number > 5:\n    if number > 8:\n        print(\"A\")",
      options: [
        "A",
        "No output",
        "Error",
        "False"
      ],
      answer: 0,
      explanation: "Both conditions are True, so the inner print statement executes."
    },
    {
      question: "Which statement correctly describes a nested if?",
      options: [
        "It must always be inside a loop",
        "It can be written inside another conditional block",
        "It cannot use else",
        "It does not need indentation"
      ],
      answer: 1,
      explanation: "An if statement can be placed inside another if, elif, or else block."
    },
    {
      question: "Can we use elif and else inside a nested condition?",
      options: [
        "Yes",
        "No",
        "Only elif",
        "Only else"
      ],
      answer: 0,
      explanation: "Nested conditional blocks can contain their own if, elif, and else branches."
    },
    {
      question: "What does indentation help Python identify?",
      options: [
        "The variable type",
        "Which statements belong to each block",
        "The program's file name",
        "The number of conditions"
      ],
      answer: 1,
      explanation: "Indentation defines the structure and scope of conditional blocks."
    }
  ],

  takeaways: [
    "Nested conditions are conditional statements inside other conditional statements.",
    "The outer condition is checked first.",
    "The inner condition is checked only when execution enters the outer block.",
    "Nested conditions can contain if, elif, and else.",
    "Correct indentation is essential.",
    "Use nested conditions when one decision depends on another."
  ],

  teacherNotes: "Begin by reviewing if, elif, and else. Ask students whether a program can make a second decision after the first decision succeeds. Explain the meaning of nested using the idea of a box inside another box. Start with the age and identification-card example. Clearly demonstrate the execution order: outer condition first, then inner condition. Use different values to show when the inner block is skipped. Next, demonstrate the login example and explain the indentation levels. Show how else indentation determines whether it belongs to the inner or outer if. Finish with the certificate exercise. Remind students that nested conditions are useful, but too many levels can make code difficult to read. Mention that functions or combined logical conditions can sometimes simplify complex logic, but do not introduce those topics in depth here.",

  teachingTime: "45-55 minutes"
};