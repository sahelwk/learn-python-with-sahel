
window.lessonData = window.lessonData || {};
window.lessonData[23] = {
  "id": 23,
  "title": "Arithmetic Operators",
  "category": "Python Operators",
  "contentStatus": "authored",
  "introduction": "This lesson introduces Python Arithmetic Operators and explains how to perform mathematical calculations in programs.",
  "definition": "Arithmetic Operators are symbols used to perform mathematical operations such as addition, subtraction, multiplication, division, and exponentiation.",
  "whyItMatters": "Arithmetic Operators help developers build practical applications such as shopping systems, salary calculators, banking applications, student grading systems, and financial reports.",
  "objectives": [
    "Understand what Arithmetic Operators are.",
    "Use addition (+) and subtraction (-).",
    "Use multiplication (*) and division (/).",
    "Understand floor division (//) and modulus (%).",
    "Use exponentiation (**).",
    "Understand operator precedence.",
    "Apply arithmetic operations in real-world programs."
  ],
  "slides": [
    {
      "kicker": "Python Operators",
      "title": "Arithmetic Operators",
      "body": "Arithmetic Operators allow Python programs to perform mathematical calculations.",
      "bullets": [
        "Add numbers.",
        "Subtract values.",
        "Multiply and divide.",
        "Calculate remainders and powers.",
        "Build practical calculation programs."
      ],
      "image": "assets/images/arithmetic-operators-introduction.png"
    },
    {
      "kicker": "Basic Concept",
      "title": "What Are Arithmetic Operators?",
      "body": "Arithmetic Operators are symbols that tell Python which mathematical operation to perform.",
      "bullets": [
        "+ Addition",
        "- Subtraction",
        "* Multiplication",
        "/ Division",
        "// Floor Division",
        "% Modulus",
        "** Exponentiation"
      ],
      "image": "assets/images/python-arithmetic-operators-overview.png"
    },
    {
      "kicker": "Operator 01",
      "title": "Addition (+)",
      "body": "The addition operator adds two or more numbers.",
      "bullets": [
        "Symbol: +",
        "Used to calculate totals.",
        "Useful for adding prices, marks, and quantities."
      ],
      "code": "price1 = 100\nprice2 = 250\nprice3 = 150\n\ntotal = price1 + price2 + price3\nprint(\"Total price:\", total)",
      "image": "assets/images/python-addition-operator.png"
    },
    {
      "kicker": "Operator 02",
      "title": "Subtraction (-)",
      "body": "The subtraction operator calculates the difference between numbers.",
      "bullets": [
        "Symbol: -",
        "Used to calculate remaining amounts.",
        "Useful for discounts, balances, and expenses."
      ],
      "code": "account_balance = 5000\nwithdrawal = 1200\n\nremaining = account_balance - withdrawal\nprint(\"Remaining balance:\", remaining)",
      "image": "assets/images/python-subtraction-operator.png"
    },
    {
      "kicker": "Operator 03",
      "title": "Multiplication (*)",
      "body": "The multiplication operator multiplies numbers.",
      "bullets": [
        "Symbol: *",
        "Useful for calculating total prices.",
        "Can calculate salary, quantities, and area."
      ],
      "code": "product_price = 80\nquantity = 5\n\ntotal = product_price * quantity\nprint(\"Total cost:\", total)",
      "image": "assets/images/python-multiplication-operator.png"
    },
    {
      "kicker": "Operator 04",
      "title": "Division (/)",
      "body": "The division operator divides one number by another.",
      "bullets": [
        "Symbol: /",
        "Calculates how much each person receives.",
        "The result of / is always a float in Python."
      ],
      "code": "total_amount = 1000\npeople = 4\n\nshare = total_amount / people\nprint(\"Each person receives:\", share)",
      "image": "assets/images/python-division-operator.png"
    },
    {
      "kicker": "Operator 05",
      "title": "Floor Division (//)",
      "body": "Floor division divides two numbers and rounds the result down to the nearest whole number.",
      "bullets": [
        "Symbol: //",
        "Returns an integer when both operands are integers.",
        "Useful when counting complete groups or packages.",
        "It rounds down, not simply removes decimal digits."
      ],
      "code": "total_items = 17\nitems_per_box = 5\n\nfull_boxes = total_items // items_per_box\nprint(\"Full boxes:\", full_boxes)",
      "image": "assets/images/python-floor-division-operator.png"
    },
    {
      "kicker": "Operator 06",
      "title": "Modulus (%)",
      "body": "The modulus operator returns the remainder after division.",
      "bullets": [
        "Symbol: %",
        "Useful for checking even and odd numbers.",
        "Useful for finding remaining items.",
        "A remainder of zero means the division is exact."
      ],
      "code": "total_items = 17\nitems_per_box = 5\n\nremaining = total_items % items_per_box\nprint(\"Remaining items:\", remaining)",
      "image": "assets/images/python-modulus-operator.png"
    },
    {
      "kicker": "Operator 07",
      "title": "Exponentiation (**)",
      "body": "The exponentiation operator raises a number to a power.",
      "bullets": [
        "Symbol: **",
        "2 ** 3 means 2 multiplied by itself 3 times.",
        "Useful for mathematical formulas and area calculations."
      ],
      "code": "number = 2\npower = 3\n\nresult = number ** power\nprint(\"Result:\", result)",
      "image": "assets/images/python-exponentiation-operator.png"
    },
    {
      "kicker": "Quick Comparison",
      "title": "Understand All Arithmetic Operators",
      "body": "Each arithmetic operator performs a different mathematical operation.",
      "bullets": [
        "10 + 3 = 13",
        "10 - 3 = 7",
        "10 * 3 = 30",
        "10 / 3 = 3.3333333333333335",
        "10 // 3 = 3",
        "10 % 3 = 1",
        "10 ** 3 = 1000"
      ],
      "code": "a = 10\nb = 3\n\nprint(a + b)\nprint(a - b)\nprint(a * b)\nprint(a / b)\nprint(a // b)\nprint(a % b)\nprint(a ** b)",
      "image": "assets/images/python-arithmetic-operators-comparison.png"
    },
    {
      "kicker": "Practical Example 01",
      "title": "Shopping Total Calculator",
      "body": "A shopping application uses arithmetic operators to calculate the total cost of products.",
      "bullets": [
        "Get the price of a product.",
        "Get the quantity.",
        "Multiply price by quantity.",
        "Display the total amount."
      ],
      "code": "product_name = \"Notebook\"\nprice = 50\nquantity = 4\n\ntotal = price * quantity\n\nprint(\"Product:\", product_name)\nprint(\"Unit price:\", price)\nprint(\"Quantity:\", quantity)\nprint(\"Total:\", total)",
      "image": "assets/images/python-shopping-calculator.png"
    },
    {
      "kicker": "Practical Example 02",
      "title": "Discount Calculator",
      "body": "A shop can calculate a discount and the final price using arithmetic operators.",
      "bullets": [
        "Start with the original price.",
        "Calculate the discount amount.",
        "Subtract the discount from the original price.",
        "Display the final price."
      ],
      "code": "price = 2000\ndiscount_percent = 10\n\ndiscount = price * discount_percent / 100\nfinal_price = price - discount\n\nprint(\"Original price:\", price)\nprint(\"Discount:\", discount)\nprint(\"Final price:\", final_price)",
      "image": "assets/images/python-discount-calculator.png"
    },
    {
      "kicker": "Practical Example 03",
      "title": "Student Marks Calculator",
      "body": "A school system can calculate the total and average marks of a student.",
      "bullets": [
        "Receive marks from different subjects.",
        "Add all marks.",
        "Divide the total by the number of subjects.",
        "Display total and average."
      ],
      "code": "math_marks = 85\nenglish_marks = 90\npython_marks = 95\n\n total = math_marks + english_marks + python_marks\naverage = total / 3\n\nprint(\"Total marks:\", total)\nprint(\"Average marks:\", average)",
      "image": "assets/images/python-student-marks-calculator.png"
    },
    {
      "kicker": "Practical Example 04",
      "title": "Salary Calculator",
      "body": "A simple payroll program can calculate an employee's total salary after adding allowances and subtracting deductions.",
      "bullets": [
        "Start with the basic salary.",
        "Add the employee's allowance.",
        "Subtract deductions.",
        "Display the final salary."
      ],
      "code": "basic_salary = 25000\nallowance = 3000\ndeduction = 1500\n\ntotal_salary = basic_salary + allowance - deduction\n\nprint(\"Basic salary:\", basic_salary)\nprint(\"Allowance:\", allowance)\nprint(\"Deduction:\", deduction)\nprint(\"Final salary:\", total_salary)",
      "image": "assets/images/python-salary-calculator.png"
    },
    {
      "kicker": "Practical Example 05",
      "title": "Splitting Items into Groups",
      "body": "Floor division and modulus can help divide items into complete groups and find what remains.",
      "bullets": [
        "There are 23 students.",
        "Each group contains 4 students.",
        "Calculate the number of complete groups.",
        "Find how many students remain."
      ],
      "code": "students = 23\nstudents_per_group = 4\n\ncomplete_groups = students // students_per_group\nremaining_students = students % students_per_group\n\nprint(\"Complete groups:\", complete_groups)\nprint(\"Remaining students:\", remaining_students)",
      "image": "assets/images/python-group-calculator.png"
    },
    {
      "kicker": "Important Concept",
      "title": "Operator Precedence",
      "body": "Python follows mathematical rules to decide which operation should be performed first.",
      "bullets": [
        "Parentheses () are evaluated first.",
        "Exponentiation ** comes next.",
        "Multiplication, division, floor division, and modulus follow.",
        "Addition and subtraction come afterward.",
        "Use parentheses to make calculations clear."
      ],
      "code": "result1 = 10 + 5 * 2\nresult2 = (10 + 5) * 2\n\nprint(result1)\nprint(result2)",
      "image": "assets/images/python-operator-precedence.png"
    },
    {
      "kicker": "Practical Example 06",
      "title": "Calculate the Area of a Rectangle",
      "body": "Arithmetic operators can solve practical problems using mathematical formulas.",
      "bullets": [
        "Area = length × width.",
        "Get the length and width.",
        "Multiply both values.",
        "Display the area."
      ],
      "code": "length = 12\nwidth = 5\n\narea = length * width\n\nprint(\"Length:\", length)\nprint(\"Width:\", width)\nprint(\"Rectangle area:\", area)",
      "image": "assets/images/python-rectangle-area.png"
    },
    {
      "kicker": "Important Rule",
      "title": "Division by Zero",
      "body": "Python cannot divide a number by zero. It raises a ZeroDivisionError.",
      "bullets": [
        "10 / 0 causes an error.",
        "10 // 0 also causes an error.",
        "10 % 0 also causes an error.",
        "Always check that the divisor is not zero."
      ],
      "code": "number = 10\ndivisor = 2\n\nif divisor != 0:\n    print(number / divisor)\nelse:\n    print(\"Cannot divide by zero\")",
      "image": "assets/images/python-division-by-zero.png"
    },
    {
      "kicker": "Common Mistakes",
      "title": "Mistakes to Avoid",
      "body": "Pay attention to operator symbols and calculation rules.",
      "bullets": [
        "Using / when you need floor division //.",
        "Confusing % with percentage instead of remainder.",
        "Using ^ instead of ** for exponentiation.",
        "Forgetting operator precedence.",
        "Dividing by zero.",
        "Using unclear calculations without parentheses."
      ],
      "code": "# Correct exponentiation\nprint(2 ** 3)\n\n# Not exponentiation\nprint(2 ^ 3)  # This is bitwise XOR\n\n# Clear calculation\nresult = (10 + 5) * 2\nprint(result)",
      "image": "assets/images/python-arithmetic-mistakes.png"
    },
    {
      "kicker": "Lesson Summary",
      "title": "What Have We Learned?",
      "body": "Arithmetic Operators are essential for calculations in Python applications.",
      "bullets": [
        "+ Addition",
        "- Subtraction",
        "* Multiplication",
        "/ Division",
        "// Floor Division",
        "% Modulus",
        "** Exponentiation",
        "Operator precedence controls calculation order."
      ],
      "image": "assets/images/python-arithmetic-summary.png"
    }
  ],
  "example": {
    "explanation": "This practical shopping example calculates the original total, a discount, and the final amount the customer must pay.",
    "code": "product_name = \"Keyboard\"\nunit_price = 1500\nquantity = 2\ndiscount_percent = 10\n\ngross_total = unit_price * quantity\ndiscount = gross_total * discount_percent / 100\nfinal_total = gross_total - discount\n\nprint(\"Product:\", product_name)\nprint(\"Unit price:\", unit_price)\nprint(\"Quantity:\", quantity)\nprint(\"Gross total:\", gross_total)\nprint(\"Discount:\", discount)\nprint(\"Final total:\", final_total)",
    "language": "python",
    "output": "Product: Keyboard\nUnit price: 1500\nQuantity: 2\nGross total: 3000\nDiscount: 300.0\nFinal total: 2700.0"
  },
  "commonMistakes": [
    "Confusing / with //.",
    "Thinking // simply removes the decimal part; it actually rounds down toward negative infinity.",
    "Confusing the modulus operator % with percentage calculation.",
    "Using ^ instead of ** for exponentiation.",
    "Forgetting that division by zero raises ZeroDivisionError.",
    "Ignoring operator precedence in complex calculations.",
    "Using parentheses incorrectly or forgetting them when a calculation needs a specific order."
  ],
  "exercise": {
    "question": "Build a practical invoice calculator for a small shop. Ask the user for a product name, unit price, quantity, and discount percentage. Calculate the gross total, discount amount, and final amount. Then display a clear invoice showing all values.",
    "hint": "Use input() to receive information, float() for price and discount, int() for quantity, * for multiplication, / for calculating the percentage, and - for subtracting the discount."
  },
  "solution": {
    "explanation": "The program receives product details, calculates the gross total by multiplying price and quantity, calculates the discount amount, and subtracts it from the gross total.",
    "code": "product_name = input(\"Product name: \")\nunit_price = float(input(\"Unit price: \"))\nquantity = int(input(\"Quantity: \"))\ndiscount_percent = float(input(\"Discount percentage: \"))\n\ngross_total = unit_price * quantity\ndiscount_amount = gross_total * discount_percent / 100\nfinal_total = gross_total - discount_amount\n\nprint(\"\\n===== SHOP INVOICE =====\")\nprint(\"Product:\", product_name)\nprint(\"Unit price:\", unit_price)\nprint(\"Quantity:\", quantity)\nprint(\"Gross total:\", gross_total)\nprint(\"Discount:\", discount_amount)\nprint(\"Final amount:\", final_total)",
    "output": "Product name: Mouse\nUnit price: 500\nQuantity: 3\nDiscount percentage: 10\n\n===== SHOP INVOICE =====\nProduct: Mouse\nUnit price: 500.0\nQuantity: 3\nGross total: 1500.0\nDiscount: 150.0\nFinal amount: 1350.0"
  },
  "quiz": [
    {
      "question": "Which operator is used for addition?",
      "options": [
        "-",
        "+",
        "*",
        "/"
      ],
      "answer": 1,
      "explanation": "The + operator adds two or more numbers."
    },
    {
      "question": "What is the result of 20 - 8?",
      "options": [
        "28",
        "12",
        "160",
        "2.5"
      ],
      "answer": 1,
      "explanation": "20 minus 8 equals 12."
    },
    {
      "question": "Which operator is used for multiplication?",
      "options": [
        "x",
        "^",
        "*",
        "%"
      ],
      "answer": 2,
      "explanation": "Python uses * for multiplication."
    },
    {
      "question": "What is the result of 10 / 2?",
      "options": [
        "5",
        "5.0",
        "20",
        "2"
      ],
      "answer": 1,
      "explanation": "The / operator performs normal division and returns a float."
    },
    {
      "question": "What is the result of 17 // 5?",
      "options": [
        "3",
        "2",
        "3.4",
        "4"
      ],
      "answer": 0,
      "explanation": "Floor division returns the greatest integer less than or equal to the division result."
    },
    {
      "question": "What is the result of 17 % 5?",
      "options": [
        "3",
        "5",
        "2",
        "3.4"
      ],
      "answer": 2,
      "explanation": "17 divided by 5 leaves a remainder of 2."
    },
    {
      "question": "Which operator is used for exponentiation?",
      "options": [
        "^",
        "**",
        "//",
        "%%"
      ],
      "answer": 1,
      "explanation": "Python uses ** to calculate powers."
    },
    {
      "question": "What is the result of 2 ** 4?",
      "options": [
        "6",
        "8",
        "16",
        "24"
      ],
      "answer": 2,
      "explanation": "2 ** 4 means 2 × 2 × 2 × 2, which equals 16."
    },
    {
      "question": "What is the result of 10 + 5 * 2?",
      "options": [
        "30",
        "20",
        "25",
        "15"
      ],
      "answer": 1,
      "explanation": "Multiplication is performed before addition, so 10 + 10 equals 20."
    },
    {
      "question": "What error occurs when dividing by zero?",
      "options": [
        "TypeError",
        "ValueError",
        "ZeroDivisionError",
        "NameError"
      ],
      "answer": 2,
      "explanation": "Python raises ZeroDivisionError when a number is divided by zero."
    }
  ],
  "takeaways": [
    "Arithmetic Operators perform mathematical calculations.",
    "+ adds numbers.",
    "- subtracts numbers.",
    "* multiplies numbers.",
    "/ performs normal division and returns a float.",
    "// performs floor division.",
    "% returns the remainder.",
    "** calculates powers.",
    "Operator precedence determines the order of calculations.",
    "Never divide by zero."
  ],
  "teacherNotes": "Begin by asking students where they use calculations in daily life, such as shopping, salary, marks, and dividing items into groups. Explain each operator separately and run its example before moving to the next one. Give special attention to the difference between /, //, and %. For example, 17 / 5 gives 3.4, 17 // 5 gives 3, and 17 % 5 gives 2. Explain that // rounds down, including for negative numbers, but keep negative-number details as an additional note if students are beginners. Explain that ** is exponentiation and ^ is a different bitwise operator. Demonstrate operator precedence using 10 + 5 * 2 and (10 + 5) * 2. Finish with the shopping invoice exercise and ask students to change the values and predict the results before running the program. Remind students that division by zero raises ZeroDivisionError.",
  "teachingTime": "60 minutes"
};
