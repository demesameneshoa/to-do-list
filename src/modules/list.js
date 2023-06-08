class Task {
  constructor(description, completed = false, taskindex) {
    this.description = description;
    this.completed = completed;
    this.taskindex = taskindex;
  }
}
export default Task;