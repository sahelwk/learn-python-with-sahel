window.lessonData = window.lessonData || {};
window.lessonData[20] = {
  id: 20,
  title: "Numbers",
  category: "Python Basics",
  contentStatus: "authored",

  introduction: "Numbers are used in Python to perform mathematical calculations, store quantities, represent prices, and process numerical information.",

  definition: "Numbers are numeric values used in Python for calculations and other mathematical operations. The main numeric types are int, float, and complex.",

  whyItMatters: "Numbers are essential for building practical applications such as calculators, shopping systems, financial software, statistics, and data analysis tools.",

  objectives: [
    "Understand the main numeric data types in Python.",
    "Distinguish between integers, floats, and complex numbers.",
    "Perform arithmetic operations using numbers.",
    "Understand division, floor division, and modulus.",
    "Use built-in numeric functions and type conversion.",
    "Apply numbers in practical programming examples."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Numbers?",
      body: "Numbers represent numerical information that Python can use in calculations.",
      bullets: [
        "Age: 25",
        "Price: 150.50",
        "Quantity: 10",
        "Temperature: 28.5",
        "Total marks: 450"
      ]
    },
    {
      kicker: "02 · Numeric Types",
      title: "Types of Numbers in Python",
      body: "Python has three main built-in numeric types.",
      bullets: [
        "int: whole numbers",
        "float: decimal numbers",
        "complex: complex numbers",
        "Each type is used for different numerical values."
      ],
      code: "age = 25\nprice = 150.50\nnumber = 3 + 4j\n\nprint(type(age))\nprint(type(price))\nprint(type(number))",
      output: "<class 'int'>\n<class 'float'>\n<class 'complex'>"
    },
    {
      kicker: "03 · Integer",
      title: "1. Integer (int)",
      body: "An integer represents a whole number without a decimal point.",
      bullets: [
        "Positive numbers: 10, 100",
        "Negative numbers: -5, -20",
        "Zero: 0",
        "Useful for age, quantity, and counting."
      ],
      code: "age = 25\nquantity = 10\nbalance = -50\n\nprint(age)\nprint(quantity)\nprint(balance)"
    },
    {
      kicker: "04 · Float",
      title: "2. Float (float)",
      body: "A float represents a number containing a decimal point.",
      bullets: [
        "Product price: 150.50",
        "Temperature: 28.5",
        "Average marks: 87.75",
        "Useful for measurements and prices."
      ],
      code: "price = 150.50\ntemperature = 28.5\naverage = 87.75\n\nprint(price)\nprint(temperature)\nprint(average)"
    },
    {
      kicker: "05 · Complex Numbers",
      title: "3. Complex (complex)",
      body: "A complex number contains a real part and an imaginary part. Python uses j for the imaginary part.",
      bullets: [
        "Example: 3 + 4j",
        "Real part: 3",
        "Imaginary part: 4",
        "Used in scientific and engineering calculations."
      ],
      code: "number = 3 + 4j\n\nprint(number)\nprint(number.real)\nprint(number.imag)",
      output: "(3+4j)\n3.0\n4.0"
    },
    {
      kicker: "06 · Arithmetic",
      title: "Addition (+) and Subtraction (-)",
      body: "Use these operators to add and subtract numbers.",
      bullets: [
        "+ adds two numbers.",
        "- subtracts one number from another.",
        "The result depends on the values."
      ],
      code: "a = 20\nb = 8\n\nprint(a + b)\nprint(a - b)",
      output: "28\n12"
    },
    {
      kicker: "07 · Arithmetic",
      title: "Multiplication (*) and Division (/)",
      body: "Use multiplication and division to calculate products and divide quantities.",
      bullets: [
        "* multiplies numbers.",
        "/ performs division.",
        "Normal division returns a float."
      ],
      code: "price = 12.5\nquantity = 3\n\ntotal = price * quantity\naverage = 20 / 4\n\nprint(total)\nprint(average)",
      output: "37.5\n5.0"
    },
    {
      kicker: "08 · Division",
      title: "Floor Division (//)",
      body: "Floor division divides two numbers and rounds the result down to the nearest whole number.",
      bullets: [
        "Uses the // operator.",
        "Removes the fractional part by flooring the result.",
        "The result can be an integer or a float depending on the operands."
      ],
      code: "print(10 // 3)\nprint(20 // 4)\nprint(-10 // 3)",
      output: "3\n5\n-4"
    },
    {
      kicker: "09 · Remainder",
      title: "Modulus (%)",
      body: "The modulus operator returns the remainder after division.",
      bullets: [
        "Uses the % operator.",
        "Useful for checking even and odd numbers.",
        "Useful for repeating patterns."
      ],
      code: "print(10 % 3)\nprint(20 % 5)\n\nnumber = 8\nprint(number % 2)",
      output: "1\n0\n0"
    },
    {
      kicker: "10 · Power",
      title: "Exponentiation (**)",
      body: "The exponentiation operator raises a number to a power.",
      bullets: [
        "2 ** 3 means 2 × 2 × 2.",
        "3 ** 2 means 3 × 3.",
        "Useful for mathematical calculations."
      ],
      code: "print(2 ** 3)\nprint(3 ** 2)\nprint(5 ** 3)",
      output: "8\n9\n125"
    },
    {
      kicker: "11 · Operator Order",
      title: "Order of Operations",
      body: "Python follows mathematical rules when evaluating expressions.",
      bullets: [
        "Parentheses are evaluated first.",
        "Powers are evaluated before multiplication.",
        "Multiplication and division come before addition and subtraction.",
        "Use parentheses to make calculations clear."
      ],
      code: "result = 10 + 5 * 2\nresult2 = (10 + 5) * 2\n\nprint(result)\nprint(result2)",
      output: "20\n30"
    },
    {
      kicker: "12 · Built-in Functions",
      title: "abs(), round(), pow()",
      body: "Python provides built-in functions for common numerical operations.",
      bullets: [
        "abs(): returns the absolute value.",
        "round(): rounds a number.",
        "pow(): calculates a power."
      ],
      code: "print(abs(-15))\nprint(round(12.567, 2))\nprint(pow(2, 3))",
      output: "15\n12.57\n8"
    },
    {
      kicker: "13 · More Functions",
      title: "min(), max(), sum()",
      body: "These functions help us work with groups of numbers.",
      bullets: [
        "min(): returns the smallest value.",
        "max(): returns the largest value.",
        "sum(): adds all values in an iterable."
      ],
      code: "marks = [75, 90, 85, 60]\n\nprint(min(marks))\nprint(max(marks))\nprint(sum(marks))",
      output: "60\n90\n310"
    },
    {
      kicker: "14 · Type Conversion",
      title: "Convert Numbers",
      body: "Python provides functions to convert values between numeric types.",
      bullets: [
        "int(): converts to an integer.",
        "float(): converts to a float.",
        "complex(): creates a complex number.",
        "Conversion is possible only when the value is valid."
      ],
      code: "number1 = int(\"25\")\nnumber2 = float(\"12.5\")\nnumber3 = float(10)\n\nprint(number1)\nprint(number2)\nprint(number3)",
      output: "25\n12.5\n10.0"
    },
    {
      kicker: "15 · User Input",
      title: "Numbers from input()",
      body: "The input() function returns text, so convert it before performing numerical calculations.",
      bullets: [
        "input() returns a string.",
        "Use int() for whole numbers.",
        "Use float() for decimal numbers."
      ],
      code: "price = float(input(\"Enter price: \"))\nquantity = int(input(\"Enter quantity: \"))\n\ntotal = price * quantity\nprint(\"Total:\", total)",
      output: "Enter price: 12.5\nEnter quantity: 3\nTotal: 37.5"
    },
    {
      kicker: "16 · Random Numbers",
      title: "Using the random Module",
      body: "Python's random module can generate random numbers.",
      bullets: [
        "Import the random module first.",
        "randint(a, b) returns an integer between a and b, inclusive.",
        "Useful for games and simulations."
      ],
      code: "import random\n\nnumber = random.randint(1, 10)\nprint(number)",
      output: "A random integer between 1 and 10"
    },
    {
      kicker: "17 · Math Module",
      title: "Using the math Module",
      body: "The math module provides additional mathematical functions and constants.",
      bullets: [
        "math.sqrt(): square root.",
        "math.ceil(): rounds upward.",
        "math.floor(): rounds downward.",
        "math.pi: value of pi."
      ],
      code: "import math\n\nprint(math.sqrt(25))\nprint(math.ceil(4.2))\nprint(math.floor(4.8))\nprint(math.pi)",
      output: "5.0\n5\n4\n3.141592653589793"
    },
    {
      kicker: "18 · Practical Example",
      title: "Shopping Total",
      body: "Calculate the total price of products using multiplication and addition.",
      code: "price = 12.5\nquantity = 3\ndelivery_fee = 5\n\ntotal = price * quantity + delivery_fee\nprint(\"Total:\", total)",
      output: "Total: 42.5"
    },
    {
      kicker: "19 · Important Difference",
      title: "Integer vs Float",
      body: "Integer and float values behave differently in some operations.",
      bullets: [
        "10 is an integer.",
        "10.0 is a float.",
        "The values are numerically equal.",
        "Their data types are different."
      ],
      code: "a = 10\nb = 10.0\n\nprint(a == b)\nprint(type(a))\nprint(type(b))",
      output: "True\n<class 'int'>\n<class 'float'>"
    },
    {
      kicker: "20 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Understand the difference between numeric values and text.",
      bullets: [
        "Using input() without converting its result.",
        "Confusing / with //.",
        "Forgetting that % returns a remainder.",
        "Dividing a number by zero.",
        "Expecting int(12.9) to round instead of truncate."
      ],
      code: "value = 12.9\n\nprint(int(value))\nprint(round(value))",
      output: "12\n13"
    },
    {
      kicker: "21 · Practice",
      title: "Classroom Exercise",
      body: "Create a simple shopping calculator.",
      bullets: [
        "Ask the user for a product price.",
        "Ask for the product quantity.",
        "Calculate the total price.",
        "Add a delivery fee.",
        "Print the final amount."
      ]
    },
    {
      kicker: "22 · Summary",
      title: "What Did We Learn?",
      body: "Python numbers allow us to perform calculations and solve practical problems.",
      bullets: [
        "int, float, and complex are numeric types.",
        "Arithmetic operators perform calculations.",
        "Built-in functions simplify numerical tasks.",
        "int() and float() convert values.",
        "input() returns text.",
        "math and random provide additional features."
      ]
    }
  ],

  example: {
    explanation: "This example calculates a shopping bill using numbers, arithmetic operators, and type conversion.",
    code: "price = float(\"12.5\")\nquantity = int(\"3\")\ndelivery_fee = 5\n\ntotal = price * quantity + delivery_fee\n\nprint(\"Product total:\", price * quantity)\nprint(\"Delivery fee:\", delivery_fee)\nprint(\"Final total:\", total)",
    language: "python",
    output: "Product total: 37.5\nDelivery fee: 5\nFinal total: 42.5"
  },

  commonMistakes: [
    "Confusing int and float values.",
    "Thinking that 10 and 10.0 have the same data type.",
    "Forgetting that input() always returns a string.",
    "Using arithmetic operators incorrectly.",
    "Confusing normal division / with floor division //.",
    "Thinking that modulus % returns the quotient instead of the remainder.",
    "Expecting int(12.9) to round to 13; it truncates the decimal part and returns 12.",
    "Dividing by zero, which raises a ZeroDivisionError.",
    "Forgetting to import math or random before using their functions.",
    "Expecting random.randint(1, 10) to exclude 10; both endpoints are included."
  ],

  exercise: {
    question: "Create a shopping calculator. Ask the user to enter a product price and quantity. Calculate the subtotal, add a delivery fee of 5, and display the final total. Also display the remainder when the quantity is divided by 2.",
    hint: "Use float(input()) for the price, int(input()) for the quantity, multiplication for the subtotal, addition for the delivery fee, and % for the remainder."
  },

  solution: {
    explanation: "The program converts user input into numeric values, calculates the subtotal, adds the delivery fee, and uses the modulus operator to find the remainder.",
    code: "price = float(input(\"Enter product price: \"))\nquantity = int(input(\"Enter quantity: \"))\ndelivery_fee = 5\n\nsubtotal = price * quantity\nfinal_total = subtotal + delivery_fee\nremainder = quantity % 2\n\nprint(\"Subtotal:\", subtotal)\nprint(\"Delivery fee:\", delivery_fee)\nprint(\"Final total:\", final_total)\nprint(\"Quantity remainder:\", remainder)",
    output: "Enter product price: 12.5\nEnter quantity: 3\nSubtotal: 37.5\nDelivery fee: 5\nFinal total: 42.5\nQuantity remainder: 1"
  },

  quiz: [
    {
      question: "Which data type stores whole numbers?",
      options: ["float", "str", "int", "complex"],
      answer: 2,
      explanation: "int stores whole numbers without a decimal point."
    },
    {
      question: "What is the data type of 12.5?",
      options: ["int", "float", "str", "bool"],
      answer: 1,
      explanation: "12.5 is a float because it contains a decimal point."
    },
    {
      question: "What is the result of 10 / 2?",
      options: ["5", "5.0", "2", "10"],
      answer: 1,
      explanation: "Normal division in Python returns a float."
    },
    {
      question: "What is the result of 10 // 3?",
      options: ["3.33", "1", "3", "4"],
      answer: 2,
      explanation: "Floor division rounds the result down to the nearest whole number."
    },
    {
      question: "What does 10 % 3 return?",
      options: ["3", "1", "0", "10"],
      answer: 1,
      explanation: "The remainder after dividing 10 by 3 is 1."
    },
    {
      question: "Which operator calculates a power?",
      options: ["*", "**", "//", "%"],
      answer: 1,
      explanation: "The ** operator performs exponentiation."
    },
    {
      question: "What is the result of int(12.9)?",
      options: ["13", "12.9", "12", "Error"],
      answer: 2,
      explanation: "int() removes the decimal part; it does not round the value."
    },
    {
      question: "Which function returns the largest number?",
      options: ["min()", "sum()", "max()", "abs()"],
      answer: 2,
      explanation: "max() returns the largest value."
    },
    {
      question: "What type of value does input() return?",
      options: ["int", "float", "str", "bool"],
      answer: 2,
      explanation: "input() returns a string, even when the user enters digits."
    },
    {
      question: "Which function generates a random integer between 1 and 10, including both endpoints?",
      options: [
        "random.random(1, 10)",
        "random.randint(1, 10)",
        "math.sqrt(10)",
        "random.number(1, 10)"
      ],
      answer: 1,
      explanation: "random.randint(a, b) returns an integer from a through b, including both endpoints."
    }
  ],

  takeaways: [
    "Python has three main numeric types: int, float, and complex.",
    "Arithmetic operators include +, -, *, /, //, %, and **.",
    "The / operator performs normal division, while // performs floor division.",
    "The % operator returns the remainder.",
    "Use int() and float() to convert numeric values.",
    "input() returns a string and must be converted before numerical calculations.",
    "Built-in functions such as abs(), round(), min(), max(), and sum() are useful for calculations.",
    "The math and random modules provide additional numerical tools."
  ],

  teacherNotes: "Start by asking students where they use numbers in everyday life: shopping, age, money, marks, and counting. Explain int, float, and complex separately, but spend most of the class on int and float. Demonstrate each arithmetic operator with small numbers. Pay special attention to the difference between /, //, and %. Explain that input() returns a string and demonstrate why numeric conversion is needed before multiplication. Show the built-in functions with a list of marks. Introduce math and random briefly as useful modules, without going deeply into their advanced features. Finish with the shopping calculator exercise. Ask students to predict the output before running each example.",

  teachingTime: "60-75 minutes"
};