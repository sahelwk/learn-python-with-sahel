
window.lessonData = window.lessonData || {};
window.lessonData[56] = {
  "id": 56,
  "title": "*args and **kwargs",
  "category": "Python Functions",
  "contentStatus": "authored",
  "introduction": "Python functions can accept a flexible number of arguments. The *args syntax collects extra positional arguments into a tuple, while **kwargs collects extra keyword arguments into a dictionary.",
  "definition": "*args allows a function to receive any number of extra positional arguments as a tuple, while **kwargs allows it to receive any number of extra keyword arguments as a dictionary.",
  "whyItMatters": "These features make functions flexible when the number or names of arguments are not known in advance. They are commonly used in reusable functions and Python libraries.",
  "objectives": [
    "Understand why a function may need a flexible number of arguments.",
    "Use *args to receive multiple positional arguments.",
    "Understand that *args collects values into a tuple.",
    "Use **kwargs to receive multiple keyword arguments.",
    "Understand that **kwargs collects values into a dictionary.",
    "Use *args and **kwargs together in one function.",
    "Recognize when flexible arguments are useful."
  ],
  "slides": [
    {
      "kicker": "Python Functions",
      "title": "*args and **kwargs",
      "body": "Python allows functions to accept a flexible number of arguments.",
      "bullets": [
        "*args collects extra positional arguments.",
        "**kwargs collects extra keyword arguments.",
        "Both make functions more flexible."
      ]
    },
    {
      "kicker": "Review",
      "title": "A Function with Fixed Parameters",
      "body": "A regular function can be created with a specific number of parameters.",
      "code": "def add(a, b):\n    return a + b\n\nprint(add(10, 20))",
      "language": "python",
      "output": "30"
    },
    {
      "kicker": "The Problem",
      "title": "What If We Have More Arguments?",
      "body": "Our function accepts only two arguments. What if we want to add three, four, or ten numbers?",
      "code": "def add(a, b):\n    return a + b\n\n# This call causes an error:\n# add(10, 20, 30)",
      "language": "python",
      "output": "The function accepts only 2 positional arguments."
    },
    {
      "kicker": "Introduction",
      "title": "Flexible Arguments",
      "body": "Python provides special syntax to collect extra arguments.",
      "bullets": [
        "*args for extra positional arguments.",
        "**kwargs for extra keyword arguments.",
        "The function does not need a fixed number of extra arguments."
      ]
    },
    {
      "kicker": "Part 1",
      "title": "What Is *args?",
      "body": "*args allows a function to receive any number of extra positional arguments.",
      "code": "def show_numbers(*args):\n    print(args)\n\nshow_numbers(10, 20, 30)",
      "language": "python",
      "output": "(10, 20, 30)"
    },
    {
      "kicker": "Understand *args",
      "title": "What Happens to the Values?",
      "body": "Python collects all extra positional arguments into a tuple.",
      "bullets": [
        "10 is the first value.",
        "20 is the second value.",
        "30 is the third value.",
        "All values are collected in one tuple."
      ]
    },
    {
      "kicker": "Important",
      "title": "The Type of *args",
      "body": "Inside the function, args is a tuple.",
      "code": "def show_values(*args):\n    print(type(args))\n    print(args)\n\nshow_values(5, 10, 15)",
      "language": "python",
      "output": "<class 'tuple'>\n(5, 10, 15)"
    },
    {
      "kicker": "Using *args",
      "title": "Loop Through *args",
      "body": "Because args is a tuple, we can use a for loop to access each value.",
      "code": "def show_numbers(*args):\n    for number in args:\n        print(number)\n\nshow_numbers(10, 20, 30)",
      "language": "python",
      "output": "10\n20\n30"
    },
    {
      "kicker": "Practical Example",
      "title": "Add Any Number of Values",
      "body": "Use *args to calculate the sum of any number of values.",
      "code": "def calculate_sum(*args):\n    total = 0\n    for number in args:\n        total += number\n    return total\n\nprint(calculate_sum(10, 20, 30))\nprint(calculate_sum(5, 10, 15, 20))",
      "language": "python",
      "output": "60\n50"
    },
    {
      "kicker": "Practical Example",
      "title": "Calculate Total Shopping Cost",
      "body": "A shopping function can receive any number of product prices.",
      "code": "def shopping_total(*prices):\n    total = sum(prices)\n    return total\n\nprint(shopping_total(100, 250, 300))\nprint(shopping_total(50, 80, 120, 200))",
      "language": "python",
      "output": "650\n450"
    },
    {
      "kicker": "Fixed and Flexible",
      "title": "Combine a Normal Parameter with *args",
      "body": "A function can have a regular parameter before *args.",
      "code": "def show_student(name, *scores):\n    print(\"Student:\", name)\n    print(\"Scores:\", scores)\n\nshow_student(\"Ahmad\", 80, 90, 85)",
      "language": "python",
      "output": "Student: Ahmad\nScores: (80, 90, 85)"
    },
    {
      "kicker": "Part 2",
      "title": "What Is **kwargs?",
      "body": "**kwargs allows a function to receive any number of extra keyword arguments.",
      "code": "def show_info(**kwargs):\n    print(kwargs)\n\nshow_info(name=\"Ahmad\", age=22, city=\"Kabul\")",
      "language": "python",
      "output": "{'name': 'Ahmad', 'age': 22, 'city': 'Kabul'}"
    },
    {
      "kicker": "Understand **kwargs",
      "title": "What Happens to the Values?",
      "body": "Python collects extra keyword arguments into a dictionary.",
      "bullets": [
        "name is a key and Ahmad is its value.",
        "age is a key and 22 is its value.",
        "city is a key and Kabul is its value.",
        "All pairs are collected in one dictionary."
      ]
    },
    {
      "kicker": "Important",
      "title": "The Type of **kwargs",
      "body": "Inside the function, kwargs is a dictionary.",
      "code": "def show_info(**kwargs):\n    print(type(kwargs))\n    print(kwargs)\n\nshow_info(name=\"Ali\", age=20)",
      "language": "python",
      "output": "<class 'dict'>\n{'name': 'Ali', 'age': 20}"
    },
    {
      "kicker": "Using **kwargs",
      "title": "Access Values by Key",
      "body": "Because kwargs is a dictionary, we can access its values using their keys.",
      "code": "def show_info(**kwargs):\n    print(\"Name:\", kwargs[\"name\"])\n    print(\"Age:\", kwargs[\"age\"])\n\nshow_info(name=\"Sara\", age=21)",
      "language": "python",
      "output": "Name: Sara\nAge: 21"
    },
    {
      "kicker": "Using **kwargs",
      "title": "Loop Through **kwargs",
      "body": "Use a for loop to access each key and value in the dictionary.",
      "code": "def show_info(**kwargs):\n    for key, value in kwargs.items():\n        print(key, \":\", value)\n\nshow_info(name=\"Ahmad\", age=22, city=\"Kabul\")",
      "language": "python",
      "output": "name : Ahmad\nage : 22\ncity : Kabul"
    },
    {
      "kicker": "Practical Example",
      "title": "Employee Information",
      "body": "Use **kwargs to receive employee information with flexible field names.",
      "code": "def employee_info(**kwargs):\n    for key, value in kwargs.items():\n        print(key, \":\", value)\n\nemployee_info(name=\"Ali\", department=\"IT\", salary=30000)",
      "language": "python",
      "output": "name : Ali\ndepartment : IT\nsalary : 30000"
    },
    {
      "kicker": "Comparison",
      "title": "*args vs **kwargs",
      "body": "Both collect multiple arguments, but they collect different kinds of arguments.",
      "bullets": [
        "*args collects extra positional arguments.",
        "**kwargs collects extra keyword arguments.",
        "*args creates a tuple.",
        "**kwargs creates a dictionary."
      ]
    },
    {
      "kicker": "Part 3",
      "title": "Use *args and **kwargs Together",
      "body": "A function can receive both extra positional and extra keyword arguments.",
      "code": "def show_data(*args, **kwargs):\n    print(\"Positional:\", args)\n    print(\"Keyword:\", kwargs)\n\nshow_data(10, 20, name=\"Ali\", age=22)",
      "language": "python",
      "output": "Positional: (10, 20)\nKeyword: {'name': 'Ali', 'age': 22}"
    },
    {
      "kicker": "Understand the Order",
      "title": "How Are Arguments Collected?",
      "body": "When both are used, extra positional arguments are collected by *args and extra keyword arguments are collected by **kwargs.",
      "bullets": [
        "10 and 20 go into args.",
        "name and age go into kwargs.",
        "args is a tuple.",
        "kwargs is a dictionary."
      ]
    },
    {
      "kicker": "Function Structure",
      "title": "A Fixed Parameter with Both",
      "body": "A regular parameter can also be placed before *args and **kwargs.",
      "code": "def student_info(name, *scores, **details):\n    print(\"Name:\", name)\n    print(\"Scores:\", scores)\n    print(\"Details:\", details)\n\nstudent_info(\"Ahmad\", 80, 90, age=20, city=\"Kabul\")",
      "language": "python",
      "output": "Name: Ahmad\nScores: (80, 90)\nDetails: {'age': 20, 'city': 'Kabul'}"
    },
    {
      "kicker": "Important Rule",
      "title": "Argument Order",
      "body": "When defining a function with these parameters, follow the correct order.",
      "bullets": [
        "Regular parameters first.",
        "*args after regular parameters.",
        "**kwargs after *args.",
        "Use the correct order to avoid syntax errors."
      ]
    },
    {
      "kicker": "Naming",
      "title": "Are args and kwargs Special Names?",
      "body": "The names args and kwargs are common conventions, not Python keywords.",
      "code": "def show_items(*values):\n    print(values)\n\nshow_items(10, 20, 30)",
      "language": "python",
      "output": "(10, 20, 30)"
    },
    {
      "kicker": "Common Mistake",
      "title": "Confusing *args and **kwargs",
      "body": "Remember what type of arguments each one collects.",
      "bullets": [
        "*args is for extra positional arguments.",
        "**kwargs is for extra keyword arguments.",
        "Do not expect args to be a dictionary.",
        "Do not expect kwargs to be a tuple."
      ]
    },
    {
      "kicker": "Common Mistake",
      "title": "Forgetting Keyword Names",
      "body": "Keyword arguments need a name and a value.",
      "code": "def show_info(**kwargs):\n    print(kwargs)\n\nshow_info(name=\"Ahmad\", age=22)",
      "language": "python",
      "output": "{'name': 'Ahmad', 'age': 22}"
    },
    {
      "kicker": "Common Mistake",
      "title": "Incorrect Parameter Order",
      "body": "When defining a function, **kwargs must come after *args.",
      "bullets": [
        "Correct: def example(*args, **kwargs):",
        "Incorrect: def example(**kwargs, *args):",
        "Follow the required parameter order."
      ]
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Student Results",
      "body": "Create a function that receives a student name, any number of scores, and extra student details.",
      "bullets": [
        "Use name as a regular parameter.",
        "Use *scores for the student's marks.",
        "Use **details for extra information.",
        "Print the name, scores, and details."
      ],
      "code": "student_report(\n    \"Ahmad\",\n    80, 90, 85,\n    age=20,\n    city=\"Kabul\"\n)",
      "language": "python"
    },
    {
      "kicker": "Solution",
      "title": "Student Results Solution",
      "body": "The function collects the scores in a tuple and the extra details in a dictionary.",
      "code": "def student_report(name, *scores, **details):\n    print(\"Name:\", name)\n    print(\"Scores:\", scores)\n    print(\"Details:\", details)\n\nstudent_report(\"Ahmad\", 80, 90, 85, age=20, city=\"Kabul\")",
      "language": "python",
      "output": "Name: Ahmad\nScores: (80, 90, 85)\nDetails: {'age': 20, 'city': 'Kabul'}"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "*args and **kwargs help functions accept a flexible number of arguments.",
      "bullets": [
        "*args collects extra positional arguments into a tuple.",
        "**kwargs collects extra keyword arguments into a dictionary.",
        "Both can be used in one function.",
        "Regular parameters can be combined with them.",
        "Use them when flexible arguments are needed."
      ]
    }
  ],
  "example": {
    "explanation": "This function receives a student name as a regular parameter, any number of scores through *scores, and extra named information through **details. The scores are collected in a tuple and the details are collected in a dictionary.",
    "code": "def student_report(name, *scores, **details):\n    print(\"Name:\", name)\n    print(\"Scores:\", scores)\n    print(\"Details:\", details)\n\nstudent_report(\"Ahmad\", 80, 90, 85, age=20, city=\"Kabul\")",
    "language": "python",
    "output": "Name: Ahmad\nScores: (80, 90, 85)\nDetails: {'age': 20, 'city': 'Kabul'}"
  },
  "commonMistakes": [
    "Thinking that args and kwargs are special Python keywords.",
    "Forgetting that *args collects values into a tuple.",
    "Forgetting that **kwargs collects key-value pairs into a dictionary.",
    "Passing a positional argument where a keyword argument is expected.",
    "Writing **kwargs before *args in a function definition.",
    "Trying to access a dictionary value in kwargs without using its key.",
    "Assuming that *args and **kwargs must always be used in every function."
  ],
  "exercise": {
    "question": "Create a function named student_report. It must receive a student name as a regular parameter, any number of scores using *scores, and extra information using **details. Print the student's name, scores, and details. Call the function with the name Ahmad, scores 80, 90, 85, age 20, and city Kabul.",
    "hint": "Define the function as student_report(name, *scores, **details). Remember that scores will be a tuple and details will be a dictionary.",
    "code": "def student_report(name, *scores, **details):\n    print(\"Name:\", name)\n    print(\"Scores:\", scores)\n    print(\"Details:\", details)\n\nstudent_report(\"Ahmad\", 80, 90, 85, age=20, city=\"Kabul\")"
  },
  "solution": {
    "explanation": "The name parameter receives Ahmad. The extra positional values 80, 90, and 85 are collected in the scores tuple. The keyword arguments age=20 and city=Kabul are collected in the details dictionary.",
    "code": "def student_report(name, *scores, **details):\n    print(\"Name:\", name)\n    print(\"Scores:\", scores)\n    print(\"Details:\", details)\n\nstudent_report(\"Ahmad\", 80, 90, 85, age=20, city=\"Kabul\")",
    "output": "Name: Ahmad\nScores: (80, 90, 85)\nDetails: {'age': 20, 'city': 'Kabul'}"
  },
  "quiz": [
    {
      "question": "What is the main purpose of *args?",
      "options": [
        "To receive extra positional arguments",
        "To receive only strings",
        "To create a dictionary",
        "To return a value"
      ],
      "answer": 0
    },
    {
      "question": "What data type does *args create inside a function?",
      "options": [
        "List",
        "Dictionary",
        "Tuple",
        "Set"
      ],
      "answer": 2
    },
    {
      "question": "What is the main purpose of **kwargs?",
      "options": [
        "To receive extra positional arguments",
        "To receive extra keyword arguments",
        "To create a tuple",
        "To stop a function"
      ],
      "answer": 1
    },
    {
      "question": "What data type does **kwargs create inside a function?",
      "options": [
        "Tuple",
        "List",
        "Set",
        "Dictionary"
      ],
      "answer": 3
    },
    {
      "question": "What does this code print? def show(*args): print(args); show(1, 2, 3)",
      "options": [
        "[1, 2, 3]",
        "(1, 2, 3)",
        "{1, 2, 3}",
        "1 2 3"
      ],
      "answer": 1
    },
    {
      "question": "Which function definition correctly uses both forms?",
      "options": [
        "def show(**kwargs, *args):",
        "def show(*args, **kwargs):",
        "def show(args**, kwargs*):",
        "def show(*kwargs, args**):"
      ],
      "answer": 1
    },
    {
      "question": "Are args and kwargs special Python keywords?",
      "options": [
        "Yes, always",
        "Only kwargs is special",
        "No, they are common naming conventions",
        "Only args is special"
      ],
      "answer": 2
    },
    {
      "question": "Which value is collected by **kwargs in this call: show(name=\"Ali\", age=20)?",
      "options": [
        "Only Ali",
        "Only 20",
        "The name and age key-value pairs",
        "Nothing"
      ],
      "answer": 2
    }
  ],
  "takeaways": [
    "*args receives any number of extra positional arguments.",
    "*args collects its values into a tuple.",
    "**kwargs receives any number of extra keyword arguments.",
    "**kwargs collects its values into a dictionary.",
    "Both can be used together in one function.",
    "Regular parameters can be combined with *args and **kwargs.",
    "Use flexible arguments when the number or names of arguments are not known in advance."
  ],
  "teacherNotes": "Start by reviewing a function with two fixed parameters and demonstrate the error caused by passing more arguments than expected. Introduce *args as a way to collect extra positional arguments into a tuple. Show the type using type(args), then loop through the values and calculate their sum. Next introduce **kwargs and explain that it collects named arguments into a dictionary. Show how to access values by key and loop through kwargs.items(). Finally demonstrate a function with a regular name parameter, *scores, and **details. Emphasize the difference between a tuple and a dictionary. Explain that args and kwargs are conventional names; the stars are what matter. Do not confuse defining a function with *args/**kwargs and calling a function with * and ** unpacking; unpacking can be taught separately. Give students enough time to complete the student report exercise.",
  "teachingTime": "45-60 minutes"
};
