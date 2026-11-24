window.lessonData = window.lessonData || {};
window.lessonData[46] = {
  id: 46,
  title: "Dictionaries",
  category: "Python Data Structures",
  contentStatus: "authored",
  introduction: "This lesson introduces Python dictionaries, key-value pairs, accessing, adding, updating, removing items, dictionary methods, looping, and nested dictionaries.",
  definition: "A dictionary is a mutable collection that stores data as key-value pairs. Keys are unique and are used to access values.",
  whyItMatters: "Dictionaries are widely used to store structured data such as student records, product details, user information, settings, and API data.",
  objectives: [
    "Understand what a dictionary is and how key-value pairs work.",
    "Create dictionaries and access values using keys.",
    "Use get() to safely access dictionary values.",
    "Add and update dictionary items.",
    "Remove dictionary items using different methods.",
    "Use keys(), values(), and items().",
    "Loop through dictionaries.",
    "Understand nested dictionaries.",
    "Use membership operators with dictionaries."
  ],
  slides: [
    {
      kicker: "Python Data Structures",
      title: "What Is a Dictionary?",
      body: "A dictionary stores information as key-value pairs.",
      bullets: [
        "Each key is connected to a value.",
        "Keys are unique.",
        "Values can be duplicated.",
        "Dictionaries are mutable."
      ]
    },
    {
      kicker: "Understanding Dictionaries",
      title: "Why Do We Use Dictionaries?",
      body: "Dictionaries allow us to store related information using meaningful keys.",
      bullets: [
        "Student information.",
        "Product details.",
        "User profiles.",
        "Settings and configuration.",
        "Structured data from APIs."
      ]
    },
    {
      kicker: "Syntax",
      title: "Creating a Dictionary",
      body: "We create a dictionary using curly braces and key-value pairs.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"class\": \"Grade 12\"\n}\n\nprint(student)",
      output: "{'name': 'Ahmad', 'age': 18, 'class': 'Grade 12'}"
    },
    {
      kicker: "Understanding Keys",
      title: "Key and Value",
      body: "Every dictionary item contains a key and its corresponding value.",
      bullets: [
        "\"name\" is a key.",
        "\"Ahmad\" is its value.",
        "18 is the value associated with the age key.",
        "A key is used to access its value."
      ],
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18\n}",
      output: "The dictionary contains two key-value pairs."
    },
    {
      kicker: "Dictionary Properties",
      title: "Dictionary Keys Are Unique",
      body: "A dictionary cannot keep multiple separate entries with the same key. If a key is repeated during creation, the last value for that key is retained.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"name\": \"Ali\"\n}\nprint(student)",
      output: "{'name': 'Ali'}"
    },
    {
      kicker: "Dictionary Properties",
      title: "Dictionary Values Can Be Duplicated",
      body: "Different keys can have the same value.",
      code: "students = {\n    \"student1\": \"Ahmad\",\n    \"student2\": \"Ahmad\",\n    \"student3\": \"Ali\"\n}\nprint(students)",
      output: "{'student1': 'Ahmad', 'student2': 'Ahmad', 'student3': 'Ali'}"
    },
    {
      kicker: "Dictionary Properties",
      title: "Dictionaries Preserve Insertion Order",
      body: "Modern Python dictionaries preserve the order in which keys are inserted.",
      bullets: [
        "Items maintain insertion order.",
        "Dictionaries are not sorted automatically.",
        "Items are accessed using keys, not numeric indexes."
      ],
      code: "data = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"city\": \"Kabul\"\n}\nprint(data)",
      output: "{'name': 'Ahmad', 'age': 18, 'city': 'Kabul'}"
    },
    {
      kicker: "Syntax",
      title: "Creating an Empty Dictionary",
      body: "We can create an empty dictionary using {} or dict().",
      code: "a = {}\nb = dict()\n\nprint(type(a))\nprint(type(b))",
      output: "<class 'dict'>\n<class 'dict'>"
    },
    {
      kicker: "Data Types",
      title: "Dictionary Values Can Have Different Types",
      body: "Dictionary values can contain strings, numbers, Boolean values, lists, tuples, sets, and other dictionaries.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"marks\": [85, 90, 78],\n    \"active\": True\n}\nprint(student)",
      output: "{'name': 'Ahmad', 'age': 18, 'marks': [85, 90, 78], 'active': True}"
    },
    {
      kicker: "Accessing Values",
      title: "Access Values Using Keys",
      body: "We use the key inside square brackets to access its value.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18\n}\n\nprint(student[\"name\"])\nprint(student[\"age\"])",
      output: "Ahmad\n18"
    },
    {
      kicker: "Accessing Values",
      title: "What Happens if a Key Is Missing?",
      body: "Using square brackets with a missing key raises KeyError.",
      code: "student = {\"name\": \"Ahmad\"}\nprint(student[\"age\"])",
      output: "KeyError: 'age'"
    },
    {
      kicker: "Accessing Values",
      title: "Using get()",
      body: "get() retrieves a value without raising KeyError when the key is missing.",
      bullets: [
        "It returns the value if the key exists.",
        "It returns None if the key is missing.",
        "We can provide a default value."
      ],
      code: "student = {\"name\": \"Ahmad\"}\n\nprint(student.get(\"name\"))\nprint(student.get(\"age\"))\nprint(student.get(\"age\", 0))",
      output: "Ahmad\nNone\n0"
    },
    {
      kicker: "Adding Items",
      title: "Add a New Key-Value Pair",
      body: "Assigning a value to a new key adds a new dictionary item.",
      code: "student = {\"name\": \"Ahmad\"}\nstudent[\"age\"] = 18\nprint(student)",
      output: "{'name': 'Ahmad', 'age': 18}"
    },
    {
      kicker: "Updating Items",
      title: "Update an Existing Value",
      body: "Assigning a new value to an existing key changes that key's value.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18\n}\n\nstudent[\"age\"] = 19\nprint(student)",
      output: "{'name': 'Ahmad', 'age': 19}"
    },
    {
      kicker: "Adding and Updating",
      title: "Using update()",
      body: "update() adds new key-value pairs or updates existing keys.",
      code: "student = {\"name\": \"Ahmad\", \"age\": 18}\nstudent.update({\"age\": 19, \"city\": \"Kabul\"})\nprint(student)",
      output: "{'name': 'Ahmad', 'age': 19, 'city': 'Kabul'}"
    },
    {
      kicker: "Removing Items",
      title: "Using pop()",
      body: "pop() removes a specified key and returns its value.",
      bullets: [
        "It requires a key.",
        "It returns the removed value.",
        "If the key is missing, it raises KeyError unless a default is provided."
      ],
      code: "student = {\"name\": \"Ahmad\", \"age\": 18}\nremoved = student.pop(\"age\")\nprint(removed)\nprint(student)",
      output: "18\n{'name': 'Ahmad'}"
    },
    {
      kicker: "Removing Items",
      title: "Using pop() with a Default",
      body: "We can provide a default value to avoid KeyError when the key is missing.",
      code: "student = {\"name\": \"Ahmad\"}\nremoved = student.pop(\"age\", 0)\nprint(removed)\nprint(student)",
      output: "0\n{'name': 'Ahmad'}"
    },
    {
      kicker: "Removing Items",
      title: "Using popitem()",
      body: "popitem() removes and returns the last inserted key-value pair.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"city\": \"Kabul\"\n}\n\nremoved = student.popitem()\nprint(removed)\nprint(student)",
      output: "('city', 'Kabul')\n{'name': 'Ahmad', 'age': 18}"
    },
    {
      kicker: "Removing Items",
      title: "Using del",
      body: "del can remove a dictionary item using its key.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18\n}\n\ndel student[\"age\"]\nprint(student)",
      output: "{'name': 'Ahmad'}"
    },
    {
      kicker: "Removing Items",
      title: "Using clear()",
      body: "clear() removes all items from the dictionary.",
      code: "student = {\"name\": \"Ahmad\", \"age\": 18}\nstudent.clear()\nprint(student)",
      output: "{}"
    },
    {
      kicker: "Dictionary Methods",
      title: "Using keys()",
      body: "keys() returns a view of the dictionary keys.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"city\": \"Kabul\"\n}\n\nprint(student.keys())",
      output: "dict_keys(['name', 'age', 'city'])"
    },
    {
      kicker: "Dictionary Methods",
      title: "Using values()",
      body: "values() returns a view of the dictionary values.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"city\": \"Kabul\"\n}\n\nprint(student.values())",
      output: "dict_values(['Ahmad', 18, 'Kabul'])"
    },
    {
      kicker: "Dictionary Methods",
      title: "Using items()",
      body: "items() returns a view of key-value pairs as tuples.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18\n}\n\nprint(student.items())",
      output: "dict_items([('name', 'Ahmad'), ('age', 18)])"
    },
    {
      kicker: "Looping",
      title: "Loop Through Dictionary Keys",
      body: "A basic for loop iterates over dictionary keys.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"city\": \"Kabul\"\n}\n\nfor key in student:\n    print(key)",
      output: "name\nage\ncity"
    },
    {
      kicker: "Looping",
      title: "Loop Through Values",
      body: "We can use values() to loop through dictionary values.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"city\": \"Kabul\"\n}\n\nfor value in student.values():\n    print(value)",
      output: "Ahmad\n18\nKabul"
    },
    {
      kicker: "Looping",
      title: "Loop Through Keys and Values",
      body: "items() allows us to access each key and value together.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"city\": \"Kabul\"\n}\n\nfor key, value in student.items():\n    print(key, \"=\", value)",
      output: "name = Ahmad\nage = 18\ncity = Kabul"
    },
    {
      kicker: "Membership",
      title: "Using in and not in",
      body: "Membership checks dictionary keys by default.",
      code: "student = {\"name\": \"Ahmad\", \"age\": 18}\n\nprint(\"name\" in student)\nprint(\"Ahmad\" in student)\nprint(\"age\" not in student)",
      output: "True\nFalse\nFalse"
    },
    {
      kicker: "Membership",
      title: "Check Dictionary Values",
      body: "Use values() when checking whether a value exists.",
      code: "student = {\"name\": \"Ahmad\", \"age\": 18}\n\nprint(\"Ahmad\" in student.values())\nprint(18 in student.values())",
      output: "True\nTrue"
    },
    {
      kicker: "Built-in Functions",
      title: "Using len()",
      body: "len() returns the number of key-value pairs in a dictionary.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"city\": \"Kabul\"\n}\n\nprint(len(student))",
      output: "3"
    },
    {
      kicker: "Nested Dictionaries",
      title: "What Is a Nested Dictionary?",
      body: "A nested dictionary is a dictionary that contains another dictionary as a value.",
      code: "students = {\n    \"student1\": {\"name\": \"Ahmad\", \"age\": 18},\n    \"student2\": {\"name\": \"Ali\", \"age\": 19}\n}\nprint(students)",
      output: "{'student1': {'name': 'Ahmad', 'age': 18}, 'student2': {'name': 'Ali', 'age': 19}}"
    },
    {
      kicker: "Nested Dictionaries",
      title: "Access Nested Values",
      body: "We use multiple keys to access values inside nested dictionaries.",
      code: "students = {\n    \"student1\": {\"name\": \"Ahmad\", \"age\": 18},\n    \"student2\": {\"name\": \"Ali\", \"age\": 19}\n}\n\nprint(students[\"student1\"][\"name\"])\nprint(students[\"student2\"][\"age\"])",
      output: "Ahmad\n19"
    },
    {
      kicker: "Nested Dictionaries",
      title: "Update Nested Values",
      body: "We can update values inside a nested dictionary.",
      code: "students = {\n    \"student1\": {\"name\": \"Ahmad\", \"age\": 18},\n    \"student2\": {\"name\": \"Ali\", \"age\": 19}\n}\n\nstudents[\"student1\"][\"age\"] = 20\nprint(students[\"student1\"])",
      output: "{'name': 'Ahmad', 'age': 20}"
    },
    {
      kicker: "Practical Example",
      title: "Student Record",
      body: "A dictionary can store a student's name, age, class, and marks.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"class\": \"Grade 12\",\n    \"marks\": [85, 90, 78]\n}\n\nprint(\"Name:\", student[\"name\"])\nprint(\"Age:\", student[\"age\"])\nprint(\"Marks:\", student[\"marks\"])",
      output: "Name: Ahmad\nAge: 18\nMarks: [85, 90, 78]"
    },
    {
      kicker: "Practical Example",
      title: "Calculate Student Average",
      body: "We can store marks in a list inside a dictionary and calculate the average.",
      code: "student = {\n    \"name\": \"Ahmad\",\n    \"marks\": [85, 90, 78]\n}\n\nmarks = student[\"marks\"]\naverage = sum(marks) / len(marks)\nprint(\"Average:\", average)",
      output: "Average: 84.33333333333333"
    },
    {
      kicker: "Common Mistakes",
      title: "Dictionary Mistakes",
      body: "Understand these common errors before working with dictionaries.",
      bullets: [
        "Accessing a missing key using square brackets.",
        "Confusing keys with values.",
        "Using duplicate keys and expecting both entries to remain.",
        "Using numeric indexes to access dictionary items.",
        "Confusing keys() with values().",
        "Forgetting that in checks keys by default.",
        "Confusing pop() with popitem()."
      ]
    },
    {
      kicker: "Practice",
      title: "Create a Product Dictionary",
      body: "Create a dictionary containing product information.",
      bullets: [
        "Store the product name.",
        "Store the price.",
        "Store the quantity.",
        "Access the product name and price.",
        "Add a category.",
        "Update the price.",
        "Remove one item.",
        "Loop through the dictionary."
      ]
    },
    {
      kicker: "Review",
      title: "Dictionaries Summary",
      body: "Dictionaries store data using unique keys and their values.",
      bullets: [
        "Create dictionaries using {}.",
        "Access values using keys.",
        "Use get() for safer access.",
        "Add and update using assignment or update().",
        "Use pop(), popitem(), del, and clear().",
        "Use keys(), values(), and items().",
        "Loop through dictionaries.",
        "Use nested dictionaries for structured records."
      ]
    }
  ],
  example: {
    explanation: "This example creates a student dictionary, accesses information, updates marks, adds a new item, and loops through the dictionary.",
    code: "student = {\n    \"name\": \"Ahmad\",\n    \"age\": 18,\n    \"class\": \"Grade 12\",\n    \"marks\": [85, 90, 78]\n}\n\nprint(\"Name:\", student[\"name\"])\nprint(\"Age:\", student.get(\"age\"))\n\nstudent[\"city\"] = \"Kabul\"\nstudent[\"marks\"].append(95)\nstudent[\"age\"] = 19\n\nfor key, value in student.items():\n    print(key, \"=\", value)",
    language: "python",
    output: "Name: Ahmad\nAge: 18\nname = Ahmad\nage = 19\nclass = Grade 12\nmarks = [85, 90, 78, 95]\ncity = Kabul"
  },
  commonMistakes: [
    "Accessing a key that does not exist using square brackets.",
    "Confusing dictionary keys and values.",
    "Expecting duplicate keys to create multiple dictionary entries.",
    "Trying to access dictionary values using numeric indexes.",
    "Confusing pop() and popitem().",
    "Assuming in checks dictionary values instead of keys.",
    "Forgetting that dictionaries are mutable.",
    "Confusing keys(), values(), and items().",
    "Forgetting that dictionary keys must be hashable."
  ],
  exercise: {
    question: "Create a dictionary for a product containing its name, price, quantity, and category. Print the product name and price. Update the price, add a new key called available, remove the quantity using pop(), and loop through the remaining dictionary using items().",
    hint: "Use dictionary assignment, update(), pop(), and items()."
  },
  solution: {
    explanation: "This solution creates a product dictionary, reads values, updates the price, adds availability, removes quantity, and prints all remaining key-value pairs.",
    code: "product = {\n    \"name\": \"Laptop\",\n    \"price\": 50000,\n    \"quantity\": 5,\n    \"category\": \"Electronics\"\n}\n\nprint(\"Name:\", product[\"name\"])\nprint(\"Price:\", product[\"price\"])\n\nproduct[\"price\"] = 48000\nproduct[\"available\"] = True\nproduct.pop(\"quantity\")\n\nfor key, value in product.items():\n    print(key, \"=\", value)",
    output: "Name: Laptop\nPrice: 50000\nname = Laptop\nprice = 48000\ncategory = Electronics\navailable = True"
  },
  quiz: [
    {
      question: "What does a Python dictionary store?",
      options: [
        "Only numbers",
        "Key-value pairs",
        "Only strings",
        "Items with numeric indexes only"
      ],
      answer: 1,
      explanation: "A dictionary stores key-value pairs."
    },
    {
      question: "How do we access a dictionary value?",
      options: [
        "Using its key",
        "Using a list index only",
        "Using append()",
        "Using sort()"
      ],
      answer: 0,
      explanation: "Dictionary values are accessed through their keys."
    },
    {
      question: "What does get() return when a key is missing and no default is supplied?",
      options: ["0", "False", "None", "KeyError"],
      answer: 2,
      explanation: "get() returns None if the key is missing and no default is provided."
    },
    {
      question: "Which method removes a key and returns its value?",
      options: ["clear()", "pop()", "keys()", "update()"],
      answer: 1,
      explanation: "pop() removes the specified key and returns its value."
    },
    {
      question: "What does items() provide?",
      options: [
        "Only dictionary keys",
        "Only dictionary values",
        "Key-value pairs",
        "A sorted dictionary"
      ],
      answer: 2,
      explanation: "items() provides key-value pairs."
    },
    {
      question: "What does in check by default in a dictionary?",
      options: ["Values", "Keys", "Both keys and values", "Dictionary length"],
      answer: 1,
      explanation: "Membership in a dictionary checks keys by default."
    },
    {
      question: "What is a nested dictionary?",
      options: [
        "A dictionary with no keys",
        "A dictionary containing another dictionary",
        "A list of numbers",
        "A dictionary that cannot be changed"
      ],
      answer: 1,
      explanation: "A nested dictionary contains another dictionary as a value."
    },
    {
      question: "What happens when the same key is used twice during dictionary creation?",
      options: [
        "Both keys remain as separate entries.",
        "Python raises an error in every case.",
        "The later value replaces the earlier value for that key.",
        "The dictionary becomes a set."
      ],
      answer: 2,
      explanation: "Repeated keys in a dictionary literal result in the later value being retained."
    }
  ],
  takeaways: [
    "Dictionaries store data using key-value pairs.",
    "Keys are unique and must be hashable.",
    "Values can contain different data types.",
    "Use keys to access dictionary values.",
    "get() is useful for safer access to missing keys.",
    "Use assignment and update() to add or change items.",
    "Use pop(), popitem(), del, and clear() to remove items.",
    "Use keys(), values(), and items() to work with dictionary contents.",
    "Dictionaries can contain nested dictionaries."
  ],
  teacherNotes: "Start with a real student record and explain the difference between a key and a value. Compare accessing a List using indexes with accessing a Dictionary using keys. Teach get() before removal methods. Demonstrate adding and updating items using assignment and update(). Explain pop() versus popitem(). Use keys(), values(), and items() to demonstrate loops. Finish with a product or student record exercise. Students should understand dictionaries well before moving to combined Data Structures exercises.",
  teachingTime: "90-120 minutes"
};