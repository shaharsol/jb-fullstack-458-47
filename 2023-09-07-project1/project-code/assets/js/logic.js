// CRUD

// create
function addTask(content, date, time) {
  // Zeev's style
  // const task = new Object(); // {}
  // task.content = content; // {content: "abc"}
  // task.date = date; // {content: "abc", date: "1.1.2010"}
  // task.time = time;

  // const task = new Object(); // {}
  // task.content = "abc"; // {content: "abc"}
  // task.date = "1.1.2010"; // {content: "abc", date: "1.1.2010"}
  // task.time = "18:00";

  // create a new JSON to represent the new task
  const task = {
    content,
    date,
    time,
  };

  // functional programming, Alex'es style:
  // getTasks().push(task);

  const tasks = getTasks();
  tasks.push(task);

  saveTasks(tasks);
}

// save tasks array to the localStorage
function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// retrieve - get tasks as JSON object
function getTasks() {
  const tasks = localStorage.getItem("tasks");
  if (tasks) {
    // DO NOT make unnecessary IO operations.
    // return JSON.parse(localStorage.getItem("tasks"));
    return JSON.parse(tasks);
  }
  return [];
}

// delete
function deleteTask(offset) {
  const tasks = getTasks();
  tasks.splice(offset, 1);
  saveTasks(tasks);

  /*
  const array = [1,2,3,4,5];
  array.splice(2,2);
  [1,2,5]
  array.splice(2,1);
  [1,2,4,5]
  array.splice(1,2);
  [1,4,5]
  */
}
