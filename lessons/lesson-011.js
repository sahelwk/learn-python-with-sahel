window.lessonData = window.lessonData || {};
window.lessonData[11] = {
  "id": 11,
  "title": "Visual Studio Code (VS Code)",
  "category": "Python Introduction",
  "contentStatus": "authored",

  "introduction": "In this lesson, learners will become familiar with Visual Studio Code (VS Code), learn how to install and configure it for Python development, install the Python extension, select a Python interpreter, create Python files, and run their first programs.",

  "definition": "Visual Studio Code (VS Code) is a free source-code editor developed by Microsoft. It supports many programming languages and can be configured for Python development using extensions.",

  "whyItMatters": "VS Code provides a flexible workspace for writing, organizing, running, and debugging Python programs. It is especially useful when learners move from simple exercises to larger projects, web development, and multi-file applications.",

  "objectives": [
    "Explain what Visual Studio Code is and why developers use it.",
    "Download and install VS Code on Windows.",
    "Understand what extensions are and why they are useful.",
    "Install the Microsoft Python extension.",
    "Select the correct Python interpreter.",
    "Create, save, and run a Python file in VS Code.",
    "Use the integrated terminal.",
    "Recognize and troubleshoot common beginner problems."
  ],

  "slides": [
    {
      "kicker": "Introduction",
      "title": "What Is Visual Studio Code?",
      "body": "Visual Studio Code, commonly called VS Code, is a free code editor developed by Microsoft. Programmers use it to write and manage code in different programming languages.",
      "bullets": [
        "It is a source-code editor.",
        "It supports Python, JavaScript, PHP, HTML, CSS, and many other languages.",
        "It is available for Windows, macOS, and Linux.",
        "It can be extended with additional features."
      ],
      "image": "assets/images/vscode-introduction.png"
    },
    {
      "kicker": "Why VS Code?",
      "title": "Why Do Developers Use VS Code?",
      "body": "VS Code provides many useful features that help developers work faster and organize their projects.",
      "bullets": [
        "Syntax highlighting makes code easier to read.",
        "Auto-completion suggests code while typing.",
        "Integrated terminal allows commands to run inside the editor.",
        "Extensions add support for programming languages and tools.",
        "Debugging tools help developers investigate problems."
      ],
      "image": "assets/images/vscode-features.png"
    },
    {
      "kicker": "Installation",
      "title": "Download VS Code",
      "body": "Before using VS Code, download its installer from the official Microsoft website.",
      "bullets": [
        "Open your web browser.",
        "Visit https://code.visualstudio.com/.",
        "Choose the Windows download option.",
        "Wait for the installer to download.",
        "Use the official website to avoid unofficial installers."
      ],
      "image": "assets/images/vscode-download.png"
    },
    {
      "kicker": "Installation",
      "title": "Install VS Code on Windows",
      "body": "After downloading the installer, open it and follow the installation instructions.",
      "bullets": [
        "Open the downloaded installer.",
        "Accept the license agreement.",
        "Choose the installation location.",
        "Review the additional task options.",
        "Complete the installation and launch VS Code."
      ],
      "image": "assets/images/vscode-windows-installation.png"
    },
    {
      "kicker": "First Look",
      "title": "Explore the VS Code Interface",
      "body": "When VS Code opens, you will see different areas that help you manage files, write code, search, and work with extensions.",
      "bullets": [
        "Activity Bar: provides access to Explorer, Search, Source Control, Run, and Extensions.",
        "Explorer: displays project folders and files.",
        "Editor: the main area where you write code.",
        "Terminal: allows you to execute commands.",
        "Status Bar: displays information about the current file and environment."
      ],
      "image": "assets/images/vscode-interface.png"
    },
    {
      "kicker": "Project Organization",
      "title": "Open a Project Folder",
      "body": "A project folder keeps related files together. It is better to work inside a project folder instead of saving all files in random locations.",
      "bullets": [
        "Create a folder named python-course.",
        "Open VS Code.",
        "Select File and then Open Folder.",
        "Choose the python-course folder.",
        "Use Explorer to create and manage files."
      ],
      "code": "python-course/\n    hello.py\n    practice.py",
      "image": "assets/images/vscode-open-folder.png"
    },
    {
      "kicker": "Extensions",
      "title": "What Are VS Code Extensions?",
      "body": "Extensions are additional tools that add new features to VS Code. They can provide programming language support, formatting, themes, and other development features.",
      "bullets": [
        "Extensions add features to the editor.",
        "Different extensions serve different purposes.",
        "You can install them from the Extensions panel.",
        "Only install trusted extensions from reliable publishers."
      ],
      "image": "assets/images/vscode-extensions.png"
    },
    {
      "kicker": "Python Setup",
      "title": "Install the Python Extension",
      "body": "To work comfortably with Python in VS Code, install the official Python extension published by Microsoft.",
      "bullets": [
        "Open the Extensions panel.",
        "Search for Python.",
        "Find the Python extension published by Microsoft.",
        "Click Install.",
        "The extension provides Python language support and development features."
      ],
      "image": "assets/images/vscode-python-extension.png"
    },
    {
      "kicker": "Important Concept",
      "title": "What Is a Python Interpreter?",
      "body": "A Python interpreter is the software that executes Python code. VS Code needs to know which installed Python interpreter your project should use.",
      "bullets": [
        "The interpreter executes Python instructions.",
        "You can have multiple Python versions installed.",
        "Different projects may use different environments.",
        "VS Code lets you select the interpreter for your workspace."
      ],
      "image": "assets/images/vscode-python-interpreter.png"
    },
    {
      "kicker": "Configuration",
      "title": "Select the Python Interpreter",
      "body": "After installing the Python extension, select the Python interpreter that you want VS Code to use.",
      "bullets": [
        "Open the Command Palette using Ctrl + Shift + P.",
        "Search for Python: Select Interpreter.",
        "Choose the Python version installed on your computer.",
        "Check that the selected interpreter is correct.",
        "The available choices depend on your installed Python versions and environments."
      ],
      "image": "assets/images/vscode-select-interpreter.png"
    },
    {
      "kicker": "First Python File",
      "title": "Create a Python File",
      "body": "Now that VS Code is configured, create your first Python source file.",
      "bullets": [
        "Open your project folder.",
        "Create a new file.",
        "Name the file hello.py.",
        "The .py extension identifies a Python source file.",
        "Write Python code inside the editor."
      ],
      "code": "print(\"Hello from VS Code!\")",
      "image": "assets/images/vscode-create-python-file.png"
    },
    {
      "kicker": "Run Python",
      "title": "Run Your First Python Program",
      "body": "VS Code can run Python files through the selected interpreter. You can use the Run Python File button or the integrated terminal.",
      "bullets": [
        "Save your hello.py file.",
        "Click the Run Python File button if available.",
        "Alternatively, open the integrated terminal.",
        "Run the command shown below.",
        "Check the output in the terminal."
      ],
      "code": "python hello.py",
      "image": "assets/images/vscode-run-python.png"
    },
    {
      "kicker": "Integrated Terminal",
      "title": "Use the Terminal Inside VS Code",
      "body": "The integrated terminal lets you execute commands without leaving VS Code.",
      "bullets": [
        "Open Terminal from the top menu.",
        "Choose New Terminal.",
        "The terminal appears inside VS Code.",
        "You can run Python commands and manage project tools.",
        "On Windows, you may see PowerShell or Command Prompt."
      ],
      "code": "python --version\npython hello.py",
      "image": "assets/images/vscode-integrated-terminal.png"
    },
    {
      "kicker": "Keyboard Shortcuts",
      "title": "Useful VS Code Shortcuts",
      "body": "Keyboard shortcuts help developers perform common tasks more quickly.",
      "bullets": [
        "Ctrl + S: Save the current file.",
        "Ctrl + Shift + P: Open the Command Palette.",
        "Ctrl + `: Open or close the integrated terminal.",
        "Ctrl + P: Quickly open a file.",
        "Ctrl + F: Find text in the current file."
      ],
      "image": "assets/images/vscode-keyboard-shortcuts.png"
    },
    {
      "kicker": "Code Quality",
      "title": "Understand Errors and Debugging",
      "body": "VS Code and its Python tools can help identify coding problems. Debugging allows developers to execute a program step by step and inspect its behavior.",
      "bullets": [
        "Read error messages carefully.",
        "Look for red or yellow indicators in the editor.",
        "Use breakpoints to pause program execution.",
        "Inspect variable values while debugging.",
        "Always test your program after making changes."
      ],
      "image": "assets/images/vscode-debugging.png"
    },
    {
      "kicker": "Common Problems",
      "title": "Troubleshooting VS Code",
      "body": "Sometimes VS Code may not run Python correctly. Many beginner problems are related to missing extensions, incorrect interpreter selection, or installation settings.",
      "bullets": [
        "If Python is not found, check the Python installation.",
        "If the Python extension is missing, install it.",
        "If the wrong Python version runs, select the correct interpreter.",
        "If a file does not run, save it and check its filename.",
        "If a terminal command fails, check the current folder."
      ],
      "image": "assets/images/vscode-troubleshooting.png"
    },
    {
      "kicker": "Practice",
      "title": "Create a Simple Calculator",
      "body": "Use VS Code to create a Python file that accepts two numbers and displays their sum.",
      "bullets": [
        "Create a file named calculator.py.",
        "Use input() to receive two numbers.",
        "Convert the inputs into integers.",
        "Calculate their sum.",
        "Display the result using print()."
      ],
      "code": "a = int(input(\"Enter first number: \"))\nb = int(input(\"Enter second number: \"))\n\ntotal = a + b\nprint(\"Total:\", total)",
      "image": "assets/images/vscode-python-calculator.png"
    },
    {
      "kicker": "Web Development Connection",
      "title": "VS Code for Web Development",
      "body": "VS Code is not limited to basic Python programs. Developers can use it to build web applications and work with frontend and backend technologies.",
      "bullets": [
        "Write Python code for backend development.",
        "Work with Django, Flask, and FastAPI projects.",
        "Write HTML, CSS, and JavaScript for frontend interfaces.",
        "Use Git to manage source code.",
        "Manage project files and use the integrated terminal."
      ],
      "image": "assets/images/vscode-web-development.png"
    },
    {
      "kicker": "Lesson Summary",
      "title": "What Have We Learned?",
      "body": "VS Code is a flexible editor that can be configured for Python development. With the Python extension and a selected interpreter, learners can create and run Python programs.",
      "bullets": [
        "VS Code is a free source-code editor.",
        "Extensions add development features.",
        "The Python extension provides Python support.",
        "The interpreter executes Python code.",
        "The integrated terminal runs commands.",
        "VS Code can support future Python web development projects."
      ],
      "image": "assets/images/vscode-summary.png"
    }
  ],

  "example": {
    "explanation": "Create a Python file named hello.py in VS Code. Write a print() statement, save the file, and execute it using the Run Python File button or the integrated terminal.",
    "code": "print(\"Hello from VS Code!\")",
    "language": "python",
    "output": "Hello from VS Code!"
  },

  "commonMistakes": [
    "Thinking that VS Code automatically installs Python.",
    "Forgetting to install the Microsoft Python extension.",
    "Selecting an interpreter that does not exist or is not the intended version.",
    "Forgetting to save the Python file before running it.",
    "Writing Python code in a file with the wrong extension.",
    "Running a terminal command from the wrong project folder.",
    "Confusing the VS Code editor with the Python interpreter.",
    "Installing unnecessary or untrusted extensions."
  ],

  "exercise": {
    "question": "Install and configure VS Code for Python development. Create a project folder named python-practice. Inside it, create calculator.py. Write a program that receives two numbers from the user, calculates their sum, and displays the result. Save and run the program.",
    "hint": "Install the Microsoft Python extension, select your installed Python interpreter, and use input(), int(), and print(). You can run the file from the integrated terminal using python calculator.py."
  },

  "solution": {
    "explanation": "The program receives two values from the user, converts them into integers, adds them, and displays the total. It can be written and executed in VS Code.",
    "code": "a = int(input(\"Enter first number: \"))\nb = int(input(\"Enter second number: \"))\n\ntotal = a + b\nprint(\"Total:\", total)",
    "output": "Enter first number: 10\nEnter second number: 20\nTotal: 30"
  },

  "quiz": [
    {
      "question": "Who developed Visual Studio Code?",
      "options": [
        "Google",
        "Microsoft",
        "Apple",
        "Python Software Foundation"
      ],
      "answer": 1,
      "explanation": "Visual Studio Code is a source-code editor developed by Microsoft."
    },
    {
      "question": "What is the purpose of a VS Code extension?",
      "options": [
        "To add new features to the editor",
        "To replace the computer operating system",
        "To remove all Python files",
        "To increase the monitor size"
      ],
      "answer": 0,
      "explanation": "Extensions add features and language support to VS Code."
    },
    {
      "question": "Which extension is commonly used for Python support in VS Code?",
      "options": [
        "Python extension by Microsoft",
        "Photoshop extension",
        "Excel extension",
        "MySQL Server"
      ],
      "answer": 0,
      "explanation": "The Microsoft Python extension provides Python language support and development features."
    },
    {
      "question": "What does a Python interpreter do?",
      "options": [
        "Designs the VS Code interface",
        "Executes Python code",
        "Creates image files",
        "Installs Windows"
      ],
      "answer": 1,
      "explanation": "The Python interpreter executes Python instructions."
    },
    {
      "question": "Which shortcut opens the Command Palette?",
      "options": [
        "Ctrl + S",
        "Ctrl + F",
        "Ctrl + Shift + P",
        "Ctrl + P"
      ],
      "answer": 2,
      "explanation": "Ctrl + Shift + P opens the Command Palette in VS Code."
    },
    {
      "question": "Which command can run a file named hello.py?",
      "options": [
        "python hello.py",
        "install hello.py",
        "pip hello.py",
        "open python"
      ],
      "answer": 0,
      "explanation": "The python hello.py command executes the specified Python file when Python is correctly configured."
    }
  ],

  "takeaways": [
    "VS Code is a free and flexible source-code editor.",
    "The Python extension adds Python development support.",
    "A Python interpreter is required to execute Python code.",
    "The integrated terminal allows commands to run inside VS Code.",
    "Python files commonly use the .py extension.",
    "VS Code can be used for Python scripts and web development projects."
  ],

  "teacherNotes": "Start by explaining that VS Code is an editor, not the Python programming language or interpreter. Demonstrate downloading and installing VS Code from the official website. Show the Extensions panel and install the Microsoft Python extension. Then demonstrate opening a project folder, selecting the Python interpreter, creating hello.py, saving it, and running it. Explain the integrated terminal and useful keyboard shortcuts. Finally, let learners create calculator.py and run it themselves. Since this course will focus strongly on web development, briefly explain that VS Code can later be used for Django, Flask, FastAPI, HTML, CSS, JavaScript, and Git workflows. Do not require students to install every available extension. Image paths are placeholders and matching image files must be added to assets/images for them to appear.",

  "teachingTime": "60-75 minutes"
};