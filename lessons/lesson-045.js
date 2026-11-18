window.lessonData = window.lessonData || {};
window.lessonData[45] = {
  id: 45,
  title: "Sets",
  category: "Python Data Structures",
  contentStatus: "authored",
  introduction: "This lesson introduces Python sets, their properties, how to create them, add and remove items, and use set operations to compare collections.",
  definition: "A set is a collection of unique items. Sets are unordered, do not allow duplicate items, and do not support indexing.",
  whyItMatters: "Sets are useful for removing duplicate values, checking membership, and comparing collections to find common or different items.",
  objectives: [
    "Understand what a set is and its main properties.",
    "Create sets and understand the empty set syntax.",
    "Understand why sets do not keep duplicate values.",
    "Add and remove items using set methods.",
    "Use membership operators with sets.",
    "Loop through a set.",
    "Use union, intersection, difference, and symmetric difference.",
    "Convert lists into sets to remove duplicates."
  ],
  slides: [
    {
      kicker: "Python Data Structures",
      title: "What Is a Set?",
      body: "A set is a collection that stores unique items.",
      bullets: [
        "Sets do not allow duplicate items.",
        "Sets are unordered.",
        "Sets do not support indexing.",
        "Sets are mutable."
      ]
    },
    {
      kicker: "Understanding Sets",
      title: "Why Do We Use Sets?",
      body: "Sets help us work with unique data and compare different collections.",
      bullets: [
        "Remove duplicate values.",
        "Find common items.",
        "Find items that exist in one collection but not another.",
        "Check whether an item exists."
      ]
    },
    {
      kicker: "Syntax",
      title: "Creating a Set",
      body: "We create a set using curly braces with comma-separated items.",
      code: "fruits = {\"Apple\", \"Banana\", \"Orange\"}\nprint(fruits)",
      output: "The set contains Apple, Banana, and Orange. The displayed order may vary."
    },
    {
      kicker: "Set Properties",
      title: "Sets Do Not Allow Duplicates",
      body: "If a set contains repeated values, Python keeps only one occurrence of each value.",
      code: "numbers = {10, 20, 10, 30, 20}\nprint(numbers)",
      output: "{10, 20, 30} (display order may vary)"
    },
    {
      kicker: "Set Properties",
      title: "Sets Are Unordered",
      body: "Sets do not guarantee a specific item order.",
      bullets: [
        "Do not depend on the displayed order.",
        "Sets do not have positional indexes.",
        "The order may differ from the order in which items were inserted."
      ],
      code: "fruits = {\"Apple\", \"Banana\", \"Orange\"}\nprint(fruits)",
      output: "The order of the items is not guaranteed."
    },
    {
      kicker: "Set Properties",
      title: "Sets Do Not Support Indexing",
      body: "We cannot access set items using numeric indexes.",
      code: "numbers = {10, 20, 30}\nprint(numbers[0])",
      output: "TypeError: 'set' object is not subscriptable"
    },
    {
      kicker: "Syntax",
      title: "Creating an Empty Set",
      body: "Use set() to create an empty set.",
      bullets: [
        "{} creates an empty dictionary, not a set.",
        "set() creates an empty set."
      ],
      code: "a = {}\nb = set()\n\nprint(type(a))\nprint(type(b))",
      output: "<class 'dict'>\n<class 'set'>"
    },
    {
      kicker: "Data Types",
      title: "Sets Can Store Different Types",
      body: "A set can store different hashable data types.",
      code: "items = {10, \"Apple\", 3.5, True}\nprint(items)",
      output: "The set contains 10, 'Apple', 3.5, and True. The displayed order may vary."
    },
    {
      kicker: "Important Concept",
      title: "What Can a Set Contain?",
      body: "Set elements must be hashable. Common immutable values such as strings, integers, and tuples containing hashable items can be used.",
      bullets: [
        "Integers can be set items.",
        "Strings can be set items.",
        "Tuples of hashable values can be set items.",
        "Lists and dictionaries cannot be direct set elements."
      ],
      code: "numbers = {10, 20, 30}\n\n# This is invalid:\n# items = {[1, 2], [3, 4]}",
      output: "Lists cannot be used as set elements because they are unhashable."
    },
    {
      kicker: "Adding Items",
      title: "add() Method",
      body: "add() adds one item to a set.",
      code: "fruits = {\"Apple\", \"Banana\"}\nfruits.add(\"Orange\")\nprint(fruits)",
      output: "The set contains Apple, Banana, and Orange. The displayed order may vary."
    },
    {
      kicker: "Adding Items",
      title: "Adding an Existing Item",
      body: "Adding an item that already exists does not create a duplicate.",
      code: "numbers = {10, 20, 30}\nnumbers.add(20)\nprint(numbers)",
      output: "{10, 20, 30} (display order may vary)"
    },
    {
      kicker: "Adding Items",
      title: "update() Method",
      body: "update() adds multiple items from an iterable to a set.",
      bullets: [
        "It can accept lists.",
        "It can accept tuples.",
        "It can accept other sets.",
        "Duplicate values are ignored."
      ],
      code: "numbers = {1, 2, 3}\nmore_numbers = [3, 4, 5]\nnumbers.update(more_numbers)\nprint(numbers)",
      output: "{1, 2, 3, 4, 5} (display order may vary)"
    },
    {
      kicker: "Removing Items",
      title: "remove() Method",
      body: "remove() removes a specified item from a set.",
      bullets: [
        "It removes the specified value.",
        "If the item does not exist, it raises KeyError."
      ],
      code: "fruits = {\"Apple\", \"Banana\", \"Orange\"}\nfruits.remove(\"Banana\")\nprint(fruits)",
      output: "The set contains Apple and Orange. The displayed order may vary."
    },
    {
      kicker: "Removing Items",
      title: "discard() Method",
      body: "discard() removes an item if it exists and does not raise an error if it is missing.",
      code: "numbers = {10, 20, 30}\nnumbers.discard(50)\nprint(numbers)",
      output: "{10, 20, 30} (display order may vary)"
    },
    {
      kicker: "Comparing Methods",
      title: "remove() vs discard()",
      body: "Both remove a specified item, but they behave differently when the item is missing.",
      bullets: [
        "remove() raises KeyError if the item is missing.",
        "discard() does not raise an error if the item is missing."
      ],
      code: "numbers = {10, 20, 30}\nnumbers.discard(50)\nprint(numbers)",
      output: "{10, 20, 30}"
    },
    {
      kicker: "Removing Items",
      title: "pop() Method",
      body: "pop() removes and returns an arbitrary set item.",
      bullets: [
        "It does not accept an index.",
        "The removed item is not predictable.",
        "It raises KeyError if the set is empty."
      ],
      code: "numbers = {10, 20, 30}\nremoved = numbers.pop()\nprint(\"Removed:\", removed)\nprint(\"Remaining:\", numbers)",
      output: "The removed item is arbitrary. The remaining set contains the other two items."
    },
    {
      kicker: "Removing Items",
      title: "clear() Method",
      body: "clear() removes all items from the set.",
      code: "numbers = {10, 20, 30}\nnumbers.clear()\nprint(numbers)",
      output: "set()"
    },
    {
      kicker: "Built-in Functions",
      title: "Using len()",
      body: "len() returns the number of unique items in a set.",
      code: "numbers = {10, 20, 10, 30, 20}\nprint(len(numbers))",
      output: "3"
    },
    {
      kicker: "Membership",
      title: "Using in and not in",
      body: "Membership operators check whether a value exists in a set.",
      code: "fruits = {\"Apple\", \"Banana\", \"Orange\"}\nprint(\"Banana\" in fruits)\nprint(\"Mango\" not in fruits)",
      output: "True\nTrue"
    },
    {
      kicker: "Looping",
      title: "Using a for Loop",
      body: "We can use a for loop to visit each item in a set, but the order is not guaranteed.",
      code: "fruits = {\"Apple\", \"Banana\", \"Orange\"}\n\nfor fruit in fruits:\n    print(fruit)",
      output: "Each fruit is printed once. The output order may vary."
    },
    {
      kicker: "Set Operations",
      title: "What Are Set Operations?",
      body: "Set operations allow us to compare two sets and create new sets from their items.",
      bullets: [
        "Union: all items from both sets.",
        "Intersection: common items.",
        "Difference: items in one set but not the other.",
        "Symmetric difference: items in either set, but not both."
      ]
    },
    {
      kicker: "Set Operations",
      title: "Union",
      body: "Union combines all unique items from two sets.",
      code: "a = {1, 2, 3}\nb = {3, 4, 5}\nresult = a.union(b)\nprint(result)",
      output: "{1, 2, 3, 4, 5}"
    },
    {
      kicker: "Set Operations",
      title: "Union Using the | Operator",
      body: "We can also use the | operator to combine sets.",
      code: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a | b)",
      output: "{1, 2, 3, 4, 5}"
    },
    {
      kicker: "Set Operations",
      title: "Intersection",
      body: "Intersection returns the items that exist in both sets.",
      code: "a = {1, 2, 3}\nb = {3, 4, 5}\nresult = a.intersection(b)\nprint(result)",
      output: "{3}"
    },
    {
      kicker: "Set Operations",
      title: "Intersection Using &",
      body: "The & operator also returns the common items from two sets.",
      code: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a & b)",
      output: "{3}"
    },
    {
      kicker: "Set Operations",
      title: "Difference",
      body: "Difference returns the items that exist in the first set but not in the second.",
      code: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a.difference(b))",
      output: "{1, 2}"
    },
    {
      kicker: "Set Operations",
      title: "Difference Using -",
      body: "The - operator also performs set difference.",
      code: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a - b)\nprint(b - a)",
      output: "{1, 2}\n{4, 5}"
    },
    {
      kicker: "Set Operations",
      title: "Symmetric Difference",
      body: "Symmetric difference returns items that exist in either set but not in both.",
      code: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a.symmetric_difference(b))",
      output: "{1, 2, 4, 5}"
    },
    {
      kicker: "Set Operations",
      title: "Symmetric Difference Using ^",
      body: "The ^ operator performs symmetric difference.",
      code: "a = {1, 2, 3}\nb = {3, 4, 5}\nprint(a ^ b)",
      output: "{1, 2, 4, 5}"
    },
    {
      kicker: "Practical Example",
      title: "Compare Student Subjects",
      body: "We can use sets to compare subjects studied by two students.",
      code: "ahmad = {\"Python\", \"HTML\", \"CSS\"}\nali = {\"Python\", \"JavaScript\", \"CSS\"}\n\nprint(\"Common:\", ahmad & ali)\nprint(\"Ahmad only:\", ahmad - ali)\nprint(\"Ali only:\", ali - ahmad)",
      output: "Common: {'Python', 'CSS'}\nAhmad only: {'HTML'}\nAli only: {'JavaScript'}"
    },
    {
      kicker: "Practical Example",
      title: "Remove Duplicate Values",
      body: "We can convert a list into a set to remove duplicate values.",
      code: "numbers = [10, 20, 10, 30, 20, 40]\nunique_numbers = set(numbers)\nprint(unique_numbers)",
      output: "{10, 20, 30, 40} (display order may vary)"
    },
    {
      kicker: "Conversions",
      title: "Convert Set to List",
      body: "We can use list() to convert a set into a list. The list order is based on the set iteration order and is not guaranteed.",
      code: "numbers = {10, 20, 30}\nmy_list = list(numbers)\nprint(my_list)",
      output: "A list containing 10, 20, and 30. The order may vary."
    },
    {
      kicker: "Common Mistakes",
      title: "Set Mistakes",
      body: "Understand these common errors when working with sets.",
      bullets: [
        "Using an index to access a set.",
        "Expecting a set to keep a specific order.",
        "Creating an empty set using {}.",
        "Trying to add a list as a set item.",
        "Using remove() for an item that does not exist.",
        "Assuming pop() removes the first or last item.",
        "Expecting duplicate values to remain."
      ]
    },
    {
      kicker: "Practice",
      title: "Manage Student Subjects",
      body: "Create two sets of subjects for two students and compare them.",
      bullets: [
        "Create a set of subjects for Ahmad.",
        "Create a set of subjects for Ali.",
        "Find their common subjects.",
        "Find subjects studied only by Ahmad.",
        "Find subjects studied only by Ali.",
        "Find all unique subjects.",
        "Add one new subject to Ahmad's set."
      ]
    },
    {
      kicker: "Review",
      title: "Sets Summary",
      body: "Sets store unique items and provide powerful comparison operations.",
      bullets: [
        "Sets are unordered.",
        "Sets do not allow duplicate values.",
        "Sets do not support indexing.",
        "Use add() and update().",
        "Use remove(), discard(), pop(), and clear().",
        "Use union(), intersection(), difference(), and symmetric_difference().",
        "Sets are useful for unique data and comparisons."
      ]
    }
  ],
  example: {
    explanation: "This example compares subjects studied by two students, finds common and unique subjects, and adds a new subject.",
    code: "ahmad = {\"Python\", \"HTML\", \"CSS\", \"SQL\"}\nali = {\"Python\", \"JavaScript\", \"CSS\"}\n\ncommon = ahmad.intersection(ali)\nahmad_only = ahmad.difference(ali)\nali_only = ali.difference(ahmad)\nall_subjects = ahmad.union(ali)\n\nahmad.add(\"Django\")\n\nprint(\"Common:\", common)\nprint(\"Ahmad only:\", ahmad_only)\nprint(\"Ali only:\", ali_only)\nprint(\"All subjects:\", all_subjects)\nprint(\"Ahmad after adding Django:\", ahmad)",
    language: "python",
    output: "Common: {'Python', 'CSS'}\nAhmad only: {'HTML', 'SQL'}\nAli only: {'JavaScript'}\nAll subjects: {'Python', 'HTML', 'CSS', 'SQL', 'JavaScript'}\nAhmad after adding Django: {'Python', 'HTML', 'CSS', 'SQL', 'Django'} (set display order may vary)"
  },
  commonMistakes: [
    "Expecting a set to preserve a specific order.",
    "Trying to use indexing or slicing on a set.",
    "Using {} to create an empty set instead of set().",
    "Adding unhashable values such as lists or dictionaries as set elements.",
    "Using remove() when an item may not exist and forgetting that it raises KeyError.",
    "Assuming pop() removes a predictable item.",
    "Confusing union with intersection.",
    "Confusing difference with symmetric difference.",
    "Expecting duplicate values to be preserved.",
    "Expecting list(set(my_list)) to preserve the original list order."
  ],
  exercise: {
    question: "Create two sets containing the names of students who attended two different Python classes. Find the students who attended both classes, the students who attended only the first class, the students who attended only the second class, and all unique students. Add a new student to the first set, remove one student safely using discard(), and print the number of students in each set.",
    hint: "Use intersection(), difference(), union(), add(), discard(), and len(). You can also use &, -, and | operators."
  },
  solution: {
    explanation: "This solution uses set operations to compare two class attendance lists and manage unique student names.",
    code: "class_1 = {\"Ahmad\", \"Ali\", \"Mahmood\", \"Karim\"}\nclass_2 = {\"Ali\", \"Karim\", \"Farid\", \"Zia\"}\n\ncommon_students = class_1 & class_2\nclass_1_only = class_1 - class_2\nclass_2_only = class_2 - class_1\nall_students = class_1 | class_2\n\nclass_1.add(\"Nasir\")\nclass_1.discard(\"Mahmood\")\n\nprint(\"Common:\", common_students)\nprint(\"Class 1 only:\", class_1_only)\nprint(\"Class 2 only:\", class_2_only)\nprint(\"All students:\", all_students)\nprint(\"Class 1 count:\", len(class_1))\nprint(\"Class 2 count:\", len(class_2))",
    output: "Common: {'Ali', 'Karim'}\nClass 1 only: {'Ahmad', 'Mahmood'}\nClass 2 only: {'Farid', 'Zia'}\nAll students: {'Ahmad', 'Ali', 'Mahmood', 'Karim', 'Farid', 'Zia'}\nClass 1 count: 4\nClass 2 count: 4\n(Set display order may vary.)"
  },
  quiz: [
    {
      question: "What is the main property of a Python set?",
      options: [
        "It stores duplicate items.",
        "It stores items with numeric indexes.",
        "It stores unique items.",
        "It is always sorted."
      ],
      answer: 2,
      explanation: "Sets store unique items and do not keep duplicate values."
    },
    {
      question: "Which syntax creates an empty set?",
      options: ["{}", "[]", "()", "set()"],
      answer: 3,
      explanation: "set() creates an empty set. {} creates an empty dictionary."
    },
    {
      question: "Can we access a set item using an index?",
      options: [
        "Yes, using index 0",
        "Yes, using negative indexes",
        "No, sets do not support indexing",
        "Only if the set contains integers"
      ],
      answer: 2,
      explanation: "Sets do not support positional indexing."
    },
    {
      question: "Which method adds one item to a set?",
      options: ["append()", "add()", "insert()", "push()"],
      answer: 1,
      explanation: "add() inserts one item into a set."
    },
    {
      question: "What is the difference between remove() and discard()?",
      options: [
        "They are identical.",
        "discard() raises an error when an item is missing.",
        "remove() raises KeyError if the item is missing, while discard() does not.",
        "remove() adds items."
      ],
      answer: 2,
      explanation: "discard() does not raise KeyError if the specified item is absent."
    },
    {
      question: "What does union() do?",
      options: [
        "Finds common items only.",
        "Combines unique items from both sets.",
        "Deletes both sets.",
        "Sorts the sets."
      ],
      answer: 1,
      explanation: "Union combines the unique items from both sets."
    },
    {
      question: "What does intersection() return?",
      options: [
        "All items from both sets",
        "Items in the first set only",
        "Items shared by both sets",
        "Duplicate items only"
      ],
      answer: 2,
      explanation: "Intersection returns the items that exist in both sets."
    },
    {
      question: "What does symmetric_difference() return?",
      options: [
        "Items that exist in both sets",
        "Items that exist in either set but not both",
        "All duplicate items",
        "Only the first set"
      ],
      answer: 1,
      explanation: "Symmetric difference returns items from either set excluding items shared by both."
    }
  ],
  takeaways: [
    "Sets store unique values.",
    "Sets are unordered and do not support indexing.",
    "Use set() to create an empty set.",
    "Use add() to add one item and update() to add multiple items.",
    "Use remove() and discard() to remove items safely or strictly.",
    "Use union(), intersection(), difference(), and symmetric_difference() to compare sets.",
    "Sets are useful for removing duplicates and comparing collections."
  ],
  teacherNotes: "Start with a list containing duplicate numbers and ask students how they could remove duplicates. Convert the list into a set to introduce the topic. Explain unordered behavior and lack of indexing carefully. Teach add(), update(), remove(), discard(), pop(), and clear() before set operations. Use two sets of student subjects or class attendance to explain union, intersection, difference, and symmetric difference. Do not promise any fixed output order when printing sets.",
  teachingTime: "90-120 minutes"
};