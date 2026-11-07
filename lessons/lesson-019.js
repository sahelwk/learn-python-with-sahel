window.lessonData = window.lessonData || {};
window.lessonData[19] = {
  id: 19,
  title: "Strings",
  category: "Python Basics",
  contentStatus: "authored",

  introduction: "A string is a sequence of characters used to store text in Python. Strings can contain letters, numbers, spaces, and special characters.",

  definition: "A string (str) is a sequence of characters enclosed in single quotes, double quotes, or triple quotes.",

  whyItMatters: "Strings are used in almost every application to store and process names, messages, addresses, emails, descriptions, and other text information.",

  objectives: [
    "Understand what strings are and how to create them.",
    "Use single, double, and triple quotes.",
    "Access individual characters using indexing.",
    "Extract parts of a string using slicing.",
    "Use common string methods to modify and search text.",
    "Combine strings and format text."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Are Strings?",
      body: "A string is text made up of characters. It is one of the most commonly used data types in Python.",
      bullets: [
        "Names: \"Ahmad\"",
        "Messages: \"Hello World\"",
        "Addresses: \"Kabul, Afghanistan\"",
        "Email addresses: \"student@example.com\"",
        "Numbers can also be stored as text: \"12345\""
      ]
    },
    {
      kicker: "02 · Creating Strings",
      title: "How to Create a String",
      body: "In Python, strings are written inside quotation marks.",
      bullets: [
        "Single quotes: 'Hello'",
        "Double quotes: \"Hello\"",
        "Triple quotes: '''Hello'''",
        "Both single and double quotes create strings."
      ],
      code: "name = \"Ahmad\"\ncity = 'Kabul'\nmessage = \"Hello Python\"\n\nprint(name)\nprint(city)\nprint(message)"
    },
    {
      kicker: "03 · Triple Quotes",
      title: "Multi-line Strings",
      body: "Triple quotes allow us to write text across multiple lines.",
      bullets: [
        "Use three single quotes or three double quotes.",
        "Useful for long messages.",
        "Line breaks are preserved."
      ],
      code: "message = \"\"\"Hello students,\nWelcome to Python.\nToday we are learning Strings.\"\"\"\n\nprint(message)"
    },
    {
      kicker: "04 · String Length",
      title: "The len() Function",
      body: "The len() function returns the number of characters in a string, including spaces.",
      bullets: [
        "Counts letters.",
        "Counts numbers and symbols.",
        "Spaces are also characters."
      ],
      code: "message = \"Hello Python\"\nprint(len(message))",
      output: "12"
    },
    {
      kicker: "05 · Indexing",
      title: "Access Characters",
      body: "Indexing allows us to access one character from a string using its position.",
      bullets: [
        "Indexing starts from 0.",
        "The first character has index 0.",
        "The second character has index 1.",
        "Negative indexing starts from the end."
      ],
      code: "language = \"Python\"\n\nprint(language[0])\nprint(language[1])\nprint(language[-1])",
      output: "P\ny\nn"
    },
    {
      kicker: "06 · Visualize Indexing",
      title: "Positive and Negative Indexes",
      body: "Every character has a positive index from the beginning and a negative index from the end.",
      bullets: [
        "Positive: 0  1  2  3  4  5",
        "Characters: P  y  t  h  o  n",
        "Negative: -6 -5 -4 -3 -2 -1",
        "Use an index to access one character."
      ],
      code: "word = \"Python\"\nprint(word[0])\nprint(word[-1])",
      output: "P\nn"
    },
    {
      kicker: "07 · Slicing",
      title: "Extract Part of a String",
      body: "Slicing extracts a part of a string using a start and end position.",
      bullets: [
        "Syntax: text[start:end]",
        "The start index is included.",
        "The end index is not included.",
        "You can leave start or end empty."
      ],
      code: "message = \"Python Programming\"\n\nprint(message[0:6])\nprint(message[7:])\nprint(message[:6])",
      output: "Python\nProgramming\nPython"
    },
    {
      kicker: "08 · Step in Slicing",
      title: "Using a Step Value",
      body: "Slicing can also use a step to skip characters.",
      bullets: [
        "Syntax: text[start:end:step]",
        "Step 2 selects every second character.",
        "Step -1 reverses the string."
      ],
      code: "word = \"Python\"\n\nprint(word[::2])\nprint(word[::-1])",
      output: "Pto\nnohtyP"
    },
    {
      kicker: "09 · Change Letter Case",
      title: "upper() and lower()",
      body: "These methods return a new string with uppercase or lowercase letters.",
      bullets: [
        "upper(): converts letters to uppercase.",
        "lower(): converts letters to lowercase.",
        "Original string remains unchanged."
      ],
      code: "message = \"Hello Python\"\n\nprint(message.upper())\nprint(message.lower())",
      output: "HELLO PYTHON\nhello python"
    },
    {
      kicker: "10 · Capitalization",
      title: "title() and capitalize()",
      body: "These methods change the capitalization of text.",
      bullets: [
        "title(): capitalizes the first letter of each word.",
        "capitalize(): capitalizes the first character of the string."
      ],
      code: "name = \"mohabatullah sahel\"\n\nprint(name.title())\nprint(name.capitalize())",
      output: "Mohabatullah Sahel\nMohabatullah sahel"
    },
    {
      kicker: "11 · Remove Spaces",
      title: "strip(), lstrip(), rstrip()",
      body: "These methods remove unwanted spaces from the beginning or end of a string.",
      bullets: [
        "strip(): removes spaces from both ends.",
        "lstrip(): removes spaces from the left.",
        "rstrip(): removes spaces from the right."
      ],
      code: "name = \"   Ahmad   \"\n\nprint(name.strip())\nprint(name.lstrip())\nprint(name.rstrip())"
    },
    {
      kicker: "12 · Replace Text",
      title: "The replace() Method",
      body: "replace() returns a new string with specified text replaced.",
      bullets: [
        "Find the old text.",
        "Provide the new text.",
        "The original string is unchanged."
      ],
      code: "message = \"I like Java\"\nnew_message = message.replace(\"Java\", \"Python\")\n\nprint(new_message)",
      output: "I like Python"
    },
    {
      kicker: "13 · Search in Strings",
      title: "find() and count()",
      body: "These methods help us search for text and count how many times it appears.",
      bullets: [
        "find(): returns the first position of text.",
        "Returns -1 if the text is not found.",
        "count(): counts occurrences."
      ],
      code: "message = \"Python is easy. Python is useful.\"\n\nprint(message.find(\"easy\"))\nprint(message.count(\"Python\"))",
      output: "10\n2"
    },
    {
      kicker: "14 · Check String Content",
      title: "startswith() and endswith()",
      body: "These methods check whether a string starts or ends with specific text.",
      bullets: [
        "startswith(): checks the beginning.",
        "endswith(): checks the ending.",
        "The result is True or False."
      ],
      code: "filename = \"lesson.py\"\n\nprint(filename.startswith(\"lesson\"))\nprint(filename.endswith(\".py\"))",
      output: "True\nTrue"
    },
    {
      kicker: "15 · Split Text",
      title: "The split() Method",
      body: "split() divides a string into a list of smaller strings.",
      bullets: [
        "By default, it splits at whitespace.",
        "You can provide a separator.",
        "The result is a list."
      ],
      code: "message = \"Python is easy\"\nwords = message.split()\n\nprint(words)\nprint(words[0])",
      output: "['Python', 'is', 'easy']\nPython"
    },
    {
      kicker: "16 · Join Text",
      title: "The join() Method",
      body: "join() combines multiple strings into one string using a separator.",
      bullets: [
        "Works with an iterable of strings.",
        "The separator is written before join().",
        "Useful for combining names or words."
      ],
      code: "words = [\"Python\", \"is\", \"powerful\"]\nmessage = \" \".join(words)\n\nprint(message)",
      output: "Python is powerful"
    },
    {
      kicker: "17 · Combine Strings",
      title: "String Concatenation",
      body: "Concatenation means joining two or more strings together.",
      bullets: [
        "Use the + operator.",
        "Use spaces where needed.",
        "Both values must be strings."
      ],
      code: "first_name = \"Ahmad\"\nlast_name = \"Khan\"\n\nfull_name = first_name + \" \" + last_name\nprint(full_name)",
      output: "Ahmad Khan"
    },
    {
      kicker: "18 · String Formatting",
      title: "Using f-Strings",
      body: "F-strings allow us to insert variable values directly inside a string.",
      bullets: [
        "Start the string with f.",
        "Put variables inside curly brackets {}.",
        "Useful for messages and reports."
      ],
      code: "name = \"Ahmad\"\nage = 20\n\nmessage = f\"My name is {name} and I am {age} years old.\"\nprint(message)",
      output: "My name is Ahmad and I am 20 years old."
    },
    {
      kicker: "19 · Important Concept",
      title: "Strings Are Immutable",
      body: "Strings cannot be changed character by character after they are created.",
      bullets: [
        "You cannot assign a new value to one character.",
        "String methods return new strings.",
        "You can assign a new string to the variable."
      ],
      code: "word = \"Python\"\n# word[0] = \"J\"  # This causes an error\n\nword = \"J\" + word[1:]\nprint(word)",
      output: "Jython"
    },
    {
      kicker: "20 · Practical Example",
      title: "Format a Student Message",
      body: "Use string methods and formatting to prepare a clear student message.",
      code: "name = \"  ahmad khan  \"\ncourse = \"python programming\"\n\nname = name.strip().title()\ncourse = course.title()\n\nmessage = f\"Student: {name}\\nCourse: {course}\"\nprint(message)",
      output: "Student: Ahmad Khan\nCourse: Python Programming"
    },
    {
      kicker: "21 · Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Pay attention to quotation marks, indexes, and string operations.",
      bullets: [
        "Forgetting quotation marks around text.",
        "Using an index that does not exist.",
        "Thinking the end index in slicing is included.",
        "Trying to change a string character directly.",
        "Trying to concatenate a string and an integer without conversion or formatting."
      ],
      code: "age = 20\n\n# This causes a TypeError:\n# print(\"Age: \" + age)\n\n# Correct:\nprint(f\"Age: {age}\")",
      output: "Age: 20"
    },
    {
      kicker: "22 · Practice",
      title: "Classroom Exercise",
      body: "Create a program that cleans and formats a student's name.",
      bullets: [
        "Store a name with extra spaces.",
        "Remove spaces using strip().",
        "Convert the name using title().",
        "Print the name length using len().",
        "Display a welcome message using an f-string."
      ]
    },
    {
      kicker: "23 · Summary",
      title: "What Did We Learn?",
      body: "Strings are essential for handling text in Python programs.",
      bullets: [
        "Create strings with quotation marks.",
        "Use len() to count characters.",
        "Use indexing and slicing to access text.",
        "Use methods to search and modify text.",
        "Combine strings with + and format them with f-strings.",
        "Remember: strings are immutable."
      ]
    }
  ],

  example: {
    explanation: "This example demonstrates string creation, indexing, slicing, methods, and f-string formatting.",
    code: "message = \"Python Programming\"\n\nprint(len(message))\nprint(message[0])\nprint(message[0:6])\nprint(message.upper())\nprint(message.replace(\"Python\", \"Web\"))\n\nname = \"Ahmad\"\nprint(f\"Welcome, {name}!\")",
    language: "python",
    output: "18\nP\nPython\nPYTHON PROGRAMMING\nWeb Programming\nWelcome, Ahmad!"
  },

  commonMistakes: [
    "Forgetting quotation marks when creating strings.",
    "Confusing a string such as \"123\" with an integer such as 123.",
    "Forgetting that string indexing starts at zero.",
    "Expecting the end index in slicing to be included.",
    "Using an index that is outside the string's valid range.",
    "Trying to change a character directly because strings are immutable.",
    "Forgetting that methods such as upper() return a new string.",
    "Trying to concatenate a string and an integer directly with +.",
    "Confusing find() returning -1 with an error when text is not found."
  ],

  exercise: {
    question: "Write a program that stores a student's full name with extra spaces. Remove the extra spaces, convert the name to title case, count the characters, and display a welcome message using an f-string.",
    hint: "Use strip(), title(), len(), and an f-string. Test your program with a name such as \"  ahmad khan  \"."
  },

  solution: {
    explanation: "First, strip() removes spaces from the beginning and end. Then title() capitalizes each word. len() counts the characters in the cleaned name, and the f-string creates the welcome message.",
    code: "name = \"  ahmad khan  \"\n\nname = name.strip().title()\nname_length = len(name)\n\nprint(\"Student Name:\", name)\nprint(\"Name Length:\", name_length)\nprint(f\"Welcome to Python, {name}!\")",
    output: "Student Name: Ahmad Khan\nName Length: 10\nWelcome to Python, Ahmad Khan!"
  },

  quiz: [
    {
      question: "Which data type is used to store text in Python?",
      options: ["int", "str", "float", "bool"],
      answer: 1,
      explanation: "str is the built-in data type used for strings."
    },
    {
      question: "What is the output of len(\"Python\")?",
      options: ["5", "6", "7", "8"],
      answer: 1,
      explanation: "Python contains six characters."
    },
    {
      question: "What is the result of \"Python\"[0]?",
      options: ["y", "P", "n", "Python"],
      answer: 1,
      explanation: "String indexing starts at zero, so index 0 is P."
    },
    {
      question: "What does \"Python\"[0:3] return?",
      options: ["Pyt", "Pyth", "yth", "Python"],
      answer: 0,
      explanation: "The start index is included and the end index is excluded."
    },
    {
      question: "Which method converts a string to uppercase?",
      options: ["lower()", "title()", "upper()", "strip()"],
      answer: 2,
      explanation: "upper() returns a new string with uppercase letters."
    },
    {
      question: "Which method removes spaces from both ends of a string?",
      options: ["split()", "strip()", "replace()", "count()"],
      answer: 1,
      explanation: "strip() removes leading and trailing whitespace."
    },
    {
      question: "What does find() return when text is not found?",
      options: ["0", "None", "-1", "False"],
      answer: 2,
      explanation: "find() returns -1 when the requested text is not found."
    },
    {
      question: "Which symbol is used for string concatenation?",
      options: ["*", "+", "/", "%"],
      answer: 1,
      explanation: "The + operator joins strings together."
    },
    {
      question: "Which is a correct f-string?",
      options: [
        "\"Hello {name}\"",
        "f\"Hello {name}\"",
        "format\"Hello {name}\"",
        "\"f Hello name\""
      ],
      answer: 1,
      explanation: "An f-string starts with f and uses curly brackets for expressions."
    },
    {
      question: "Can we change one character of an existing string directly?",
      options: [
        "Yes, always",
        "Only with upper()",
        "No, strings are immutable",
        "Only with print()"
      ],
      answer: 2,
      explanation: "Strings are immutable, so individual characters cannot be reassigned."
    }
  ],

  takeaways: [
    "A string stores text and is written inside quotation marks.",
    "Use len() to count characters.",
    "Use indexing to access one character.",
    "Use slicing to extract part of a string.",
    "String methods help search, clean, and format text.",
    "Use + to concatenate strings and f-strings to insert values.",
    "Strings are immutable: methods return new strings instead of changing individual characters."
  ],

  teacherNotes: "Begin by asking students where they see text in real applications: names, addresses, emails, and messages. Explain that these are strings. Write a simple string on the board and demonstrate quotation marks. Then teach len() and indexing slowly, emphasizing that indexing starts at zero. Use the word Python to demonstrate positive and negative indexes. Next, explain slicing and clearly show that the end index is excluded. Teach the most useful methods separately with practical examples: upper(), lower(), title(), strip(), replace(), find(), split(), and join(). Finally, demonstrate concatenation and f-strings. Explain immutability with the example word[0] = \"J\" and show how to create a new string instead. Ask students to predict outputs before running examples. Do not try to explain every string method in Python; focus on the methods in this lesson.",
  
  teachingTime: "60-75 minutes"
};