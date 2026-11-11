
window.lessonData = window.lessonData || {};
window.lessonData[25] = {
  "id": 25,
  "title": "Comparison Operators",
  "category": "Python Operators",
  "contentStatus": "authored",
  "introduction": "This lesson explains how Python Comparison Operators compare two values and produce Boolean results: True or False.",
  "definition": "Comparison Operators are symbols used to compare two values. They return a Boolean result: True when the comparison is correct and False when it is not.",
  "whyItMatters": "Comparison Operators help programs make decisions. They are essential for checking student results, user eligibility, prices, account balances, permissions, and other conditions in real-world applications.",
  "objectives": [
    "Understand the purpose of Comparison Operators.",
    "Compare two values using == and !=.",
    "Use greater than (>) and less than (<).",
    "Use greater than or equal to (>=).",
    "Use less than or equal to (<=).",
    "Understand that comparison results are Boolean values.",
    "Compare numbers and strings.",
    "Use comparisons in practical conditions."
  ],
  "slides": [
    {
      "kicker": "Python Operators",
      "title": "Comparison Operators",
      "body": "Comparison Operators allow Python programs to compare two values and determine their relationship.",
      "bullets": [
        "Check whether two values are equal.",
        "Check whether one value is greater or smaller.",
        "Compare prices, ages, marks, and quantities.",
        "The result is always True or False."
      ],
      "image": "assets/images/comparison-operators-introduction.png"
    },
    {
      "kicker": "Basic Concept",
      "title": "What Are Comparison Operators?",
      "body": "Comparison Operators compare two values and return a Boolean result.",
      "bullets": [
        "They compare values.",
        "They produce True or False.",
        "They help programs evaluate conditions.",
        "They are commonly used with if and while."
      ],
      "code": "age = 20\nresult = age > 18\n\nprint(result)",
      "image": "assets/images/python-comparison-operators-overview.png"
    },
    {
      "kicker": "Important Concept",
      "title": "Comparison Results: True and False",
      "body": "Every comparison produces one of two Boolean values.",
      "bullets": [
        "True means the comparison is correct.",
        "False means the comparison is not correct.",
        "Boolean values must start with capital letters.",
        "They are not strings."
      ],
      "code": "print(10 > 5)\nprint(10 < 5)\nprint(10 == 10)",
      "image": "assets/images/python-comparison-boolean-results.png"
    },
    {
      "kicker": "Operator 01",
      "title": "Equal to (==)",
      "body": "The == operator checks whether two values are equal.",
      "bullets": [
        "Symbol: ==",
        "Returns True when both values are equal.",
        "Returns False when they are different.",
        "It compares values; it does not assign them."
      ],
      "code": "first_number = 10\nsecond_number = 10\n\nprint(first_number == second_number)\nprint(10 == 20)",
      "image": "assets/images/python-equal-comparison.png"
    },
    {
      "kicker": "Operator 02",
      "title": "Not Equal to (!=)",
      "body": "The != operator checks whether two values are different.",
      "bullets": [
        "Symbol: !=",
        "Returns True when values are different.",
        "Returns False when values are equal.",
        "Useful for checking whether a value has changed."
      ],
      "code": "password = \"python123\"\nentered_password = \"hello123\"\n\nprint(password != entered_password)",
      "image": "assets/images/python-not-equal-comparison.png"
    },
    {
      "kicker": "Operator 03",
      "title": "Greater Than (>)",
      "body": "The > operator checks whether the left value is greater than the right value.",
      "bullets": [
        "Symbol: >",
        "Returns True when the left value is greater.",
        "Returns False otherwise.",
        "Useful for checking minimum requirements."
      ],
      "code": "student_marks = 85\npassing_marks = 50\n\nprint(student_marks > passing_marks)",
      "image": "assets/images/python-greater-than.png"
    },
    {
      "kicker": "Operator 04",
      "title": "Less Than (<)",
      "body": "The < operator checks whether the left value is smaller than the right value.",
      "bullets": [
        "Symbol: <",
        "Returns True when the left value is smaller.",
        "Returns False otherwise.",
        "Useful for checking limits and available quantities."
      ],
      "code": "product_stock = 5\nminimum_stock = 10\n\nprint(product_stock < minimum_stock)",
      "image": "assets/images/python-less-than.png"
    },
    {
      "kicker": "Operator 05",
      "title": "Greater Than or Equal to (>=)",
      "body": "The >= operator checks whether a value is greater than or equal to another value.",
      "bullets": [
        "Symbol: >=",
        "Greater values return True.",
        "Equal values also return True.",
        "Useful when a requirement includes a minimum value."
      ],
      "code": "age = 18\nminimum_age = 18\n\nprint(age >= minimum_age)",
      "image": "assets/images/python-greater-than-or-equal.png"
    },
    {
      "kicker": "Operator 06",
      "title": "Less Than or Equal to (<=)",
      "body": "The <= operator checks whether a value is smaller than or equal to another value.",
      "bullets": [
        "Symbol: <=",
        "Smaller values return True.",
        "Equal values also return True.",
        "Useful for checking maximum limits."
      ],
      "code": "product_price = 100\ncustomer_budget = 100\n\nprint(product_price <= customer_budget)",
      "image": "assets/images/python-less-than-or-equal.png"
    },
    {
      "kicker": "Quick Comparison",
      "title": "All Comparison Operators",
      "body": "Python provides six main comparison operators.",
      "bullets": [
        "== Equal to",
        "!= Not equal to",
        "> Greater than",
        "< Less than",
        ">= Greater than or equal to",
        "<= Less than or equal to"
      ],
      "code": "a = 10\nb = 5\n\nprint(a == b)  # False\nprint(a != b)  # True\nprint(a > b)   # True\nprint(a < b)   # False\nprint(a >= b)  # True\nprint(a <= b)  # False",
      "image": "assets/images/python-comparison-operators-table.png"
    },
    {
      "kicker": "Practical Example 01",
      "title": "Student Passing Check",
      "body": "A school program can check whether a student has achieved the required passing marks.",
      "bullets": [
        "Store the student's marks.",
        "Define the passing marks.",
        "Compare the two values.",
        "Display whether the student passed."
      ],
      "code": "student_marks = 65\npassing_marks = 50\n\npassed = student_marks >= passing_marks\n\nprint(\"Student passed:\", passed)",
      "image": "assets/images/python-student-passing-check.png"
    },
    {
      "kicker": "Practical Example 02",
      "title": "Age Eligibility Check",
      "body": "An application can check whether a user meets a minimum age requirement.",
      "bullets": [
        "Receive the user's age.",
        "Set the minimum required age.",
        "Compare the values using >=.",
        "Display the result."
      ],
      "code": "age = 20\nminimum_age = 18\n\nis_eligible = age >= minimum_age\n\nprint(\"Eligible:\", is_eligible)",
      "image": "assets/images/python-age-eligibility.png"
    },
    {
      "kicker": "Practical Example 03",
      "title": "Product Price and Customer Budget",
      "body": "A shopping application can check whether a customer has enough money to buy a product.",
      "bullets": [
        "Get the product price.",
        "Get the customer's budget.",
        "Compare the two amounts.",
        "Check whether the product is affordable."
      ],
      "code": "product_price = 1500\ncustomer_budget = 2000\n\naffordable = customer_budget >= product_price\n\nprint(\"Can buy the product:\", affordable)",
      "image": "assets/images/python-product-budget-check.png"
    },
    {
      "kicker": "Practical Example 04",
      "title": "Low Stock Alert",
      "body": "An inventory system can identify products whose stock is below the minimum required quantity.",
      "bullets": [
        "Check the available stock.",
        "Set a minimum stock level.",
        "Compare stock with the minimum.",
        "Display a warning when stock is low."
      ],
      "code": "available_stock = 4\nminimum_stock = 10\n\nlow_stock = available_stock < minimum_stock\n\nprint(\"Low stock alert:\", low_stock)",
      "image": "assets/images/python-low-stock-alert.png"
    },
    {
      "kicker": "Practical Example 05",
      "title": "Employee Salary Comparison",
      "body": "A simple HR program can compare an employee's salary with a defined salary level.",
      "bullets": [
        "Store the employee's salary.",
        "Define the comparison salary.",
        "Use comparison operators.",
        "Display whether the salary is above the defined level."
      ],
      "code": "employee_salary = 30000\nsalary_level = 25000\n\nprint(\"Salary is higher:\", employee_salary > salary_level)\nprint(\"Salary is equal:\", employee_salary == salary_level)",
      "image": "assets/images/python-salary-comparison.png"
    },
    {
      "kicker": "String Comparison",
      "title": "Comparing Text Values",
      "body": "Python can also compare strings using comparison operators.",
      "bullets": [
        "Strings can be checked for equality.",
        "String comparisons are case-sensitive.",
        "\"Python\" and \"python\" are different strings.",
        "Text ordering uses Unicode values, not human dictionary rules."
      ],
      "code": "username1 = \"Ahmad\"\nusername2 = \"ahmad\"\n\nprint(username1 == username2)\nprint(username1 != username2)",
      "image": "assets/images/python-string-comparison.png"
    },
    {
      "kicker": "Important Concept",
      "title": "Chained Comparisons",
      "body": "Python allows multiple comparisons to be written together.",
      "bullets": [
        "Check whether a value is within a range.",
        "Use a lower limit and an upper limit.",
        "The expression is True when both comparisons are True.",
        "This is a useful Python feature."
      ],
      "code": "age = 25\n\nis_adult_age = 18 <= age <= 60\n\nprint(is_adult_age)",
      "image": "assets/images/python-chained-comparisons.png"
    },
    {
      "kicker": "Common Mistakes",
      "title": "Mistakes to Avoid",
      "body": "Understand these common mistakes when comparing values.",
      "bullets": [
        "Using = instead of == for comparison.",
        "Confusing > with <.",
        "Forgetting that >= and <= include equality.",
        "Comparing text without considering case sensitivity.",
        "Expecting a comparison to return a number instead of a Boolean.",
        "Using incompatible types in comparisons."
      ],
      "code": "age = 20\n\n# Correct comparison\nprint(age == 20)\n\n# Incorrect syntax\n# if age = 20:\n#     print(\"Age is 20\")\n\n# Correct condition\nif age == 20:\n    print(\"Age is 20\")",
      "image": "assets/images/python-comparison-common-mistakes.png"
    },
    {
      "kicker": "Lesson Summary",
      "title": "What Have We Learned?",
      "body": "Comparison Operators help Python programs compare values and make decisions.",
      "bullets": [
        "== Equal to",
        "!= Not equal to",
        "> Greater than",
        "< Less than",
        ">= Greater than or equal to",
        "<= Less than or equal to",
        "Comparison results are True or False."
      ],
      "image": "assets/images/python-comparison-summary.png"
    }
  ],
  "example": {
    "explanation": "This practical example checks whether a student has passed an examination, whether the student has achieved an excellent score, and whether the marks are within a valid range.",
    "code": "student_name = \"Ahmad\"\nmarks = 85\npassing_marks = 50\nexcellent_marks = 80\n\npassed = marks >= passing_marks\nexcellent = marks >= excellent_marks\nvalid_marks = 0 <= marks <= 100\n\nprint(\"Student:\", student_name)\nprint(\"Passed:\", passed)\nprint(\"Excellent result:\", excellent)\nprint(\"Valid marks:\", valid_marks)",
    "language": "python",
    "output": "Student: Ahmad\nPassed: True\nExcellent result: True\nValid marks: True"
  },
  "commonMistakes": [
    "Using = instead of == when comparing values.",
    "Confusing greater than (>) with less than (<).",
    "Forgetting that >= and <= include equality.",
    "Thinking comparison operators return integers instead of Boolean values.",
    "Ignoring case sensitivity when comparing strings.",
    "Assuming string comparisons always follow dictionary order.",
    "Comparing incompatible data types, such as an integer and a string, with ordering operators."
  ],
  "exercise": {
    "question": "Build a simple examination result checker. Ask the user for their name and marks. Check whether the marks are at least 50, whether they are 80 or higher, and whether they are within the valid range of 0 to 100. Display the student's name and all three comparison results.",
    "hint": "Use input() for the name, int() for marks, >= for passing and excellent results, and a chained comparison (0 <= marks <= 100) for the valid range."
  },
  "solution": {
    "explanation": "The program receives the student's information and uses comparison operators to check passing marks, excellent marks, and the valid marks range.",
    "code": "student_name = input(\"Enter student name: \")\nmarks = int(input(\"Enter marks: \"))\n\npassed = marks >= 50\nexcellent = marks >= 80\nvalid_marks = 0 <= marks <= 100\n\nprint(\"--- Examination Result ---\")\nprint(\"Student:\", student_name)\nprint(\"Passed:\", passed)\nprint(\"Excellent:\", excellent)\nprint(\"Valid marks:\", valid_marks)",
    "output": "Enter student name: Ahmad\nEnter marks: 85\n--- Examination Result ---\nStudent: Ahmad\nPassed: True\nExcellent: True\nValid marks: True"
  },
  "quiz": [
    {
      "question": "Which operator checks whether two values are equal?",
      "options": [
        "=",
        "==",
        "!=",
        ">="
      ],
      "answer": 1,
      "explanation": "The == operator compares two values for equality."
    },
    {
      "question": "What is the result of 10 > 5?",
      "options": [
        "False",
        "True",
        "10",
        "5"
      ],
      "answer": 1,
      "explanation": "10 is greater than 5, so the result is True."
    },
    {
      "question": "What is the result of 10 != 10?",
      "options": [
        "True",
        "False",
        "10",
        "None"
      ],
      "answer": 1,
      "explanation": "The values are equal, so the not-equal comparison returns False."
    },
    {
      "question": "Which operator checks whether a value is less than or equal to another value?",
      "options": [
        "<",
        ">=",
        "<=",
        "!="
      ],
      "answer": 2,
      "explanation": "The <= operator checks both smaller and equal values."
    },
    {
      "question": "What is the result of 15 >= 15?",
      "options": [
        "False",
        "True",
        "15",
        "Error"
      ],
      "answer": 1,
      "explanation": "The >= operator includes equality, so the result is True."
    },
    {
      "question": "What type of value does a comparison operator return?",
      "options": [
        "String",
        "Integer",
        "Boolean",
        "List"
      ],
      "answer": 2,
      "explanation": "Comparison operators return either True or False, which are Boolean values."
    },
    {
      "question": "What is the result of 20 < 10?",
      "options": [
        "True",
        "False",
        "20",
        "10"
      ],
      "answer": 1,
      "explanation": "20 is not smaller than 10, so the result is False."
    },
    {
      "question": "What is the result of \"Python\" == \"python\"?",
      "options": [
        "True",
        "False",
        "Error",
        "None"
      ],
      "answer": 1,
      "explanation": "String comparison is case-sensitive, so uppercase P and lowercase p are different."
    },
    {
      "question": "What is the result of 18 <= 18?",
      "options": [
        "False",
        "True",
        "18",
        "Error"
      ],
      "answer": 1,
      "explanation": "The <= operator includes equality, so the result is True."
    },
    {
      "question": "What is the result of 18 <= 25 <= 60?",
      "options": [
        "False",
        "True",
        "25",
        "Error"
      ],
      "answer": 1,
      "explanation": "25 is greater than or equal to 18 and less than or equal to 60, so both comparisons are True."
    }
  ],
  "takeaways": [
    "Comparison Operators compare two values.",
    "== checks equality.",
    "!= checks inequality.",
    "> checks whether the left value is greater.",
    "< checks whether the left value is smaller.",
    ">= includes greater values and equal values.",
    "<= includes smaller values and equal values.",
    "Comparison operators return Boolean values: True or False.",
    "String comparisons are case-sensitive.",
    "Chained comparisons can check whether a value is within a range."
  ],
  "teacherNotes": "Begin by reviewing Boolean Values from the previous lesson. Explain that comparison operators produce True or False. Introduce each of the six operators separately and demonstrate them using simple numbers. Pay special attention to the difference between = and ==, and explain that >= and <= include equality. Use practical examples such as student passing marks, age eligibility, product prices, and low stock alerts. Ask students to predict the result before running each example. Then explain string comparison and case sensitivity. Introduce chained comparisons as a convenient Python feature for checking ranges. Finish with the examination result checker exercise. Make sure students understand that comparison operators themselves do not make decisions; they produce Boolean results that can later be used with if and while statements.",
  "teachingTime": "60 minutes"
};
