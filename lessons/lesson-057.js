
window.lessonData = window.lessonData || {};
window.lessonData[57] = {
  "id": 57,
  "title": "Modules",
  "category": "Professional Python",
  "contentStatus": "authored",
  "introduction": "Python modules help developers organize code into separate reusable files. In this lesson, students learn how to import built-in modules, use selected functions and variables, create their own modules, and organize Python projects.",
  "definition": "A module is a Python file that contains reusable code, such as functions, variables, and classes, which can be imported and used in another Python file.",
  "whyItMatters": "Modules make programs easier to organize, reuse, maintain, and expand. They help developers divide large projects into smaller files with clear responsibilities.",
  "objectives": [
    "Understand what a Python module is and why modules are useful.",
    "Import and use built-in Python modules.",
    "Use import aliases with the as keyword.",
    "Import specific functions and variables using from and import.",
    "Create a custom module and use it in another Python file.",
    "Understand the basic purpose of __name__ and __main__."
  ],
  "slides": [
    {
      "kicker": "Professional Python",
      "title": "Modules",
      "body": "Modules help us organize Python code into separate files and reuse it in different programs.",
      "bullets": [
        "A module is a Python file.",
        "It can contain functions, variables, and classes.",
        "We use import to access code from modules."
      ]
    },
    {
      "kicker": "Review",
      "title": "Why Do We Need Functions?",
      "body": "Functions help us reuse code instead of writing the same instructions again.",
      "code": "def add(a, b):\n    return a + b\n\nprint(add(10, 5))",
      "language": "python",
      "output": "15"
    },
    {
      "kicker": "Introduction",
      "title": "What Is a Module?",
      "body": "A module is a Python file that contains reusable code.",
      "bullets": [
        "It can contain functions.",
        "It can contain variables and classes.",
        "Other Python files can import it."
      ]
    },
    {
      "kicker": "Organization",
      "title": "Why Use Modules?",
      "body": "Modules help us divide a large program into smaller and more organized files.",
      "bullets": [
        "Organize code.",
        "Reuse existing code.",
        "Make projects easier to maintain.",
        "Avoid putting everything in one file."
      ]
    },
    {
      "kicker": "First Import",
      "title": "Import a Module",
      "body": "Use the import keyword to make a module available in your Python file.",
      "code": "import math\n\nprint(math.sqrt(25))",
      "language": "python",
      "output": "5.0"
    },
    {
      "kicker": "Understand Import",
      "title": "Access Module Members",
      "body": "After importing a module, use its name followed by a dot to access its members.",
      "bullets": [
        "math is the module name.",
        "sqrt is a function inside math.",
        "The dot connects the module and its member."
      ]
    },
    {
      "kicker": "Built-in Modules",
      "title": "Python Built-in Standard Modules",
      "body": "Python provides many ready-to-use modules in its standard library.",
      "bullets": [
        "math: mathematical operations.",
        "random: random values and selections.",
        "datetime: dates and times.",
        "statistics: statistical calculations."
      ]
    },
    {
      "kicker": "Math Module",
      "title": "Using the Math Module",
      "body": "The math module provides useful mathematical functions and constants.",
      "code": "import math\n\nprint(math.sqrt(64))\nprint(math.factorial(5))\nprint(math.pi)",
      "language": "python",
      "output": "8.0\n120\n3.141592653589793"
    },
    {
      "kicker": "Random Module",
      "title": "Using the Random Module",
      "body": "The random module can generate random values and select random items.",
      "code": "import random\n\nprint(random.randint(1, 10))",
      "language": "python",
      "output": "A random integer between 1 and 10"
    },
    {
      "kicker": "Random Module",
      "title": "Choose a Random Item",
      "body": "Use random.choice() to select one item from a sequence.",
      "code": "import random\n\ncolors = ['red', 'blue', 'green']\nprint(random.choice(colors))",
      "language": "python",
      "output": "One randomly selected color"
    },
    {
      "kicker": "Import Alias",
      "title": "Use an Alias with as",
      "body": "The as keyword gives an imported module a shorter or alternative name.",
      "code": "import math as m\n\nprint(m.sqrt(36))",
      "language": "python",
      "output": "6.0"
    },
    {
      "kicker": "Specific Import",
      "title": "Import a Specific Function",
      "body": "Use from and import to import a selected function from a module.",
      "code": "from math import sqrt\n\nprint(sqrt(49))",
      "language": "python",
      "output": "7.0"
    },
    {
      "kicker": "Specific Import",
      "title": "Import Multiple Members",
      "body": "You can import more than one function or constant from a module.",
      "code": "from math import sqrt, pi\n\nprint(sqrt(81))\nprint(pi)",
      "language": "python",
      "output": "9.0\n3.141592653589793"
    },
    {
      "kicker": "Import Alias",
      "title": "Alias a Specific Function",
      "body": "You can also give an imported function a different name.",
      "code": "from math import factorial as fact\n\nprint(fact(5))",
      "language": "python",
      "output": "120"
    },
    {
      "kicker": "Comparison",
      "title": "Different Import Styles",
      "body": "Python supports different ways to import code from modules.",
      "bullets": [
        "import math",
        "import math as m",
        "from math import sqrt",
        "from math import sqrt, pi",
        "from math import factorial as fact"
      ]
    },
    {
      "kicker": "Custom Modules",
      "title": "Create Your Own Module",
      "body": "Any Python file can act as a module when another Python file imports it.",
      "bullets": [
        "Create a file named calculator.py.",
        "Write reusable functions inside it.",
        "Import those functions into another Python file."
      ]
    },
    {
      "kicker": "Custom Modules",
      "title": "Create calculator.py",
      "body": "This file contains functions that we want to reuse in another file.",
      "code": "def add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b\n\ndef multiply(a, b):\n    return a * b",
      "language": "python"
    },
    {
      "kicker": "Custom Modules",
      "title": "Create main.py",
      "body": "Import calculator and use its functions from another Python file.",
      "code": "import calculator\n\nprint(calculator.add(10, 5))\nprint(calculator.subtract(10, 5))\nprint(calculator.multiply(10, 5))",
      "language": "python",
      "output": "15\n5\n50"
    },
    {
      "kicker": "Project Structure",
      "title": "Two Files in One Folder",
      "body": "Keep calculator.py and main.py in the same folder for this simple example.",
      "bullets": [
        "python_project/",
        "  calculator.py",
        "  main.py"
      ]
    },
    {
      "kicker": "Custom Import",
      "title": "Import Specific Functions",
      "body": "You can import only the functions you need from your own module.",
      "code": "from calculator import add, multiply\n\nprint(add(4, 6))\nprint(multiply(4, 6))",
      "language": "python",
      "output": "10\n24"
    },
    {
      "kicker": "Module Information",
      "title": "Explore Module Members",
      "body": "The dir() function can show names available in a module.",
      "code": "import math\n\nprint('sqrt' in dir(math))\nprint('pi' in dir(math))",
      "language": "python",
      "output": "True\nTrue"
    },
    {
      "kicker": "Special Variable",
      "title": "Understand __name__",
      "body": "Python gives every module a special variable named __name__.",
      "bullets": [
        "When a file runs directly, __name__ is '__main__'.",
        "When imported, its __name__ is usually the module name."
      ]
    },
    {
      "kicker": "Special Variable",
      "title": "The __main__ Check",
      "body": "Use this condition to run code only when the file is executed directly.",
      "code": "def greet():\n    print('Hello, Python!')\n\nif __name__ == '__main__':\n    greet()",
      "language": "python",
      "output": "Hello, Python! (when this file runs directly)"
    },
    {
      "kicker": "Module Categories",
      "title": "Types of Modules",
      "body": "Python modules can come from different sources.",
      "bullets": [
        "Standard library modules: included with Python.",
        "Third-party modules: installed separately.",
        "User-defined modules: created by developers."
      ]
    },
    {
      "kicker": "Important Note",
      "title": "Module vs Package",
      "body": "A module is generally one Python file. A package organizes related modules into a directory.",
      "bullets": [
        "Module: calculator.py",
        "Package: a directory containing related modules.",
        "Packages help organize larger projects."
      ]
    },
    {
      "kicker": "Common Mistakes",
      "title": "Importing Problems",
      "body": "Check file names, folder locations, and imported member names when an import fails.",
      "bullets": [
        "Misspelling a module name.",
        "Importing a function that does not exist.",
        "Naming your file after a standard library module.",
        "Keeping files in unexpected folders."
      ]
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Create a Student Module",
      "body": "Create a module named student.py and use it from main.py.",
      "bullets": [
        "Create a function named student_info.",
        "Accept name and age as parameters.",
        "Print the student's name and age.",
        "Import and call the function from main.py."
      ],
      "code": "# student.py\n\ndef student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)",
      "language": "python"
    },
    {
      "kicker": "Solution",
      "title": "Student Module Solution",
      "body": "Define the function in student.py, then import and call it from main.py.",
      "code": "# student.py\n\ndef student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)\n\n# main.py\nfrom student import student_info\n\nstudent_info('Ahmad', 20)",
      "language": "python",
      "output": "Name: Ahmad\nAge: 20"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "Modules help us divide Python programs into reusable files.",
      "bullets": [
        "A module is a Python file.",
        "Use import to access a module.",
        "Use from and import for specific members.",
        "Use as to create an alias.",
        "Create custom modules to organize your own code.",
        "Use __main__ to control direct execution."
      ]
    }
  ],
  "example": {
    "explanation": "The calculator.py file contains reusable functions. The main.py file imports the calculator module and calls its functions.",
    "code": "# calculator.py\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\n# main.py\nimport calculator\n\nprint(calculator.add(10, 5))\nprint(calculator.multiply(10, 5))",
    "language": "python",
    "output": "15\n50"
  },
  "commonMistakes": [
    "Forgetting to import a module before using its members.",
    "Using a function name without the module prefix after importing the whole module.",
    "Importing a function that does not exist in the selected module.",
    "Misspelling the module or function name.",
    "Naming a custom file math.py, random.py, or another standard library module name.",
    "Keeping custom module files in a location Python cannot find.",
    "Confusing a module with a package.",
    "Assuming that import runs only the function being used; top-level code in a module also runs when it is first imported."
  ],
  "exercise": {
    "question": "Create two files named student.py and main.py. In student.py, create a function named student_info that accepts name and age and prints both values. In main.py, import that function and call it using the values 'Ahmad' and 20.",
    "hint": "Put the function in student.py. In main.py, use from student import student_info.",
    "code": "# student.py\ndef student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)\n\n# main.py\nfrom student import student_info\nstudent_info('Ahmad', 20)"
  },
  "solution": {
    "explanation": "The student.py file defines a reusable function. The main.py file imports that function and calls it with the student's name and age.",
    "code": "# student.py\ndef student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)\n\n# main.py\nfrom student import student_info\nstudent_info('Ahmad', 20)",
    "output": "Name: Ahmad\nAge: 20"
  },
  "quiz": [
    {
      "question": "What is a Python module?",
      "options": [
        "A Python file containing reusable code",
        "A type of loop",
        "A database",
        "A Python operator"
      ],
      "answer": 0
    },
    {
      "question": "Which keyword is used to import a module?",
      "options": [
        "def",
        "import",
        "return",
        "class"
      ],
      "answer": 1
    },
    {
      "question": "What does import math as m do?",
      "options": [
        "Deletes the math module",
        "Creates a function named m",
        "Imports math using the alias m",
        "Imports only sqrt"
      ],
      "answer": 2
    },
    {
      "question": "How do you import only sqrt from math?",
      "options": [
        "import sqrt",
        "from math import sqrt",
        "math from sqrt",
        "include math.sqrt"
      ],
      "answer": 1
    },
    {
      "question": "Which of these is a standard library module?",
      "options": [
        "math",
        "my_project",
        "student",
        "calculator"
      ],
      "answer": 0
    },
    {
      "question": "What is calculator.py when imported by main.py?",
      "options": [
        "A loop",
        "A module",
        "A package manager",
        "A variable"
      ],
      "answer": 1
    },
    {
      "question": "What is the value of __name__ when a Python file runs directly?",
      "options": [
        "main",
        "None",
        "__main__",
        "import"
      ],
      "answer": 2
    },
    {
      "question": "What does dir(math) help us see?",
      "options": [
        "The names available in the math module",
        "The current date",
        "The Python version",
        "The computer's folders"
      ],
      "answer": 0
    }
  ],
  "takeaways": [
    "A module is a Python file containing reusable code.",
    "The import keyword makes a module available.",
    "Use module.member to access a member of an imported module.",
    "Use as to create an import alias.",
    "Use from module import name to import selected members.",
    "You can create your own modules by writing Python files.",
    "The __main__ check helps control code execution."
  ],
  "teacherNotes": "Start by reviewing functions and explaining that modules let us place reusable functions in separate files. Demonstrate import math first, then explain module.member notation. Teach import aliases and from-import styles with short examples. Spend sufficient time on the two-file calculator example: create calculator.py and main.py in the same folder and run main.py. Make sure students understand that the imported file is a module. Introduce standard library, third-party, and user-defined modules at a high level. Explain __name__ and __main__ briefly without going into advanced import internals. Mention that top-level code in a module runs when the module is first imported, so reusable modules should avoid unnecessary execution at import time. Do not teach package internals, virtual environments, or complex import paths in this lesson.",
  "teachingTime": "45-60 minutes"
};
