document.getElementById("date").textContent = new Date().toDateString();

    function switchTab(tabId) {
      document.querySelectorAll(".task-list").forEach(list => list.classList.remove("active"));
      document.querySelectorAll(".tab").forEach(tab => tab.classList.remove("active"));
      document.getElementById(tabId).classList.add("active");
      const tabs = document.querySelectorAll(".tab");
      tabs.forEach(tab => {
        const onClickValue = tab.getAttribute("onclick");
        if (onClickValue && onClickValue.includes(tabId)) {
          tab.classList.add("active");
        }
      });
    }

    function openAddTaskPage() {
      document.querySelector(".container").style.display = "none";
      document.getElementById("addTaskPage").style.display = "block";
    }

    function goBackHome() {
      document.querySelector(".container").style.display = "block";
      document.getElementById("addTaskPage").style.display = "none";
    }

    function saveFullPageTask() {
      const titleInput = document.getElementById("taskTitle");
      const noteInput = document.getElementById("taskNote");
      const dateInput = document.getElementById("taskDate");
      const category = document.getElementById("taskCategory").value;

      const title = titleInput.value.trim();
      const note = noteInput.value.trim();
      const date = dateInput.value;

      if (!title) {
        alert("Please enter a task title!");
        return;
      }

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = `${title}${note ? ' - ' + note : ''}${date ? ' | ' + date : ''}`;
      span.classList.add("task-text");
      span.onclick = () => li.classList.toggle("completed");

      const doneBtn = document.createElement("button");
      doneBtn.textContent = "✔ Done";
      doneBtn.classList.add("action-btn", "done-btn");
      doneBtn.onclick = () => li.classList.add("completed");

      const undoneBtn = document.createElement("button");
      undoneBtn.textContent = "↺ Undone";
      undoneBtn.classList.add("action-btn", "undone-btn");
      undoneBtn.onclick = () => li.classList.remove("completed");

      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "🗑 Delete";
      deleteBtn.classList.add("action-btn", "delete-btn");
      deleteBtn.onclick = () => li.remove();

      const actions = document.createElement("div");
      actions.classList.add("task-actions");
      actions.appendChild(doneBtn);
      actions.appendChild(undoneBtn);
      actions.appendChild(deleteBtn);

      li.appendChild(span);
      li.appendChild(actions);

      document.getElementById(category).appendChild(li);

      // Clear input fields
      titleInput.value = "";
      noteInput.value = "";
      dateInput.value = "";

      goBackHome();
    }
