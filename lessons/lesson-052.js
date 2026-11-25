
window.lessonData = window.lessonData || {};
window.lessonData[52] = {
  "id": 52,
  "title": "Default Arguments",
  "category": "Python Functions",
  "contentStatus": "authored",
  "introduction": "Default arguments allow us to assign predefined values to function parameters. If an argument is not provided when the function is called, Python uses the default value.",
  "definition": "A default argument is a value assigned to a parameter in a function definition. Python uses this value when the caller does not provide an argument for that parameter.",
  "whyItMatters": "Default arguments make functions more flexible and reduce the need to provide the same values repeatedly.",
  "objectives": [
    "Understand what default arguments are.",
    "Create functions with default parameter values.",
    "Call functions with and without optional arguments.",
    "Understand how default and regular parameters work together.",
    "Follow the correct order of parameters when using default values."
  ],
  "slides": [
    {
      "kicker": "Python Functions",
      "title": "Default Arguments",
      "body": "A default argument is a predefined value assigned to a function parameter.",
      "bullets": [
        "Some parameters can have default values.",
        "Arguments become optional when a default value is available.",
        "Python uses the default value if no argument is provided."
      ]
    },
    {
      "kicker": "Review",
      "title": "Remember Parameters and Arguments",
      "body": "Parameters are variables written in the function definition. Arguments are values passed when calling the function.",
      "code": "def greet(name):\n    print('Hello', name)\n\ngreet('Ahmad')",
      "language": "python",
      "output": "Hello Ahmad"
    },
    {
      "kicker": "The Problem",
      "title": "What If a Value Is Usually the Same?",
      "body": "Imagine a greeting function that usually welcomes users with the same message.",
      "code": "def greet(name, message):\n    print(message, name)\n\ngreet('Ahmad', 'Welcome')",
      "language": "python",
      "output": "Welcome Ahmad"
    },
    {
      "kicker": "The Problem",
      "title": "We Must Provide Every Argument",
      "body": "If we call this function without the message, Python raises an error because the required argument is missing.",
      "code": "def greet(name, message):\n    print(message, name)\n\ngreet('Ahmad')",
      "language": "python",
      "output": "TypeError: missing required argument"
    },
    {
      "kicker": "Solution",
      "title": "Use a Default Argument",
      "body": "We can assign a default value to the message parameter.",
      "code": "def greet(name, message='Welcome'):\n    print(message, name)\n\ngreet('Ahmad')",
      "language": "python",
      "output": "Welcome Ahmad"
    },
    {
      "kicker": "Definition",
      "title": "What Is a Default Argument?",
      "body": "A default argument is a predefined value assigned to a parameter. If the caller does not provide a value, Python uses the default.",
      "bullets": [
        "The default value is written in the function definition.",
        "It is assigned using the = operator.",
        "The caller can choose to provide another value."
      ]
    },
    {
      "kicker": "Syntax",
      "title": "How to Write a Default Parameter",
      "body": "Write the parameter name, the assignment operator, and the default value.",
      "code": "def function_name(parameter=value):\n    # function body\n    pass",
      "language": "python"
    },
    {
      "kicker": "Basic Example",
      "title": "A Function with a Default Value",
      "body": "If the user does not provide a city, the function uses Kabul.",
      "code": "def introduce(name, city='Kabul'):\n    print(name, 'lives in', city)\n\nintroduce('Ahmad')",
      "language": "python",
      "output": "Ahmad lives in Kabul"
    },
    {
      "kicker": "Default Value",
      "title": "Python Uses the Default",
      "body": "In this function call, we provide the name but do not provide the city. Python uses Kabul.",
      "code": "introduce('Ahmad')",
      "language": "python",
      "output": "Ahmad lives in Kabul"
    },
    {
      "kicker": "Custom Value",
      "title": "We Can Override the Default",
      "body": "When we provide a city argument, Python uses the supplied value instead of the default.",
      "code": "introduce('Ahmad', 'Herat')",
      "language": "python",
      "output": "Ahmad lives in Herat"
    },
    {
      "kicker": "Comparison",
      "title": "Default vs Custom Argument",
      "body": "The same function can work with its default value or with a value provided by the caller.",
      "code": "introduce('Ahmad')\nintroduce('Ali', 'Kandahar')",
      "language": "python",
      "output": "Ahmad lives in Kabul\nAli lives in Kandahar"
    },
    {
      "kicker": "Multiple Parameters",
      "title": "More Than One Default Argument",
      "body": "A function can have multiple parameters with default values.",
      "code": "def order_food(food='Rice', drink='Tea'):\n    print('Food:', food)\n    print('Drink:', drink)\n\norder_food()",
      "language": "python",
      "output": "Food: Rice\nDrink: Tea"
    },
    {
      "kicker": "Multiple Defaults",
      "title": "Use the Default Values",
      "body": "If we provide no arguments, both parameters use their default values.",
      "code": "order_food()",
      "language": "python",
      "output": "Food: Rice\nDrink: Tea"
    },
    {
      "kicker": "Multiple Defaults",
      "title": "Change Both Values",
      "body": "We can provide two arguments to replace both default values.",
      "code": "order_food('Pizza', 'Juice')",
      "language": "python",
      "output": "Food: Pizza\nDrink: Juice"
    },
    {
      "kicker": "Multiple Defaults",
      "title": "Change Only One Value",
      "body": "We can also provide one argument. Python uses the default value for the remaining parameter.",
      "code": "order_food('Kabuli Pulao')",
      "language": "python",
      "output": "Food: Kabuli Pulao\nDrink: Tea"
    },
    {
      "kicker": "Keyword Arguments",
      "title": "Change a Specific Default",
      "body": "Keyword arguments allow us to change a specific parameter without changing the other default values.",
      "code": "order_food(drink='Coffee')",
      "language": "python",
      "output": "Food: Rice\nDrink: Coffee"
    },
    {
      "kicker": "Keyword Arguments",
      "title": "Specify the Parameter Name",
      "body": "We can provide the parameter name and its value when calling the function.",
      "code": "order_food(food='Mantu')",
      "language": "python",
      "output": "Food: Mantu\nDrink: Tea"
    },
    {
      "kicker": "Required Parameters",
      "title": "Default and Required Parameters",
      "body": "A function can contain required parameters and default parameters together.",
      "code": "def student_info(name, age=18):\n    print('Name:', name)\n    print('Age:', age)\n\nstudent_info('Ahmad')",
      "language": "python",
      "output": "Name: Ahmad\nAge: 18"
    },
    {
      "kicker": "Required Parameters",
      "title": "Required Parameter Comes First",
      "body": "Parameters without default values must be written before parameters with default values.",
      "code": "def student_info(name, age=18):\n    print(name, age)",
      "language": "python"
    },
    {
      "kicker": "Parameter Order",
      "title": "Incorrect Parameter Order",
      "body": "A required parameter cannot follow a default parameter in the same parameter list.",
      "code": "def student_info(age=18, name):\n    print(name, age)",
      "language": "python",
      "output": "SyntaxError"
    },
    {
      "kicker": "Parameter Order",
      "title": "Correct Parameter Order",
      "body": "Place the required parameters first, then the default parameters.",
      "code": "def student_info(name, age=18, city='Kabul'):\n    print(name, age, city)\n\nstudent_info('Ahmad')",
      "language": "python",
      "output": "Ahmad 18 Kabul"
    },
    {
      "kicker": "Parameter Order",
      "title": "Provide Custom Values",
      "body": "We can provide values for the default parameters when needed.",
      "code": "student_info('Ahmad', 22, 'Herat')",
      "language": "python",
      "output": "Ahmad 22 Herat"
    },
    {
      "kicker": "Parameter Order",
      "title": "Use a Keyword to Skip a Default",
      "body": "We can change the city without providing the age by using a keyword argument.",
      "code": "student_info('Ahmad', city='Herat')",
      "language": "python",
      "output": "Ahmad 18 Herat"
    },
    {
      "kicker": "Practical Example",
      "title": "Calculate a Price",
      "body": "A function can calculate the total price. We can use a default discount of zero.",
      "code": "def calculate_price(price, discount=0):\n    return price - discount\n\nprint(calculate_price(1000))",
      "language": "python",
      "output": "1000"
    },
    {
      "kicker": "Practical Example",
      "title": "Apply a Discount",
      "body": "If the customer has a discount, we can provide it as an argument.",
      "code": "print(calculate_price(1000, 100))",
      "language": "python",
      "output": "900"
    },
    {
      "kicker": "Practical Example",
      "title": "Reuse the Function",
      "body": "The same function can calculate prices with or without a discount.",
      "code": "print(calculate_price(500))\nprint(calculate_price(500, 50))\nprint(calculate_price(2000, 250))",
      "language": "python",
      "output": "500\n450\n1750"
    },
    {
      "kicker": "Common Mistake",
      "title": "Forgetting Required Arguments",
      "body": "Default arguments do not make every parameter optional. Required parameters still need values.",
      "code": "def greet(name, message='Welcome'):\n    print(message, name)\n\ngreet()",
      "language": "python",
      "output": "TypeError: missing required argument"
    },
    {
      "kicker": "Common Mistake",
      "title": "Incorrect Parameter Order",
      "body": "A required parameter cannot be placed after a default parameter.",
      "code": "def example(a=10, b):\n    print(a, b)",
      "language": "python",
      "output": "SyntaxError"
    },
    {
      "kicker": "Common Mistake",
      "title": "Confusing Default and Actual Values",
      "body": "The default value is used only when no argument is supplied for that parameter.",
      "code": "def greet(name, message='Welcome'):\n    print(message, name)\n\ngreet('Ali', 'Hello')",
      "language": "python",
      "output": "Hello Ali"
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Calculate Salary",
      "body": "Create a function that calculates an employee's salary with a default bonus.",
      "bullets": [
        "Create a function named calculate_salary.",
        "Required parameter: basic_salary.",
        "Default parameter: bonus = 0.",
        "Return the total salary.",
        "Call the function with and without a bonus."
      ]
    },
    {
      "kicker": "Exercise",
      "title": "Test Your Function",
      "body": "Try these two function calls and compare the results.",
      "code": "calculate_salary(30000)\ncalculate_salary(30000, 5000)",
      "language": "python",
      "output": "30000\n35000"
    },
    {
      "kicker": "Solution",
      "title": "Salary Function",
      "body": "The bonus is optional. If no bonus is provided, Python uses zero.",
      "code": "def calculate_salary(basic_salary, bonus=0):\n    return basic_salary + bonus\n\nprint(calculate_salary(30000))\nprint(calculate_salary(30000, 5000))",
      "language": "python",
      "output": "30000\n35000"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "Default arguments allow functions to use predefined parameter values.",
      "bullets": [
        "Assign a default value using =.",
        "The argument becomes optional.",
        "A custom argument replaces the default.",
        "Required parameters come before default parameters.",
        "Keyword arguments can change a specific default."
      ]
    }
  ],
  "example": {
    "explanation": "The city parameter has a default value of Kabul. If no city is supplied, Python uses Kabul. If a city is provided, Python uses the new value.",
    "code": "def introduce(name, city='Kabul'):\n    return f'{name} lives in {city}'\n\nprint(introduce('Ahmad'))\nprint(introduce('Ali', 'Herat'))\nprint(introduce('Sara', city='Mazar'))",
    "language": "python",
    "output": "Ahmad lives in Kabul\nAli lives in Herat\nSara lives in Mazar"
  },
  "commonMistakes": [
    "Forgetting to provide a value for a required parameter.",
    "Placing a required parameter after a default parameter.",
    "Assuming the default value is always used even when a custom argument is provided.",
    "Confusing a parameter's default value with the argument provided during a function call."
  ],
  "exercise": {
    "question": "Create a function named calculate_salary with a required parameter basic_salary and a default parameter bonus=0. The function must return the total salary. Call it once without a bonus and once with a bonus of 5000.",
    "hint": "Use basic_salary + bonus inside the function and return the result.",
    "code": "def calculate_salary(basic_salary, bonus=0):\n    return basic_salary + bonus\n\nprint(calculate_salary(30000))\nprint(calculate_salary(30000, 5000))"
  },
  "solution": {
    "explanation": "The bonus parameter has a default value of zero. If the function is called without a bonus, the total salary equals the basic salary. If a bonus is provided, it is added to the basic salary.",
    "code": "def calculate_salary(basic_salary, bonus=0):\n    return basic_salary + bonus\n\nsalary_without_bonus = calculate_salary(30000)\nsalary_with_bonus = calculate_salary(30000, 5000)\n\nprint('Salary without bonus:', salary_without_bonus)\nprint('Salary with bonus:', salary_with_bonus)",
    "output": "Salary without bonus: 30000\nSalary with bonus: 35000"
  },
  "quiz": [
    {
      "question": "What is a default argument?",
      "options": [
        "A value assigned to a parameter in the function definition",
        "A value printed by every function",
        "A variable created outside the function",
        "A Python keyword"
      ],
      "answer": 0
    },
    {
      "question": "What will this code print? def greet(name, message='Hello'): print(message, name); greet('Ali')",
      "options": [
        "Hello Ali",
        "Ali Hello",
        "TypeError",
        "None"
      ],
      "answer": 0
    },
    {
      "question": "What will greet('Ali', 'Welcome') use for message?",
      "options": [
        "Hello",
        "Welcome",
        "None",
        "It will cause a SyntaxError"
      ],
      "answer": 1
    },
    {
      "question": "Which function definition has the correct parameter order?",
      "options": [
        "def test(a=10, b):",
        "def test(a, b=10):",
        "def test(=10, a):",
        "def test(a=10, b=20, c):"
      ],
      "answer": 1
    },
    {
      "question": "What will calculate_price(1000) return if discount=0 is the default?",
      "options": [
        "0",
        "1000",
        "TypeError",
        "None"
      ],
      "answer": 1
    },
    {
      "question": "How can we change only the drink in order_food(food='Rice', drink='Tea')?",
      "options": [
        "order_food('Coffee')",
        "order_food(drink='Coffee')",
        "order_food(food='Coffee')",
        "order_food()"
      ],
      "answer": 1
    }
  ],
  "takeaways": [
    "Default arguments provide predefined values for function parameters.",
    "Arguments with default values can be omitted during function calls.",
    "Custom arguments replace the default values.",
    "Required parameters must come before default parameters.",
    "Keyword arguments can help change specific default parameters."
  ],
  "teacherNotes": "Begin by reviewing parameters and arguments. Introduce the problem of repeatedly providing the same value, then solve it using a default argument. Demonstrate omitted arguments, custom arguments, multiple default parameters, keyword arguments, and the correct parameter order. Finish with the salary exercise. Avoid mutable default arguments in this introductory lesson; introduce that advanced issue later if needed.",
  "teachingTime": "45-60 minutes"
};
