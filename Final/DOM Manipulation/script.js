document.addEventListener("DOMContentLoaded", () => {
  const taskInput = document.getElementById("taskInput");
  const addTaskButton = document.getElementById("addTask");
  const taskList = document.getElementById("taskList");
  const categorySelect = document.getElementById("categorySelect"); // Add dropdown to select a category

  addTaskButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    const selectedCategory = categorySelect.value; // Get selected category from dropdown
    if (taskText !== "") {
      const li = document.createElement("li");

      const taskSpan = document.createElement("span");
      taskSpan.textContent = taskText;
      li.appendChild(taskSpan);

      const categorySpan = document.createElement("span"); // Display selected category
      categorySpan.textContent = ` (${selectedCategory})`; 
      li.appendChild(categorySpan);

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "ลบ";
      deleteButton.classList.add("delete");

      deleteButton.addEventListener("click", () => {
        const confirmDelete = confirm("แน่ใจว่าจะลบรายการนี้?");
        if (confirmDelete) {
          li.remove();
        }
      });

      li.appendChild(deleteButton);

      li.addEventListener("click", () => {
        li.classList.toggle("completed");
      });

      taskList.appendChild(li);

      taskInput.value = "";
    }
  });
});
