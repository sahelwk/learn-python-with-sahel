window.lessonData = window.lessonData || {};
window.lessonData[51] = {
  "id": 51,
  "title": "Return Values",
  "category": "Python Functions",
  "contentStatus": "authored",
  "introduction": "Return allows a function to send a result back to the code that called it. Returned values can be stored, reused, or passed into other calculations.",
  "definition": "The return statement sends a value back from a function and ends that function's execution.",
  "whyItMatters": "Return values allow functions to produce reusable results. They help build larger programs where functions perform calculations, process data, and pass results to other parts of the program.",
  "objectives": [
    "Understand the purpose of the return statement.",
    "Understand the difference between print and return.",
    "Return values from functions.",
    "Store returned values in variables.",
    "Use returned values in calculations and expressions.",
    "Understand that return ends a function's execution.",
    "Recognize what a function returns when no return statement is used."
  ],
  "slides": [
    {
      "kicker": "Introduction",
      "title": "Return Values",
      "body": "A function can send a result back to the code that called it.",
      "bullets": [
        "Calculate a result",
        "Return the result",
        "Reuse the result"
      ]
    },
    {
      "kicker": "Review",
      "title": "A Function Using print()",
      "body": "This function displays the calculation result.",
      "code": "def add(a, b):\n    print(a + b)\n\nadd(10, 20)",
      "language": "python",
      "output": "30"
    },
    {
      "kicker": "Problem",
      "title": "Can We Reuse the Result?",
      "body": "print() displays the result, but it does not give that displayed value back to the caller for reuse.",
      "bullets": [
        "We can see the result",
        "We cannot directly store the printed result",
        "We need return to send the result back"
      ]
    },
    {
      "kicker": "Concept",
      "title": "What Is return?",
      "body": "The return statement sends a value from a function back to the caller.",
      "code": "def add(a, b):\n    return a + b",
      "language": "python"
    },
    {
      "kicker": "First Example",
      "title": "Using return",
      "body": "The function returns the result of the calculation.",
      "code": "def add(a, b):\n    return a + b\n\nresult = add(10, 20)\nprint(result)",
      "language": "python",
      "output": "30"
    },
    {
      "kicker": "Understanding",
      "title": "How Does return Work?",
      "body": "The function calculates a value and sends it back to the caller.",
      "bullets": [
        "The function receives a and b",
        "It calculates a + b",
        "return sends the result back",
        "The caller receives the result"
      ]
    },
    {
      "kicker": "Comparison",
      "title": "print() vs return",
      "body": "print displays information, while return sends a value back to the caller.",
      "bullets": [
        "print(): displays information",
        "return: sends a value back",
        "Returned values can be stored and reused"
      ]
    },
    {
      "kicker": "Print Example",
      "title": "A Function That Only Prints",
      "body": "The function displays the result but does not explicitly return it.",
      "code": "def add(a, b):\n    print(a + b)\n\nresult = add(10, 20)\nprint(\"Result variable:\", result)",
      "language": "python",
      "output": "30\nResult variable: None"
    },
    {
      "kicker": "Return Example",
      "title": "A Function That Returns",
      "body": "The function sends the result back so it can be stored.",
      "code": "def add(a, b):\n    return a + b\n\nresult = add(10, 20)\nprint(\"Result variable:\", result)",
      "language": "python",
      "output": "Result variable: 30"
    },
    {
      "kicker": "Storage",
      "title": "Storing a Return Value",
      "body": "We can assign the returned value to a variable.",
      "code": "def multiply(a, b):\n    return a * b\n\nresult = multiply(5, 4)\nprint(result)",
      "language": "python",
      "output": "20"
    },
    {
      "kicker": "Reuse",
      "title": "Using a Return Value Again",
      "body": "We can use a returned value in another calculation.",
      "code": "def add(a, b):\n    return a + b\n\nresult = add(10, 20)\nfinal_result = result * 2\nprint(final_result)",
      "language": "python",
      "output": "60"
    },
    {
      "kicker": "Expressions",
      "title": "Using return Directly",
      "body": "A returned value can be used directly in another expression.",
      "code": "def add(a, b):\n    return a + b\n\nprint(add(10, 20) + 5)",
      "language": "python",
      "output": "35"
    },
    {
      "kicker": "Calculations",
      "title": "Returning a Calculation",
      "body": "A function can return the result of different mathematical calculations.",
      "code": "def calculate_area(length, width):\n    return length * width\n\narea = calculate_area(5, 4)\nprint(\"Area:\", area)",
      "language": "python",
      "output": "Area: 20"
    },
    {
      "kicker": "Practical",
      "title": "Calculating a Total Price",
      "body": "A function can calculate a total and return it.",
      "code": "def calculate_total(price, quantity):\n    return price * quantity\n\ntotal = calculate_total(100, 3)\nprint(\"Total:\", total)",
      "language": "python",
      "output": "Total: 300"
    },
    {
      "kicker": "Practical",
      "title": "Calculating a Discounted Price",
      "body": "We can return a calculated price after applying a discount.",
      "code": "def calculate_discount(price, discount):\n    return price - (price * discount / 100)\n\nfinal_price = calculate_discount(1000, 20)\nprint(\"Final price:\", final_price)",
      "language": "python",
      "output": "Final price: 800.0"
    },
    {
      "kicker": "Execution",
      "title": "return Ends the Function",
      "body": "When Python executes return, the function immediately ends.",
      "code": "def test():\n    print(\"First\")\n    return\n    print(\"Second\")\n\ntest()",
      "language": "python",
      "output": "First"
    },
    {
      "kicker": "Early Return",
      "title": "Returning Before the End",
      "body": "A function can return a value before reaching the last line.",
      "code": "def check_age(age):\n    if age < 18:\n        return \"Under 18\"\n    return \"18 or older\"\n\nprint(check_age(16))\nprint(check_age(20))",
      "language": "python",
      "output": "Under 18\n18 or older"
    },
    {
      "kicker": "Important",
      "title": "return Without a Value",
      "body": "A return statement without an expression ends the function and returns None.",
      "code": "def greet():\n    print(\"Hello\")\n    return\n\nresult = greet()\nprint(result)",
      "language": "python",
      "output": "Hello\nNone"
    },
    {
      "kicker": "Important",
      "title": "No return Statement",
      "body": "If a function finishes without a return statement, Python returns None automatically.",
      "code": "def greet():\n    print(\"Hello\")\n\nresult = greet()\nprint(result)",
      "language": "python",
      "output": "Hello\nNone"
    },
    {
      "kicker": "Understanding",
      "title": "What Is None?",
      "body": "None represents the absence of a value. Functions without an explicit returned value produce None.",
      "bullets": [
        "None is a special Python value",
        "print() does not return the printed text",
        "Functions without an explicit return value produce None"
      ]
    },
    {
      "kicker": "Return Types",
      "title": "Returning Different Data Types",
      "body": "A function can return strings, numbers, Booleans, lists, and other Python values.",
      "code": "def get_name():\n    return \"Ahmad\"\n\ndef get_age():\n    return 20\n\ndef is_active():\n    return True\n\nprint(get_name())\nprint(get_age())\nprint(is_active())",
      "language": "python",
      "output": "Ahmad\n20\nTrue"
    },
    {
      "kicker": "Lists",
      "title": "Returning a List",
      "body": "A function can return an entire list.",
      "code": "def get_numbers():\n    return [10, 20, 30]\n\nnumbers = get_numbers()\nprint(numbers)\nprint(numbers[1])",
      "language": "python",
      "output": "[10, 20, 30]\n20"
    },
    {
      "kicker": "Common Mistakes",
      "title": "Printing Instead of Returning",
      "body": "Printing a result does not make it available as a returned value.",
      "bullets": [
        "print displays a value",
        "return sends a value back",
        "Printed results cannot be assigned as the function's return value"
      ]
    },
    {
      "kicker": "Common Mistakes",
      "title": "Code After return",
      "body": "Code in the same function body after an executed return is not reached.",
      "bullets": [
        "return ends the current function",
        "Later statements may not execute",
        "Check the execution order"
      ]
    },
    {
      "kicker": "Practice",
      "title": "Create a Sum Function",
      "body": "Create a function named calculate_sum that receives two numbers and returns their sum.",
      "bullets": [
        "Create two parameters",
        "Return the sum",
        "Store the returned value",
        "Print the result"
      ]
    },
    {
      "kicker": "Practice",
      "title": "Create a Salary Function",
      "body": "Create a function named calculate_salary that receives basic salary and bonus.",
      "bullets": [
        "Calculate the total salary",
        "Return the total",
        "Store the returned value",
        "Use the value in another calculation"
      ]
    },
    {
      "kicker": "Summary",
      "title": "What Have We Learned?",
      "body": "Return sends a value back from a function.",
      "bullets": [
        "return sends a value back",
        "print displays information",
        "Returned values can be stored",
        "Returned values can be reused",
        "return ends the function",
        "No explicit return value means None"
      ]
    }
  ],
  "example": {
    "explanation": "The function calculate_total multiplies price by quantity and returns the result. We store the returned value, print it, and use it in another calculation.",
    "code": "def calculate_total(price, quantity):\n    return price * quantity\n\nresult = calculate_total(100, 3)\nprint(\"Total:\", result)\n\nfinal_result = result + 50\nprint(\"Final result:\", final_result)",
    "language": "python",
    "output": "Total: 300\nFinal result: 350"
  },
  "commonMistakes": [
    "Confusing print with return.",
    "Expecting a printed value to be returned automatically.",
    "Using a function's result without understanding whether it returns a value.",
    "Writing code after return and expecting it to execute.",
    "Expecting a function without a return statement to return a calculated value.",
    "Confusing None with zero, an empty string, or False."
  ],
  "exercise": {
    "question": "Create a function named calculate_salary that receives basic_salary and bonus. Return their sum. Store the returned value in a variable, print it, and then calculate a 10 percent tax using the returned total. Print the salary after tax.",
    "hint": "Return the total salary first. Then use the returned value in another calculation outside the function."
  },
  "solution": {
    "explanation": "The function returns the total salary. The returned value is stored in total_salary. We then calculate the tax and subtract it from the total.",
    "code": "def calculate_salary(basic_salary, bonus):\n    return basic_salary + bonus\n\ntotal_salary = calculate_salary(30000, 5000)\nprint(\"Total salary:\", total_salary)\n\ntax = total_salary * 0.10\nfinal_salary = total_salary - tax\nprint(\"Tax:\", tax)\nprint(\"Salary after tax:\", final_salary)",
    "output": "Total salary: 35000\nTax: 3500.0\nSalary after tax: 31500.0"
  },
  "quiz": [
    {
      "question": "What does return do?",
      "options": [
        "Displays information only",
        "Sends a value back from a function",
        "Creates a variable",
        "Starts a loop"
      ],
      "answer": 1,
      "explanation": "return sends a value back to the code that called the function."
    },
    {
      "question": "What is the main difference between print and return?",
      "options": [
        "They are exactly the same",
        "print creates functions",
        "print displays a value, while return sends a value back",
        "return only works with strings"
      ],
      "answer": 2,
      "explanation": "print displays information, while return makes a value available to the caller."
    },
    {
      "question": "What is the output of this code?",
      "options": [
        "10",
        "20",
        "30",
        "None"
      ],
      "answer": 2,
      "explanation": "The function returns 10 + 20, which is 30.",
      "code": "def add(a, b):\n    return a + b\n\nprint(add(10, 20))"
    },
    {
      "question": "What does this function return?",
      "options": [
        "10",
        "20",
        "30",
        "None"
      ],
      "answer": 3,
      "explanation": "The function prints the sum but has no explicit return statement. It returns None.",
      "code": "def add(a, b):\n    print(a + b)\n\nresult = add(10, 20)\nprint(result)"
    },
    {
      "question": "What happens after return executes?",
      "options": [
        "The function continues from the next line",
        "The function ends",
        "The program always restarts",
        "The variable is deleted"
      ],
      "answer": 1,
      "explanation": "return ends the current function's execution."
    },
    {
      "question": "What does a function return if it finishes without a return statement?",
      "options": [
        "0",
        "False",
        "An empty string",
        "None"
      ],
      "answer": 3,
      "explanation": "Python automatically returns None when a function finishes without an explicit return value."
    },
    {
      "question": "Can a returned value be stored in a variable?",
      "options": [
        "Yes",
        "No",
        "Only strings",
        "Only integers"
      ],
      "answer": 0,
      "explanation": "A returned value can be assigned to a variable and reused."
    },
    {
      "question": "What does this code display?",
      "options": [
        "15",
        "10",
        "5",
        "None"
      ],
      "answer": 0,
      "explanation": "The function returns 10, and the caller adds 5, producing 15.",
      "code": "def get_number():\n    return 10\n\nprint(get_number() + 5)"
    }
  ],
  "takeaways": [
    "return sends a value back from a function.",
    "print displays information but does not return that information.",
    "Returned values can be stored and reused.",
    "A function ends when return executes.",
    "A function without an explicit return value returns None.",
    "Return values are important for building reusable programs."
  ],
  "teacherNotes": "Begin by reviewing functions with parameters. Show a function that prints a sum and ask students if they can store that result. Demonstrate why print is not the same as return. Introduce return using a simple addition function. Trace the execution step by step. Show storing returned values, using them in calculations, returning different types, and early return. Explain None only after the print-versus-return examples. Avoid introducing multiple return values, unpacking, generators, or complex conditional logic in this lesson. Ask learners to predict the result before running each example.",
  "teachingTime": "60-90 minutes"
};