window.lessonData = window.lessonData || {};
window.lessonData[10] = {
  "id": 10,
  "title": "Python Editors",
  "category": "Python Introduction",
  "contentStatus": "authored",
  "introduction": "In this lesson, learners discover what a code editor is, why programmers use editors, and how to choose a suitable environment for writing and running Python programs. The lesson introduces IDLE, Visual Studio Code, PyCharm, and online editors.",
  "definition": "A Python editor is a program or online tool that helps you write and manage Python code. Some editors also provide features for running programs, finding errors, debugging, and organizing larger projects.",
  "whyItMatters": "A suitable editor makes code easier to write, read, test, and maintain. Beginners can start with Python IDLE, while developers building larger applications may prefer Visual Studio Code or PyCharm.",
  "objectives": [
    "Explain what a code editor is and why programmers use one.",
    "Identify the main differences between a basic editor, an IDE, and an online editor.",
    "Recognize IDLE, Visual Studio Code, and PyCharm.",
    "Create, save, and run a simple Python file.",
    "Choose an editor based on project needs and personal preferences."
  ],
  "slides": [
    {
      "kicker": "Introduction",
      "title": "What Is a Python Editor?",
      "body": "A Python editor is a tool where you write and work with Python code. Think of it as a workspace for creating programs.",
      "bullets": [
        "Write Python instructions.",
        "Save code in files, usually ending in .py.",
        "Read and organize your code.",
        "Some editors can run and debug programs too."
      ],
      "image": "assets/images/python-editor-introduction.png"
    },
    {
      "kicker": "Why Editors Matter",
      "title": "Why Do Programmers Use Editors?",
      "body": "You can write Python code in a simple text editor, but a programming editor often provides helpful tools that make development easier.",
      "bullets": [
        "Syntax highlighting makes code easier to read.",
        "Auto-completion suggests names and code while typing.",
        "Error indicators help identify possible problems.",
        "Project tools help organize many files."
      ],
      "image": "assets/images/python-editor-benefits.png"
    },
    {
      "kicker": "Important Difference",
      "title": "Editor, IDE, and Terminal",
      "body": "These tools have different purposes, although some applications combine several of them.",
      "bullets": [
        "Code editor: mainly helps you write and manage code.",
        "IDE: combines an editor with development tools such as running and debugging.",
        "Terminal: lets you execute commands and run programs.",
        "An application can include both an editor and a terminal."
      ],
      "image": "assets/images/python-editor-ide-terminal.png"
    },
    {
      "kicker": "Beginner Tool",
      "title": "Python IDLE",
      "body": "IDLE is a basic Python development environment that is commonly included with Python installations from python.org.",
      "bullets": [
        "Useful for beginners and small exercises.",
        "Provides an interactive Python Shell.",
        "Can open, edit, save, and run Python files.",
        "It is a simple starting point for learning."
      ],
      "image": "assets/images/python-idle.png"
    },
    {
      "kicker": "Popular Choice",
      "title": "Visual Studio Code",
      "body": "Visual Studio Code, often called VS Code, is a popular code editor that can be configured for Python development.",
      "bullets": [
        "Install VS Code separately.",
        "Install the Microsoft Python extension for Python support.",
        "Select the Python interpreter you want to use.",
        "Useful for web development, scripts, and multi-file projects."
      ],
      "image": "assets/images/python-vscode.png"
    },
    {
      "kicker": "Another Option",
      "title": "PyCharm",
      "body": "PyCharm is a development environment designed for Python programming. It provides many tools for working with organized projects.",
      "bullets": [
        "Provides code navigation and completion.",
        "Supports running and debugging Python programs.",
        "Helps manage project environments and dependencies.",
        "The available features depend on the edition."
      ],
      "image": "assets/images/python-pycharm.png"
    },
    {
      "kicker": "No Local Setup",
      "title": "Online Python Editors",
      "body": "An online Python editor runs in a web browser. It can be useful when you cannot install software on your computer.",
      "bullets": [
        "Often lets you write and run code in a browser.",
        "Can be convenient for short demonstrations.",
        "Some tools require an account or internet connection.",
        "Check privacy rules before uploading private code or data."
      ],
      "image": "assets/images/python-online-editor.png"
    },
    {
      "kicker": "Choose Wisely",
      "title": "Which Editor Should You Choose?",
      "body": "There is no single editor that is best for every programmer. Choose one that fits your current task.",
      "bullets": [
        "For a first lesson: Python IDLE is enough.",
        "For a flexible development workspace: try VS Code.",
        "For an IDE with many Python-focused tools: consider PyCharm.",
        "For quick practice without installation: consider an online editor."
      ],
      "image": "assets/images/python-editor-comparison.png"
    },
    {
      "kicker": "First Program",
      "title": "Write Your First File",
      "body": "Create a new file in your editor, type the example below, and save it as hello.py. The .py extension identifies a Python source file.",
      "bullets": [
        "Use a clear filename such as hello.py.",
        "Save the file in a folder you can find again.",
        "Make sure the file contains the code shown here.",
        "Run the file using your editor's run option or Python."
      ],
      "code": "print(\"Hello, Python!\")",
      "image": "assets/images/python-editor-first-file.png"
    },
    {
      "kicker": "Run the Program",
      "title": "Run Python from the Terminal",
      "body": "If Python is installed and available in your terminal, you can run a saved Python file with a command.",
      "bullets": [
        "Open a terminal in the folder containing hello.py.",
        "Run the command shown below.",
        "Your program should print Hello, Python!",
        "If the command fails, check your Python installation and current folder."
      ],
      "code": "python hello.py",
      "image": "assets/images/python-editor-run-terminal.png"
    },
    {
      "kicker": "Common Problems",
      "title": "Avoid Beginner Mistakes",
      "body": "Small mistakes can stop a program from running. Learn to check the filename, code, and Python interpreter.",
      "bullets": [
        "Do not confuse the editor with the Python interpreter.",
        "Save your file before running it.",
        "Check spelling, quotation marks, and parentheses.",
        "If Python is not recognized, verify your installation and PATH settings.",
        "In VS Code, confirm that the correct Python interpreter is selected."
      ],
      "image": "assets/images/python-editor-common-mistakes.png"
    },
    {
      "kicker": "Practice",
      "title": "Create a Greeting Program",
      "body": "Use any Python editor available to you. Write a program that displays your name in a greeting.",
      "bullets": [
        "Create a file named greeting.py.",
        "Use print() to display a greeting.",
        "Save and run the program.",
        "Change the greeting and run it again."
      ],
      "code": "print(\"Hello! Welcome to Python.\")",
      "image": "assets/images/python-editor-practice.png"
    },
    {
      "kicker": "Lesson Summary",
      "title": "Choose a Tool and Start Coding",
      "body": "A Python editor gives you a place to write and manage code. Start with a tool that is easy to use, then explore more features as your projects grow.",
      "bullets": [
        "IDLE is a simple beginner option.",
        "VS Code is a flexible editor with Python support through an extension.",
        "PyCharm is a Python-focused development environment.",
        "Online editors can help with quick practice.",
        "The most important skill is understanding, testing, and improving your code."
      ],
      "image": "assets/images/python-editor-summary.png"
    }
  ],
  "example": {
    "explanation": "This simple program can be written in IDLE, VS Code, PyCharm, or a suitable online Python editor. It prints a greeting to the output area.",
    "code": "print(\"Hello, Python!\")",
    "language": "python",
    "output": "Hello, Python!"
  },
  "commonMistakes": [
    "Thinking that a code editor and the Python programming language are the same thing.",
    "Assuming every editor includes Python automatically.",
    "Forgetting to save a file before running it.",
    "Saving a Python program with an incorrect extension or filename.",
    "Running a terminal command from the wrong folder.",
    "Selecting an incorrect Python interpreter in the editor.",
    "Installing extensions or packages without checking that they are appropriate for the project."
  ],
  "exercise": {
    "question": "Choose one Python editor available to you. Create a file named greeting.py, write a program that prints Hello from my first Python file!, save it, and run it. Then change the message and run it again.",
    "hint": "Use print() with a string inside quotation marks. If you save the file as greeting.py, you can run it from the correct terminal folder with python greeting.py when Python is configured."
  },
  "solution": {
    "explanation": "The program uses print() to display a message. The same Python code works in any compatible editor or environment.",
    "code": "print(\"Hello from my first Python file!\")",
    "output": "Hello from my first Python file!"
  },
  "quiz": [
    {
      "question": "What is the main purpose of a Python editor?",
      "options": [
        "To write and manage Python code",
        "To replace the Python language",
        "To create computer hardware",
        "To guarantee that every program has no errors"
      ],
      "answer": 0,
      "explanation": "A Python editor helps you write and manage code. It cannot guarantee that your program is error-free."
    },
    {
      "question": "Which tool is commonly included with Python installations from python.org?",
      "options": [
        "Adobe Photoshop",
        "Python IDLE",
        "Microsoft Excel",
        "MySQL Server"
      ],
      "answer": 1,
      "explanation": "IDLE is commonly included with the standard Python installation from python.org."
    },
    {
      "question": "What is VS Code?",
      "options": [
        "A database language",
        "A Python package manager",
        "A code editor that can be configured for Python",
        "A computer operating system"
      ],
      "answer": 2,
      "explanation": "VS Code is a code editor. Python support is commonly added with the Microsoft Python extension."
    },
    {
      "question": "What does the .py extension usually indicate?",
      "options": [
        "An image file",
        "A Python source file",
        "A database backup",
        "A web browser"
      ],
      "answer": 1,
      "explanation": "Python source files commonly use the .py extension."
    },
    {
      "question": "Which command can run hello.py from the correct terminal folder?",
      "options": [
        "python hello.py",
        "install hello.py",
        "editor hello.py",
        "pip hello.py"
      ],
      "answer": 0,
      "explanation": "The python hello.py command asks Python to execute the file named hello.py."
    }
  ],
  "takeaways": [
    "A Python editor is a workspace for writing and managing code.",
    "IDLE, VS Code, and PyCharm offer different levels of features.",
    "Online editors can be convenient for quick practice.",
    "Save Python source code in files that commonly use the .py extension.",
    "Choose the correct interpreter and test your program after making changes."
  ],
  "teacherNotes": "Demonstrate at least one installed editor live. Ask learners to locate the editor, create a file, save it as greeting.py, run it, and modify the output. Explain the distinction between an editor, an IDE, the Python interpreter, and a terminal. If using VS Code, show how to install the Python extension and select an interpreter. Do not require learners to install every editor; one working environment is sufficient. Image paths are placeholders and will only display if matching image files are added to the website assets folder.",
  "teachingTime": "45-60 minutes"
};