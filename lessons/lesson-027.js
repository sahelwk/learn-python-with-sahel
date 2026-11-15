window.lessonData = window.lessonData || {};
window.lessonData[27] = {
  id: 27,
  title: "Identity Operators",
  category: "Python Operators",
  contentStatus: "authored",

  introduction: "Identity operators are used to check whether two variables refer to the same object in memory. Python provides two identity operators: is and is not.",

  definition: "Identity operators check whether two variables refer to the same object in memory, not simply whether their values are equal.",

  whyItMatters: "Identity operators help programmers check object identity, especially when working with None, objects, and references.",

  objectives: [
    "Understand the purpose of identity operators.",
    "Recognize the is and is not operators.",
    "Understand the difference between == and is.",
    "Use identity operators in practical Python examples.",
    "Check whether a variable is None."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Identity Operators?",
      body: "Identity operators check whether two variables refer to the same object in memory.",
      bullets: [
        "They compare object identity.",
        "They do not simply compare values.",
        "Python has two identity operators.",
        "is and is not"
      ]
    },
    {
      kicker: "02 · Identity Operators",
      title: "The Two Identity Operators",
      body: "Python provides two operators for checking object identity.",
      bullets: [
        "is: True if both variables refer to the same object.",
        "is not: True if they refer to different objects.",
        "Both operators return True or False."
      ],
      code: "a = [1, 2, 3]\nb = a\nc = [1, 2, 3]\n\nprint(a is b)\nprint(a is c)\nprint(a is not c)",
      output: "True\nFalse\nTrue"
    },
    {
      kicker: "03 · The is Operator",
      title: "Using is",
      body: "The is operator checks whether two variables refer to exactly the same object.",
      bullets: [
        "b = a makes b refer to the same object as a.",
        "Both variables share the same object.",
        "The result is True."
      ],
      code: "first = [10, 20, 30]\nsecond = first\n\nprint(first is second)",
      output: "True"
    },
    {
      kicker: "04 · The is not Operator",
      title: "Using is not",
      body: "The is not operator checks whether two variables refer to different objects.",
      bullets: [
        "Different objects produce True.",
        "Even if their values are equal, they can be different objects.",
        "The result is a Boolean value."
      ],
      code: "first = [10, 20, 30]\nsecond = [10, 20, 30]\n\nprint(first is not second)",
      output: "True"
    },
    {
      kicker: "05 · Important Difference",
      title: "Identity vs Equality",
      body: "The == operator compares values, while is checks object identity.",
      bullets: [
        "== means: Do the values compare equal?",
        "is means: Are they the same object?",
        "Equal values do not always mean the same object."
      ],
      code: "first = [1, 2, 3]\nsecond = [1, 2, 3]\n\nprint(first == second)\nprint(first is second)",
      output: "True\nFalse"
    },
    {
      kicker: "06 · Shared Reference",
      title: "Two Variables, One Object",
      body: "When one variable is assigned to another, both variables refer to the same object.",
      bullets: [
        "second = first does not create a new list.",
        "Both names refer to the same list.",
        "Changes through one reference are visible through the other."
      ],
      code: "first = [10, 20]\nsecond = first\n\nsecond.append(30)\n\nprint(first)\nprint(second)\nprint(first is second)",
      output: "[10, 20, 30]\n[10, 20, 30]\nTrue"
    },
    {
      kicker: "07 · Separate Objects",
      title: "Same Values, Different Objects",
      body: "Creating two separate lists gives two different objects, even when their contents are equal.",
      bullets: [
        "Each list is created separately.",
        "Their values are equal.",
        "Their identities are different."
      ],
      code: "first = [5, 10]\nsecond = [5, 10]\n\nprint(first == second)\nprint(first is second)",
      output: "True\nFalse"
    },
    {
      kicker: "08 · Practical Use",
      title: "Checking None",
      body: "One of the most common uses of is is checking whether a variable contains None.",
      bullets: [
        "None represents the absence of a value.",
        "Use is None to check for None.",
        "Use is not None to check that a value is present."
      ],
      code: "result = None\n\nprint(result is None)\nprint(result is not None)",
      output: "True\nFalse"
    },
    {
      kicker: "09 · Real-World Example",
      title: "Checking User Information",
      body: "A program can check whether a user has provided a value.",
      bullets: [
        "None means no value was provided.",
        "is None checks for a missing value.",
        "This is useful in forms and application logic."
      ],
      code: "user_email = None\n\nif user_email is None:\n    print(\"Email is not provided.\")\nelse:\n    print(\"Email:\", user_email)",
      output: "Email is not provided."
    },
    {
      kicker: "10 · Memory Identity",
      title: "The id() Function",
      body: "Python provides id() to return an object's identity during its lifetime.",
      bullets: [
        "id() returns an integer identity.",
        "Two references to the same object have the same id.",
        "Different objects have different identities while they exist."
      ],
      code: "first = [1, 2, 3]\nsecond = first\n\nprint(id(first) == id(second))\nprint(first is second)",
      output: "True\nTrue"
    },
    {
      kicker: "11 · Common Mistake",
      title: "Do Not Replace == with is",
      body: "Use == when comparing values. Use is when checking whether two references point to the same object.",
      bullets: [
        "Use == for numbers and text values.",
        "Use is for object identity.",
        "Use is None to check for None.",
        "Do not depend on implementation-specific object caching."
      ],
      code: "name1 = \"Python\"\nname2 = \"Python\"\n\nprint(name1 == name2)  # Compare values\n\nvalue = None\nprint(value is None)   # Check identity",
      output: "True\nTrue"
    },
    {
      kicker: "12 · Practice",
      title: "Classroom Exercise",
      body: "Create two list variables and compare their identity and values.",
      bullets: [
        "Create first = [1, 2, 3].",
        "Assign second = first.",
        "Create third = [1, 2, 3].",
        "Compare first and second using is.",
        "Compare first and third using == and is.",
        "Explain the results."
      ]
    },
    {
      kicker: "13 · Summary",
      title: "What Did We Learn?",
      body: "Identity operators help us determine whether two references point to the same object.",
      bullets: [
        "is checks whether two references point to the same object.",
        "is not checks whether they point to different objects.",
        "== compares values.",
        "Use is None to check for None.",
        "id() returns an object's identity."
      ]
    }
  ],

  example: {
    explanation: "This example demonstrates the difference between value equality and object identity using three lists.",
    code: "first = [1, 2, 3]\nsecond = first\nthird = [1, 2, 3]\n\nprint(first == second)\nprint(first is second)\nprint(first == third)\nprint(first is third)\nprint(first is not third)",
    language: "python",
    output: "True\nTrue\nTrue\nFalse\nTrue"
  },

  commonMistakes: [
    "Confusing is with ==.",
    "Thinking that two objects with equal values must be the same object.",
    "Thinking that second = first creates a separate copy of an object.",
    "Using is to compare ordinary strings or numbers instead of comparing their values with ==.",
    "Using == None instead of the recommended identity check is None.",
    "Assuming that id() is a permanent memory address."
  ],

  exercise: {
    question: "Create three list variables: first = [10, 20, 30], second = first, and third = [10, 20, 30]. Use ==, is, and is not to compare these variables. Print the results and explain why the results are different.",
    hint: "Remember that second = first creates another reference to the same list, while third creates a separate list."
  },

  solution: {
    explanation: "first and second refer to the same list, so both == and is return True. first and third contain equal values, so == returns True, but they are separate objects, so is returns False.",
    code: "first = [10, 20, 30]\nsecond = first\nthird = [10, 20, 30]\n\nprint(first == second)\nprint(first is second)\nprint(first == third)\nprint(first is third)\nprint(first is not third)",
    output: "True\nTrue\nTrue\nFalse\nTrue"
  },

  quiz: [
    {
      question: "How many identity operators does Python have?",
      options: ["One", "Two", "Three", "Four"],
      answer: 1,
      explanation: "Python has two identity operators: is and is not."
    },
    {
      question: "What does the is operator check?",
      options: [
        "Whether two values are equal",
        "Whether two variables refer to the same object",
        "Whether a number is positive",
        "Whether two strings have the same length"
      ],
      answer: 1,
      explanation: "is checks whether two references point to the same object."
    },
    {
      question: "Which operator compares values?",
      options: ["is", "is not", "==", "not"],
      answer: 2,
      explanation: "The == operator compares values for equality."
    },
    {
      question: "What is the output?\na = [1, 2]\nb = a\nprint(a is b)",
      options: ["True", "False", "None", "Error"],
      answer: 0,
      explanation: "b = a makes both variables refer to the same list object."
    },
    {
      question: "What is the output?\na = [1, 2]\nb = [1, 2]\nprint(a is b)",
      options: ["True", "False", "None", "Error"],
      answer: 1,
      explanation: "These are two separately created list objects."
    },
    {
      question: "Which is the recommended way to check whether a variable is None?",
      options: [
        "value == True",
        "value is None",
        "value = None",
        "value is False"
      ],
      answer: 1,
      explanation: "Use is None to check whether a variable refers to the None object."
    },
    {
      question: "What does is not check?",
      options: [
        "Whether values are equal",
        "Whether references point to different objects",
        "Whether a variable is an integer",
        "Whether a string is empty"
      ],
      answer: 1,
      explanation: "is not returns True when the references do not point to the same object."
    }
  ],

  takeaways: [
    "Python has two identity operators: is and is not.",
    "is checks whether two references point to the same object.",
    "is not checks whether two references point to different objects.",
    "== compares values, while is checks object identity.",
    "Use is None and is not None to check for None.",
    "The id() function returns an object's identity during its lifetime."
  ],

  teacherNotes: "Start by writing two lists with the same values on the board. Ask students whether they are equal. Then demonstrate == and is to show the difference between equality and identity. Explain that second = first creates another reference to the same object, not a new copy. Use append() to demonstrate how changing one reference affects the other. Then introduce is None, which is a very common real-world use in application development. Explain id() briefly as a way to inspect object identity, but avoid presenting it as a permanent memory address. Important: do not teach students to use is for ordinary value comparisons such as strings and numbers. Use == for value comparison and is for identity comparison.",

  teachingTime: "35-45 minutes"
};