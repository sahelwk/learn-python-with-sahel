window.lessonData = window.lessonData || {};
window.lessonData[18] = {
  id: 18,
  title: "Data Types",
  category: "Python Basics",
  contentStatus: "authored",

  introduction: "In Python, every value has a data type. Data types tell Python what kind of information a value represents, such as text, numbers, or collections of values.",

  definition: "A data type is a classification that tells Python what kind of value is stored in a variable.",

  whyItMatters: "Understanding data types helps programmers store information correctly, perform valid operations, and avoid common programming errors.",

  objectives: [
    "Understand what data types are and why they are important.",
    "Recognize the main built-in Python data types.",
    "Use type() to identify the type of a value.",
    "Choose the correct data type for different kinds of information."
  ],

  slides: [
    {
      kicker: "Introduction",
      title: "What Are Data Types?",
      body: "Data types describe the kind of information stored in a variable.",
      bullets: [
        "Text",
        "Whole numbers",
        "Decimal numbers",
        "True or False values",
        "Collections of values"
      ]
    },
    {
      kicker: "Basic Concept",
      title: "Why Do We Need Data Types?",
      body: "Python needs to understand what kind of information we are working with.",
      bullets: [
        "To store information correctly",
        "To perform suitable operations",
        "To organize program data",
        "To prevent type-related errors"
      ]
    },
    {
      kicker: "Text",
      title: "1. String (str)",
      body: "A string stores text. Text values are written inside quotation marks.",
      bullets: [
        "Names",
        "Addresses",
        "Email addresses",
        "Messages"
      ],
      code: "student_name = \"Ahmad\"\ncity = \"Kabul\"\nprint(student_name)\nprint(city)"
    },
    {
      kicker: "Numbers",
      title: "2. Integer (int)",
      body: "An integer stores whole numbers without a decimal point.",
      bullets: [
        "Age",
        "Number of students",
        "Product quantity",
        "Year"
      ],
      code: "age = 25\nstudents = 30\nyear = 2026\nprint(age)"
    },
    {
      kicker: "Numbers",
      title: "3. Float (float)",
      body: "A float stores numbers that contain a decimal point.",
      bullets: [
        "Product price",
        "Temperature",
        "Height",
        "Average marks"
      ],
      code: "price = 150.50\ntemperature = 25.5\naverage = 87.75\nprint(price)"
    },
    {
      kicker: "Logical Values",
      title: "4. Boolean (bool)",
      body: "A Boolean represents one of two values: True or False.",
      bullets: [
        "Is a user active?",
        "Is a student registered?",
        "Is a product available?",
        "Conditions in programs"
      ],
      code: "is_active = True\nis_registered = False\nprint(is_active)"
    },
    {
      kicker: "Collections",
      title: "5. List (list)",
      body: "A list stores multiple values in one variable. Lists are ordered and can be changed.",
      bullets: [
        "Use square brackets []",
        "Can contain different data types",
        "Can be modified",
        "Can contain duplicate values"
      ],
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\nfruits.append(\"Mango\")\nprint(fruits)"
    },
    {
      kicker: "Collections",
      title: "6. Tuple (tuple)",
      body: "A tuple stores multiple values in an ordered collection that cannot be changed after creation.",
      bullets: [
        "Use parentheses ()",
        "Ordered collection",
        "Cannot be modified",
        "Can contain duplicate values"
      ],
      code: "coordinates = (34.5, 69.2)\nprint(coordinates)"
    },
    {
      kicker: "Collections",
      title: "7. Dictionary (dict)",
      body: "A dictionary stores information as key-value pairs.",
      bullets: [
        "Uses curly brackets {}",
        "Stores data with keys and values",
        "Values can be accessed by their keys",
        "Useful for student and product information"
      ],
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 20,\n    \"city\": \"Kabul\"\n}\nprint(student[\"name\"])"
    },
    {
      kicker: "Collections",
      title: "8. Set (set)",
      body: "A set stores unique values. It does not keep duplicate values.",
      bullets: [
        "Uses curly brackets {}",
        "Does not allow duplicate values",
        "Unordered collection",
        "Useful for removing duplicates"
      ],
      code: "numbers = {1, 2, 3, 2, 1}\nprint(numbers)"
    },
    {
      kicker: "Special Value",
      title: "9. None (NoneType)",
      body: "None represents the absence of a value.",
      bullets: [
        "Means no value is currently assigned",
        "Different from 0",
        "Different from an empty string",
        "Useful when a value is not available yet"
      ],
      code: "result = None\nprint(result)\nprint(type(result))"
    },
    {
      kicker: "Type Checking",
      title: "How to Check a Data Type?",
      body: "Python provides the built-in type() function to identify the type of a value.",
      bullets: [
        "type(\"Hello\")",
        "type(100)",
        "type(10.5)",
        "type(True)"
      ],
      code: "name = \"Ahmad\"\nage = 20\nprice = 50.5\nis_active = True\n\nprint(type(name))\nprint(type(age))\nprint(type(price))\nprint(type(is_active))"
    },
    {
      kicker: "Comparison",
      title: "Different Types, Different Values",
      body: "The same variable can store different types of values at different times.",
      bullets: [
        "name = \"Ahmad\" → str",
        "age = 20 → int",
        "price = 50.5 → float",
        "is_active = True → bool"
      ]
    },
    {
      kicker: "Important Difference",
      title: "List vs Tuple vs Set vs Dictionary",
      body: "These four types store collections, but they organize information differently.",
      bullets: [
        "List: ordered and changeable",
        "Tuple: ordered and unchangeable",
        "Set: unique values, no guaranteed order",
        "Dictionary: key-value pairs"
      ]
    },
    {
      kicker: "Practical Example",
      title: "Student Information",
      body: "A student record can use several data types together.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 20,\n    \"average\": 87.5,\n    \"is_passed\": True,\n    \"subjects\": [\"Python\", \"English\"]\n}\n\nprint(student)"
    },
    {
      kicker: "Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Choosing the wrong type can cause unexpected results.",
      bullets: [
        "Writing text without quotation marks",
        "Confusing 10 with \"10\"",
        "Writing True as true",
        "Using an empty {} when you need an empty set"
      ],
      code: "age = 20       # Integer\nage_text = \"20\" # String\n\nprint(type(age))\nprint(type(age_text))"
    },
    {
      kicker: "Practice",
      title: "Classroom Exercise",
      body: "Create variables for a product and use suitable data types.",
      bullets: [
        "Product name",
        "Product price",
        "Product quantity",
        "Product availability",
        "A list of product categories"
      ]
    },
    {
      kicker: "Summary",
      title: "What Did We Learn?",
      body: "Python has different built-in data types for storing different kinds of information.",
      bullets: [
        "str: text",
        "int: whole numbers",
        "float: decimal numbers",
        "bool: True or False",
        "list, tuple, dict, set: collections",
        "NoneType: absence of a value",
        "type(): checks a value's type"
      ]
    }
  ],

  example: {
    explanation: "This example creates variables with different data types and uses type() to identify each type.",
    code: "name = \"Ahmad\"\nage = 20\nprice = 150.50\nis_student = True\nsubjects = [\"Python\", \"English\"]\n\nprint(type(name))\nprint(type(age))\nprint(type(price))\nprint(type(is_student))\nprint(type(subjects))",
    language: "python",
    output: "<class 'str'>\n<class 'int'>\n<class 'float'>\n<class 'bool'>\n<class 'list'>"
  },

  commonMistakes: [
    "Confusing a number stored as text, such as \"20\", with an integer such as 20.",
    "Writing True and False in lowercase instead of using Python's correct capitalization.",
    "Thinking that a list and a tuple can both be modified.",
    "Expecting a set to preserve duplicates or a fixed order.",
    "Using an empty dictionary {} when an empty set is needed. Use set() for an empty set.",
    "Thinking that None is the same as zero, False, or an empty string."
  ],

  exercise: {
    question: "Create a product information program. Store the product name, price, quantity, availability, and product categories using suitable data types. Then print the type of each variable using type().",
    hint: "Use str for the name, float for the price, int for the quantity, bool for availability, and list for categories."
  },

  solution: {
    explanation: "Each variable uses a data type that matches the information it stores. The type() function displays the type of each variable.",
    code: "product_name = \"Laptop\"\nprice = 750.50\nquantity = 10\nis_available = True\ncategories = [\"Electronics\", \"Computers\"]\n\nprint(type(product_name))\nprint(type(price))\nprint(type(quantity))\nprint(type(is_available))\nprint(type(categories))",
    output: "<class 'str'>\n<class 'float'>\n<class 'int'>\n<class 'bool'>\n<class 'list'>"
  },

  quiz: [
    {
      question: "Which data type is used to store text?",
      options: ["int", "str", "float", "bool"],
      answer: 1,
      explanation: "str is the Python data type for text."
    },
    {
      question: "What is the data type of 25.5?",
      options: ["int", "str", "float", "bool"],
      answer: 2,
      explanation: "25.5 contains a decimal point, so it is a float."
    },
    {
      question: "Which value is a Boolean?",
      options: ["\"True\"", "100", "True", "10.5"],
      answer: 2,
      explanation: "True without quotation marks is a Boolean value."
    },
    {
      question: "Which collection cannot be changed after creation?",
      options: ["list", "dict", "tuple", "set"],
      answer: 2,
      explanation: "A tuple is an ordered collection that cannot be modified."
    },
    {
      question: "Which function checks the type of a value?",
      options: ["print()", "input()", "type()", "len()"],
      answer: 2,
      explanation: "The type() function returns the type of a value."
    }
  ],

  takeaways: [
    "Every Python value has a data type.",
    "str stores text, int stores whole numbers, and float stores decimal numbers.",
    "bool stores True or False.",
    "List, tuple, dictionary, and set are collection data types.",
    "None represents the absence of a value.",
    "Use type() to identify a value's data type."
  ],

  teacherNotes: "Start by asking students what kinds of information they use in daily life: names, ages, prices, and yes/no answers. Explain that Python stores these using different data types. Teach the basic types first: str, int, float, and bool. Then introduce collection types one by one with separate examples. Explain the difference between list and tuple, and between set and dictionary. Demonstrate type() in the terminal. Make sure students understand that 20 and \"20\" are different types. Finish with the product exercise and ask students to explain why they selected each type. Avoid teaching type conversion in depth here; it can be covered in a later lesson.",

  teachingTime: "45-60 minutes"
};