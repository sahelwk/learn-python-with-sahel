window.lessonData = window.lessonData || {};
window.lessonData[50] = {
  "id": 50,
  "title": "Parameters and Arguments",
  "category": "Python Functions",
  "contentStatus": "authored",
  "introduction": "Parameters and Arguments allow us to pass information into functions. They make functions flexible and reusable with different values.",
  "definition": "Parameters are variables defined inside a function's parentheses, while arguments are the actual values passed to the function when it is called.",
  "whyItMatters": "Parameters and arguments allow functions to work with different information instead of performing the same fixed task every time.",
  "objectives": [
    "Understand the difference between parameters and arguments.",
    "Pass information into a function.",
    "Use one or multiple parameters.",
    "Pass different arguments to the same function.",
    "Understand positional arguments.",
    "Use default parameters.",
    "Use keyword arguments."
  ],
  "slides": [
    {
      "kicker": "Introduction",
      "title": "Parameters and Arguments",
      "body": "Functions can receive information when they are called.",
      "bullets": [
        "Parameters receive information",
        "Arguments provide information",
        "Functions become more flexible"
      ]
    },
    {
      "kicker": "Review",
      "title": "A Function Without Parameters",
      "body": "This function always displays the same message.",
      "code": "def greet():\n    print(\"Hello Ahmad!\")\n\ngreet()",
      "language": "python",
      "output": "Hello Ahmad!"
    },
    {
      "kicker": "Problem",
      "title": "What If We Want Different Names?",
      "body": "We want to greet different people without creating a new function for every person.",
      "bullets": [
        "Hello Ahmad!",
        "Hello Mina!",
        "Hello Ali!"
      ]
    },
    {
      "kicker": "Solution",
      "title": "Passing Information",
      "body": "We can pass a name into a function and use it inside the function.",
      "code": "def greet(name):\n    print(\"Hello\", name)\n\ngreet(\"Ahmad\")\ngreet(\"Mina\")\ngreet(\"Ali\")",
      "language": "python",
      "output": "Hello Ahmad\nHello Mina\nHello Ali"
    },
    {
      "kicker": "Definition",
      "title": "What Is a Parameter?",
      "body": "A parameter is a variable written inside the parentheses of a function definition.",
      "code": "def greet(name):\n    print(\"Hello\", name)",
      "language": "python",
      "bullets": [
        "name is a parameter",
        "It receives information",
        "It is used inside the function"
      ]
    },
    {
      "kicker": "Definition",
      "title": "What Is an Argument?",
      "body": "An argument is the actual value we provide when calling a function.",
      "code": "greet(\"Ahmad\")",
      "language": "python",
      "bullets": [
        "\"Ahmad\" is the argument",
        "The argument is passed to the function",
        "The parameter receives the value"
      ]
    },
    {
      "kicker": "Comparison",
      "title": "Parameter vs Argument",
      "body": "They are related, but they are not the same.",
      "bullets": [
        "Parameter: name in def greet(name)",
        "Argument: value in greet(\"Ahmad\")",
        "Parameter receives the argument"
      ]
    },
    {
      "kicker": "One Parameter",
      "title": "Using One Parameter",
      "body": "A function can receive one piece of information.",
      "code": "def show_city(city):\n    print(\"City:\", city)\n\nshow_city(\"Kabul\")\nshow_city(\"Herat\")\nshow_city(\"Mazar\")",
      "language": "python",
      "output": "City: Kabul\nCity: Herat\nCity: Mazar"
    },
    {
      "kicker": "Multiple Parameters",
      "title": "Using Two Parameters",
      "body": "A function can receive multiple pieces of information.",
      "code": "def student_info(name, age):\n    print(\"Name:\", name)\n    print(\"Age:\", age)\n\nstudent_info(\"Ahmad\", 20)",
      "language": "python",
      "output": "Name: Ahmad\nAge: 20"
    },
    {
      "kicker": "Understanding",
      "title": "How Multiple Parameters Work",
      "body": "Arguments are assigned to parameters according to their position when using positional arguments.",
      "bullets": [
        "First argument → first parameter",
        "Second argument → second parameter",
        "The order matters"
      ]
    },
    {
      "kicker": "Practical",
      "title": "Calculating Total",
      "body": "We can pass numbers into a function to perform calculations.",
      "code": "def calculate_total(price, quantity):\n    total = price * quantity\n    print(\"Total:\", total)\n\ncalculate_total(100, 3)\ncalculate_total(250, 2)",
      "language": "python",
      "output": "Total: 300\nTotal: 500"
    },
    {
      "kicker": "Positional",
      "title": "Positional Arguments",
      "body": "Positional arguments are matched to parameters according to their order.",
      "code": "def describe(name, age):\n    print(name, age)\n\ndescribe(\"Ahmad\", 20)\ndescribe(\"Mina\", 22)",
      "language": "python",
      "output": "Ahmad 20\nMina 22"
    },
    {
      "kicker": "Order",
      "title": "Why Argument Order Matters",
      "body": "Changing the order of positional arguments changes which parameter receives each value.",
      "code": "def describe(name, age):\n    print(\"Name:\", name)\n    print(\"Age:\", age)\n\ndescribe(20, \"Ahmad\")",
      "language": "python",
      "output": "Name: 20\nAge: Ahmad"
    },
    {
      "kicker": "Keyword Arguments",
      "title": "Passing Keyword Arguments",
      "body": "We can specify parameter names when passing arguments.",
      "code": "def student_info(name, age):\n    print(\"Name:\", name)\n    print(\"Age:\", age)\n\nstudent_info(age=20, name=\"Ahmad\")",
      "language": "python",
      "output": "Name: Ahmad\nAge: 20"
    },
    {
      "kicker": "Keyword Arguments",
      "title": "Why Use Keyword Arguments?",
      "body": "Keyword arguments make function calls clearer and allow us to specify arguments by parameter name.",
      "bullets": [
        "Specify the parameter name",
        "Order can differ",
        "Improve readability"
      ]
    },
    {
      "kicker": "Default Parameters",
      "title": "What Is a Default Parameter?",
      "body": "A parameter can have a default value that is used when no argument is provided for it.",
      "code": "def greet(name=\"Guest\"):\n    print(\"Hello\", name)\n\ngreet()\ngreet(\"Ahmad\")",
      "language": "python",
      "output": "Hello Guest\nHello Ahmad"
    },
    {
      "kicker": "Default Values",
      "title": "Using Multiple Parameters with Defaults",
      "body": "Some parameters can have default values.",
      "code": "def student_info(name, city=\"Kabul\"):\n    print(\"Name:\", name)\n    print(\"City:\", city)\n\nstudent_info(\"Ahmad\")\nstudent_info(\"Mina\", \"Herat\")",
      "language": "python",
      "output": "Name: Ahmad\nCity: Kabul\nName: Mina\nCity: Herat"
    },
    {
      "kicker": "Rules",
      "title": "Default Parameter Rules",
      "body": "In a function definition, parameters without default values must come before parameters with default values.",
      "code": "def student_info(name, city=\"Kabul\"):\n    print(name, city)",
      "language": "python",
      "bullets": [
        "Required parameters before default parameters",
        "Default values are used when omitted",
        "You can override default values"
      ]
    },
    {
      "kicker": "Practical",
      "title": "Calculating a Discount",
      "body": "A default parameter can provide a standard discount percentage.",
      "code": "def calculate_discount(price, discount=10):\n    result = price - (price * discount / 100)\n    print(\"Final price:\", result)\n\ncalculate_discount(1000)\ncalculate_discount(1000, 20)",
      "language": "python",
      "output": "Final price: 900.0\nFinal price: 800.0"
    },
    {
      "kicker": "Common Mistakes",
      "title": "Incorrect Number of Arguments",
      "body": "The number of required arguments must match the function parameters unless defaults or other argument mechanisms are used.",
      "bullets": [
        "Missing required arguments",
        "Too many positional arguments",
        "Incorrect argument order",
        "Confusing parameters and arguments"
      ]
    },
    {
      "kicker": "Common Mistakes",
      "title": "Incorrect Parameter Order",
      "body": "Required parameters must come before default parameters.",
      "code": "# Incorrect\n# def greet(name=\"Guest\", age):\n#     print(name, age)\n\n# Correct\ndef greet(age, name=\"Guest\"):\n    print(age, name)",
      "language": "python"
    },
    {
      "kicker": "Practice",
      "title": "Create a Calculation Function",
      "body": "Create a function named calculate_area that receives length and width.",
      "bullets": [
        "Create two parameters",
        "Calculate length multiplied by width",
        "Print the area",
        "Call the function with different arguments"
      ]
    },
    {
      "kicker": "Practice",
      "title": "Create a Student Function",
      "body": "Create a function named show_student that receives name, age, and city.",
      "bullets": [
        "Use three parameters",
        "Print each value",
        "Call the function for two students"
      ]
    },
    {
      "kicker": "Summary",
      "title": "What Have We Learned?",
      "body": "Parameters and arguments make functions flexible.",
      "bullets": [
        "Parameters are defined in the function",
        "Arguments are passed when calling",
        "Functions can have multiple parameters",
        "Positional arguments follow order",
        "Keyword arguments use parameter names",
        "Default parameters provide fallback values"
      ]
    }
  ],
  "example": {
    "explanation": "The function calculate_total receives price and quantity. The parameters store the supplied arguments. The function multiplies the values and displays the result. We call the same function with different arguments.",
    "code": "def calculate_total(price, quantity):\n    total = price * quantity\n    print(\"Price:\", price)\n    print(\"Quantity:\", quantity)\n    print(\"Total:\", total)\n\ncalculate_total(100, 3)\nprint(\"----------------\")\ncalculate_total(250, 2)",
    "language": "python",
    "output": "Price: 100\nQuantity: 3\nTotal: 300\n----------------\nPrice: 250\nQuantity: 2\nTotal: 500"
  },
  "commonMistakes": [
    "Confusing parameters with arguments.",
    "Providing fewer required arguments than the function expects.",
    "Providing more positional arguments than the function expects.",
    "Passing positional arguments in the wrong order.",
    "Forgetting to provide a required argument.",
    "Placing a required parameter after a default parameter.",
    "Confusing keyword argument names with variable names."
  ],
  "exercise": {
    "question": "Create a function named calculate_salary that receives employee_name, basic_salary, and bonus. Inside the function, calculate the total salary by adding basic_salary and bonus. Print the employee name and total salary. Call the function for two employees. Then modify the function so that bonus has a default value of 2000.",
    "hint": "Use three parameters first. After the first version works, assign a default value to bonus in the function definition."
  },
  "solution": {
    "explanation": "The function receives an employee name, basic salary, and bonus. It calculates the total salary. The bonus parameter has a default value of 2000, so callers can omit it when they want to use the default.",
    "code": "def calculate_salary(employee_name, basic_salary, bonus=2000):\n    total_salary = basic_salary + bonus\n    print(\"Employee:\", employee_name)\n    print(\"Total Salary:\", total_salary)\n\ncalculate_salary(\"Ahmad\", 30000)\ncalculate_salary(\"Mina\", 25000, 5000)",
    "output": "Employee: Ahmad\nTotal Salary: 32000\nEmployee: Mina\nTotal Salary: 30000"
  },
  "quiz": [
    {
      "question": "What is a parameter?",
      "options": [
        "A value printed by Python",
        "A variable defined in a function definition",
        "A Python keyword used for loops",
        "A comment"
      ],
      "answer": 1,
      "explanation": "A parameter is a variable written in the function definition's parentheses."
    },
    {
      "question": "What is an argument?",
      "options": [
        "The actual value passed to a function",
        "A function name",
        "An indentation",
        "A Python module"
      ],
      "answer": 0,
      "explanation": "An argument is the actual value supplied when a function is called."
    },
    {
      "question": "In greet(\"Ahmad\"), what is Ahmad?",
      "options": [
        "A parameter",
        "A keyword",
        "An argument",
        "A function"
      ],
      "answer": 2,
      "explanation": "Ahmad is the argument supplied to the function."
    },
    {
      "question": "What does this function display when called with show_city(\"Herat\")?",
      "options": [
        "Kabul",
        "Herat",
        "city",
        "Nothing"
      ],
      "answer": 1,
      "explanation": "The argument Herat is assigned to the city parameter."
    },
    {
      "question": "What happens with positional arguments?",
      "options": [
        "They are assigned according to their position",
        "They are always ignored",
        "They must be dictionaries",
        "They only work with loops"
      ],
      "answer": 0,
      "explanation": "Positional arguments are matched to parameters according to their order."
    },
    {
      "question": "Which is a keyword argument call?",
      "options": [
        "greet(\"Ahmad\")",
        "greet(name=\"Ahmad\")",
        "greet()",
        "def greet(name)"
      ],
      "answer": 1,
      "explanation": "The argument is explicitly passed using the parameter name."
    },
    {
      "question": "What does a default parameter do?",
      "options": [
        "Deletes a function",
        "Provides a value when an argument is omitted",
        "Always stops the program",
        "Creates a loop"
      ],
      "answer": 1,
      "explanation": "A default parameter value is used when the caller does not supply a value for that parameter."
    },
    {
      "question": "Which function definition is valid?",
      "options": [
        "def greet(name=\"Guest\", age):",
        "def greet(age, name=\"Guest\"):",
        "def greet(,name):",
        "function greet(name):"
      ],
      "answer": 1,
      "explanation": "Required parameters must come before parameters with default values."
    }
  ],
  "takeaways": [
    "Parameters are variables defined in a function definition.",
    "Arguments are actual values passed during a function call.",
    "A function can receive one or more parameters.",
    "Positional arguments are matched according to order.",
    "Keyword arguments are passed using parameter names.",
    "Default parameters provide values when arguments are omitted."
  ],
  "teacherNotes": "Begin by reviewing the previous lesson on creating and calling functions. Ask students how they could make one function greet different people. Introduce a single parameter and a single argument. Use the whiteboard to distinguish the parameter from the argument. Then move to two parameters and explain positional order. Demonstrate keyword arguments and default parameters after students understand the basics. Avoid introducing return, *args, **kwargs, or mutable default values in this lesson. Ask students to predict outputs before running each example.",
  "teachingTime": "60-90 minutes"
};