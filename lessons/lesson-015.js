
window.lessonData = window.lessonData || {};
window.lessonData[15] = {
  id: 15,
  title: "Variables",
  category: "Python Basics",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn how to create variables, store different types of values, and use variables in Python programs.",

  definition:
    "A variable is a named reference used to store and access a value in a Python program.",

  whyItMatters:
    "Variables allow programmers to store information, reuse values, perform calculations, and build useful programs.",

  objectives: [
    "Understand what a variable is.",
    "Learn how to create and use variables.",
    "Understand different types of variable values.",
    "Learn how to update variable values.",
    "Understand variable naming rules.",
    "Use variables in simple Python programs."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Variables?",
      body: "Variables are used to store and access information in a program.",
      bullets: [
        "Give information a name.",
        "Store values.",
        "Reuse information in code."
      ]
    },
    {
      kicker: "02 · Basic Syntax",
      title: "How to Create a Variable",
      body: "Use a variable name, the = sign, and a value.",
      code: "name = \"Ahmad\"\nage = 20",
      bullets: [
        "name is a variable.",
        "= assigns a value.",
        "\"Ahmad\" is a string value.",
        "20 is an integer value."
      ]
    },
    {
      kicker: "03 · String",
      title: "String Variable",
      body: "A string stores text.",
      code: "student_name = \"Ahmad\"\nprint(student_name)",
      output: "Ahmad",
      bullets: [
        "Used for names.",
        "Used for addresses.",
        "Text is written inside quotes."
      ]
    },
    {
      kicker: "04 · Integer",
      title: "Integer Variable",
      body: "An integer stores a whole number without a decimal point.",
      code: "student_age = 20\nprint(student_age)",
      output: "20",
      bullets: [
        "Used for age.",
        "Used for student counts.",
        "Used for whole-number calculations."
      ]
    },
    {
      kicker: "05 · Float",
      title: "Float Variable",
      body: "A float stores a number with a decimal point.",
      code: "product_price = 99.50\nprint(product_price)",
      output: "99.5",
      bullets: [
        "Used for prices.",
        "Used for measurements.",
        "Used for decimal calculations."
      ]
    },
    {
      kicker: "06 · Boolean",
      title: "Boolean Variable",
      body: "A Boolean stores one of two values: True or False.",
      code: "is_student = True\nprint(is_student)",
      output: "True",
      bullets: [
        "True means yes.",
        "False means no.",
        "Useful for conditions."
      ]
    },
    {
      kicker: "07 · List",
      title: "List Variable",
      body: "A list stores multiple values in one variable.",
      code: "student_names = [\"Ahmad\", \"Ali\", \"Sara\"]\nprint(student_names)",
      output: "['Ahmad', 'Ali', 'Sara']",
      bullets: [
        "Stores multiple items.",
        "Keeps items in order.",
        "Written inside square brackets."
      ]
    },
    {
      kicker: "08 · Tuple",
      title: "Tuple Variable",
      body: "A tuple stores multiple values in an ordered collection.",
      code: "location = (\"Kabul\", \"Afghanistan\")\nprint(location)",
      output: "('Kabul', 'Afghanistan')",
      bullets: [
        "Stores multiple items.",
        "Keeps items in order.",
        "Written inside parentheses.",
        "Cannot be changed after creation."
      ]
    },
    {
      kicker: "09 · Dictionary",
      title: "Dictionary Variable",
      body: "A dictionary stores information as key-value pairs.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 20\n}\n\nprint(student[\"name\"])",
      output: "Ahmad",
      bullets: [
        "Stores related information.",
        "Uses keys and values.",
        "Written inside curly brackets."
      ]
    },
    {
      kicker: "10 · Set",
      title: "Set Variable",
      body: "A set stores unique values without duplicates.",
      code: "cities = {\"Kabul\", \"Herat\", \"Kabul\"}\nprint(cities)",
      output: "{'Kabul', 'Herat'}",
      bullets: [
        "Does not keep duplicate values.",
        "Does not guarantee a fixed display order.",
        "Written inside curly brackets."
      ]
    },
    {
      kicker: "11 · None",
      title: "None Value",
      body: "None represents the absence of a value.",
      code: "middle_name = None\nprint(middle_name)",
      output: "None",
      bullets: [
        "Means no value is assigned yet.",
        "Different from zero.",
        "Different from an empty string."
      ]
    },
    {
      kicker: "12 · Variable Assignment",
      title: "Change a Variable Value",
      body: "A variable can receive a new value.",
      code: "score = 50\nprint(score)\n\nscore = 90\nprint(score)",
      output: "50\n90",
      bullets: [
        "Create a variable.",
        "Assign a new value.",
        "The latest value is used."
      ]
    },
    {
      kicker: "13 · Multiple Variables",
      title: "Create Multiple Variables",
      body: "You can create several variables in one program.",
      code: "name = \"Ahmad\"\nage = 20\ncity = \"Kabul\"\n\nprint(name)\nprint(age)\nprint(city)",
      output: "Ahmad\n20\nKabul",
      bullets: [
        "Each variable has its own name.",
        "Each variable can store a different value."
      ]
    },
    {
      kicker: "14 · Naming Rules",
      title: "Variable Naming Rules",
      body: "Choose meaningful names for your variables.",
      bullets: [
        "Use letters, numbers, and underscores.",
        "Do not start a name with a number.",
        "Do not use Python keywords.",
        "Variable names are case-sensitive.",
        "Use clear names such as student_name."
      ],
      code: "student_name = \"Ahmad\"\nstudent_age = 20"
    },
    {
      kicker: "15 · Type Checking",
      title: "Check a Variable Type",
      body: "Use type() to find the type of a value.",
      code: "price = 99.50\nname = \"Ahmad\"\nage = 20\n\nprint(type(price))\nprint(type(name))\nprint(type(age))",
      output: "<class 'float'>\n<class 'str'>\n<class 'int'>",
      bullets: [
        "type() checks the data type.",
        "It helps understand stored values."
      ]
    },
    {
      kicker: "16 · Practical Example",
      title: "Student Information",
      body: "Use different variables to store student information.",
      code: "student_name = \"Ahmad\"\nstudent_age = 20\nstudent_marks = 85\nis_passed = True\n\nprint(student_name)\nprint(student_age)\nprint(student_marks)\nprint(is_passed)",
      output: "Ahmad\n20\n85\nTrue",
      bullets: [
        "Name is a string.",
        "Age and marks are integers.",
        "Passed status is Boolean."
      ]
    },
    {
      kicker: "17 · Practice",
      title: "Create Your Own Variables",
      body: "Create variables for a simple shop product.",
      code: "product_name = \"Laptop\"\nproduct_price = 750.50\nproduct_quantity = 3\n\nprint(product_name)\nprint(product_price)\nprint(product_quantity)",
      output: "Laptop\n750.5\n3",
      bullets: [
        "Store a product name.",
        "Store its price.",
        "Store its quantity."
      ]
    },
    {
      kicker: "18 · Review",
      title: "What Did We Learn?",
      body: "Variables help us store and manage information in Python.",
      bullets: [
        "Create variables using =.",
        "Store different types of values.",
        "Change variable values.",
        "Use clear variable names.",
        "Check types with type()."
      ]
    }
  ],

  example: {
    explanation:
      "This example demonstrates different Python value types using separate variables. Students should identify each variable and explain what type of value it stores.",
    code:
      "student_name = \"Ahmad\"\nstudent_age = 20\nstudent_average = 87.5\nis_passed = True\nsubjects = [\"Python\", \"Math\", \"English\"]\n\nprint(student_name)\nprint(student_age)\nprint(student_average)\nprint(is_passed)\nprint(subjects)",
    language: "python",
    output:
      "Ahmad\n20\n87.5\nTrue\n['Python', 'Math', 'English']"
  },

  commonMistakes: [
    "Using a variable before assigning a value to it.",
    "Starting a variable name with a number.",
    "Using spaces inside variable names instead of underscores.",
    "Forgetting quotation marks around string values.",
    "Confusing = with ==.",
    "Thinking that Python variable names are not case-sensitive.",
    "Using unclear variable names.",
    "Expecting a set to display values in a fixed order."
  ],

  exercise: {
    question:
      "Create a small product information program. Store a product name, price, quantity, availability status, and product categories in separate variables. Display all the information. Also calculate the total price using price multiplied by quantity.",
    hint:
      "Use a string for the product name, a float for the price, an integer for quantity, a Boolean for availability, and a list for categories."
  },

  solution: {
    explanation:
      "This solution uses different variable types to store product information. It also calculates the total cost by multiplying the price by the quantity.",
    code:
      "product_name = \"Laptop\"\nproduct_price = 750.50\nproduct_quantity = 2\nis_available = True\nproduct_categories = [\"Electronics\", \"Computers\"]\n\ntotal_price = product_price * product_quantity\n\nprint(\"Product:\", product_name)\nprint(\"Price:\", product_price)\nprint(\"Quantity:\", product_quantity)\nprint(\"Available:\", is_available)\nprint(\"Categories:\", product_categories)\nprint(\"Total Price:\", total_price)",
    output:
      "Product: Laptop\nPrice: 750.5\nQuantity: 2\nAvailable: True\nCategories: ['Electronics', 'Computers']\nTotal Price: 1501.0"
  },

  quiz: [
    {
      question: "What is a variable used for?",
      options: [
        "To store and access values",
        "To close a program",
        "To install Python",
        "To delete files"
      ],
      answer: 0,
      explanation:
        "Variables give names to values so programs can store and use information."
    },
    {
      question: "Which symbol is used to assign a value to a variable?",
      options: [
        "==",
        "=",
        "!=",
        "+"
      ],
      answer: 1,
      explanation:
        "The = symbol assigns a value to a variable."
    },
    {
      question: "Which variable stores text?",
      options: [
        "age = 20",
        "price = 12.5",
        "name = \"Ahmad\"",
        "is_active = True"
      ],
      answer: 2,
      explanation:
        "Text values are strings and are written inside quotation marks."
    },
    {
      question: "Which data type stores True or False?",
      options: [
        "String",
        "Integer",
        "Float",
        "Boolean"
      ],
      answer: 3,
      explanation:
        "Boolean values are True and False."
    },
    {
      question: "Which is a valid Python variable name?",
      options: [
        "2student",
        "student name",
        "student_name",
        "class"
      ],
      answer: 2,
      explanation:
        "student_name is valid because it uses letters and an underscore and is not a Python keyword."
    },
    {
      question: "What does type(25) return?",
      options: [
        "str",
        "int",
        "float",
        "bool"
      ],
      answer: 1,
      explanation:
        "25 is a whole number, so its type is int."
    },
    {
      question: "What will this code print?",
      options: [
        "10",
        "20",
        "30",
        "Error"
      ],
      answer: 1,
      explanation:
        "The variable score is first assigned 10 and then updated to 20."
    }
  ],

  takeaways: [
    "Variables store and provide access to values.",
    "Use = to assign values.",
    "Python supports different data types.",
    "Use meaningful variable names.",
    "Variable values can be updated.",
    "Use type() to check a value's data type."
  ],

  teacherNotes:
    "Begin with a simple real-life explanation: a variable is like a named place where we keep information. Use student names, ages, product prices, and quantities as examples. Teach the main value types one by one: str, int, float, bool, list, tuple, dict, and set. Explain None separately as the absence of a value. For every type, show its dedicated example and ask students what value it stores. Explain that Python is dynamically typed, so a variable can later receive a value of another type. Demonstrate variable assignment and updating. Explain naming rules and the difference between = and ==. Avoid going deeply into memory addresses or advanced object references. Finish with the product information exercise.",

  teachingTime: "60-75 minutes"
};
