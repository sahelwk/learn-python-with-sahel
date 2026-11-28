
window.lessonData = window.lessonData || {};
window.lessonData[60] = {
  "id": 60,
  "title": "pip",
  "category": "Professional Python",
  "contentStatus": "authored",
  "introduction": "pip is Python's package installer. It allows developers to install, upgrade, uninstall, inspect, and manage third-party Python packages. In this lesson, students learn how to use pip from the terminal, install packages, verify installations, manage versions, and work with requirements.txt.",
  "definition": "pip is Python's standard package-management tool for installing and managing packages from package indexes such as the Python Package Index (PyPI).",
  "whyItMatters": "Most real-world Python projects use packages created by other developers. pip helps developers install the tools their projects need, manage package versions, and share project dependencies with other developers.",
  "objectives": [
    "Understand what pip is and why developers use it.",
    "Understand the difference between pip, import, and a Python package.",
    "Check whether pip is available and identify its Python environment.",
    "Install third-party packages from the terminal.",
    "Verify installed packages and inspect package information.",
    "Upgrade and uninstall packages.",
    "Install a specific package version.",
    "Use requirements.txt to record and install project dependencies.",
    "Understand why virtual environments are useful when managing packages."
  ],
  "slides": [
    {
      "kicker": "Professional Python",
      "title": "Introduction to pip",
      "body": "pip is a tool used to install and manage Python packages.",
      "bullets": [
        "Install third-party packages.",
        "Upgrade existing packages.",
        "Uninstall packages.",
        "Inspect installed package information."
      ]
    },
    {
      "kicker": "Review",
      "title": "What Is a Python Package?",
      "body": "A package is a way to organize reusable Python modules. Many packages provide functionality created by other developers.",
      "bullets": [
        "Python includes a standard library.",
        "Developers can create their own modules and packages.",
        "Third-party packages can be installed when needed."
      ]
    },
    {
      "kicker": "Definition",
      "title": "What Is pip?",
      "body": "pip is a package installer for Python. It helps you install and manage packages in a Python environment.",
      "bullets": [
        "pip is used from the terminal or command prompt.",
        "It can download packages from package indexes.",
        "It can manage package versions and dependencies."
      ]
    },
    {
      "kicker": "Package Source",
      "title": "What Is PyPI?",
      "body": "PyPI stands for Python Package Index. It is a public repository where developers publish Python packages.",
      "bullets": [
        "Developers upload packages to PyPI.",
        "pip can download packages from PyPI.",
        "Always check whether a package is trustworthy before installing it."
      ]
    },
    {
      "kicker": "Important Difference",
      "title": "pip vs import",
      "body": "pip and import have different jobs.",
      "bullets": [
        "pip installs and manages packages.",
        "import makes code available inside a Python program.",
        "Installation is usually done in the terminal.",
        "Import statements are written in Python files."
      ],
      "code": "# Terminal:\npython -m pip install requests\n\n# Python file:\nimport requests",
      "language": "python"
    },
    {
      "kicker": "Where to Run Commands",
      "title": "Use the Terminal",
      "body": "pip commands are normally executed in a terminal, not as ordinary Python statements.",
      "bullets": [
        "Use the VS Code terminal.",
        "Use Windows Command Prompt or PowerShell.",
        "Do not type pip install commands at the Python >>> prompt."
      ],
      "code": "python -m pip --version",
      "language": "bash"
    },
    {
      "kicker": "Check pip",
      "title": "Check Whether pip Is Available",
      "body": "Use Python to run pip and display its installed version.",
      "code": "python -m pip --version",
      "language": "bash",
      "output": "pip 25.x from ... (python 3.x)"
    },
    {
      "kicker": "Windows",
      "title": "Use the py Launcher",
      "body": "On Windows, the py launcher can also run pip for a selected Python installation.",
      "code": "py -m pip --version",
      "language": "bash",
      "output": "pip version and its installation location"
    },
    {
      "kicker": "Best Practice",
      "title": "Why Use python -m pip?",
      "body": "Running pip through a Python interpreter helps ensure that pip works with the Python environment you selected.",
      "bullets": [
        "python -m pip uses the Python selected by python.",
        "py -m pip uses the Python selected by the Windows launcher.",
        "This helps avoid installing packages into the wrong Python environment."
      ]
    },
    {
      "kicker": "First Command",
      "title": "Install a Package",
      "body": "Use pip install followed by the package name.",
      "code": "python -m pip install requests",
      "language": "bash",
      "output": "Successfully installed requests and its dependencies"
    },
    {
      "kicker": "Installation",
      "title": "What Happens During Installation?",
      "body": "pip finds the package, downloads the required files, and installs the package and its dependencies into the selected environment.",
      "bullets": [
        "Find the requested package.",
        "Resolve compatible dependencies.",
        "Download required distribution files.",
        "Install them in the active Python environment."
      ]
    },
    {
      "kicker": "Use the Package",
      "title": "Import an Installed Package",
      "body": "After installation, import the package in your Python file.",
      "code": "# Terminal:\n# python -m pip install requests\n\n# Python file:\nimport requests\n\nprint(requests.__name__)",
      "language": "python",
      "output": "requests"
    },
    {
      "kicker": "Verify",
      "title": "Check Installed Packages",
      "body": "Use pip list to display packages installed in the selected environment.",
      "code": "python -m pip list",
      "language": "bash",
      "output": "Package       Version\n------------- -------\nrequests      2.x.x\npip           25.x"
    },
    {
      "kicker": "Package Details",
      "title": "Inspect a Package",
      "body": "Use pip show to view information about a particular installed package.",
      "code": "python -m pip show requests",
      "language": "bash",
      "output": "Name: requests\nVersion: 2.x.x\nSummary: Python HTTP for Humans\nLocation: ...\nRequires: ..."
    },
    {
      "kicker": "Upgrade",
      "title": "Upgrade a Package",
      "body": "Use --upgrade to install a newer compatible version of an installed package.",
      "code": "python -m pip install --upgrade requests",
      "language": "bash",
      "output": "Successfully installed or upgraded requests"
    },
    {
      "kicker": "Uninstall",
      "title": "Uninstall a Package",
      "body": "Use pip uninstall followed by the package name to remove it from the selected environment.",
      "code": "python -m pip uninstall requests",
      "language": "bash",
      "output": "Proceed (Y/n)?"
    },
    {
      "kicker": "Package Versions",
      "title": "Install a Specific Version",
      "body": "Use the double equals operator to request a particular package version.",
      "code": "python -m pip install requests==2.31.0",
      "language": "bash",
      "output": "Successfully installed requests-2.31.0"
    },
    {
      "kicker": "Version Requirements",
      "title": "Understand Version Specifiers",
      "body": "Version specifiers let a project request a specific version or an allowed range of versions.",
      "bullets": [
        "== means exactly this version.",
        ">= means this version or newer.",
        "< means older than this version.",
        "!= excludes a particular version."
      ],
      "code": "python -m pip install \"requests>=2.31,<3.0\"",
      "language": "bash"
    },
    {
      "kicker": "Dependencies",
      "title": "What Are Dependencies?",
      "body": "A dependency is another package that a package needs in order to work.",
      "bullets": [
        "Packages can depend on other packages.",
        "pip usually installs required dependencies automatically.",
        "Dependencies can also have their own dependencies."
      ]
    },
    {
      "kicker": "Project Management",
      "title": "What Is requirements.txt?",
      "body": "requirements.txt is a common text file used to record the packages a project needs.",
      "code": "requests==2.31.0\nnumpy>=1.26\n",
      "language": "text"
    },
    {
      "kicker": "Save Dependencies",
      "title": "Create requirements.txt",
      "body": "pip freeze displays installed packages and their versions. Redirect its output to create a requirements file.",
      "code": "python -m pip freeze > requirements.txt",
      "language": "bash",
      "output": "requirements.txt is created in the current directory"
    },
    {
      "kicker": "Install Dependencies",
      "title": "Install from requirements.txt",
      "body": "Use -r to install the packages listed in a requirements file.",
      "code": "python -m pip install -r requirements.txt",
      "language": "bash",
      "output": "The listed packages and their dependencies are installed"
    },
    {
      "kicker": "Virtual Environments",
      "title": "Why Use a Virtual Environment?",
      "body": "A virtual environment keeps a project's installed packages separate from other projects.",
      "bullets": [
        "Different projects can use different package versions.",
        "Project dependencies stay isolated.",
        "The global Python installation stays cleaner.",
        "A project can have its own requirements.txt."
      ]
    },
    {
      "kicker": "Create an Environment",
      "title": "Create a Virtual Environment",
      "body": "Python provides the venv module to create a virtual environment.",
      "code": "python -m venv .venv",
      "language": "bash",
      "output": "A .venv directory is created"
    },
    {
      "kicker": "Activate on Windows",
      "title": "Activate the Environment",
      "body": "Activate the environment before installing packages for that project.",
      "code": "# Command Prompt:\n.venv\\Scripts\\activate.bat\n\n# PowerShell:\n.venv\\Scripts\\Activate.ps1",
      "language": "bash"
    },
    {
      "kicker": "Use the Environment",
      "title": "Install Packages Inside the Environment",
      "body": "After activation, pip installs packages into the active virtual environment.",
      "code": "python -m pip install requests\npython -m pip list",
      "language": "bash",
      "output": "requests appears in the active environment's package list"
    },
    {
      "kicker": "Deactivate",
      "title": "Deactivate a Virtual Environment",
      "body": "Use deactivate to leave the active virtual environment.",
      "code": "deactivate",
      "language": "bash"
    },
    {
      "kicker": "Environment Awareness",
      "title": "Check Which Python Is Running",
      "body": "When package installation and imports do not match, check which Python interpreter is active.",
      "code": "python --version\npython -m pip --version",
      "language": "bash",
      "output": "Python version and pip location for the selected interpreter"
    },
    {
      "kicker": "Troubleshooting",
      "title": "pip Is Not Recognized",
      "body": "If the pip command is not recognized, run pip through Python instead.",
      "code": "python -m pip --version",
      "language": "bash"
    },
    {
      "kicker": "Troubleshooting",
      "title": "No Module Named pip",
      "body": "If pip is missing from a Python installation, the ensurepip module may be able to install or repair it.",
      "code": "python -m ensurepip --upgrade",
      "language": "bash",
      "output": "pip is installed or upgraded if ensurepip is available"
    },
    {
      "kicker": "Troubleshooting",
      "title": "Common Installation Problems",
      "body": "Package installation can fail for several reasons.",
      "bullets": [
        "No internet connection or an unavailable package index.",
        "A misspelled package name.",
        "An incompatible Python version.",
        "A package installed into a different environment.",
        "Insufficient permissions or operating-system restrictions."
      ]
    },
    {
      "kicker": "Security",
      "title": "Install Packages Carefully",
      "body": "Installing a package means allowing code from that package to become part of your environment.",
      "bullets": [
        "Check the package name carefully.",
        "Prefer trusted and well-maintained projects.",
        "Review package documentation and source when appropriate.",
        "Avoid installing unknown packages without a reason."
      ]
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Manage requests",
      "body": "Use pip to install and inspect the requests package.",
      "bullets": [
        "Check the pip version.",
        "Install requests.",
        "Verify the installation with pip show.",
        "List installed packages.",
        "Create a requirements.txt file.",
        "Import requests in a Python file."
      ]
    },
    {
      "kicker": "Solution",
      "title": "Exercise Solution",
      "body": "Run these commands in the terminal, then test the import in a Python file.",
      "code": "python -m pip --version\npython -m pip install requests\npython -m pip show requests\npython -m pip list\npython -m pip freeze > requirements.txt",
      "language": "bash"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "pip helps Python developers install and manage third-party packages.",
      "bullets": [
        "Check pip with python -m pip --version.",
        "Install with python -m pip install package_name.",
        "Inspect with pip show and pip list.",
        "Upgrade with --upgrade.",
        "Remove with uninstall.",
        "Record dependencies in requirements.txt.",
        "Use virtual environments to isolate projects."
      ]
    }
  ],
  "example": {
    "explanation": "This example demonstrates the full basic workflow: install a third-party package in the terminal, inspect it, and import it in a Python file. Run the terminal commands separately from the Python code.",
    "code": "# Terminal commands:\n# python -m pip install requests\n# python -m pip show requests\n\n# Python file:\nimport requests\n\nprint(requests.__name__)",
    "language": "python",
    "output": "requests"
  },
  "commonMistakes": [
    "Typing pip install commands inside a Python file instead of the terminal.",
    "Confusing pip installation with the Python import statement.",
    "Using pip from a different Python installation than the one running the project.",
    "Installing a package globally when the project should use a virtual environment.",
    "Misspelling the package name.",
    "Assuming every package name is identical to the module name used in import statements.",
    "Using pip freeze without understanding that it records packages from the active environment.",
    "Deleting or changing package versions without checking project requirements.",
    "Installing packages from unknown or untrusted sources.",
    "Forgetting to activate the virtual environment before installing project dependencies."
  ],
  "exercise": {
    "question": "Use the terminal to check your pip version, install the requests package, inspect its information, list installed packages, and create a requirements.txt file. Then create a Python file that imports requests and prints its module name.",
    "hint": "Use python -m pip --version, python -m pip install requests, python -m pip show requests, python -m pip list, and python -m pip freeze > requirements.txt.",
    "code": "# Terminal:\npython -m pip --version\npython -m pip install requests\npython -m pip show requests\npython -m pip list\npython -m pip freeze > requirements.txt\n\n# test_pip.py:\nimport requests\n\nprint(requests.__name__)"
  },
  "solution": {
    "explanation": "The terminal commands check pip, install requests, display package details, list installed packages, and save the environment's installed package versions into requirements.txt. The Python file then imports requests and prints its module name. The terminal commands and Python code must be run in their respective places.",
    "code": "# Terminal:\npython -m pip --version\npython -m pip install requests\npython -m pip show requests\npython -m pip list\npython -m pip freeze > requirements.txt\n\n# test_pip.py:\nimport requests\n\nprint(requests.__name__)",
    "output": "requests"
  },
  "quiz": [
    {
      "question": "What is pip mainly used for?",
      "options": [
        "Writing Python functions",
        "Installing and managing Python packages",
        "Creating loops",
        "Running HTML files"
      ],
      "answer": 1
    },
    {
      "question": "Where are pip install commands normally executed?",
      "options": [
        "Inside a Python function",
        "Inside a Python comment",
        "In the terminal or command prompt",
        "Inside a list"
      ],
      "answer": 2
    },
    {
      "question": "Which command checks the pip version for the selected Python interpreter?",
      "options": [
        "python -m pip --version",
        "python import pip",
        "pip create version",
        "python --pip"
      ],
      "answer": 0
    },
    {
      "question": "Which command installs requests?",
      "options": [
        "python -m pip install requests",
        "python -m import requests",
        "python install requests",
        "pip import requests"
      ],
      "answer": 0
    },
    {
      "question": "What is PyPI?",
      "options": [
        "A Python code editor",
        "A public index of Python packages",
        "A Python loop",
        "A database engine"
      ],
      "answer": 1
    },
    {
      "question": "Which command displays installed packages?",
      "options": [
        "python -m pip list",
        "python -m pip delete",
        "python -m pip run",
        "python -m pip create"
      ],
      "answer": 0
    },
    {
      "question": "What does python -m pip show requests do?",
      "options": [
        "Deletes requests",
        "Displays information about requests",
        "Creates requests.py",
        "Runs a web request automatically"
      ],
      "answer": 1
    },
    {
      "question": "Which option upgrades an installed package?",
      "options": [
        "--remove",
        "--upgrade",
        "--import",
        "--rename"
      ],
      "answer": 1
    },
    {
      "question": "What does requirements.txt commonly contain?",
      "options": [
        "Only Python comments",
        "Project package dependencies and often their version requirements",
        "Images and videos",
        "HTML page content"
      ],
      "answer": 1
    },
    {
      "question": "Which command installs packages listed in requirements.txt?",
      "options": [
        "python -m pip install -r requirements.txt",
        "python -m pip import requirements.txt",
        "python requirements.txt install",
        "python -m pip list requirements.txt"
      ],
      "answer": 0
    },
    {
      "question": "Why do developers use virtual environments?",
      "options": [
        "To remove Python",
        "To isolate project dependencies",
        "To replace the operating system",
        "To convert Python into HTML"
      ],
      "answer": 1
    },
    {
      "question": "What does python -m pip uninstall requests do?",
      "options": [
        "Installs requests",
        "Updates Python",
        "Removes requests from the selected environment",
        "Creates a virtual environment"
      ],
      "answer": 2
    }
  ],
  "takeaways": [
    "pip is used to install and manage Python packages.",
    "PyPI is a public index of Python packages.",
    "Use python -m pip to run pip through a selected Python interpreter.",
    "Run pip commands in the terminal, not as ordinary Python statements.",
    "Use install, list, show, install --upgrade, and uninstall for common package tasks.",
    "Use version specifiers when a project needs particular package versions.",
    "Use requirements.txt to record and install project dependencies.",
    "Use virtual environments to keep project dependencies isolated.",
    "Check the active Python environment when imports fail."
  ],
  "teacherNotes": "Begin by connecting this lesson to the previous import lesson. Explain that import uses code inside a Python program, while pip manages package installation from the terminal. Introduce PyPI as a public package index. Demonstrate commands using python -m pip rather than relying only on pip, because learners may have multiple Python installations. Show the installation of requests, then verify it with pip show and pip list. Explain that package distribution names and import names are not always identical. Teach version pinning and requirements.txt as practical project-management skills. Introduce virtual environments with venv and demonstrate activation on Windows Command Prompt and PowerShell. Emphasize that pip freeze records the packages in the currently active environment, so learners should activate the correct environment first. Do not ask students to install many packages unnecessarily. Discuss package trust and the importance of checking package names before installation. Make sure students understand which commands belong in the terminal and which code belongs in a .py file.",
  "teachingTime": "45-60 minutes"
};
