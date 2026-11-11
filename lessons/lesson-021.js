window.lessonData = window.lessonData || {};
window.lessonData[21] = {
  id: 21,
  title: "Boolean Values",
  category: "Python Basics",
  contentStatus: "authored",

  introduction: "Boolean values represent one of two possible states: True or False. They are essential for making decisions and controlling the flow of Python programs.",

  definition: "A Boolean (bool) is a built-in Python data type that can store only two values: True or False.",

  whyItMatters: "Boolean values help programs make decisions, check conditions, control access, validate information, and determine whether an action should happen.",

  objectives: [
    "Understand what Boolean values are.",
    "Recognize True and False in Python.",
    "Use comparison operators to produce Boolean results.",
    "Understand logical operators: and, or, and not.",
    "Use Boolean expressions in practical examples.",
    "Check the Boolean type using type()."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Boolean Values?",
      body: "Boolean values represent only two possible states: True or False.",
      bullets: [
        "True means a condition is correct.",
        "False means a condition is not correct.",
        "Boolean values are used in decision-making.",
        "Python uses the bool data type."
      ],
      code: "is_active = True\nis_blocked = False\n\nprint(is_active)\nprint(is_blocked)"
    },
    {
      kicker: "02 · Basic Concept",
      title: "True and False",
      body: "Python uses True and False to represent logical values.",
      bullets: [
        "True starts with a capital T.",
        "False starts with a capital F.",
        "Do not put quotation marks around Boolean values.",
        "\"True\" is a string, not a Boolean."
      ],
      code: "active = True\nname = \"True\"\n\nprint(type(active))\nprint(type(name))",
      output: "<class 'bool'>\n<class 'str'>"
    },
    {
      kicker: "03 · Boolean Type",
      title: "The bool Data Type",
      body: "The bool type stores Boolean values.",
      bullets: [
        "Only two Boolean values exist: True and False.",
        "Use type() to check a value's type.",
        "Boolean variables often use names such as is_active or has_permission."
      ],
      code: "is_logged_in = True\nhas_permission = False\n\nprint(type(is_logged_in))\nprint(type(has_permission))",
      output: "<class 'bool'>\n<class 'bool'>"
    },
    {
      kicker: "04 · Comparison",
      title: "Comparison Operators",
      body: "Comparison operators compare two values and return True or False.",
      bullets: [
        "== Equal to",
        "!= Not equal to",
        "> Greater than",
        "< Less than",
        ">= Greater than or equal to",
        "<= Less than or equal to"
      ],
      code: "print(10 == 10)\nprint(10 != 5)\nprint(10 > 5)\nprint(3 < 2)\nprint(10 >= 10)\nprint(5 <= 3)",
      output: "True\nTrue\nTrue\nFalse\nTrue\nFalse"
    },
    {
      kicker: "05 · Equality",
      title: "Equal (==) and Not Equal (!=)",
      body: "These operators check whether two values are equal or different.",
      bullets: [
        "== returns True when values are equal.",
        "!= returns True when values are different.",
        "Do not confuse == with =."
      ],
      code: "age = 20\n\nprint(age == 20)\nprint(age != 18)",
      output: "True\nTrue"
    },
    {
      kicker: "06 · Greater and Less",
      title: "Compare Numerical Values",
      body: "Use greater-than and less-than operators to compare numbers.",
      bullets: [
        "> checks whether the left value is greater.",
        "< checks whether the left value is smaller.",
        ">= and <= also include equality."
      ],
      code: "price = 150\n\nprint(price > 100)\nprint(price < 100)\nprint(price >= 150)\nprint(price <= 120)",
      output: "True\nFalse\nTrue\nFalse"
    },
    {
      kicker: "07 · Practical Example",
      title: "Checking a Student's Result",
      body: "A program can use a comparison to determine whether a student passed.",
      bullets: [
        "Passing mark is 50.",
        "Compare the student's mark with 50.",
        "The comparison returns True or False."
      ],
      code: "marks = 75\npassed = marks >= 50\n\nprint(passed)",
      output: "True"
    },
    {
      kicker: "08 · Logical Operators",
      title: "and, or, and not",
      body: "Logical operators combine or reverse Boolean conditions.",
      bullets: [
        "and: True when both conditions are True.",
        "or: True when at least one condition is True.",
        "not: reverses a Boolean value."
      ],
      code: "print(True and True)\nprint(True and False)\nprint(True or False)\nprint(not True)",
      output: "True\nFalse\nTrue\nFalse"
    },
    {
      kicker: "09 · AND Operator",
      title: "The and Operator",
      body: "The and operator returns True only when both conditions are True.",
      bullets: [
        "Both conditions must be True.",
        "If one condition is False, the result is False.",
        "Useful when multiple requirements must be met."
      ],
      code: "age = 25\nhas_id = True\n\ncan_enter = age >= 18 and has_id\nprint(can_enter)",
      output: "True"
    },
    {
      kicker: "10 · OR Operator",
      title: "The or Operator",
      body: "The or operator returns True when at least one condition is True.",
      bullets: [
        "Both conditions can be True.",
        "Only one condition needs to be True.",
        "The result is False when both conditions are False."
      ],
      code: "has_email = False\nhas_phone = True\n\ncan_register = has_email or has_phone\nprint(can_register)",
      output: "True"
    },
    {
      kicker: "11 · NOT Operator",
      title: "The not Operator",
      body: "The not operator reverses a Boolean value.",
      bullets: [
        "not True becomes False.",
        "not False becomes True.",
        "Useful for checking the opposite of a condition."
      ],
      code: "is_blocked = False\n\nprint(not is_blocked)",
      output: "True"
    },
    {
      kicker: "12 · Combining Conditions",
      title: "Use Multiple Logical Conditions",
      body: "You can combine more than two conditions in one Boolean expression.",
      bullets: [
        "Use parentheses to make conditions clear.",
        "and requires every connected condition to be True.",
        "or requires at least one connected condition to be True."
      ],
      code: "age = 22\nmarks = 80\nhas_documents = True\n\neligible = (age >= 18) and (marks >= 50) and has_documents\nprint(eligible)",
      output: "True"
    },
    {
      kicker: "13 · Boolean from Strings",
      title: "Comparing Text",
      body: "Boolean results can also come from comparing strings.",
      bullets: [
        "Strings can be compared using == and !=.",
        "String comparison is case-sensitive.",
        "\"Python\" and \"python\" are different strings."
      ],
      code: "username = \"admin\"\n\nprint(username == \"admin\")\nprint(\"Python\" == \"python\")",
      output: "True\nFalse"
    },
    {
      kicker: "14 · Truthy and Falsy",
      title: "Boolean Conversion with bool()",
      body: "Python can convert other values into Boolean values using bool().",
      bullets: [
        "Empty strings are False.",
        "Zero is False.",
        "Empty collections are False.",
        "Most other values are True."
      ],
      code: "print(bool(0))\nprint(bool(1))\nprint(bool(\"\"))\nprint(bool(\"Python\"))\nprint(bool([]))\nprint(bool([1, 2]))",
      output: "False\nTrue\nFalse\nTrue\nFalse\nTrue"
    },
    {
      kicker: "15 · Important Difference",
      title: "Boolean vs Comparison",
      body: "A Boolean variable stores a logical value, while a comparison expression produces a Boolean result.",
      bullets: [
        "is_active = True stores a Boolean.",
        "age >= 18 produces a Boolean.",
        "Both can be used in conditions."
      ],
      code: "is_active = True\nage = 20\nis_adult = age >= 18\n\nprint(is_active)\nprint(is_adult)",
      output: "True\nTrue"
    },
    {
      kicker: "16 · Practical Example",
      title: "Login Permission",
      body: "A simple login check can combine username and password conditions.",
      code: "username = \"admin\"\npassword = \"12345\"\n\nis_valid = username == \"admin\" and password == \"12345\"\nprint(is_valid)",
      output: "True"
    },
    {
      kicker: "17 · Practical Example",
      title: "Product Availability",
      body: "A shopping system can check whether a product is available.",
      code: "quantity = 5\nis_active = True\n\nis_available = quantity > 0 and is_active\nprint(is_available)",
      output: "True"
    },
    {
      kicker: "18 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Boolean values and comparison operators must be written correctly.",
      bullets: [
        "Writing true or false in lowercase.",
        "Using = instead of == for comparison.",
        "Writing \"True\" instead of True.",
        "Misunderstanding the difference between and and or.",
        "Forgetting that comparisons return Boolean values."
      ],
      code: "age = 20\n\n# Correct comparison:\nprint(age == 20)\n\n# Correct Boolean value:\nis_active = True\nprint(is_active)",
      output: "True\nTrue"
    },
    {
      kicker: "19 · Practice",
      title: "Classroom Exercise",
      body: "Create a program that checks whether a student is eligible for a course.",
      bullets: [
        "Store the student's age.",
        "Store the student's marks.",
        "Store whether documents are complete.",
        "Check whether age is at least 18.",
        "Check whether marks are at least 50.",
        "Use and to combine all requirements."
      ]
    },
    {
      kicker: "20 · Summary",
      title: "What Did We Learn?",
      body: "Boolean values help Python programs evaluate conditions and make logical decisions.",
      bullets: [
        "Boolean values are True and False.",
        "The Boolean data type is bool.",
        "Comparison operators return Boolean results.",
        "and, or, and not combine or reverse conditions.",
        "bool() converts values to Boolean.",
        "Boolean expressions are essential for decision-making."
      ]
    }
  ],

  example: {
    explanation: "This example checks whether a student meets the requirements for passing a course. The program uses comparisons and the and operator.",
    code: "marks = 75\nattendance = 80\nhas_completed_homework = True\n\npassed_marks = marks >= 50\npassed_attendance = attendance >= 75\n\npassed_course = passed_marks and passed_attendance and has_completed_homework\n\nprint(\"Passed marks:\", passed_marks)\nprint(\"Passed attendance:\", passed_attendance)\nprint(\"Passed course:\", passed_course)",
    language: "python",
    output: "Passed marks: True\nPassed attendance: True\nPassed course: True"
  },

  commonMistakes: [
    "Writing true or false in lowercase instead of True or False.",
    "Putting quotation marks around True or False and accidentally creating strings.",
    "Confusing the assignment operator = with the comparison operator ==.",
    "Thinking that and returns True when only one condition is True.",
    "Thinking that or requires both conditions to be True.",
    "Forgetting that not reverses a Boolean value.",
    "Assuming that all non-empty or non-zero values behave like False.",
    "Ignoring case sensitivity when comparing strings."
  ],

  exercise: {
    question: "Create a student eligibility checker. Store the student's age, marks, and document status. A student is eligible only when their age is at least 18, marks are at least 50, and documents are complete. Use comparison operators and and to calculate eligibility. Also print each individual condition.",
    hint: "Use age >= 18, marks >= 50, and has_documents. Combine these conditions using and."
  },

  solution: {
    explanation: "The program checks each requirement separately. Then it combines all three Boolean results with and. The student is eligible only when every requirement is True.",
    code: "age = 22\nmarks = 75\nhas_documents = True\n\nage_condition = age >= 18\nmarks_condition = marks >= 50\n\naeligible = age_condition and marks_condition and has_documents\n\nprint(\"Age requirement:\", age_condition)\nprint(\"Marks requirement:\", marks_condition)\nprint(\"Documents complete:\", has_documents)\nprint(\"Eligible:\", aeligible)",
    output: "Age requirement: True\nMarks requirement: True\nDocuments complete: True\nEligible: True"
  },

  quiz: [
    {
      question: "How many possible values does the Python Boolean type have?",
      options: ["One", "Two", "Three", "Four"],
      answer: 1,
      explanation: "The Boolean type has two possible values: True and False."
    },
    {
      question: "Which one is a correct Boolean value in Python?",
      options: ["true", "false", "\"True\"", "True"],
      answer: 3,
      explanation: "Python uses capitalized True and False without quotation marks."
    },
    {
      question: "What is the result of 10 > 5?",
      options: ["False", "10", "True", "5"],
      answer: 2,
      explanation: "10 is greater than 5, so the result is True."
    },
    {
      question: "Which operator checks whether two values are equal?",
      options: ["=", "==", "!=", ">"],
      answer: 1,
      explanation: "The == operator compares two values for equality."
    },
    {
      question: "What is the result of True and False?",
      options: ["True", "False", "None", "Error"],
      answer: 1,
      explanation: "and returns True only when both conditions are True."
    },
    {
      question: "What is the result of True or False?",
      options: ["True", "False", "None", "Error"],
      answer: 0,
      explanation: "or returns True when at least one condition is True."
    },
    {
      question: "What is the result of not True?",
      options: ["True", "False", "None", "Error"],
      answer: 1,
      explanation: "not reverses True to False."
    },
    {
      question: "What is the result of bool(0)?",
      options: ["True", "False", "0", "Error"],
      answer: 1,
      explanation: "Zero is a falsy value in Python."
    },
    {
      question: "What does 20 >= 20 return?",
      options: ["False", "True", "20", "None"],
      answer: 1,
      explanation: "The >= operator includes equality, so the result is True."
    },
    {
      question: "Which operator should be used when both conditions must be True?",
      options: ["or", "not", "and", "=="],
      answer: 2,
      explanation: "The and operator requires both conditions to be True."
    }
  ],

  takeaways: [
    "Boolean values are True and False.",
    "The bool type is used for logical values.",
    "Comparison operators produce Boolean results.",
    "and requires both conditions to be True.",
    "or requires at least one condition to be True.",
    "not reverses a Boolean value.",
    "bool() converts values into Boolean results.",
    "Boolean logic is the foundation of decision-making in Python."
  ],

  teacherNotes: "Start the lesson with simple questions that have yes or no answers, such as: Is 10 greater than 5? Is a student older than 18? Explain that Python represents these answers using True and False. Introduce the bool type and show the difference between True and the string \"True\". Teach comparison operators one by one. Make sure students understand the difference between = and ==. Then explain and, or, and not using everyday examples. For and, both requirements must be satisfied. For or, at least one requirement is enough. For not, the result is reversed. Demonstrate bool() with zero, empty strings, and non-empty strings. Finish with the student eligibility exercise. This lesson prepares students for the next important topic: if, elif, and else statements.",

  teachingTime: "45-60 minutes"
};