
window.lessonData = window.lessonData || {};

window.lessonData[2] = {
  "id": 2,
  "title": "What is a Computer?",
  "category": "Programming Introduction",
  "contentStatus": "authored",

  "introduction": "A computer is an electronic machine that receives information, works with that information according to instructions, and gives us a result. We use computers for writing, calculations, learning, communication, storing information, and many other tasks. In this lesson, students learn what a computer is through familiar examples from everyday life.",

  "definition": "A computer is an electronic machine that accepts data, processes it according to instructions, and produces useful information or results.",

  "whyItMatters": "Understanding computers is the first step toward learning programming. Before we can tell a computer what to do, we need to understand what it does, how it receives information, how it processes instructions, and how it shows results.",

  "objectives": [
    "Explain what a computer is in simple words.",
    "Identify common computers and computer-like devices used in everyday life.",
    "Understand the basic Input, Process, Output, and Storage concepts.",
    "Identify the main parts of a desktop computer.",
    "Explain the difference between hardware and software.",
    "Describe how a computer helps people in everyday life."
  ],

  "slides": [
    {
      "kicker": "01 · Basic idea",
      "title": "What Is a Computer?",
      "body": "A computer is an electronic machine that helps us do different kinds of work. It can receive information, follow instructions, perform calculations, and show results. A computer does not understand our wishes automatically; it needs instructions or software to perform its tasks.",
      "bullets": [
        "A computer is an electronic machine.",
        "It can calculate numbers very quickly.",
        "It can store information for later use.",
        "It can help us write documents, watch videos, use the internet, and communicate.",
        "Examples include desktop computers, laptops, and many other digital devices."
      ]
    },
    {
      "kicker": "02 · Everyday examples",
      "title": "Where Do We See Computers?",
      "body": "Computers are not used only in offices. We find them in schools, hospitals, banks, shops, homes, and many other places. Different devices are designed for different tasks.",
      "bullets": [
        "Desktop computer: used in offices, schools, and homes.",
        "Laptop: a portable computer that we can carry from one place to another.",
        "ATM: uses a computer system to help customers withdraw money and check account information.",
        "Smartphone: a powerful digital device that performs many computer-like tasks.",
        "Hospital systems: help staff manage patient information and appointments."
      ]
    },
    {
      "kicker": "03 · How it works",
      "title": "Input, Process, and Output",
      "body": "Imagine using a calculator to add 5 and 3. You enter the numbers, the calculator works out the answer, and then it displays 8. A computer follows a similar basic pattern.",
      "bullets": [
        "Input: the information we give to the computer, such as numbers typed with a keyboard.",
        "Process: the computer works on the information according to instructions.",
        "Output: the result the computer gives us, such as a number shown on the screen.",
        "Example: Input 5 and 3 → Process addition → Output 8."
      ]
    },
    {
      "kicker": "04 · Simple demonstration",
      "title": "A Computer as a Helpful Assistant",
      "body": "Suppose a teacher wants to calculate the total marks of a student. The teacher enters the marks into a computer. The computer adds them according to the instructions in the program and displays the total.",
      "bullets": [
        "Input: 15, 18, and 17 marks.",
        "Process: add the three numbers.",
        "Output: 50 total marks.",
        "The computer performs the calculation quickly, but the result depends on the information and instructions provided."
      ]
    },
    {
      "kicker": "05 · Main parts",
      "title": "The Main Parts of a Desktop Computer",
      "body": "A desktop computer usually has several parts. Each part has a different job. Together, they help the user enter information, process instructions, and see or hear results.",
      "bullets": [
        "Monitor: the screen where we see text, pictures, and results.",
        "Keyboard: used to type letters, numbers, and commands.",
        "Mouse: used to move the pointer and select items on the screen.",
        "System unit: the main case containing important components such as the processor, memory, and storage.",
        "Speakers: produce sound when needed.",
        "Note: the monitor, keyboard, and mouse are different from the processor inside the system unit."
      ]
    },
    {
      "kicker": "06 · Hardware and software",
      "title": "Hardware vs. Software",
      "body": "A computer system includes physical parts and programs. The physical parts are called hardware. The programs and instructions that tell the computer what to do are called software.",
      "bullets": [
        "Hardware: parts we can physically touch, such as a keyboard, monitor, mouse, and computer components.",
        "Software: programs and applications, such as a web browser, a text editor, or a calculator application.",
        "Example: the keyboard is hardware; the application used to write a document is software.",
        "Hardware and software work together to help us complete tasks."
      ]
    },
    {
      "kicker": "07 · Storage",
      "title": "How Does a Computer Keep Information?",
      "body": "A computer can save information so that we can use it again later. For example, when we write a document and save it, we can open that document again without writing everything from the beginning.",
      "bullets": [
        "Storage keeps files and information for later use.",
        "Examples include an SSD, a hard disk, and a USB flash drive.",
        "Files can contain documents, pictures, videos, and programs.",
        "Saving a file is different from merely seeing information on the screen."
      ]
    },
    {
      "kicker": "08 · Classroom activity",
      "title": "Practice the Input-Process-Output Pattern",
      "body": "Ask students to imagine a computer that calculates the total price of two items. Let them identify what information goes in, what work is done, and what result comes out.",
      "bullets": [
        "Input: item prices of 20 and 30.",
        "Process: add the two prices.",
        "Output: total price of 50.",
        "Ask students to give another example, such as calculating exam marks or counting books."
      ]
    },
    {
      "kicker": "09 · Review",
      "title": "Review and Homework",
      "body": "Review the meaning of a computer and its main functions. Ask students to explain the lesson in their own words instead of memorizing the definition.",
      "bullets": [
        "Explain what a computer is.",
        "Give three examples of computers or computer-based devices.",
        "Explain Input, Process, and Output using one example.",
        "Name three hardware parts and give one example of software.",
        "Homework: draw a desktop computer, label its main parts, and write one sentence about the job of each part."
      ]
    }
  ],

  "example": {
    "explanation": "This Python example shows how a computer can process two numbers and display their sum. The numbers are stored in variables, addition is performed, and print() displays the result.",
    "code": "first_number = 5\nsecond_number = 3\ntotal = first_number + second_number\nprint(total)",
    "language": "python",
    "output": "8"
  },

  "commonMistakes": [
    "Thinking that a computer is only a desktop machine. Laptops and many other digital devices also perform computer-like tasks.",
    "Confusing the monitor with the whole computer. The monitor is only one part of a typical desktop setup.",
    "Thinking that hardware and software mean the same thing. Hardware is physical equipment, while software consists of programs and instructions.",
    "Thinking that a computer always gives the correct answer. Incorrect input or incorrect instructions can produce an incorrect result.",
    "Confusing input with output. Input is information provided to the computer; output is the result it produces.",
    "Thinking that every device works exactly like a general-purpose computer. Some devices have specialized functions and limited capabilities."
  ],

  "exercise": {
    "question": "Write a Python program that adds 10 and 20 and displays the result. Then identify the input, the process, and the output in your example.",
    "hint": "Store the two numbers in variables, add them with the + operator, and display the result using print()."
  },

  "solution": {
    "explanation": "The program stores 10 and 20 in two variables, adds the values, and displays the total. The input values are 10 and 20, the process is addition, and the output is 30.",
    "code": "first_number = 10\nsecond_number = 20\ntotal = first_number + second_number\nprint(total)",
    "output": "30"
  },

  "quiz": [
    {
      "question": "What is a computer?",
      "options": [
        "An electronic machine that processes information according to instructions",
        "A machine used only for playing games",
        "A device used only to display pictures"
      ],
      "answer": 0,
      "explanation": "A computer can receive and process information, follow instructions, and produce results."
    },
    {
      "question": "What is input?",
      "options": [
        "The final result displayed by the computer",
        "Information given to the computer",
        "The physical computer case only"
      ],
      "answer": 1,
      "explanation": "Input is the information we provide to a computer, such as numbers typed with a keyboard."
    },
    {
      "question": "If a computer adds 5 and 3, what is the output?",
      "options": [
        "2",
        "15",
        "8"
      ],
      "answer": 2,
      "explanation": "The computer adds 5 and 3 and displays 8."
    },
    {
      "question": "Which of these is hardware?",
      "options": [
        "A keyboard",
        "A calculator application",
        "A web browser"
      ],
      "answer": 0,
      "explanation": "A keyboard is a physical part that we can touch, so it is hardware."
    },
    {
      "question": "Which of these is software?",
      "options": [
        "A mouse",
        "A text editor application",
        "A monitor"
      ],
      "answer": 1,
      "explanation": "A text editor application is software because it is a program."
    },
    {
      "question": "What is the main purpose of computer storage?",
      "options": [
        "To keep information for later use",
        "To type letters",
        "To display images only"
      ],
      "answer": 0,
      "explanation": "Storage allows us to save files and information and use them again later."
    }
  ],

  "takeaways": [
    "A computer is an electronic machine that processes information according to instructions.",
    "Input is information given to a computer.",
    "Process is the work performed on that information.",
    "Output is the result produced by the computer.",
    "Hardware means physical parts, while software means programs and instructions.",
    "Computers can store information for later use.",
    "Computers are useful in education, business, healthcare, communication, and many other fields."
  ],

  "teacherNotes": "Suggested teaching time is 45–60 minutes. Begin by asking students where they have seen computers in daily life. Explain the definition using familiar examples rather than technical language. Demonstrate Input → Process → Output with a calculator or the example of adding marks. If a computer is available, run the Python example and ask students to predict the output first. Show physical computer parts if possible. Explain hardware and software with objects and applications students already know. Finish with the quiz and homework. This lesson introduces basic computer concepts; detailed hardware architecture and computer science terminology can be taught later when the curriculum reaches those topics.",

  "teachingTime": "45-60 minutes"
};
