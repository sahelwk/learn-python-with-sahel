
window.lessonData = window.lessonData || {};
window.lessonData[6] = {
  "id": 6,
  "title": "Programming Then and Now: The AI Era",
  "category": "Programming Introduction",
  "contentStatus": "authored",
  "introduction": "Programming has changed significantly with the growth of artificial intelligence tools. Before AI coding assistants became widely available, programmers usually wrote most code themselves, searched documentation, and investigated errors manually. Today, AI tools can help explain concepts, generate code, suggest fixes, and speed up development. However, programmers still need to understand, review, test, and maintain their software.",
  "definition": "Programming then and now compares traditional software development with modern development that uses AI tools to assist with coding, debugging, learning, and problem-solving.",
  "whyItMatters": "Learners need to understand how AI changes a programmer's workflow, where AI can help, and why programming knowledge, logical thinking, testing, and security remain important.",
  "objectives": [
    "Describe common programming practices before AI coding assistants became widely available.",
    "Explain how AI tools can assist with writing, understanding, and debugging code.",
    "Identify the benefits and limitations of AI-assisted programming.",
    "Use AI as an assistant while checking code and understanding its behavior."
  ],
  "slides": [
    {
      "kicker": "Introduction",
      "title": "Programming Then and Now",
      "body": "Programming is the process of creating instructions that computers can execute. AI tools have changed how many developers write and understand code, but the goal remains the same: solve problems by building useful software.",
      "bullets": [
        "Then: programmers generally wrote and investigated more code manually.",
        "Now: AI assistants can help generate, explain, and review code.",
        "Both approaches require logical thinking and testing."
      ]
    },
    {
      "kicker": "Before AI Assistants",
      "title": "How Programmers Worked Before",
      "body": "Before AI coding assistants became widely available, programmers commonly wrote code themselves, read documentation, searched websites and forums, and tested different solutions to solve problems.",
      "bullets": [
        "Write code based on requirements and technical knowledge.",
        "Read documentation and search for examples.",
        "Investigate errors and test possible fixes.",
        "Ask colleagues or experienced developers for help when needed."
      ]
    },
    {
      "kicker": "Traditional Workflow",
      "title": "A Traditional Programming Example",
      "body": "Imagine building a login page in Laravel. A developer would normally study the requirements, create routes and controllers, build a form, validate input, connect the authentication logic, and test the result. Frameworks already automated many tasks, even before AI assistants became popular.",
      "bullets": [
        "Understand the feature requirements.",
        "Write and connect the required code.",
        "Search documentation when something is unclear.",
        "Test the feature and correct errors."
      ]
    },
    {
      "kicker": "With AI",
      "title": "How AI Helps Programmers Today",
      "body": "AI coding assistants can generate code from a description, explain unfamiliar code, suggest ways to fix errors, create tests, and help developers understand a project. The developer still needs to decide whether the suggestions are correct and suitable.",
      "bullets": [
        "Describe a task in ordinary language.",
        "Ask AI to suggest or explain code.",
        "Review the generated solution.",
        "Run tests and make corrections."
      ]
    },
    {
      "kicker": "Same Task, Different Workflow",
      "title": "Writing Code With and Without AI",
      "body": "Consider a small program that adds two numbers. Without AI, a learner can write the code from what they have learned. With AI, the learner can ask for an example and an explanation. In both cases, the learner should understand the code and verify its output.",
      "bullets": [
        "Traditional approach: write the solution using your knowledge.",
        "AI-assisted approach: ask for help, then inspect the suggested solution.",
        "Both approaches should produce the correct result.",
        "Understanding is more important than simply copying code."
      ]
    },
    {
      "kicker": "Benefits",
      "title": "Advantages of AI-Assisted Programming",
      "body": "AI can help programmers move faster on some tasks and make learning more interactive. It can offer examples, explain difficult concepts, and suggest possible solutions. Its usefulness depends on the task and the quality of the instructions and review.",
      "bullets": [
        "Get explanations of unfamiliar concepts.",
        "Create initial code examples more quickly.",
        "Explore possible fixes for errors.",
        "Generate test ideas and documentation drafts.",
        "Spend more time evaluating the solution and solving the real problem."
      ]
    },
    {
      "kicker": "Limitations",
      "title": "AI Can Make Mistakes",
      "body": "AI-generated code can be incorrect, incomplete, insecure, outdated, or unsuitable for a particular project. A program that runs successfully is not necessarily correct or safe. Developers must check the code and test important behavior.",
      "bullets": [
        "Do not trust every AI answer without checking it.",
        "Test the program with different inputs.",
        "Review security and privacy risks.",
        "Never paste passwords, private keys, or confidential work data into an AI tool unless its use is explicitly approved and appropriate.",
        "Learn the fundamentals instead of relying only on generated code."
      ]
    },
    {
      "kicker": "Practical Example",
      "title": "A Simple Python Program",
      "body": "This program adds two numbers. A learner can write it independently or ask an AI assistant to explain it. The important point is to understand what each line does and check that the output is correct.",
      "bullets": [
        "Variables store the two numbers.",
        "The plus sign performs addition.",
        "The print() function displays the result.",
        "The expected output is 50."
      ]
    },
    {
      "kicker": "The Programmer's Role",
      "title": "AI Is an Assistant, Not a Replacement for Understanding",
      "body": "AI can assist with many programming tasks, but people still need to define requirements, make design decisions, understand the system, review generated code, protect data, and take responsibility for the final result.",
      "bullets": [
        "Understand the problem before asking for code.",
        "Give AI clear requirements and useful context.",
        "Review and test the generated result.",
        "Fix problems and learn from the explanation.",
        "Use human judgment for important technical decisions."
      ]
    },
    {
      "kicker": "Summary",
      "title": "Programming Before AI and With AI",
      "body": "AI has changed the programming workflow by providing a new kind of assistant. Traditional programming skills remain valuable, and combining those skills with careful use of AI can make development and learning more effective.",
      "bullets": [
        "Before AI assistants became widespread, many coding tasks were performed manually.",
        "Today, AI can help generate, explain, and review code.",
        "AI output must be checked, tested, and secured.",
        "The core skills remain problem-solving, logic, and understanding software."
      ]
    }
  ],
  "example": {
    "explanation": "This example adds two numbers. A programmer can write it manually or ask an AI assistant to explain or generate a similar example. In either case, the programmer should understand the code and verify the result.",
    "code": "number1 = 20\nnumber2 = 30\n\nresult = number1 + number2\n\nprint(result)",
    "language": "python",
    "output": "50"
  },
  "commonMistakes": [
    "Thinking AI invented programming. Programming existed long before modern AI coding assistants.",
    "Thinking AI always generates correct code. AI suggestions can contain mistakes and security problems.",
    "Copying code without understanding what it does.",
    "Assuming that a program is correct just because it runs without an error.",
    "Believing traditional programming skills are no longer needed.",
    "Sharing confidential source code, credentials, or private data with an AI tool without checking the applicable permissions and policies."
  ],
  "exercise": {
    "question": "Write a Python program that adds 20 and 30. Then imagine asking an AI assistant to create the same program. Explain two ways AI could help and one thing you must check before using its answer.",
    "hint": "Check whether the code uses the correct operator, produces the expected output, and makes sense to you."
  },
  "solution": {
    "explanation": "The program stores 20 and 30 in variables, adds them, and displays 50. AI could help explain the code or suggest a solution more quickly. Before using AI-generated code, check that it is correct, understandable, and appropriate for the task.",
    "code": "number1 = 20\nnumber2 = 30\nresult = number1 + number2\nprint(result)",
    "output": "50"
  },
  "quiz": [
    {
      "question": "How did many programmers work before AI coding assistants became widely available?",
      "options": [
        "They relied entirely on AI to write their code.",
        "They wrote code, read documentation, and investigated errors themselves.",
        "They did not need to test their programs."
      ],
      "answer": 1,
      "explanation": "Programmers commonly wrote and tested code themselves and used documentation, search, and help from other developers."
    },
    {
      "question": "Which task can an AI coding assistant help with?",
      "options": [
        "Guaranteeing that every program is secure",
        "Removing the need to understand code",
        "Explaining code and suggesting possible fixes"
      ],
      "answer": 2,
      "explanation": "AI can explain code and suggest fixes, but the programmer must verify the suggestions."
    },
    {
      "question": "What should you do before using AI-generated code?",
      "options": [
        "Review it, understand it, and test it.",
        "Copy it without reading it.",
        "Assume it is correct if it looks professional."
      ],
      "answer": 0,
      "explanation": "AI-generated code may contain mistakes, so review and testing are essential."
    },
    {
      "question": "Which skill remains important when using AI for programming?",
      "options": [
        "Never reading the code",
        "Logical thinking and problem-solving",
        "Avoiding all tests"
      ],
      "answer": 1,
      "explanation": "AI can assist with code, but developers still need to understand problems and evaluate solutions."
    }
  ],
  "takeaways": [
    "Programming existed long before modern AI coding assistants.",
    "Traditional programming often involved writing and investigating code manually.",
    "AI tools can help generate, explain, review, and test code.",
    "AI can make mistakes, so generated code must be checked and tested.",
    "Programming fundamentals, logical thinking, and problem-solving remain essential.",
    "Use AI responsibly and protect confidential information."
  ],
  "teacherNotes": "Start by asking students how they think programmers solved problems before AI assistants became common. Compare writing a short Python program manually with asking an AI assistant to explain or generate it. Make clear that AI is not the same as programming itself and that programming tools and automation existed before generative AI. Demonstrate how to review and test a generated answer rather than copying it blindly. Discuss incorrect outputs, security, privacy, and the importance of understanding code. Do not require students to use a paid AI tool; the lesson can be taught with discussion and the provided Python example.",
  "teachingTime": "45-50 minutes"
};
