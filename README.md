# Python Teaching Academy

A static, offline-friendly teaching workspace for the complete 166-topic Python curriculum.

## Run locally

No package installation is required. Open `index.html` directly, or serve the folder with any static server:

```powershell
python -m http.server 4173
```

Then open `http://localhost:4173/`.

## Included

- All 166 official topics grouped into 20 learning tracks.
- Slide-style teaching sections for authored lessons; draft topics show an explicit content-needed placeholder until written.
- Search by topic number, title, category, and keywords.
- Direct lesson URLs using the URL hash, such as `/#103`.
- Dark/light theme saved in localStorage.
- Completion tracking, bookmarks, reset progress, and local persistence.
- Completion and bookmarks are stored per visitor browser in first-party cookies; they are not shared as one global progress state. (Without login, separate people using the same browser share that browser's cookie.)
- Presentation mode with keyboard navigation: Right/Left arrows, `F`, and `Esc`.
- Copyable Python examples with clearly labelled expected output where the original site already had an example.
- Teacher notes and revealable practice guidance.
- Responsive layout with mobile sidebar drawer.

## How to Add or Edit a Lesson

Open the matching file, such as `lessons/lesson-007.js`, and edit the exported lesson object. Keep its `id`, `title`, and `category` aligned with the curriculum. Set `contentStatus: "authored"` when the student-facing content is ready; keep `"needs-content"` while it is still a placeholder.

### How to Add a New Slide

Add an object to the lesson's `slides` array:

```js
{
  kicker: "06 · Practice",
  title: "A new idea",
  body: "Explain the idea in two or three clear sentences.",
  bullets: ["First point", "Second point"]
}
```

Slides may also include `code`, `language`, and `output`.

### How to Add a Code Example

Put code beside the explanatory text when helpful:

```js
example: {
  explanation: "A short explanation.",
  code: "name = 'Sahel'\\nprint(name)",
  language: "python",
  output: "Sahel"
}
```

For a presentation slide, use the same fields inside a slide object.

### How to Add an Exercise

Edit the `exercise` and `solution` objects. The solution explanation remains hidden until the student chooses “Reveal teacher answer”.

### How to Add a Quiz

Add question objects to `quiz`. The first option is answer `0`:

```js
quiz: [{
  question: "Which value is a string?",
  options: ["42", "'Python'", "True"],
  answer: 1,
  explanation: "Quoted text is a string."
}]
```

### How to Add Teacher Notes

Write private-facing guidance in `teacherNotes`. It appears in the teacher notes card and is not included in presentation mode.

### How to Add a New Lesson

1. Create `lessons/lesson-167.js` by copying an existing lesson object.
2. Set its `id`, `title`, `category`, and lesson content.
3. Add `167: "lessons/lesson-167.js"` to `lessons/index.js`.
4. Add the topic to the curriculum in `app.js` if it belongs in the 166-topic course.
5. Refresh the static site.

The lesson number, curriculum entry, and registry entry must agree.

## Files

- `index.html` — static application shell and script order.
- `styles.css` — responsive visual system and presentation styling.
- `app.js` — application logic, rendering, navigation, search, state, and interactions; it derives the curriculum from lesson metadata.
- `lessons/index.js` — numeric lesson ID to content-file registry.
- `lessons/lesson-001.js` through `lesson-166.js` — one editable content file per topic.

The site is intentionally dependency-free so the core lessons work without a backend, login, database, paid API, or network connection.
