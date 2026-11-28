
window.lessonData = window.lessonData || {};
window.lessonData[58] = {
  "id": 58,
  "title": "Packages",
  "category": "Professional Python",
  "contentStatus": "authored",
  "introduction": "Python packages help developers organize related modules inside directories. In this lesson, students learn how to create a package, organize multiple modules, import modules and functions from a package, and understand the basic role of __init__.py.",
  "definition": "A Python package is a way to organize related modules into a directory so that code can be grouped, imported, and reused more easily.",
  "whyItMatters": "Packages help developers organize large projects into meaningful groups, avoid crowded project folders, and make code easier to maintain and reuse.",
  "objectives": [
    "Understand what a Python package is.",
    "Explain the difference between a module and a package.",
    "Create a package directory with an __init__.py file.",
    "Create multiple modules inside a package.",
    "Import a package module and use its functions.",
    "Import specific functions from package modules.",
    "Understand the basic purpose of __init__.py."
  ],
  "slides": [
    {
      "kicker": "Professional Python",
      "title": "Python Packages",
      "body": "Packages organize related Python modules into directories.",
      "bullets": [
        "A module is a Python file.",
        "A package groups related modules.",
        "Packages help organize larger projects."
      ]
    },
    {
      "kicker": "Review",
      "title": "What Is a Module?",
      "body": "A module is a Python file that contains reusable code.",
      "code": "# calculator.py\n\ndef add(a, b):\n    return a + b",
      "language": "python"
    },
    {
      "kicker": "Introduction",
      "title": "What Is a Package?",
      "body": "A package is a directory that groups related Python modules.",
      "bullets": [
        "It can contain multiple modules.",
        "It helps organize project files.",
        "It allows code to be imported from organized locations."
      ]
    },
    {
      "kicker": "Comparison",
      "title": "Module vs Package",
      "body": "A module is a file, while a package organizes modules in a directory.",
      "bullets": [
        "Module: calculator.py",
        "Package: a directory such as tools/",
        "A package can contain many modules."
      ]
    },
    {
      "kicker": "Why Packages?",
      "title": "Why Do We Need Packages?",
      "body": "Packages help keep large projects organized and easier to maintain.",
      "bullets": [
        "Group related files together.",
        "Keep the main project folder clean.",
        "Make code easier to find.",
        "Support reusable project structures."
      ]
    },
    {
      "kicker": "Project Structure",
      "title": "A Simple Package Structure",
      "body": "A package is represented by a directory containing related Python modules.",
      "code": "my_project/\n    main.py\n    tools/\n        __init__.py\n        calculator.py\n        converter.py",
      "language": "text"
    },
    {
      "kicker": "Important File",
      "title": "What Is __init__.py?",
      "body": "The __init__.py file is commonly used to mark and initialize a regular Python package.",
      "bullets": [
        "It is placed inside the package directory.",
        "It can be empty.",
        "It can contain package initialization code.",
        "It can expose selected package functions."
      ]
    },
    {
      "kicker": "Create a Package",
      "title": "Step 1: Create a Project Folder",
      "body": "Create a folder named my_project for the example.",
      "code": "my_project/",
      "language": "text"
    },
    {
      "kicker": "Create a Package",
      "title": "Step 2: Create a Package Directory",
      "body": "Inside my_project, create a directory named tools.",
      "code": "my_project/\n    tools/",
      "language": "text"
    },
    {
      "kicker": "Create a Package",
      "title": "Step 3: Add __init__.py",
      "body": "Create an __init__.py file inside the tools directory.",
      "code": "my_project/\n    tools/\n        __init__.py",
      "language": "text"
    },
    {
      "kicker": "Create a Module",
      "title": "Step 4: Create calculator.py",
      "body": "Add a module named calculator.py inside the tools package.",
      "code": "# tools/calculator.py\n\ndef add(a, b):\n    return a + b\n\ndef subtract(a, b):\n    return a - b",
      "language": "python"
    },
    {
      "kicker": "Create a Module",
      "title": "Step 5: Create converter.py",
      "body": "Add another module for temperature conversion.",
      "code": "# tools/converter.py\n\ndef celsius_to_fahrenheit(celsius):\n    return (celsius * 9 / 5) + 32",
      "language": "python"
    },
    {
      "kicker": "Project Structure",
      "title": "Review the Package Structure",
      "body": "The tools package now contains two modules and an initialization file.",
      "code": "my_project/\n    main.py\n    tools/\n        __init__.py\n        calculator.py\n        converter.py",
      "language": "text"
    },
    {
      "kicker": "Import a Package Module",
      "title": "Import the Calculator Module",
      "body": "Use the package name, a dot, and the module name to import a module.",
      "code": "import tools.calculator\n\nprint(tools.calculator.add(10, 5))",
      "language": "python",
      "output": "15"
    },
    {
      "kicker": "Import a Package Module",
      "title": "Use an Alias",
      "body": "The as keyword can give an imported package module a shorter name.",
      "code": "import tools.calculator as calc\n\nprint(calc.add(8, 2))",
      "language": "python",
      "output": "10"
    },
    {
      "kicker": "Specific Import",
      "title": "Import a Function from a Package",
      "body": "Use from and import to import a specific function from a package module.",
      "code": "from tools.calculator import add\n\nprint(add(20, 10))",
      "language": "python",
      "output": "30"
    },
    {
      "kicker": "Specific Import",
      "title": "Import Multiple Functions",
      "body": "You can import multiple functions from the same module.",
      "code": "from tools.calculator import add, subtract\n\nprint(add(10, 4))\nprint(subtract(10, 4))",
      "language": "python",
      "output": "14\n6"
    },
    {
      "kicker": "Multiple Modules",
      "title": "Import from Different Modules",
      "body": "A package can contain different modules for different tasks.",
      "code": "from tools.calculator import add\nfrom tools.converter import celsius_to_fahrenheit\n\nprint(add(5, 3))\nprint(celsius_to_fahrenheit(0))",
      "language": "python",
      "output": "8\n32.0"
    },
    {
      "kicker": "Package Initialization",
      "title": "Using __init__.py",
      "body": "An __init__.py file can expose selected functions from package modules.",
      "code": "# tools/__init__.py\nfrom .calculator import add, subtract",
      "language": "python"
    },
    {
      "kicker": "Package Initialization",
      "title": "Import Through the Package",
      "body": "After exposing functions in __init__.py, they can be imported from the package name.",
      "code": "from tools import add, subtract\n\nprint(add(7, 3))\nprint(subtract(7, 3))",
      "language": "python",
      "output": "10\n4"
    },
    {
      "kicker": "Main File",
      "title": "Use the Package in main.py",
      "body": "The main file can import and use the functions provided by the package.",
      "code": "from tools import add, subtract\nfrom tools.converter import celsius_to_fahrenheit\n\nprint(add(10, 5))\nprint(subtract(10, 5))\nprint(celsius_to_fahrenheit(25))",
      "language": "python",
      "output": "15\n5\n77.0"
    },
    {
      "kicker": "How It Works",
      "title": "How Python Finds a Package",
      "body": "When importing a package, Python searches locations in its module search path.",
      "bullets": [
        "Run the main file from the project folder.",
        "Keep the package in a location Python can find.",
        "Use the correct package and module names."
      ]
    },
    {
      "kicker": "Package vs Module",
      "title": "Compare the Two Structures",
      "body": "A module groups code in one file, while a package groups related modules.",
      "code": "Module:\ncalculator.py\n\nPackage:\ntools/\n    __init__.py\n    calculator.py\n    converter.py",
      "language": "text"
    },
    {
      "kicker": "Python Ecosystem",
      "title": "Packages from Other Developers",
      "body": "Developers can install and use packages created by others.",
      "bullets": [
        "Some packages are available from the Python Package Index.",
        "Many third-party packages are installed with pip.",
        "Examples include requests, numpy, and pandas."
      ]
    },
    {
      "kicker": "Common Mistakes",
      "title": "Package Import Errors",
      "body": "Most beginner package errors come from incorrect names or project locations.",
      "bullets": [
        "Misspelling the package or module name.",
        "Running the program from an unexpected directory.",
        "Forgetting to create the package directory.",
        "Importing a function that does not exist."
      ]
    },
    {
      "kicker": "Important Note",
      "title": "Avoid Conflicting Names",
      "body": "Do not give your own files or packages names that conflict with standard library modules or installed packages.",
      "bullets": [
        "Avoid names such as random.py and math.py.",
        "Choose clear project-specific names.",
        "Check your folder structure when imports fail."
      ]
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Create a Student Package",
      "body": "Create a package named school with a module named students.py.",
      "bullets": [
        "Create a school directory.",
        "Add an __init__.py file.",
        "Create students.py.",
        "Define a student_info function.",
        "Import and call it from main.py."
      ]
    },
    {
      "kicker": "Solution",
      "title": "Student Package Solution",
      "body": "The school package contains the students module, and main.py imports its function.",
      "code": "# school/students.py\ndef student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)\n\n# main.py\nfrom school.students import student_info\n\nstudent_info('Ahmad', 20)",
      "language": "python",
      "output": "Name: Ahmad\nAge: 20"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "Packages organize related Python modules into directories.",
      "bullets": [
        "A module is a Python file.",
        "A package groups related modules.",
        "__init__.py is commonly used in regular packages.",
        "Use dotted imports to access package modules.",
        "Packages make large projects easier to organize."
      ]
    }
  ],
  "example": {
    "explanation": "The tools package contains a calculator module. The main.py file imports the add function from that module and uses it to calculate a result.",
    "code": "# Project structure:\n# my_project/\n#     main.py\n#     tools/\n#         __init__.py\n#         calculator.py\n\n# tools/calculator.py\ndef add(a, b):\n    return a + b\n\n# main.py\nfrom tools.calculator import add\n\nprint(add(10, 5))",
    "language": "python",
    "output": "15"
  },
  "commonMistakes": [
    "Confusing a module with a package.",
    "Creating the package directory in the wrong location.",
    "Misspelling package or module names in import statements.",
    "Trying to import a function that is not defined in the selected module.",
    "Running a project from an unexpected working directory.",
    "Assuming __init__.py must always contain code; it can be empty.",
    "Thinking that installing a package with pip is the same as creating a local package.",
    "Using a package name that conflicts with a standard library module or another installed package."
  ],
  "exercise": {
    "question": "Create a package named school. Inside it, create __init__.py and a module named students.py. In students.py, define a function named student_info that accepts name and age and prints both. In main.py, import the function from school.students and call it with 'Ahmad' and 20.",
    "hint": "Use the import path from school.students import student_info. Run main.py from the project root folder.",
    "code": "# school/students.py\ndef student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)\n\n# main.py\nfrom school.students import student_info\nstudent_info('Ahmad', 20)"
  },
  "solution": {
    "explanation": "The school directory is the package. The students.py file is a module inside that package. The main.py file imports the student_info function using the package and module path, then calls it.",
    "code": "# school/students.py\ndef student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)\n\n# main.py\nfrom school.students import student_info\nstudent_info('Ahmad', 20)",
    "output": "Name: Ahmad\nAge: 20"
  },
  "quiz": [
    {
      "question": "What is a Python package?",
      "options": [
        "A directory that organizes related modules",
        "A single variable",
        "A Python loop",
        "A function parameter"
      ],
      "answer": 0
    },
    {
      "question": "What is a module?",
      "options": [
        "A Python file containing code",
        "A folder containing images",
        "A database table",
        "A Python keyword"
      ],
      "answer": 0
    },
    {
      "question": "What is the common purpose of __init__.py?",
      "options": [
        "To start the computer",
        "To mark and initialize a regular package",
        "To install Python",
        "To define every function in a project"
      ],
      "answer": 1
    },
    {
      "question": "Which import accesses the add function from tools/calculator.py?",
      "options": [
        "import add",
        "from tools.calculator import add",
        "from add import tools",
        "include tools.add"
      ],
      "answer": 1
    },
    {
      "question": "Which structure represents a package containing two modules?",
      "options": [
        "tools.py",
        "tools/ with calculator.py and converter.py",
        "calculator.py only",
        "main.py only"
      ],
      "answer": 1
    },
    {
      "question": "Can __init__.py be empty?",
      "options": [
        "No",
        "Yes",
        "Only in Windows",
        "Only when using pip"
      ],
      "answer": 1
    },
    {
      "question": "What does this import do: from tools import add?",
      "options": [
        "Imports add from the tools package namespace",
        "Creates a new package",
        "Deletes the tools folder",
        "Runs pip"
      ],
      "answer": 0
    },
    {
      "question": "What is a main benefit of packages?",
      "options": [
        "They make every program run instantly",
        "They organize related modules and improve project structure",
        "They replace all Python functions",
        "They remove the need for imports"
      ],
      "answer": 1
    }
  ],
  "takeaways": [
    "A module is a Python file.",
    "A package organizes related modules in a directory.",
    "__init__.py is commonly used in regular packages and can be empty.",
    "Use dotted import paths to access modules inside packages.",
    "You can import specific functions from package modules.",
    "Packages help keep larger projects organized and maintainable."
  ],
  "teacherNotes": "Begin by reviewing the previous lesson about modules. Explain that a package groups related modules in a directory. Build the school or tools package live in VS Code. Create the directory, add __init__.py, create two modules, and import their functions from main.py. Emphasize the difference between the package name and the module name in dotted import paths. Explain that __init__.py can be empty and is commonly used for regular packages; modern Python also supports namespace packages without it, but do not teach that advanced detail unless asked. Briefly demonstrate exposing selected functions from __init__.py using relative imports. Run main.py from the project root folder. Distinguish local project packages from third-party packages installed with pip. Avoid advanced relative imports, package distribution, and publishing packages in this lesson.",
  "teachingTime": "45-60 minutes"
};
