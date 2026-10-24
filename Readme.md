# To Do List

A simple to-do list web app built with HTML, CSS and JavaScript. Add tasks, tick them off when they're done, and delete them. Your list is saved in the browser, so it is still there after you refresh the page.

## Features

- Add a task by typing it and pressing the **Add** button
- Click a task to mark it as done (it gets a line through it), and click again to undo
- Click the **×** right after a task to delete it
- Tasks are saved automatically with `localStorage`, so they survive a page refresh
- An empty task, or one made only of spaces, is rejected with an alert

## Built With

- HTML5
- CSS3 (flexbox, gradient background, Poppins font)
- JavaScript (vanilla, no libraries)

## Project Structure

```
todo-list/
├── index.html
├── style.css
├── script.js
└── images/
    ├── icon.png
    ├── unchecked.png
    └── checked.png
```

## How to Run

1. Download or clone the project.
2. Make sure the file names match what `index.html` expects: `style.css` and `script.js`.
3. Put the images in an `images` folder next to `index.html`, using the names shown above.
4. Open `index.html` in your browser.

No installation or server is needed.

## How It Works

- `addTask()` reads the input box, rejects empty text, then creates a new `<li>` with the task text and a `<span>` holding the **×**.
- A single click listener on the list handles everything. Clicking an `<li>` toggles its `checked` class, and clicking a `<span>` removes its parent task.
- `savedata()` stores the list's HTML in `localStorage` after every change. `showTask()` loads it back when the page opens.

## Known Limitations

- Tasks are stored in one browser on one device, so they don't sync between devices or browsers.
- Clearing the browser's site data deletes the list.
- Tasks can't be edited after they are added.
- Pressing Enter in the input box does not add a task yet. You need to click **Add**.

## Ideas for Later

- Add a task with the Enter key
- Edit an existing task
- Show how many tasks are left
- Filter by all, active and completed

## Author

Add your name here.