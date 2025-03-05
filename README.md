# To-Do List Application

## Overview

This To-Do List application allows users to add, display, and remove tasks. It also leverages Local Storage to persist tasks across browser sessions.

## Features

- Add new tasks
- Display tasks in a list
- Remove tasks individually
- Save tasks in Local Storage to maintain them across sessions

## Technologies Used

- HTML
- CSS
- JavaScript (DOM Manipulation, Local Storage)

## Installation & Usage

1. Clone this repository or download the files.
2. Open `index.html` in a web browser.
3. Enter a task in the input field and click the "Add Task" button or press Enter.
4. To remove a task, click the "Remove" button next to it.
5. The tasks will persist even after refreshing the page.

## File Structure

- `index.html` - The main HTML structure.
- `styles.css` - Contains styling for the UI.
- `script.js` - Handles the application logic, including event listeners and Local Storage.

## JavaScript Implementation

- **Event Listeners**: The script waits for `DOMContentLoaded` to ensure the page is fully loaded before executing.
- **Adding Tasks**: The `addTask` function creates a new `<li>` element with a remove button.
- **Removing Tasks**: Clicking the "Remove" button deletes the task from the UI and updates Local Storage.
- **Local Storage**: Tasks are stored and retrieved from `localStorage` to persist across sessions.

## Future Enhancements

- Implement task editing functionality.
- Add categories or labels for tasks.
- Implement drag-and-drop task sorting.

## License

This project is open-source and free to use.