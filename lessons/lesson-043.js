window.lessonData = window.lessonData || {};
window.lessonData[43] = {
  id: 43,
  title: "List Methods",
  category: "Python Data Structures",
  contentStatus: "authored",
  introduction: "This lesson teaches students how to use Python list methods to add, remove, search, copy, and organize list items.",
  definition: "List methods are built-in operations that allow us to modify, search, and manage the items inside a Python list.",
  whyItMatters: "List methods help programmers manage dynamic data such as student records, shopping items, product lists, and user information.",
  objectives: [
    "Understand what list methods are and how they work.",
    "Use append(), insert(), and extend() to add items.",
    "Use remove(), pop(), and clear() to remove items.",
    "Use index() and count() to search a list.",
    "Use sort(), reverse(), and copy() to organize and copy lists.",
    "Understand the difference between methods that modify lists and methods that return values."
  ],
  slides: [
    {
      kicker: "Python Data Structures",
      title: "What Are List Methods?",
      body: "List methods are built-in operations that help us work with lists.",
      bullets: [
        "Add new items.",
        "Remove items.",
        "Search for items.",
        "Organize and copy lists."
      ]
    },
    {
      kicker: "Understanding Methods",
      title: "How Do List Methods Work?",
      body: "We call a method using the list name, a dot, the method name, and parentheses.",
      bullets: [
        "list_name.method_name()",
        "Some methods accept arguments.",
        "Some methods return a result.",
        "Some methods directly change the list."
      ],
      code: "fruits = [\"Apple\", \"Banana\"]\nfruits.append(\"Orange\")\nprint(fruits)",
      output: "['Apple', 'Banana', 'Orange']"
    },
    {
      kicker: "Adding Items",
      title: "append() Method",
      body: "append() adds one item at the end of a list.",
      bullets: [
        "It adds one item.",
        "The item is added at the end.",
        "It changes the original list."
      ],
      code: "fruits = [\"Apple\", \"Banana\"]\nfruits.append(\"Orange\")\nprint(fruits)",
      output: "['Apple', 'Banana', 'Orange']"
    },
    {
      kicker: "Practice append()",
      title: "Add a New Student",
      body: "We can use append() to add a new student name to our list.",
      code: "students = [\"Ahmad\", \"Ali\"]\nstudents.append(\"Mahmood\")\nprint(students)",
      output: "['Ahmad', 'Ali', 'Mahmood']"
    },
    {
      kicker: "Adding Items",
      title: "insert() Method",
      body: "insert() adds an item at a specific position in a list.",
      bullets: [
        "It takes two arguments.",
        "The first argument is the index.",
        "The second argument is the item."
      ],
      code: "fruits = [\"Apple\", \"Banana\"]\nfruits.insert(1, \"Orange\")\nprint(fruits)",
      output: "['Apple', 'Orange', 'Banana']"
    },
    {
      kicker: "Understanding insert()",
      title: "Insert at a Specific Index",
      body: "Python inserts the new item at the selected index and moves the other items.",
      bullets: [
        "Index 0 means the first position.",
        "Index 1 means the second position.",
        "The existing items are not replaced."
      ],
      code: "numbers = [10, 20, 30]\nnumbers.insert(0, 5)\nprint(numbers)",
      output: "[5, 10, 20, 30]"
    },
    {
      kicker: "Adding Items",
      title: "extend() Method",
      body: "extend() adds multiple items from another iterable to the end of a list.",
      bullets: [
        "It can add items from another list.",
        "It adds items individually.",
        "It changes the original list."
      ],
      code: "numbers = [1, 2, 3]\nmore_numbers = [4, 5]\nnumbers.extend(more_numbers)\nprint(numbers)",
      output: "[1, 2, 3, 4, 5]"
    },
    {
      kicker: "Compare Methods",
      title: "append() vs extend()",
      body: "append() adds one object, while extend() adds items from an iterable one by one.",
      code: "a = [1, 2]\na.append([3, 4])\nprint(a)\n\nb = [1, 2]\nb.extend([3, 4])\nprint(b)",
      output: "[1, 2, [3, 4]]\n[1, 2, 3, 4]"
    },
    {
      kicker: "Removing Items",
      title: "remove() Method",
      body: "remove() deletes the first matching item from a list.",
      bullets: [
        "It removes an item by its value.",
        "It removes only the first matching item.",
        "If the value does not exist, Python raises ValueError."
      ],
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\nfruits.remove(\"Banana\")\nprint(fruits)",
      output: "['Apple', 'Orange']"
    },
    {
      kicker: "Removing Items",
      title: "pop() Method",
      body: "pop() removes an item from a list and returns the removed item.",
      bullets: [
        "Without an index, it removes the last item.",
        "With an index, it removes that item.",
        "It returns the removed value."
      ],
      code: "numbers = [10, 20, 30]\nremoved = numbers.pop()\nprint(removed)\nprint(numbers)",
      output: "30\n[10, 20]"
    },
    {
      kicker: "Using pop()",
      title: "Remove by Index",
      body: "We can provide an index to remove a specific item.",
      code: "names = [\"Ahmad\", \"Ali\", \"Mahmood\"]\nremoved = names.pop(1)\nprint(removed)\nprint(names)",
      output: "Ali\n['Ahmad', 'Mahmood']"
    },
    {
      kicker: "Removing Items",
      title: "clear() Method",
      body: "clear() removes all items from a list but keeps the list itself.",
      code: "numbers = [1, 2, 3, 4]\nnumbers.clear()\nprint(numbers)",
      output: "[]"
    },
    {
      kicker: "Searching",
      title: "index() Method",
      body: "index() returns the index of the first matching item.",
      bullets: [
        "It searches for a value.",
        "It returns the first matching index.",
        "If the value is not found, it raises ValueError."
      ],
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\nposition = fruits.index(\"Banana\")\nprint(position)",
      output: "1"
    },
    {
      kicker: "Searching",
      title: "count() Method",
      body: "count() returns how many times a value appears in a list.",
      code: "numbers = [1, 2, 2, 3, 2, 4]\nresult = numbers.count(2)\nprint(result)",
      output: "3"
    },
    {
      kicker: "Organizing Items",
      title: "sort() Method",
      body: "sort() organizes list items in ascending order by default.",
      bullets: [
        "Numbers are sorted from smallest to largest.",
        "Strings are sorted alphabetically according to their ordering.",
        "It changes the original list."
      ],
      code: "numbers = [40, 10, 30, 20]\nnumbers.sort()\nprint(numbers)",
      output: "[10, 20, 30, 40]"
    },
    {
      kicker: "Organizing Items",
      title: "Sort in Descending Order",
      body: "We can use reverse=True to sort items from largest to smallest.",
      code: "numbers = [40, 10, 30, 20]\nnumbers.sort(reverse=True)\nprint(numbers)",
      output: "[40, 30, 20, 10]"
    },
    {
      kicker: "Organizing Items",
      title: "reverse() Method",
      body: "reverse() reverses the current order of items in the list.",
      bullets: [
        "It does not sort the items.",
        "It reverses the existing order.",
        "It changes the original list."
      ],
      code: "numbers = [10, 20, 30, 40]\nnumbers.reverse()\nprint(numbers)",
      output: "[40, 30, 20, 10]"
    },
    {
      kicker: "Compare Methods",
      title: "sort() vs reverse()",
      body: "sort() arranges items according to their values. reverse() simply reverses their current positions.",
      code: "a = [30, 10, 20]\na.sort()\nprint(a)\n\nb = [30, 10, 20]\nb.reverse()\nprint(b)",
      output: "[10, 20, 30]\n[20, 10, 30]"
    },
    {
      kicker: "Copying Lists",
      title: "copy() Method",
      body: "copy() creates a shallow copy of the list.",
      bullets: [
        "It creates a new list.",
        "The new list is separate from the original for top-level items.",
        "Changing one list does not change the other list's top-level items."
      ],
      code: "original = [10, 20, 30]\nnew_list = original.copy()\nnew_list.append(40)\nprint(original)\nprint(new_list)",
      output: "[10, 20, 30]\n[10, 20, 30, 40]"
    },
    {
      kicker: "Important Concept",
      title: "copy() vs Assignment",
      body: "Assigning one list to another variable does not create a separate list.",
      code: "a = [1, 2, 3]\nb = a\nb.append(4)\nprint(a)\nprint(b)",
      output: "[1, 2, 3, 4]\n[1, 2, 3, 4]"
    },
    {
      kicker: "Important Concept",
      title: "Methods That Return None",
      body: "Many list methods change the list directly and return None.",
      bullets: [
        "append()",
        "insert()",
        "extend()",
        "sort()",
        "reverse()"
      ],
      code: "numbers = [3, 1, 2]\nresult = numbers.sort()\nprint(numbers)\nprint(result)",
      output: "[1, 2, 3]\nNone"
    },
    {
      kicker: "Important Concept",
      title: "Why Is This Wrong?",
      body: "Do not assign the result of a list method that modifies the list in place to the list variable.",
      code: "numbers = [1, 2, 3]\nnumbers = numbers.append(4)\nprint(numbers)",
      output: "None",
      bullets: [
        "append() changes the list.",
        "append() returns None.",
        "The assignment replaces numbers with None."
      ]
    },
    {
      kicker: "Practical Example",
      title: "Shopping List",
      body: "We can use list methods to manage items in a shopping list.",
      code: "shopping = [\"Rice\", \"Oil\", \"Bread\"]\nshopping.append(\"Milk\")\nshopping.remove(\"Oil\")\nshopping.sort()\nprint(shopping)",
      output: "['Bread', 'Milk', 'Rice']"
    },
    {
      kicker: "Practical Example",
      title: "Student Marks",
      body: "List methods can help us manage student marks.",
      code: "marks = [70, 85, 60, 90]\nmarks.append(95)\nmarks.sort()\nprint(marks)\nprint(\"Highest:\", marks[-1])",
      output: "[60, 70, 85, 90, 95]\nHighest: 95"
    },
    {
      kicker: "Common Mistakes",
      title: "Mistakes to Avoid",
      body: "Understand how each method behaves before using it.",
      bullets: [
        "Using append() when you need extend().",
        "Using remove() with an index instead of a value.",
        "Using pop() without understanding which item it removes.",
        "Expecting sort() to return a sorted list.",
        "Expecting reverse() to sort the values.",
        "Assigning the result of append() to the original variable."
      ]
    },
    {
      kicker: "Practice",
      title: "Manage a Product List",
      body: "Create a product list and use different methods to manage it.",
      bullets: [
        "Create a list with 4 product names.",
        "Add one product using append().",
        "Insert one product at index 1.",
        "Remove a product using remove().",
        "Use pop() to remove an item.",
        "Sort the list.",
        "Print the final list."
      ]
    },
    {
      kicker: "Review",
      title: "List Methods Summary",
      body: "List methods help us manage lists efficiently.",
      bullets: [
        "append() — add one item at the end.",
        "insert() — add an item at a position.",
        "extend() — add multiple items.",
        "remove() — remove by value.",
        "pop() — remove and return by index.",
        "clear() — remove all items.",
        "index() — find the first index.",
        "count() — count occurrences.",
        "sort() — organize values.",
        "reverse() — reverse current order.",
        "copy() — create a shallow copy."
      ]
    }
  ],
  example: {
    explanation: "This example demonstrates adding, removing, sorting, searching, and counting items in a product list.",
    code: "products = [\"Laptop\", \"Mouse\", \"Keyboard\"]\n\nproducts.append(\"Monitor\")\nproducts.insert(1, \"USB\")\nproducts.remove(\"Mouse\")\nproducts.sort()\n\nprint(\"Products:\", products)\nprint(\"Count:\", len(products))\nprint(\"Keyboard index:\", products.index(\"Keyboard\"))",
    language: "python",
    output: "Products: ['Keyboard', 'Laptop', 'Monitor', 'USB']\nCount: 4\nKeyboard index: 0"
  },
  commonMistakes: [
    "Using append() to add multiple items when extend() is more appropriate.",
    "Confusing remove(value) with pop(index).",
    "Expecting pop() to remove the first item when no index is provided.",
    "Expecting reverse() to sort the list.",
    "Expecting sort() to return a new sorted list.",
    "Assigning the return value of append(), sort(), or reverse() to a variable and expecting a list.",
    "Trying to remove a value that does not exist.",
    "Trying to use index() on a value that is not present.",
    "Assuming copy() is a deep copy when the list contains nested objects."
  ],
  exercise: {
    question: "Create a list of five student names. Add two more students, insert a student at index 1, remove one student by value, remove another using pop(), sort the list alphabetically, and print the final list. Also print how many times a chosen student name appears.",
    hint: "Use append(), insert(), remove(), pop(), sort(), and count(). Remember that sort() changes the original list and returns None."
  },
  solution: {
    explanation: "The solution uses different list methods to add, insert, remove, sort, and count student names.",
    code: "students = [\"Ahmad\", \"Ali\", \"Mahmood\", \"Karim\", \"Farid\"]\n\nstudents.append(\"Zia\")\nstudents.append(\"Hamid\")\nstudents.insert(1, \"Nasir\")\nstudents.remove(\"Karim\")\nremoved_student = students.pop()\nstudents.sort()\n\nprint(\"Removed:\", removed_student)\nprint(\"Students:\", students)\nprint(\"Ali count:\", students.count(\"Ali\"))",
    output: "Removed: Hamid\nStudents: ['Ahmad', 'Ali', 'Mahmood', 'Nasir', 'Zia']\nAli count: 1"
  },
  quiz: [
    {
      question: "Which method adds one item at the end of a list?",
      options: ["insert()", "append()", "remove()", "sort()"],
      answer: 1,
      explanation: "append() adds one item at the end of the list."
    },
    {
      question: "What is the difference between append() and extend()?",
      options: [
        "They are always identical.",
        "append() adds one object, while extend() adds items from an iterable.",
        "extend() removes items.",
        "append() sorts items."
      ],
      answer: 1,
      explanation: "append() adds one object; extend() adds the elements from an iterable."
    },
    {
      question: "What does pop() return?",
      options: [
        "The entire list",
        "The list length",
        "The removed item",
        "None in every case"
      ],
      answer: 2,
      explanation: "pop() removes and returns the item at the selected index."
    },
    {
      question: "What does sort() do?",
      options: [
        "Deletes the list",
        "Sorts the list in place",
        "Reverses the list without sorting",
        "Creates a tuple"
      ],
      answer: 1,
      explanation: "sort() arranges list items in place."
    },
    {
      question: "What does reverse() do?",
      options: [
        "Sorts the list alphabetically",
        "Reverses the current order",
        "Removes the first item",
        "Copies the list"
      ],
      answer: 1,
      explanation: "reverse() reverses the current order without sorting."
    },
    {
      question: "What will this code print?",
      options: ["[1, 2, 3, 4]", "None", "4", "[1, 2, 3]"],
      answer: 1,
      explanation: "append() returns None, so the assignment makes numbers equal to None."
    }
  ],
  takeaways: [
    "List methods help us add, remove, search, organize, and copy items.",
    "append() adds one item, insert() adds at a position, and extend() adds items from an iterable.",
    "remove() removes by value while pop() removes and returns an item by index.",
    "sort() organizes values while reverse() reverses the current order.",
    "Many list methods change the list and return None.",
    "copy() creates a shallow copy of the list."
  ],
  teacherNotes: "Teach this lesson through live coding. Start with a single list and demonstrate one method at a time. After every method, print the list to observe the result. Make sure students understand append() versus extend(), remove() versus pop(), sort() versus reverse(), and the fact that many list methods return None. This lesson may require two sessions depending on students' pace.",
  teachingTime: "90-120 minutes"
};