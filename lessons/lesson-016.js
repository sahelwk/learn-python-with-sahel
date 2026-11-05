
window.lessonData = window.lessonData || {};
window.lessonData[16] = {
  id: 16,
  title: "Identifiers",
  category: "Python Basics",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn what identifiers are and how to choose valid names for variables, functions, classes, and other Python objects.",

  definition:
    "An identifier is a name used to identify a variable, function, class, or another object in a Python program.",

  whyItMatters:
    "Identifiers help programmers give meaningful names to program elements, making code easier to read, understand, and maintain.",

  objectives: [
    "Understand what an identifier is.",
    "Recognize identifiers in Python code.",
    "Learn Python identifier naming rules.",
    "Identify valid and invalid identifiers.",
    "Choose meaningful names for program elements.",
    "Understand that Python identifiers are case-sensitive."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Identifiers?",
      body: "Identifiers are names used in Python programs.",
      bullets: [
        "Name variables.",
        "Name functions.",
        "Name classes."
      ]
    },
    {
      kicker: "02 · Example",
      title: "Identifiers in Python",
      body: "Look at the names used in this program.",
      code: "student_name = \"Ahmad\"\nstudent_age = 20\n\nprint(student_name)",
      output: "Ahmad",
      bullets: [
        "student_name is an identifier.",
        "student_age is an identifier.",
        "print is a built-in function name."
      ]
    },
    {
      kicker: "03 · Naming Rule",
      title: "Rule 1: Start with a Letter or _",
      body: "An identifier must start with a letter or underscore.",
      code: "name = \"Ahmad\"\n_student = \"Ali\"\nstudent1 = \"Sara\"",
      bullets: [
        "Letters are allowed.",
        "Underscore is allowed.",
        "A number cannot come first."
      ]
    },
    {
      kicker: "04 · Naming Rule",
      title: "Rule 2: Use Letters, Numbers and _",
      body: "After the first character, numbers can also be used.",
      code: "student1 = \"Ahmad\"\nstudent_2 = \"Ali\"\nuser2026 = \"Sara\"",
      bullets: [
        "Letters are allowed.",
        "Numbers are allowed after the first character.",
        "Underscores are allowed."
      ]
    },
    {
      kicker: "05 · Naming Rule",
      title: "Rule 3: No Spaces",
      body: "Spaces are not allowed inside identifiers.",
      code: "# Invalid\nstudent name = \"Ahmad\"\n\n# Valid\nstudent_name = \"Ahmad\"",
      bullets: [
        "Do not use spaces.",
        "Use _ to separate words."
      ]
    },
    {
      kicker: "06 · Naming Rule",
      title: "Rule 4: No Special Symbols",
      body: "Special symbols such as @, $, and % are not allowed.",
      code: "# Invalid\nuser@name = \"Ahmad\"\nprice$ = 100\n\n# Valid\nuser_name = \"Ahmad\"\nprice = 100",
      bullets: [
        "Avoid special symbols.",
        "Use letters, numbers, and underscores."
      ]
    },
    {
      kicker: "07 · Naming Rule",
      title: "Rule 5: Do Not Use Keywords",
      body: "Python keywords have special meanings and cannot be used as identifiers.",
      code: "# Invalid\nclass = \"Python\"\nif = 10\n\n# Valid\nclass_name = \"Python\"\nif_value = 10",
      bullets: [
        "Keywords are reserved words.",
        "Examples: if, else, for, class, return.",
        "Choose another name."
      ]
    },
    {
      kicker: "08 · Important",
      title: "Identifiers Are Case-Sensitive",
      body: "Uppercase and lowercase letters are treated differently.",
      code: "name = \"Ahmad\"\nName = \"Ali\"\nNAME = \"Sara\"\n\nprint(name)\nprint(Name)\nprint(NAME)",
      output: "Ahmad\nAli\nSara",
      bullets: [
        "name is different from Name.",
        "Name is different from NAME.",
        "Use consistent naming."
      ]
    },
    {
      kicker: "09 · Good Naming",
      title: "Choose Meaningful Names",
      body: "Good identifiers explain what the value represents.",
      code: "# Poor names\na = 500\nb = 3\n\n# Better names\nproduct_price = 500\nproduct_quantity = 3",
      bullets: [
        "Use clear names.",
        "Avoid confusing abbreviations.",
        "Make code easier to understand."
      ]
    },
    {
      kicker: "10 · Naming Style",
      title: "Use snake_case",
      body: "Python commonly uses snake_case for variables and functions.",
      code: "student_name = \"Ahmad\"\nproduct_price = 100\ncalculate_total = 500",
      bullets: [
        "Use lowercase letters.",
        "Separate words with underscores.",
        "Follow a consistent style."
      ]
    },
    {
      kicker: "11 · Practical Example",
      title: "Student Information",
      body: "Use meaningful identifiers to store student information.",
      code: "student_name = \"Ahmad\"\nstudent_age = 20\nstudent_marks = 85\n\nprint(student_name)\nprint(student_age)\nprint(student_marks)",
      output: "Ahmad\n20\n85",
      bullets: [
        "Each identifier has a clear purpose.",
        "Names make the program easier to read."
      ]
    },
    {
      kicker: "12 · Review",
      title: "What Did We Learn?",
      body: "Identifiers are an important part of writing clear Python code.",
      bullets: [
        "Identifiers are names in a program.",
        "Start with a letter or underscore.",
        "Do not use spaces or special symbols.",
        "Do not use Python keywords.",
        "Identifiers are case-sensitive.",
        "Choose meaningful names."
      ]
    }
  ],

  example: {
    explanation:
      "This example demonstrates valid identifiers in a student information program. Ask students to identify each variable name and explain why it is valid.",
    code:
      "student_name = \"Ahmad\"\nstudent_age = 20\nstudent_marks = 85\n\nprint(\"Name:\", student_name)\nprint(\"Age:\", student_age)\nprint(\"Marks:\", student_marks)",
    language: "python",
    output:
      "Name: Ahmad\nAge: 20\nMarks: 85"
  },

  commonMistakes: [
    "Starting an identifier with a number.",
    "Using spaces inside an identifier.",
    "Using special symbols such as @ or $.",
    "Using Python keywords as identifiers.",
    "Forgetting that identifiers are case-sensitive.",
    "Choosing unclear names such as a, x, or temp for important values.",
    "Confusing an identifier with the value stored in a variable."
  ],

  exercise: {
    question:
      "Create five identifiers for a student information program. Use valid names for student name, age, marks, city, and pass status. Then identify which of the following names are invalid: 2student, student_name, user@name, class, studentAge.",
    hint:
      "Remember: start with a letter or underscore, do not use spaces or special symbols, and do not use Python keywords."
  },

  solution: {
    explanation:
      "The solution uses meaningful and valid identifiers. Among the suggested names, 2student is invalid because it starts with a number, user@name is invalid because it contains a special symbol, and class is invalid because it is a Python keyword. The other names are valid.",
    code:
      "student_name = \"Ahmad\"\nstudent_age = 20\nstudent_marks = 85\nstudent_city = \"Kabul\"\nis_passed = True\n\nprint(student_name)\nprint(student_age)\nprint(student_marks)\nprint(student_city)\nprint(is_passed)",
    output:
      "Ahmad\n20\n85\nKabul\nTrue"
  },

  quiz: [
    {
      question: "What is an identifier?",
      options: [
        "A name used for program elements",
        "A mathematical operator",
        "A Python comment",
        "A type of loop"
      ],
      answer: 0,
      explanation:
        "Identifiers are names used for variables, functions, classes, and other program elements."
    },
    {
      question: "Which is a valid Python identifier?",
      options: [
        "2name",
        "student name",
        "student_name",
        "user@name"
      ],
      answer: 2,
      explanation:
        "student_name is valid because it starts with a letter and uses an underscore."
    },
    {
      question: "Can an identifier start with a number?",
      options: [
        "Yes",
        "No",
        "Only in VS Code",
        "Only on Windows"
      ],
      answer: 1,
      explanation:
        "A Python identifier cannot start with a number."
    },
    {
      question: "Which symbol is allowed in an identifier?",
      options: [
        "@",
        "$",
        "%",
        "_"
      ],
      answer: 3,
      explanation:
        "The underscore symbol is allowed in Python identifiers."
    },
    {
      question: "Which of these is a Python keyword?",
      options: [
        "student_name",
        "product_price",
        "class",
        "user_age"
      ],
      answer: 2,
      explanation:
        "class is a reserved Python keyword and cannot be used as an identifier."
    },
    {
      question: "Are name and Name the same identifier?",
      options: [
        "Yes",
        "No",
        "Only in functions",
        "Only in classes"
      ],
      answer: 1,
      explanation:
        "Python is case-sensitive, so name and Name are different identifiers."
    }
  ],

  takeaways: [
    "Identifiers are names used in Python programs.",
    "Identifiers can name variables, functions, and classes.",
    "Start identifiers with a letter or underscore.",
    "Do not use spaces or special symbols.",
    "Do not use Python keywords.",
    "Python identifiers are case-sensitive.",
    "Choose meaningful and readable names."
  ],

  teacherNotes:
    "Start by connecting this lesson to the previous lesson about variables. Explain that student_name is the identifier and \"Ahmad\" is the value. Emphasize that identifiers are not limited to variables; they are also used for functions and classes. Teach the naming rules one by one with valid and invalid examples. Explain case sensitivity by showing name, Name, and NAME as three different identifiers. Introduce snake_case as the common Python naming style. Ask students to correct invalid names and create meaningful identifiers for a student information program. Keep the lesson focused on naming rules and avoid advanced topics.",

  teachingTime: "35-45 minutes"
};
