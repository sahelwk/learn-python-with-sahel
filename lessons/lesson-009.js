
window.lessonData = window.lessonData || {};
window.lessonData[9] = {
  "id": 9,
  "title": "Python Installation",
  "category": "Python Introduction",
  "contentStatus": "authored",
  "introduction": "In this lesson, students will install Python on Windows, learn where to download it safely, understand the PATH setting, and verify that Python works correctly from Command Prompt or PowerShell.",
  "definition": "Python installation is the process of installing the Python interpreter and the required tools on a computer so that Python programs can be written and executed.",
  "whyItMatters": "Before students can practice Python programming on their own computer, they need a working Python installation. A correct installation also helps them avoid common problems when running Python commands.",
  "objectives": [
    "Understand why Python must be installed before running Python programs locally.",
    "Know where to download Python from the official source.",
    "Understand the purpose of adding Python to PATH.",
    "Learn how to check the installed Python version.",
    "Run the Python interpreter from Command Prompt or PowerShell.",
    "Run a simple Python program to verify that the installation works.",
    "Understand how to troubleshoot common Python installation problems."
  ],
  "slides": [
    {
      "kicker": "Lesson Introduction",
      "title": "What Will We Do in This Lesson?",
      "body": "Today we will install Python on Windows and make sure it works correctly. By the end of the lesson, you should be able to open a terminal, check the Python version, start Python, and run your first Python command.",
      "image": "assets/images/python-installation.png",
      "bullets": [
        "Download Python from the official source.",
        "Install Python on Windows.",
        "Understand the PATH setting.",
        "Open Command Prompt or PowerShell.",
        "Check the Python version.",
        "Run the first Python command."
      ]
    },
    {
      "kicker": "Step 1",
      "title": "Where Should We Download Python?",
      "body": "Always download Python from the official Python website or another trusted source recommended by your organization. Avoid downloading Python installers from unknown websites because modified installers can be unsafe.",
      "image": "assets/images/python-download.png",
      "bullets": [
        "Official Python website: https://www.python.org/",
        "Windows downloads: https://www.python.org/downloads/windows/",
        "Use a supported Python version for new projects.",
        "Choose the installer that matches your Windows system.",
        "Do not use unknown download websites."
      ]
    },
    {
      "kicker": "Step 2",
      "title": "Which Python Version Should We Install?",
      "body": "For a new beginner project, normally use a current supported Python version. The exact version can change over time, so always check the official Python website and the requirements of the project you are working on.",
      "image": "assets/images/python-version.png",
      "bullets": [
        "Modern Python projects usually use supported Python versions.",
        "Do not install an old version without a reason.",
        "Some existing projects may require a specific Python version.",
        "Always check project requirements before changing versions.",
        "For this course, use a current supported Python 3 version."
      ]
    },
    {
      "kicker": "Step 3",
      "title": "Start the Python Installation",
      "body": "After downloading the Python installer, open the installer and follow the installation steps. Windows may ask for permission to run the installer.",
      "image": "assets/images/python-windows-installer.png",
      "bullets": [
        "Open the downloaded Python installer.",
        "Allow the installer to run if Windows asks for permission.",
        "Read the installation options carefully.",
        "Do not cancel the installation before it finishes.",
        "Wait until the installer reports that Python was installed."
      ]
    },
    {
      "kicker": "Important",
      "title": "Add Python to PATH",
      "body": "On the traditional Windows Python installer, you may see an option such as Add Python.exe to PATH. Enabling this option helps Windows find Python when you type Python commands in Command Prompt or PowerShell.",
      "image": "assets/images/python-add-to-path.png",
      "bullets": [
        "Look for the option to add Python to PATH.",
        "Enable it when the installer provides this option.",
        "PATH helps Windows find executable programs.",
        "This makes commands such as python --version easier to use.",
        "PATH is a Windows environment variable."
      ]
    },
    {
      "kicker": "Important Concept",
      "title": "What Is PATH?",
      "body": "PATH is not a normal folder. It is a Windows environment variable containing locations where the operating system can look for executable programs. When Python is available through PATH, the terminal can find Python without requiring the full installation path.",
      "image": "assets/images/python-path.png",
      "bullets": [
        "PATH is an environment variable in Windows.",
        "It contains locations where executable programs can be found.",
        "Python can be added to PATH during installation.",
        "PATH makes terminal commands easier to use.",
        "Do not confuse PATH with the Python installation folder itself."
      ]
    },
    {
      "kicker": "Step 4",
      "title": "Where Can We See PATH in Windows?",
      "body": "You can view PATH from the Windows Environment Variables settings. Search for Environment Variables from the Start menu, then open the Environment Variables window.",
      "image": "assets/images/windows-environment-variables.png",
      "bullets": [
        "Open the Start menu.",
        "Search for: Environment Variables.",
        "Open: Edit the environment variables for your account.",
        "Click: Environment Variables.",
        "Look for Path under User variables or System variables.",
        "Do not change PATH values unless you understand what you are changing."
      ]
    },
    {
      "kicker": "Step 5",
      "title": "Open Command Prompt",
      "body": "Command Prompt is a Windows terminal where we can type commands. We will use it to check whether Python can be found and executed.",
      "image": "assets/images/windows-command-prompt.png",
      "bullets": [
        "Press Windows + R.",
        "Type cmd.",
        "Press Enter.",
        "A black Command Prompt window will open.",
        "You can also search for Command Prompt from the Start menu."
      ],
      "code": "cmd",
      "language": "text",
      "output": "Command Prompt opens."
    },
    {
      "kicker": "Alternative",
      "title": "Use PowerShell Instead",
      "body": "PowerShell is another Windows terminal. Python commands can also be tested from PowerShell.",
      "image": "assets/images/windows-powershell.png",
      "bullets": [
        "Open the Start menu.",
        "Search for PowerShell.",
        "Open Windows PowerShell or PowerShell.",
        "Run the same Python version commands.",
        "Command Prompt and PowerShell are both useful terminals."
      ]
    },
    {
      "kicker": "Step 6",
      "title": "Check the Python Version",
      "body": "After installation, the first thing we should do is verify that the terminal can find Python. The python --version command asks Python to display its installed version.",
      "image": "assets/images/python-version-check.png",
      "bullets": [
        "Open Command Prompt or PowerShell.",
        "Type python --version.",
        "Press Enter.",
        "A Python 3.x.x version should appear if the command is available.",
        "The exact version number depends on what you installed."
      ],
      "code": "python --version",
      "language": "text",
      "output": "Python 3.x.x"
    },
    {
      "kicker": "Alternative Command",
      "title": "Check Python With the py Command",
      "body": "On Windows, the Python launcher command py may also be available. It can be useful for checking and launching Python versions.",
      "image": "assets/images/python-py-command.png",
      "bullets": [
        "Try py --version.",
        "If the command is available, it will display a Python version.",
        "Some Windows installations use py as the Python launcher.",
        "The availability of py depends on the Python installation."
      ],
      "code": "py --version",
      "language": "text",
      "output": "Python 3.x.x"
    },
    {
      "kicker": "Step 7",
      "title": "Start the Python Interpreter",
      "body": "Now that we know Python is available, we can start the Python interpreter from the terminal. Type python and press Enter.",
      "image": "assets/images/python-terminal.png",
      "bullets": [
        "Type python.",
        "Press Enter.",
        "Python starts in interactive mode.",
        "You will normally see a Python prompt such as >>>.",
        "You can now type Python commands directly."
      ],
      "code": "python",
      "language": "text",
      "output": ">>>"
    },
    {
      "kicker": "Step 8",
      "title": "Run Your First Python Command",
      "body": "The print() function displays information on the screen. We can use it as a simple test to confirm that the Python interpreter is working.",
      "image": "assets/images/python-first-command.png",
      "bullets": [
        "The print() function displays text.",
        "Text is placed inside quotation marks.",
        "Python executes the command immediately in interactive mode.",
        "This is a simple test of your installation."
      ],
      "code": "print(\"Hello, Python!\")",
      "language": "python",
      "output": "Hello, Python!"
    },
    {
      "kicker": "Step 9",
      "title": "Exit the Python Interpreter",
      "body": "When you are inside the Python interpreter, you can exit it and return to the normal terminal. On Windows, you can use exit() or press Ctrl+Z followed by Enter.",
      "image": "assets/images/python-exit.png",
      "bullets": [
        "Type exit() and press Enter.",
        "Or use Ctrl+Z and then Enter on Windows.",
        "After exiting, you return to Command Prompt or PowerShell.",
        "The terminal itself remains open."
      ],
      "code": "exit()",
      "language": "python",
      "output": "Returns to the terminal."
    },
    {
      "kicker": "Troubleshooting",
      "title": "Python Is Not Recognized",
      "body": "If the terminal says that Python is not recognized, the computer may not be able to find the Python command. Check the installation and PATH configuration before reinstalling everything.",
      "image": "assets/images/python-not-recognized.png",
      "bullets": [
        "Make sure Python is actually installed.",
        "Try closing and reopening Command Prompt or PowerShell.",
        "Check whether Python was added to PATH.",
        "Try python --version again.",
        "Try py --version if the py launcher is installed.",
        "If necessary, repair or reinstall Python."
      ],
      "code": "python --version",
      "language": "text",
      "output": "'python' is not recognized..."
    },
    {
      "kicker": "Troubleshooting",
      "title": "Why Does Restarting the Terminal Help?",
      "body": "If you install Python while Command Prompt or PowerShell is already open, that terminal may still have the old environment settings. Closing and reopening the terminal allows it to read the updated environment variables.",
      "image": "assets/images/restart-terminal.png",
      "bullets": [
        "Close the existing terminal.",
        "Open Command Prompt or PowerShell again.",
        "Run python --version again.",
        "Check whether the Python command now works.",
        "Restarting the terminal is simple and often useful after installation."
      ]
    },
    {
      "kicker": "Troubleshooting",
      "title": "Python Command Opens the Microsoft Store",
      "body": "On some Windows systems, typing python may open a Microsoft Store page or show an app execution alias message instead of starting Python. This can be related to Windows app execution aliases or the way Python was installed.",
      "image": "assets/images/python-microsoft-store.png",
      "bullets": [
        "Check whether Python is actually installed.",
        "Try py --version.",
        "Check the Windows App Execution Aliases settings if necessary.",
        "Make sure the intended Python installation is available.",
        "Do not install multiple Python versions without understanding which one your project uses."
      ]
    },
    {
      "kicker": "Important",
      "title": "Python Installation Folder vs PATH",
      "body": "The Python installation folder and PATH are not the same thing. The installation folder contains Python files, while PATH tells Windows where it can look for executable commands.",
      "image": "assets/images/python-folder-vs-path.png",
      "bullets": [
        "Installation folder = where Python files are stored.",
        "PATH = locations Windows searches for executable commands.",
        "Python can exist on the computer without being available through the python command.",
        "Correct PATH configuration can make terminal usage easier."
      ]
    },
    {
      "kicker": "Practical Check",
      "title": "Complete Installation Test",
      "body": "Let's perform the complete test. First check the version, then start Python, then run a print command. If all three steps work, your basic Python installation is ready.",
      "image": "assets/images/python-installation-test.png",
      "bullets": [
        "Check the version.",
        "Start the Python interpreter.",
        "Run print().",
        "Confirm that the expected output appears.",
        "Exit the interpreter when finished."
      ],
      "code": "python --version\npython\nprint(\"Hello, Python!\")\nexit()",
      "language": "text",
      "output": "Python 3.x.x\n>>> Hello, Python!\nReturns to the terminal."
    },
    {
      "kicker": "Practice",
      "title": "Your Installation Checklist",
      "body": "Before continuing to the next lesson, make sure you can complete each item in this checklist without help.",
      "image": "assets/images/python-installation-checklist.png",
      "bullets": [
        "I downloaded Python from a trusted source.",
        "I installed Python successfully.",
        "I understand what PATH means.",
        "python --version works.",
        "py --version works or I understand why it may not be available.",
        "python starts the interpreter.",
        "print(\"Hello, Python!\") works."
      ]
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "Installing Python is the first practical step toward writing Python programs. We learned where to download Python, how installation works, what PATH means, and how to verify the installation from a Windows terminal.",
      "image": "assets/images/python-installation-summary.png",
      "bullets": [
        "Download Python from a trusted official source.",
        "Install a supported Python 3 version.",
        "Add Python to PATH when the installer provides the option.",
        "Use python --version to check the installation.",
        "Use py --version when the Windows Python launcher is available.",
        "Run print() to verify that Python executes code.",
        "Know the basic steps for troubleshooting installation problems."
      ]
    }
  ],
  "example": {
    "explanation": "This is a complete basic test after installing Python on Windows. It checks the version, starts the Python interpreter, runs a simple command, and exits the interpreter.",
    "code": "python --version\npython\nprint(\"Hello, Python!\")\nexit()",
    "language": "text",
    "output": "Python 3.x.x\n>>> Hello, Python!\nReturns to the terminal."
  },
  "commonMistakes": [
    "Downloading Python from an unknown or untrusted website.",
    "Forgetting to add Python to PATH when the installer provides the option.",
    "Assuming PATH is a normal folder instead of a Windows environment variable.",
    "Testing Python in a terminal that was opened before Python was installed.",
    "Thinking that every Python installation must use exactly the same installation folder.",
    "Changing PATH manually without understanding which entries are being changed.",
    "Installing several Python versions without checking which version the project requires.",
    "Assuming that py and python must always behave exactly the same way.",
    "Deleting an existing Python installation just because one terminal command does not work."
  ],
  "exercise": {
    "question": "Install a current supported Python 3 version on Windows. Then open Command Prompt or PowerShell and complete these steps: run python --version, run py --version if available, start Python with python, run print(\"Hello, Python!\"), and exit with exit().",
    "hint": "If python --version does not work, first reopen the terminal and then check whether Python is installed and available through PATH. You can also test py --version."
  },
  "solution": {
    "explanation": "A successful installation should allow the terminal to find Python, display a Python 3 version, start the interpreter, and execute a simple print command.",
    "code": "python --version\npy --version\npython\nprint(\"Hello, Python!\")\nexit()",
    "output": "Python 3.x.x\nPython 3.x.x\n>>> Hello, Python!\nReturns to the terminal."
  },
  "quiz": [
    {
      "question": "Where should you normally download Python from?",
      "options": [
        "An unknown website",
        "The official Python website or another trusted source",
        "A random file-sharing website",
        "A social media comment"
      ],
      "answer": 1,
      "explanation": "Using the official Python website or another trusted source reduces the risk of downloading modified or unsafe installers."
    },
    {
      "question": "What is PATH in Windows?",
      "options": [
        "A programming language",
        "A normal folder containing only Python files",
        "An environment variable containing locations for executable programs",
        "A Python function"
      ],
      "answer": 2,
      "explanation": "PATH is a Windows environment variable that helps the operating system find executable programs."
    },
    {
      "question": "Which command checks the Python version?",
      "options": [
        "python --version",
        "python install",
        "python check-install",
        "python start-version"
      ],
      "answer": 0,
      "explanation": "python --version asks Python to display its installed version."
    },
    {
      "question": "Which command can also be used to check Python on Windows when the Python launcher is available?",
      "options": [
        "py --version",
        "py install",
        "py check",
        "python-launch"
      ],
      "answer": 0,
      "explanation": "The Windows Python launcher can provide the py command, which can be used with --version."
    },
    {
      "question": "What does print(\"Hello, Python!\") do?",
      "options": [
        "Installs Python",
        "Changes PATH",
        "Displays Hello, Python! on the screen",
        "Deletes Python"
      ],
      "answer": 2,
      "explanation": "The print() function displays the supplied text."
    },
    {
      "question": "What should you try if Python was installed but the terminal cannot find it?",
      "options": [
        "Delete Windows",
        "Close and reopen the terminal and check the installation and PATH",
        "Change the monitor",
        "Remove the keyboard"
      ],
      "answer": 1,
      "explanation": "A terminal opened before installation may not have the updated environment settings. PATH and the installation should also be checked."
    }
  ],
  "takeaways": [
    "Download Python from the official Python website or another trusted source.",
    "Install a supported Python 3 version for new projects unless a project requires another version.",
    "PATH helps Windows find executable programs such as Python.",
    "python --version checks whether the python command is available.",
    "py --version can check Python when the Windows Python launcher is available.",
    "The Python interpreter can be started by typing python in the terminal.",
    "print(\"Hello, Python!\") is a simple way to test Python execution.",
    "If a command fails, check installation, PATH, and the terminal session before making major changes."
  ],
  "teacherNotes": "This should be a hands-on lesson. If possible, demonstrate the installation once on a projector and then let students repeat it on their own computers. Emphasize downloading from the official Python website. Explain PATH using a simple analogy: PATH is a list of places Windows looks when you type the name of a program. Do not ask beginners to manually edit PATH unless necessary. After installation, make every student run python --version, optionally py --version, then start Python and execute print(\"Hello, Python!\"). If a student has an error, troubleshoot installation, PATH, terminal restart, and Python launcher availability before reinstalling everything.",
  "teachingTime": "60-75 minutes"
};
