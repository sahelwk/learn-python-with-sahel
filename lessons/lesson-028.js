window.lessonData = window.lessonData || {};
window.lessonData[28] = {
  id: 28,
  title: "Membership Operators",
  category: "Python Operators",
  contentStatus: "authored",

  introduction: "Membership operators are used to check whether a value exists in a sequence or collection, such as a string, list, tuple, set, or dictionary.",

  definition: "Membership operators check whether a value exists in a collection or sequence. Python provides two membership operators: in and not in.",

  whyItMatters: "Membership operators help programmers search for information, check user permissions, validate input, and determine whether an item exists in a collection.",

  objectives: [
    "Understand the purpose of membership operators.",
    "Recognize the in and not in operators.",
    "Check whether a value exists in a string.",
    "Use membership operators with lists, tuples, sets, and dictionaries.",
    "Apply membership operators in practical programs."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Membership Operators?",
      body: "Membership operators check whether a value exists inside another object, such as a string or collection.",
      bullets: [
        "Check whether an item exists.",
        "Search inside collections.",
        "Return True or False.",
        "Python has two membership operators."
      ]
    },
    {
      kicker: "02 · The Two Operators",
      title: "in and not in",
      body: "Python provides two membership operators to check whether a value exists or does not exist.",
      bullets: [
        "in: Returns True if the value exists.",
        "not in: Returns True if the value does not exist.",
        "Both operators return Boolean values."
      ],
      code: "numbers = [10, 20, 30, 40]\n\nprint(20 in numbers)\nprint(50 in numbers)\nprint(50 not in numbers)",
      output: "True\nFalse\nTrue"
    },
    {
      kicker: "03 · The in Operator",
      title: "Checking Membership with in",
      body: "Use in to check whether a specific value exists in a collection.",
      bullets: [
        "Write the value first.",
        "Use the in operator.",
        "Write the collection after in.",
        "The result is True or False."
      ],
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nprint(\"Apple\" in fruits)\nprint(\"Mango\" in fruits)",
      output: "True\nFalse"
    },
    {
      kicker: "04 · The not in Operator",
      title: "Checking Membership with not in",
      body: "Use not in to check whether a value is missing from a collection.",
      bullets: [
        "Returns True when the value is absent.",
        "Returns False when the value exists.",
        "Useful for checking missing information."
      ],
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nprint(\"Mango\" not in fruits)\nprint(\"Apple\" not in fruits)",
      output: "True\nFalse"
    },
    {
      kicker: "05 · Strings",
      title: "Membership in Strings",
      body: "The in and not in operators can check whether a character or sequence of characters exists inside a string.",
      bullets: [
        "Check individual characters.",
        "Check complete words or parts of text.",
        "String membership is case-sensitive."
      ],
      code: "message = \"Python Programming\"\n\nprint(\"Python\" in message)\nprint(\"Java\" in message)\nprint(\"python\" in message)",
      output: "True\nFalse\nFalse"
    },
    {
      kicker: "06 · Lists",
      title: "Membership in Lists",
      body: "Check whether an item exists among the elements of a list.",
      bullets: [
        "Useful for searching items.",
        "Works with numbers and text.",
        "Returns True or False."
      ],
      code: "students = [\"Ahmad\", \"Ali\", \"Sara\"]\n\nprint(\"Ali\" in students)\nprint(\"Omar\" not in students)",
      output: "True\nTrue"
    },
    {
      kicker: "07 · Tuples",
      title: "Membership in Tuples",
      body: "Membership operators also work with tuples.",
      bullets: [
        "Check whether a value exists.",
        "The tuple can contain different data types.",
        "The result is Boolean."
      ],
      code: "colors = (\"Red\", \"Green\", \"Blue\")\n\nprint(\"Green\" in colors)\nprint(\"Yellow\" not in colors)",
      output: "True\nTrue"
    },
    {
      kicker: "08 · Sets",
      title: "Membership in Sets",
      body: "Use membership operators to check whether an element exists in a set.",
      bullets: [
        "Sets store unique values.",
        "Membership checks are commonly efficient.",
        "Useful for checking available options."
      ],
      code: "allowed_roles = {\"admin\", \"editor\", \"viewer\"}\n\nprint(\"admin\" in allowed_roles)\nprint(\"guest\" not in allowed_roles)",
      output: "True\nTrue"
    },
    {
      kicker: "09 · Dictionaries",
      title: "Membership in Dictionaries",
      body: "By default, membership operators check dictionary keys, not values.",
      bullets: [
        "in checks whether a key exists.",
        "not in checks whether a key is missing.",
        "Use .values() to search dictionary values.",
        "Use .items() to search key-value pairs."
      ],
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 20,\n    \"city\": \"Kabul\"\n}\n\nprint(\"name\" in student)\nprint(\"Ahmad\" in student)\nprint(\"Ahmad\" in student.values())",
      output: "True\nFalse\nTrue"
    },
    {
      kicker: "10 · Case Sensitivity",
      title: "Uppercase and Lowercase Matter",
      body: "String membership checks are case-sensitive.",
      bullets: [
        "\"Python\" and \"python\" are different text.",
        "Check the correct capitalization.",
        "Use lower() when you need case-insensitive matching."
      ],
      code: "language = \"Python\"\n\nprint(\"Python\" in language)\nprint(\"python\" in language)\nprint(\"python\" in language.lower())",
      output: "True\nFalse\nTrue"
    },
    {
      kicker: "11 · Practical Example",
      title: "Check a Student's Subject",
      body: "A program can check whether a student is registered for a particular subject.",
      bullets: [
        "Store subjects in a list.",
        "Check whether a subject exists.",
        "Display an appropriate message."
      ],
      code: "subjects = [\"Python\", \"English\", \"Mathematics\"]\n\nif \"Python\" in subjects:\n    print(\"Student is registered for Python.\")\nelse:\n    print(\"Student is not registered for Python.\")",
      output: "Student is registered for Python."
    },
    {
      kicker: "12 · Practical Example",
      title: "Check an Allowed Role",
      body: "A simple permission check can determine whether a user's role is allowed.",
      bullets: [
        "Store allowed roles in a set.",
        "Check the user's role with in.",
        "Use the result in a condition."
      ],
      code: "allowed_roles = {\"admin\", \"manager\"}\nuser_role = \"manager\"\n\nif user_role in allowed_roles:\n    print(\"Access allowed.\")\nelse:\n    print(\"Access denied.\")",
      output: "Access allowed."
    },
    {
      kicker: "13 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Understand what is being searched and where membership is checked.",
      bullets: [
        "Forgetting that string checks are case-sensitive.",
        "Searching for dictionary values without using .values().",
        "Confusing in with is.",
        "Checking a partial word when an exact list item is expected.",
        "Using the wrong collection."
      ],
      code: "student = {\"name\": \"Ahmad\", \"age\": 20}\n\nprint(\"name\" in student)\nprint(\"Ahmad\" in student)\nprint(\"Ahmad\" in student.values())",
      output: "True\nFalse\nTrue"
    },
    {
      kicker: "14 · Practice",
      title: "Classroom Exercise",
      body: "Create a simple program to check products in a shopping list.",
      bullets: [
        "Create a list of five product names.",
        "Check whether \"Milk\" exists using in.",
        "Check whether \"Bread\" is missing using not in.",
        "Ask the user to enter a product name.",
        "Display whether the product exists."
      ]
    },
    {
      kicker: "15 · Summary",
      title: "What Did We Learn?",
      body: "Membership operators help us check whether values exist in strings and collections.",
      bullets: [
        "in checks whether a value exists.",
        "not in checks whether a value is absent.",
        "They work with strings, lists, tuples, sets, and dictionaries.",
        "Dictionary membership checks keys by default.",
        "String membership is case-sensitive.",
        "Both operators return True or False."
      ]
    }
  ],

  example: {
    explanation: "This example demonstrates membership checks in a list, string, and dictionary.",
    code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\nmessage = \"Welcome to Python\"\nstudent = {\"name\": \"Ahmad\", \"age\": 20}\n\nprint(\"Apple\" in fruits)\nprint(\"Mango\" not in fruits)\nprint(\"Python\" in message)\nprint(\"name\" in student)\nprint(\"Ahmad\" in student.values())",
    language: "python",
    output: "True\nTrue\nTrue\nTrue\nTrue"
  },

  commonMistakes: [
    "Confusing in with the is identity operator.",
    "Forgetting that not in returns True when an item is absent.",
    "Expecting string membership to ignore uppercase and lowercase differences.",
    "Searching for dictionary values directly with in instead of using .values().",
    "Assuming membership checks in a dictionary search both keys and values.",
    "Confusing a complete list item with a substring inside a string.",
    "Forgetting that membership operators return Boolean values."
  ],

  exercise: {
    question: "Create a shopping list containing five products. Ask the user to enter a product name. Use in to check whether the product exists in the shopping list. If it exists, print \"Product found.\" Otherwise, print \"Product not found.\" Also use not in to check whether \"Milk\" is missing from the list.",
    hint: "Use input() to receive the product name, then write if product_name in shopping_list."
  },

  solution: {
    explanation: "The program stores product names in a list and receives a product name from the user. The in operator checks whether the entered product exists. The not in operator checks whether Milk is absent.",
    code: "shopping_list = [\"Milk\", \"Bread\", \"Eggs\", \"Rice\", \"Sugar\"]\n\nproduct_name = input(\"Enter a product name: \")\n\nif product_name in shopping_list:\n    print(\"Product found.\")\nelse:\n    print(\"Product not found.\")\n\nprint(\"Milk is missing:\", \"Milk\" not in shopping_list)",
    output: "Enter a product name: Bread\nProduct found.\nMilk is missing: False"
  },

  quiz: [
    {
      question: "How many membership operators does Python have?",
      options: ["One", "Two", "Three", "Four"],
      answer: 1,
      explanation: "Python has two membership operators: in and not in."
    },
    {
      question: "What does the in operator check?",
      options: [
        "Whether two objects are identical",
        "Whether a value exists in a collection",
        "Whether two values are equal",
        "Whether a number is positive"
      ],
      answer: 1,
      explanation: "in checks whether a value exists in a sequence or collection."
    },
    {
      question: "What is the output?\nnumbers = [10, 20, 30]\nprint(20 in numbers)",
      options: ["True", "False", "None", "Error"],
      answer: 0,
      explanation: "20 exists in the numbers list."
    },
    {
      question: "What is the output?\nfruits = [\"Apple\", \"Banana\"]\nprint(\"Mango\" not in fruits)",
      options: ["True", "False", "None", "Error"],
      answer: 0,
      explanation: "Mango is not present in the list, so not in returns True."
    },
    {
      question: "What does membership checking search in a dictionary by default?",
      options: ["Values", "Keys", "Both keys and values", "Only numbers"],
      answer: 1,
      explanation: "Membership operators check dictionary keys by default."
    },
    {
      question: "How can we check whether \"Ahmad\" exists among dictionary values?",
      options: [
        "\"Ahmad\" in student.keys()",
        "\"Ahmad\" in student.values()",
        "\"Ahmad\" is student",
        "\"Ahmad\" not student"
      ],
      answer: 1,
      explanation: "The values() method provides the dictionary values for membership checking."
    },
    {
      question: "Are string membership checks case-sensitive?",
      options: ["Yes", "No", "Only for numbers", "Only for lists"],
      answer: 0,
      explanation: "Python distinguishes uppercase and lowercase characters in strings."
    },
    {
      question: "What type of result do membership operators return?",
      options: ["String", "Integer", "Boolean", "List"],
      answer: 2,
      explanation: "Membership operators return either True or False."
    }
  ],

  takeaways: [
    "Python has two membership operators: in and not in.",
    "in checks whether a value exists in a collection.",
    "not in checks whether a value is absent.",
    "Membership operators work with strings, lists, tuples, sets, and dictionaries.",
    "Dictionary membership checks keys by default.",
    "Use .values() to search dictionary values.",
    "Membership operators return True or False."
  ],

  teacherNotes: "Start by asking students how they check whether a name exists in a list of students or whether a product exists in a shopping list. Introduce in and not in using simple list examples. Then demonstrate membership in strings, emphasizing that string checks are case-sensitive. Explain membership in dictionaries carefully: in checks keys by default, not values. Demonstrate .values() to search dictionary values. Connect the lesson to web development by showing a simple user-role permission check. Finish with the shopping list exercise. Ask students to predict each result before running the code.",

  teachingTime: "40-50 minutes"
};