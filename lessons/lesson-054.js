
window.lessonData = window.lessonData || {};
window.lessonData[54] = {
  "id": 54,
  "title": "Scope",
  "category": "Python Functions",
  "contentStatus": "authored",
  "introduction": "Scope defines where a variable can be accessed and used in a Python program. In this lesson, students learn about local and global variables and how variable access works inside and outside functions.",
  "definition": "Scope is the region of a program where a variable is accessible.",
  "whyItMatters": "Understanding scope helps prevent naming conflicts, unexpected behavior, and errors when using variables inside and outside functions.",
  "objectives": [
    "Understand what scope means in Python.",
    "Identify local variables and global variables.",
    "Understand where local and global variables can be accessed.",
    "Recognize how local and global variables with the same name behave.",
    "Use the global keyword to modify a global variable inside a function.",
    "Understand the basic LEGB name resolution order."
  ],
  "slides": [
    {
      "kicker": "Python Functions",
      "title": "Scope",
      "body": "Scope defines where a variable can be accessed and used in a Python program.",
      "bullets": [
        "Some variables are available only inside a function.",
        "Some variables can be accessed from different parts of a program.",
        "Scope helps organize and control variable access."
      ]
    },
    {
      "kicker": "Review",
      "title": "Remember Variables",
      "body": "A variable is a name that refers to a value in a program.",
      "code": "name = 'Ahmad'\nage = 22\n\nprint(name)\nprint(age)",
      "language": "python",
      "output": "Ahmad\n22"
    },
    {
      "kicker": "The Concept",
      "title": "Where Can We Use a Variable?",
      "body": "Not every variable is available everywhere in a program. Its availability depends on where it is defined.",
      "bullets": [
        "A variable created inside a function is usually local.",
        "A variable created outside functions at module level is global.",
        "The location where a variable is defined matters."
      ]
    },
    {
      "kicker": "Definition",
      "title": "What Is Scope?",
      "body": "Scope is the region of a program where a variable can be accessed.",
      "bullets": [
        "Scope controls variable visibility.",
        "It determines where a name can be used.",
        "Python has different levels of scope."
      ]
    },
    {
      "kicker": "Local Scope",
      "title": "What Is a Local Variable?",
      "body": "A local variable is created inside a function and is normally accessible only within that function.",
      "code": "def greet():\n    message = 'Hello'\n    print(message)\n\ngreet()",
      "language": "python",
      "output": "Hello"
    },
    {
      "kicker": "Local Scope",
      "title": "A Local Variable",
      "body": "The variable message is created inside greet. It can be used inside that function.",
      "code": "def greet():\n    message = 'Hello'\n    print(message)\n\ngreet()",
      "language": "python",
      "output": "Hello"
    },
    {
      "kicker": "Local Scope",
      "title": "Can We Access It Outside?",
      "body": "A local variable cannot normally be accessed outside the function where it is defined.",
      "code": "def greet():\n    message = 'Hello'\n    print(message)\n\ngreet()\nprint(message)",
      "language": "python",
      "output": "NameError: name 'message' is not defined"
    },
    {
      "kicker": "Local Scope",
      "title": "Local Variables in Different Functions",
      "body": "A local variable belongs to the function where it is created.",
      "code": "def first_function():\n    number = 10\n    print(number)\n\ndef second_function():\n    number = 20\n    print(number)\n\nfirst_function()\nsecond_function()",
      "language": "python",
      "output": "10\n20"
    },
    {
      "kicker": "Local Scope",
      "title": "Same Name, Different Local Variables",
      "body": "Two functions can have local variables with the same name. Each function uses its own local variable.",
      "code": "def first_function():\n    number = 10\n\ndef second_function():\n    number = 20",
      "language": "python"
    },
    {
      "kicker": "Global Scope",
      "title": "What Is a Global Variable?",
      "body": "A global variable is defined outside functions at the module level and can be accessed from functions in that module.",
      "code": "company = 'ABC Company'\n\ndef show_company():\n    print(company)\n\nshow_company()\nprint(company)",
      "language": "python",
      "output": "ABC Company\nABC Company"
    },
    {
      "kicker": "Global Scope",
      "title": "Access a Global Variable",
      "body": "A function can read a global variable without declaring it as global.",
      "code": "tax_rate = 0.10\n\ndef calculate_tax(amount):\n    tax = amount * tax_rate\n    print(tax)\n\ncalculate_tax(1000)",
      "language": "python",
      "output": "100.0"
    },
    {
      "kicker": "Global Scope",
      "title": "Global Variables Outside Functions",
      "body": "A global variable can also be used outside the function where it is accessed.",
      "code": "country = 'Afghanistan'\n\ndef show_country():\n    print(country)\n\nshow_country()\nprint(country)",
      "language": "python",
      "output": "Afghanistan\nAfghanistan"
    },
    {
      "kicker": "Local vs Global",
      "title": "Understand the Difference",
      "body": "Local and global variables differ mainly in where they are defined and where they can be accessed.",
      "bullets": [
        "Local: defined inside a function.",
        "Global: defined outside functions at module level.",
        "Local: normally accessible only inside its function.",
        "Global: can be read inside functions and outside them."
      ]
    },
    {
      "kicker": "Same Variable Name",
      "title": "Local and Global with the Same Name",
      "body": "A local variable can have the same name as a global variable. Inside the function, the local variable takes priority.",
      "code": "name = 'Ahmad'\n\ndef show_name():\n    name = 'Ali'\n    print(name)\n\nshow_name()\nprint(name)",
      "language": "python",
      "output": "Ali\nAhmad"
    },
    {
      "kicker": "Same Variable Name",
      "title": "Which Value Is Used?",
      "body": "Inside the function, Python uses the local name. Outside the function, the global name is still available.",
      "code": "name = 'Ahmad'\n\ndef show_name():\n    name = 'Ali'\n    print('Inside:', name)\n\nshow_name()\nprint('Outside:', name)",
      "language": "python",
      "output": "Inside: Ali\nOutside: Ahmad"
    },
    {
      "kicker": "Important Rule",
      "title": "Reading a Global Variable",
      "body": "A function can read a global variable without using the global keyword.",
      "code": "count = 10\n\ndef show_count():\n    print(count)\n\nshow_count()",
      "language": "python",
      "output": "10"
    },
    {
      "kicker": "Important Rule",
      "title": "Changing a Global Variable",
      "body": "If we want to assign a new value to a global variable inside a function, we use the global keyword.",
      "code": "count = 10\n\ndef update_count():\n    global count\n    count = 20\n\nupdate_count()\nprint(count)",
      "language": "python",
      "output": "20"
    },
    {
      "kicker": "Global Keyword",
      "title": "What Does global Do?",
      "body": "The global keyword tells Python that a name inside a function refers to a global variable.",
      "bullets": [
        "Use global when assigning to a global name inside a function.",
        "It allows the function to reassign that global variable.",
        "It is not needed just to read a global variable."
      ]
    },
    {
      "kicker": "Global Keyword",
      "title": "Without global",
      "body": "If we assign to a name inside a function, Python treats that name as local unless declared global.",
      "code": "count = 10\n\ndef update_count():\n    count = 20\n    print('Inside:', count)\n\nupdate_count()\nprint('Outside:', count)",
      "language": "python",
      "output": "Inside: 20\nOutside: 10"
    },
    {
      "kicker": "Global Keyword",
      "title": "With global",
      "body": "Using global allows the function to reassign the module-level variable.",
      "code": "count = 10\n\ndef update_count():\n    global count\n    count = 20\n\nupdate_count()\nprint(count)",
      "language": "python",
      "output": "20"
    },
    {
      "kicker": "Common Mistake",
      "title": "Using a Local Variable Outside",
      "body": "A local variable cannot normally be accessed outside its function.",
      "code": "def calculate():\n    total = 500\n\ncalculate()\nprint(total)",
      "language": "python",
      "output": "NameError: name 'total' is not defined"
    },
    {
      "kicker": "Common Mistake",
      "title": "Forgetting global",
      "body": "If we intend to reassign a global variable, we must declare it global before assigning to it.",
      "code": "balance = 1000\n\ndef update_balance():\n    balance = balance + 500\n\nupdate_balance()",
      "language": "python",
      "output": "UnboundLocalError"
    },
    {
      "kicker": "Name Resolution",
      "title": "How Does Python Find a Name?",
      "body": "Python searches different scope levels when it looks for a name.",
      "bullets": [
        "Local: inside the current function.",
        "Enclosing: inside an outer function.",
        "Global: at the module level.",
        "Built-in: Python's built-in names."
      ]
    },
    {
      "kicker": "LEGB Rule",
      "title": "The LEGB Order",
      "body": "Python generally searches names in this order: Local, Enclosing, Global, and Built-in.",
      "bullets": [
        "L = Local",
        "E = Enclosing",
        "G = Global",
        "B = Built-in"
      ]
    },
    {
      "kicker": "Built-in Scope",
      "title": "Built-in Names",
      "body": "Python provides built-in names such as print, len, and sum. We can use them without defining them ourselves.",
      "code": "numbers = [10, 20, 30]\n\nprint(len(numbers))\nprint(sum(numbers))",
      "language": "python",
      "output": "3\n60"
    },
    {
      "kicker": "Practical Example",
      "title": "Calculate an Employee Salary",
      "body": "A function can use a global tax rate while keeping the salary and tax variables local.",
      "code": "tax_rate = 0.10\n\ndef calculate_salary(basic_salary):\n    tax = basic_salary * tax_rate\n    final_salary = basic_salary - tax\n    return final_salary\n\nprint(calculate_salary(30000))",
      "language": "python",
      "output": "27000.0"
    },
    {
      "kicker": "Practical Example",
      "title": "Understand the Variables",
      "body": "The tax_rate variable is global. The tax and final_salary variables are local to calculate_salary.",
      "bullets": [
        "tax_rate is defined outside the function.",
        "basic_salary is a function parameter.",
        "tax is created inside the function.",
        "final_salary is created inside the function."
      ]
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Shop Information",
      "body": "Create a global shop name and a function with a local product variable.",
      "bullets": [
        "Create a global variable shop_name = 'Sahel Store'.",
        "Create a function named show_product.",
        "Inside it, create product = 'Laptop'.",
        "Print both variables inside the function.",
        "Print shop_name outside the function.",
        "Try accessing product outside the function and observe the error."
      ]
    },
    {
      "kicker": "Solution",
      "title": "Shop Information Solution",
      "body": "The shop name is global and can be read inside and outside the function. The product variable is local.",
      "code": "shop_name = 'Sahel Store'\n\ndef show_product():\n    product = 'Laptop'\n    print('Shop:', shop_name)\n    print('Product:', product)\n\nshow_product()\nprint('Shop:', shop_name)",
      "language": "python",
      "output": "Shop: Sahel Store\nProduct: Laptop\nShop: Sahel Store"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "Scope controls where variables can be accessed in Python.",
      "bullets": [
        "Local variables are defined inside functions.",
        "Global variables are defined at module level.",
        "Functions can read global variables.",
        "Use global to reassign a global variable inside a function.",
        "Python follows the LEGB name resolution order."
      ]
    }
  ],
  "example": {
    "explanation": "The tax_rate variable is global, so the function can read it. The tax and final_salary variables are local because they are created inside the function.",
    "code": "tax_rate = 0.10\n\ndef calculate_salary(basic_salary):\n    tax = basic_salary * tax_rate\n    final_salary = basic_salary - tax\n    return final_salary\n\nprint(calculate_salary(30000))",
    "language": "python",
    "output": "27000.0"
  },
  "commonMistakes": [
    "Trying to access a local variable outside the function where it was defined.",
    "Assuming a global variable must be declared with global just to read it.",
    "Forgetting the global keyword when reassigning a global variable inside a function.",
    "Assuming a local variable with the same name changes the global variable.",
    "Confusing a function parameter with a global variable.",
    "Using global unnecessarily when a local variable or return value would be clearer."
  ],
  "exercise": {
    "question": "Create a global variable shop_name = 'Sahel Store'. Then create a function named show_product. Inside the function, create a local variable product = 'Laptop'. Print the shop name and product inside the function. Call the function and print shop_name outside it. Finally, try printing product outside the function and observe what happens.",
    "hint": "Define shop_name outside the function and product inside it. Remember that local variables are normally available only inside their function.",
    "code": "shop_name = 'Sahel Store'\n\ndef show_product():\n    product = 'Laptop'\n    print('Shop:', shop_name)\n    print('Product:', product)\n\nshow_product()\nprint('Shop:', shop_name)\n# Try print(product) separately to observe the error."
  },
  "solution": {
    "explanation": "shop_name is defined at module level, so it can be accessed inside the function and outside it. product is defined inside show_product, so it is local and cannot be accessed outside the function.",
    "code": "shop_name = 'Sahel Store'\n\ndef show_product():\n    product = 'Laptop'\n    print('Shop:', shop_name)\n    print('Product:', product)\n\nshow_product()\nprint('Shop:', shop_name)",
    "output": "Shop: Sahel Store\nProduct: Laptop\nShop: Sahel Store"
  },
  "quiz": [
    {
      "question": "What does scope define in Python?",
      "options": [
        "The region where a variable can be accessed",
        "The size of a variable",
        "The number of functions in a program",
        "The data type of a variable"
      ],
      "answer": 0
    },
    {
      "question": "Where is a local variable normally defined?",
      "options": [
        "Inside a function",
        "Only in a Python library",
        "Outside every function",
        "Inside a comment"
      ],
      "answer": 0
    },
    {
      "question": "Can a function read a global variable without using global?",
      "options": [
        "No",
        "Yes",
        "Only if it is a number",
        "Only if it is a string"
      ],
      "answer": 1
    },
    {
      "question": "What happens when a local and global variable have the same name?",
      "options": [
        "Python always uses the global variable",
        "Python always causes an error",
        "The local variable is used inside its function",
        "Both values are automatically combined"
      ],
      "answer": 2
    },
    {
      "question": "Which keyword allows a function to reassign a global variable?",
      "options": [
        "local",
        "return",
        "global",
        "scope"
      ],
      "answer": 2
    },
    {
      "question": "What does LEGB stand for?",
      "options": [
        "Local, Enclosing, Global, Built-in",
        "Local, External, General, Basic",
        "List, Enclosing, Global, Boolean",
        "Local, Equal, Global, Built-in"
      ],
      "answer": 0
    },
    {
      "question": "What happens if we try to access a local variable outside its function?",
      "options": [
        "Python always returns zero",
        "Python normally raises a NameError",
        "Python changes it into a global variable",
        "Python prints the variable name"
      ],
      "answer": 1
    }
  ],
  "takeaways": [
    "Scope defines where a variable can be accessed.",
    "Local variables are normally available only inside their function.",
    "Global variables are defined outside functions at module level.",
    "A function can read a global variable without the global keyword.",
    "Use global when reassigning a global variable inside a function.",
    "Python searches names using the LEGB order."
  ],
  "teacherNotes": "Start by reviewing variables and functions. Explain scope using the idea of a variable's access area. Demonstrate local variables first, then show why they cannot normally be accessed outside their function. Introduce global variables and show that functions can read them without the global keyword. Clearly distinguish reading a global variable from reassigning it; use global only for reassignment. Demonstrate same-name local and global variables. Introduce LEGB as a high-level name lookup rule without going deeply into nested functions or nonlocal. Finish with the shop exercise. Emphasize that global variables should be used carefully and that returning values is often a clearer design.",
  "teachingTime": "45-60 minutes"
};
