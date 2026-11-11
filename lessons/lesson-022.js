
window.lessonData = window.lessonData || {};
window.lessonData[22] = {
  "id": 22,
  "title": "Input and Output",
  "category": "Python Basics",
  "contentStatus": "authored",
  "introduction": "This lesson teaches students how to display information using print() and receive information from users using input().",
  "definition": "Input is the data a program receives from a user or another source. Output is the information a program displays or produces.",
  "whyItMatters": "Input and Output make programs interactive. They allow users to provide information and receive useful results.",
  "objectives": [
    "Understand the meaning of input and output.",
    "Display messages and values using print().",
    "Receive user information using input().",
    "Store input in variables.",
    "Understand that input() returns a string.",
    "Convert user input into numbers when needed.",
    "Build a simple interactive Python program."
  ],
  "slides": [
    {
      "kicker": "Python Basics",
      "title": "Input and Output",
      "body": "Programs communicate with users through input and output.",
      "bullets": [
        "Input: Information given to a program.",
        "Output: Information produced by a program.",
        "Python uses input() and print() for basic interaction."
      ],
      "image": "assets/images/input-output-introduction.png"
    },
    {
      "kicker": "Basic Concept",
      "title": "What Is Input?",
      "body": "Input is information that a program receives from a user or another source.",
      "bullets": [
        "A user's name.",
        "A student's age.",
        "A product price.",
        "A password or search term."
      ],
      "image": "assets/images/python-input-concept.png"
    },
    {
      "kicker": "Basic Concept",
      "title": "What Is Output?",
      "body": "Output is the information that a program displays or produces after processing data.",
      "bullets": [
        "A welcome message.",
        "A calculation result.",
        "A student's information.",
        "A report or notification."
      ],
      "image": "assets/images/python-output-concept.png"
    },
    {
      "kicker": "Communication",
      "title": "How Input and Output Work Together",
      "body": "A program receives input, processes the information, and produces output.",
      "bullets": [
        "Input: User enters two numbers.",
        "Processing: Python adds the numbers.",
        "Output: Python displays the result."
      ],
      "code": "first_number = 10\nsecond_number = 20\n\nresult = first_number + second_number\nprint(result)",
      "image": "assets/images/python-input-process-output.png"
    },
    {
      "kicker": "Output",
      "title": "The print() Function",
      "body": "The print() function displays information on the screen.",
      "bullets": [
        "It can display text.",
        "It can display numbers.",
        "It can display variables.",
        "It can display multiple values."
      ],
      "code": "print(\"Hello, students!\")\nprint(100)\nprint(10 + 20)",
      "image": "assets/images/python-print-function.png"
    },
    {
      "kicker": "Output",
      "title": "Printing Text and Numbers",
      "body": "Python can display different types of values using print().",
      "bullets": [
        "Text must be written inside quotation marks.",
        "Numbers do not need quotation marks.",
        "Expressions are calculated before being displayed."
      ],
      "code": "print(\"Welcome to Python\")\nprint(25)\nprint(15 + 5)",
      "image": "assets/images/python-print-text-numbers.png"
    },
    {
      "kicker": "Output",
      "title": "Printing Variables",
      "body": "We can use print() to display values stored in variables.",
      "bullets": [
        "Create a variable.",
        "Store information in it.",
        "Pass the variable to print()."
      ],
      "code": "student_name = \"Ahmad\"\nage = 20\n\nprint(student_name)\nprint(age)",
      "image": "assets/images/python-print-variables.png"
    },
    {
      "kicker": "Output",
      "title": "Printing Multiple Values",
      "body": "The print() function can display multiple values in one statement.",
      "bullets": [
        "Separate values with commas.",
        "Python automatically adds spaces between values by default.",
        "Different data types can be displayed together."
      ],
      "code": "name = \"Ahmad\"\nage = 20\n\nprint(\"Name:\", name, \"Age:\", age)",
      "image": "assets/images/python-print-multiple-values.png"
    },
    {
      "kicker": "Output",
      "title": "The sep Parameter",
      "body": "The sep parameter changes the separator between multiple printed values.",
      "bullets": [
        "The default separator is a space.",
        "You can use a comma, dash, or another string.",
        "sep means separator."
      ],
      "code": "print(\"2026\", \"11\", \"11\", sep=\"-\")\nprint(\"Python\", \"Java\", \"PHP\", sep=\" | \")",
      "image": "assets/images/python-print-sep.png"
    },
    {
      "kicker": "Output",
      "title": "The end Parameter",
      "body": "The end parameter controls what Python prints at the end of a print() statement.",
      "bullets": [
        "By default, print() ends with a new line.",
        "Use end=\" \" to continue on the same line.",
        "You can choose another ending character."
      ],
      "code": "print(\"Hello\", end=\" \")\nprint(\"World\")\n\nprint(\"Python\", end=\"!\")",
      "image": "assets/images/python-print-end.png"
    },
    {
      "kicker": "Input",
      "title": "The input() Function",
      "body": "The input() function allows a program to receive information from the user.",
      "bullets": [
        "Python waits for the user to type something.",
        "The user presses Enter to submit the input.",
        "The entered value is returned by input()."
      ],
      "code": "name = input()\nprint(name)",
      "image": "assets/images/python-input-function.png"
    },
    {
      "kicker": "Input",
      "title": "Using a Prompt with input()",
      "body": "A prompt tells the user what information to enter.",
      "bullets": [
        "Write the prompt inside input().",
        "The prompt is displayed before the user types.",
        "A clear prompt makes a program easier to use."
      ],
      "code": "name = input(\"Enter your name: \")\nprint(\"Welcome\", name)",
      "image": "assets/images/python-input-prompt.png"
    },
    {
      "kicker": "Input",
      "title": "Store User Input in Variables",
      "body": "The value returned by input() can be stored in a variable.",
      "bullets": [
        "The variable keeps the entered value.",
        "You can use that value later.",
        "Use meaningful variable names."
      ],
      "code": "student_name = input(\"Student name: \")\ncity = input(\"Your city: \")\n\nprint(\"Student:\", student_name)\nprint(\"City:\", city)",
      "image": "assets/images/python-input-variables.png"
    },
    {
      "kicker": "Important Rule",
      "title": "input() Returns a String",
      "body": "One important rule: input() returns a string, even when the user enters digits.",
      "bullets": [
        "Entering 25 does not automatically create an integer.",
        "The returned value is text.",
        "Use type() to check the data type."
      ],
      "code": "age = input(\"Enter your age: \")\nprint(type(age))",
      "image": "assets/images/python-input-string.png"
    },
    {
      "kicker": "Type Conversion",
      "title": "Convert Input to an Integer",
      "body": "Use int() when you need a whole number from user input.",
      "bullets": [
        "input() receives text.",
        "int() converts valid integer text into an integer.",
        "The converted value can be used in calculations."
      ],
      "code": "age = int(input(\"Enter your age: \"))\nprint(age + 1)",
      "image": "assets/images/python-input-int.png"
    },
    {
      "kicker": "Type Conversion",
      "title": "Convert Input to a Float",
      "body": "Use float() when the user needs to enter a decimal number.",
      "bullets": [
        "float() converts valid numeric text into a floating-point number.",
        "It supports decimal values.",
        "Useful for prices, measurements, and percentages."
      ],
      "code": "price = float(input(\"Enter product price: \"))\nquantity = int(input(\"Enter quantity: \"))\n\nprint(\"Total:\", price * quantity)",
      "image": "assets/images/python-input-float.png"
    },
    {
      "kicker": "Practical Example",
      "title": "Build a Simple Addition Program",
      "body": "Let's receive two numbers, calculate their sum, and display the result.",
      "bullets": [
        "Ask the user for the first number.",
        "Ask for the second number.",
        "Convert both values to integers.",
        "Calculate and display the sum."
      ],
      "code": "number1 = int(input(\"First number: \"))\nnumber2 = int(input(\"Second number: \"))\n\ntotal = number1 + number2\nprint(\"Total:\", total)",
      "image": "assets/images/python-input-output-addition.png"
    },
    {
      "kicker": "Practical Example",
      "title": "Build a Student Information Program",
      "body": "A simple program can collect and display student information.",
      "bullets": [
        "Receive the student's name.",
        "Receive the student's age.",
        "Receive the student's marks.",
        "Display all collected information."
      ],
      "code": "name = input(\"Student name: \")\nage = int(input(\"Student age: \"))\nmarks = float(input(\"Student marks: \"))\n\nprint(\"--- Student Information ---\")\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Marks:\", marks)",
      "image": "assets/images/python-student-information.png"
    },
    {
      "kicker": "Common Mistakes",
      "title": "Mistakes to Avoid",
      "body": "Understand these common mistakes before building interactive programs.",
      "bullets": [
        "Forgetting quotation marks around text prompts.",
        "Assuming input() automatically returns a number.",
        "Adding numeric text without converting it.",
        "Entering letters when int() or float() is expected.",
        "Using a variable before assigning a value."
      ],
      "code": "# Incorrect: input returns a string\nage = input(\"Age: \")\n# print(age + 1)  # TypeError\n\n# Correct:\nage = int(input(\"Age: \"))\nprint(age + 1)",
      "image": "assets/images/python-input-output-mistakes.png"
    },
    {
      "kicker": "Lesson Summary",
      "title": "What Have We Learned?",
      "body": "Input and Output help Python programs communicate with users.",
      "bullets": [
        "print() displays information.",
        "input() receives user information.",
        "Variables store input values.",
        "input() returns a string.",
        "int() and float() convert numeric input.",
        "sep and end customize print() output."
      ],
      "image": "assets/images/python-input-output-summary.png"
    }
  ],
  "example": {
    "explanation": "This program asks for a student's name, age, and marks. It converts numeric inputs to the appropriate types and displays the collected information.",
    "code": "name = input(\"Enter your name: \")\nage = int(input(\"Enter your age: \"))\nmarks = float(input(\"Enter your marks: \"))\n\nprint(\"--- Student Report ---\")\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Marks:\", marks)",
    "language": "python",
    "output": "Enter your name: Ahmad\nEnter your age: 20\nEnter your marks: 85.5\n--- Student Report ---\nName: Ahmad\nAge: 20\nMarks: 85.5"
  },
  "commonMistakes": [
    "Forgetting quotation marks around text prompts.",
    "Assuming input() returns an integer or float automatically.",
    "Trying to add a string to an integer without conversion.",
    "Using int() when the input contains a decimal number.",
    "Entering non-numeric text when int() or float() is expected.",
    "Forgetting that input() waits for the user to press Enter."
  ],
  "exercise": {
    "question": "Create a simple shopping calculator. Ask the user for a product name, unit price, and quantity. Calculate the total price and display a small receipt containing the product name, unit price, quantity, and total price.",
    "hint": "Use input() for the product name, float() for the unit price, int() for the quantity, and print() to display the receipt."
  },
  "solution": {
    "explanation": "The program collects product information, converts the price and quantity into numeric values, calculates the total, and displays a receipt.",
    "code": "product_name = input(\"Product name: \")\nunit_price = float(input(\"Unit price: \"))\nquantity = int(input(\"Quantity: \"))\n\ntotal = unit_price * quantity\n\nprint(\"--- Shopping Receipt ---\")\nprint(\"Product:\", product_name)\nprint(\"Unit price:\", unit_price)\nprint(\"Quantity:\", quantity)\nprint(\"Total:\", total)",
    "output": "Product name: Notebook\nUnit price: 50\nQuantity: 3\n--- Shopping Receipt ---\nProduct: Notebook\nUnit price: 50.0\nQuantity: 3\nTotal: 150.0"
  },
  "quiz": [
    {
      "question": "Which Python function displays information on the screen?",
      "options": [
        "input()",
        "print()",
        "type()",
        "int()"
      ],
      "answer": 1,
      "explanation": "print() displays text, values, and calculation results."
    },
    {
      "question": "Which function receives information from the user?",
      "options": [
        "print()",
        "float()",
        "input()",
        "len()"
      ],
      "answer": 2,
      "explanation": "input() waits for the user to enter information."
    },
    {
      "question": "What data type does input() return?",
      "options": [
        "Integer",
        "Float",
        "Boolean",
        "String"
      ],
      "answer": 3,
      "explanation": "input() returns a string, even if the user enters digits."
    },
    {
      "question": "Which function converts valid numeric text into an integer?",
      "options": [
        "str()",
        "int()",
        "float()",
        "print()"
      ],
      "answer": 1,
      "explanation": "int() converts valid whole-number text into an integer."
    },
    {
      "question": "Which function is suitable for converting decimal input?",
      "options": [
        "float()",
        "int()",
        "input()",
        "bool()"
      ],
      "answer": 0,
      "explanation": "float() converts valid numeric text into a floating-point number."
    },
    {
      "question": "What does sep=\"-\" do in print()?",
      "options": [
        "Ends the program",
        "Changes the separator between values",
        "Converts values to integers",
        "Receives user input"
      ],
      "answer": 1,
      "explanation": "The sep parameter changes the text placed between multiple printed values."
    },
    {
      "question": "What is the default ending of print()?",
      "options": [
        "A space",
        "A comma",
        "A new line",
        "A dash"
      ],
      "answer": 2,
      "explanation": "By default, print() ends with a newline character."
    },
    {
      "question": "What happens when we run age = input(\"Age: \") and enter 20?",
      "options": [
        "age becomes an integer",
        "age becomes a string",
        "age becomes a float",
        "age becomes a Boolean"
      ],
      "answer": 1,
      "explanation": "input() returns text, so age contains the string \"20\"."
    },
    {
      "question": "Which statement correctly receives a whole number from the user?",
      "options": [
        "age = print()",
        "age = input(int())",
        "age = int(input(\"Age: \"))",
        "age = float(print())"
      ],
      "answer": 2,
      "explanation": "input() receives the text and int() converts it into an integer."
    },
    {
      "question": "What is the output of print(\"Hello\", \"World\", sep=\"-\")?",
      "options": [
        "Hello World",
        "Hello-World",
        "HelloWorld",
        "Hello,World"
      ],
      "answer": 1,
      "explanation": "sep=\"-\" places a dash between the two values."
    }
  ],
  "takeaways": [
    "Input allows a program to receive information.",
    "Output allows a program to display information.",
    "Use print() to display information.",
    "Use input() to receive user information.",
    "input() always returns a string.",
    "Use int() and float() to convert valid numeric input.",
    "Input and Output are essential for interactive applications."
  ],
  "teacherNotes": "Start by asking students how they enter information into a website or application and how the application responds. Explain input, processing, and output using a simple real-life example. Demonstrate print() first, then input(). Ask students to enter their names and observe the result. Emphasize that input() always returns a string. Demonstrate the difference between int(input()) and float(input()). Run the addition example live and then explain the shopping calculator exercise. Ask students to predict the output before running each example. Remind them that int() and float() raise ValueError when the entered text is not a valid number. Keep the lesson practical and let students type the examples themselves.",
  "teachingTime": "60 minutes"
};
