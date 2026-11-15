window.lessonData = window.lessonData || {};
window.lessonData[34] = {
  id: 34,
  title: "Validation",
  category: "Python Conditions",
  contentStatus: "authored",

  introduction: "Validation is the process of checking user input or data to make sure it meets the required rules before a program uses it.",

  definition: "Validation means checking whether entered data is acceptable, complete, and follows the expected rules.",

  whyItMatters: "Validation helps prevent incorrect, incomplete, or unexpected data from entering a program. It is important in registration forms, login systems, online shopping, banking applications, and web development.",

  objectives: [
    "Understand the meaning and purpose of validation.",
    "Check whether user input is empty.",
    "Validate numeric input using conditions.",
    "Check whether values are within an acceptable range.",
    "Validate text using string methods.",
    "Create simple input validation programs."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is Validation?",
      body: "Validation means checking whether the data entered by a user is correct and acceptable according to program rules.",
      bullets: [
        "Check user input before using it.",
        "Find empty or incorrect values.",
        "Check whether data follows required rules.",
        "Accept valid data and reject invalid data."
      ]
    },
    {
      kicker: "02 · Why Validation?",
      title: "Why Do We Need Validation?",
      body: "Users may enter incomplete, incorrect, or unexpected information. Validation helps a program handle these situations.",
      bullets: [
        "Prevent empty names.",
        "Check that age is within an acceptable range.",
        "Prevent marks outside the allowed range.",
        "Check required information in registration forms.",
        "Improve data quality."
      ]
    },
    {
      kicker: "03 · Basic Validation",
      title: "Valid and Invalid Data",
      body: "A value is valid when it follows the rules defined by the program.",
      bullets: [
        "Valid name: Ahmad",
        "Invalid name: Empty text",
        "Valid marks: 85",
        "Invalid marks: 150, when the maximum is 100"
      ],
      code: "marks = 85\n\nif marks >= 0 and marks <= 100:\n    print(\"Valid marks\")\nelse:\n    print(\"Invalid marks\")",
      output: "Valid marks"
    },
    {
      kicker: "04 · Empty Input",
      title: "Checking Empty Input",
      body: "The program can check whether a user entered something or left the input empty.",
      bullets: [
        "An empty string is \"\".",
        "Use == to compare with an empty string.",
        "Use strip() to remove surrounding spaces.",
        "Do not accept a value that contains only spaces."
      ],
      code: "name = input(\"Enter your name: \")\n\nif name.strip() == \"\":\n    print(\"Name is required\")\nelse:\n    print(\"Welcome\", name)",
      output: "Enter your name: Ahmad\nWelcome Ahmad"
    },
    {
      kicker: "05 · String Validation",
      title: "Checking Text Input",
      body: "String methods can help check whether entered text follows simple requirements.",
      bullets: [
        "strip() removes surrounding whitespace.",
        "isalpha() checks whether all characters are letters.",
        "isdigit() checks whether all characters are digits.",
        "These methods return True or False."
      ],
      code: "name = \"Ahmad\"\n\nif name.isalpha():\n    print(\"Name contains only letters\")\nelse:\n    print(\"Invalid name\")",
      output: "Name contains only letters"
    },
    {
      kicker: "06 · Numeric Validation",
      title: "Checking Numeric Input",
      body: "The input() function returns a string. We can use isdigit() to check whether a string contains only digits before converting it to an integer.",
      bullets: [
        "isdigit() returns True for digit-only strings.",
        "Convert valid numeric text using int().",
        "Negative numbers and decimal numbers need different handling.",
        "Always check before conversion when using this approach."
      ],
      code: "age_text = input(\"Enter your age: \")\n\nif age_text.isdigit():\n    age = int(age_text)\n    print(\"Your age is\", age)\nelse:\n    print(\"Please enter a whole number\")",
      output: "Enter your age: 25\nYour age is 25"
    },
    {
      kicker: "07 · Range Validation",
      title: "Checking an Acceptable Range",
      body: "A program can check whether a number is between a minimum and maximum value.",
      bullets: [
        "Use >= to check the minimum.",
        "Use <= to check the maximum.",
        "Use and when both limits must be satisfied.",
        "The value must be inside the allowed range."
      ],
      code: "marks = 85\n\nif marks >= 0 and marks <= 100:\n    print(\"Marks accepted\")\nelse:\n    print(\"Marks must be between 0 and 100\")",
      output: "Marks accepted"
    },
    {
      kicker: "08 · Practical Example",
      title: "Validating Student Marks",
      body: "A student can receive marks only between 0 and 100.",
      code: "marks = 120\n\nif marks < 0 or marks > 100:\n    print(\"Invalid marks\")\nelse:\n    print(\"Marks accepted\")",
      output: "Invalid marks",
      bullets: [
        "Marks below 0 are invalid.",
        "Marks above 100 are invalid.",
        "The or operator checks either invalid situation."
      ]
    },
    {
      kicker: "09 · Choice Validation",
      title: "Checking Allowed Choices",
      body: "A program can accept only specific options from the user.",
      code: "choice = input(\"Choose yes or no: \").strip().lower()\n\nif choice == \"yes\" or choice == \"no\":\n    print(\"Valid choice\")\nelse:\n    print(\"Please enter yes or no\")",
      output: "Choose yes or no: yes\nValid choice",
      bullets: [
        "strip() removes extra spaces.",
        "lower() converts text to lowercase.",
        "The condition accepts only yes or no."
      ]
    },
    {
      kicker: "10 · Password Validation",
      title: "Checking Password Length",
      body: "A simple password rule can require a minimum number of characters.",
      code: "password = input(\"Enter password: \")\n\nif len(password) >= 8:\n    print(\"Password length is acceptable\")\nelse:\n    print(\"Password must contain at least 8 characters\")",
      output: "Enter password: python123\nPassword length is acceptable",
      bullets: [
        "len() returns the number of characters.",
        "This example checks length only.",
        "A real application needs additional security checks."
      ]
    },
    {
      kicker: "11 · Email Validation",
      title: "Basic Email Checking",
      body: "A simple condition can check whether an email contains some expected characters. This is only a basic check, not complete email validation.",
      code: "email = input(\"Enter your email: \").strip()\n\nif \"@\" in email and \".\" in email:\n    print(\"Basic email check passed\")\nelse:\n    print(\"Invalid email format\")",
      output: "Enter your email: student@example.com\nBasic email check passed",
      bullets: [
        "Check whether @ exists.",
        "Check whether a dot exists.",
        "This does not guarantee that the email address is real or usable."
      ]
    },
    {
      kicker: "12 · Combined Validation",
      title: "Validating Multiple Fields",
      body: "A registration form may need to validate more than one value.",
      code: "name = \"Ahmad\"\nage = 20\n\nif name.strip() != \"\" and age >= 18:\n    print(\"Registration information accepted\")\nelse:\n    print(\"Please check your information\")",
      output: "Registration information accepted",
      bullets: [
        "Check that the name is not empty.",
        "Check that the age meets the requirement.",
        "Use and when both requirements must be satisfied."
      ]
    },
    {
      kicker: "13 · Validation Messages",
      title: "Showing Helpful Error Messages",
      body: "A good program should explain what the user needs to correct.",
      bullets: [
        "Avoid unclear messages such as Error.",
        "Explain which value is incorrect.",
        "Tell the user the accepted range or format.",
        "Keep messages simple and understandable."
      ],
      code: "age = 12\n\nif age < 18:\n    print(\"You must be at least 18 years old\")\nelse:\n    print(\"Age accepted\")",
      output: "You must be at least 18 years old"
    },
    {
      kicker: "14 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Validation must check the input correctly before using it.",
      bullets: [
        "Converting invalid text to int() before checking it.",
        "Forgetting that input() returns a string.",
        "Accepting empty text or spaces.",
        "Checking only the minimum but forgetting the maximum.",
        "Assuming isdigit() accepts negative or decimal numbers.",
        "Treating a basic email check as complete email validation."
      ]
    },
    {
      kicker: "15 · Practice",
      title: "Classroom Exercise",
      body: "Create a simple student registration validation program.",
      bullets: [
        "Ask the user to enter a name.",
        "Ask the user to enter their age.",
        "Reject an empty name.",
        "Check that the age contains only digits.",
        "Accept ages from 5 to 100.",
        "Display a helpful message for invalid input."
      ]
    },
    {
      kicker: "16 · Summary",
      title: "What Did We Learn?",
      body: "Validation checks whether entered data follows the rules required by a program.",
      bullets: [
        "Check for empty input.",
        "Use strip() to remove surrounding spaces.",
        "Use isalpha() and isdigit() for simple text checks.",
        "Use conditions to validate numeric ranges.",
        "Use logical operators to combine validation rules.",
        "Show clear messages when input is invalid."
      ]
    }
  ],

  example: {
    explanation: "This example checks a student's name and age. It rejects an empty name, checks that the age contains only digits, converts it to an integer, and verifies that it is within the allowed range.",
    code: "name = input(\"Enter your name: \").strip()\nage_text = input(\"Enter your age: \")\n\nif name == \"\":\n    print(\"Name is required\")\nelif not age_text.isdigit():\n    print(\"Age must be a whole number\")\nelse:\n    age = int(age_text)\n\n    if age < 5 or age > 100:\n        print(\"Age must be between 5 and 100\")\n    else:\n        print(\"Registration information accepted\")",
    language: "python",
    output: "Enter your name: Ahmad\nEnter your age: 25\nRegistration information accepted"
  },

  commonMistakes: [
    "Converting text to an integer before checking whether it contains valid numeric input.",
    "Forgetting that input() always returns a string.",
    "Checking an empty string without considering spaces.",
    "Using only a minimum or maximum check when both limits are required.",
    "Assuming isdigit() accepts negative numbers or decimal values.",
    "Using isalpha() when names containing spaces or hyphens should also be accepted.",
    "Assuming a simple email character check proves that an email address is valid.",
    "Showing unclear error messages that do not explain how to correct the input."
  ],

  exercise: {
    question: "Create a student registration validation program. Ask the user to enter their name and age. Reject the name if it is empty or contains only spaces. Check whether the age contains only digits. Convert the age to an integer only after that check. Accept ages from 5 to 100. Display a suitable message for each invalid input and display 'Registration successful' when all checks pass.",
    hint: "Use strip() for the name, isdigit() for the age, int() for conversion, and nested if or elif statements for the age range."
  },

  solution: {
    explanation: "The program first removes surrounding spaces from the name and checks whether it is empty. Then it checks whether the age contains only digits. After successful numeric validation, it converts the age to an integer and checks the allowed range.",
    code: "name = input(\"Enter your name: \").strip()\nage_text = input(\"Enter your age: \")\n\nif name == \"\":\n    print(\"Name is required\")\nelif not age_text.isdigit():\n    print(\"Please enter a valid whole number for age\")\nelse:\n    age = int(age_text)\n\n    if age < 5:\n        print(\"Age must be at least 5\")\n    elif age > 100:\n        print(\"Age must not be greater than 100\")\n    else:\n        print(\"Registration successful\")",
    output: "Enter your name: Ahmad\nEnter your age: 25\nRegistration successful"
  },

  quiz: [
    {
      question: "What is validation?",
      options: [
        "Repeating a program",
        "Checking whether data follows required rules",
        "Creating a function",
        "Printing information"
      ],
      answer: 1,
      explanation: "Validation checks whether entered data is acceptable according to defined rules."
    },
    {
      question: "Which method removes spaces from the beginning and end of a string?",
      options: [
        "upper()",
        "strip()",
        "isdigit()",
        "replace()"
      ],
      answer: 1,
      explanation: "strip() removes surrounding whitespace from a string."
    },
    {
      question: "What does isdigit() check?",
      options: [
        "Whether a string contains only digits",
        "Whether a string contains only letters",
        "Whether a string is empty",
        "Whether a number is negative"
      ],
      answer: 0,
      explanation: "isdigit() returns True when all characters in a non-empty string are digits."
    },
    {
      question: "What does input() return in Python?",
      options: [
        "Always an integer",
        "Always a float",
        "A string",
        "A Boolean"
      ],
      answer: 2,
      explanation: "The input() function returns user input as a string."
    },
    {
      question: "Which condition checks whether marks are between 0 and 100?",
      options: [
        "marks >= 0 or marks <= 100",
        "marks >= 0 and marks <= 100",
        "marks == 0 and marks == 100",
        "marks < 0 and marks > 100"
      ],
      answer: 1,
      explanation: "Both the minimum and maximum requirements must be satisfied, so and is used."
    },
    {
      question: "Does isdigit() accept the value '-25'?",
      options: [
        "Yes",
        "No",
        "Only sometimes",
        "It converts it to an integer"
      ],
      answer: 1,
      explanation: "The minus sign is not a digit, so '-25'.isdigit() returns False."
    },
    {
      question: "What does len(password) >= 8 check?",
      options: [
        "Whether the password contains a number",
        "Whether the password has at least 8 characters",
        "Whether the password is empty",
        "Whether the password contains an email address"
      ],
      answer: 1,
      explanation: "len() returns the number of characters, and >= 8 checks the minimum length."
    },
    {
      question: "Is checking whether an email contains @ and . complete email validation?",
      options: [
        "Yes, always",
        "No, it is only a basic check",
        "Only for Gmail",
        "Only when using input()"
      ],
      answer: 1,
      explanation: "A basic character check cannot guarantee that an email address is correctly formatted or exists."
    }
  ],

  takeaways: [
    "Validation checks whether data follows required rules.",
    "Use strip() to remove surrounding whitespace.",
    "Use isdigit() to check digit-only input.",
    "Convert numeric input only after checking it.",
    "Use conditions to check acceptable ranges.",
    "Use logical operators to combine validation rules.",
    "Show clear messages to help users correct invalid input.",
    "Basic validation is not the same as complete security."
  ],

  teacherNotes: "Begin by asking students what could happen if a user enters an empty name, letters instead of age, or marks greater than 100. Explain validation as checking information before accepting or using it. Start with empty input and strip(). Then demonstrate isalpha() and isdigit(), explaining their limitations: isalpha() does not accept spaces or hyphens, and isdigit() does not accept negative or decimal numbers. Teach range validation with marks between 0 and 100. Next, demonstrate password length and basic email checks, emphasizing that these are beginner examples rather than complete security or format validation. Finish with the registration example. Make sure students understand that input() returns a string and that numeric conversion should happen only after the input has been checked. Exception handling with try and except can be taught later as a more advanced way to handle conversion errors.",

  teachingTime: "50-60 minutes"
};