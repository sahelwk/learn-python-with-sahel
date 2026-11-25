
window.lessonData = window.lessonData || {};
window.lessonData[55] = {
  "id": 55,
  "title": "Lambda Functions",
  "category": "Python Functions",
  "contentStatus": "authored",
  "introduction": "Lambda functions are small anonymous functions that can be written in a single expression using the lambda keyword. In this lesson, students learn how to create and use lambda functions with one or more parameters.",
  "definition": "A lambda function is a small anonymous function that can contain any number of parameters but only one expression.",
  "whyItMatters": "Lambda functions are useful when a short function is needed for a simple operation, especially when passing a function as an argument to another function.",
  "objectives": [
    "Understand what a lambda function is.",
    "Learn the syntax of lambda functions.",
    "Create lambda functions with one or more parameters.",
    "Call lambda functions and use their returned values.",
    "Compare regular functions with lambda functions.",
    "Recognize when a lambda function is useful."
  ],
  "slides": [
    {
      "kicker": "Python Functions",
      "title": "Lambda Functions",
      "body": "Python provides another way to create small functions using the lambda keyword.",
      "bullets": [
        "Lambda functions are short functions.",
        "They are written in a single expression.",
        "They can accept one or more parameters."
      ]
    },
    {
      "kicker": "Review",
      "title": "Regular Functions",
      "body": "We usually create a function using the def keyword.",
      "code": "def add(a, b):\n    return a + b\n\nprint(add(10, 5))",
      "language": "python",
      "output": "15"
    },
    {
      "kicker": "Introduction",
      "title": "What Is a Lambda Function?",
      "body": "A lambda function is a small anonymous function created with the lambda keyword.",
      "bullets": [
        "It can have any number of parameters.",
        "It contains only one expression.",
        "The expression result is returned automatically."
      ]
    },
    {
      "kicker": "Syntax",
      "title": "Lambda Function Syntax",
      "body": "The lambda keyword is followed by parameters, a colon, and one expression.",
      "code": "lambda parameters: expression",
      "language": "python",
      "output": "A function expression"
    },
    {
      "kicker": "First Example",
      "title": "A Simple Lambda Function",
      "body": "Create a lambda function that doubles a number.",
      "code": "double = lambda x: x * 2\n\nprint(double(5))",
      "language": "python",
      "output": "10"
    },
    {
      "kicker": "Understand the Code",
      "title": "Breaking Down a Lambda",
      "body": "The variable double refers to the function created by lambda.",
      "bullets": [
        "lambda creates the function.",
        "x is the parameter.",
        "x * 2 is the expression.",
        "double(5) calls the function with 5."
      ]
    },
    {
      "kicker": "One Parameter",
      "title": "Lambda with One Parameter",
      "body": "A lambda function can receive one parameter and calculate a result.",
      "code": "square = lambda number: number ** 2\n\nprint(square(4))\nprint(square(6))",
      "language": "python",
      "output": "16\n36"
    },
    {
      "kicker": "Multiple Parameters",
      "title": "Lambda with Two Parameters",
      "body": "A lambda function can accept more than one parameter.",
      "code": "add = lambda a, b: a + b\n\nprint(add(10, 5))",
      "language": "python",
      "output": "15"
    },
    {
      "kicker": "Multiple Parameters",
      "title": "Lambda with Three Parameters",
      "body": "You can also define a lambda function with three parameters.",
      "code": "total = lambda a, b, c: a + b + c\n\nprint(total(10, 20, 30))",
      "language": "python",
      "output": "60"
    },
    {
      "kicker": "Return Value",
      "title": "Lambda Returns a Value",
      "body": "A lambda function automatically returns the result of its expression. You do not write the return keyword.",
      "code": "multiply = lambda a, b: a * b\n\nresult = multiply(4, 5)\nprint(result)",
      "language": "python",
      "output": "20"
    },
    {
      "kicker": "Using Variables",
      "title": "Store the Result",
      "body": "The value returned by a lambda function can be stored in another variable.",
      "code": "calculate = lambda price, quantity: price * quantity\n\ntotal_price = calculate(200, 3)\nprint(total_price)",
      "language": "python",
      "output": "600"
    },
    {
      "kicker": "Practical Example",
      "title": "Calculate Employee Salary",
      "body": "Use a lambda function to calculate salary after adding a bonus.",
      "code": "final_salary = lambda salary, bonus: salary + bonus\n\nprint(final_salary(30000, 5000))",
      "language": "python",
      "output": "35000"
    },
    {
      "kicker": "Practical Example",
      "title": "Calculate a Discounted Price",
      "body": "A lambda function can calculate the price after a discount.",
      "code": "discounted_price = lambda price, discount: price - (price * discount / 100)\n\nprint(discounted_price(1000, 10))",
      "language": "python",
      "output": "900.0"
    },
    {
      "kicker": "Comparison",
      "title": "Regular Function vs Lambda",
      "body": "Both regular functions and lambda functions can receive arguments and return results.",
      "code": "def square(number):\n    return number ** 2\n\nsquare_lambda = lambda number: number ** 2\n\nprint(square(5))\nprint(square_lambda(5))",
      "language": "python",
      "output": "25\n25"
    },
    {
      "kicker": "Comparison",
      "title": "Key Differences",
      "body": "Choose the function style that makes your code clear and easy to understand.",
      "bullets": [
        "Regular functions use def.",
        "Lambda functions use lambda.",
        "Regular functions can contain multiple statements.",
        "Lambda functions contain one expression.",
        "Both can return values."
      ]
    },
    {
      "kicker": "Important Rule",
      "title": "One Expression Only",
      "body": "A lambda function can contain only one expression, not a block of multiple statements.",
      "code": "double = lambda x: x * 2\n\nprint(double(7))",
      "language": "python",
      "output": "14"
    },
    {
      "kicker": "Important Rule",
      "title": "No return Keyword Needed",
      "body": "The result of the lambda expression is returned automatically.",
      "code": "add = lambda a, b: a + b\n\nresult = add(3, 4)\nprint(result)",
      "language": "python",
      "output": "7"
    },
    {
      "kicker": "Using Lambda",
      "title": "Lambda Without a Variable",
      "body": "A lambda function can also be created and called immediately.",
      "code": "print((lambda x: x * 2)(6))",
      "language": "python",
      "output": "12"
    },
    {
      "kicker": "Common Mistake",
      "title": "Using return in Lambda",
      "body": "A lambda function does not use a return statement.",
      "code": "double = lambda x: x * 2\n\nprint(double(5))",
      "language": "python",
      "output": "10"
    },
    {
      "kicker": "Common Mistake",
      "title": "Writing Multiple Statements",
      "body": "A lambda function is designed for one expression, not multiple statements.",
      "bullets": [
        "Do not use multiple statement blocks.",
        "Do not write a normal function body after lambda.",
        "Use def when the operation needs multiple steps."
      ]
    },
    {
      "kicker": "Common Mistake",
      "title": "Forgetting the Function Call",
      "body": "Defining a lambda function does not execute it. You must call it to get a result.",
      "code": "double = lambda x: x * 2\n\nprint(double(5))",
      "language": "python",
      "output": "10"
    },
    {
      "kicker": "When to Use",
      "title": "When Should We Use Lambda?",
      "body": "Lambda functions are useful for short operations that do not need a full function definition.",
      "bullets": [
        "Simple calculations.",
        "Short operations.",
        "Small functions passed to other functions.",
        "Avoid lambda when the logic becomes complicated."
      ]
    },
    {
      "kicker": "Practice",
      "title": "Exercise: Calculate Total Price",
      "body": "Create a lambda function that calculates the total price of products.",
      "bullets": [
        "Create a lambda function named calculate_total.",
        "It should accept price and quantity.",
        "Multiply price by quantity.",
        "Store the returned value in total.",
        "Print the total."
      ],
      "code": "calculate_total = lambda price, quantity: price * quantity\n\n# Try price = 250 and quantity = 4",
      "language": "python"
    },
    {
      "kicker": "Solution",
      "title": "Exercise Solution",
      "body": "The lambda function multiplies the price by the quantity and returns the result.",
      "code": "calculate_total = lambda price, quantity: price * quantity\n\ntotal = calculate_total(250, 4)\nprint('Total price:', total)",
      "language": "python",
      "output": "Total price: 1000"
    },
    {
      "kicker": "Summary",
      "title": "What Did We Learn?",
      "body": "Lambda functions provide a short way to create simple functions in Python.",
      "bullets": [
        "Lambda functions use the lambda keyword.",
        "They can accept multiple parameters.",
        "They contain one expression.",
        "The expression result is returned automatically.",
        "Use def for longer or more complex functions."
      ]
    }
  ],
  "example": {
    "explanation": "This lambda function receives a price and quantity, multiplies them, and automatically returns the result. The returned value is stored in total and printed.",
    "code": "calculate_total = lambda price, quantity: price * quantity\n\ntotal = calculate_total(250, 4)\nprint('Total price:', total)",
    "language": "python",
    "output": "Total price: 1000"
  },
  "commonMistakes": [
    "Thinking that lambda functions can contain multiple statements.",
    "Trying to use the return keyword inside a lambda expression.",
    "Forgetting to call the lambda function after defining it.",
    "Confusing the parameter with the argument.",
    "Using lambda for complicated operations that would be clearer with def.",
    "Thinking that assigning a lambda to a variable makes it a regular def function."
  ],
  "exercise": {
    "question": "Create a lambda function named calculate_total. It must accept price and quantity, multiply them, and return the result automatically. Call it with price = 250 and quantity = 4, store the result in total, and print the total.",
    "hint": "Use the syntax lambda parameters: expression. You do not need to write return.",
    "code": "calculate_total = lambda price, quantity: price * quantity\n\ntotal = calculate_total(250, 4)\nprint('Total price:', total)"
  },
  "solution": {
    "explanation": "The lambda function accepts two parameters: price and quantity. It multiplies them and automatically returns the result. The function call passes 250 and 4, so the total is 1000.",
    "code": "calculate_total = lambda price, quantity: price * quantity\n\ntotal = calculate_total(250, 4)\nprint('Total price:', total)",
    "output": "Total price: 1000"
  },
  "quiz": [
    {
      "question": "Which keyword is used to create a lambda function?",
      "options": [
        "def",
        "lambda",
        "function",
        "return"
      ],
      "answer": 1
    },
    {
      "question": "How many expressions can a lambda function contain?",
      "options": [
        "Only one",
        "Two",
        "Unlimited",
        "Zero"
      ],
      "answer": 0
    },
    {
      "question": "What does this code print? double = lambda x: x * 2; print(double(5))",
      "options": [
        "5",
        "7",
        "10",
        "25"
      ],
      "answer": 2
    },
    {
      "question": "Do lambda functions return the result of their expression automatically?",
      "options": [
        "No",
        "Yes",
        "Only when return is used",
        "Only for numbers"
      ],
      "answer": 1
    },
    {
      "question": "Which keyword is used to create a regular Python function?",
      "options": [
        "lambda",
        "return",
        "def",
        "print"
      ],
      "answer": 2
    },
    {
      "question": "Can a lambda function accept multiple parameters?",
      "options": [
        "No",
        "Only two",
        "Yes",
        "Only one"
      ],
      "answer": 2
    },
    {
      "question": "When is a regular function usually a better choice?",
      "options": [
        "For complicated logic with multiple statements",
        "For every simple calculation",
        "When no parameters are needed",
        "When printing a string"
      ],
      "answer": 0
    }
  ],
  "takeaways": [
    "Lambda functions are small anonymous functions.",
    "They are created using the lambda keyword.",
    "They can accept any number of parameters.",
    "They contain one expression.",
    "The expression result is returned automatically.",
    "Use regular functions for complex operations."
  ],
  "teacherNotes": "Begin by reviewing a regular function created with def. Explain that lambda is another way to create a small function, not a replacement for every regular function. Write the syntax on the screen and explain the parameter, colon, and expression separately. Start with one parameter, then demonstrate two parameters and a practical calculation. Emphasize that lambda contains one expression and automatically returns its result, so return is not written. Compare the same calculation using def and lambda. Avoid advanced topics such as map, filter, sorted key functions, and complex lambda expressions in this lesson. Finish with the total-price exercise.",
  "teachingTime": "45-60 minutes"
};
