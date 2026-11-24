window.lessonData = window.lessonData || {};
window.lessonData[47] = {
  id: 47,
  title: "Indexing and Slicing",
  category: "Python Data Structures",
  contentStatus: "authored",
  introduction: "This lesson teaches students how to access individual items and extract ranges of items from strings and sequences using indexing and slicing.",
  definition: "Indexing accesses a single item by its position, while slicing extracts a range of items from a sequence.",
  whyItMatters: "Indexing and slicing help programmers access, extract, inspect, and work with specific parts of data such as strings, lists, and tuples.",
  objectives: [
    "Understand indexing and slicing.",
    "Use positive and negative indexes.",
    "Access individual items from strings, lists, and tuples.",
    "Extract ranges using slicing.",
    "Understand start, stop, and step.",
    "Use negative indexes and steps in slices.",
    "Avoid common indexing and slicing errors."
  ],
  slides: [
    {
      kicker: "Python Data Structures",
      title: "Indexing and Slicing",
      body: "Indexing and slicing allow us to access specific items or parts of a sequence.",
      bullets: [
        "Indexing retrieves one item.",
        "Slicing retrieves multiple items.",
        "Strings, lists, and tuples support indexing and slicing."
      ]
    },
    {
      kicker: "Core Concept",
      title: "What Is Indexing?",
      body: "Indexing means accessing an item using its position.",
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\nprint(fruits[0])",
      output: "Apple"
    },
    {
      kicker: "Understanding Indexes",
      title: "Indexes Start at Zero",
      body: "In Python, the first item has index 0, not index 1.",
      bullets: [
        "First item: index 0.",
        "Second item: index 1.",
        "Third item: index 2."
      ],
      code: "numbers = [10, 20, 30, 40]\nprint(numbers[0])\nprint(numbers[1])\nprint(numbers[2])",
      output: "10\n20\n30"
    },
    {
      kicker: "Understanding Indexes",
      title: "Visualize the Indexes",
      body: "Each item has a position that we can use to access it.",
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\", \"Mango\"]",
      bullets: [
        "Apple → 0",
        "Banana → 1",
        "Orange → 2",
        "Mango → 3"
      ]
    },
    {
      kicker: "Indexing",
      title: "Access an Item",
      body: "We can use the index inside square brackets to access an item.",
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\"]\nprint(fruits[1])\nprint(fruits[2])",
      output: "Banana\nOrange"
    },
    {
      kicker: "Indexing",
      title: "Negative Indexes",
      body: "Negative indexes access items starting from the end of the sequence.",
      bullets: [
        "-1 is the last item.",
        "-2 is the second item from the end.",
        "-3 is the third item from the end."
      ],
      code: "fruits = [\"Apple\", \"Banana\", \"Orange\", \"Mango\"]\nprint(fruits[-1])\nprint(fruits[-2])",
      output: "Mango\nOrange"
    },
    {
      kicker: "Indexing",
      title: "Positive and Negative Indexes",
      body: "Positive indexes count from the beginning, while negative indexes count from the end.",
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[0])\nprint(numbers[-1])\nprint(numbers[2])\nprint(numbers[-3])",
      output: "10\n50\n30\n30"
    },
    {
      kicker: "Indexing",
      title: "Indexing in Strings",
      body: "Strings also support indexing because characters have positions.",
      code: "text = \"Python\"\nprint(text[0])\nprint(text[2])\nprint(text[-1])",
      output: "P\nt\nn"
    },
    {
      kicker: "Indexing",
      title: "Indexing in Tuples",
      body: "Tuples support indexing just like lists.",
      code: "colors = (\"Red\", \"Green\", \"Blue\")\nprint(colors[0])\nprint(colors[-1])",
      output: "Red\nBlue"
    },
    {
      kicker: "Indexing",
      title: "IndexError",
      body: "Accessing an index that does not exist raises an IndexError.",
      code: "numbers = [10, 20, 30]\nprint(numbers[5])",
      output: "IndexError: list index out of range",
      bullets: [
        "Valid indexes are 0, 1, and 2.",
        "Index 5 does not exist.",
        "The sequence must contain the requested index."
      ]
    },
    {
      kicker: "Slicing",
      title: "What Is Slicing?",
      body: "Slicing extracts a part of a sequence instead of accessing only one item.",
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[1:4])",
      output: "[20, 30, 40]"
    },
    {
      kicker: "Slicing Syntax",
      title: "Start and Stop",
      body: "A slice uses a start index and a stop index.",
      bullets: [
        "Start is included.",
        "Stop is excluded.",
        "The slice returns items before the stop index."
      ],
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[1:4])",
      output: "[20, 30, 40]"
    },
    {
      kicker: "Slicing",
      title: "Understanding the Slice",
      body: "In numbers[1:4], Python starts at index 1 and stops before index 4.",
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[1:4])",
      output: "[20, 30, 40]",
      bullets: [
        "Index 1 → 20",
        "Index 2 → 30",
        "Index 3 → 40",
        "Index 4 → excluded"
      ]
    },
    {
      kicker: "Slicing",
      title: "Start Only",
      body: "If the stop index is omitted, slicing continues to the end.",
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[2:])",
      output: "[30, 40, 50]"
    },
    {
      kicker: "Slicing",
      title: "Stop Only",
      body: "If the start index is omitted, slicing starts from the beginning.",
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[:3])",
      output: "[10, 20, 30]"
    },
    {
      kicker: "Slicing",
      title: "Copy the Entire Sequence",
      body: "We can omit both start and stop to select the entire sequence.",
      code: "numbers = [10, 20, 30]\nprint(numbers[:])",
      output: "[10, 20, 30]"
    },
    {
      kicker: "Slicing",
      title: "Negative Indexes in Slicing",
      body: "We can use negative indexes as start or stop values.",
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[-4:-1])",
      output: "[20, 30, 40]"
    },
    {
      kicker: "Slicing",
      title: "Slicing from the End",
      body: "Negative indexes can help us select the last items.",
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[-3:])\nprint(numbers[:-2])",
      output: "[30, 40, 50]\n[10, 20, 30]"
    },
    {
      kicker: "Slicing",
      title: "Using Step",
      body: "Step controls how many positions Python moves between selected items.",
      bullets: [
        "Step 1 selects every item in the range.",
        "Step 2 skips one item between selections.",
        "Step 3 skips two items between selections."
      ],
      code: "numbers = [10, 20, 30, 40, 50, 60]\nprint(numbers[::2])",
      output: "[10, 30, 50]"
    },
    {
      kicker: "Slicing",
      title: "Start, Stop, and Step",
      body: "We can specify all three values in a slice.",
      code: "numbers = [10, 20, 30, 40, 50, 60]\nprint(numbers[1:6:2])",
      output: "[20, 40, 60]"
    },
    {
      kicker: "Slicing",
      title: "Step of Three",
      body: "A step of three selects every third position within the slice.",
      code: "numbers = [10, 20, 30, 40, 50, 60, 70]\nprint(numbers[::3])",
      output: "[10, 40, 70]"
    },
    {
      kicker: "Slicing",
      title: "Reverse a Sequence",
      body: "A negative step can move through a sequence in reverse.",
      code: "numbers = [10, 20, 30, 40, 50]\nprint(numbers[::-1])",
      output: "[50, 40, 30, 20, 10]"
    },
    {
      kicker: "Slicing",
      title: "Reverse a String",
      body: "Slicing can reverse strings as well.",
      code: "text = \"Python\"\nprint(text[::-1])",
      output: "nohtyP"
    },
    {
      kicker: "Slicing",
      title: "Selecting a Range of Characters",
      body: "We can use slicing to extract part of a string.",
      code: "text = \"Programming\"\nprint(text[0:7])\nprint(text[3:])",
      output: "Program\ngramming"
    },
    {
      kicker: "Slicing",
      title: "Slicing Lists",
      body: "Slicing can extract parts of a list.",
      code: "students = [\"Ahmad\", \"Ali\", \"Mahmood\", \"Karim\", \"Farid\"]\nprint(students[1:4])",
      output: "['Ali', 'Mahmood', 'Karim']"
    },
    {
      kicker: "Slicing",
      title: "Slicing Tuples",
      body: "Slicing also works with tuples.",
      code: "numbers = (10, 20, 30, 40, 50)\nprint(numbers[1:4])",
      output: "(20, 30, 40)"
    },
    {
      kicker: "Important Concept",
      title: "Slicing Creates a New Sequence",
      body: "Slicing a list creates a new list containing the selected items.",
      code: "numbers = [10, 20, 30, 40]\npart = numbers[1:3]\npart[0] = 99\nprint(numbers)\nprint(part)",
      output: "[10, 20, 30, 40]\n[99, 30]"
    },
    {
      kicker: "Important Concept",
      title: "Indexing vs Slicing",
      body: "Indexing returns one item, while slicing returns a sequence of selected items.",
      code: "numbers = [10, 20, 30, 40]\nprint(numbers[1])\nprint(numbers[1:2])",
      output: "20\n[20]"
    },
    {
      kicker: "Common Mistakes",
      title: "Indexing and Slicing Mistakes",
      body: "Understand the rules to avoid common errors.",
      bullets: [
        "Forgetting that indexes start at zero.",
        "Using an index that does not exist.",
        "Expecting the stop index to be included.",
        "Confusing indexing with slicing.",
        "Using a step of zero.",
        "Misunderstanding negative indexes.",
        "Assuming slicing modifies the original list."
      ]
    },
    {
      kicker: "Practice",
      title: "Practice with a List",
      body: "Create a list of ten numbers and use indexing and slicing.",
      bullets: [
        "Print the first item.",
        "Print the last item.",
        "Print the third item.",
        "Print the last three items.",
        "Print the first five items.",
        "Print every second item.",
        "Reverse the list using slicing."
      ]
    },
    {
      kicker: "Practice",
      title: "Practice with a String",
      body: "Create a string containing your name or a word.",
      bullets: [
        "Print the first character.",
        "Print the last character.",
        "Print the first three characters.",
        "Print the last three characters.",
        "Reverse the string using slicing."
      ]
    },
    {
      kicker: "Review",
      title: "Indexing and Slicing Summary",
      body: "Indexing and slicing allow us to access and extract sequence data.",
      bullets: [
        "Indexing accesses one item.",
        "Positive indexes start at zero.",
        "Negative indexes start from the end.",
        "Slicing extracts a range.",
        "The stop index is excluded.",
        "Step controls movement.",
        "A negative step can reverse a sequence.",
        "Strings, lists, and tuples support indexing and slicing."
      ]
    }
  ],
  example: {
    explanation: "This example uses indexing and slicing to access items, select ranges, and reverse a list.",
    code: "numbers = [10, 20, 30, 40, 50, 60]\n\nprint(\"First:\", numbers[0])\nprint(\"Last:\", numbers[-1])\nprint(\"Middle:\", numbers[1:4])\nprint(\"Last three:\", numbers[-3:])\nprint(\"Every second:\", numbers[::2])\nprint(\"Reversed:\", numbers[::-1])",
    language: "python",
    output: "First: 10\nLast: 60\nMiddle: [20, 30, 40]\nLast three: [40, 50, 60]\nEvery second: [10, 30, 50]\nReversed: [60, 50, 40, 30, 20, 10]"
  },
  commonMistakes: [
    "Assuming the first index is 1 instead of 0.",
    "Accessing an index that is outside the sequence.",
    "Expecting the stop value in a slice to be included.",
    "Confusing a single index with a slice.",
    "Using a step value of zero.",
    "Misunderstanding negative indexes.",
    "Assuming slicing changes the original list.",
    "Assuming indexing and slicing work on sets or dictionaries in the same way as sequences."
  ],
  exercise: {
    question: "Create a list containing ten numbers from 10 to 100. Print the first item, the last item, the third item, the first four items, the last three items, every second item, every third item, and the list in reverse order. Then create a string containing the word PythonProgramming and use slicing to print Python, Programming, the last four characters, and the reversed string.",
    hint: "Use positive indexes, negative indexes, [start:stop], [::step], and [::-1]. Remember that stop is excluded."
  },
  solution: {
    explanation: "The solution demonstrates positive and negative indexing and multiple slicing patterns with lists and strings.",
    code: "numbers = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]\n\nprint(\"First:\", numbers[0])\nprint(\"Last:\", numbers[-1])\nprint(\"Third:\", numbers[2])\nprint(\"First four:\", numbers[:4])\nprint(\"Last three:\", numbers[-3:])\nprint(\"Every second:\", numbers[::2])\nprint(\"Every third:\", numbers[::3])\nprint(\"Reversed:\", numbers[::-1])\n\ntext = \"PythonProgramming\"\nprint(\"Python:\", text[:6])\nprint(\"Programming:\", text[6:])\nprint(\"Last four:\", text[-4:])\nprint(\"Reversed string:\", text[::-1])",
    output: "First: 10\nLast: 100\nThird: 30\nFirst four: [10, 20, 30, 40]\nLast three: [80, 90, 100]\nEvery second: [10, 30, 50, 70, 90]\nEvery third: [10, 40, 70, 100]\nReversed: [100, 90, 80, 70, 60, 50, 40, 30, 20, 10]\nPython: Python\nProgramming: Programming\nLast four: ming\nReversed string: gnimmargorPnohtyP",
  },
  quiz: [
    {
      question: "What is the index of the first item in a Python list?",
      options: ["1", "-1", "0", "2"],
      answer: 2,
      explanation: "Python uses zero-based indexing."
    },
    {
      question: "What does numbers[-1] access?",
      options: [
        "The first item",
        "The last item",
        "The second item",
        "The item at index 1"
      ],
      answer: 1,
      explanation: "Negative index -1 accesses the last item."
    },
    {
      question: "What does numbers[1:4] select?",
      options: [
        "Items at indexes 1, 2, and 3",
        "Items at indexes 1, 2, 3, and 4",
        "Items at indexes 0, 1, and 2",
        "Only item 4"
      ],
      answer: 0,
      explanation: "The start is included and the stop is excluded."
    },
    {
      question: "What does numbers[:3] mean?",
      options: [
        "Start from index 3",
        "Select the first three items",
        "Select the last three items",
        "Select only index 3"
      ],
      answer: 1,
      explanation: "Omitting the start means slicing begins at the beginning."
    },
    {
      question: "What does numbers[::2] do?",
      options: [
        "Reverses the list",
        "Selects every second item",
        "Selects the last two items",
        "Deletes every second item"
      ],
      answer: 1,
      explanation: "A step of 2 selects every second position."
    },
    {
      question: "What does numbers[::-1] do?",
      options: [
        "Sorts the list",
        "Deletes the list",
        "Reverses the sequence",
        "Selects the first item"
      ],
      answer: 2,
      explanation: "A negative step of -1 traverses the sequence backward."
    },
    {
      question: "What is the difference between numbers[2] and numbers[2:3]?",
      options: [
        "They are always identical types.",
        "numbers[2] returns one item, while numbers[2:3] returns a sequence containing that item.",
        "numbers[2:3] deletes an item.",
        "numbers[2] returns a list."
      ],
      answer: 1,
      explanation: "Indexing returns one item, while slicing returns a sequence."
    },
    {
      question: "What happens when the stop index is excluded?",
      options: [
        "Python skips the start index.",
        "Python includes the stop index.",
        "Python stops before the stop index.",
        "Python reverses the sequence."
      ],
      answer: 2,
      explanation: "The stop index is not included in the slice."
    }
  ],
  takeaways: [
    "Indexing accesses one item by position.",
    "Python indexes start at zero.",
    "Negative indexes count from the end.",
    "Slicing extracts a sequence of items.",
    "The slice stop index is excluded.",
    "Step controls how slicing moves.",
    "Negative steps can reverse sequences.",
    "Strings, lists, and tuples support indexing and slicing."
  ],
  teacherNotes: "Begin with the index positions of a list on the screen. Draw positive indexes from left to right and negative indexes from right to left. Teach indexing before slicing. For slicing, explain start, stop, and step individually. Use visual tracing and ask students to predict each result before running the code. Focus on the excluded stop index, negative indexes, and reverse slicing. Students already learned basic indexing and slicing in earlier lessons, so connect this lesson to those earlier examples rather than treating the topic as entirely new.",
  teachingTime: "90-120 minutes"
};