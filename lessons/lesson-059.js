
window.lessonData = window.lessonData || {};
window.lessonData[59] = {
  "id": 59,
  "title": "import",
  "category": "Professional Python",
  "contentStatus": "authored",
  "introduction": "The import statement allows Python programs to use code from other modules and packages. In this lesson, students learn the main import styles, aliases, importing selected names, importing multiple items, and using standard-library and custom modules.",
  "definition": "The import statement loads a module or selected names from a module so that their code can be used in another Python file.",
  "whyItMatters": "Importing allows developers to reuse existing code, divide large programs into smaller files, use Python's standard library, and work with third-party packages.",
  "objectives": [
    "Understand what the import statement does.",
    "Import a complete Python module.",
    "Access functions and variables through a module name.",
    "Use aliases with the as keyword.",
    "Import selected functions or variables with from ... import.",
    "Import multiple names from one module.",
    "Recognize standard-library, custom, and third-party modules.",
    "Avoid common import errors and understand basic module naming."
  ],
  "slides": [
    {
      "kicker": "Professional Python",
      "title": "The import Statement",
      "body": "Python programs can reuse code written in other modules and packages with import.",
      "bullets": [
        "Use existing Python functionality.",
        "Reuse your own code from other files.",
        "Organize large projects into smaller modules."
      ]
    },
    {
      "kicker": "Review",
      "title": "What Is a Module?",
      "body": "A module is a Python file that contains reusable code, such as functions and variables.",
      "code": "# calculator.py\n\ndef add(a, b):\n    return a + b",
      "language": "python"
    },
    {
      "kicker": "Definition",
      "title": "What Does import Do?",
      "body": "The import statement makes a module available to your current Python file.",
      "code": "import math\n\nprint(math.sqrt(25))",
      "language": "python",
      "output": "5.0"
    },
    {
      "kicker": "Why Import?",
      "title": "Why Do We Use import?",
      "body": "Instead of writing every function ourselves, we can reuse code from existing modules.",
      "bullets": [
        "Save development time.",
        "Reuse tested functionality.",
        "Keep code organized.",
        "Use Python's built-in modules and external packages."
      ]
    },
    {
      "kicker": "First Method",
      "title": "Import a Complete Module",
      "body": "Use import followed by the module name.",
      "code": "import math\n\nprint(math.pi)\nprint(math.sqrt(36))",
      "language": "python",
      "output": "3.141592653589793\n6.0"
    },
    {
      "kicker": "Accessing Members",
      "title": "Use the Module Name",
      "body": "After importing a module, access its members with a dot.",
      "code": "import math\n\nnumber = math.sqrt(49)\nprint(number)",
      "language": "python",
      "output": "7.0"
    },
    {
      "kicker": "Module Members",
      "title": "Functions and Constants",
      "body": "A module can provide functions, constants, classes, and other names.",
      "code": "import math\n\nprint(math.pi)\nprint(math.ceil(4.2))\nprint(math.floor(4.8))",
      "language": "python",
      "output": "3.141592653589793\n5\n4"
    },
    {
      "kicker": "Second Method",
      "title": "Import with an Alias",
      "body": "Use as to give an imported module a shorter or different name.",
      "code": "import math as m\n\nprint(m.sqrt(64))",
      "language": "python",
      "output": "8.0"
    },
    {
      "kicker": "Alias",
      "title": "Why Use an Alias?",
      "body": "Aliases can make long module names shorter and improve readability.",
      "code": "import statistics as stats\n\nnumbers = [10, 20, 30]\nprint(stats.mean(numbers))",
      "language": "python",
      "output": "20"
    },
    {
      "kicker": "Third Method",
      "title": "Import a Specific Name",
      "body": "Use from module import name to import one selected function, variable, or class.",
      "code": "from math import sqrt\n\nprint(sqrt(81))",
      "language": "python",
      "output": "9.0"
    },
    {
      "kicker": "Specific Import",
      "title": "Use the Imported Name Directly",
      "body": "When a name is imported directly, you can use it without writing the module name.",
      "code": "from math import pi\n\nradius = 3\narea = pi * radius ** 2\nprint(area)",
      "language": "python",
      "output": "28.274333882308138"
    },
    {
      "kicker": "Multiple Names",
      "title": "Import Multiple Names",
      "body": "Separate selected names with commas when importing them from the same module.",
      "code": "from math import sqrt, pi, ceil\n\nprint(sqrt(25))\nprint(pi)\nprint(ceil(4.2))",
      "language": "python",
      "output": "5.0\n3.141592653589793\n5"
    },
    {
      "kicker": "Specific Import Alias",
      "title": "Use as with a Specific Name",
      "body": "You can also rename an imported function or variable with as.",
      "code": "from math import sqrt as square_root\n\nprint(square_root(100))",
      "language": "python",
      "output": "10.0"
    },
    {
      "kicker": "Fourth Method",
      "title": "Import All Names",
      "body": "The star form imports names that a module makes available for star imports.",
      "code": "from math import *\n\nprint(sqrt(16))\nprint(pi)",
      "language": "python",
      "output": "4.0\n3.141592653589793"
    },
    {
      "kicker": "Best Practice",
      "title": "Why Avoid import *?",
      "body": "Star imports can make it difficult to know where a name came from.",
      "bullets": [
        "Names may overwrite each other.",
        "The source of a function may be unclear.",
        "Explicit imports are easier to read and maintain.",
        "Prefer importing the module or selected names."
      ]
    },
    {
      "kicker": "Multiple Modules",
      "title": "Import More Than One Module",
      "body": "You can import multiple modules in one statement, although separate lines are often clearer.",
      "code": "import math\nimport random\n\nprint(math.sqrt(16))\nprint(random.randint(1, 10))",
      "language": "python",
      "output": "4.0\nA random integer from 1 to 10"
    },
    {
      "kicker": "Standard Library",
      "title": "Python Standard Library",
      "body": "Python includes many modules that are available without installing separate packages.",
      "bullets": [
        "math: mathematical functions",
        "random: random values",
        "datetime: dates and times",
        "statistics: basic statistical calculations",
        "os: operating-system interactions"
      ]
    },
    {
      "kicker": "Standard Library Example",
      "title": "Use the random Module",
      "body": "The random module provides functions for generating pseudo-random values.",
      "code": "import random\n\nnumber = random.randint(1, 6)\nprint(number)",
      "language": "python",
      "output": "A random integer from 1 to 6"
    },
    {
      "kicker": "Standard Library Example",
      "title": "Use the datetime Module",
      "body": "The datetime module provides tools for working with dates and times.",
      "code": "import datetime\n\ncurrent_date = datetime.date.today()\nprint(current_date)",
      "language": "python",
      "output": "The current date"
    },
    {
      "kicker": "Custom Modules",
      "title": "Import Your Own Module",
      "body": "You can import a Python file that you created in your project.",
      "code": "# calculator.py\ndef add(a, b):\n    return a + b\n\n# main.py\nimport calculator\n\nprint(calculator.add(5, 7))",
      "language": "python",
      "output": "12"
    },
    {
      "kicker": "Custom Modules",
      "title": "Import from Your Package",
      "body": "Use dotted names to import a module located inside a package.",
      "code": "# Project structure:\n# project/\n#     main.py\n#     tools/\n#         __init__.py\n#         calculator.py\n\n# main.py\nfrom tools.calculator import add\n\nprint(add(4, 6))",
      "language": "python",
      "output": "10"
    },
    {
      "kicker": "Third-Party Packages",
      "title": "Import an Installed Package",
      "body": "Third-party packages are created by other developers and may need to be installed before importing.",
      "code": "# Install in the terminal:\n# python -m pip install requests\n\n# Use in Python:\nimport requests",
      "language": "python"
    },
    {
      "kicker": "Important Difference",
      "title": "Install vs Import",
      "body": "Installing and importing are two different steps.",
      "bullets": [
        "Install: make a package available in the Python environment.",
        "Import: use the module or package in your code.",
        "A package usually needs to be installed before it can be imported.",
        "Standard-library modules do not normally need separate installation."
      ]
    },
    {
      "kicker": "Import Behavior",
      "title": "Does Python Import a Module Again?",
      "body": "During a normal Python process, a module is usually loaded once and cached in sys.modules.",
      "bullets": [
        "The first import loads and executes the module.",
        "Later imports normally reuse the cached module.",
        "This helps avoid repeatedly executing the same module code."
      ]
    },
    {
      "kicker": "Import Errors",
      "title": "ModuleNotFoundError",
      "body": "Python raises ModuleNotFoundError when it cannot find the requested module.",
      "code": "import unknown_module",
      "language": "python",
      "output": "ModuleNotFoundError: No module named 'unknown_module'"
    },
    {
      "kicker": "Import Errors",
      "title": "ImportError",
      "body": "ImportError can occur when a requested name cannot be imported from a module.",
      "code": "from math import unknown_function",
      "language": "python",
      "output": "ImportError: cannot import name 'unknown_function' from 'math'"
    },
    {
      "kicker": "Naming",
      "title": "Avoid Module Name Conflicts",
      "body": "Do not name your own files after standard-library modules that you need to import.",
      "bullets": [
        "Avoid naming your file math.py when using the math module.",
        "Avoid names such as random.py or datetime.py.",
        "Use clear names such as my_calculator.py."
      ]
    },
    {
      "kicker": "Common Mistakes",
      "title": "Import Mistakes to Avoid",
      "body": "Check the module name, imported name, and project location when an import fails.",
      "bullets": [
        "Misspelling the module name.",
        "Using a function that does not exist.",
        "Forgetting to install a third-party package.",
        "Using the wrong Python environment.",
        "Creating a local file with a conflicting name."
      ]
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Reuse a Calculator Module",
      "body": "Create calculator.py and main.py, then import and use functions from calculator.py.",
      "bullets": [
        "Create an add function.",
        "Create a multiply function.",
        "Import the complete module in main.py.",
        "Import add directly in another example.",
        "Use an alias for the calculator module."
      ]
    },
    {
      "kicker": "Solution",
      "title": "Calculator Import Solution",
      "body": "The main file can import the whole module or selected functions.",
      "code": "# calculator.py\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\n# main.py\nimport calculator\nfrom calculator import add as sum_numbers\n\nprint(calculator.multiply(4, 5))\nprint(sum_numbers(4, 5))",
      "language": "python",
      "output": "20\n9"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "The import statement allows Python code to reuse modules and names from other files and packages.",
      "bullets": [
        "import module",
        "import module as alias",
        "from module import name",
        "from module import name as alias",
        "from module import name1, name2",
        "Prefer clear, explicit imports."
      ]
    }
  ],
  "example": {
    "explanation": "This example demonstrates importing a complete module, importing a selected function, and giving an imported module an alias.",
    "code": "# calculator.py\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\n# main.py\nimport calculator as calc\nfrom calculator import add as sum_numbers\n\nprint(calc.multiply(4, 5))\nprint(sum_numbers(4, 5))",
    "language": "python",
    "output": "20\n9"
  },
  "commonMistakes": [
    "Forgetting to write the module name before accessing its members after using import module.",
    "Trying to import a function that does not exist in the selected module.",
    "Confusing installing a package with importing it.",
    "Using a third-party package before installing it in the active Python environment.",
    "Using the wrong Python interpreter or virtual environment.",
    "Naming a local file after a standard-library module such as math.py or random.py.",
    "Using from module import * and making the source of names unclear.",
    "Running a project from a directory where the custom module cannot be found.",
    "Using an alias in the code but continuing to refer to the original imported name."
  ],
  "exercise": {
    "question": "Create calculator.py with two functions: add(a, b) and multiply(a, b). In main.py, first import the complete calculator module using the alias calc and use calc.multiply(4, 5). Then import add directly with the alias sum_numbers and use sum_numbers(4, 5). Print both results.",
    "hint": "Use import calculator as calc and from calculator import add as sum_numbers.",
    "code": "# calculator.py\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\n# main.py\nimport calculator as calc\nfrom calculator import add as sum_numbers\n\nprint(calc.multiply(4, 5))\nprint(sum_numbers(4, 5))"
  },
  "solution": {
    "explanation": "The first import gives the complete calculator module the alias calc. The second import brings only the add function into the current file and renames it sum_numbers. Both functions can then be called using their imported names.",
    "code": "# calculator.py\ndef add(a, b):\n    return a + b\n\ndef multiply(a, b):\n    return a * b\n\n# main.py\nimport calculator as calc\nfrom calculator import add as sum_numbers\n\nprint(calc.multiply(4, 5))\nprint(sum_numbers(4, 5))",
    "output": "20\n9"
  },
  "quiz": [
    {
      "question": "What is the main purpose of the import statement?",
      "options": [
        "To create a loop",
        "To use code from another module or package",
        "To delete a Python file",
        "To install Python itself"
      ],
      "answer": 1
    },
    {
      "question": "What does import math do?",
      "options": [
        "Imports the math module",
        "Imports only the pi variable",
        "Installs the math module",
        "Creates a new module"
      ],
      "answer": 0
    },
    {
      "question": "How do you access sqrt after import math?",
      "options": [
        "sqrt(25)",
        "math.sqrt(25)",
        "import.sqrt(25)",
        "math->sqrt(25)"
      ],
      "answer": 1
    },
    {
      "question": "What does as do in import math as m?",
      "options": [
        "Deletes the module",
        "Gives the imported module an alias",
        "Installs the module",
        "Runs the module twice"
      ],
      "answer": 1
    },
    {
      "question": "Which statement imports only sqrt from math?",
      "options": [
        "import sqrt.math",
        "from math import sqrt",
        "math from sqrt",
        "include math.sqrt"
      ],
      "answer": 1
    },
    {
      "question": "Which statement imports two names from math?",
      "options": [
        "from math import sqrt, pi",
        "import sqrt and pi from math",
        "from sqrt, pi import math",
        "math.import(sqrt, pi)"
      ],
      "answer": 0
    },
    {
      "question": "What is the difference between install and import?",
      "options": [
        "They always mean the same thing",
        "Install makes a package available; import uses it in code",
        "Import installs Python",
        "Install runs a function"
      ],
      "answer": 1
    },
    {
      "question": "Which error commonly means Python cannot find a requested module?",
      "options": [
        "ValueError",
        "ModuleNotFoundError",
        "ZeroDivisionError",
        "IndentationError"
      ],
      "answer": 1
    },
    {
      "question": "Why is from math import * often discouraged?",
      "options": [
        "It always deletes functions",
        "It can make names and their sources unclear",
        "It cannot import numbers",
        "It only works on Linux"
      ],
      "answer": 1
    },
    {
      "question": "Which statement imports add from tools.calculator?",
      "options": [
        "from tools.calculator import add",
        "import add from tools.calculator",
        "tools.add.calculator",
        "include tools.calculator.add"
      ],
      "answer": 0
    }
  ],
  "takeaways": [
    "import allows code from other modules and packages to be reused.",
    "Use import module to import a complete module.",
    "Use a dot to access members of an imported module.",
    "Use as to create an alias.",
    "Use from module import name to import selected names directly.",
    "Use commas to import multiple names from one module.",
    "Avoid star imports in normal project code.",
    "Installing a third-party package and importing it are different steps.",
    "Use clear module names and the correct Python environment."
  ],
  "teacherNotes": "Start by reviewing modules and packages from the previous lessons. Explain that import is the statement used to bring reusable code into the current file. Demonstrate the examples in separate files so learners can see the difference between importing a complete module and importing a selected function. Teach the dot notation carefully: after import math, use math.sqrt(), while from math import sqrt allows sqrt() directly. Demonstrate aliases with both module imports and selected-name imports. Briefly introduce standard-library modules such as math, random, datetime, and statistics. Distinguish standard-library modules, custom project modules, and third-party packages. Explain that pip installation and import are separate operations. Mention that modules are normally cached in sys.modules after the first import in a running Python process, but do not teach reload mechanics here. Explain ModuleNotFoundError and ImportError through simple examples. Discourage from module import * because it makes code harder to understand. Have students complete the calculator exercise in two files. Ensure the terminal uses the same Python interpreter or environment where any third-party package is installed.",
  "teachingTime": "45-60 minutes"
};
