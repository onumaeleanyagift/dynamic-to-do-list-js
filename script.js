document.addEventListener("DOMContentLoaded", () => {
    // Select DOM elements
    const addButton = document.getElementById("add-task-btn");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    // Load tasks from Local Storage on page load
    function loadTasks() {
        const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks.forEach(taskText => addTask(taskText, false));
    }

    // Function to add a task
    function addTask(taskText = null, save = true) {
        const taskTextValue = taskText || taskInput.value.trim();

        if (taskTextValue === "") {
            alert("Please enter a task.");
            return;
        }

        // Create list item and remove button
        const listItem = document.createElement("li");
        listItem.textContent =taskTextValue;

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("remove-btn");
        removeButton.onclick = () => removeTask(listItem, taskTextValue);

        // Append elements
        listItem.appendChild(removeButton);
        taskList.appendChild(listItem);

        // Save to Local Storage if required
        if (save) {
            const storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
            storedTasks.push(taskTextValue);
            localStorage.setItem("tasks", JSON.stringify(storedTasks));
        }

        // Clear input field
        taskInput.value = "";

    }

    function removeTask(listItem, taskText) {
        taskList.removeChild(listItem);

        let storedTasks = JSON.parse(localStorage.getItem("tasks") || "[]");
        storedTasks = storedTasks.filter(tasj => task !== taskText);
        localStorage.setItem("tasks", JSON.stringify(storedTasks));
    }

    // Event listeners for adding tasks
    addButton.addEventListener("click", () => addTask());
    taskInput.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            addTask();
        }
    });

    loadTasks();
});