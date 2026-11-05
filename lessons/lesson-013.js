
window.lessonData = window.lessonData || {};
window.lessonData[12] = {
  id: 12,
  title: "Python Extensions",
  category: "Python Introduction",
  contentStatus: "authored",

  introduction:
    "In this lesson, students learn what VS Code extensions are, why Python developers use them, and how to install and use the official Python extension.",

  definition:
    "A VS Code extension is an additional tool that adds new features to Visual Studio Code. The Python extension provides Python language support, code suggestions, debugging, interpreter selection, and other useful development features.",

  whyItMatters:
    "Python extensions make coding easier and more productive. They help developers write, understand, run, and debug Python programs inside VS Code.",

  objectives: [
    "Understand what a VS Code extension is.",
    "Understand the difference between VS Code and the Python extension.",
    "Find and install the official Microsoft Python extension.",
    "Select a Python interpreter in VS Code.",
    "Use Python code suggestions and debugging features.",
    "Understand the role of additional Python extensions."
  ],

  slides: [
    {
      kicker: "Introduction",
      title: "What Are VS Code Extensions?",
      body:
        "Extensions are additional tools that add new features and capabilities to Visual Studio Code.",
      bullets: [
        "VS Code supports many extensions.",
        "Extensions help developers work with different programming languages.",
        "Python developers use extensions to improve their coding experience.",
        "Extensions can be installed or removed when needed."
      ],
      image: "assets/images/python-extensions-introduction.png"
    },
    {
      kicker: "Understanding",
      title: "Why Do We Need Extensions?",
      body:
        "A basic code editor does not provide every feature a developer needs. Extensions add useful development tools.",
      bullets: [
        "Write code more easily.",
        "Get automatic code suggestions.",
        "Find coding errors.",
        "Run and debug programs.",
        "Improve productivity."
      ],
      image: "assets/images/python-extensions-benefits.png"
    },
    {
      kicker: "Python Development",
      title: "What Is the Python Extension?",
      body:
        "The Python extension is an extension for VS Code developed by Microsoft. It provides important Python development features.",
      bullets: [
        "Python language support.",
        "Code completion and suggestions.",
        "Debugging support.",
        "Python interpreter selection.",
        "Integration with other Python tools."
      ],
      image: "assets/images/vscode-python-extension.png"
    },
    {
      kicker: "Installation",
      title: "Open the Extensions Marketplace",
      body:
        "VS Code has a built-in Extensions Marketplace where developers can search for and install extensions.",
      bullets: [
        "Open Visual Studio Code.",
        "Click the Extensions icon in the left sidebar.",
        "Or press Ctrl + Shift + X.",
        "Search for Python."
      ],
      image: "assets/images/vscode-extensions-marketplace.png"
    },
    {
      kicker: "Installation",
      title: "Install the Official Python Extension",
      body:
        "Find the Python extension published by Microsoft and install it.",
      bullets: [
        "Search for Python in Extensions.",
        "Check that the publisher is Microsoft.",
        "Click Install.",
        "Wait until installation finishes.",
        "Avoid installing extensions with unknown publishers unless you trust them."
      ],
      image: "assets/images/vscode-install-python-extension.png"
    },
    {
      kicker: "Important",
      title: "Python and the Python Extension Are Different",
      body:
        "Installing the Python extension does not install the Python programming language itself.",
      bullets: [
        "Python is the programming language.",
        "The Python interpreter executes Python code.",
        "VS Code is the code editor.",
        "The Python extension connects Python development tools with VS Code."
      ],
      image: "assets/images/python-vs-vscode-extension.png"
    },
    {
      kicker: "Configuration",
      title: "Select a Python Interpreter",
      body:
        "VS Code needs to know which installed Python interpreter should be used to run your code.",
      bullets: [
        "Press Ctrl + Shift + P.",
        "Search for Python: Select Interpreter.",
        "Select an installed Python version.",
        "Use the version you want for your project."
      ],
      image: "assets/images/vscode-select-interpreter.png"
    },
    {
      kicker: "Code Assistance",
      title: "Code Completion",
      body:
        "The Python extension helps developers by showing suggestions while they write code.",
      bullets: [
        "Suggestions for Python keywords.",
        "Suggestions for variables and functions.",
        "Help with writing code faster.",
        "Suggestions may depend on the selected interpreter and installed tools."
      ],
      code:
        "name = \"Sahel\"\nprint(name.upper())",
      image: "assets/images/python-code-completion.png"
    },
    {
      kicker: "Code Quality",
      title: "Find Coding Errors",
      body:
        "Python development tools can identify many coding problems and display warnings or errors.",
      bullets: [
        "Highlight syntax problems.",
        "Show warnings in the editor.",
        "Help identify undefined variables.",
        "Use error messages to understand and fix problems."
      ],
      code:
        "print(\"Hello Python\"",
      image: "assets/images/python-error-detection.png"
    },
    {
      kicker: "Running Code",
      title: "Run Python Code in VS Code",
      body:
        "After installing and configuring the Python extension, you can run Python files from VS Code.",
      bullets: [
        "Create a file named hello.py.",
        "Write a Python program.",
        "Save the file.",
        "Use the Run Python File button or terminal.",
        "Check the output."
      ],
      code:
        "print(\"Hello from Python Extension!\")",
      image: "assets/images/vscode-run-python.png"
    },
    {
      kicker: "Debugging",
      title: "Debug Python Programs",
      body:
        "Debugging helps developers find and understand problems in their programs.",
      bullets: [
        "Set a breakpoint.",
        "Start debugging.",
        "Run the program step by step.",
        "Inspect variable values.",
        "Understand where a problem happens."
      ],
      image: "assets/images/vscode-python-debugging.png"
    },
    {
      kicker: "Additional Tools",
      title: "Other Useful Python Extensions",
      body:
        "Developers can install additional extensions depending on their needs and projects.",
      bullets: [
        "Pylance: advanced Python language support.",
        "Jupyter: work with notebooks.",
        "Ruff: Python linting and formatting tools.",
        "Python Indent: helps with Python indentation.",
        "Install only the tools you actually need."
      ],
      image: "assets/images/vscode-python-additional-extensions.png"
    },
    {
      kicker: "Practical Example",
      title: "Create Your First Python File",
      body:
        "Let's create a simple Python program and use VS Code features.",
      bullets: [
        "Create a file named student.py.",
        "Write the code below.",
        "Save the file.",
        "Run the program.",
        "Observe the output."
      ],
      code:
        "name = \"Ahmad\"\nage = 20\n\nprint(\"Name:\", name)\nprint(\"Age:\", age)",
      image: "assets/images/vscode-python-first-file.png"
    },
    {
      kicker: "Important",
      title: "Extensions Do Not Replace Programming Knowledge",
      body:
        "Extensions help developers, but they do not replace understanding Python and writing correct programs.",
      bullets: [
        "Understand the code you write.",
        "Do not blindly accept every suggestion.",
        "Read error messages.",
        "Test your programs.",
        "Learn Python fundamentals step by step."
      ],
      image: "assets/images/python-extensions-developer.png"
    },
    {
      kicker: "Troubleshooting",
      title: "Common Extension Problems",
      body:
        "Sometimes the Python extension does not work as expected. Check the following points.",
      bullets: [
        "Make sure Python is installed.",
        "Check that the Microsoft Python extension is installed.",
        "Select the correct Python interpreter.",
        "Restart VS Code if necessary.",
        "Check the terminal for error messages."
      ],
      image: "assets/images/vscode-python-troubleshooting.png"
    },
    {
      kicker: "Practice",
      title: "Use Code Suggestions",
      body:
        "Practice writing a small program and observe the suggestions provided by VS Code.",
      bullets: [
        "Create a file named practice.py.",
        "Create a variable named student_name.",
        "Write print and type a dot after a string variable.",
        "Observe the available suggestions.",
        "Run the program."
      ],
      code:
        "student_name = \"Ahmad\"\nprint(student_name.upper())\nprint(student_name.lower())",
      image: "assets/images/python-extension-practice.png"
    },
    {
      kicker: "Web Development",
      title: "Python Extensions for Web Development",
      body:
        "VS Code can support Python web development through Python and other useful extensions.",
      bullets: [
        "Python extension for Python development.",
        "Pylance for code intelligence.",
        "Jupyter for data exploration.",
        "Git-related extensions for version control.",
        "Django and Flask projects can be developed in VS Code."
      ],
      image: "assets/images/python-web-development-extensions.png"
    },
    {
      kicker: "Review",
      title: "What Have We Learned?",
      body:
        "We learned how extensions improve the Python development experience in VS Code.",
      bullets: [
        "Extensions add features to VS Code.",
        "Microsoft provides the Python extension.",
        "Python must be installed separately.",
        "The interpreter must be selected.",
        "Extensions support coding, debugging, and productivity."
      ],
      image: "assets/images/python-extensions-summary.png"
    }
  ],

  example: {
    explanation:
      "This example demonstrates a simple Python program. Students can use VS Code suggestions while writing the code and run it through the Python extension.",
    code:
      "student_name = \"Ahmad\"\nage = 20\n\nprint(\"Student:\", student_name)\nprint(\"Age:\", age)\nprint(\"Name in uppercase:\", student_name.upper())",
    language: "python",
    output:
      "Student: Ahmad\nAge: 20\nName in uppercase: AHMAD"
  },

  commonMistakes: [
    "Thinking that installing the Python extension also installs Python itself.",
    "Installing an extension without checking its publisher.",
    "Forgetting to select the correct Python interpreter.",
    "Confusing VS Code with the Python programming language.",
    "Installing too many unnecessary extensions.",
    "Accepting code suggestions without understanding them.",
    "Expecting every extension to work without additional configuration."
  ],

  exercise: {
    question:
      "Install the official Microsoft Python extension in VS Code. Create a file named student.py, write a program that displays a student's name and age, and run it. Then use a code suggestion such as upper() or lower().",
    hint:
      "Open Extensions using Ctrl + Shift + X, search for Python, install the extension published by Microsoft, and select your Python interpreter."
  },

  solution: {
    explanation:
      "The student installs the Microsoft Python extension, selects an installed Python interpreter, creates a Python file, and runs the program. The string methods upper() and lower() demonstrate how code suggestions can help while writing code.",
    code:
      "student_name = \"Ahmad\"\nage = 20\n\nprint(\"Name:\", student_name)\nprint(\"Age:\", age)\nprint(\"Uppercase:\", student_name.upper())\nprint(\"Lowercase:\", student_name.lower())",
    output:
      "Name: Ahmad\nAge: 20\nUppercase: AHMAD\nLowercase: ahmad"
  },

  quiz: [
    {
      question: "What is a VS Code extension?",
      options: [
        "A programming language",
        "An additional tool that adds features to VS Code",
        "A Python variable",
        "A computer operating system"
      ],
      answer: 1,
      explanation:
        "An extension adds extra features and capabilities to Visual Studio Code."
    },
    {
      question: "Who publishes the official Python extension for VS Code?",
      options: [
        "Google",
        "Apple",
        "Microsoft",
        "Python students"
      ],
      answer: 2,
      explanation:
        "The official Python extension for VS Code is published by Microsoft."
    },
    {
      question: "Does installing the Python extension install Python itself?",
      options: [
        "Yes, always",
        "No, Python must be installed separately",
        "Only on Windows",
        "Only when using the terminal"
      ],
      answer: 1,
      explanation:
        "The extension provides development features, while the Python interpreter must be installed separately."
    },
    {
      question: "Which shortcut opens the Extensions panel?",
      options: [
        "Ctrl + S",
        "Ctrl + Shift + X",
        "Ctrl + P",
        "Alt + F4"
      ],
      answer: 1,
      explanation:
        "Ctrl + Shift + X opens the Extensions view in VS Code."
    },
    {
      question: "What does Python: Select Interpreter do?",
      options: [
        "Deletes Python",
        "Changes the VS Code theme",
        "Selects the Python installation used by the project",
        "Creates a new folder"
      ],
      answer: 2,
      explanation:
        "It lets you choose which installed Python interpreter VS Code should use."
    },
    {
      question: "Which extension is useful for advanced Python language support?",
      options: [
        "Pylance",
        "Live Server",
        "Auto Rename Tag",
        "Prettier only"
      ],
      answer: 0,
      explanation:
        "Pylance provides advanced Python language features and code intelligence."
    }
  ],

  takeaways: [
    "VS Code extensions add extra features to the editor.",
    "The Microsoft Python extension supports Python development.",
    "Python must be installed separately from the extension.",
    "Selecting the correct interpreter is important.",
    "Code completion and debugging make development easier.",
    "Extensions help developers but do not replace programming knowledge."
  ],

  teacherNotes:
    "Start by explaining the difference between VS Code, Python, the Python interpreter, and the Python extension. Demonstrate the Extensions Marketplace live. Install the official Microsoft Python extension and show students how to select an interpreter. Let students create student.py and observe code suggestions. Explain that Pylance is an additional tool and that not every extension is required. Avoid spending too much time installing many extensions. Ask students to explain the difference between Python and the Python extension before ending the lesson.",

  teachingTime: "45-60 minutes"
};
