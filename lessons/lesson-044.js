window.lessonData = window.lessonData || {};
window.lessonData[44] = {
  id: 44,
  title: "Tuples",
  category: "Python Data Structures",
  contentStatus: "authored",
  introduction: "This lesson introduces Python tuples, how to create them, access their items, use tuple methods, unpack values, and understand why tuples cannot be modified.",
  definition: "A tuple is an ordered collection of items that can store multiple values. Tuples are immutable, which means their items cannot be directly changed after creation.",
  whyItMatters: "Tuples are useful for storing fixed data that should not be changed, such as coordinates, days of the week, fixed settings, and related values.",
  objectives: [
    "Understand what a tuple is and how it differs from a list.",
    "Create tuples using different syntax.",
    "Access tuple items using indexes and slicing.",
    "Use len(), count(), and index() with tuples.",
    "Loop through tuple items.",
    "Understand tuple immutability.",
    "Unpack tuple values into variables.",
    "Convert between lists and tuples."
  ],
  slides: [
    {
      kicker: "Python Data Structures",
      title: "What Is a Tuple?",
      body: "A tuple is a collection of items stored in a single variable.",
      bullets: [
        "A tuple can store multiple values.",
        "Tuples are ordered.",
        "Tuples allow duplicate items.",
        "Tuples are immutable."
      ]
    },
    {
      kicker: "Understanding Tuples",
      title: "Why Do We Use Tuples?",
      body: "Tuples are useful when we want to store a group of values that should not be directly changed.",
      bullets: [
        "Coordinates: (latitude, longitude)",
        "Days of the week.",
        "Fixed configuration values.",
        "Student information that should remain unchanged in a particular context."
      ]
    },
    {
      kicker: "Syntax",
      title: "Creating a Tuple",
      body: "We usually create a tuple by placing items inside parentheses and separating them with commas.",
      code: "fruits = (\"Apple\", \"Banana\", \"Orange\")\nprint(fruits)",
      output: "('Apple', 'Banana', 'Orange')"
    },
    {
      kicker: "Syntax",
      title: "Tuple Without Parentheses",
      body: "Python can also create a tuple by using comma-separated values without parentheses.",
      code: "numbers = 10, 20, 30\nprint(numbers)\nprint(type(numbers))",
      output: "(10, 20, 30)\n<class 'tuple'>"
    },
    {
      kicker: "Important",
      title: "Creating a Single-Item Tuple",
      body: "A comma is required to create a tuple containing only one item.",
      bullets: [
        "(5,) is a tuple.",
        "(5) is just an integer.",
        "The comma creates the tuple."
      ],
      code: "a = (5,)\nb = (5)\n\nprint(type(a))\nprint(type(b))",
      output: "<class 'tuple'>\n<class 'int'>"
    },
    {
      kicker: "Data Types",
      title: "Tuples Can Store Different Types",
      body: "A tuple can contain strings, numbers, Boolean values, and even other collections.",
      code: "student = (\"Ahmad\", 20, 85.5, True)\nprint(student)",
      output: "('Ahmad', 20, 85.5, True)"
    },
    {
      kicker: "Tuple Properties",
      title: "Tuples Allow Duplicate Items",
      body: "A tuple can contain the same value more than once.",
      code: "numbers = (10, 20, 10, 30, 10)\nprint(numbers)",
      output: "(10, 20, 10, 30, 10)"
    },
    {
      kicker: "Tuple Properties",
      title: "Tuples Are Ordered",
      body: "Tuples maintain the order in which their items are stored.",
      bullets: [
        "Every item has a position.",
        "Indexes start from zero.",
        "Items can be accessed by index."
      ],
      code: "fruits = (\"Apple\", \"Banana\", \"Orange\")\nprint(fruits[0])\nprint(fruits[1])\nprint(fruits[2])",
      output: "Apple\nBanana\nOrange"
    },
    {
      kicker: "Accessing Items",
      title: "Tuple Indexing",
      body: "We use indexes to access individual items in a tuple.",
      code: "colors = (\"Red\", \"Green\", \"Blue\")\nprint(colors[0])\nprint(colors[1])",
      output: "Red\nGreen"
    },
    {
      kicker: "Accessing Items",
      title: "Negative Indexes",
      body: "Negative indexes allow us to access items from the end of a tuple.",
      code: "colors = (\"Red\", \"Green\", \"Blue\")\nprint(colors[-1])\nprint(colors[-2])",
      output: "Blue\nGreen"
    },
    {
      kicker: "Accessing Items",
      title: "Tuple Slicing",
      body: "Slicing allows us to access a range of items from a tuple.",
      bullets: [
        "The starting index is included.",
        "The ending index is excluded.",
        "Slicing creates a new tuple."
      ],
      code: "numbers = (10, 20, 30, 40, 50)\nprint(numbers[1:4])",
      output: "(20, 30, 40)"
    },
    {
      kicker: "Accessing Items",
      title: "More Tuple Slicing",
      body: "We can use different slicing patterns to access tuple items.",
      code: "numbers = (10, 20, 30, 40, 50)\nprint(numbers[:3])\nprint(numbers[2:])\nprint(numbers[::2])",
      output: "(10, 20, 30)\n(30, 40, 50)\n(10, 30, 50)"
    },
    {
      kicker: "Important Concept",
      title: "Tuples Are Immutable",
      body: "After a tuple is created, its items cannot be directly replaced, added, or removed.",
      bullets: [
        "You cannot assign a new value to an existing tuple index.",
        "You cannot append an item to a tuple.",
        "You cannot remove an item directly from a tuple."
      ],
      code: "numbers = (10, 20, 30)\nnumbers[1] = 50",
      output: "TypeError: 'tuple' object does not support item assignment"
    },
    {
      kicker: "Comparing Collections",
      title: "List vs Tuple",
      body: "Lists and tuples both store multiple items, but they have different behaviors.",
      bullets: [
        "List uses square brackets: [ ].",
        "Tuple commonly uses parentheses: ( ).",
        "Lists are mutable.",
        "Tuples are immutable.",
        "Both are ordered and allow duplicates."
      ],
      code: "my_list = [10, 20, 30]\nmy_tuple = (10, 20, 30)\n\nmy_list[0] = 100\nprint(my_list)\nprint(my_tuple)",
      output: "[100, 20, 30]\n(10, 20, 30)"
    },
    {
      kicker: "Tuple Methods",
      title: "Using count()",
      body: "count() returns the number of times a value appears in a tuple.",
      code: "numbers = (10, 20, 10, 30, 10)\nprint(numbers.count(10))",
      output: "3"
    },
    {
      kicker: "Tuple Methods",
      title: "Using index()",
      body: "index() returns the index of the first occurrence of a value.",
      code: "fruits = (\"Apple\", \"Banana\", \"Orange\")\nprint(fruits.index(\"Banana\"))",
      output: "1"
    },
    {
      kicker: "Built-in Functions",
      title: "Using len()",
      body: "len() returns the number of items in a tuple.",
      code: "numbers = (10, 20, 30, 40)\nprint(len(numbers))",
      output: "4"
    },
    {
      kicker: "Looping",
      title: "Using a for Loop",
      body: "We can use a for loop to read every item in a tuple.",
      code: "fruits = (\"Apple\", \"Banana\", \"Orange\")\n\nfor fruit in fruits:\n    print(fruit)",
      output: "Apple\nBanana\nOrange"
    },
    {
      kicker: "Looping",
      title: "Using a while Loop",
      body: "We can also use indexes and a while loop to access tuple items.",
      code: "numbers = (10, 20, 30)\ni = 0\n\nwhile i < len(numbers):\n    print(numbers[i])\n    i += 1",
      output: "10\n20\n30"
    },
    {
      kicker: "Tuple Operations",
      title: "Checking Membership",
      body: "We can use in and not in to check whether an item exists in a tuple.",
      code: "fruits = (\"Apple\", \"Banana\", \"Orange\")\nprint(\"Banana\" in fruits)\nprint(\"Mango\" not in fruits)",
      output: "True\nTrue"
    },
    {
      kicker: "Tuple Operations",
      title: "Concatenating Tuples",
      body: "The + operator can combine two tuples into a new tuple.",
      code: "a = (10, 20)\nb = (30, 40)\nc = a + b\nprint(c)",
      output: "(10, 20, 30, 40)"
    },
    {
      kicker: "Tuple Operations",
      title: "Repeating Tuples",
      body: "The * operator can repeat the items in a tuple.",
      code: "numbers = (1, 2)\nresult = numbers * 3\nprint(result)",
      output: "(1, 2, 1, 2, 1, 2)"
    },
    {
      kicker: "Tuple Operations",
      title: "Nested Tuples",
      body: "A tuple can contain other tuples.",
      code: "students = ((\"Ahmad\", 85), (\"Ali\", 90))\nprint(students[0])\nprint(students[0][0])\nprint(students[1][1])",
      output: "('Ahmad', 85)\nAhmad\n90"
    },
    {
      kicker: "Tuple Operations",
      title: "Tuple Unpacking",
      body: "Tuple unpacking allows us to assign tuple items to separate variables.",
      code: "student = (\"Ahmad\", 20, 85)\nname, age, mark = student\n\nprint(name)\nprint(age)\nprint(mark)",
      output: "Ahmad\n20\n85"
    },
    {
      kicker: "Tuple Operations",
      title: "Unpacking Rules",
      body: "The number of variables must match the number of items when using ordinary unpacking.",
      code: "numbers = (10, 20, 30)\na, b, c = numbers\nprint(a, b, c)",
      output: "10 20 30",
      bullets: [
        "Three items need three variables in this example.",
        "Too few or too many variables cause an unpacking error.",
        "Extended unpacking using * is another feature."
      ]
    },
    {
      kicker: "Conversions",
      title: "Convert a Tuple to a List",
      body: "We can convert a tuple into a list using list().",
      code: "numbers = (10, 20, 30)\nmy_list = list(numbers)\nmy_list.append(40)\nprint(my_list)",
      output: "[10, 20, 30, 40]"
    },
    {
      kicker: "Conversions",
      title: "Convert a List to a Tuple",
      body: "We can convert a list into a tuple using tuple().",
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\nmy_tuple = tuple(fruits)\nprint(my_tuple)",
      output: "('Apple', 'Banana', 'Orange')"
    },
    {
      kicker: "Practical Example",
      title: "Student Information",
      body: "A tuple can store related student information in a single collection.",
      code: "student = (\"Ahmad\", 18, \"Grade 12\")\n\nprint(\"Name:\", student[0])\nprint(\"Age:\", student[1])\nprint(\"Class:\", student[2])",
      output: "Name: Ahmad\nAge: 18\nClass: Grade 12"
    },
    {
      kicker: "Practical Example",
      title: "Coordinates",
      body: "A tuple can store coordinates such as an X and Y position.",
      code: "point = (5, 10)\nx, y = point\n\nprint(\"X:\", x)\nprint(\"Y:\", y)",
      output: "X: 5\nY: 10"
    },
    {
      kicker: "Common Mistakes",
      title: "Tuple Mistakes",
      body: "Understand these common errors before working with tuples.",
      bullets: [
        "Trying to modify a tuple item.",
        "Creating a one-item tuple without a comma.",
        "Using append() or remove() on a tuple.",
        "Confusing tuple indexing with tuple values.",
        "Unpacking the wrong number of items."
      ]
    },
    {
      kicker: "Practice",
      title: "Create a Student Tuple",
      body: "Create a tuple containing a student's name, age, and three marks.",
      bullets: [
        "Create the tuple.",
        "Print the student's name.",
        "Print the student's age.",
        "Print the third mark.",
        "Use len() to count the items.",
        "Use count() to count a repeated mark.",
        "Unpack the tuple into variables."
      ]
    },
    {
      kicker: "Review",
      title: "Tuples Summary",
      body: "Tuples are useful for storing ordered values that should not be directly changed.",
      bullets: [
        "Tuples are ordered.",
        "Tuples allow duplicate items.",
        "Tuples are immutable.",
        "Use indexes and slicing.",
        "Use count() and index().",
        "Loop through tuples.",
        "Use unpacking.",
        "Convert tuples and lists when needed."
      ]
    }
  ],
  example: {
    explanation: "This example stores student information in a tuple, accesses items, unpacks values, and checks the number of items.",
    code: "student = (\"Ahmad\", 18, 85, 90, 85)\n\nname = student[0]\nage = student[1]\nmarks = student[2:]\n\nprint(\"Name:\", name)\nprint(\"Age:\", age)\nprint(\"Marks:\", marks)\nprint(\"Number of items:\", len(student))\nprint(\"Mark 85 appears:\", student.count(85))\n\nname, age, mark1, mark2, mark3 = student\nprint(\"Unpacked:\", name, age, mark1, mark2, mark3)",
    language: "python",
    output: "Name: Ahmad\nAge: 18\nMarks: (85, 90, 85)\nNumber of items: 5\nMark 85 appears: 2\nUnpacked: Ahmad 18 85 90 85"
  },
  commonMistakes: [
    "Trying to change a tuple item directly.",
    "Creating a single-item tuple without a trailing comma.",
    "Assuming parentheses alone always create a tuple.",
    "Calling list methods such as append(), remove(), or sort() on a tuple.",
    "Using an index that does not exist.",
    "Unpacking a tuple into the wrong number of variables.",
    "Confusing tuple count() with len().",
    "Assuming immutable means the objects inside a tuple can never change; a tuple can contain mutable objects such as lists."
  ],
  exercise: {
    question: "Create a tuple containing a student's name, age, class, and three marks. Access and print the name, age, and class using indexes. Print the marks using slicing. Calculate how many items are in the tuple using len(). Unpack all values into variables and print them. Create a list from the marks tuple and add a new mark to the list.",
    hint: "Use indexes, slicing, len(), unpacking, list(), and append(). Remember that the tuple itself cannot be directly modified."
  },
  solution: {
    explanation: "This solution creates a student tuple, accesses its values, slices the marks, unpacks the tuple, and converts the marks into a list to add a new value.",
    code: "student = (\"Ahmad\", 18, \"Grade 12\", 85, 90, 85)\n\nprint(\"Name:\", student[0])\nprint(\"Age:\", student[1])\nprint(\"Class:\", student[2])\nprint(\"Marks:\", student[3:])\nprint(\"Total items:\", len(student))\n\nname, age, student_class, mark1, mark2, mark3 = student\nprint(name, age, student_class, mark1, mark2, mark3)\n\nmarks = list(student[3:])\nmarks.append(95)\nprint(\"Updated marks:\", marks)",
    output: "Name: Ahmad\nAge: 18\nClass: Grade 12\nMarks: (85, 90, 85)\nTotal items: 6\nAhmad 18 Grade 12 85 90 85\nUpdated marks: [85, 90, 85, 95]"
  },
  quiz: [
    {
      question: "What is a tuple?",
      options: [
        "A collection that can only store strings",
        "An ordered, immutable collection",
        "A collection that cannot contain duplicates",
        "A function"
      ],
      answer: 1,
      explanation: "A tuple is an ordered collection whose items cannot be directly changed after creation."
    },
    {
      question: "Which syntax creates a single-item tuple?",
      options: ["(5)", "[5]", "(5,)", "{5}"],
      answer: 2,
      explanation: "The comma makes it a tuple: (5,)."
    },
    {
      question: "Can we change a tuple item directly?",
      options: [
        "Yes, using an index",
        "Yes, using append()",
        "No, tuples are immutable",
        "Only if the tuple contains numbers"
      ],
      answer: 2,
      explanation: "Tuple items cannot be directly reassigned."
    },
    {
      question: "Which method counts how many times a value appears?",
      options: ["len()", "index()", "count()", "append()"],
      answer: 2,
      explanation: "count() counts the occurrences of a value."
    },
    {
      question: "What does index() return?",
      options: [
        "The number of items",
        "The first index of a matching value",
        "The last item",
        "A new tuple"
      ],
      answer: 1,
      explanation: "index() returns the first index where the value is found."
    },
    {
      question: "What is tuple unpacking?",
      options: [
        "Deleting a tuple",
        "Sorting a tuple",
        "Assigning tuple items to separate variables",
        "Adding tuple items"
      ],
      answer: 2,
      explanation: "Unpacking assigns individual tuple items to variables."
    },
    {
      question: "What does tuple() do?",
      options: [
        "Converts an iterable into a tuple",
        "Deletes a tuple",
        "Sorts a tuple",
        "Changes a tuple item"
      ],
      answer: 0,
      explanation: "tuple() can create a tuple from an iterable."
    }
  ],
  takeaways: [
    "A tuple is an ordered collection of items.",
    "Tuples allow duplicates.",
    "Tuples are immutable.",
    "A single-item tuple requires a comma.",
    "Use indexing and slicing to access tuple items.",
    "Use count() and index() to work with tuple values.",
    "Tuples can be unpacked into variables.",
    "Use list() and tuple() for conversions."
  ],
  teacherNotes: "Start by revisiting Lists. Ask students what they can change inside a list. Then introduce tuples and explain the difference between mutable and immutable using a practical analogy. Demonstrate indexing, slicing, count(), index(), loops, and unpacking. Spend extra time on the single-item tuple comma and immutability. Do not introduce advanced hashability or nested mutable behavior in depth unless students ask.",
  teachingTime: "60-90 minutes"
};