
window.lessonData = window.lessonData || {};
window.lessonData[53] = {
  "id": 53,
  "title": "Keyword Arguments",
  "category": "Python Functions",
  "contentStatus": "authored",
  "introduction": "Keyword arguments allow us to pass values to function parameters using their names instead of relying only on argument position.",
  "definition": "A keyword argument is an argument passed to a function by explicitly specifying the parameter name and its value.",
  "whyItMatters": "Keyword arguments make function calls clearer, allow arguments to be provided in a different order, and help us work with functions that have several parameters.",
  "objectives": [
    "Understand what keyword arguments are.",
    "Call functions using parameter names.",
    "Use keyword arguments with multiple parameters.",
    "Change the order of arguments using keywords.",
    "Combine positional and keyword arguments correctly.",
    "Recognize common errors when using keyword arguments."
  ],
  "slides": [
    {
      "kicker": "Python Functions",
      "title": "Keyword Arguments",
      "body": "Keyword arguments allow us to pass values using parameter names.",
      "bullets": [
        "We specify the parameter name.",
        "We assign a value to that parameter.",
        "The argument order can be changed when using keywords."
      ]
    },
    {
      "kicker": "Review",
      "title": "Remember Parameters",
      "body": "Parameters are variables defined in a function. Arguments are values passed when calling the function.",
      "code": "def greet(name):\n    print('Hello', name)\n\ngreet('Ahmad')",
      "language": "python",
      "output": "Hello Ahmad"
    },
    {
      "kicker": "Review",
      "title": "Positional Arguments",
      "body": "Positional arguments are assigned to parameters according to their position.",
      "code": "def student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)\n\nstudent_info('Ahmad', 22)",
      "language": "python",
      "output": "Name: Ahmad\nAge: 22"
    },
    {
      "kicker": "Review",
      "title": "Argument Position Matters",
      "body": "In positional arguments, the first value goes to the first parameter and the second value goes to the second parameter.",
      "code": "student_info('Ahmad', 22)",
      "language": "python",
      "output": "Name: Ahmad\nAge: 22"
    },
    {
      "kicker": "The Problem",
      "title": "What If We Change the Order?",
      "body": "When we change the position of positional arguments, the values may be assigned to the wrong parameters.",
      "code": "student_info(22, 'Ahmad')",
      "language": "python",
      "output": "Name: 22\nAge: Ahmad"
    },
    {
      "kicker": "The Solution",
      "title": "Use Keyword Arguments",
      "body": "We can specify the parameter name when passing an argument.",
      "code": "student_info(name='Ahmad', age=22)",
      "language": "python",
      "output": "Name: Ahmad\nAge: 22"
    },
    {
      "kicker": "Definition",
      "title": "What Is a Keyword Argument?",
      "body": "A keyword argument is an argument passed using the parameter name followed by the assigned value.",
      "bullets": [
        "Specify the parameter name.",
        "Use the = operator.",
        "Provide the value."
      ]
    },
    {
      "kicker": "Syntax",
      "title": "Keyword Argument Syntax",
      "body": "Write the parameter name followed by = and the value.",
      "code": "function_name(parameter=value)",
      "language": "python"
    },
    {
      "kicker": "Basic Example",
      "title": "Calling a Function with Keywords",
      "body": "We can specify both name and age when calling the function.",
      "code": "def student_info(name, age):\n    print('Name:', name)\n    print('Age:', age)\n\nstudent_info(name='Ali', age=20)",
      "language": "python",
      "output": "Name: Ali\nAge: 20"
    },
    {
      "kicker": "Keyword Arguments",
      "title": "Change the Argument Order",
      "body": "With keyword arguments, we can provide the values in a different order.",
      "code": "student_info(age=20, name='Ali')",
      "language": "python",
      "output": "Name: Ali\nAge: 20"
    },
    {
      "kicker": "Keyword Arguments",
      "title": "Python Matches Parameter Names",
      "body": "Python uses the specified parameter names to assign the values. It does not depend on the order of keyword arguments.",
      "code": "student_info(age=25, name='Ahmad')",
      "language": "python",
      "output": "Name: Ahmad\nAge: 25"
    },
    {
      "kicker": "Multiple Parameters",
      "title": "A Function with Three Parameters",
      "body": "Keyword arguments are useful when a function has several parameters.",
      "code": "def employee_info(name, department, salary):\n    print('Name:', name)\n    print('Department:', department)\n    print('Salary:', salary)",
      "language": "python"
    },
    {
      "kicker": "Multiple Parameters",
      "title": "Call the Function",
      "body": "We can use the parameter names to make the function call easy to read.",
      "code": "employee_info(name='Ahmad', department='IT', salary=30000)",
      "language": "python",
      "output": "Name: Ahmad\nDepartment: IT\nSalary: 30000"
    },
    {
      "kicker": "Multiple Parameters",
      "title": "Change the Order",
      "body": "The order of keyword arguments does not have to match the parameter order.",
      "code": "employee_info(salary=30000, name='Ahmad', department='IT')",
      "language": "python",
      "output": "Name: Ahmad\nDepartment: IT\nSalary: 30000"
    },
    {
      "kicker": "Partial Keywords",
      "title": "Provide Some Arguments by Name",
      "body": "We can provide some arguments using keywords while allowing other required parameters to be supplied separately.",
      "code": "employee_info('Ahmad', salary=30000, department='IT')",
      "language": "python",
      "output": "Name: Ahmad\nDepartment: IT\nSalary: 30000"
    },
    {
      "kicker": "Partial Keywords",
      "title": "Use Keywords for All Arguments",
      "body": "Providing all arguments by keyword makes each value clearly connected to its parameter.",
      "code": "employee_info(department='Finance', salary=25000, name='Ali')",
      "language": "python",
      "output": "Name: Ali\nDepartment: Finance\nSalary: 25000"
    },
    {
      "kicker": "Combining Arguments",
      "title": "Positional and Keyword Arguments",
      "body": "We can combine positional arguments with keyword arguments in the same function call.",
      "code": "def introduce(name, age, city):\n    print(name, age, city)\n\nintroduce('Ahmad', age=22, city='Kabul')",
      "language": "python",
      "output": "Ahmad 22 Kabul"
    },
    {
      "kicker": "Combining Arguments",
      "title": "Positional Arguments Must Come First",
      "body": "When combining positional and keyword arguments, positional arguments must come before keyword arguments.",
      "code": "introduce('Ahmad', age=22, city='Kabul')",
      "language": "python",
      "output": "Ahmad 22 Kabul"
    },
    {
      "kicker": "Combining Arguments",
      "title": "Incorrect Argument Order",
      "body": "We cannot place a positional argument after a keyword argument.",
      "code": "introduce(name='Ahmad', 22, 'Kabul')",
      "language": "python",
      "output": "SyntaxError"
    },
    {
      "kicker": "Combining Arguments",
      "title": "Correct Combination",
      "body": "Start with positional arguments, then provide the remaining values using keywords.",
      "code": "introduce('Ahmad', age=22, city='Kabul')",
      "language": "python",
      "output": "Ahmad 22 Kabul"
    },
    {
      "kicker": "Default Arguments",
      "title": "Keyword Arguments with Default Values",
      "body": "Keyword arguments can be used with functions that have default parameters.",
      "code": "def order_food(food='Rice', drink='Tea'):\n    print('Food:', food)\n    print('Drink:', drink)\n\norder_food(drink='Coffee')",
      "language": "python",
      "output": "Food: Rice\nDrink: Coffee"
    },
    {
      "kicker": "Default Arguments",
      "title": "Change a Specific Parameter",
      "body": "We can change the drink while allowing the food parameter to use its default value.",
      "code": "order_food(drink='Coffee')",
      "language": "python",
      "output": "Food: Rice\nDrink: Coffee"
    },
    {
      "kicker": "Default Arguments",
      "title": "Change Both Parameters",
      "body": "We can provide keyword arguments for both parameters.",
      "code": "order_food(drink='Juice', food='Mantu')",
      "language": "python",
      "output": "Food: Mantu\nDrink: Juice"
    },
    {
      "kicker": "Common Mistake",
      "title": "Unknown Parameter Name",
      "body": "The keyword name must match a parameter in the function definition.",
      "code": "def greet(name):\n    print('Hello', name)\n\ngreet(username='Ahmad')",
      "language": "python",
      "output": "TypeError: unexpected keyword argument"
    },
    {
      "kicker": "Common Mistake",
      "title": "Providing the Same Parameter Twice",
      "body": "A parameter cannot receive two values in the same function call.",
      "code": "def greet(name):\n    print('Hello', name)\n\ngreet('Ahmad', name='Ali')",
      "language": "python",
      "output": "TypeError: multiple values for argument"
    },
    {
      "kicker": "Common Mistake",
      "title": "Positional Argument After a Keyword",
      "body": "Positional arguments must not follow keyword arguments.",
      "code": "def calculate(a, b):\n    return a + b\n\ncalculate(a=10, 20)",
      "language": "python",
      "output": "SyntaxError"
    },
    {
      "kicker": "Practical Example",
      "title": "Calculate an Order",
      "body": "We can use keyword arguments to make an order function easier to understand.",
      "code": "def calculate_total(product, price, quantity):\n    total = price * quantity\n    print('Product:', product)\n    print('Total:', total)\n\ncalculate_total(product='Laptop', price=50000, quantity=2)",
      "language": "python",
      "output": "Product: Laptop\nTotal: 100000"
    },
    {
      "kicker": "Practical Example",
      "title": "Change the Argument Order",
      "body": "Keyword arguments let us provide the values in any order while keeping their meaning clear.",
      "code": "calculate_total(quantity=3, product='Keyboard', price=2000)",
      "language": "python",
      "output": "Product: Keyboard\nTotal: 6000"
    },
    {
      "kicker": "Practical Example",
      "title": "Calculate with Return",
      "body": "A function can receive keyword arguments and return a calculated result.",
      "code": "def calculate_total(price, quantity):\n    return price * quantity\n\nresult = calculate_total(quantity=3, price=2000)\nprint(result)",
      "language": "python",
      "output": "6000"
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Student Information",
      "body": "Create a function that accepts student information and call it using keyword arguments.",
      "bullets": [
        "Create student_info(name, age, city).",
        "Print all three values.",
        "Call the function using keyword arguments.",
        "Change the order of the keyword arguments.",
        "Try combining one positional argument with keyword arguments."
      ]
    },
    {
      "kicker": "Solution",
      "title": "Student Information",
      "body": "The parameter names make the function calls clear, even when the keyword arguments are provided in a different order.",
      "code": "def student_info(name, age, city):\n    print('Name:', name)\n    print('Age:', age)\n    print('City:', city)\n\nstudent_info(city='Kabul', age=22, name='Ahmad')",
      "language": "python",
      "output": "Name: Ahmad\nAge: 22\nCity: Kabul"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "Keyword arguments connect values to parameters by name.",
      "bullets": [
        "Keyword arguments use parameter names.",
        "Their order can be changed.",
        "They can be combined with positional arguments.",
        "Positional arguments must come before keyword arguments.",
        "Parameter names must match.",
        "A parameter cannot receive two values in the same call."
      ]
    }
  ],
  "example": {
    "explanation": "Keyword arguments assign values by parameter name. The order of keyword arguments can be changed without changing the result.",
    "code": "def employee_info(name, department, salary):\n    print('Name:', name)\n    print('Department:', department)\n    print('Salary:', salary)\n\nemployee_info(salary=30000, department='IT', name='Ahmad')",
    "language": "python",
    "output": "Name: Ahmad\nDepartment: IT\nSalary: 30000"
  },
  "commonMistakes": [
    "Using a keyword name that does not match the function parameter.",
    "Providing the same parameter more than once.",
    "Placing a positional argument after a keyword argument.",
    "Assuming keyword arguments must follow the same order as the parameters.",
    "Confusing keyword arguments with keyword parameters."
  ],
  "exercise": {
    "question": "Create a function named student_info with three parameters: name, age, and city. Print all three values. Call the function using keyword arguments in a different order. Then call it using one positional argument and two keyword arguments.",
    "hint": "Use name='Ahmad', age=22, and city='Kabul'. You can change the order of keyword arguments, but positional arguments must come first.",
    "code": "def student_info(name, age, city):\n    print('Name:', name)\n    print('Age:', age)\n    print('City:', city)\n\nstudent_info(city='Kabul', age=22, name='Ahmad')\nstudent_info('Ali', city='Herat', age=20)"
  },
  "solution": {
    "explanation": "Keyword arguments allow values to be assigned by parameter name. The first call uses only keywords in a different order. The second call uses one positional argument followed by keyword arguments.",
    "code": "def student_info(name, age, city):\n    print('Name:', name)\n    print('Age:', age)\n    print('City:', city)\n\nstudent_info(city='Kabul', age=22, name='Ahmad')\nprint('---')\nstudent_info('Ali', city='Herat', age=20)",
    "output": "Name: Ahmad\nAge: 22\nCity: Kabul\n---\nName: Ali\nAge: 20\nCity: Herat"
  },
  "quiz": [
    {
      "question": "What is a keyword argument?",
      "options": [
        "An argument passed using a parameter name",
        "A parameter without a name",
        "A variable outside a function",
        "A Python loop"
      ],
      "answer": 0
    },
    {
      "question": "What will student_info(age=20, name='Ali') do if the function has name and age parameters?",
      "options": [
        "It will cause an error",
        "It assigns age to name",
        "It assigns the values by parameter name",
        "It changes the function definition"
      ],
      "answer": 2
    },
    {
      "question": "Can we change the order of keyword arguments?",
      "options": [
        "No",
        "Yes",
        "Only in loops",
        "Only with return"
      ],
      "answer": 1
    },
    {
      "question": "Which function call is correct?",
      "options": [
        "calculate(a=10, 20)",
        "calculate(10, b=20)",
        "calculate(b=20, 10)",
        "calculate(a=10, a=20)"
      ],
      "answer": 1
    },
    {
      "question": "What happens if we use an unknown keyword name?",
      "options": [
        "Python automatically creates a parameter",
        "Python ignores the argument",
        "Python raises a TypeError",
        "Python returns zero"
      ],
      "answer": 2
    },
    {
      "question": "Can we combine positional and keyword arguments?",
      "options": [
        "No",
        "Yes, but positional arguments must come first",
        "Yes, positional arguments must come last",
        "Only with default arguments"
      ],
      "answer": 1
    },
    {
      "question": "What happens if a parameter receives a positional value and a keyword value in the same call?",
      "options": [
        "Python adds the values",
        "Python uses the last value",
        "Python raises a TypeError",
        "Python automatically changes the parameter name"
      ],
      "answer": 2
    }
  ],
  "takeaways": [
    "Keyword arguments pass values using parameter names.",
    "Keyword arguments can be provided in a different order.",
    "Parameter names must match the function definition.",
    "Positional arguments must come before keyword arguments.",
    "Keyword arguments make function calls clearer and easier to understand.",
    "A parameter cannot receive two values in one function call."
  ],
  "teacherNotes": "Begin with a review of positional arguments and demonstrate how the wrong argument order can cause confusing results. Introduce keyword arguments by specifying parameter names. Teach changing the order, using multiple parameters, combining positional and keyword arguments, and using keywords with default parameters. Demonstrate common errors and finish with the student information exercise. Do not introduce advanced keyword-only parameters or kwargs unpacking in this lesson.",
  "teachingTime": "45-60 minutes"
};
