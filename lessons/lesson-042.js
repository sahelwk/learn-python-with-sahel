
window.lessonData = window.lessonData || {};

window.lessonData[42] = {
  id: 42,
  title: "Lists",
  category: "Python Data Structures",
  contentStatus: "authored",

  introduction:
    "This lesson introduces Python lists. Students learn how to create lists, store multiple values, access items, update items, add and remove elements, and process lists using loops.",

  definition:
    "A list is an ordered and mutable collection of items. It allows us to store multiple values in a single variable. Lists can contain different data types and duplicate values.",

  whyItMatters:
    "Lists allow programmers to manage multiple related values efficiently. They are useful for storing student names, marks, products, prices, tasks, and other collections of data.",

  objectives: [
    "Understand what a list is and why it is useful.",
    "Create lists using square brackets.",
    "Store multiple values in one variable.",
    "Access list items using indexes.",
    "Use positive and negative indexing.",
    "Access multiple items using slicing.",
    "Update list items.",
    "Add items using append(), insert(), and extend().",
    "Remove items using remove(), pop(), and clear().",
    "Find the length of a list using len().",
    "Check items using in and not in.",
    "Loop through lists using for and while.",
    "Use count(), index(), sort(), and reverse().",
    "Apply lists to practical programming problems."
  ],

  slides: [
    {
      kicker: "01 · Introduction",
      title: "What Is a List?",
      body:
        "A list is a collection that allows us to store multiple values inside a single variable.",
      bullets: [
        "A list can store multiple items.",
        "Items are stored in an ordered sequence.",
        "Lists are created using square brackets [].",
        "Lists can be changed after they are created.",
        "Lists can contain duplicate values."
      ]
    },

    {
      kicker: "02 · Why lists?",
      title: "Why Do We Need Lists?",
      body:
        "Instead of creating a separate variable for every value, we can store related values together in one list.",
      code:
        "student1 = \"Ahmad\"\nstudent2 = \"Khalid\"\nstudent3 = \"Omar\"\n\nstudents = [\"Ahmad\", \"Khalid\", \"Omar\"]",
      language: "python",
      output:
        "The students list stores all three names together.",
      bullets: [
        "Separate variables can become difficult to manage.",
        "Lists group related data together.",
        "We can process many items using loops.",
        "We can add and remove items easily."
      ]
    },

    {
      kicker: "03 · Creating lists",
      title: "How to Create a List",
      body:
        "Use square brackets and separate items with commas.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nprint(fruits)",
      language: "python",
      output:
        "['Apple', 'Banana', 'Orange']",
      bullets: [
        "The list is assigned to a variable.",
        "Square brackets define the list.",
        "Items are separated by commas.",
        "Strings are written inside quotation marks."
      ]
    },

    {
      kicker: "04 · Different values",
      title: "Lists Can Store Different Data Types",
      body:
        "A Python list can contain strings, integers, floats, Boolean values, and even other lists.",
      code:
        "data = [\"Ahmad\", 25, 75.5, True]\n\nprint(data)",
      language: "python",
      output:
        "['Ahmad', 25, 75.5, True]",
      bullets: [
        "String: \"Ahmad\"",
        "Integer: 25",
        "Float: 75.5",
        "Boolean: True",
        "A list can contain different data types."
      ]
    },

    {
      kicker: "05 · Duplicate values",
      title: "Lists Allow Duplicate Items",
      body:
        "A list can contain the same value more than once.",
      code:
        "numbers = [10, 20, 10, 30, 20]\n\nprint(numbers)",
      language: "python",
      output:
        "[10, 20, 10, 30, 20]",
      bullets: [
        "Duplicate values are allowed.",
        "The same item can appear multiple times.",
        "Every item still has its own position."
      ]
    },

    {
      kicker: "06 · Ordered collection",
      title: "Lists Maintain Their Order",
      body:
        "A list keeps its items in an order. Each item has a position called an index.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nprint(fruits)",
      language: "python",
      output:
        "['Apple', 'Banana', 'Orange']",
      bullets: [
        "Apple is the first item.",
        "Banana is the second item.",
        "Orange is the third item.",
        "The positions are represented by indexes."
      ]
    },

    {
      kicker: "07 · Indexing",
      title: "Understanding List Indexes",
      body:
        "Python uses zero-based indexing. The first item has index 0, the second has index 1, and so on.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nprint(fruits[0])\nprint(fruits[1])\nprint(fruits[2])",
      language: "python",
      output:
        "Apple\nBanana\nOrange",
      bullets: [
        "The first index is 0.",
        "The second index is 1.",
        "The third index is 2.",
        "Indexes allow us to access specific items."
      ]
    },

    {
      kicker: "08 · Accessing items",
      title: "Access a Specific List Item",
      body:
        "We can access any item by using its index inside square brackets.",
      code:
        "students = [\"Ahmad\", \"Khalid\", \"Omar\", \"Sara\"]\n\nprint(students[2])",
      language: "python",
      output:
        "Omar",
      bullets: [
        "Index 0 is Ahmad.",
        "Index 1 is Khalid.",
        "Index 2 is Omar.",
        "Index 3 is Sara."
      ]
    },

    {
      kicker: "09 · Negative indexes",
      title: "Using Negative Indexes",
      body:
        "Negative indexes allow us to access items from the end of the list.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\", \"Mango\"]\n\nprint(fruits[-1])\nprint(fruits[-2])",
      language: "python",
      output:
        "Mango\nOrange",
      bullets: [
        "Index -1 refers to the last item.",
        "Index -2 refers to the second-last item.",
        "Negative indexes count backward."
      ]
    },

    {
      kicker: "10 · Slicing",
      title: "Access Multiple Items",
      body:
        "List slicing allows us to access a portion of a list using a start and stop index.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\", \"Mango\", \"Grapes\"]\n\nprint(fruits[1:4])",
      language: "python",
      output:
        "['Banana', 'Orange', 'Mango']",
      bullets: [
        "The start index is included.",
        "The stop index is excluded.",
        "The result is a new list.",
        "Slicing does not remove the original items."
      ]
    },

    {
      kicker: "11 · Slicing",
      title: "More List Slicing",
      body:
        "We can use different slicing expressions to access list items.",
      code:
        "numbers = [10, 20, 30, 40, 50]\n\nprint(numbers[:3])\nprint(numbers[2:])\nprint(numbers[::2])",
      language: "python",
      output:
        "[10, 20, 30]\n[30, 40, 50]\n[10, 30, 50]",
      bullets: [
        "[:3] starts from the beginning.",
        "[2:] continues from index 2 to the end.",
        "[::2] selects every second item.",
        "Slicing creates a new list."
      ]
    },

    {
      kicker: "12 · Updating items",
      title: "Change a List Item",
      body:
        "Lists are mutable, which means we can change their items after creating the list.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nfruits[1] = \"Mango\"\n\nprint(fruits)",
      language: "python",
      output:
        "['Apple', 'Mango', 'Orange']",
      bullets: [
        "Index 1 contains Banana.",
        "We replace Banana with Mango.",
        "The original list is modified.",
        "Lists are mutable."
      ]
    },

    {
      kicker: "13 · Adding items",
      title: "Using append()",
      body:
        "The append() method adds one item to the end of a list.",
      code:
        "fruits = [\"Apple\", \"Banana\"]\n\nfruits.append(\"Orange\")\n\nprint(fruits)",
      language: "python",
      output:
        "['Apple', 'Banana', 'Orange']",
      bullets: [
        "append() adds one item.",
        "The item is added at the end.",
        "The original list is modified.",
        "append() does not return the updated list."
      ]
    },

    {
      kicker: "14 · Adding items",
      title: "Using insert()",
      body:
        "The insert() method adds an item at a specific index.",
      code:
        "fruits = [\"Apple\", \"Orange\"]\n\nfruits.insert(1, \"Banana\")\n\nprint(fruits)",
      language: "python",
      output:
        "['Apple', 'Banana', 'Orange']",
      bullets: [
        "insert() accepts an index and an item.",
        "The first argument specifies the position.",
        "The second argument specifies the value.",
        "Other items move to make room."
      ]
    },

    {
      kicker: "15 · Adding multiple items",
      title: "Using extend()",
      body:
        "The extend() method adds multiple items from another iterable, such as a list.",
      code:
        "fruits = [\"Apple\", \"Banana\"]\nmore_fruits = [\"Orange\", \"Mango\"]\n\nfruits.extend(more_fruits)\n\nprint(fruits)",
      language: "python",
      output:
        "['Apple', 'Banana', 'Orange', 'Mango']",
      bullets: [
        "extend() adds items from another iterable.",
        "The items are added individually.",
        "The original list is modified.",
        "It is useful for combining lists."
      ]
    },

    {
      kicker: "16 · Removing items",
      title: "Using remove()",
      body:
        "The remove() method deletes the first matching value from a list.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\", \"Banana\"]\n\nfruits.remove(\"Banana\")\n\nprint(fruits)",
      language: "python",
      output:
        "['Apple', 'Orange', 'Banana']",
      bullets: [
        "remove() searches for a value.",
        "It removes the first matching item.",
        "If the value is not found, ValueError is raised.",
        "It does not remove every duplicate."
      ]
    },

    {
      kicker: "17 · Removing items",
      title: "Using pop()",
      body:
        "The pop() method removes an item by index and returns the removed item.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nremoved = fruits.pop(1)\n\nprint(removed)\nprint(fruits)",
      language: "python",
      output:
        "Banana\n['Apple', 'Orange']",
      bullets: [
        "pop() removes an item by index.",
        "It also returns the removed item.",
        "If no index is provided, the last item is removed.",
        "An invalid index raises IndexError."
      ]
    },

    {
      kicker: "18 · Removing items",
      title: "Using del",
      body:
        "The del statement can delete an item by index or delete a slice of a list.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\ndel fruits[1]\n\nprint(fruits)",
      language: "python",
      output:
        "['Apple', 'Orange']",
      bullets: [
        "del removes an item using its index.",
        "It can also delete a slice.",
        "It is a statement, not a list method.",
        "An invalid index raises IndexError."
      ]
    },

    {
      kicker: "19 · Clearing lists",
      title: "Using clear()",
      body:
        "The clear() method removes all items from the list.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nfruits.clear()\n\nprint(fruits)",
      language: "python",
      output:
        "[]",
      bullets: [
        "clear() removes all list items.",
        "The list remains available.",
        "The list becomes empty.",
        "It does not delete the variable."
      ]
    },

    {
      kicker: "20 · List length",
      title: "Using len()",
      body:
        "The len() function returns the number of items in a list.",
      code:
        "students = [\"Ahmad\", \"Khalid\", \"Omar\", \"Sara\"]\n\nprint(len(students))",
      language: "python",
      output:
        "4",
      bullets: [
        "len() counts the items.",
        "It returns an integer.",
        "It counts duplicates as separate items.",
        "The number of items is not the same as the last index."
      ]
    },

    {
      kicker: "21 · Membership",
      title: "Check if an Item Exists",
      body:
        "The in and not in operators allow us to check whether a value exists in a list.",
      code:
        "students = [\"Ahmad\", \"Khalid\", \"Omar\"]\n\nprint(\"Ahmad\" in students)\nprint(\"Sara\" in students)\nprint(\"Sara\" not in students)",
      language: "python",
      output:
        "True\nFalse\nTrue",
      bullets: [
        "in checks whether an item exists.",
        "not in checks whether an item does not exist.",
        "The result is a Boolean value.",
        "Membership checks are useful for validation."
      ]
    },

    {
      kicker: "22 · Looping",
      title: "Using for with Lists",
      body:
        "A for loop allows us to process every item in a list.",
      code:
        "students = [\"Ahmad\", \"Khalid\", \"Omar\"]\n\nfor student in students:\n    print(student)",
      language: "python",
      output:
        "Ahmad\nKhalid\nOmar",
      bullets: [
        "The loop processes each item.",
        "The variable student receives one value at a time.",
        "The loop continues until all items are processed.",
        "We do not need to manually use indexes."
      ]
    },

    {
      kicker: "23 · Looping",
      title: "Using while with Lists",
      body:
        "We can also use a while loop and an index to access list items.",
      code:
        "students = [\"Ahmad\", \"Khalid\", \"Omar\"]\nindex = 0\n\nwhile index < len(students):\n    print(students[index])\n    index += 1",
      language: "python",
      output:
        "Ahmad\nKhalid\nOmar",
      bullets: [
        "The index starts at zero.",
        "len() determines the list length.",
        "The index increases in every iteration.",
        "The loop stops when the index reaches the list length."
      ]
    },

    {
      kicker: "24 · Searching",
      title: "Using index()",
      body:
        "The index() method returns the index of the first matching value.",
      code:
        "fruits = [\"Apple\", \"Banana\", \"Orange\"]\n\nprint(fruits.index(\"Banana\"))",
      language: "python",
      output:
        "1",
      bullets: [
        "index() searches for a value.",
        "It returns the first matching index.",
        "If the value is not found, ValueError is raised.",
        "Duplicate values return the first matching position."
      ]
    },

    {
      kicker: "25 · Counting",
      title: "Using count()",
      body:
        "The count() method returns how many times a value appears in a list.",
      code:
        "numbers = [10, 20, 10, 30, 10]\n\nprint(numbers.count(10))",
      language: "python",
      output:
        "3",
      bullets: [
        "count() counts occurrences.",
        "It returns an integer.",
        "Duplicate values are counted.",
        "It is useful for analyzing data."
      ]
    },

    {
      kicker: "26 · Sorting",
      title: "Using sort()",
      body:
        "The sort() method arranges list items in ascending order by default.",
      code:
        "numbers = [40, 10, 30, 20]\n\nnumbers.sort()\n\nprint(numbers)",
      language: "python",
      output:
        "[10, 20, 30, 40]",
      bullets: [
        "sort() arranges the list.",
        "Ascending order is the default.",
        "The original list is modified.",
        "sort() returns None."
      ]
    },

    {
      kicker: "27 · Sorting",
      title: "Descending Order",
      body:
        "We can use reverse=True to sort items from largest to smallest.",
      code:
        "numbers = [40, 10, 30, 20]\n\nnumbers.sort(reverse=True)\n\nprint(numbers)",
      language: "python",
      output:
        "[40, 30, 20, 10]",
      bullets: [
        "reverse=True changes the sorting direction.",
        "The list is sorted from largest to smallest.",
        "The original list is modified."
      ]
    },

    {
      kicker: "28 · Reversing",
      title: "Using reverse()",
      body:
        "The reverse() method reverses the current order of list items without sorting them.",
      code:
        "numbers = [10, 30, 20, 40]\n\nnumbers.reverse()\n\nprint(numbers)",
      language: "python",
      output:
        "[40, 20, 30, 10]",
      bullets: [
        "reverse() reverses the current order.",
        "It does not sort the values.",
        "The original list is modified.",
        "reverse() returns None."
      ]
    },

    {
      kicker: "29 · Practical example",
      title: "Student Marks Management",
      body:
        "Let's store student marks, calculate the total, and calculate the average.",
      code:
        "marks = [85, 70, 90, 65, 80]\n\ntotal = sum(marks)\naverage = total / len(marks)\n\nprint(\"Total:\", total)\nprint(\"Average:\", average)",
      language: "python",
      output:
        "Total: 390\nAverage: 78.0",
      bullets: [
        "marks stores multiple values.",
        "sum() calculates the total.",
        "len() counts the students.",
        "The average is calculated by dividing the total by the number of marks."
      ]
    },

    {
      kicker: "30 · Practical example",
      title: "Filtering Passing Students",
      body:
        "Use a loop and condition to display only passing marks.",
      code:
        "marks = [45, 85, 60, 35, 90, 70]\n\nfor mark in marks:\n    if mark >= 50:\n        print(mark)",
      language: "python",
      output:
        "85\n60\n90\n70",
      bullets: [
        "The loop checks every mark.",
        "The condition checks whether a mark is at least 50.",
        "Only passing marks are printed.",
        "Lists can be processed using conditions and loops."
      ]
    },

    {
      kicker: "31 · Common mistakes",
      title: "Mistakes to Avoid",
      body:
        "Understand these common mistakes when working with lists.",
      bullets: [
        "Using an index that does not exist.",
        "Forgetting that the first index is zero.",
        "Confusing append() with extend().",
        "Using remove() when the value does not exist.",
        "Thinking sort() returns the sorted list.",
        "Forgetting that pop() removes and returns an item.",
        "Confusing reverse() with sorting.",
        "Trying to access an empty list using an index.",
        "Using incorrect indentation inside loops."
      ]
    },

    {
      kicker: "32 · Practice",
      title: "Your Lists Exercise",
      body:
        "Create a student marks program using a list.",
      bullets: [
        "Create a list containing five student marks.",
        "Print all marks using a for loop.",
        "Calculate the total using sum().",
        "Calculate the average using len().",
        "Print only marks greater than or equal to 50.",
        "Add a new mark using append().",
        "Remove one mark from the list."
      ]
    },

    {
      kicker: "33 · Summary",
      title: "What Have We Learned?",
      body:
        "Lists allow us to store, manage, and process multiple values using a single variable.",
      bullets: [
        "Lists are ordered and mutable.",
        "Lists allow duplicate values.",
        "Lists use zero-based indexes.",
        "Items can be added, updated, and removed.",
        "Lists can be processed using loops.",
        "Lists provide useful methods such as append(), pop(), sort(), and count().",
        "Lists are useful for storing and processing real-world data."
      ]
    }
  ],

  example: {
    explanation:
      "This example manages student marks. It stores marks in a list, calculates the total and average, and displays only passing marks. It demonstrates list creation, len(), sum(), and for loops.",
    code:
      "marks = [85, 70, 90, 45, 80]\n\nprint(\"Marks:\", marks)\nprint(\"Total:\", sum(marks))\nprint(\"Average:\", sum(marks) / len(marks))\n\nprint(\"Passing Marks:\")\n\nfor mark in marks:\n    if mark >= 50:\n        print(mark)",
    language: "python",
    output:
      "Marks: [85, 70, 90, 45, 80]\nTotal: 370\nAverage: 74.0\nPassing Marks:\n85\n70\n90\n80"
  },

  commonMistakes: [
    "Using an index outside the valid range.",
    "Forgetting that indexes start at zero.",
    "Confusing append() with extend().",
    "Expecting append(), sort(), or reverse() to return the modified list.",
    "Using remove() for a value that does not exist.",
    "Confusing pop() with remove().",
    "Confusing reverse() with sorting.",
    "Trying to access an item in an empty list.",
    "Forgetting to update the index in a while loop.",
    "Modifying a list while iterating over it without understanding the consequences."
  ],

  exercise: {
    question:
      "Create a Python program to manage student marks. Create a list containing five marks. Print the list, calculate and print the total and average, display only marks greater than or equal to 50, add a new mark using append(), and remove one mark using pop(). Print the final list.",
    hint:
      "Use sum() to calculate the total, len() to calculate the number of marks, a for loop to display passing marks, append() to add a mark, and pop() to remove an item."
  },

  solution: {
    explanation:
      "The program creates a list of marks, calculates the total and average, displays passing marks using a loop and condition, adds a new mark, removes the last item using pop(), and prints the updated list.",
    code:
      "marks = [85, 70, 90, 45, 80]\n\nprint(\"Original Marks:\", marks)\n\ntotal = sum(marks)\naverage = total / len(marks)\n\nprint(\"Total:\", total)\nprint(\"Average:\", average)\n\nprint(\"Passing Marks:\")\nfor mark in marks:\n    if mark >= 50:\n        print(mark)\n\nmarks.append(95)\nmarks.pop()\n\nprint(\"Final Marks:\", marks)",
    output:
      "Original Marks: [85, 70, 90, 45, 80]\nTotal: 370\nAverage: 74.0\nPassing Marks:\n85\n70\n90\n80\nFinal Marks: [85, 70, 90, 45, 80]"
  },

  quiz: [
    {
      question: "What is a list in Python?",
      options: [
        "A variable that stores only one value",
        "An ordered and mutable collection of items",
        "A function that prints values",
        "A type of loop"
      ],
      answer: 1,
      explanation:
        "A list is an ordered and mutable collection that can store multiple items."
    },
    {
      question: "Which symbol is used to create a list?",
      options: [
        "()",
        "{}",
        "[]",
        "<>"
      ],
      answer: 2,
      explanation:
        "Lists are created using square brackets."
    },
    {
      question: "What is the index of the first item in a list?",
      options: [
        "1",
        "-1",
        "0",
        "2"
      ],
      answer: 2,
      explanation:
        "Python uses zero-based indexing, so the first item has index 0."
    },
    {
      question: "What is the output of this code?\n\nfruits = [\"Apple\", \"Banana\", \"Orange\"]\nprint(fruits[1])",
      options: [
        "Apple",
        "Banana",
        "Orange",
        "Error"
      ],
      answer: 1,
      explanation:
        "Index 1 refers to the second item, Banana."
    },
    {
      question: "What does fruits[-1] access?",
      options: [
        "The first item",
        "The second item",
        "The last item",
        "An invalid item"
      ],
      answer: 2,
      explanation:
        "Index -1 refers to the last item in a list."
    },
    {
      question: "Which method adds one item to the end of a list?",
      options: [
        "remove()",
        "append()",
        "clear()",
        "pop()"
      ],
      answer: 1,
      explanation:
        "append() adds one item to the end of a list."
    },
    {
      question: "What is the difference between append() and extend()?",
      options: [
        "They always perform exactly the same operation",
        "append() adds one item, while extend() adds items from an iterable",
        "append() removes items",
        "extend() sorts items"
      ],
      answer: 1,
      explanation:
        "append() adds its argument as a single item. extend() adds the items from an iterable individually."
    },
    {
      question: "What does remove() do?",
      options: [
        "Removes the last item",
        "Removes the first matching value",
        "Deletes the variable",
        "Sorts the list"
      ],
      answer: 1,
      explanation:
        "remove() removes the first item that matches the specified value."
    },
    {
      question: "What does pop() return?",
      options: [
        "The list length",
        "The sorted list",
        "The removed item",
        "True"
      ],
      answer: 2,
      explanation:
        "pop() removes an item and returns that item."
    },
    {
      question: "What is the output of this code?\n\nnumbers = [10, 20, 30]\nnumbers.append(40)\nprint(len(numbers))",
      options: [
        "3",
        "4",
        "40",
        "10"
      ],
      answer: 1,
      explanation:
        "After adding 40, the list contains four items."
    },
    {
      question: "What does sort() do by default?",
      options: [
        "Deletes the list",
        "Reverses the list randomly",
        "Sorts items in ascending order",
        "Adds a new item"
      ],
      answer: 2,
      explanation:
        "sort() arranges list items in ascending order by default."
    },
    {
      question: "What is the difference between reverse() and sort()?",
      options: [
        "They are always identical",
        "reverse() reverses the current order, while sort() arranges items",
        "reverse() deletes items",
        "sort() reverses without sorting"
      ],
      answer: 1,
      explanation:
        "reverse() reverses the current order. sort() arranges items according to their values."
    },
    {
      question: "What is the output of this code?\n\nnumbers = [10, 20, 30, 40]\nprint(numbers[1:3])",
      options: [
        "[10, 20]",
        "[20, 30]",
        "[20, 30, 40]",
        "[30, 40]"
      ],
      answer: 1,
      explanation:
        "The slice starts at index 1 and stops before index 3."
    },
    {
      question: "Which method removes all items from a list?",
      options: [
        "append()",
        "insert()",
        "clear()",
        "count()"
      ],
      answer: 2,
      explanation:
        "clear() removes all items from the list."
    },
    {
      question: "What does the in operator check?",
      options: [
        "Whether a list is empty",
        "Whether a value exists in a collection",
        "Whether a list is sorted",
        "Whether an item is deleted"
      ],
      answer: 1,
      explanation:
        "in checks whether a specified value exists in a collection."
    }
  ],

  takeaways: [
    "Lists store multiple items in a single variable.",
    "Lists are ordered, mutable, and allow duplicates.",
    "Lists use square brackets.",
    "Indexes start at zero.",
    "Negative indexes access items from the end.",
    "Slicing accesses a portion of a list.",
    "Lists can be modified using assignment and methods.",
    "append(), insert(), and extend() add items.",
    "remove(), pop(), del, and clear() remove items.",
    "len(), count(), index(), sort(), and reverse() are useful list operations.",
    "Loops allow us to process every list item.",
    "Lists are useful for managing real-world data."
  ],

  teacherNotes:
    "Begin by asking students how they would store the names of ten students without creating ten separate variables. Introduce lists as a way to store multiple related values. Use a whiteboard to show list items and their indexes, beginning with index zero. Demonstrate accessing items, negative indexing, slicing, and changing an item. Then introduce append(), insert(), extend(), remove(), pop(), del, and clear() one at a time. Do not teach all methods too quickly; let students predict outputs and test each method. Demonstrate len(), membership, and looping through lists. Explain the difference between sort() and reverse(). Finish with the student marks program, which combines lists, loops, conditions, sum(), len(), and list methods. Ask students to create their own list and manipulate it.",

  teachingTime: "90-120 minutes"
};
