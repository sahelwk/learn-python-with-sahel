window.lessonData = window.lessonData || {};
window.lessonData[48] = {
  "id": 48,
  "title": "Nested Data Structures",
  "category": "Python Data Structures",
  "contentStatus": "authored",
  "introduction": "Nested Data Structures allow us to store one data structure inside another. This helps organize complex and related information.",
  "definition": "Nested Data Structures are data structures that contain other data structures as their elements or values.",
  "whyItMatters": "Real-world data often contains multiple levels of information. Nested structures help us organize students, products, departments, records, and other complex data.",
  "objectives": [
    "Understand what Nested Data Structures are.",
    "Create nested lists and nested dictionaries.",
    "Access and update nested values.",
    "Use loops with nested data structures.",
    "Understand lists of dictionaries and dictionaries containing lists."
  ],
  "slides": [
    {
      "kicker": "Introduction",
      "title": "What Are Nested Data Structures?",
      "body": "A data structure can contain another data structure inside it.",
      "bullets": [
        "List inside List",
        "Dictionary inside Dictionary",
        "List inside Dictionary",
        "Dictionary inside List"
      ]
    },
    {
      "kicker": "Concept",
      "title": "Why Do We Need Nested Structures?",
      "body": "Sometimes one variable or one simple list is not enough to organize our information.",
      "bullets": [
        "Organize related information",
        "Store multiple records",
        "Represent real-world data",
        "Build more organized programs"
      ]
    },
    {
      "kicker": "Nested Lists",
      "title": "A List Inside Another List",
      "body": "A list can contain other lists as its elements.",
      "code": "numbers = [[1, 2], [3, 4], [5, 6]]\nprint(numbers)",
      "language": "python"
    },
    {
      "kicker": "Understanding",
      "title": "Visualizing a Nested List",
      "body": "The outer list contains three inner lists.",
      "bullets": [
        "First inner list: [1, 2]",
        "Second inner list: [3, 4]",
        "Third inner list: [5, 6]"
      ]
    },
    {
      "kicker": "Indexing",
      "title": "Accessing an Inner List",
      "body": "The first index selects an inner list.",
      "code": "numbers = [[1, 2], [3, 4], [5, 6]]\nprint(numbers[0])\nprint(numbers[1])\nprint(numbers[2])",
      "language": "python"
    },
    {
      "kicker": "Nested Indexing",
      "title": "Accessing an Individual Element",
      "body": "Use two indexes: the first selects the inner list, and the second selects the element.",
      "code": "numbers = [[1, 2], [3, 4], [5, 6]]\nprint(numbers[0][0])\nprint(numbers[1][1])\nprint(numbers[2][0])",
      "language": "python"
    },
    {
      "kicker": "Indexing",
      "title": "Understanding Two Indexes",
      "body": "numbers[1][0] means select the second inner list and then its first element.",
      "bullets": [
        "numbers[1] → [3, 4]",
        "numbers[1][0] → 3",
        "numbers[1][1] → 4"
      ]
    },
    {
      "kicker": "Updating",
      "title": "Changing Nested List Values",
      "body": "We can update an element inside an inner list.",
      "code": "numbers = [[1, 2], [3, 4], [5, 6]]\nnumbers[1][0] = 99\nprint(numbers)",
      "language": "python"
    },
    {
      "kicker": "Practical Example",
      "title": "Student Marks",
      "body": "We can store marks for multiple students using nested lists.",
      "code": "marks = [\n    [80, 90, 85],\n    [70, 75, 80],\n    [95, 90, 100]\n]\nprint(marks)",
      "language": "python"
    },
    {
      "kicker": "Accessing",
      "title": "Accessing Student Marks",
      "body": "Each inner list represents one student's marks.",
      "code": "marks = [[80, 90, 85], [70, 75, 80], [95, 90, 100]]\nprint(marks[0][1])\nprint(marks[1][2])\nprint(marks[2][0])",
      "language": "python"
    },
    {
      "kicker": "Nested Dictionaries",
      "title": "A Dictionary Inside a Dictionary",
      "body": "A dictionary can contain other dictionaries as values.",
      "code": "students = {\n    \"student1\": {\"name\": \"Ahmad\", \"age\": 20},\n    \"student2\": {\"name\": \"Mina\", \"age\": 22}\n}\nprint(students)",
      "language": "python"
    },
    {
      "kicker": "Accessing",
      "title": "Accessing Nested Dictionary Values",
      "body": "Use multiple keys to reach the required value.",
      "code": "students = {\n    \"student1\": {\"name\": \"Ahmad\", \"age\": 20},\n    \"student2\": {\"name\": \"Mina\", \"age\": 22}\n}\nprint(students[\"student1\"][\"name\"])\nprint(students[\"student2\"][\"age\"])",
      "language": "python"
    },
    {
      "kicker": "Updating",
      "title": "Updating Nested Dictionaries",
      "body": "We can update a value inside an inner dictionary.",
      "code": "student = {\n    \"name\": \"Ahmad\",\n    \"details\": {\"age\": 20, \"city\": \"Kabul\"}\n}\nstudent[\"details\"][\"city\"] = \"Herat\"\nprint(student)",
      "language": "python"
    },
    {
      "kicker": "Structure",
      "title": "A Dictionary Containing Lists",
      "body": "Dictionary values can also be lists.",
      "code": "student = {\n    \"name\": \"Ahmad\",\n    \"subjects\": [\"Python\", \"HTML\", \"CSS\"]\n}\nprint(student)",
      "language": "python"
    },
    {
      "kicker": "Accessing",
      "title": "Accessing Values Inside a Dictionary List",
      "body": "First access the dictionary key, then use a list index.",
      "code": "student = {\n    \"name\": \"Ahmad\",\n    \"subjects\": [\"Python\", \"HTML\", \"CSS\"]\n}\nprint(student[\"subjects\"][0])\nprint(student[\"subjects\"][2])",
      "language": "python"
    },
    {
      "kicker": "Structure",
      "title": "A List of Dictionaries",
      "body": "This is a common structure for storing multiple records.",
      "code": "students = [\n    {\"name\": \"Ahmad\", \"age\": 20},\n    {\"name\": \"Mina\", \"age\": 22},\n    {\"name\": \"Ali\", \"age\": 19}\n]\nprint(students)",
      "language": "python"
    },
    {
      "kicker": "Accessing",
      "title": "Accessing Records in a List of Dictionaries",
      "body": "First use the list index, then the dictionary key.",
      "code": "students = [\n    {\"name\": \"Ahmad\", \"age\": 20},\n    {\"name\": \"Mina\", \"age\": 22}\n]\nprint(students[0][\"name\"])\nprint(students[1][\"age\"])",
      "language": "python"
    },
    {
      "kicker": "Updating",
      "title": "Updating a Record",
      "body": "We can change a value inside one dictionary in the list.",
      "code": "students = [\n    {\"name\": \"Ahmad\", \"age\": 20},\n    {\"name\": \"Mina\", \"age\": 22}\n]\nstudents[0][\"age\"] = 21\nprint(students[0])",
      "language": "python"
    },
    {
      "kicker": "Adding",
      "title": "Adding a New Record",
      "body": "Use append() to add a new dictionary to the list.",
      "code": "students = [\n    {\"name\": \"Ahmad\", \"age\": 20},\n    {\"name\": \"Mina\", \"age\": 22}\n]\nstudents.append({\"name\": \"Ali\", \"age\": 19})\nprint(students)",
      "language": "python"
    },
    {
      "kicker": "Loops",
      "title": "Looping Through Nested Lists",
      "body": "Nested loops allow us to visit the elements of inner lists.",
      "code": "numbers = [[1, 2], [3, 4], [5, 6]]\nfor row in numbers:\n    for number in row:\n        print(number)",
      "language": "python"
    },
    {
      "kicker": "Loops",
      "title": "Looping Through a List of Dictionaries",
      "body": "We can use a loop to read each student record.",
      "code": "students = [\n    {\"name\": \"Ahmad\", \"age\": 20},\n    {\"name\": \"Mina\", \"age\": 22},\n    {\"name\": \"Ali\", \"age\": 19}\n]\nfor student in students:\n    print(student[\"name\"], student[\"age\"])",
      "language": "python"
    },
    {
      "kicker": "Real World",
      "title": "Where Are Nested Structures Used?",
      "body": "Nested structures are common in real applications.",
      "bullets": [
        "Student management systems",
        "Inventory and products",
        "Employee records",
        "JSON and API data",
        "Web applications"
      ]
    },
    {
      "kicker": "Common Mistakes",
      "title": "Incorrect Indexes and Keys",
      "body": "Make sure every index and key matches the correct level of the structure.",
      "bullets": [
        "Using an incorrect index",
        "Using a missing dictionary key",
        "Confusing outer and inner indexes",
        "Forgetting the correct data type"
      ]
    },
    {
      "kicker": "Practice",
      "title": "Student Records Exercise",
      "body": "Create a list containing three dictionaries. Each dictionary should represent a student.",
      "bullets": [
        "Store name, age, and marks",
        "Print the second student's name",
        "Change the first student's marks",
        "Add a fourth student",
        "Loop through all students and print their names"
      ]
    },
    {
      "kicker": "Summary",
      "title": "What Have We Learned?",
      "body": "Nested structures help organize multiple levels of information.",
      "bullets": [
        "List inside List",
        "Dictionary inside Dictionary",
        "List inside Dictionary",
        "List of Dictionaries",
        "Nested indexing and keys",
        "Nested loops"
      ]
    }
  ],
  "example": {
    "explanation": "This example stores multiple students in a list of dictionaries. Each student has a name, age, and a list of marks. We access, update, and loop through the nested data.",
    "code": "students = [\n    {\"name\": \"Ahmad\", \"age\": 20, \"marks\": [80, 90, 85]},\n    {\"name\": \"Mina\", \"age\": 22, \"marks\": [95, 88, 92]},\n    {\"name\": \"Ali\", \"age\": 19, \"marks\": [70, 75, 80]}\n]\n\nprint(students[0][\"name\"])\nprint(students[1][\"marks\"][1])\n\nstudents[0][\"marks\"][0] = 100\nstudents.append({\"name\": \"Sara\", \"age\": 21, \"marks\": [90, 91, 93]})\n\nfor student in students:\n    print(student[\"name\"], student[\"marks\"])",
    "language": "python",
    "output": "Ahmad\n88\nAhmad [100, 90, 85]\nMina [95, 88, 92]\nAli [70, 75, 80]\nSara [90, 91, 93]"
  },
  "commonMistakes": [
    "Confusing the outer index with the inner index.",
    "Using a key that does not exist in a dictionary.",
    "Trying to access a value using the wrong data type.",
    "Forgetting that a list of dictionaries needs a list index before accessing dictionary keys.",
    "Making nested structures unnecessarily complicated."
  ],
  "exercise": {
    "question": "Create a list of three dictionaries representing employees. Each employee should have a name, department, and salary. Print the second employee's department, update the first employee's salary, add a fourth employee, and loop through all employees to print their names and salaries.",
    "hint": "Use a list containing dictionaries. Access records using list indexes and dictionary keys.",
  },
  "solution": {
    "explanation": "The list stores multiple employee dictionaries. Each dictionary contains the employee's name, department, and salary. We access a record using its list index and then its dictionary keys.",
    "code": "employees = [\n    {\"name\": \"Ahmad\", \"department\": \"IT\", \"salary\": 30000},\n    {\"name\": \"Mina\", \"department\": \"HR\", \"salary\": 25000},\n    {\"name\": \"Ali\", \"department\": \"Finance\", \"salary\": 28000}\n]\n\nprint(employees[1][\"department\"])\nemployees[0][\"salary\"] = 35000\nemployees.append({\"name\": \"Sara\", \"department\": \"IT\", \"salary\": 32000})\n\nfor employee in employees:\n    print(employee[\"name\"], employee[\"salary\"])",
    "output": "HR\nAhmad 35000\nMina 25000\nAli 28000\nSara 32000"
  },
  "quiz": [
    {
      "question": "What is a Nested Data Structure?",
      "options": [
        "A data structure that contains another data structure",
        "A variable that contains only an integer",
        "A Python keyword",
        "A function"
      ],
      "answer": 0,
      "explanation": "Nested data structures contain other structures such as lists or dictionaries."
    },
    {
      "question": "How do we access the value 20?",
      "options": [
        "numbers[2]",
        "numbers[1][0]",
        "numbers[0][1]",
        "numbers[1]"
      ],
      "answer": 1,
      "explanation": "The second inner list is selected using index 1, and its first element uses index 0."
    },
    {
      "question": "What does students[0][\"name\"] access?",
      "options": [
        "The first student's name",
        "The second student's name",
        "All student names",
        "The list length"
      ],
      "answer": 0,
      "explanation": "Index 0 selects the first dictionary, and the name key selects its name."
    },
    {
      "question": "Which structure is commonly used to store multiple records?",
      "options": [
        "A list of dictionaries",
        "A single integer",
        "A single Boolean",
        "A comment"
      ],
      "answer": 0,
      "explanation": "A list of dictionaries is a practical way to store multiple structured records."
    },
    {
      "question": "What does students[0][\"marks\"][1] access?",
      "options": [
        "The first student's second mark",
        "The second student's first mark",
        "The first student's name",
        "The whole students list"
      ],
      "answer": 0,
      "explanation": "The first index selects the student, the key selects marks, and the final index selects a mark."
    }
  ],
  "takeaways": [
    "A data structure can contain another data structure.",
    "Nested lists use multiple indexes.",
    "Nested dictionaries use multiple keys.",
    "Lists of dictionaries are useful for storing multiple records.",
    "Nested data structures are widely used in real-world applications."
  ],
  "teacherNotes": "Start with a simple list inside a list. Draw the outer list and inner lists on the screen. Explain each index one step at a time. Then move to dictionaries and finally a list of dictionaries. Emphasize that the first index or key selects the outer element, and the next index or key accesses the inner value. Use student records as the main practical example.",
  "teachingTime": "60-90 minutes"
};