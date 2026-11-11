window.lessonData = window.lessonData || {};
window.lessonData[26] = {
  "id": 26,
  "title": "Logical Operators",
  "category": "Python Operators",
  "contentStatus": "authored",
  "introduction": "Logical operators allow Python programs to combine multiple conditions and make decisions based on whether those conditions are True or False. Python provides three logical operators: and, or, and not.",
  "definition": "Logical operators are used to combine or reverse Boolean conditions. They return a Boolean result: True or False.",
  "whyItMatters": "Real-world decisions often depend on more than one condition. Logical operators help programs check login credentials, student eligibility, discounts, stock availability, access permissions, and many other situations.",
  "objectives": [
    "Understand the purpose of logical operators in Python.",
    "Use the and operator to check whether all conditions are True.",
    "Use the or operator to check whether at least one condition is True.",
    "Use the not operator to reverse a Boolean result.",
    "Combine logical operators with comparison operators.",
    "Apply logical operators to practical programming problems.",
    "Understand operator precedence and short-circuit evaluation."
  ],
  "slides": [
    {
      "kicker": "Python Operators",
      "title": "Logical Operators",
      "body": "Logical operators help a program evaluate multiple conditions and produce a single Boolean result.",
      "bullets": [
        "Logical operators work with Boolean conditions.",
        "They help programs make decisions.",
        "Python has three logical operators: and, or, not."
      ],
      "code": "age = 22\nhas_id = True\n\ncan_enter = age >= 18 and has_id\nprint(can_enter)",
      "image": "assets/images/logical-operators-introduction.png"
    },
    {
      "kicker": "Lesson Introduction",
      "title": "Why Do We Need Logical Operators?",
      "body": "Many real-world decisions depend on more than one condition. Logical operators allow us to check those conditions together.",
      "bullets": [
        "A student passes if the required conditions are satisfied.",
        "A user logs in with a correct username and password.",
        "A customer receives a discount if at least one offer applies.",
        "A system checks whether a product is available and not expired."
      ],
      "code": "username_correct = True\npassword_correct = True\n\ncan_login = username_correct and password_correct\nprint(can_login)",
      "image": "assets/images/logical-operators-real-life.png"
    },
    {
      "kicker": "Core Concept",
      "title": "What Are Logical Operators?",
      "body": "Logical operators combine Boolean expressions or reverse their results. Their result is True or False.",
      "bullets": [
        "They are commonly used with comparison operators.",
        "They evaluate conditions.",
        "They help control program decisions.",
        "Their result is a Boolean value."
      ],
      "code": "age = 20\nhas_ticket = True\n\nresult = age >= 18 and has_ticket\nprint(result)\nprint(type(result))",
      "image": "assets/images/boolean-conditions.png"
    },
    {
      "kicker": "Three Operators",
      "title": "Python's Logical Operators",
      "body": "Python provides three logical operators. Each one follows a different rule when evaluating conditions.",
      "bullets": [
        "and: True only when both conditions are True.",
        "or: True when at least one condition is True.",
        "not: Reverses a Boolean result.",
        "These operators are written as English keywords in Python."
      ],
      "code": "print(True and True)\nprint(True or False)\nprint(not True)",
      "image": "assets/images/three-logical-operators.png"
    },
    {
      "kicker": "Operator 1",
      "title": "The AND Operator",
      "body": "The and operator returns True only when both conditions are True. If either condition is False, the result is False.",
      "bullets": [
        "Both conditions must be True.",
        "True and True produces True.",
        "True and False produces False.",
        "False and True produces False.",
        "False and False produces False."
      ],
      "code": "print(True and True)\nprint(True and False)\nprint(False and True)\nprint(False and False)",
      "image": "assets/images/and-truth-table.png"
    },
    {
      "kicker": "AND Truth Table",
      "title": "Understanding AND",
      "body": "The truth table shows every possible combination of two Boolean values when using and.",
      "bullets": [
        "Condition A = True, Condition B = True → True.",
        "Condition A = True, Condition B = False → False.",
        "Condition A = False, Condition B = True → False.",
        "Condition A = False, Condition B = False → False.",
        "Remember: AND requires both conditions to be True."
      ],
      "code": "a = 10 > 5\nb = 20 > 15\n\nprint(a and b)  # True\n\nc = 10 > 5\nd = 20 < 15\n\nprint(c and d)  # False",
      "image": "assets/images/and-conditions-table.png"
    },
    {
      "kicker": "Practical Example",
      "title": "AND: Student Exam Eligibility",
      "body": "A student can take an examination only if they have registered and paid the examination fee.",
      "bullets": [
        "Registration must be completed.",
        "The examination fee must be paid.",
        "Both conditions must be True.",
        "If one condition is False, the student is not eligible."
      ],
      "code": "is_registered = True\nfee_paid = True\n\ncan_take_exam = is_registered and fee_paid\nprint(\"Can take exam:\", can_take_exam)",
      "image": "assets/images/student-exam-eligibility.png"
    },
    {
      "kicker": "Practical Example",
      "title": "AND: Online Account Login",
      "body": "A login is successful only when both the username and password are correct.",
      "bullets": [
        "Check the username.",
        "Check the password.",
        "Combine both results with and.",
        "This is a simplified learning example, not a complete authentication system."
      ],
      "code": "username_correct = True\npassword_correct = False\n\nlogin_successful = username_correct and password_correct\nprint(\"Login successful:\", login_successful)",
      "image": "assets/images/login-and-conditions.png"
    },
    {
      "kicker": "Operator 2",
      "title": "The OR Operator",
      "body": "The or operator returns True when at least one condition is True. It returns False only when both conditions are False.",
      "bullets": [
        "At least one condition must be True.",
        "True or True produces True.",
        "True or False produces True.",
        "False or True produces True.",
        "False or False produces False."
      ],
      "code": "print(True or True)\nprint(True or False)\nprint(False or True)\nprint(False or False)",
      "image": "assets/images/or-truth-table.png"
    },
    {
      "kicker": "OR Truth Table",
      "title": "Understanding OR",
      "body": "The truth table shows every possible combination of two Boolean values when using or.",
      "bullets": [
        "True or True → True.",
        "True or False → True.",
        "False or True → True.",
        "False or False → False.",
        "Remember: OR needs at least one True condition."
      ],
      "code": "a = 10 > 5\nb = 20 < 15\n\nprint(a or b)  # True\n\nc = 10 < 5\nd = 20 < 15\n\nprint(c or d)  # False",
      "image": "assets/images/or-conditions-table.png"
    },
    {
      "kicker": "Practical Example",
      "title": "OR: Student Discount",
      "body": "A shop gives a student discount to customers who have a valid student card or an approved discount coupon.",
      "bullets": [
        "A valid student card is one way to qualify.",
        "An approved coupon is another way to qualify.",
        "Either condition is enough.",
        "Both conditions can also be True."
      ],
      "code": "has_student_card = False\nhas_coupon = True\n\ngets_discount = has_student_card or has_coupon\nprint(\"Gets discount:\", gets_discount)",
      "image": "assets/images/student-discount-or.png"
    },
    {
      "kicker": "Practical Example",
      "title": "OR: Contact Information",
      "body": "A registration form may accept a customer who provides either an email address or a phone number.",
      "bullets": [
        "An email address is acceptable.",
        "A phone number is also acceptable.",
        "At least one must be provided.",
        "This example assumes that the values have already been validated."
      ],
      "code": "email = \"\"\nphone = \"0791234567\"\n\nhas_contact = bool(email) or bool(phone)\nprint(\"Contact provided:\", has_contact)",
      "image": "assets/images/contact-information-or.png"
    },
    {
      "kicker": "Operator 3",
      "title": "The NOT Operator",
      "body": "The not operator reverses a Boolean value. True becomes False, and False becomes True.",
      "bullets": [
        "not True produces False.",
        "not False produces True.",
        "It works with Boolean expressions.",
        "It is useful when checking that something is not true."
      ],
      "code": "print(not True)\nprint(not False)\n\nis_active = True\nprint(not is_active)",
      "image": "assets/images/not-operator.png"
    },
    {
      "kicker": "NOT Truth Table",
      "title": "Understanding NOT",
      "body": "Unlike and and or, not works with one Boolean condition and reverses its result.",
      "bullets": [
        "Input True → Output False.",
        "Input False → Output True.",
        "It does not combine two conditions.",
        "It reverses the result of a condition."
      ],
      "code": "is_expired = False\n\nprint(not is_expired)  # True\n\nis_available = True\nprint(not is_available)  # False",
      "image": "assets/images/not-truth-table.png"
    },
    {
      "kicker": "Practical Example",
      "title": "NOT: Product Availability",
      "body": "An inventory system can use not to check whether a product is unavailable.",
      "bullets": [
        "If a product is available, not available is False.",
        "If a product is unavailable, not available is True.",
        "The operator reverses the original Boolean value."
      ],
      "code": "is_available = False\n\nis_unavailable = not is_available\nprint(\"Product unavailable:\", is_unavailable)",
      "image": "assets/images/product-availability-not.png"
    },
    {
      "kicker": "Combining Operators",
      "title": "Using AND, OR, and NOT Together",
      "body": "You can combine multiple logical operators to represent more detailed rules. Use parentheses to make complex conditions easier to understand.",
      "bullets": [
        "and checks whether all required conditions are True.",
        "or checks whether at least one condition is True.",
        "not reverses a condition.",
        "Parentheses make the intended grouping clear."
      ],
      "code": "age = 25\nhas_id = True\nis_blocked = False\n\ncan_enter = (age >= 18 and has_id) and not is_blocked\nprint(\"Can enter:\", can_enter)",
      "image": "assets/images/combined-logical-operators.png"
    },
    {
      "kicker": "Practical Example",
      "title": "Employee Access Permission",
      "body": "An employee can access a system if they are an administrator or an approved employee, and their account is not blocked.",
      "bullets": [
        "Administrator status or approved employee status is required.",
        "The account must not be blocked.",
        "OR handles the two possible access roles.",
        "AND combines role eligibility with account status."
      ],
      "code": "is_admin = False\nis_approved_employee = True\nis_blocked = False\n\ncan_access = (is_admin or is_approved_employee) and not is_blocked\nprint(\"Access granted:\", can_access)",
      "image": "assets/images/employee-access-permission.png"
    },
    {
      "kicker": "Operator Precedence",
      "title": "Order of Logical Operations",
      "body": "When multiple logical operators appear in one expression, Python follows an order of precedence.",
      "bullets": [
        "not is evaluated before and.",
        "and is evaluated before or.",
        "Parentheses can change the grouping.",
        "Use parentheses to make complex expressions clearer."
      ],
      "code": "result = True or False and False\nprint(result)  # True\n\nresult_with_parentheses = (True or False) and False\nprint(result_with_parentheses)  # False",
      "image": "assets/images/logical-operator-precedence.png"
    },
    {
      "kicker": "Important Concept",
      "title": "Short-Circuit Evaluation",
      "body": "Python sometimes stops evaluating a logical expression when the final result is already known. This behavior is called short-circuit evaluation.",
      "bullets": [
        "With and, a False first operand means the final result is False.",
        "With or, a True first operand means the final result is True.",
        "The second operand may not be evaluated.",
        "This can prevent unnecessary operations and some errors."
      ],
      "code": "number = 0\n\nresult = number != 0 and 10 / number > 2\nprint(result)  # False\n\nis_admin = True\nresult = is_admin or 10 / number > 2\nprint(result)  # True",
      "image": "assets/images/short-circuit-evaluation.png"
    },
    {
      "kicker": "Common Mistakes",
      "title": "Mistakes to Avoid",
      "body": "Logical operators are simple, but small mistakes can change the result of a condition.",
      "bullets": [
        "Using & instead of and for ordinary Boolean logic.",
        "Confusing and with or.",
        "Writing AND or OR in uppercase instead of Python's lowercase keywords.",
        "Forgetting that not reverses a Boolean result.",
        "Ignoring operator precedence in complex expressions.",
        "Using = instead of == when comparing values."
      ],
      "code": "# Correct\nage = 20\nprint(age >= 18 and age <= 60)\n\n# Incorrect: assignment is not comparison\n# print(age = 20)",
      "image": "assets/images/logical-operators-mistakes.png"
    },
    {
      "kicker": "Lesson Summary",
      "title": "Logical Operators at a Glance",
      "body": "Remember the main rule of each logical operator before writing complex conditions.",
      "bullets": [
        "and: True only when both conditions are True.",
        "or: True when at least one condition is True.",
        "not: Reverses True and False.",
        "Logical operators are often combined with comparison operators.",
        "Use parentheses to make conditions easier to read."
      ],
      "code": "age = 21\nhas_ticket = True\nis_banned = False\n\nallowed = age >= 18 and has_ticket and not is_banned\nprint(allowed)",
      "image": "assets/images/logical-operators-summary.png"
    }
  ],
  "example": {
    "explanation": "A shop gives a discount to a customer if they are a registered member or have a valid coupon. However, the discount is not available if the customer is blocked. This example combines or, and, and not.",
    "code": "is_member = False\nhas_coupon = True\nis_blocked = False\n\ngets_discount = (is_member or has_coupon) and not is_blocked\n\nprint(\"Registered member:\", is_member)\nprint(\"Has coupon:\", has_coupon)\nprint(\"Blocked:\", is_blocked)\nprint(\"Gets discount:\", gets_discount)",
    "language": "python",
    "output": "Registered member: False\nHas coupon: True\nBlocked: False\nGets discount: True"
  },
  "commonMistakes": [
    "Using and when the requirement is that at least one condition must be True.",
    "Using or when all conditions must be True.",
    "Forgetting that Python logical keywords are lowercase: and, or, not.",
    "Thinking that not combines two conditions. It reverses one Boolean expression.",
    "Confusing the logical operators and, or, not with the bitwise operators &, |, and ~.",
    "Forgetting that and has higher precedence than or.",
    "Writing complicated conditions without parentheses, making the intended logic difficult to understand.",
    "Assuming both sides of and or or are always evaluated. Python uses short-circuit evaluation.",
    "Using = instead of == when comparing values."
  ],
  "exercise": {
    "question": "Create a simple student admission eligibility program. A student can be admitted if they are at least 18 years old and have passed the entrance examination. However, a student must not be suspended. Use and, or, and not where appropriate. Then print the admission result. Add a second rule: a student can receive a scholarship if they have excellent marks or come from an eligible scholarship category.",
    "hint": "Use comparison operators to check age and marks. Combine the admission conditions with and and not. Use or for the two scholarship possibilities."
  },
  "solution": {
    "explanation": "The admission condition requires all necessary conditions: the student must be at least 18, must pass the entrance examination, and must not be suspended. The scholarship condition requires only one of two possibilities: excellent marks or an eligible scholarship category.",
    "code": "age = 20\nentrance_exam_passed = True\nis_suspended = False\n\nmarks = 92\nis_eligible_category = False\n\ncan_be_admitted = age >= 18 and entrance_exam_passed and not is_suspended\ngets_scholarship = marks >= 90 or is_eligible_category\n\nprint(\"Can be admitted:\", can_be_admitted)\nprint(\"Gets scholarship:\", gets_scholarship)",
    "output": "Can be admitted: True\nGets scholarship: True"
  },
  "quiz": [
    {
      "question": "How many logical operators does Python provide?",
      "options": [
        "Two",
        "Three",
        "Four",
        "Five"
      ],
      "answer": 1,
      "explanation": "Python provides three logical operators: and, or, and not."
    },
    {
      "question": "What is the result of True and False?",
      "options": [
        "True",
        "False",
        "None",
        "Error"
      ],
      "answer": 1,
      "explanation": "The and operator returns True only when both operands are True."
    },
    {
      "question": "What is the result of True or False?",
      "options": [
        "True",
        "False",
        "None",
        "Error"
      ],
      "answer": 0,
      "explanation": "The or operator returns True when at least one operand is True."
    },
    {
      "question": "What is the result of not True?",
      "options": [
        "True",
        "False",
        "1",
        "None"
      ],
      "answer": 1,
      "explanation": "The not operator reverses the Boolean value."
    },
    {
      "question": "Which operator should be used when both conditions must be True?",
      "options": [
        "or",
        "not",
        "and",
        "=="
      ],
      "answer": 2,
      "explanation": "Use and when every condition must be True."
    },
    {
      "question": "Which operator should be used when at least one condition must be True?",
      "options": [
        "and",
        "or",
        "not",
        "="
      ],
      "answer": 1,
      "explanation": "Use or when one or more conditions can satisfy the requirement."
    },
    {
      "question": "What is the output of this code?\n\nage = 20\nprint(age >= 18 and age < 30)",
      "options": [
        "True",
        "False",
        "20",
        "Error"
      ],
      "answer": 0,
      "explanation": "Both comparisons are True, so the and expression returns True."
    },
    {
      "question": "What is the output of this code?\n\nis_admin = True\nis_blocked = False\nprint(is_admin and not is_blocked)",
      "options": [
        "False",
        "True",
        "None",
        "Error"
      ],
      "answer": 1,
      "explanation": "not False is True, and True and True produces True."
    },
    {
      "question": "Which logical operator has the highest precedence?",
      "options": [
        "or",
        "and",
        "not",
        "All have equal precedence"
      ],
      "answer": 2,
      "explanation": "The logical precedence order is not, then and, then or."
    },
    {
      "question": "What is short-circuit evaluation?",
      "options": [
        "Python always evaluates every condition.",
        "Python stops evaluating when the result is already determined.",
        "Python skips every condition.",
        "Python converts conditions into strings."
      ],
      "answer": 1,
      "explanation": "Short-circuit evaluation means Python can stop evaluating an expression when its final result is already known."
    }
  ],
  "takeaways": [
    "Python has three logical operators: and, or, and not.",
    "The and operator returns True only when both conditions are True.",
    "The or operator returns True when at least one condition is True.",
    "The not operator reverses a Boolean result.",
    "Logical operators are commonly combined with comparison operators.",
    "Use parentheses to make complex logical expressions clear.",
    "Python evaluates not before and, and before or.",
    "Short-circuit evaluation can prevent unnecessary evaluation of the remaining expression."
  ],
  "teacherNotes": "Teaching plan for 60 minutes:\n\n1. Introduction (5 minutes): Ask students how a shop, school, or computer system makes decisions when more than one condition is involved. Explain that logical operators help combine conditions.\n\n2. Boolean review (5 minutes): Remind students that True and False are Boolean values. Explain that comparison operators such as >=, ==, and != produce Boolean results.\n\n3. AND operator (10 minutes): Explain that all conditions must be True. Use the student examination example. Ask students what happens if registration is False but the fee is paid.\n\n4. OR operator (10 minutes): Explain that at least one condition must be True. Use the student discount example. Ask students what happens if both conditions are False.\n\n5. NOT operator (7 minutes): Explain that not reverses a Boolean value. Use product availability or account blocking as an example.\n\n6. Combined conditions (8 minutes): Write the employee access example on screen. Ask students to identify which parts use and, or, and not. Explain parentheses and precedence.\n\n7. Short-circuit evaluation (5 minutes): Demonstrate why False and a second expression does not evaluate the second expression, and why True or a second expression does not evaluate the second expression.\n\n8. Student practice and review (10 minutes): Give students the admission exercise. Let them predict the result before running the code. Change one variable at a time and ask them to explain how the output changes.\n\nImportant teaching distinction:\n- AND means all required conditions must be satisfied.\n- OR means at least one condition must be satisfied.\n- NOT means the opposite Boolean result.\n\nDo not teach logical operators as if they are the same as bitwise operators. Also explain that and and or can return an operand value in Python when used with non-Boolean objects, although in this beginner lesson students should focus on Boolean conditions and True/False results.",
  "teachingTime": "60 minutes"
};