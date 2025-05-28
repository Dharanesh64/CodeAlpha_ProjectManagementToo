function addTask() {
  const project = document.getElementById("projectName").value;
  const task = document.getElementById("taskName").value;
  const assigned = document.getElementById("assignedTo").value;

  if (!project || !task || !assigned) {
    alert("Please fill all fields!");
    return;
  }

  const taskBox = document.createElement("div");
  taskBox.className = "task";
  taskBox.innerHTML = `
    <h3>📌 ${project}</h3>
    <p><strong>Task:</strong> ${task}</p>
    <p><strong>Assigned to:</strong> ${assigned}</p>
    <button onclick="markDone(this)">✅ Done</button>
    <div class="comment-section">
      <input type="text" placeholder="Write a comment..." onkeydown="if(event.key==='Enter'){addComment(this)}" />
      <div class="comments"></div>
    </div>
  `;

  document.getElementById("taskList").appendChild(taskBox);

  document.getElementById("projectName").value = "";
  document.getElementById("taskName").value = "";
  document.getElementById("assignedTo").value = "";
}

function markDone(button) {
  button.parentElement.style.background = "#d4edda";
  button.remove();
}

function addComment(input) {
  const commentText = input.value.trim();
  if (commentText) {
    const commentBox = input.nextElementSibling;
    const p = document.createElement("p");
    p.innerText = commentText;
    commentBox.appendChild(p);
    input.value = "";
  }
}
