window.lessonData = window.lessonData || {};
window.lessonData[49] = {
  "id": 49,
  "title": "Creating Functions",
  "category": "Python Functions",
  "contentStatus": "authored",
  "introduction": "Functions allow us to organize code into reusable blocks. In this lesson, learners will create, define, and call their first Python functions.",
  "definition": "A function is a named, reusable block of code that performs a specific task when it is called.",
  "whyItMatters": "Functions help programmers avoid repeating code, organize large programs, and make code easier to understand, test, and maintain.",
  "objectives": [
    "Understand what a function is.",
    "Create a function using the def keyword.",
    "Understand the difference between defining and calling a function.",
    "Call a function multiple times.",
    "Recognize the basic structure of a Python function."
  ],
  "slides": [
    {
      "kicker": "Introduction",
      "title": "What Is a Function?",
      "body": "A function is a reusable block of code designed to perform a specific task.",
      "bullets": [
        "Organizes code",
        "Performs a specific task",
        "Can be reused",
        "Runs when called"
      ]
    },
    {
      "kicker": "Real Life",
      "title": "Functions in Daily Life",
      "body": "Think about a task that you perform repeatedly.",
      "bullets": [
        "Making tea",
        "Turning on a computer",
        "Calculating a student's result",
        "Printing a report"
      ]
    },
    {
      "kicker": "Why Functions?",
      "title": "Why Do We Need Functions?",
      "body": "Functions help us avoid writing the same code repeatedly.",
      "bullets": [
        "Reduce code repetition",
        "Improve readability",
        "Organize programs",
        "Make code easier to maintain"
      ]
    },
    {
      "kicker": "Syntax",
      "title": "Creating a Function",
      "body": "Python uses the def keyword to define a function.",
      "code": "def function_name():\n    # Function code\n    print(\"Hello!\")",
      "language": "python"
    },
    {
      "kicker": "Syntax",
      "title": "Understanding Function Syntax",
      "body": "Every part of the function definition has a purpose.",
      "bullets": [
        "def: keyword used to define a function",
        "function_name: name of the function",
        "() : parentheses",
        ": : starts the function body",
        "Indented code: instructions inside the function"
      ]
    },
    {
      "kicker": "First Function",
      "title": "Create Your First Function",
      "body": "Let's create a simple function that displays a welcome message.",
      "code": "def welcome():\n    print(\"Welcome to Python!\")",
      "language": "python",
      "output": "No output appears yet."
    },
    {
      "kicker": "Important",
      "title": "Defining Is Not Calling",
      "body": "Writing a function definition does not execute its body.",
      "bullets": [
        "def creates the function",
        "The function body is stored",
        "The function does not run automatically",
        "We must call it to execute it"
      ]
    },
    {
      "kicker": "Function Call",
      "title": "Calling a Function",
      "body": "To execute a function, write its name followed by parentheses.",
      "code": "def welcome():\n    print(\"Welcome to Python!\")\n\nwelcome()",
      "language": "python",
      "output": "Welcome to Python!"
    },
    {
      "kicker": "Execution",
      "title": "How Does a Function Run?",
      "body": "Python executes the function body when it reaches a function call.",
      "bullets": [
        "Python reads the function definition",
        "The function is created",
        "Python reaches welcome()",
        "The function body executes"
      ]
    },
    {
      "kicker": "Reusability",
      "title": "Calling a Function Multiple Times",
      "body": "One function can be called many times.",
      "code": "def welcome():\n    print(\"Welcome to Python!\")\n\nwelcome()\nwelcome()\nwelcome()",
      "language": "python",
      "output": "Welcome to Python!\nWelcome to Python!\nWelcome to Python!"
    },
    {
      "kicker": "Code Reuse",
      "title": "Without Functions vs With Functions",
      "body": "Functions help us avoid repeating the same instructions.",
      "bullets": [
        "Without functions: repeat the same code",
        "With functions: write it once",
        "Call it whenever needed",
        "Keep programs organized"
      ]
    },
    {
      "kicker": "Function Names",
      "title": "Choosing Good Function Names",
      "body": "A function name should clearly describe what the function does.",
      "bullets": [
        "Use meaningful names",
        "Use lowercase letters",
        "Separate words with underscores",
        "Avoid Python keywords"
      ],
      "code": "def calculate_total():\n    print(\"Calculating total\")\n\ndef show_student_info():\n    print(\"Student information\")",
      "language": "python"
    },
    {
      "kicker": "Indentation",
      "title": "Indentation in Functions",
      "body": "The function body must be indented.",
      "code": "def greet():\n    print(\"Hello\")\n    print(\"How are you?\")\n\ngreet()",
      "language": "python",
      "output": "Hello\nHow are you?"
    },
    {
      "kicker": "Multiple Instructions",
      "title": "More Than One Instruction",
      "body": "A function can contain multiple instructions that perform one task.",
      "code": "def student_info():\n    print(\"Student Name: Ahmad\")\n    print(\"Course: Python\")\n    print(\"Level: Beginner\")\n\nstudent_info()",
      "language": "python",
      "output": "Student Name: Ahmad\nCourse: Python\nLevel: Beginner"
    },
    {
      "kicker": "Execution Order",
      "title": "Where Should We Call a Function?",
      "body": "In a normal Python script, define the function before calling it.",
      "code": "def say_hello():\n    print(\"Hello!\")\n\nsay_hello()",
      "language": "python",
      "output": "Hello!"
    },
    {
      "kicker": "Function and Main Code",
      "title": "Functions in a Small Program",
      "body": "Functions can organize different tasks in one program.",
      "code": "def show_title():\n    print(\"Student Management System\")\n\ndef show_message():\n    print(\"Welcome to the system\")\n\nshow_title()\nshow_message()",
      "language": "python",
      "output": "Student Management System\nWelcome to the system"
    },
    {
      "kicker": "Parameters Preview",
      "title": "Can a Function Receive Information?",
      "body": "Yes. A function can receive information through parameters. We will study parameters in the next lesson.",
      "code": "def greet(name):\n    print(\"Hello\", name)\n\ngreet(\"Ahmad\")",
      "language": "python",
      "output": "Hello Ahmad"
    },
    {
      "kicker": "Built-in vs User-defined",
      "title": "Types of Functions",
      "body": "Python provides built-in functions, and programmers can create their own functions.",
      "bullets": [
        "Built-in: print(), len(), type()",
        "User-defined: functions created with def",
        "Both can be called when needed"
      ]
    },
    {
      "kicker": "Common Mistakes",
      "title": "Mistakes When Creating Functions",
      "body": "Pay attention to the function definition and function call.",
      "bullets": [
        "Forgetting the def keyword",
        "Forgetting parentheses",
        "Forgetting the colon",
        "Incorrect indentation",
        "Defining a function but never calling it"
      ]
    },
    {
      "kicker": "Practice",
      "title": "Create a Welcome Function",
      "body": "Create a function named welcome_message.",
      "bullets": [
        "Print a welcome message inside it",
        "Call the function once",
        "Call it three times",
        "Add one more print statement inside it"
      ]
    },
    {
      "kicker": "Summary",
      "title": "What Have We Learned?",
      "body": "Functions help us organize and reuse code.",
      "bullets": [
        "A function is a reusable block of code",
        "Use def to create a function",
        "Use parentheses when calling it",
        "The body must be indented",
        "A function runs when it is called"
      ]
    }
  ],
  "example": {
    "explanation": "This example creates a function called student_info. The function contains three print statements. It runs when we call student_info(). We call it twice to demonstrate code reuse.",
    "code": "def student_info():\n    print(\"Student Name: Ahmad\")\n    print(\"Course: Python\")\n    print(\"Level: Beginner\")\n\nstudent_info()\nprint(\"----------------\")\nstudent_info()",
    "language": "python",
    "output": "Student Name: Ahmad\nCourse: Python\nLevel: Beginner\n----------------\nStudent Name: Ahmad\nCourse: Python\nLevel: Beginner"
  },
  "commonMistakes": [
    "Forgetting to write def before the function name.",
    "Forgetting the parentheses after the function name.",
    "Forgetting the colon at the end of the function definition.",
    "Writing the function body without indentation.",
    "Expecting the function to execute immediately after defining it.",
    "Calling a function before its definition has been executed in a normal script.",
    "Using unclear or confusing function names."
  ],
  "exercise": {
    "question": "Create a function named show_course_info. Inside it, print the course name, teacher name, and course duration. Then call the function two times.",
    "hint": "Use def to define the function. Put the print statements inside the function and call it using show_course_info()."
  },
  "solution": {
    "explanation": "We define show_course_info once and place three print statements inside it. Calling the function twice displays the same information twice.",
    "code": "def show_course_info():\n    print(\"Course: Python Programming\")\n    print(\"Teacher: Sahel\")\n    print(\"Duration: 45 Days\")\n\nshow_course_info()\nprint(\"----------------\")\nshow_course_info()",
    "output": "Course: Python Programming\nTeacher: Sahel\nDuration: 45 Days\n----------------\nCourse: Python Programming\nTeacher: Sahel\nDuration: 45 Days"
  },
  "quiz": [
    {
      "question": "Which keyword is used to create a function in Python?",
      "options": [
        "function",
        "def",
        "create",
        "return"
      ],
      "answer": 1,
      "explanation": "The def keyword is used to define a function."
    },
    {
      "question": "What does this code do: def greet():",
      "options": [
        "Calls the function",
        "Deletes the function",
        "Defines a function",
        "Prints a message"
      ],
      "answer": 2,
      "explanation": "This line defines a function named greet."
    },
    {
      "question": "When does a function execute?",
      "options": [
        "As soon as we write its name",
        "When it is called",
        "When Python is installed",
        "When we add a comment"
      ],
      "answer": 1,
      "explanation": "A function body executes when the function is called."
    },
    {
      "question": "How do we call a function named welcome?",
      "options": [
        "def welcome:",
        "call welcome",
        "welcome()",
        "welcome:"
      ],
      "answer": 2,
      "explanation": "Write the function name followed by parentheses to call it."
    },
    {
      "question": "Why do programmers use functions?",
      "options": [
        "To repeat code manually",
        "To organize and reuse code",
        "To remove all variables",
        "To stop Python"
      ],
      "answer": 1,
      "explanation": "Functions help organize code and reuse instructions without repeating them."
    },
    {
      "question": "What is required for the function body?",
      "options": [
        "Indentation",
        "A semicolon",
        "A comment",
        "A second def keyword"
      ],
      "answer": 0,
      "explanation": "Python uses indentation to identify the function body."
    }
  ],
  "takeaways": [
    "A function is a reusable block of code.",
    "The def keyword creates a function.",
    "A function definition does not automatically execute its body.",
    "A function is executed when it is called.",
    "Functions make programs more organized and reusable."
  ],
  "teacherNotes": "Start by asking students about tasks they repeat in daily life. Connect those tasks to reusable code. Write a simple function on screen, but do not call it immediately. Run the code and ask students why there is no output. Then add the function call and run it again. Explain def, function name, parentheses, colon, indentation, definition, and calling separately. Finally, call the same function multiple times to demonstrate code reuse. Parameters and return values will be explained in later lessons, so introduce them only briefly.",
  "teachingTime": "45-60 minutes"
};